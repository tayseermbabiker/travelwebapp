import { NextRequest, NextResponse } from 'next/server';

// Brevo API endpoint
const BREVO_API_URL = 'https://api.brevo.com/v3/contacts';

interface SubscribeRequest {
  email: string;
  tags: string[];
  source: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: SubscribeRequest = await request.json();
    const { email, tags, source } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Check if Brevo API key is configured
    const brevoApiKey = process.env.BREVO_API_KEY;

    if (!brevoApiKey) {
      // Log for debugging but still return success
      // This allows the app to work in development without Brevo
      console.log('BREVO_API_KEY not configured. Email capture logged locally.');
      console.log('Email:', email);
      console.log('Tags:', tags);
      console.log('Source:', source);

      return NextResponse.json({
        success: true,
        message: 'Email captured (Brevo not configured)',
      });
    }

    // Prepare attributes from tags
    const attributes: Record<string, string> = {
      SOURCE: source,
      SIGNUP_DATE: new Date().toISOString(),
    };

    // Parse tags into attributes
    tags.forEach(tag => {
      const [key, value] = tag.split(':');
      if (key && value) {
        // Convert tag key to uppercase for Brevo attribute
        const attributeKey = key.toUpperCase().replace(/-/g, '_');

        // If attribute already exists (multiple values), append
        if (attributes[attributeKey]) {
          attributes[attributeKey] += `, ${value}`;
        } else {
          attributes[attributeKey] = value;
        }
      }
    });

    // Prepare list IDs (you can configure these in env variables)
    const listIds = process.env.BREVO_LIST_IDS
      ? process.env.BREVO_LIST_IDS.split(',').map(id => parseInt(id.trim()))
      : [];

    // Create/update contact in Brevo
    const brevoPayload = {
      email,
      attributes,
      listIds: listIds.length > 0 ? listIds : undefined,
      updateEnabled: true, // Update if contact exists
    };

    const brevoResponse = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': brevoApiKey,
      },
      body: JSON.stringify(brevoPayload),
    });

    // Handle Brevo response
    if (brevoResponse.status === 201 || brevoResponse.status === 204) {
      // Success - new contact created or existing updated
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed',
      });
    }

    // Handle duplicate/existing contact (still a success case)
    if (brevoResponse.status === 400) {
      const errorData = await brevoResponse.json();

      if (errorData.code === 'duplicate_parameter') {
        // Contact already exists - update their attributes
        const updateResponse = await fetch(`${BREVO_API_URL}/${encodeURIComponent(email)}`, {
          method: 'PUT',
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'api-key': brevoApiKey,
          },
          body: JSON.stringify({
            attributes,
            listIds: listIds.length > 0 ? listIds : undefined,
          }),
        });

        if (updateResponse.ok || updateResponse.status === 204) {
          return NextResponse.json({
            success: true,
            message: 'Contact updated',
          });
        }
      }

      console.error('Brevo API error:', errorData);
      return NextResponse.json({
        success: true, // Still return success to not block user
        message: 'Email captured',
      });
    }

    // Log unexpected responses
    const responseText = await brevoResponse.text();
    console.error('Unexpected Brevo response:', brevoResponse.status, responseText);

    // Return success anyway to not block user experience
    return NextResponse.json({
      success: true,
      message: 'Email captured',
    });

  } catch (error) {
    console.error('Subscribe API error:', error);

    // Return success to not block user experience
    // The email was already saved locally on the client side
    return NextResponse.json({
      success: true,
      message: 'Email captured locally',
    });
  }
}
