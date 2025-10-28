import jsPDF from 'jspdf';

interface PDFItinerary {
  destination: string;
  dateRange: { start: string; end: string };
  companionType?: string;
  interests?: string[];
  budgetAllocation?: any;
  days: any[];
  hotel?: any;
}

export function generateItineraryPDF(data: PDFItinerary) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  let yPos = 20;
  const leftMargin = 15;
  const rightMargin = 195;
  const lineHeight = 7;
  const pageHeight = 280;

  // Helper function to check if we need a new page
  const checkPageBreak = (requiredSpace: number) => {
    if (yPos + requiredSpace > pageHeight) {
      doc.addPage();
      yPos = 20;
    }
  };

  // Helper function to add text with wrapping
  const addText = (text: string, x: number, fontSize: number, style: 'normal' | 'bold' = 'normal') => {
    doc.setFont('helvetica', style);
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, rightMargin - x);
    doc.text(lines, x, yPos);
    yPos += lines.length * lineHeight;
  };

  // HEADER - Brand and Title
  doc.setFillColor(20, 184, 166); // Teal brand color
  doc.rect(0, 0, 210, 40, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(28);
  doc.text('WANDER', leftMargin, 15);

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('AI-Powered Travel Itinerary', leftMargin, 22);

  // Trip Title
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text(data.destination, leftMargin, 32);

  // Reset text color
  doc.setTextColor(0, 0, 0);
  yPos = 50;

  // TRIP OVERVIEW SECTION
  doc.setFillColor(245, 245, 245);
  doc.rect(leftMargin, yPos - 5, 180, 30, 'F');

  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Trip Overview', leftMargin + 5, yPos);
  yPos += 8;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');

  // Dates
  const startDate = new Date(data.dateRange.start).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric'
  });
  const endDate = new Date(data.dateRange.end).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric'
  });
  doc.text(`Dates: ${startDate} - ${endDate}`, leftMargin + 5, yPos);
  yPos += 6;

  // Companion Type
  if (data.companionType) {
    const companionDisplay = data.companionType.charAt(0).toUpperCase() + data.companionType.slice(1);
    doc.text(`Traveling: ${companionDisplay}`, leftMargin + 5, yPos);
    yPos += 6;
  }

  // Interests
  if (data.interests && data.interests.length > 0) {
    doc.text(`Interests: ${data.interests.join(', ')}`, leftMargin + 5, yPos);
    yPos += 6;
  }

  yPos += 10;

  // ACCOMMODATION SECTION
  if (data.hotel) {
    checkPageBreak(40);

    doc.setFillColor(20, 184, 166);
    doc.rect(leftMargin, yPos - 5, 180, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('Accommodation', leftMargin + 5, yPos);
    doc.setTextColor(0, 0, 0);
    yPos += 12;

    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(data.hotel.name, leftMargin + 5, yPos);
    yPos += 6;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`${data.hotel.stars} Stars - Rating: ${data.hotel.rating}/10`, leftMargin + 5, yPos);
    yPos += 6;

    if (data.hotel.location) {
      doc.text(`Location: ${data.hotel.location}`, leftMargin + 5, yPos);
      yPos += 6;
    }

    if (data.hotel.features && data.hotel.features.length > 0) {
      doc.text(`Amenities: ${data.hotel.features.join(', ')}`, leftMargin + 5, yPos);
      yPos += 6;
    }

    doc.text(`Price: $${data.hotel.pricePerNight}/night`, leftMargin + 5, yPos);
    yPos += 12;
  }

  // DAILY ITINERARY SECTION
  data.days.forEach((day, index) => {
    checkPageBreak(50);

    // Check if this is a travel day
    const isTravelDay = day.isTravelDay ||
      (day.morning?.activity?.category === 'transport') ||
      (day.morning?.activity?.category === 'travel');

    // Day Header (different color for travel days)
    if (isTravelDay) {
      doc.setFillColor(251, 191, 36); // Amber for travel days
      doc.rect(leftMargin, yPos - 5, 180, 8, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text(`🚄 TRAVEL DAY - ${day.date}`, leftMargin + 5, yPos);

      if (day.fromCity && day.toCity) {
        doc.setFontSize(9);
        doc.text(`${day.fromCity} → ${day.toCity}`, leftMargin + 5, yPos + 5);
        yPos += 5;
      }
    } else {
      doc.setFillColor(20, 184, 166); // Teal for regular days
      doc.rect(leftMargin, yPos - 5, 180, 8, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text(`Day ${day.day} - ${day.date}${day.city ? ` - ${day.city}` : ''}`, leftMargin + 5, yPos);
    }

    doc.setTextColor(0, 0, 0);
    yPos += 12;

    // Day Theme
    if (day.theme) {
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.text(`Theme: ${day.theme}`, leftMargin + 5, yPos);
      yPos += 8;
    }

    // Morning Activity
    if (day.morning?.activity) {
      checkPageBreak(30);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text(`Morning (${day.morning.time})`, leftMargin + 5, yPos);
      yPos += 5;

      doc.setFont('helvetica', 'bold');
      doc.text(day.morning.activity.name, leftMargin + 10, yPos);
      yPos += 5;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      const morningDesc = doc.splitTextToSize(day.morning.activity.description, 160);
      doc.text(morningDesc, leftMargin + 10, yPos);
      yPos += morningDesc.length * 4;

      doc.text(`Duration: ${day.morning.activity.duration} | Price: $${day.morning.activity.price}`, leftMargin + 10, yPos);
      yPos += 7;
    }

    // Lunch
    if (day.lunch?.restaurant) {
      checkPageBreak(20);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text(`Lunch (${day.lunch.time})`, leftMargin + 5, yPos);
      yPos += 5;

      doc.setFont('helvetica', 'normal');
      doc.text(`${day.lunch.restaurant.name} - ${day.lunch.restaurant.cuisine}`, leftMargin + 10, yPos);
      yPos += 5;

      doc.setFontSize(9);
      doc.text(`Price: ~$${day.lunch.restaurant.price} per person`, leftMargin + 10, yPos);
      yPos += 7;
    }

    // Afternoon Activity
    if (day.afternoon?.activity) {
      checkPageBreak(30);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text(`Afternoon (${day.afternoon.time})`, leftMargin + 5, yPos);
      yPos += 5;

      doc.setFont('helvetica', 'bold');
      doc.text(day.afternoon.activity.name, leftMargin + 10, yPos);
      yPos += 5;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      const afternoonDesc = doc.splitTextToSize(day.afternoon.activity.description, 160);
      doc.text(afternoonDesc, leftMargin + 10, yPos);
      yPos += afternoonDesc.length * 4;

      doc.text(`Duration: ${day.afternoon.activity.duration} | Price: $${day.afternoon.activity.price}`, leftMargin + 10, yPos);
      yPos += 7;
    }

    // Evening Activity
    if (day.evening?.activity) {
      checkPageBreak(30);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text(`Evening (${day.evening.time})`, leftMargin + 5, yPos);
      yPos += 5;

      doc.setFont('helvetica', 'bold');
      doc.text(day.evening.activity.name, leftMargin + 10, yPos);
      yPos += 5;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      const eveningDesc = doc.splitTextToSize(day.evening.activity.description, 160);
      doc.text(eveningDesc, leftMargin + 10, yPos);
      yPos += eveningDesc.length * 4;

      doc.text(`Duration: ${day.evening.activity.duration} | Price: $${day.evening.activity.price}`, leftMargin + 10, yPos);
      yPos += 7;
    }

    // Daily Budget
    if (day.dailyTotal) {
      checkPageBreak(15);
      doc.setFillColor(245, 245, 245);
      doc.rect(leftMargin + 5, yPos - 3, 170, 10, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.text(`Daily Total: $${day.dailyTotal.total} (Activities: $${day.dailyTotal.activities}, Food: $${day.dailyTotal.food})`, leftMargin + 10, yPos + 3);
      yPos += 15;
    }

    yPos += 5; // Space between days
  });

  // BUDGET SUMMARY (if available)
  if (data.budgetAllocation) {
    checkPageBreak(50);

    doc.setFillColor(20, 184, 166);
    doc.rect(leftMargin, yPos - 5, 180, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('Budget Summary', leftMargin + 5, yPos);
    doc.setTextColor(0, 0, 0);
    yPos += 12;

    doc.setFontSize(11);
    doc.text(`Total Budget: $${data.budgetAllocation.totalBudget}`, leftMargin + 5, yPos);
    yPos += 10;

    if (data.budgetAllocation.breakdown) {
      const breakdown = Array.isArray(data.budgetAllocation.breakdown)
        ? data.budgetAllocation.breakdown
        : Object.entries(data.budgetAllocation.breakdown).map(([key, value]: [string, any]) => ({
            category: key,
            amount: value.amount || value,
            percentage: value.percentage || 0,
          }));

      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text('Category', leftMargin + 10, yPos);
      doc.text('Amount', leftMargin + 80, yPos);
      doc.text('Percentage', leftMargin + 130, yPos);
      yPos += 6;

      doc.setFont('helvetica', 'normal');
      breakdown.forEach((item: any) => {
        checkPageBreak(10);
        const categoryName = item.category.charAt(0).toUpperCase() + item.category.slice(1);
        doc.text(categoryName, leftMargin + 10, yPos);
        doc.text(`$${item.amount}`, leftMargin + 80, yPos);
        doc.text(`${item.percentage}%`, leftMargin + 130, yPos);
        yPos += 6;
      });
    }
  }

  // FOOTER
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(128, 128, 128);
    doc.text(
      `Generated by Wander - Page ${i} of ${pageCount}`,
      105,
      290,
      { align: 'center' }
    );
    doc.text(
      new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      leftMargin,
      290
    );
  }

  return doc;
}

export function downloadPDF(data: PDFItinerary, filename?: string) {
  const doc = generateItineraryPDF(data);
  const sanitizedDestination = data.destination.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  const defaultFilename = `wander_itinerary_${sanitizedDestination}.pdf`;
  doc.save(filename || defaultFilename);
}
