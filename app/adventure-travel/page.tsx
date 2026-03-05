'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import RelatedGuides from '@/components/pillar/RelatedGuides';
import PillarCTA from '@/components/pillar/PillarCTA';
import CreatorInsights from '@/components/pillar/CreatorInsights'
import TableOfContents from '@/components/pillar/TableOfContents';

export default function AdventureTravelPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const influencers = [
    {
      name: "Drew Binsky",
      handle: "@drewbinsky",
      followers: "23M followers",
      description: "Visited all 197 countries. Documentarian focus on cultural stories. Appeals to global adventure seekers. Budget to mid-range travel.",
      specialty: "Cultural adventure, global exploration"
    },
    {
      name: "Eva zu Beck",
      handle: "@evazubeck",
      followers: "5.5M followers",
      description: "National Geographic host. Solo extreme challenges (ultra marathons, remote locations). Appeals to female adventure seekers.",
      specialty: "Solo extreme challenges, female empowerment"
    },
    {
      name: "Jay Alvarrez",
      handle: "@jayalvarrez",
      followers: "12M followers",
      description: "Adventure lifestyle, extreme sports, water sports. Younger adrenaline junkies. Luxury-adventure focus.",
      specialty: "Extreme sports, water activities, lifestyle"
    },
    {
      name: "Inoxtag",
      handle: "French YouTuber",
      followers: "Top 2025 influencer",
      description: "Climbed Mount Everest. Challenge-focused. Appeals to ambitious adventurers.",
      specialty: "Mountain climbing, personal challenges"
    },
    {
      name: "Bald and Bankrupt",
      handle: "@baldandbankrupt",
      followers: "3.5M followers",
      description: "Offbeat adventure travel, budget backpacking. Authentic experiences. Ultra-budget adventures.",
      specialty: "Budget travel, off-the-beaten-path"
    },
    {
      name: "Indigo Traveller",
      handle: "Nick Fisher",
      followers: "2.3M followers",
      description: "Documentary travel, remote destinations. Cultural adventure seeking.",
      specialty: "Documentary style, cultural immersion"
    }
  ];

  const destinations = [
    {
      name: "New Zealand (Queenstown/South Island)",
      adventureType: "Multi-Sport (hiking, bungee, skydiving, water sports)",
      difficulty: "Beginner to Advanced",
      fitness: "Low to High (depends on activity)",
      monthlyCost: {
        accommodation: "$900 (hostels/budget)",
        food: "$600",
        activities: "$800",
        transportation: "$400",
        total: "$2,700/month"
      },
      whySpecial: "Everything is here. Every activity level. Safe infrastructure. Stunning scenery. World-class guides. You can bungee jump one day, hike the Routeburn the next, kayak Milford Sound after. It's concentrated adventure.",
      whyAdventurersLoveIt: "It's accessible. Even beginners can do extreme activities. The scenery is insane. The guides are professional. You can do multiple activities in one trip. Infrastructure makes adventure feel safe. No technical skills needed for most activities.",
      topActivities: [
        "Nevis Bungee (134m): $350, 3 hours, beginner-friendly with guide",
        "Routeburn Track: Multi-day trek, moderate, 32km through fjords",
        "Milford Sound Kayaking: $120, moderate, stunning water",
        "Skydiving: $300, beginner, 12,000+ feet",
        "Queenstown Adventure Park: Zip-lining, bungy, activities for all levels"
      ],
      bestSeason: [
        "December-March (Summer): Best weather, all activities available, warm",
        "September-November (Spring): Hiking ideal, fewer crowds, wildflowers"
      ],
      safety: "98/100 - Excellent emergency services, well-marked trails, rescue teams on standby, insurance included in many activities",
      healthcare: "Excellent, English-speaking, accessible, world-class",
      guides: [
        "AJ Hackett Bungy (iconic, safe)",
        "Real Journeys (Milford Sound)",
        "Local DOC guides (Department of Conservation)"
      ],
      whatToPack: "Layers, waterproof jacket, hiking boots, sunscreen, sunglasses, adventure gear (provided by operators), first aid kit, reusable water bottle",
      culturalNotes: "Friendly locals, English-speaking, easy to navigate. Maori culture adds depth. Outdoor lifestyle is ingrained. Respect conservation areas.",
      visaInfo: "Most nationalities get visa on arrival or visa waiver. Check specific requirements for your country. Working holiday visas available for extended stays.",
      soloTravelFriendly: "Extremely solo-friendly. Hostels everywhere. Easy to meet travelers. Group tours available. Safe for solo female travelers.",
      budgetTips: "Stay in hostels. Cook your own meals. Book activities in advance for discounts. Free hiking trails. Skip luxury lodges."
    },
    {
      name: "Patagonia (Chile/Argentina)",
      adventureType: "Hiking, Mountaineering, Multi-Sport",
      difficulty: "Beginner to Advanced",
      fitness: "Moderate to High",
      monthlyCost: {
        accommodation: "$800",
        food: "$500",
        activities: "$600",
        transportation: "$400",
        total: "$2,300/month"
      },
      whySpecial: "Dramatic peaks. Glaciers. Solitude. Stunning landscapes. Multiple trek options for different fitness levels. Affordable compared to European Alps.",
      whyAdventurersLoveIt: "Epic landscapes. Glaciers. Dramatic peaks. Solitude. Less crowded than European hiking. Raw wilderness. Challenging but accessible. Refugio system makes multi-day treks possible.",
      topActivities: [
        "W Trek (Torres del Paine): 4-7 days, $800-$1,600, moderate-difficult, 46km through national park",
        "Perito Moreno Glacier Mini-Trek: $150, 3 hours, moderate",
        "Fitz Roy Hike (El Chalten): Day hike, free, difficult, 20km, dramatic peak",
        "Full Patagonia Circuit: 22 days, $2,860 guided"
      ],
      bestSeason: [
        "November-March (Southern Hemisphere Summer): Best weather, all trails open, warmest temperatures (still cool)"
      ],
      safety: "85/100 - Remote areas, unpredictable weather, experienced guides recommended, good in towns, primitive in backcountry",
      healthcare: "Good in El Calafate, Puerto Natales. Limited in parks. Bring comprehensive first aid kit.",
      guides: [
        "Hi Travel Argentina",
        "Receptivo Aborigen Tours",
        "Local outfitters"
      ],
      whatToPack: "Multi-layer clothing system, waterproof/windproof jacket, trekking poles, warm sleeping bag, sun protection, crampons (for glacier), thermal base layers",
      culturalNotes: "Spanish helpful but English spoken in tourist areas. Relaxed pace. Mate tea culture. Respect weather conditions. Leave no trace principles.",
      visaInfo: "Most nationalities can enter Chile and Argentina visa-free for 90 days. Check crossing requirements between countries.",
      soloTravelFriendly: "Moderate. Easy to join group tours. Hostels in main towns (El Chalten, Puerto Natales). Independent trekking possible with experience.",
      budgetTips: "Camp instead of refugios. Bring own food. Free camping zones exist. Cook at hostels. Day hikes are free."
    },
    {
      name: "Nepal (Everest Base Camp/Annapurna)",
      adventureType: "Mountaineering, Trekking, Peak Climbing",
      difficulty: "Intermediate to Extreme",
      fitness: "Moderate to Elite",
      monthlyCost: {
        accommodation: "$400 (teahouses)",
        food: "$300 (included in treks)",
        activities: "$1,200-$3,500 (depends on trek)",
        transportation: "$200",
        total: "$2,100-$5,200/month"
      },
      whySpecial: "The Himalayas. Experienced Sherpa guides. Affordable compared to other climbing destinations. Multiple difficulty levels. Culture. Teahouse trekking infrastructure is legendary.",
      whyAdventurersLoveIt: "Himalayas. Sherpa culture. Affordable. World-class trekking. Multiple difficulty levels. Spiritual experience. Teahouse system makes logistics easy. Life-changing altitude challenge.",
      topActivities: [
        "Everest Base Camp Trek: 12 days, $1,500-$2,000, high fitness, moderate-difficult (not a climb, just trekking)",
        "Island Peak Climbing: 18 days, $3,200, technical ice climbing, high fitness",
        "Mera Peak: 17 days, $3,200, beginner-friendly climb, high altitude",
        "Annapurna Circuit: 15-20 days, $800-$1,200, moderate, famous trek"
      ],
      bestSeason: [
        "March-May & September-November (avoid monsoon June-August): Clear skies, good visibility, moderate temperatures"
      ],
      safety: "75/100 - Remote areas = delayed rescue, altitude sickness real risk, experienced guides essential, helicopter rescue to Camp 3 available (Everest)",
      healthcare: "Good in Kathmandu, basic in trekking regions, helicopter evacuation available. Travel insurance with helicopter evacuation essential.",
      guides: [
        "World Expeditions",
        "KE Adventure",
        "Core Treks",
        "Local Sherpa guides"
      ],
      whatToPack: "Down jacket, warm sleeping bag, trekking poles, Diamox (altitude sickness), headlamp, water purification tablets, thermal layers, sunglasses, first aid kit",
      culturalNotes: "Buddhist culture. Respect monasteries and prayer flags. Remove shoes in sacred spaces. Right-hand greeting. Porters and Sherpas deserve respect and fair wages.",
      visaInfo: "Visa on arrival at Kathmandu airport. $30 for 15 days, $50 for 30 days. TIMS card and permits required for trekking.",
      soloTravelFriendly: "Very solo-friendly. Easy to join trekking groups. Teahouses make solo trekking possible. Thamel district in Kathmandu is backpacker central.",
      budgetTips: "Teahouse trekking is cheapest. Independent trekking with porter saves money. Eat dal bhat (includes refills). Bargain in Kathmandu."
    },
    {
      name: "Iceland",
      adventureType: "Multi-Sport (glacier hiking, volcano tours, ice climbing, diving)",
      difficulty: "Beginner to Intermediate",
      fitness: "Moderate",
      monthlyCost: {
        accommodation: "$1,400",
        food: "$500",
        activities: "$700",
        transportation: "$350",
        total: "$2,950/month"
      },
      whySpecial: "You can hike a glacier, dive in a fissure between tectonic plates, see Northern Lights, explore ice caves—all safely with professional guides. The landscapes are otherworldly. It's adventure without extreme technical skill.",
      whyAdventurersLoveIt: "Unique landscapes. Zero crime. Accessible wilderness. Well-managed safety. You can do extreme activities without extreme fitness. Otherworldly scenery. Midnight sun or Northern Lights depending on season.",
      topActivities: [
        "Glacier Hiking on Vatnajokull: $150, 4 hours, moderate, stunning views",
        "Silfra Fissure Diving: $200, beginner (dry suit provided), dive between continents",
        "Northern Lights Tours: $100, easy, seasonal magic",
        "Ice Cave Exploration: $180, moderate, blue ice caves",
        "Volcano Tours: Hiking on recent lava fields"
      ],
      bestSeason: [
        "June-August (Hiking/Camping): Midnight sun, mild weather, all trails open",
        "September-March (Northern Lights): Dark skies, aurora visible, winter activities"
      ],
      safety: "99/100 - Safest country globally, natural hazard protocols excellent, professional guides mandatory for technical activities",
      healthcare: "Excellent, English-speaking, world-class facilities",
      guides: [
        "Arctic Adventures",
        "Extreme Iceland",
        "Glacier Guides"
      ],
      whatToPack: "Waterproof layers, warm insulated jacket, hiking boots, thermal underwear, gloves, hat, crampons (provided), camera for Northern Lights",
      culturalNotes: "English widely spoken. Expensive but high quality. Respectful of nature. Follow marked trails. Geothermal pools everywhere.",
      visaInfo: "Schengen visa rules apply. Most Western countries get 90 days visa-free. Check specific requirements.",
      soloTravelFriendly: "Extremely safe for solo travelers. Easy to join group tours. Hostels and guesthouses common. Car rental popular for independence.",
      budgetTips: "Cook your own food (groceries expensive but doable). Camp instead of hotels. Free hot springs exist. Book activities in advance."
    },
    {
      name: "Peru (Machu Picchu/Amazon)",
      adventureType: "Trekking, Cultural Adventure, Wildlife",
      difficulty: "Beginner to Advanced",
      fitness: "Low to High",
      monthlyCost: {
        accommodation: "$400-$600",
        food: "$300-$400",
        activities: "$600-$900",
        transportation: "$200-$300",
        total: "$1,500-$2,200/month"
      },
      whySpecial: "Iconic trails, archaeological significance, culture, budget-friendly. The Inca Trail combines adventure with history. Amazon rainforest adds biodiversity element. Rainbow Mountain is Instagram-famous.",
      whyAdventurersLoveIt: "History meets adventure. Machu Picchu is bucket-list. Affordable. Rich culture. Amazon adds wildlife dimension. Rainbow Mountain challenges. Inca Trail combines hiking with archaeology.",
      topActivities: [
        "Inca Trail to Machu Picchu: 4 days, $600-$800, moderate, permit required",
        "Rainbow Mountain Trek: 1 day, $50-$100, moderate-difficult, 5,200m altitude",
        "Salkantay Trek: 5 days, $300-$500, difficult, alternative to Inca Trail",
        "Amazon Rainforest Tours: 3-5 days, $400-$800, wildlife spotting"
      ],
      bestSeason: [
        "May-September (Dry Season): Best trekking weather, clear mountain views, less rain"
      ],
      safety: "78/100 - Some theft in cities, safe trekking with guides, altitude awareness needed, secure valuables in Cusco/Lima",
      healthcare: "Good in major cities (Lima, Cusco), basic in rural/trekking areas, altitude clinics available. Bring altitude medication.",
      guides: [
        "G Adventures",
        "Intrepid Travel",
        "Local licensed Inca Trail operators"
      ],
      whatToPack: "Layers for altitude, rain jacket, trekking boots, sun protection, Diamox for altitude, daypack, water purification, insect repellent (Amazon)",
      culturalNotes: "Spanish helpful. Quechua spoken in villages. Rich indigenous culture. Respectful of archaeological sites. Tipping guides expected.",
      visaInfo: "Most nationalities get 183 days visa-free. Check specific requirements. Simple immigration process.",
      soloTravelFriendly: "Very backpacker-friendly. Easy to meet travelers in Cusco. Group tours common. Hostels everywhere. Women should take normal precautions.",
      budgetTips: "Street food is cheap and good. Stay in hostels. Book Inca Trail months ahead. Salkantay is cheaper alternative. Bargain in markets."
    },
    {
      name: "Tanzania (Kilimanjaro/Safari)",
      adventureType: "Mountaineering, Wildlife Safari, Hiking",
      difficulty: "Intermediate to Advanced",
      fitness: "Moderate to High",
      monthlyCost: {
        accommodation: "$600-$900",
        food: "$400-$500",
        activities: "$1,200-$2,500",
        transportation: "$300",
        total: "$2,500-$4,200/month"
      },
      whySpecial: "Climb Africa's highest peak. World-class safari. Serengeti migration. Zanzibar beaches. Combine adventure with wildlife and culture.",
      whyAdventurersLoveIt: "Kilimanjaro is achievable peak for non-technical climbers. Safari is world-class. Big Five. Serengeti migration. Ngorongoro Crater. Zanzibar adds beach relaxation. Friendly locals.",
      topActivities: [
        "Kilimanjaro Climb (Machame Route): 7 days, $2,000-$3,000, high fitness, altitude challenge",
        "Serengeti Safari: 3-5 days, $800-$1,500, easy, Big Five wildlife",
        "Ngorongoro Crater: 1-2 days, $400-$600, easy, incredible wildlife density",
        "Zanzibar Diving/Snorkeling: Various prices, beginner-friendly, tropical waters"
      ],
      bestSeason: [
        "June-October (Dry Season): Best for climbing and safari, clear skies, wildlife concentrated at water sources",
        "January-February: Calving season for wildebeest, warm weather"
      ],
      safety: "82/100 - Safe with reputable tour operators, follow guide instructions on safari, altitude risks on Kilimanjaro, secure accommodations",
      healthcare: "Good in Arusha/Dar es Salaam, basic on mountain, evacuation possible, malaria prevention needed in lowlands. Yellow fever vaccine required.",
      guides: [
        "Ultimate Kilimanjaro",
        "African Scenic Safaris",
        "Local TATO-licensed operators"
      ],
      whatToPack: "Kilimanjaro: 4-season sleeping bag, warm layers, trekking poles, headlamp, altitude meds. Safari: Neutral colors, binoculars, camera, sun protection",
      culturalNotes: "Swahili helpful. Hakuna matata mentality. Friendly locals. Tipping guides essential. Respect Maasai culture. Photography etiquette important.",
      visaInfo: "Visa on arrival at airport. $50 for most nationalities. Single-entry. E-visa available online.",
      soloTravelFriendly: "Moderate. Safari requires group/tour. Kilimanjaro requires guide by law. Easy to join group climbs. Zanzibar safe for solo travelers.",
      budgetTips: "Join group safaris. Climb Kilimanjaro in larger group. Stay in Arusha hostels. Self-drive safari possible but requires 4x4."
    },
    {
      name: "Norway (Fjords/Northern Lights)",
      adventureType: "Hiking, Climbing, Winter Sports, Fjord Kayaking",
      difficulty: "Intermediate to Advanced",
      fitness: "Moderate to High",
      monthlyCost: {
        accommodation: "$1,200",
        food: "$600",
        activities: "$800",
        transportation: "$500",
        total: "$3,100/month"
      },
      whySpecial: "Dramatic fjords, Northern Lights, Trolltunga hike, professional infrastructure. Stunning nature, safe environment, midnight sun in summer, polar nights in winter.",
      whyAdventurersLoveIt: "Fjords are stunning. Trolltunga is iconic. Lofoten Islands dramatic. Northern Lights magical. Midnight sun surreal. Safe. Well-maintained trails. Scandinavian efficiency. High quality everything.",
      topActivities: [
        "Trolltunga Hike: 10-12 hours, free (guided tours $200), difficult, 28km round trip",
        "Lofoten Islands Hiking: Various trails, moderate-difficult, dramatic scenery",
        "Fjord Kayaking: $100-$200, moderate, stunning water routes",
        "Northern Lights Watching: September-March, easy, magical experience",
        "Preikestolen (Pulpit Rock): 4-5 hours, moderate, iconic cliff"
      ],
      bestSeason: [
        "June-September (Hiking): Long days, mild weather, all trails accessible",
        "December-March (Winter Sports/Northern Lights): Dark skies for aurora, skiing, winter activities"
      ],
      safety: "96/100 - Excellent emergency services, well-maintained trails, weather can change rapidly, follow safety guidelines",
      healthcare: "Excellent, world-class, English widely spoken",
      guides: [
        "Trolltunga Active",
        "Lofoten Adventure",
        "Local DNT (Norwegian Trekking Association) guides"
      ],
      whatToPack: "Waterproof/windproof layers, hiking boots, warm clothes (even summer), trekking poles, headlamp, sunglasses, insulated jacket (winter)",
      culturalNotes: "English fluent everywhere. Expensive. High quality of life. Nature respect deeply ingrained. Right to roam (allemannsretten) allows camping.",
      visaInfo: "Schengen rules. Most Western countries 90 days visa-free. Norway not in EU but in Schengen zone.",
      soloTravelFriendly: "Extremely safe for solo travel. Easy public transport. Hostels available. DNT huts system for hikers. Women travel safely alone.",
      budgetTips: "Bring own food from grocery stores. Use DNT huts. Wild camping legal. Cook your meals. Avoid restaurants (very expensive)."
    },
    {
      name: "Costa Rica",
      adventureType: "Multi-Sport (hiking, zip-lining, water sports, wildlife)",
      difficulty: "Beginner to Intermediate",
      fitness: "Low to Moderate",
      monthlyCost: {
        accommodation: "$700",
        food: "$500",
        activities: "$500",
        transportation: "$300",
        total: "$2,000/month"
      },
      whySpecial: "Incredible biodiversity. Eco-tourism infrastructure. 'Pura Vida' culture. Safe. Accessible adventure. No extreme technical skills needed.",
      whyAdventurersLoveIt: "Biodiversity incredible. Sloths, monkeys, toucans everywhere. Zip-lining world-class. Surfing great. Volcanoes. Beaches. Cloud forests. Pura Vida relaxed culture. Safe Central America option.",
      topActivities: [
        "Arenal Volcano Hike: Moderate, 3 hours, active volcano views",
        "Zip-lining Monteverde Cloud Forest: $80, beginner, canopy adventure",
        "Pacuare River White-Water Rafting: Class III-IV, $100, moderate",
        "Wildlife Safaris: Easy, sloths/monkeys/birds everywhere",
        "Waterfall hikes: Various difficulty levels, swimming opportunities"
      ],
      bestSeason: [
        "December-April (Dry Season): Best hiking weather, fewer bugs, clear views"
      ],
      safety: "88/100 - Safe country, some rural road caution, professional guides standard, avoid night driving in remote areas",
      healthcare: "Good, English widely spoken in tourist areas. Private clinics excellent. Travel insurance recommended.",
      guides: [
        "Desafio Adventure Company",
        "Costa Rica Expeditions",
        "Local eco-tourism operators"
      ],
      whatToPack: "Light breathable clothing, rain jacket, hiking shoes, swimsuit, reef-safe sunscreen, insect repellent, water bottle, binoculars for wildlife",
      culturalNotes: "Pura Vida lifestyle. Friendly locals. Spanish helpful but English common in tourist areas. Eco-conscious. No army since 1949. Peaceful culture.",
      visaInfo: "Most nationalities get 90 days visa-free. Easy entry process. Extension possible.",
      soloTravelFriendly: "Very solo-friendly. Backpacker infrastructure excellent. Easy to meet travelers. Hostels everywhere. Safe for women.",
      budgetTips: "Eat at sodas (local restaurants). Stay in hostels. Public buses cheap. Skip all-inclusive resorts. Many free natural attractions."
    },
    {
      name: "Morocco (Atlas Mountains/Sahara)",
      adventureType: "Trekking, Desert Adventure, Cultural Immersion",
      difficulty: "Beginner to Intermediate",
      fitness: "Low to Moderate",
      monthlyCost: {
        accommodation: "$400-$600",
        food: "$300-$400",
        activities: "$400-$600",
        transportation: "$200",
        total: "$1,200-$1,800/month"
      },
      whySpecial: "Desert experience, mountain climbing, exotic culture, affordable. Toubkal is North Africa's highest peak. Sahara desert camping is magical. Rich Berber culture.",
      whyAdventurersLoveIt: "Toubkal achievable peak. Sahara camping under stars unforgettable. Berber hospitality. Exotic without being difficult. Affordable. Markets colorful. Desert landscapes otherworldly. Cultural immersion rich.",
      topActivities: [
        "Mount Toubkal Summit: 2 days, $200-$400, moderate-difficult, 4,167m, North Africa's highest",
        "Sahara Desert Trekking: 3-5 days, $300-$500, easy-moderate, camel trekking, camping under stars",
        "Todra Gorge Hiking: 1 day, $50-$100, moderate, dramatic canyon",
        "Atlas Mountain Village Treks: Multi-day, moderate, cultural immersion"
      ],
      bestSeason: [
        "March-May & September-November: Comfortable temperatures, clear skies, avoid summer heat and winter snow"
      ],
      safety: "80/100 - Generally safe with guides, stick to established routes, hire reputable guides, be culturally respectful. Petty theft possible in cities.",
      healthcare: "Good in Marrakech, basic in mountains/desert, travel insurance essential. Bring personal medications.",
      guides: [
        "Morocco Mountain Guides",
        "Atlas Trekking",
        "Local licensed mountain guides"
      ],
      whatToPack: "Layers for temperature variation, sun protection, scarf/hat, trekking boots, warm sleeping bag (desert nights cold), modest clothing, water purification",
      culturalNotes: "Muslim country. Dress modestly especially women. Ramadan affects services. Bargaining expected in souks. Mint tea is social. Learn basic Arabic/French phrases.",
      visaInfo: "Most nationalities get 90 days visa-free. Simple entry. Stamp in passport.",
      soloTravelFriendly: "Moderate for solo travelers. Women may face harassment. Joining tours recommended. Riads and hostels social. Guides essential for trekking.",
      budgetTips: "Very affordable destination. Eat local food. Stay in riads/hostels. Bargain in markets. Public transport cheap. Street food delicious and safe."
    },
    {
      name: "Vietnam (Ha Giang Loop/Trekking)",
      adventureType: "Motorbiking, Trekking, Cultural Adventure",
      difficulty: "Beginner to Intermediate",
      fitness: "Low to Moderate",
      monthlyCost: {
        accommodation: "$300-$400",
        food: "$200-$300",
        activities: "$300-$500",
        transportation: "$150-$200",
        total: "$900-$1,400/month"
      },
      whySpecial: "Cultural adventure, budget-friendly, dramatic landscapes. Ha Giang Loop is one of world's best motorbike routes. Rice terrace trekking. Ha Long Bay kayaking. Authentic experiences.",
      whyAdventurersLoveIt: "Ha Giang Loop epic. Rice terraces stunning. Incredibly affordable. Authentic culture. Friendly locals. Food amazing. Ha Long Bay magical. Less touristy than Thailand. Motorbike freedom.",
      topActivities: [
        "Ha Giang Loop Motorbiking: 3-4 days, $150-$300, moderate, stunning mountain roads",
        "Sapa Rice Terrace Trekking: 2-3 days, $100-$200, moderate, ethnic minority villages",
        "Ha Long Bay Kayaking: 1-2 days, $100-$200, easy, limestone karsts",
        "Phong Nha Cave Exploration: 1-2 days, $50-$150, easy-moderate, world's largest cave system"
      ],
      bestSeason: [
        "September-April: Avoid monsoon season, clear skies, comfortable temperatures",
        "September-October: Rice harvest season, golden terraces"
      ],
      safety: "78/100 - Safe with reputable operators, motorbike requires caution, wear helmet, traffic can be chaotic, secure valuables",
      healthcare: "Good in Hanoi/Ho Chi Minh City, basic in rural areas, travel insurance recommended. Pharmacies well-stocked.",
      guides: [
        "QT Motorbikes (Ha Giang)",
        "Sapa O'Chau",
        "Local homestay guides"
      ],
      whatToPack: "Light layers, rain jacket, comfortable shoes, motorbike gear (helmet, gloves), sunscreen, first aid kit, motion sickness meds",
      culturalNotes: "Communist country but tourism open. Vietnamese helpful learning basics. French colonial influence. Coffee culture strong. Respectful of temples and pagodas.",
      visaInfo: "E-visa available online. $25 for 30 days single-entry. Easy process. Some nationalities visa-free for short stays.",
      soloTravelFriendly: "Extremely backpacker-friendly. Easy to meet travelers. Hostels everywhere. Ha Giang Loop often done in groups. Very affordable for solo travel.",
      budgetTips: "One of cheapest countries. Street food $1-2. Hostels $5-10/night. Local transport very cheap. Bargain expected. Ha Giang Loop affordable."
    },
    {
      name: "Jordan (Petra/Wadi Rum)",
      adventureType: "Desert Trekking, Rock Climbing, Cultural Adventure",
      difficulty: "Beginner to Intermediate",
      fitness: "Low to Moderate",
      monthlyCost: {
        accommodation: "$600-$800",
        food: "$400-$500",
        activities: "$500-$700",
        transportation: "$300",
        total: "$1,800-$2,300/month"
      },
      whySpecial: "Ancient wonders, desert landscapes, safe Middle Eastern destination. Petra is one of world's wonders. Wadi Rum desert is Mars-like. Dead Sea experience. Rich history.",
      whyAdventurersLoveIt: "Petra incredible. Wadi Rum stunning (Mars movie filmed here). Safe Middle East option. Bedouin hospitality. Dead Sea unique. Rich history. Compact country - see everything easily.",
      topActivities: [
        "Petra Trekking: 1-3 days, $50-$200, moderate, ancient city exploration, monastery hike",
        "Wadi Rum Desert 4x4 & Camping: 1-2 days, $100-$200, easy, Bedouin experience, stunning desert",
        "Jordan Trail: Long-distance trek, various sections, moderate-difficult, 650km total",
        "Dead Sea Floating: Easy, unique experience, therapeutic waters"
      ],
      bestSeason: [
        "March-May & September-November: Comfortable temperatures, avoid extreme summer heat (40C+) and winter cold"
      ],
      safety: "85/100 - Safe for tourists, political stability, respect local customs, hire guides for remote areas. Friendly police presence.",
      healthcare: "Good in Amman, basic in desert areas, English spoken in tourist zones. Private hospitals good quality.",
      guides: [
        "Jordan Trail Association",
        "Wadi Rum Bedouin camps",
        "Licensed Petra guides"
      ],
      whatToPack: "Sun protection (hat, sunglasses, sunscreen), light breathable layers, comfortable walking shoes, modest clothing, scarf, water bottle, desert camping gear (provided)",
      culturalNotes: "Muslim country. Dress modestly. Ramadan affects services. Friendly locals. Arabic helpful. English common in tourist areas. Tea culture. Bargaining in markets.",
      visaInfo: "Jordan Pass ($70+) includes visa and Petra entry - excellent value. Visa also available on arrival. Multi-entry options available.",
      soloTravelFriendly: "Safe for solo travelers including women. Easy to join tours. Hostels available. Local transport good. Wadi Rum/Petra tours easy to arrange.",
      budgetTips: "Jordan Pass saves money. Eat local falafel/hummus. Stay in hostels. Petra multi-day ticket cheaper per day. Public transport affordable."
    },
    {
      name: "Canada (Canadian Rockies)",
      adventureType: "Hiking, Wildlife Viewing, Mountaineering, Winter Sports",
      difficulty: "Beginner to Advanced",
      fitness: "Low to High",
      monthlyCost: {
        accommodation: "$1,000-$1,400",
        food: "$600-$800",
        activities: "$600-$900",
        transportation: "$400-$500",
        total: "$2,600-$3,600/month"
      },
      whySpecial: "Pristine wilderness, turquoise lakes, abundant wildlife (bears, elk, moose), well-maintained trails, national park infrastructure. Banff and Jasper are world-renowned. Accessible adventure in stunning setting.",
      whyAdventurersLoveIt: "Turquoise lakes iconic. Moraine Lake stunning. Lake Louise perfect. Wildlife abundant. Well-maintained trails. Safe infrastructure. Bear sightings common. Canadian hospitality. Four seasons of adventure. World-class skiing.",
      topActivities: [
        "Lake Louise & Moraine Lake Hikes: Various trails, easy-moderate, iconic turquoise lakes",
        "Skyline Trail (Jasper): 2-3 days, moderate-difficult, alpine meadows, wildlife",
        "Athabasca Glacier Walk: $100-$150, moderate, accessible glacier experience",
        "Wildlife Safaris: Easy, grizzly bears, elk, mountain goats",
        "Winter Skiing/Snowboarding: World-class resorts, beginner-expert terrain"
      ],
      bestSeason: [
        "June-September (Hiking): Warm weather, all trails open, wildflowers, long days",
        "December-March (Winter Sports): Skiing, snowshoeing, ice climbing, northern lights"
      ],
      safety: "92/100 - Excellent infrastructure, bear safety protocols essential, well-marked trails, park ranger support. Follow wildlife guidelines.",
      healthcare: "Excellent, world-class, English-speaking. Emergency services top-notch.",
      guides: [
        "Parks Canada",
        "Banff Adventures",
        "Jasper Adventure Centre"
      ],
      whatToPack: "Layers for variable weather, waterproof jacket, hiking boots, bear spray (required), sun protection, camera, reusable water bottle, warm layers (even summer)",
      culturalNotes: "Bilingual country (English/French). Friendly locals. Outdoor culture. Indigenous history. Respect wildlife. National parks well-organized.",
      visaInfo: "eTA required for many nationalities ($7 CAD online). US citizens need passport. Check specific requirements. Working holiday visas available.",
      soloTravelFriendly: "Very solo-friendly. Hostels in Banff/Jasper. Easy to meet travelers. Group tours available. Safe for women. HI hostels excellent.",
      budgetTips: "Camp in national parks. Cook your meals. Discovery Pass for parks ($70 annual). Free hiking. Avoid peak summer. Hostels available."
    }
  ];

  const faqs = [
    {
      question: "What fitness level do I need for adventure travel?",
      answer: "It depends on your chosen destination and activities. Beginner-friendly destinations like Costa Rica and New Zealand offer activities for all fitness levels. Start with destinations matching your current fitness - you don't need to be elite. Beginner hikes in Costa Rica or New Zealand are incredible experiences. Gradually build up to harder treks. For high-altitude destinations like Nepal or technical climbs, you'll need months of training including cardio, strength, and altitude acclimatization."
    },
    {
      question: "How much do adventure guides and outfitters cost?",
      answer: "Guide costs vary significantly by destination and activity type. Budget treks: $50-$150/day (Nepal teahouse treks, Vietnam, Philippines). Mid-range: $150-$300/day (Patagonia refugio treks, Iceland glacier tours, Costa Rica multi-sport). Luxury/Expedition: $300-$800+/day (Nepal peak climbing, Patagonia luxury lodges, private safaris). Many activities include guide costs in the package price. Always book with licensed, reputable operators even if slightly more expensive - safety is worth it."
    },
    {
      question: "What destinations are safest for solo adventurers?",
      answer: "The safest adventure destinations for solo travelers are: New Zealand (98/100 safety rating), Iceland (99/100), Norway (96/100), Canada (92/100), and Costa Rica (88/100). These countries have excellent infrastructure, low crime, English widely spoken, and strong emergency services. For remote or high-risk destinations, join group tours rather than going solo. Never solo climb 6,000m peaks or attempt technical mountaineering without guides and proper support. Women solo travelers should research specific safety considerations for each destination."
    },
    {
      question: "Do I need prior experience for adventure activities?",
      answer: "No experience needed: Beginner day hikes, glacier walks with guides, zip-lining, bungee jumping, wildlife safaris, guided tours, sea kayaking, snorkeling. Some experience helpful: Multi-day treks (Patagonia W Trek, Annapurna Circuit), moderate alpine hikes (Trolltunga), white-water rafting, Via Ferrata routes, basic rock climbing. Experience required: Technical climbing (Island Peak, Mera Peak), ice climbing, peak summits above 6,000m, extreme mountaineering, solo backcountry navigation. Most adventure activities are designed for beginners with proper guides."
    },
    {
      question: "What are the best seasons for each destination?",
      answer: "Nepal: March-May & September-November (avoid monsoon). Patagonia: November-March (Southern Hemisphere summer). Iceland: June-August for hiking, September-March for Northern Lights. New Zealand: December-March for summer activities. Costa Rica: December-April (dry season). Norway: June-September for hiking, December-March for winter sports. Peru: May-September (dry season). Tanzania: June-October & January-February. Morocco: March-May & September-November. Vietnam: September-April. Jordan: March-May & September-November. Canada: June-September for hiking, December-March for skiing."
    },
    {
      question: "What should I pack for adventure travel?",
      answer: "Universal essentials: Layering system (base, mid, outer layers), waterproof/windproof jacket, quality hiking boots, first aid kit, headlamp, water purification system, sun protection, reusable water bottle. Altitude destinations (Nepal, Peru): Diamox for altitude sickness, warm 4-season sleeping bag, down jacket, trekking poles, thermal layers. Cold climates (Iceland, Norway, Patagonia): Insulated layers, waterproof gloves, thermal base layers, goggles, warm hat. Tropical (Costa Rica, Vietnam): Light breathable clothing, mosquito repellent, reef-safe sunscreen, quick-dry fabrics. Desert (Morocco, Jordan): Sun protection, hydration pack, breathable layers, warm sleeping bag for cold nights, scarf/hat."
    },
    {
      question: "How do I prepare physically for adventure travel?",
      answer: "Start training 2-6 months before your trip depending on difficulty. For moderate treks (Inca Trail, W Trek): Build cardio with hiking, running, cycling. Practice with weighted backpack on hills. For high-altitude treks (EBC, Kilimanjaro): Focus on cardio endurance. Consider altitude training or acclimatization hikes. For technical climbs: Add strength training, core work, and specific climbing technique practice. For multi-sport adventures: Cross-train with various activities. Always consult a doctor before high-altitude or extreme adventures. Consider hiring a personal trainer familiar with adventure training."
    },
    {
      question: "What travel insurance do I need?",
      answer: "Essential for adventure travel. Look for policies covering: Emergency medical treatment, helicopter evacuation (crucial for mountain/remote areas), activity coverage (ensure your specific activities are covered - some exclude mountaineering, diving, etc.), trip cancellation/interruption, lost/stolen gear, repatriation. Recommended insurers: World Nomads (popular with adventurers), SafetyWing, Allianz Global Assistance. For high-altitude trekking (Nepal, Peru, Tanzania), verify helicopter evacuation coverage up to 6,000m+. For technical climbing, specialized mountaineering insurance required. Always read fine print - some activities require additional premiums."
    },
    {
      question: "Can I do adventure travel on a budget?",
      answer: "Absolutely! Budget-friendly destinations: Nepal (teahouse trekking), Vietnam (motorbike loops), Peru (Salkantay instead of Inca Trail), Morocco (very affordable), Costa Rica (skip resorts). Budget strategies: Travel during shoulder season, stay in hostels/teahouses, cook your own meals, join group tours (cheaper than private), book activities directly not through hotels, use public transportation, free activities (day hikes, beach time), volunteer exchange programs (WWOOF, Workaway). Most expensive destinations: Norway, Iceland, New Zealand, Canada - but still doable with camping, self-catering, and free activities. Vietnam and Nepal offer incredible adventure for $30-50/day."
    },
    {
      question: "How do I choose between destinations?",
      answer: "Consider these factors: 1) Fitness level - Match activities to your current fitness, not aspirational fitness. 2) Budget - Some destinations are 3x more expensive than others. 3) Time available - Some treks require 2-3 weeks minimum. 4) Season - Check if your travel dates align with ideal weather. 5) Experience - Some require technical skills or prior trekking experience. 6) Interests - Wildlife? Mountains? Desert? Culture? 7) Solo vs. group - Some destinations better for solo travel. 8) Risk tolerance - Higher safety ratings for first-time adventurers. Use this guide's detailed breakdowns to compare. Start with beginner-friendly destinations (New Zealand, Costa Rica, Iceland) to build confidence."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 font-sans pt-16 relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-red-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-red-400/30 to-pink-500/30 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-8 px-4 mb-6">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none"></div>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                Adventure Destinations
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-gray-800">
                The World's Best Destinations for Thrill-Seekers
              </p>
              <p className="text-base max-w-3xl mx-auto text-gray-700" style={{ lineHeight: '1.6' }}>
                Adventure isn't about recklessness. It's about managed risk. Discover 12 epic destinations with honest difficulty assessments, realistic costs, and expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <TableOfContents
            title="12 Adventure Destinations"
            summary="The complete guide to adventure travel. Honest difficulty assessments, fitness requirements, realistic costs, actual outfitters, and what you need to prepare for each destination."
            highlights={[
              { label: 'Best Beginner', value: 'Costa Rica' },
              { label: 'Ultimate Challenge', value: 'Everest Base Camp' },
              { label: 'Best Value', value: 'Patagonia' },
              { label: 'Total Destinations', value: '12' },
            ]}
            sections={[
              { id: 'fitness', label: 'Fitness Requirements' },
              { id: 'introduction', label: 'Introduction' },
              { id: 'influencers', label: 'Expert Advice' },
              { id: 'destinations', label: 'All 12 Destinations' },
              { id: 'faqs', label: 'FAQs' },
              { id: 'truth', label: 'Real Truth' },
            ]}
          />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>12 Adventure Destinations at a Glance</h2>
            <p className="text-center text-gray-500 text-sm mb-6">Sorted by monthly cost (lowest first)</p>
            <div className="overflow-x-auto -mx-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-orange-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Destination</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Type</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Monthly Cost</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Difficulty</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Fitness</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { dest: 'Vietnam', type: 'Motorbike, Trekking', cost: '$900-$1,400', diff: 'Beginner-Intermediate', fit: 'Low-Moderate' },
                    { dest: 'Morocco', type: 'Desert, Trekking', cost: '$1,200-$1,800', diff: 'Beginner-Intermediate', fit: 'Low-Moderate' },
                    { dest: 'Peru', type: 'Trekking, Wildlife', cost: '$1,500-$2,200', diff: 'Beginner-Advanced', fit: 'Low-High' },
                    { dest: 'Jordan', type: 'Desert, Rock Climbing', cost: '$1,800-$2,300', diff: 'Beginner-Intermediate', fit: 'Low-Moderate' },
                    { dest: 'Costa Rica', type: 'Multi-Sport', cost: '$2,000', diff: 'Beginner-Intermediate', fit: 'Low-Moderate' },
                    { dest: 'Nepal', type: 'Mountaineering', cost: '$2,100-$5,200', diff: 'Intermediate-Extreme', fit: 'Moderate-Elite' },
                    { dest: 'Patagonia', type: 'Hiking, Mountaineering', cost: '$2,300', diff: 'Beginner-Advanced', fit: 'Moderate-High' },
                    { dest: 'Tanzania', type: 'Kilimanjaro, Safari', cost: '$2,500-$4,200', diff: 'Intermediate-Advanced', fit: 'Moderate-High' },
                    { dest: 'Canada (Rockies)', type: 'Hiking, Wildlife', cost: '$2,600-$3,600', diff: 'Beginner-Advanced', fit: 'Low-High' },
                    { dest: 'New Zealand', type: 'Multi-Sport', cost: '$2,700', diff: 'Beginner-Advanced', fit: 'Low-High' },
                    { dest: 'Iceland', type: 'Glacier, Volcano', cost: '$2,950', diff: 'Beginner-Intermediate', fit: 'Moderate' },
                    { dest: 'Norway', type: 'Fjords, Climbing', cost: '$3,100', diff: 'Intermediate-Advanced', fit: 'Moderate-High' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-orange-50/50 transition-colors">
                      <td className="py-2.5 px-3 font-medium text-gray-800 whitespace-nowrap">{row.dest}</td>
                      <td className="py-2.5 px-3 text-gray-700 whitespace-nowrap">{row.type}</td>
                      <td className="py-2.5 px-3 text-gray-700 whitespace-nowrap">{row.cost}</td>
                      <td className="py-2.5 px-3 text-gray-700 whitespace-nowrap">{row.diff}</td>
                      <td className="py-2.5 px-3 text-gray-700 whitespace-nowrap">{row.fit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Top Picks */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="backdrop-blur-lg bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
              <span className="text-3xl mb-2 block">🌿</span>
              <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-1">Best Beginner</p>
              <h3 className="text-xl font-bold text-gray-900">Costa Rica</h3>
              <p className="text-sm text-gray-600 mt-1">$2,000/mo &middot; Low fitness &middot; Multi-sport paradise</p>
            </div>
            <div className="backdrop-blur-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
              <span className="text-3xl mb-2 block">💎</span>
              <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">Best Value</p>
              <h3 className="text-xl font-bold text-gray-900">Patagonia</h3>
              <p className="text-sm text-gray-600 mt-1">$2,300/mo &middot; World-class hiking &middot; Stunning scenery</p>
            </div>
            <div className="backdrop-blur-lg bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
              <span className="text-3xl mb-2 block">🏔️</span>
              <p className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-1">Ultimate Challenge</p>
              <h3 className="text-xl font-bold text-gray-900">Everest Base Camp</h3>
              <p className="text-sm text-gray-600 mt-1">$2,100-$5,200/mo &middot; Elite fitness &middot; Life-changing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fitness Requirements Section */}
      <section id="fitness" className="py-16 px-6 bg-gradient-to-r from-amber-500 to-amber-600 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Honest Fitness Requirements
          </h2>
          <p className="text-center text-white text-lg mb-12 opacity-95" style={{ fontFamily: "'Mulish', sans-serif" }}>
            Match your current fitness level to appropriate activities. Be honest with yourself - safety depends on it.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-3">Beginner</h3>
              <p className="text-gray-600 text-sm mb-4 font-semibold">No experience needed</p>
              <ul className="space-y-2 text-gray-700" style={{ fontFamily: "'Mulish', sans-serif" }}>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Easy day hikes (Costa Rica, Greece, Morocco)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Zip-lining, bungee jumping (New Zealand, Costa Rica)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Wildlife safaris (Costa Rica, Tanzania)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Guided glacier walks (Iceland)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-3">Moderate</h3>
              <p className="text-gray-600 text-sm mb-4 font-semibold">Some hiking/trekking experience helpful</p>
              <ul className="space-y-2 text-gray-700" style={{ fontFamily: "'Mulish', sans-serif" }}>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Multi-day treks (Patagonia W Trek, Annapurna Circuit)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Moderate alpine hikes (Norway Trolltunga)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Kayaking, white-water rafting (Costa Rica, New Zealand)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Motorbike adventures (Vietnam Ha Giang Loop)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-3">High</h3>
              <p className="text-gray-600 text-sm mb-4 font-semibold">Training required (2-6 months)</p>
              <ul className="space-y-2 text-gray-700" style={{ fontFamily: "'Mulish', sans-serif" }}>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>EBC Trek + high altitude (Nepal, Peru)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Technical climbs (Island Peak, Mera Peak)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Extreme hiking (Full Patagonia Circuit)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Kilimanjaro summit attempts</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-3">Elite</h3>
              <p className="text-gray-600 text-sm mb-4 font-semibold">Professional training required</p>
              <ul className="space-y-2 text-gray-700" style={{ fontFamily: "'Mulish', sans-serif" }}>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Peak summits (Everest, Denali)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Ice climbing (Norwegian ice, Patagonian ice)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Extreme mountaineering expeditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Technical alpine climbing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="relative py-16 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>
            Adventure Travel Has Changed
          </h2>
          <div className="prose max-w-none text-gray-700" style={{ fontFamily: "'Mulish', sans-serif" }}>
            <p className="text-base mb-4" style={{ lineHeight: '1.6' }}>
              It's no longer just extreme mountaineers and rock climbers. It's people of all fitness levels choosing destinations where they can challenge themselves safely—hiking glaciers, trekking to remote peaks, kayaking fjords, zip-lining through cloud forests, diving in pristine waters.
            </p>
            <p className="text-base mb-6" style={{ lineHeight: '1.6' }}>
              The key: knowing which destinations match your fitness level, what activities are actually doable, how much they cost, and when to go. This guide maps the world's best adventure destinations with honest difficulty assessments, realistic costs, actual outfitters, and what you actually need to prepare.
            </p>
            <div className="backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pick Your Priority:</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Fitness Level:</strong> Beginner? Moderate? Elite? Match activities to your current fitness.</li>
                <li><strong>Activity Type:</strong> Hiking? Climbing? Water sports? Wildlife? Choose your adventure style.</li>
                <li><strong>Budget:</strong> Daily guide costs vary wildly from $50 to $800+</li>
                <li><strong>Season:</strong> Weather matters for safety. Wrong season = cancelled trips or dangerous conditions.</li>
                <li><strong>Solo vs. Group:</strong> Some activities require groups. Some destinations better for solo.</li>
                <li><strong>Experience:</strong> Do you need climbing experience or not? Technical skills required?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Adventure Travel Influencers Section */}
      <section id="influencers" className="relative py-16 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>
            The Adventure Travel Influencers
          </h2>
          <p className="text-center text-gray-700 text-base mb-12" style={{ fontFamily: "'Mulish', sans-serif", lineHeight: '1.6' }}>
            Follow these adventurers for inspiration, tips, and real experiences from around the world
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {influencers.map((influencer, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{influencer.name}</h3>
                <p className="text-orange-600 font-semibold mb-1">{influencer.handle}</p>
                <p className="text-gray-600 text-sm mb-3">{influencer.followers}</p>
                <p className="text-gray-700 mb-3 text-base" style={{ fontFamily: "'Mulish', sans-serif", lineHeight: '1.6' }}>
                  {influencer.description}
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Specialty:</strong> {influencer.specialty}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 text-gray-900">What They All Prioritize:</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-base" style={{ fontFamily: "'Mulish', sans-serif", lineHeight: '1.6' }}>
              <li className="flex items-start text-gray-700">
                <span className="mr-2">✓</span>
                <span>Real experiences over Instagram moments</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="mr-2">✓</span>
                <span>Reputable guides and managed risk</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="mr-2">✓</span>
                <span>Authentic local interactions</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="mr-2">✓</span>
                <span>Challenging yourself safely</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="mr-2">✓</span>
                <span>Community with other adventurers</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="mr-2">✓</span>
                <span>Sustainable and responsible travel</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="relative py-16 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>
            The 12 Best Adventure Destinations
          </h2>
          <p className="text-center text-gray-600 text-base mb-12" style={{ fontFamily: "'Mulish', sans-serif", lineHeight: '1.6' }}>
            Click on any destination to expand and see comprehensive details including costs, activities, safety, healthcare, guides, and packing lists
          </p>
          <div className="space-y-6">
            {destinations.map((destination, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <button
                  className="w-full relative overflow-hidden bg-gradient-to-r from-orange-400/80 via-red-400/80 to-yellow-400/80 backdrop-blur-sm text-white p-6 flex items-center justify-between hover:from-orange-500/90 hover:via-red-500/90 hover:to-yellow-500/90 transition-all duration-300"
                  onClick={() => toggleCard(index)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                    <div className="grid md:grid-cols-3 gap-3 text-sm">
                      <div>
                        <span className="font-semibold text-white">Type:</span>
                        <span className="text-white/90 ml-2">{destination.adventureType}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-white">Difficulty:</span>
                        <span className="text-white/90 ml-2">{destination.difficulty}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-white">Monthly Cost:</span>
                        <span className="text-yellow-200 font-semibold ml-2">{destination.monthlyCost.total}</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 text-white relative z-10">
                    {expandedCard === index ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
                  </div>
                </button>

                {expandedCard === index && (
                  <div className="p-6 bg-white/80 border-t border-white/60" style={{ fontFamily: "'Mulish', sans-serif" }}>
                    {/* Physical Fitness Required */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Physical Fitness Required</h4>
                      <p className="text-gray-700 bg-blue-50 p-3 rounded text-base" style={{ lineHeight: '1.6' }}>{destination.fitness}</p>
                    </div>

                    {/* Monthly Cost Breakdown */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Monthly Cost Breakdown</h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="flex justify-between">
                            <span className="text-gray-700">Accommodation:</span>
                            <span className="font-semibold text-gray-900">{destination.monthlyCost.accommodation}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">Food:</span>
                            <span className="font-semibold text-gray-900">{destination.monthlyCost.food}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">Activities/Guides:</span>
                            <span className="font-semibold text-gray-900">{destination.monthlyCost.activities}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">Transportation:</span>
                            <span className="font-semibold text-gray-900">{destination.monthlyCost.transportation}</span>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between">
                          <span className="text-gray-900 font-semibold text-lg">Total Monthly:</span>
                          <span className="text-orange-600 font-bold text-lg">{destination.monthlyCost.total}</span>
                        </div>
                      </div>
                    </div>

                    {/* Why It's Special */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Why It's Special</h4>
                      <p className="text-gray-700 leading-relaxed bg-amber-50 p-4 rounded">{destination.whySpecial}</p>
                    </div>

                    {/* Why Adventurers Love It */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Why Adventurers Love It</h4>
                      <p className="text-gray-700 leading-relaxed bg-green-50 p-4 rounded">{destination.whyAdventurersLoveIt}</p>
                    </div>

                    {/* Top Activities */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Top Activities with Costs</h4>
                      <ul className="space-y-2">
                        {destination.topActivities.map((activity, idx) => (
                          <li key={idx} className="flex items-start bg-gray-50 p-3 rounded">
                            <span className="text-orange-500 mr-2 mt-1 font-bold">▸</span>
                            <span className="text-gray-700">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Best Season */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Best Season to Visit</h4>
                      <ul className="space-y-2">
                        {destination.bestSeason.map((season, idx) => (
                          <li key={idx} className="text-gray-700 bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
                            {season}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Safety Rating */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Safety Rating & Information</h4>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                        <p className="text-gray-700 font-semibold">{destination.safety}</p>
                      </div>
                    </div>

                    {/* Healthcare Info */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Healthcare & Medical Facilities</h4>
                      <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                        <p className="text-gray-700">{destination.healthcare}</p>
                      </div>
                    </div>

                    {/* Guide Companies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Recommended Guides & Outfitters</h4>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <ul className="space-y-2">
                          {destination.guides.map((guide, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                              <span className="text-gray-700">{guide}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* What to Pack */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">What to Pack</h4>
                      <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                        <p className="text-gray-700">{destination.whatToPack}</p>
                      </div>
                    </div>

                    {/* Cultural Notes */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Cultural Notes & Etiquette</h4>
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <p className="text-gray-700">{destination.culturalNotes}</p>
                      </div>
                    </div>

                    {/* Visa Information */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Visa Information</h4>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="text-gray-700">{destination.visaInfo}</p>
                      </div>
                    </div>

                    {/* Solo Travel Friendly */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solo Travel Friendly</h4>
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <p className="text-gray-700">{destination.soloTravelFriendly}</p>
                      </div>
                    </div>

                    {/* Budget Tips */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Budget Tips</h4>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-gray-700">{destination.budgetTips}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Activity Type Table */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Adventure by Activity Type
          </h2>
          <p className="text-center text-gray-600 mb-8" style={{ fontFamily: "'Mulish', sans-serif" }}>
            Find the best destinations for your preferred adventure activities
          </p>
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full border-collapse bg-white">
              <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <tr>
                  <th className="p-4 text-left font-semibold">Activity</th>
                  <th className="p-4 text-left font-semibold">Best Destinations</th>
                  <th className="p-4 text-left font-semibold">Difficulty Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200" style={{ fontFamily: "'Mulish', sans-serif" }}>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-900">Hiking</td>
                  <td className="p-4 text-gray-700">Patagonia, Nepal, Norway, Peru, Morocco, Canada</td>
                  <td className="p-4 text-gray-700">Beginner-Advanced</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-900">Climbing & Mountaineering</td>
                  <td className="p-4 text-gray-700">Nepal (Everest, Island Peak), Patagonia (Fitz Roy), Norway, Tanzania (Kilimanjaro)</td>
                  <td className="p-4 text-gray-700">Intermediate-Extreme</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-900">Water Sports</td>
                  <td className="p-4 text-gray-700">Costa Rica, New Zealand, Vietnam, Iceland, Canada</td>
                  <td className="p-4 text-gray-700">Beginner-Advanced</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-900">Wildlife & Safari</td>
                  <td className="p-4 text-gray-700">Costa Rica, Tanzania, Canada, Nepal, Peru</td>
                  <td className="p-4 text-gray-700">Beginner-Intermediate</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-900">Desert Adventure</td>
                  <td className="p-4 text-gray-700">Morocco, Jordan, Iceland (volcanic)</td>
                  <td className="p-4 text-gray-700">Beginner-Intermediate</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-900">Multi-Sport</td>
                  <td className="p-4 text-gray-700">New Zealand, Iceland, Costa Rica, Morocco, Canada</td>
                  <td className="p-4 text-gray-700">Beginner-Advanced</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-900">Cultural Adventure</td>
                  <td className="p-4 text-gray-700">Nepal, Peru, Morocco, Jordan, Vietnam</td>
                  <td className="p-4 text-gray-700">Beginner-Intermediate</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-900">Winter Sports</td>
                  <td className="p-4 text-gray-700">Norway, Iceland, Canada, New Zealand</td>
                  <td className="p-4 text-gray-700">Beginner-Advanced</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The Real Adventure Truth Section */}
      <section id="truth" className="py-16 px-6 bg-gray-900 text-white scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Real Adventure Truth</h2>
          <div className="prose max-w-none text-gray-300" style={{ fontFamily: "'Mulish', sans-serif" }}>
            <p className="text-lg leading-relaxed mb-4">
              Adventure isn't about being fearless. It's about understanding risk, preparing properly, and choosing experienced guides.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              The best adventures happen when you're slightly outside your comfort zone—not miles beyond it.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Start with destinations and activities matching your fitness. Build skills. Do harder adventures next time. That's how seasoned adventurers actually operate.
            </p>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-left">
              <h3 className="text-xl font-bold mb-4 text-center">Adventure Travel Principles:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-teal-400 mr-3 text-xl">1.</span>
                  <span>Managed risk over recklessness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-3 text-xl">2.</span>
                  <span>Professional guides for technical activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-3 text-xl">3.</span>
                  <span>Honest assessment of your fitness level</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-3 text-xl">4.</span>
                  <span>Proper gear and preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-3 text-xl">5.</span>
                  <span>Comprehensive travel insurance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-3 text-xl">6.</span>
                  <span>Respect for local cultures and environments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">

          <CreatorInsights page="adventure-travel" />
        <PillarCTA guideName="adventure-travel" />

      {/* FAQ Section */}
      <section id="faqs" className="py-16 px-6 bg-gray-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Real Adventurer Questions Answered
          </h2>
          <p className="text-center text-gray-600 mb-12" style={{ fontFamily: "'Mulish', sans-serif" }}>
            Everything you need to know before planning your adventure. Click to expand each question.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="text-orange-600 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-orange-600 flex-shrink-0" size={24} />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-5 pb-5 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed pt-4" style={{ fontFamily: "'Mulish', sans-serif" }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
          <RelatedGuides currentPage="adventure-travel" />
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 px-6 bg-gray-100 text-center">
        <Link href="/" className="text-orange-600 hover:text-orange-700 font-semibold text-lg transition-colors inline-flex items-center">
          <span className="mr-2">←</span>
          <span>Back to Home</span>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center" style={{ fontFamily: "'Mulish', sans-serif" }}>
        <p className="text-sm max-w-4xl mx-auto">
          Last updated: 2025. This comprehensive adventure travel guide covers 12 epic destinations with detailed activity breakdowns, honest fitness requirements, realistic monthly costs, safety ratings, healthcare information, recommended guides, packing lists, cultural notes, visa requirements, and budget tips based on millions of adventure travelers and expert research.
        </p>
        <p className="text-xs mt-4 text-gray-500">
          Always verify current travel advisories, visa requirements, and safety conditions before booking. Adventure activities carry inherent risks - proper preparation and professional guidance essential.
        </p>
      </footer>
    </div>
  );
}
