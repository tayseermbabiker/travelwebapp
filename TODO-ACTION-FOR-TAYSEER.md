# TODO Action Plan for Tayseer

## Email Capture System - Setup Required

### 1. Set Up Brevo Account
- Go to https://www.brevo.com and create an account (free tier available)
- Navigate to SMTP & API > API Keys
- Generate a new API key

### 2. Configure Environment Variables
Add to your `.env.local` file:
```
BREVO_API_KEY=your_api_key_here
BREVO_LIST_IDS=1,2,3
```

**Note:** `BREVO_LIST_IDS` is optional. If you want subscribers added to specific lists, create lists in Brevo first and add their IDs here (comma-separated).

### 3. Create Brevo Contact Attributes
In Brevo, go to Contacts > Settings > Contact Attributes and create these custom attributes:
- `SOURCE` (Text) - tracks where email was captured (pdf_download, whatsapp_share, generation_limit)
- `SIGNUP_DATE` (Date) - when they signed up
- `DESTINATION` (Text) - destinations they searched for
- `TRAVEL_STYLE` (Text) - solo, couple, family, friends, etc.
- `BUDGET` (Text) - budget, mid-range, premium, luxury
- `INTEREST` (Text) - food, culture, adventure, etc.
- `EXPERIENCE` (Text) - budget, balanced, premium, luxury

### 4. Set Up Email Sequences (For Affiliate Revenue)
Create automation workflows in Brevo:

**Sequence 1: Welcome Series**
- Trigger: New contact added
- Email 1 (Immediate): Welcome + link to their itinerary
- Email 2 (Day 2): Travel tips for their destination
- Email 3 (Day 4): Hotel deals for their destination (affiliate)
- Email 4 (Day 7): Experience/tour recommendations (affiliate)

**Sequence 2: Destination-Specific**
- Use the `DESTINATION` attribute to send targeted deals
- Partner with Booking.com, GetYourGuide, Viator, etc.

### 5. Affiliate Partnerships to Set Up
- Booking.com Affiliate Program
- GetYourGuide Partner Program
- Viator Affiliate Program
- Skyscanner Affiliate Program
- World Nomads (travel insurance)

---

## Current Implementation Summary

### What's Already Built:

| Action | Gate |
|--------|------|
| Generations 1-3 | Free, no signup |
| Generation 4+ | Email required |
| PDF download | Email required (always) |
| WhatsApp share | Email required (always) |
| Copy to clipboard | Email required (always) |

### Tags Being Captured:
- `destination:dubai` (from user input)
- `travel_style:solo` / `couple` / `family` / `friends` / `business` / `group`
- `budget:budget` / `mid-range` / `premium` / `luxury`
- `interest:food` / `culture` / `adventure` / `wildlife` / `beach` / `wellness` / `nightlife` / `hidden` / `art` / `sustainable`
- `experience:budget` / `balanced` / `premium` / `luxury`

### Files Created:
1. `lib/user-tracking.ts` - localStorage tracking
2. `components/ui/EmailCaptureModal.tsx` - email capture modal
3. `app/api/subscribe/route.ts` - Brevo API integration

### Files Modified:
1. `components/itinerary/DownloadPDFButton.tsx` - gated PDF/share
2. `app/page.tsx` - gated generation 4+

---

## Testing Checklist

- [ ] Generate 3 itineraries - should be free
- [ ] Try 4th generation - should show email modal
- [ ] Enter email on 4th generation - should unlock unlimited
- [ ] Click Download PDF - should require email
- [ ] Click WhatsApp Share - should require email
- [ ] Check localStorage for `roamovo_user_data` - should have email and tags
- [ ] Check Brevo dashboard - contact should appear with attributes
