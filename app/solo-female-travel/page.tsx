'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import RelatedGuides from '@/components/pillar/RelatedGuides';
import PillarCTA from '@/components/pillar/PillarCTA';
import TableOfContents from '@/components/pillar/TableOfContents';

export default function SoloFemaleTravelPage() {
  const [expandedDestination, setExpandedDestination] = useState<number | null>(null);

  const toggleDestination = (index: number) => {
    setExpandedDestination(expandedDestination === index ? null : index);
  };

  const destinations = [
    {
      name: "United Arab Emirates (Dubai/Abu Dhabi)",
      safetyRating: "99/100",
      safetyBreakdown: {
        street: 99,
        transportation: 99,
        nightlife: 98,
        healthcare: 99,
        tourist: 99
      },
      whyThisDestination: "The United Arab Emirates ranks as the world\'s number one destination for solo female travelers in 2025. Dubai and Abu Dhabi have exceptionally low crime rates, advanced infrastructure, and strong cultural respect for women. Special provisions include women-only metro cabins, female-driven taxis (Pink Taxis), and well-lit secure public spaces throughout. Women can explore safely at any hour of day or night. The multicultural community offers support and services in multiple languages. Law enforcement is highly effective. Dress modestly in public (cover shoulders and knees) and behave respectfully. These are legal requirements, not suggestions. For women seeking a confident, empowered solo travel experience, the UAE sets the global standard.",
      monthlyCost: {
        accommodation: "$1,200-$2,000 (hotel $80-$150/night, hostels limited)",
        food: "$500-$800",
        transportation: "$150 (metro efficient and cheap)",
        activities: "$400-$600",
        total: "$2,250-$3,400/month"
      },
      accommodations: [
        "Rove Hotels: Modern, safe, central locations, affordable luxury",
        "Premier Inn Dubai: Budget-friendly, safe, multiple locations",
        "Five Palm Jumeirah: Luxury option, women-friendly, excellent service",
        "Look for: Hotels near metro stations, verified reviews from solo women"
      ],
      transportation: {
        bestOption: "Dubai Metro (women-only cabins available), taxis, Uber/Careem",
        safety: "Exceptionally safe, women-only metro cars, Pink Taxis (female drivers)",
        cost: "Metro pass $30-50/month, taxis affordable",
        note: "Women-only metro cabins are pink-marked. Pink Taxis available for female passengers."
      },
      community: {
        facebook: "Yes, active expat and solo female groups (50K+ members)",
        meetups: "Regular brunches, ladies nights, networking events",
        tours: "Desert safaris, city tours, cultural experiences",
        size: "Very large, diverse international community"
      },
      cultural: {
        dressCode: "Modest required (cover shoulders and knees in public, this is law)",
        genderDynamics: "Strong cultural respect for women, zero tolerance for harassment",
        acceptance: "Very welcoming to solo female travelers, multicultural environment",
        nightlife: "Safe, upscale venues, ladies nights common (free entry/drinks for women)"
      },
      healthcare: {
        quality: "World-class, state-of-the-art facilities",
        access: "Excellent, English widely spoken, many international hospitals",
        womensHealth: "Full access to healthcare, pharmacies everywhere",
        cost: "Can be expensive, travel insurance recommended"
      },
      bestSeason: "October-April: Pleasant weather (20-30C). Avoid May-September (extreme heat 40C+).",
      whyLoveIt: "The UAE sets the global standard for solo female safety. Women-only metro cars, female-driven taxis, zero tolerance for harassment, and 24/7 safety make it unmatched. The infrastructure is world-class. Ladies nights offer free entry and drinks at upscale venues. The multicultural environment means you will meet women from every country. Law enforcement is swift and effective. If safety is your top priority, the UAE is the answer.",
      influencers: "Lexie Alford, many luxury travel influencers"
    },
    {
      name: "Iceland (Reykjavik)",
      safetyRating: "99/100",
      safetyBreakdown: {
        street: 99,
        transportation: 98,
        nightlife: 97,
        healthcare: 98,
        tourist: 99
      },
      whyThisDestination: "Iceland is the gold standard. Genuinely safe. Women walk alone at night without fear. No street harassment. High gender equality. Nature is insane. The only downside: cost.",
      monthlyCost: {
        accommodation: "$1,400 (hostel female dorm $65/night)",
        food: "$500",
        transportation: "$350",
        activities: "$400",
        total: "$2,650/month"
      },
      accommodations: [
        "KEX Hostel: $65/night, female dorms, 24/7 staff, social atmosphere, safe vibe",
        "Guesthouse Aurora: $80/night, small guesthouse, intimate feel, quiet neighborhood"
      ],
      transportation: {
        bestOption: "Public bus or organized day tours",
        safety: "Completely safe. No concerns.",
        cost: "Bus pass $50/month",
        note: "Uber not available. Book tours through reputable companies."
      },
      community: {
        facebook: "Yes, active group (15K+ members)",
        meetups: "Yes, hostel events regularly",
        tours: "Yes, many all-female adventure tours",
        size: "Large community"
      },
      cultural: {
        dressCode: "Relaxed (wear what you want)",
        genderDynamics: "Least harassment of any destination, extreme gender equality",
        acceptance: "Highly welcoming to solo women",
        nightlife: "Women go out alone freely, no concerns"
      },
      healthcare: {
        quality: "High (world-class)",
        access: "Easy",
        womensHealth: "Contraception and period products widely available, pharmacy access excellent",
        cost: "Expensive but quality"
      },
      bestSeason: "May-September: Midnight sun, perfect weather, best hiking conditions. Winter: Dark but stunning (Northern lights), fewer tourists",
      whyLoveIt: "Safety is absolute. Empowerment is real. Nature is unmatched. You can be completely alone (literally on volcanic landscapes) and still be in a developed, safe country. Zero street harassment. Zero judgment. Perfect.",
      influencers: "Kristin Addis, Young Adventuress"
    },
    {
      name: "Japan (Tokyo/Kyoto)",
      safetyRating: "96/100",
      safetyBreakdown: {
        street: 97,
        transportation: 94,
        nightlife: 94,
        healthcare: 94,
        tourist: 98
      },
      whyThisDestination: "Japan has extremely low violent crime and remains one of the safest countries for solo female travelers. However, there are privacy concerns worth knowing. Issues like covert photography and groping on crowded trains (called chikan) are documented. Japan has responded with women-only train cars during rush hours and mandatory camera shutter sounds on all phones. Violent crime is virtually nonexistent, but stay aware of personal boundaries in packed public transport. Overall, Japan is excellent for solo female travel. Just stay alert in rush hour crowds.",
      monthlyCost: {
        accommodation: "$900-$1,200 (hostel dorm $40-$65/night)",
        food: "$500+ (restaurants cheap, quality high)",
        transportation: "$50-$100",
        activities: "$300",
        total: "$2,100-$2,600/month"
      },
      accommodations: [
        "Bunka Hostel Tokyo: $45/night, female dorms, design-focused, excellent reviews",
        "Sakura Hostel: Women-owned, female dorms, social atmosphere",
        "Look for: Women-only floors, female staff, good reviews from solo women"
      ],
      transportation: {
        bestOption: "Public transit (incredibly safe)",
        safety: "Extremely safe, well-lit, organized",
        cost: "IC card $50-$100 for month",
        note: "Women-Only Cars: Available on most trains/subways (marked in pink)"
      },
      community: {
        facebook: "Yes, very active (30K+ members)",
        meetups: "Regular meetups in Tokyo, Kyoto, Osaka",
        tours: "Women's-specific tours available, Language Exchanges: Popular social way to meet people",
        size: "Large, very active community"
      },
      cultural: {
        dressCode: "Moderate (no extreme revealing)",
        genderDynamics: "Respectful, little-to-no street harassment",
        acceptance: "Highly welcoming, curious about solo female visitors",
        nightlife: "Safe to go out alone, but avoid extremely crowded bars late night"
      },
      healthcare: {
        quality: "World-class",
        access: "Excellent, English-speaking hospitals in major cities",
        womensHealth: "Contraceptives available OTC, period products everywhere",
        cost: "Affordable"
      },
      bestSeason: "March-May (Spring): Cherry blossoms, perfect weather, crowds manageable. September-November (Autumn): Clear skies, comfortable, fewer tourists",
      whyLoveIt: "It's safe. The transit system is built for women. Everything is clean and organized. You can navigate as a non-Japanese speaker. No street harassment. The culture respects solo female travelers. Food is incredible. Technology makes everything easy. It feels like a developed country but costs less than Europe.",
      influencers: "Girl vs Globe (Sabina Trojanova), Alexa West"
    },
    {
      name: "Switzerland (Zurich/Lucerne)",
      safetyRating: "97/100",
      safetyBreakdown: {
        street: 98,
        transportation: 98,
        nightlife: 95,
        healthcare: 97,
        tourist: 99
      },
      whyThisDestination: "Pristine. Safe. Organized. Expensive. But if you have the budget, Switzerland is perfect for solo women. Zero crime. Incredible public transit. Women go out alone without concern. Mountains are stunning.",
      monthlyCost: {
        accommodation: "$900-$1,200 (hostel $40-$60/night)",
        food: "$700+",
        transportation: "$100+",
        activities: "$400",
        total: "$2,100-$2,600+/month (Switzerland is expensive. Budget accordingly.)"
      },
      accommodations: [
        "Youth Hostel Zurich: Female dorms, central location, safe",
        "Lucerne Youth Hostel: By the lake, female dorms, social",
        "Look for: Verified reviews from solo women, staff presence, central locations"
      ],
      transportation: {
        bestOption: "Public transit (trains, trams, buses)",
        safety: "Extremely safe, frequent, reliable",
        cost: "Swiss Travel Pass (expensive) or regional tickets",
        note: "Everything is walkable in city centers"
      },
      community: {
        facebook: "Yes, active European solo female groups",
        meetups: "Regular meetups in major cities",
        tours: "Hiking tours, city tours (many female-friendly)",
        size: "Medium community (attracted by safety/quality)"
      },
      cultural: {
        dressCode: "Moderate-relaxed",
        genderDynamics: "Extremely respectful, no harassment",
        acceptance: "Very welcoming, high gender equality",
        nightlife: "Safe for women to go out alone"
      },
      healthcare: {
        quality: "World-class, best in world",
        access: "Easy, English-speaking",
        womensHealth: "Full access to contraception, period products, healthcare",
        cost: "Very expensive (plan for high costs)"
      },
      bestSeason: "May-June & September-October: Perfect weather (15-22°C), hiking ideal, fewer tourists",
      whyLoveIt: "It's the safest place on Earth. You can walk alone at 2 AM with zero concern. The infrastructure is perfect. The scenery is insane. The only downside is cost. But if you have budget, Switzerland is unbeatable for solo female safety.",
      influencers: "Adventurous Kate"
    },
    {
      name: "Singapore",
      safetyRating: "98/100",
      safetyBreakdown: {
        street: 98,
        transportation: 99,
        nightlife: 96,
        healthcare: 97,
        tourist: 99
      },
      whyThisDestination: "Modern. Safe. Clean. Efficient. English-speaking. Strict laws (which benefit women). Asian city with Western infrastructure. Diverse population. Excellent healthcare.",
      monthlyCost: {
        accommodation: "$900-$1,200 (hostel $60-$110/night)",
        food: "$450",
        transportation: "$50",
        activities: "$200",
        total: "$1,800-$2,000/month"
      },
      accommodations: [
        "YWCA Singapore: Female-only option, affordable, safe",
        "Social Hostels: Selina, other chains have female dorms",
        "Look for: Female-only dorms, verified reviews, central locations"
      ],
      transportation: {
        bestOption: "Public transit (trains, buses), Uber/Grab",
        safety: "Exceptionally safe, lit, frequent",
        cost: "Transit card $50/month",
        note: "Everything is air-conditioned and organized"
      },
      community: {
        facebook: "Yes, large Asian solo female travelers group",
        meetups: "Regular meetups in Clarke Quay, Marina Bay",
        tours: "Cultural tours, food tours, many led by women",
        size: "Large (Asia's safest city attracts women)"
      },
      cultural: {
        dressCode: "Moderate (no extreme revealing in temples/mosques)",
        genderDynamics: "Respectful, multicultural, little harassment",
        acceptance: "Highly welcoming to solo female travelers",
        nightlife: "Safe for women to go out, bar safety high"
      },
      healthcare: {
        quality: "Top-tier, world-class",
        access: "Excellent, English-speaking",
        womensHealth: "Full access to all contraception, period products",
        cost: "Accessible"
      },
      bestSeason: "February-April: Dry season, events, comfortable",
      whyLoveIt: "It's safe, modern, and efficient. You can navigate solo easily. Food is incredible. Cost is reasonable for developed city. The culture is respectful. Strict laws mean safety. English is spoken everywhere. It's a perfect introduction to Asia for women hesitant about solo travel.",
      influencers: "Lexie Alford"
    },
    {
      name: "Denmark (Copenhagen)",
      safetyRating: "96/100",
      safetyBreakdown: {
        street: 97,
        transportation: 98,
        nightlife: 95,
        healthcare: 96,
        tourist: 98
      },
      whyThisDestination: "Scandinavia represents peak gender equality. Denmark is safe, walkable, bikes everywhere (mode of transport), excellent public services, design-focused culture, strong female community.",
      monthlyCost: {
        accommodation: "$700-$1,000 (hostel $35-$60/night)",
        food: "$350",
        transportation: "$70",
        activities: "$200",
        total: "$1,320-$1,620/month (Most affordable Scandinavian option)"
      },
      accommodations: [
        "Urban House Copenhagen: Female dorms, social, central",
        "Airbnb: Many women-only rooms available, verified hosts",
        "Look for: Female-only options, bike-friendly locations, central neighborhoods"
      ],
      transportation: {
        bestOption: "Bikes (everyone bikes), public transit, walking",
        safety: "Completely safe, frequent transit, well-lit",
        cost: "Bike rental $10/day or buy used ($50)",
        note: "Copenhagen is incredibly walkable and bikeable"
      },
      community: {
        facebook: "Yes, Nordic/European solo female groups",
        meetups: "Regular events in social neighborhoods (Vesterbro, Nørrebro)",
        tours: "Walking tours, food tours, cycling tours",
        size: "Medium-large (Scandinavia attracts quality-of-life travelers)"
      },
      cultural: {
        dressCode: "Relaxed (wear what you want)",
        genderDynamics: "Extreme equality, virtually no harassment",
        acceptance: "Highly welcoming",
        nightlife: "Women go out alone freely"
      },
      healthcare: {
        quality: "Excellent",
        access: "Easy, English-speaking",
        womensHealth: "Full access to contraception, period products",
        cost: "Moderate (expensive but high quality)"
      },
      bestSeason: "May-September: Long days, pleasant weather (15-22°C), outdoor café culture",
      whyLoveIt: "It's Scandinavian safety and equality. It's bikeable. The culture is female-friendly. There's a strong social scene. Cost is affordable for Northern Europe. The design culture is inspiring. Women solo travel here without second thought.",
      influencers: "Girl vs Globe (Sabina Trojanova)"
    },
    {
      name: "Portugal (Lisbon/Porto)",
      safetyRating: "94/100",
      safetyBreakdown: {
        street: 94,
        transportation: 93,
        nightlife: 92,
        healthcare: 92,
        tourist: 95
      },
      whyThisDestination: "Affordable Europe, strong nomad/solo female community, safe neighborhoods, friendly culture, excellent seafood. Perfect for budget-conscious solo female travelers seeking European charm without the high costs.",
      monthlyCost: {
        accommodation: "$600-$900 (hostel $25-$45/night)",
        food: "$300",
        transportation: "$40",
        activities: "$150",
        total: "$1,200-$1,600/month"
      },
      accommodations: [
        "The Independente Hostel: Female dorms, rooftop terrace, social atmosphere",
        "Porto Downtown Hostel: Women-friendly, central location, safe",
        "Airbnb: Many female hosts offering rooms to solo women",
        "Look for: Neighborhoods like Alfama, Baixa (Lisbon), Ribeira (Porto)"
      ],
      transportation: {
        bestOption: "Public transit (metro, trams), walking",
        safety: "Safe, especially in tourist areas",
        cost: "Transit pass $40/month",
        note: "Historic trams are charming but watch belongings (pickpockets)"
      },
      community: {
        facebook: "Yes, large digital nomad and solo female groups (20K+ members)",
        meetups: "Very active, regular meetups in Lisbon and Porto",
        tours: "Walking tours, food tours, day trips",
        size: "Large, growing community"
      },
      cultural: {
        dressCode: "Relaxed (wear what you want)",
        genderDynamics: "Respectful, minimal harassment, friendly locals",
        acceptance: "Very welcoming to solo female travelers",
        nightlife: "Safe in main areas, vibrant bar scene in Bairro Alto"
      },
      healthcare: {
        quality: "Good, European standard",
        access: "Easy, pharmacies everywhere",
        womensHealth: "Full access to contraception, period products widely available",
        cost: "Affordable"
      },
      bestSeason: "March-May & September-October: Perfect weather (18-24°C), fewer tourists, ideal for exploring",
      whyLoveIt: "Affordable Europe with incredible food, wine, and culture. Strong digital nomad and solo female community. Safe neighborhoods. Friendly locals. Beautiful architecture. Easy to meet people. Perfect stepping stone for first-time solo female travelers in Europe.",
      influencers: "Kristin Addis, Alyssa Ramos"
    },
    {
      name: "Ireland (Dublin/Cork)",
      safetyRating: "93/100",
      safetyBreakdown: {
        street: 93,
        transportation: 94,
        nightlife: 91,
        healthcare: 94,
        tourist: 94
      },
      whyThisDestination: "English-speaking, Irish friendliness, safe pubs, active social scene. Perfect for solo women who want easy cultural immersion without language barriers.",
      monthlyCost: {
        accommodation: "$800-$1,100 (hostel $40-$60/night)",
        food: "$400",
        transportation: "$80",
        activities: "$250",
        total: "$1,400-$1,800/month"
      },
      accommodations: [
        "Generator Dublin: Female dorms, social atmosphere, central",
        "Sheila's Hostel Cork: Budget-friendly, safe, female dorms",
        "Airbnb: Many Irish hosts welcoming solo women",
        "Look for: Temple Bar area (Dublin), City Centre (Cork)"
      ],
      transportation: {
        bestOption: "Public buses, walking, trains for intercity",
        safety: "Safe, well-lit in cities",
        cost: "Leap Card $80/month",
        note: "Dublin is walkable, Cork even more so"
      },
      community: {
        facebook: "Yes, active expat and solo traveler groups",
        meetups: "Regular pub meetups, hiking groups, cultural events",
        tours: "Literary tours, pub tours, coastal tours",
        size: "Large community"
      },
      cultural: {
        dressCode: "Relaxed (casual, layer for weather)",
        genderDynamics: "Respectful, pub culture is inclusive",
        acceptance: "Very welcoming, Irish hospitality is real",
        nightlife: "Safe, pub culture is social and friendly"
      },
      healthcare: {
        quality: "Good, European standard",
        access: "Easy, English-speaking",
        womensHealth: "Full access to contraception (recently liberalized), period products available",
        cost: "Moderate"
      },
      bestSeason: "May-September: Warmest weather (15-20°C), longest days, greenest landscapes. Be prepared for rain year-round.",
      whyLoveIt: "English-speaking removes anxiety. Irish people are genuinely friendly and chatty. Pub culture makes meeting people easy. Safe cities. Beautiful countryside. Rich literary and cultural history. Solo women feel welcomed and included.",
      influencers: "Adventurous Kate, Young Adventuress"
    },
    {
      name: "New Zealand (Auckland/Christchurch)",
      safetyRating: "95/100",
      safetyBreakdown: {
        street: 95,
        transportation: 94,
        nightlife: 93,
        healthcare: 95,
        tourist: 96
      },
      whyThisDestination: "Adventure capital, incredibly safe, outdoor culture, English-speaking, supportive female community. Perfect for solo women seeking nature-based adventures in a safe environment.",
      monthlyCost: {
        accommodation: "$900-$1,400 (hostel $45-$70/night)",
        food: "$400",
        transportation: "$200 (car rental for adventures)",
        activities: "$500 (hiking, adventure sports)",
        total: "$1,800-$2,400/month"
      },
      accommodations: [
        "Base Auckland: Female dorms, social, safe",
        "Jailhouse Accommodation Christchurch: Unique, female dorms, budget-friendly",
        "BBH Hostels: Network of quality hostels across NZ",
        "Look for: YHA hostels, female-only dorms"
      ],
      transportation: {
        bestOption: "Rental car (freedom to explore), buses for cities",
        safety: "Very safe, roads well-maintained",
        cost: "Car rental $30-50/day, fuel extra",
        note: "Driving on left side, well-signposted"
      },
      community: {
        facebook: "Yes, active backpacker and adventure groups",
        meetups: "Hiking groups, adventure meetups, hostel events",
        tours: "All-female adventure tours available",
        size: "Medium-large, adventure-focused community"
      },
      cultural: {
        dressCode: "Casual, outdoor gear standard",
        genderDynamics: "Respectful, egalitarian, friendly",
        acceptance: "Very welcoming to solo female travelers",
        nightlife: "Safe, relaxed bar culture"
      },
      healthcare: {
        quality: "Excellent, high standard",
        access: "Easy, English-speaking",
        womensHealth: "Full access to all healthcare, contraception, period products",
        cost: "Moderate (can be expensive for tourists)"
      },
      bestSeason: "November-March (Summer): Warmest weather (20-25°C), best for hiking and beaches. December-February busiest. Shoulder seasons (Oct-Nov, Mar-Apr) ideal.",
      whyLoveIt: "Incredibly safe for solo women. Adventure culture is inclusive. Stunning landscapes (mountains, lakes, beaches). Easy to meet other travelers. English-speaking. Supportive community. Perfect infrastructure for solo exploration. Kiwis are friendly and helpful.",
      influencers: "Young Adventuress (Liz Carlson), Kristin Addis"
    },
    {
      name: "South Korea (Seoul)",
      safetyRating: "95/100",
      safetyBreakdown: {
        street: 95,
        transportation: 96,
        nightlife: 93,
        healthcare: 95,
        tourist: 96
      },
      whyThisDestination: "Modern, safe, English increasing, female-friendly, excellent public transit, nightlife safe, cosmopolitan. Perfect blend of affordability, safety, and modern infrastructure.",
      monthlyCost: {
        accommodation: "$600-$900 (hostel $30-$50/night, guesthouses affordable)",
        food: "$300 (Korean food cheap and delicious)",
        transportation: "$50",
        activities: "$200",
        total: "$1,200-$1,600/month"
      },
      accommodations: [
        "Hongdae Women's Guesthouse: Female-only, safe, central to nightlife",
        "Kimchee Hostels: Multiple locations, female dorms, social",
        "Look for: Areas like Hongdae, Gangnam, Itaewon",
        "Guesthouses: Many female-only options available"
      ],
      transportation: {
        bestOption: "Subway (extensive, safe, cheap)",
        safety: "Extremely safe, well-lit, frequent service",
        cost: "T-money card $50/month",
        note: "Korean Transit app essential, some English signage"
      },
      community: {
        facebook: "Yes, growing expat and solo female groups",
        meetups: "Language exchanges, cultural meetups, K-pop events",
        tours: "Food tours, palace tours, DMZ tours",
        size: "Growing community"
      },
      cultural: {
        dressCode: "Moderate (Koreans dress stylishly, avoid extreme revealing)",
        genderDynamics: "Respectful, minimal harassment, improving gender equality",
        acceptance: "Welcoming, curious about foreigners",
        nightlife: "Safe, vibrant (Hongdae, Gangnam), women go out freely"
      },
      healthcare: {
        quality: "Excellent, world-class hospitals",
        access: "Easy, many English-speaking doctors",
        womensHealth: "Full access to healthcare, contraception available, period products everywhere",
        cost: "Affordable"
      },
      bestSeason: "Spring (March-May): Cherry blossoms, mild weather (10-20°C). Fall (September-November): Beautiful foliage, comfortable temperatures. Avoid summer (humid).",
      whyLoveIt: "Incredibly safe for solo women. Modern infrastructure. Affordable for a developed country. Delicious and cheap food. Excellent public transit. K-beauty and fashion culture. Nightlife is vibrant and safe. Tech-forward (Wi-Fi everywhere). Easy to navigate despite language barrier.",
      influencers: "Lexie Alford, Sabina Trojanova"
    },
    {
      name: "Canada (Vancouver/Toronto)",
      safetyRating: "94/100",
      safetyBreakdown: {
        street: 94,
        transportation: 94,
        nightlife: 92,
        healthcare: 96,
        tourist: 95
      },
      whyThisDestination: "English-speaking, diverse, safe, outdoors access, established solo female community, familiar culture. Perfect for solo women seeking nature and city balance in a safe, welcoming environment.",
      monthlyCost: {
        accommodation: "$900-$1,400 (hostel $50-$70/night)",
        food: "$450",
        transportation: "$100",
        activities: "$350",
        total: "$1,800-$2,400/month"
      },
      accommodations: [
        "HI Hostels Vancouver/Toronto: Female dorms, safe, well-managed",
        "Samesun Hostels: Social atmosphere, female-friendly",
        "Airbnb: Many verified hosts, safe neighborhoods",
        "Look for: Downtown areas, transit-accessible neighborhoods"
      ],
      transportation: {
        bestOption: "Public transit (SkyTrain in Vancouver, TTC in Toronto)",
        safety: "Safe, reliable, clean",
        cost: "Monthly pass $100",
        note: "Both cities very walkable, bike-friendly"
      },
      community: {
        facebook: "Yes, large expat and solo traveler communities",
        meetups: "Hiking groups, cultural events, outdoor activities",
        tours: "Nature tours, city tours, adventure excursions",
        size: "Large, English-speaking community"
      },
      cultural: {
        dressCode: "Casual, relaxed (layer for weather)",
        genderDynamics: "Respectful, high gender equality",
        acceptance: "Very welcoming, multicultural, inclusive",
        nightlife: "Safe, diverse options (Gastown, Queen West)"
      },
      healthcare: {
        quality: "Excellent, world-class",
        access: "Good, English-speaking",
        womensHealth: "Full access to all healthcare, contraception, period products",
        cost: "Can be expensive for tourists (travel insurance essential)"
      },
      bestSeason: "May-September: Best weather (15-25°C), outdoor activities peak. Vancouver milder year-round. Toronto has cold winters but beautiful summer.",
      whyLoveIt: "English-speaking removes barriers. Extremely safe and welcoming. Multicultural and inclusive. Access to incredible nature (mountains, lakes, forests). Established solo female community. Familiar Western culture. Easy to meet people. High quality of life. Perfect for outdoor enthusiasts.",
      influencers: "Kristin Addis, Adventurous Kate"
    },
    {
      name: "Slovenia (Ljubljana)",
      safetyRating: "94/100",
      safetyBreakdown: {
        street: 94,
        transportation: 93,
        nightlife: 92,
        healthcare: 93,
        tourist: 95
      },
      whyThisDestination: "Emerging hub, safe, affordable Europe. Hidden gem for solo female travelers seeking European charm without crowds or high costs.",
      monthlyCost: {
        accommodation: "$500-$800 (hostel $25-$40/night)",
        food: "$250",
        transportation: "$40",
        activities: "$150",
        total: "$1,000-$1,200/month"
      },
      accommodations: [
        "Hostel Celica: Unique (former prison), female dorms, artistic, safe",
        "Ljubljana Resort: Camping and glamping options, social",
        "Airbnb: Affordable, many local hosts",
        "Look for: Old Town area, near Prešeren Square"
      ],
      transportation: {
        bestOption: "Walking (Ljubljana is tiny), bikes, buses",
        safety: "Very safe, pedestrian-friendly",
        cost: "Bus pass $40/month (rarely needed)",
        note: "Ljubljana is Europe's most walkable capital"
      },
      community: {
        facebook: "Yes, growing digital nomad and backpacker groups",
        meetups: "Outdoor activities, cultural events, language exchanges",
        tours: "Lake Bled tours, Postojna Cave, Triglav National Park",
        size: "Emerging, growing community"
      },
      cultural: {
        dressCode: "Casual, relaxed",
        genderDynamics: "Respectful, low harassment, friendly",
        acceptance: "Very welcoming to travelers",
        nightlife: "Safe, student-friendly bars, relaxed vibe"
      },
      healthcare: {
        quality: "Good, European standard",
        access: "Easy, some English-speaking staff",
        womensHealth: "Access to contraception, period products available",
        cost: "Affordable"
      },
      bestSeason: "May-September: Warmest weather (18-28°C), best for outdoor activities and lake swimming. Ljubljana has great Christmas markets in winter.",
      whyLoveIt: "Affordable European destination with high safety. Beautiful architecture and nature. Incredibly walkable. Friendly locals. Less touristy than Western Europe. Easy base for exploring Balkans. Growing digital nomad scene. Perfect for budget-conscious solo women.",
      influencers: "Alyssa Ramos, Kristin Addis"
    },
    {
      name: "Rwanda (Kigali)",
      safetyRating: "91/100",
      safetyBreakdown: {
        street: 91,
        transportation: 89,
        nightlife: 87,
        healthcare: 88,
        tourist: 92
      },
      whyThisDestination: "Emerging, safe, unique experience. Rwanda has transformed into one of Africa's safest countries, offering solo female travelers a unique cultural experience with strong safety infrastructure.",
      monthlyCost: {
        accommodation: "$400-$700 (hostel $20-$35/night, guesthouses affordable)",
        food: "$200",
        transportation: "$100",
        activities: "$300 (gorilla trekking is expensive but once-in-lifetime)",
        total: "$1,000-$1,300/month"
      },
      accommodations: [
        "Discover Rwanda Youth Hostel: Budget, social, safe",
        "Kigali Serena Hotel: Higher-end, very safe, women-friendly",
        "Guesthouses: Many female-friendly options in Kigali",
        "Look for: Kimihurura, Nyarutarama neighborhoods"
      ],
      transportation: {
        bestOption: "Motos (motorcycle taxis) with apps, buses, walking in Kigali",
        safety: "Safe in Kigali, use registered moto services",
        cost: "Very affordable, moto rides $1-3",
        note: "Download SafeMotos app for verified drivers"
      },
      community: {
        facebook: "Yes, growing expat and solo traveler groups",
        meetups: "Expat events, cultural exchanges, hiking groups",
        tours: "Gorilla trekking, genocide memorial tours, cultural tours",
        size: "Small but growing community"
      },
      cultural: {
        dressCode: "Conservative (cover shoulders and knees, especially outside Kigali)",
        genderDynamics: "Respectful, Rwanda has high female representation in government",
        acceptance: "Very welcoming, curious about visitors",
        nightlife: "Limited but safe in main areas of Kigali"
      },
      healthcare: {
        quality: "Improving, good in Kigali",
        access: "King Faisal Hospital (Kigali) is excellent",
        womensHealth: "Access to basic healthcare, contraception available in cities",
        cost: "Affordable"
      },
      bestSeason: "June-September & December-February: Dry seasons, best for gorilla trekking and hiking. Avoid April-May (heavy rains).",
      whyLoveIt: "One of Africa's safest countries. Unique cultural experience. Gorilla trekking is life-changing. Clean and organized (plastic bags banned). English widely spoken. Welcoming to solo women. Affordable. Strong female leadership culturally. Off-the-beaten-path adventure.",
      influencers: "Lexie Alford, My Life's A Travel Movie (Alyssa Ramos)"
    },
    {
      name: "Norway (Oslo/Bergen)",
      safetyRating: "97/100",
      safetyBreakdown: {
        street: 98,
        transportation: 98,
        nightlife: 96,
        healthcare: 97,
        tourist: 98
      },
      whyThisDestination: "Peak Scandinavian safety, stunning fjords, midnight sun, strong gender equality. Perfect for solo women seeking nature-based adventures in the safest possible environment.",
      monthlyCost: {
        accommodation: "$1,000-$1,500 (hostel $50-$80/night)",
        food: "$600 (very expensive, cook when possible)",
        transportation: "$150",
        activities: "$400",
        total: "$2,200-$2,750/month"
      },
      accommodations: [
        "Anker Hostel Oslo: Female dorms, central, social",
        "Bergen YMCA Hostel: Budget-friendly, safe, good location",
        "Look for: HI hostels, female dorms, central locations",
        "Camping: Affordable alternative in summer (Norway's Right to Roam)"
      ],
      transportation: {
        bestOption: "Public transit in cities, trains for intercity (scenic)",
        safety: "Extremely safe, reliable, clean",
        cost: "$150/month for city transit",
        note: "Trains and buses are expensive but scenic and safe"
      },
      community: {
        facebook: "Yes, Scandinavian solo female groups",
        meetups: "Hiking groups, outdoor activities, cultural events",
        tours: "Fjord tours, Northern Lights tours, hiking tours",
        size: "Medium community (high costs limit long-term travelers)"
      },
      cultural: {
        dressCode: "Casual, outdoor gear (layer for weather)",
        genderDynamics: "Extreme equality, zero harassment",
        acceptance: "Welcoming, reserved but friendly",
        nightlife: "Safe, expensive (pre-drink is common)"
      },
      healthcare: {
        quality: "World-class",
        access: "Excellent, English widely spoken",
        womensHealth: "Full access to all healthcare, contraception, period products",
        cost: "Expensive but high quality"
      },
      bestSeason: "May-September: Warmest weather (12-20°C), midnight sun (June-July), best hiking. Winter (December-March) for Northern Lights but very cold.",
      whyLoveIt: "Absolute safety. Stunning natural beauty (fjords, mountains, midnight sun). Extreme gender equality. Zero harassment. Perfect for solo women who love nature. Excellent infrastructure. English widely spoken. Empowering solo travel experience.",
      influencers: "Young Adventuress (Liz Carlson), Kristin Addis"
    },
    {
      name: "Sweden (Stockholm)",
      safetyRating: "96/100",
      safetyBreakdown: {
        street: 96,
        transportation: 97,
        nightlife: 94,
        healthcare: 97,
        tourist: 97
      },
      whyThisDestination: "Scandinavian safety and design culture, archipelago access, progressive values, strong gender equality. Perfect for solo women seeking cultural and natural exploration in a safe, modern environment.",
      monthlyCost: {
        accommodation: "$800-$1,200 (hostel $40-$65/night)",
        food: "$450",
        transportation: "$100",
        activities: "$250",
        total: "$1,600-$2,000/month"
      },
      accommodations: [
        "Generator Stockholm: Female dorms, social, central",
        "City Backpackers Hostel: Budget-friendly, safe, Old Town location",
        "Airbnb: Many options, verify hosts",
        "Look for: Södermalm, Gamla Stan (Old Town), Östermalm"
      ],
      transportation: {
        bestOption: "Public transit (metro, buses, ferries)",
        safety: "Very safe, clean, frequent",
        cost: "SL card $100/month",
        note: "Stockholm is spread across islands, transit essential"
      },
      community: {
        facebook: "Yes, active Scandinavian and expat groups",
        meetups: "Cultural events, outdoor activities, language exchanges",
        tours: "Archipelago tours, city tours, Vasa Museum",
        size: "Medium-large community"
      },
      cultural: {
        dressCode: "Casual, stylish (Swedes dress well)",
        genderDynamics: "Extreme equality, minimal harassment",
        acceptance: "Welcoming, reserved but friendly once you connect",
        nightlife: "Safe, expensive, vibrant in Södermalm"
      },
      healthcare: {
        quality: "World-class",
        access: "Excellent, English widely spoken",
        womensHealth: "Full access to contraception, period products, healthcare",
        cost: "Expensive but excellent"
      },
      bestSeason: "May-September: Best weather (15-23°C), long days, archipelago season. Midsummer (June) is magical. Winter is dark but cozy (fika culture).",
      whyLoveIt: "Safe and progressive. Beautiful city spread across islands. Design and cultural scene. Archipelago access (thousands of islands to explore). Gender equality is real. English widely spoken. Great public transit. Perfect for solo women seeking culture, nature, and safety.",
      influencers: "Girl vs Globe (Sabina Trojanova)"
    },
    {
      name: "Thailand (Bangkok/Chiang Mai)",
      safetyRating: "88/100",
      safetyBreakdown: {
        street: 87,
        transportation: 86,
        nightlife: 84,
        healthcare: 90,
        tourist: 90
      },
      whyThisDestination: "Massive female community, budget paradise. Thailand has the largest solo female travel community in Asia, offering affordability, infrastructure, and social opportunities. Safety varies by area.",
      monthlyCost: {
        accommodation: "$300-$500 (hostel $15-$25/night, private rooms $20-$40)",
        food: "$200 (street food cheap, delicious)",
        transportation: "$50",
        activities: "$150",
        total: "$700-$1,000/month"
      },
      accommodations: [
        "Lub d Hostels: Female dorms, social, multiple locations",
        "Stamps Backpackers: Chiang Mai, female-friendly, social",
        "Look for: Sukhumvit (Bangkok), Nimman (Chiang Mai)",
        "Avoid: Patpong, Nana areas (red light districts)"
      ],
      transportation: {
        bestOption: "BTS/MRT (Bangkok), Grab app, songthaews (Chiang Mai)",
        safety: "Generally safe, be alert at night",
        cost: "$50/month",
        note: "Avoid unlicensed taxis, use Grab for safety"
      },
      community: {
        facebook: "Yes, massive groups (50K+ members for Thailand solo female)",
        meetups: "Daily meetups, coworking spaces, yoga, digital nomad events",
        tours: "Island tours, temple tours, cooking classes",
        size: "Largest solo female community in Asia"
      },
      cultural: {
        dressCode: "Moderate (cover shoulders/knees in temples, otherwise relaxed)",
        genderDynamics: "Generally respectful, but harassment can occur in tourist areas",
        acceptance: "Very welcoming, tourist infrastructure strong",
        nightlife: "Safe in main areas (Thonglor, Nimman), avoid sketchy clubs"
      },
      healthcare: {
        quality: "Excellent private hospitals (Bangkok Hospital, Bumrungrad)",
        access: "Easy, English-speaking, medical tourism hub",
        womensHealth: "Full access to contraception, period products everywhere",
        cost: "Very affordable"
      },
      bestSeason: "November-February: Cool season (20-30°C), dry, best weather. Avoid April-May (hottest), June-October (rainy but manageable).",
      whyLoveIt: "Incredibly affordable. Massive solo female community makes meeting people easy. Delicious food. Beautiful beaches and temples. Strong infrastructure. Great for digital nomads. Easy to navigate. Coworking spaces everywhere. Social scene is vibrant.",
      influencers: "Kristin Addis, Alexa West, Alyssa Ramos"
    },
    {
      name: "Vietnam (Hanoi/Ho Chi Minh City)",
      safetyRating: "87/100",
      safetyBreakdown: {
        street: 86,
        transportation: 84,
        nightlife: 85,
        healthcare: 88,
        tourist: 89
      },
      whyThisDestination: "Ultra-affordable, female community, rich culture. Vietnam offers incredible value with growing infrastructure and a supportive solo female community. Street harassment can occur; stay alert.",
      monthlyCost: {
        accommodation: "$250-$400 (hostel $10-$20/night, private rooms $15-$30)",
        food: "$150 (street food extremely cheap)",
        transportation: "$30",
        activities: "$120",
        total: "$600-$900/month"
      },
      accommodations: [
        "Vietnam Backpacker Hostels: Social, female dorms, party vibe",
        "Hanoi Backpackers Hostel: Central, safe, social",
        "Look for: Old Quarter (Hanoi), District 1 (HCMC)",
        "Female-only homestays available in smaller towns"
      ],
      transportation: {
        bestOption: "Grab app (bikes and cars), walking, sleeper buses intercity",
        safety: "Generally safe, watch belongings, traffic is chaotic",
        cost: "$30/month",
        note: "Crossing streets is an art form (walk slowly, steadily)"
      },
      community: {
        facebook: "Yes, active Vietnam solo female groups (15K+ members)",
        meetups: "Hostel events, cafe meetups, day trips",
        tours: "Ha Long Bay, Mekong Delta, Cu Chi Tunnels",
        size: "Large, active community"
      },
      cultural: {
        dressCode: "Moderate (cover shoulders/knees respectful, especially rural areas)",
        genderDynamics: "Generally respectful, but street harassment exists (catcalling)",
        acceptance: "Welcoming, curious about foreigners",
        nightlife: "Safe in main areas (Bui Vien, Ta Hien), avoid sketchy clubs"
      },
      healthcare: {
        quality: "Good private hospitals in cities (Family Medical Practice, FV Hospital)",
        access: "Easy in cities, English-speaking doctors available",
        womensHealth: "Contraception available, period products in pharmacies",
        cost: "Very affordable"
      },
      bestSeason: "February-April & August-October: Best weather varies by region. North (Hanoi): September-November. South (HCMC): December-April. Avoid Tet holiday (crowds, closures).",
      whyLoveIt: "Extremely affordable. Rich culture and history. Amazing food. Beautiful landscapes (Ha Long Bay, rice terraces). Growing digital nomad scene. Social hostel culture. Easy to meet other travelers. Great for long-term budget travel.",
      influencers: "Kristin Addis, Alexa West"
    }
  ];

  const influencers = [
    {
      name: "Lexie Alford",
      handle: "@lexielimitless",
      followers: "1.5M followers",
      description: "Youngest to visit every country. Prioritizes adventure, empowerment, ambitious exploration. Appeals to women seeking challenge and growth."
    },
    {
      name: "Kristin Addis",
      handle: "@bemytravelmuse",
      followers: "131.6K followers",
      description: "Over 65 countries. Created 150+ all-female adventure tours. Her site gets 5M annual visits. Prioritizes: safety, affordability, authentic experiences. Appeals to women 20s-40s seeking community."
    },
    {
      name: "Sabina Trojanova",
      handle: "@girlvsglobe",
      followers: "607K followers",
      description: "UK-based. Focuses on feminism, empowerment, global exploration. Appeals to women seeking empowerment and representation."
    },
    {
      name: "Alyssa Ramos",
      handle: "@mylifesatravelmovie",
      followers: "200.8K followers",
      description: "145 countries. Organizes group trips. Honest about challenges and struggles. Appeals to budget-to-mid-range travelers seeking authenticity."
    },
    {
      name: "Liz Carlson",
      handle: "@youngadventuress",
      followers: "210.8K followers",
      description: "Polar expeditions, extreme adventure. Practical advice for remote/nature exploration. Appeals to nature-focused adventurers."
    },
    {
      name: "Alexa West",
      handle: "@sologirlstravelguide",
      followers: "51.6K followers",
      description: "Founder of Solo Girl's Travel Guide. Strong focus on safety tips, community building, destination guides. Appeals to first-time solo travelers needing reassurance."
    }
  ];

  const archetypeData = [
    {
      archetype: "Adventure Seekers",
      destinations: "Iceland, New Zealand, Canada, Norway",
      budget: "Mid-High",
      community: "Medium"
    },
    {
      archetype: "Budget Backpackers",
      destinations: "Vietnam, Thailand, Bali, Portugal",
      budget: "Low (<$25/day)",
      community: "Large"
    },
    {
      archetype: "Luxury Solo",
      destinations: "Switzerland, UAE, Singapore, Japan",
      budget: "High ($100+/day)",
      community: "Medium"
    },
    {
      archetype: "Digital Nomads",
      destinations: "Portugal, Thailand, Bali, Spain",
      budget: "Mid",
      community: "Large"
    },
    {
      archetype: "Over-40 Travelers",
      destinations: "Ireland, Portugal, Canada, Switzerland",
      budget: "Mid-High",
      community: "Medium"
    },
    {
      archetype: "Solo Mothers",
      destinations: "Denmark, Singapore, Canada, Portugal",
      budget: "Mid",
      community: "Medium"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 font-sans pt-16 relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-teal-400/30 to-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pt-8 pb-12 relative z-10">

        {/* Hero Section */}
        <section className="relative py-8 px-4">
          <div className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none"></div>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-teal-600 bg-clip-text text-transparent">
                Solo Female Destinations
              </h1>
              <p className="text-2xl md:text-3xl mb-4 text-gray-800 font-semibold">
                Destinations Where Women Thrive Alone
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Travel Solo. Travel Safe. Travel Empowered.
              </p>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <TableOfContents
          title="16 Destinations Ranked by Safety"
          summary="The complete guide to solo female travel in 2025. Safety ratings, monthly costs, female communities, healthcare access, and cultural tips for each destination."
          highlights={[
            { label: 'Safest', value: 'UAE (99/100)' },
            { label: 'Best Budget', value: 'Vietnam ($800/mo)' },
            { label: 'Best Community', value: 'Portugal' },
            { label: 'Total Destinations', value: '16' },
          ]}
          sections={[
            { id: 'introduction', label: 'Introduction' },
            { id: 'how-to-use', label: 'How to Use' },
            { id: 'influencers', label: 'Expert Advice' },
            { id: 'destinations', label: 'All 16 Destinations' },
            { id: 'safety-tips', label: 'Safety Tips' },
            { id: 'faqs', label: 'FAQs' },
            { id: 'truth', label: 'Real Truth' },
          ]}
        />

        {/* Introduction */}
        <div id="introduction" className="backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-8 mb-8 hover:shadow-2xl transition-all duration-300 scroll-mt-20">
          <p className="text-lg text-gray-700 mb-4">
            Solo female travel isn't about being fearless. It's about being informed, prepared, and choosing destinations where you can actually breathe.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            This isn't a romanticized guide to "finding yourself." This is a practical map of where women travel alone and feel genuinely safe. Where the community is supportive. Where you can eat dinner alone without unwanted attention. Where your only concern is whether to hike or explore museums.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            The reality: 85%+ of solo travelers are now women. The communities are massive. The resources are there. But not all destinations are built equal for female solo travelers. Safety ratings, harassment risk, healthcare access, and female community presence vary dramatically.
          </p>
          <p className="text-lg text-gray-700">
            This guide maps the destinations that work best for women traveling alone—with honest safety data, real costs, actual female community presence, and what to actually expect culturally.
          </p>
        </div>

        {/* How to Use This Guide */}
        <div id="how-to-use" className="backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-8 mb-8 hover:shadow-2xl transition-all duration-300 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-teal-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>How to Use This Guide</h2>
          <p className="text-lg font-semibold text-gray-900 mb-4">Pick Your Priority:</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-3">•</span>
              <span><strong>Safety:</strong> Non-negotiable safety rating</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-3">•</span>
              <span><strong>Budget:</strong> Monthly cost that fits your income</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-3">•</span>
              <span><strong>Community:</strong> How many other solo female travelers are there?</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-3">•</span>
              <span><strong>Age Group:</strong> Different destinations suit different ages</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-3">•</span>
              <span><strong>Vibe:</strong> Adventure, culture, relaxation, nightlife?</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-3">•</span>
              <span><strong>Healthcare:</strong> Access to women's healthcare (critical)</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 font-bold mr-3">•</span>
              <span><strong>Acceptance:</strong> How welcoming are people to solo women?</span>
            </li>
          </ul>
          <p className="text-gray-700 mt-6">
            Each destination includes: safety rating (breakdown by category), monthly costs, female-friendly accommodations, transportation safety, community size, cultural considerations, and why solo female travelers specifically love it.
          </p>
        </div>

        {/* Influencers Section */}
        <div id="influencers" className="backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-8 mb-8 hover:shadow-2xl transition-all duration-300 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-teal-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>The Solo Female Travel Influencers</h2>
          <p className="text-gray-700 mb-6">
            These women have millions of followers and have visited 60+ countries alone. Here's what they prioritize:
          </p>
          <div className="space-y-6">
            {influencers.map((influencer, index) => (
              <div key={index} className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {influencer.name} <span className="text-purple-600">{influencer.handle}</span>
                </h3>
                <p className="text-sm text-gray-600 mb-2">{influencer.followers}</p>
                <p className="text-gray-700">{influencer.description}</p>
              </div>
            ))}
          </div>

          <div id="safety-tips" className="mt-8 backdrop-blur-lg bg-white/80 border border-white/60 rounded-lg p-6 shadow-lg scroll-mt-20">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What All These Influencers Agree On:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-3">1.</span>
                <span><strong>Trust your intuition.</strong> If something feels wrong, change plans.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-3">2.</span>
                <span><strong>Do what you do at home to stay safe.</strong> Don't be flashy alone at night.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-3">3.</span>
                <span><strong>Solo travel builds confidence.</strong> It's empowering for defining your own identity.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-3">4.</span>
                <span><strong>Meeting people is easy.</strong> Use group tours, social hostels, Facebook groups.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-3">5.</span>
                <span><strong>Safety varies by neighborhood,</strong> not just country. Research where to stay.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Destinations */}
        <div id="destinations" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 via-pink-600 to-teal-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>
            The 16 Best Destinations for Solo Female Travelers
          </h2>

          <div className="space-y-4">
            {destinations.map((destination, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/50 border border-white/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <button
                  onClick={() => toggleDestination(index)}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-purple-400/80 via-pink-400/80 to-teal-400/80 backdrop-blur-sm text-white px-6 py-5 flex items-center justify-between hover:from-purple-500/90 hover:via-pink-500/90 hover:to-teal-500/90 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                  <div className="flex items-center space-x-4 relative z-10">
                    <span className="text-2xl font-bold drop-shadow-lg">#{index + 1}</span>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold drop-shadow-lg">{destination.name}</h3>
                      <p className="font-semibold opacity-90 drop-shadow">Safety Rating: {destination.safetyRating}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    {expandedDestination === index ? (
                      <ChevronUp className="flex-shrink-0 drop-shadow-lg" size={24} />
                    ) : (
                      <ChevronDown className="flex-shrink-0 drop-shadow-lg" size={24} />
                    )}
                  </div>
                </button>

                {expandedDestination === index && (
                  <div className="px-6 py-6 backdrop-blur-sm bg-white/60">

                    {/* Safety Rating Breakdown */}
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Safety Rating Breakdown</h4>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Street Safety</p>
                          <p className="text-2xl font-bold text-teal-600">{destination.safetyBreakdown.street}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Transportation</p>
                          <p className="text-2xl font-bold text-teal-600">{destination.safetyBreakdown.transportation}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Nightlife</p>
                          <p className="text-2xl font-bold text-teal-600">{destination.safetyBreakdown.nightlife}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Healthcare</p>
                          <p className="text-2xl font-bold text-teal-600">{destination.safetyBreakdown.healthcare}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Tourist Safety</p>
                          <p className="text-2xl font-bold text-teal-600">{destination.safetyBreakdown.tourist}</p>
                        </div>
                      </div>
                    </div>

                    {/* Why This Destination */}
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Why This Destination for Solo Women</h4>
                      <p className="text-gray-700">{destination.whyThisDestination}</p>
                    </div>

                    {/* Monthly Cost Breakdown */}
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Monthly Cost Breakdown</h4>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Accommodation:</span>
                            <span className="font-semibold text-gray-900">{destination.monthlyCost.accommodation}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Food:</span>
                            <span className="font-semibold text-gray-900">{destination.monthlyCost.food}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Transportation:</span>
                            <span className="font-semibold text-gray-900">{destination.monthlyCost.transportation}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Activities:</span>
                            <span className="font-semibold text-gray-900">{destination.monthlyCost.activities}</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t border-gray-300">
                            <span className="font-bold text-gray-900">Total:</span>
                            <span className="font-bold text-teal-600 text-lg">{destination.monthlyCost.total}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Female-Friendly Accommodations */}
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Female-Friendly Accommodations</h4>
                      <ul className="space-y-2">
                        {destination.accommodations.map((accommodation, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="text-teal-600 mr-2">•</span>
                            <span>{accommodation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Transportation for Solo Women */}
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Transportation for Solo Women</h4>
                      <div className="bg-white p-4 rounded-lg shadow-sm space-y-2">
                        <p className="text-gray-700">
                          <strong className="text-gray-900">Best Option:</strong> {destination.transportation.bestOption}
                        </p>
                        <p className="text-gray-700">
                          <strong className="text-gray-900">Safety:</strong> {destination.transportation.safety}
                        </p>
                        <p className="text-gray-700">
                          <strong className="text-gray-900">Cost:</strong> {destination.transportation.cost}
                        </p>
                        <p className="text-gray-700">
                          <strong className="text-gray-900">Note:</strong> {destination.transportation.note}
                        </p>
                      </div>
                    </div>

                    {/* Community for Solo Female Travelers */}
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Community for Solo Female Travelers</h4>
                      <div className="bg-white p-4 rounded-lg shadow-sm space-y-2">
                        <p className="text-gray-700">
                          <strong className="text-gray-900">Facebook Groups:</strong> {destination.community.facebook}
                        </p>
                        <p className="text-gray-700">
                          <strong className="text-gray-900">Meetups:</strong> {destination.community.meetups}
                        </p>
                        <p className="text-gray-700">
                          <strong className="text-gray-900">Organized Tours:</strong> {destination.community.tours}
                        </p>
                        <p className="text-gray-700">
                          <strong className="text-gray-900">Community Size:</strong> {destination.community.size}
                        </p>
                      </div>
                    </div>

                    {/* Cultural Considerations */}
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Cultural Considerations</h4>
                      <div className="bg-white p-4 rounded-lg shadow-sm space-y-2">
                        <p className="text-gray-700">
                          <strong className="text-gray-900">Dress Code:</strong> {destination.cultural.dressCode}
                        </p>
                        <p className="text-gray-700">
                          <strong className="text-gray-900">Gender Dynamics:</strong> {destination.cultural.genderDynamics}
                        </p>
                        <p className="text-gray-700">
                          <strong className="text-gray-900">Acceptance:</strong> {destination.cultural.acceptance}
                        </p>
                        <p className="text-gray-700">
                          <strong className="text-gray-900">Nightlife:</strong> {destination.cultural.nightlife}
                        </p>
                      </div>
                    </div>

                    {/* Healthcare for Women */}
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Healthcare for Women</h4>
                      <div className="bg-white p-4 rounded-lg shadow-sm space-y-2">
                        <p className="text-gray-700">
                          <strong className="text-gray-900">Quality:</strong> {destination.healthcare.quality}
                        </p>
                        <p className="text-gray-700">
                          <strong className="text-gray-900">Access:</strong> {destination.healthcare.access}
                        </p>
                        <p className="text-gray-700">
                          <strong className="text-gray-900">Women's Health:</strong> {destination.healthcare.womensHealth}
                        </p>
                        <p className="text-gray-700">
                          <strong className="text-gray-900">Cost:</strong> {destination.healthcare.cost}
                        </p>
                      </div>
                    </div>

                    {/* Best Season */}
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Best Season</h4>
                      <p className="text-gray-700">{destination.bestSeason}</p>
                    </div>

                    {/* Why Solo Female Travelers Love It */}
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Why Solo Female Travelers Love It</h4>
                      <p className="text-gray-700">{destination.whyLoveIt}</p>
                    </div>

                    {/* Influencer Recommendations */}
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="text-gray-700">
                        <strong className="text-gray-900">Influencer Recommendations:</strong> {destination.influencers}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Safety Data Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety Data: The Honest Breakdown</h2>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Safest Countries for Solo Female Travelers</h3>
            <p className="text-gray-700">
              Iceland, Japan, Switzerland, Denmark, Singapore, New Zealand, Canada, Ireland, Portugal, South Korea, Norway, Sweden
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Higher-Caution Destinations</h3>
            <p className="text-gray-700">
              India, Egypt, Morocco, Brazil (certain cities), Mexico (certain regions), parts of Latin America
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Important Note:</strong> Safety varies dramatically by neighborhood within cities, not just country. Research specific neighborhoods. A city can have both very safe and unsafe areas.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Common Safety Concerns for Solo Women</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-3">•</span>
                <span>Street harassment (varies by region: rare in Northern Europe/Japan, common in parts of South Asia/Middle East/North Africa)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-3">•</span>
                <span>Petty theft (Europe, Latin America, parts of Asia)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-3">•</span>
                <span>Drunk men/nightlife safety (varies)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-3">•</span>
                <span>Scams targeting women (fake guides, fake taxi scams, romance scams)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-3">•</span>
                <span>Spiked drinks (common concern, stick with trusted venues)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-3">•</span>
                <span>Unwanted male attention (varies by culture)</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Scams Specifically Targeting Solo Female Travelers</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3">1.</span>
                <span><strong>Fake "guides"</strong> - Unsolicited men offering tours</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3">2.</span>
                <span><strong>Spike your drink</strong> - Happens in bars with weak security</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3">3.</span>
                <span><strong>Taxi scams</strong> - Use Uber/Grab/verified taxis</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3">4.</span>
                <span><strong>Romance scams</strong> - Local men befriending tourists</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3">5.</span>
                <span><strong>SIM card theft</strong> - Keep phone secure</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3">6.</span>
                <span><strong>Fake hostel staff</strong> - Book through verified channels</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Critical Solo Female Travel Tips */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Critical Solo Female Travel Tips</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">What to Pack</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Portable door lock (wedge or lock)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Personal alarm or safety whistle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>AirTag or tracking device</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Anti-theft bag or money belt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Copy of ID/passport</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Emergency contact list</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Travel insurance documents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Backup charger</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Where to Stay (Safety Focus)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Female-only dorm rooms in hostels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Well-reviewed guesthouses (read reviews from solo women)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Airbnbs with verified, responsive hosts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Avoid isolated/sketchy areas (research neighborhoods first)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Check reviews specifically for mentions of solo women</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">How to Meet People Safely</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Join Facebook groups before arrival (connect online first)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Stay in social hostels with common areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Join organized tours/group activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Attend meetups/networking events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Use apps like Meetup or Couchsurfing (for meetings, not just crashes)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Approach other solo travelers you see at tourist spots</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transportation Safety</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Use Uber/Grab/Bolt when available (traceable)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Avoid walking alone at night in unknown areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Use women-only transit options when available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Trust your instinct—if a taxi/driver feels wrong, cancel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Share location with trusted friend while traveling between cities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Book airport transfers in advance</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Health & Healthcare</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Research healthcare quality before traveling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Know where nearest hospital is</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Download emergency contact info</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Carry common medications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Women's health: Contraception access varies—research beforehand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Period products: Available in developed countries; check developing nations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Travel insurance that covers evacuation and healthcare</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">The Hardest Truth</h3>
            <p className="text-gray-700">
              Safety varies <strong>by neighborhood and by how you present yourself</strong>, not just by country. Iceland is safe everywhere. Tokyo is safe everywhere. But in other destinations, one neighborhood can be beautiful and safe, the next sketchy. Research, ask locals, trust your gut.
            </p>
          </div>
        </div>

        {/* By Archetype Table */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">By Archetype: Where You Should Go</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-teal-600 text-white">
                  <th className="px-4 py-3 text-left">Archetype</th>
                  <th className="px-4 py-3 text-left">Best Destinations</th>
                  <th className="px-4 py-3 text-left">Budget Level</th>
                  <th className="px-4 py-3 text-left">Community Size</th>
                </tr>
              </thead>
              <tbody>
                {archetypeData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.archetype}</td>
                    <td className="px-4 py-3 text-gray-700">{row.destinations}</td>
                    <td className="px-4 py-3 text-gray-700">{row.budget}</td>
                    <td className="px-4 py-3 text-gray-700">{row.community}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faqs" className="bg-white rounded-lg shadow-md p-8 mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Questions Solo Female Travelers Ask</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Will people judge me for traveling alone?"</h3>
              <p className="text-gray-700">
                Depends on culture. Conservative countries (parts of South Asia, Middle East, North Africa): yes, some judgment. Europe, Japan, Scandinavia, North America: no, it's normal and celebrated.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Is it actually safe?"</h3>
              <p className="text-gray-700">
                Yes, in 15+ destinations. Research specific neighborhoods. Safety isn't universal within countries—it's neighborhood-specific. Read reviews from other solo women.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"What's realistic budget?"</h3>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Budget backpacker: $800-$1,200/month (Asia, Eastern Europe)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Mid-range: $1,500-$2,200/month (Europe, Southeast Asia)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 font-bold mr-3">•</span>
                  <span>Luxury: $3,000+/month</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"How do I avoid harassment?"</h3>
              <p className="text-gray-700">
                Don't respond to catcalling. Walk with purpose. Use ride-sharing when it's dark. Avoid isolated areas. Stay in women-rated hostels. Dress modestly in conservative areas. Trust your instinct.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"What about my period while traveling?"</h3>
              <p className="text-gray-700">
                Period products are widely available in developed countries. In developing nations, they're generally available but sometimes harder to find. Research before you go. Many solo female travelers carry enough for entire trip just in case.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Should I hide that I'm traveling alone?"</h3>
              <p className="text-gray-700">
                In very conservative regions, sometimes advisable to wear a ring or say you're married. Most other places, solo female travel is celebrated.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Can I really go out at night alone?"</h3>
              <div className="text-gray-700 space-y-1">
                <p>In Iceland, Japan, Switzerland, Singapore, Scandinavia, Canada: absolutely yes.</p>
                <p>In Thailand, Portugal, Ireland: yes, in main neighborhoods.</p>
                <p>In India, Egypt, Morocco: caution, stick to groups or well-lit main areas.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Best way to meet people?"</h3>
              <p className="text-gray-700">
                Social hostels, Facebook groups, organized tours, meetup apps. Join communities before you arrive online.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Section */}
        <div id="truth" className="bg-white rounded-lg shadow-md p-8 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Real Truth About Solo Female Travel</h2>

          <div className="space-y-4 text-gray-700">
            <p>
              Solo female travel isn't brave. It's not reckless. It's not unusual anymore.
            </p>
            <p>
              85%+ of solo travelers are now women. The communities exist everywhere. The apps exist. The hostels exist. The route is well-worn.
            </p>
            <p>
              What's real: You'll be nervous before you leave. You'll second-guess yourself. You might experience harassment (in some places). You might get scammed. You might feel lonely sometimes.
            </p>
            <p>
              But you'll also feel powerful. You'll solve problems. You'll make friends across continents. You'll eat alone at restaurants without concern. You'll hike to summits solo. You'll discover who you are without someone else there to influence it.
            </p>
            <p className="font-bold text-gray-900 text-lg">
              That transformation is real.
            </p>
            <p>
              This guide maps the safest, most supportive places to have that experience.
            </p>
            <p>
              Start with a destination that matches your comfort level. If Iceland feels too expensive, start with Portugal. If you're not ready for Southeast Asia, start with Japan. If you want affordable, start with Vietnam (with caution and smart choices).
            </p>
            <p className="font-bold text-gray-900 text-lg">
              The destination matters less than the decision to go.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <PillarCTA guideName="solo-female-travel" />

        {/* Related Guides */}
        <RelatedGuides currentPage="solo-female-travel" />

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>Last updated: 2025. This guide covers 16 solo female travel destinations with actual safety ratings, realistic costs, female community presence, and practical logistics based on experiences from millions of solo female travelers.</p>
        </div>
      </div>
    </div>
  );
}
