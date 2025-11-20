'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

interface BudgetBreakdown {
  accommodation: string;
  food: string;
  activities: string;
  transportation: string;
  total: string;
}

interface AccommodationOptions {
  dorms: string;
  budgetGuesthouses: string;
  cheapestSafe: string;
}

interface FoodCosts {
  streetFood: string;
  localRestaurant: string;
  selfCook: string;
  beer: string;
}

interface Destination {
  id: number;
  name: string;
  location: string;
  monthlyBudget: BudgetBreakdown;
  whySpecial: string;
  accommodation: AccommodationOptions;
  bestAreas: string;
  foodCosts: FoodCosts;
  bestForFood: string;
  transportation: string[];
  activities: string[];
  gettingThere: string;
  safety: string;
  bestSeason: string;
  challenges: string;
  whyLoveIt: string;
  proTip?: string;
}

const BudgetTravelPage = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (id: number) => {
    setExpandedCards(prev =>
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    );
  };

  const destinations: Destination[] = [
    {
      id: 1,
      name: 'Vietnam',
      location: 'Hanoi / Hoi An / Ho Chi Minh City',
      monthlyBudget: {
        accommodation: '$150 (dorms $5-$10/night)',
        food: '$150 (street food $1.50-$3/meal)',
        activities: '$100',
        transportation: '$50',
        total: '$450/month ($15/day)'
      },
      whySpecial: "Cheapest Southeast Asia. Best street food. Incredible scenery. Friendly locals. Easy to navigate. Coffee costs $0.25. Pho costs $2. Dorm beds cost $5. You can live like a king for under $15/day.",
      accommodation: {
        dorms: '$5-$10/night (AC, clean, hostels have common areas)',
        budgetGuesthouses: '$14-$20/night',
        cheapestSafe: 'Sapa homestays ($8), Mui Ne backpacker villages ($5.50)'
      },
      bestAreas: 'Old Quarter Hanoi, Hoi An Ancient Town, Bui Vien District (HCMC)',
      foodCosts: {
        streetFood: '$1.50-$3 (pho, banh mi, bun cha)',
        localRestaurant: '$4-$6',
        selfCook: '$2-$3/meal (supermarkets accessible)',
        beer: '$0.25-$0.80 (fresh local beer, cheapest in world)'
      },
      bestForFood: 'Street stalls at dawn, wet markets, family-run noodle shops',
      transportation: [
        'Scooter Rental: $4-$7.50/day',
        'Intercity Bus: $5-$15',
        'Grab/Uber: $0.70-$5'
      ],
      activities: [
        'Walking Old Quarter Hanoi: Free',
        'Hoi An Old Town: $5 entry',
        'Beach access (Nha Trang, Da Nang): Free-$1.50',
        'Imperial City Hue: $6.60',
        'Mekong Delta day trip: $15-$30'
      ],
      gettingThere: 'Fly Bangkok to Hanoi ($50-$100), or overland from Cambodia/Laos (buses $10-$20)',
      safety: 'Safe areas: Old Quarter Hanoi, Hoi An, District 1 HCMC. Tips: Use Grab/Uber (avoid taxi scams), book hostels with free breakfast/water',
      bestSeason: 'September-April (cool, dry)',
      challenges: 'Language barrier (translation app essential), taxi/tour scams (common), traffic dangerous (careful crossing), negotiation required',
      whyLoveIt: 'Incredibly cheap food, low dorm costs, beautiful culture, easy to travel under $25/day, incredible value for money',
      proTip: '3-4 weeks is ideal (slow travel = cheaper weekly rates)'
    },
    {
      id: 2,
      name: 'Thailand',
      location: 'Bangkok / Chiang Mai / Islands',
      monthlyBudget: {
        accommodation: '$180-$360 (dorms $6-$12, rooms $20-$25)',
        food: '$60-$150 (street food $2-$5)',
        activities: '$150-$300',
        transportation: '$300-$450',
        total: '$600-$750/month ($20-$25/day inland)'
      },
      whySpecial: "More expensive than Vietnam but worth it for ease of travel. Chiang Mai is the budget traveler hub. Food is amazing. Dorms are social. Infrastructure is developed. Language is less of a barrier.",
      accommodation: {
        dorms: '$6-$12/night (AC, common areas, social)',
        budgetGuesthouses: '$20-$25/night',
        cheapestSafe: 'Avoid islands/beach resorts (dorms $15-$20+, expensive)'
      },
      bestAreas: 'Chiang Mai, Pai, Northern Thailand. Avoid for Budget: Koh Phi Phi, Phuket, Krabi (tourist inflation)',
      foodCosts: {
        streetFood: '$2-$5/meal (pad thai, khao pad, som tam)',
        localRestaurant: '$4-$6',
        selfCook: '$2-$3/meal',
        beer: '$1.50-$3'
      },
      bestForFood: 'Night markets, street food stalls, local restaurants in non-tourist areas',
      transportation: [
        'Songthaew (local bus): $0.50-$1.50',
        'Scooter rental: $5-$7/day',
        'Overnight bus: $10-$20 (saves accommodation)'
      ],
      activities: [
        'Temples: Free-$3',
        'Cooking classes: $10-$15',
        'Elephant sanctuaries: $40-$80',
        'Zip-lining: $30-$50'
      ],
      gettingThere: 'International flights to Bangkok from major cities, or overland from neighboring countries',
      safety: 'Generally very safe. Use registered taxis or Grab. Book verified hostels.',
      bestSeason: 'November-February (cool, dry)',
      challenges: 'Beach areas are expensive (plan accordingly), tuk-tuk drivers try to overcharge, tubing/partying can blow budget quickly',
      whyLoveIt: 'Developed infrastructure, social hostel scene, incredible value, easy to navigate',
      proTip: 'Stick to Northern Thailand for best budget value. Islands are significantly more expensive.'
    },
    {
      id: 3,
      name: 'Laos',
      location: 'Luang Prabang / Vang Vieng',
      monthlyBudget: {
        accommodation: '$150-$240 (dorms $5-$8/night)',
        food: '$60-$120 (noodle soup $2)',
        activities: '$30-$90',
        transportation: '$50-$100',
        total: '$450-$600/month ($15-$20/day)'
      },
      whySpecial: "Quietest Southeast Asia. Most authentic. Ultra-cheap. Least touristy. Perfect for travelers seeking peace and slow travel. Maintains traditional culture better than neighboring countries.",
      accommodation: {
        dorms: '$5-$8/night',
        budgetGuesthouses: '$10-$15/night',
        cheapestSafe: 'Nong Khiaw guesthouses ($5-$7), village homestays ($3-$5)'
      },
      bestAreas: 'Luang Prabang old town, Vang Vieng riverside, Nong Khiaw village',
      foodCosts: {
        streetFood: '$2-$4/meal (noodle soup, sticky rice)',
        localRestaurant: '$3-$5',
        selfCook: '$2-$3/meal',
        beer: '$1-$2 (Beer Lao)'
      },
      bestForFood: 'Night markets in Luang Prabang, riverside restaurants in Vang Vieng',
      transportation: [
        'Local bus: $2-$5',
        'Minivan between cities: $10-$15',
        'Scooter rental: $5-$10/day',
        'Slow boat on Mekong: $25-$35'
      ],
      activities: [
        'Temples: Free-$3',
        'Kuang Si Falls: $3 entry',
        'Kayaking: $10-$20',
        'Tubing in Vang Vieng: $6-$10',
        'Village visits: Free'
      ],
      gettingThere: 'Overland from Thailand or Vietnam ($10-$20 buses), or fly into Luang Prabang',
      safety: 'Very safe. Friendly locals. Low crime. Book verified guesthouses. Be cautious with tubing activities.',
      bestSeason: 'November-February (cool and dry)',
      challenges: 'Limited ATMs (bring cash), slow travel pace (not ideal if rushed), basic infrastructure in rural areas',
      whyLoveIt: 'Most peaceful Southeast Asia destination, incredibly authentic, ultra-cheap, less crowded than Thailand/Vietnam',
      proTip: 'Best for solo travelers, digital nomads, and peace-seekers wanting to escape tourist crowds'
    },
    {
      id: 4,
      name: 'India',
      location: 'Rajasthan / Kerala / Goa',
      monthlyBudget: {
        accommodation: '$150-$200 (guesthouses $5-$10/night)',
        food: '$60-$120 (thali $2-$3, street food $0.50-$1)',
        activities: '$30-$100 (temples free-$3)',
        transportation: '$90-$300 (trains, buses)',
        total: '$300-$450/month ($10-$15/day)'
      },
      whySpecial: "Food costs almost nothing. Accommodation is incredibly cheap. Trains are affordable and an experience. You can eat like royalty for $3. Thali (full meal) costs $2-$3. A room costs $5-$10. The absolute cheapest destination.",
      accommodation: {
        dorms: '$6-$12/night',
        budgetGuesthouses: '$5-$10/night',
        cheapestSafe: 'Budget hotels $12-$20/night'
      },
      bestAreas: 'Jaipur (Rajasthan), Kochi (Kerala), Goa beaches (outside tourist season)',
      foodCosts: {
        streetFood: '$0.50-$1 (samosa, chaat, pakora)',
        localRestaurant: '$2-$3 (thali - full meal)',
        selfCook: '$1-$2/meal',
        beer: '$1.50-$3 (in Goa)'
      },
      bestForFood: 'Thali restaurants, street food stalls, local dhabas',
      transportation: [
        'Trains: $5-$30 (incredible experience, cheap)',
        'Buses: $3-$10',
        'Tuk-tuk: $1-$3',
        'Metro (major cities): $0.30-$1'
      ],
      activities: [
        'Temples: Free-$3 entry',
        'Markets: Free to explore',
        'Beaches: Free (Goa)',
        'Hikes: Free (Himalayas)',
        'Taj Mahal: $15'
      ],
      gettingThere: 'Fly into Delhi or Mumbai from SE Asia ($80-$150)',
      safety: 'Generally safe but requires street smarts. Women travelers should take extra precautions. Use registered taxis. Book reputable guesthouses.',
      bestSeason: 'October-February (cool, dry, comfortable)',
      challenges: 'Culture shock is real, hygiene standards differ, stomach issues common (go slow on street food), pollution in cities, extreme patience required',
      whyLoveIt: 'Ultra-cheap, incredible food, spiritual energy, diverse landscapes (mountains to beaches to deserts), authentic experiences',
      proTip: 'Use Indian trains (Rajdhani, Shatabdi) - slow, cheap, authentic. Book sleeper class for overnight journeys.'
    },
    {
      id: 5,
      name: 'Cambodia',
      location: 'Siem Reap / Phnom Penh',
      monthlyBudget: {
        accommodation: '$210+ (dorms $7+/night)',
        food: '$60-$120 (meals $2-$4)',
        activities: '$100-$150',
        transportation: '$50-$100',
        total: '$450-$600/month ($15-$20/day)'
      },
      whySpecial: "Cheapest with Laos. Incredible temples including Angkor Wat. Friendly locals. Emerging backpacker destination with excellent infrastructure for budget travelers. Rich history and culture.",
      accommodation: {
        dorms: '$7+/night',
        budgetGuesthouses: '$10-$15/night',
        cheapestSafe: 'Siem Reap backpacker area ($7-$10), Phnom Penh riverside ($8-$12)'
      },
      bestAreas: 'Siem Reap backpacker zone, riverside Phnom Penh, Battambang town center',
      foodCosts: {
        streetFood: '$2-$4/meal (noodles, fried rice)',
        localRestaurant: '$3-$5',
        selfCook: '$2-$3/meal',
        beer: '$0.50-$1.50'
      },
      bestForFood: 'Night markets, street food areas, local restaurants away from temple zones',
      transportation: [
        'Tuk-tuk: $1-$5',
        'Bus between cities: $5-$15',
        'Scooter rental: $5-$7/day',
        'Boat to Siem Reap: $25-$35'
      ],
      activities: [
        'Angkor Wat: $37/day (biggest expense)',
        'Killing Fields: $6',
        'Royal Palace: $10',
        'Local markets: Free',
        'Tonle Sap Lake: $20'
      ],
      gettingThere: 'Overland from Thailand/Vietnam ($10-$20), or fly into Phnom Penh/Siem Reap',
      safety: 'Safe areas: Siem Reap backpacker zone, riverside Phnom Penh. Be cautious at night. Use registered tuk-tuks.',
      bestSeason: 'November-March (cool and dry)',
      challenges: 'Angkor Wat tickets are expensive (budget accordingly), some areas have poverty-related safety concerns, negotiation needed for tuk-tuks',
      whyLoveIt: 'Angkor Wat is unmissable, incredibly cheap outside temple tickets, friendly backpacker community, fascinating history',
      proTip: 'Buy 3-day Angkor Wat pass ($62) instead of 1-day. Spread temple visits over multiple days for better value and less exhaustion.'
    },
    {
      id: 6,
      name: 'Indonesia',
      location: 'Java / Bali / Lombok',
      monthlyBudget: {
        accommodation: '$300-$360 (dorms $10-$12/night)',
        food: '$60-$75 (meals $2-$2.50)',
        activities: '$150-$300',
        transportation: '$100-$200',
        total: '$600-$750/month ($20-$25/day outside Bali)'
      },
      whySpecial: "Incredible islands. Cheap outside Bali. Amazing ferry hopping between islands. Diverse landscapes from volcanoes to beaches. Rich culture and friendly people. Java and outer islands offer exceptional budget value.",
      accommodation: {
        dorms: '$10-$12/night',
        budgetGuesthouses: '$15-$20/night',
        cheapestSafe: 'Java guesthouses ($8-$12), Lombok homestays ($10-$15). Avoid Bali and Gili Islands (expensive, $35+/day)'
      },
      bestAreas: 'Yogyakarta (Java), Lombok, Flores, Sumatra. Avoid Bali tourist areas for budget travel.',
      foodCosts: {
        streetFood: '$2-$2.50/meal (nasi goreng, mie goreng)',
        localRestaurant: '$3-$5 (warungs)',
        selfCook: '$2-$3/meal',
        beer: '$2-$4'
      },
      bestForFood: 'Local warungs (small family restaurants), night markets, street food stalls',
      transportation: [
        'Local bus: $1-$3',
        'Ferry between islands: $10-$30',
        'Scooter rental: $3-$5/day',
        'Domestic flights: $30-$80'
      ],
      activities: [
        'Temples (Borobudur, Prambanan): $10-$25',
        'Volcano hikes: $20-$50',
        'Beaches: Free',
        'Snorkeling: $10-$20',
        'Rice terrace walks: Free'
      ],
      gettingThere: 'Fly into Jakarta or Bali from Singapore/Kuala Lumpur ($50-$150)',
      safety: 'Generally safe. Be cautious with belongings in crowded areas. Use registered transport. Book reputable guesthouses.',
      bestSeason: 'April-October (dry season)',
      challenges: 'Bali and Gili Islands are expensive (avoid for budget), ferry schedules can be unreliable, some areas have limited English',
      whyLoveIt: 'Island hopping adventure, incredible diversity, cheap outside tourist zones, warm hospitality, stunning nature',
      proTip: 'Focus on Java, Lombok, and Flores for best budget value. Skip Bali tourist areas or budget $35+/day there.'
    },
    {
      id: 7,
      name: 'Guatemala',
      location: 'Antigua / Lake Atitlan',
      monthlyBudget: {
        accommodation: '$210-$330 (dorms $7-$11/night)',
        food: '$60-$120 (meals $2-$4)',
        activities: '$100-$200',
        transportation: '$50-$100',
        total: '$600-$750/month ($20-$25/day)'
      },
      whySpecial: "Cheapest Central America. Incredible Mayan culture. Natural beauty from volcanoes to lakes. Colonial architecture. Authentic indigenous communities. Perfect blend of adventure and culture on a budget.",
      accommodation: {
        dorms: '$7-$11/night',
        budgetGuesthouses: '$15-$20/night',
        cheapestSafe: 'Lake Atitlan village homestays ($8-$12), Antigua budget hotels ($12-$18)'
      },
      bestAreas: 'Antigua colonial zone, Lake Atitlan villages (San Pedro, San Marcos), Flores for Tikal access',
      foodCosts: {
        streetFood: '$2-$4/meal (tacos, tamales, tortillas)',
        localRestaurant: '$4-$6',
        selfCook: '$2-$3/meal',
        beer: '$1.50-$3'
      },
      bestForFood: 'Local comedores (small restaurants), markets, street food stalls',
      transportation: [
        'Chicken buses: $1-$3 (local buses, colorful and cheap)',
        'Shuttle buses: $10-$20',
        'Tuk-tuk: $1-$3',
        'Boat across Lake Atitlan: $2-$4'
      ],
      activities: [
        'Tikal sunrise tour: $25',
        'Volcano hikes: $40 (Acatenango overnight)',
        'Lake villages: Free to explore',
        'Hot springs: $3-$5',
        'Markets: Free'
      ],
      gettingThere: 'Fly into Guatemala City, or overland from Mexico/Belize ($15-$30 buses)',
      safety: 'Safe in tourist areas. Avoid Guatemala City except for transit. Use registered shuttles. Travel during daylight. Lake Atitlan and Antigua are safe.',
      bestSeason: 'November-April (dry season)',
      challenges: 'Some safety concerns (stick to tourist areas), chicken buses can be cramped, limited English outside tourist zones',
      whyLoveIt: 'Cheapest Central America, stunning natural beauty, rich Mayan culture, incredible volcano hikes, charming colonial towns',
      proTip: 'Take chicken buses for authentic local experience and massive savings. Overnight Acatenango volcano hike is a must-do.'
    },
    {
      id: 8,
      name: 'Bolivia',
      location: 'La Paz / Salar de Uyuni',
      monthlyBudget: {
        accommodation: '$210-$300 (dorms $7-$10/night)',
        food: '$60-$90 (meals $2-$3)',
        activities: '$150-$250',
        transportation: '$80-$150',
        total: '$450-$600/month ($15-$20/day)'
      },
      whySpecial: "Cheapest South America. Otherworldly landscapes from salt flats to Amazon. High-altitude adventures. Indigenous culture. The Salar de Uyuni salt flats are unlike anywhere else on Earth.",
      accommodation: {
        dorms: '$7-$10/night',
        budgetGuesthouses: '$12-$18/night',
        cheapestSafe: 'La Paz budget hostels ($7-$10), Sucre guesthouses ($8-$12)'
      },
      bestAreas: 'La Paz Sopocachi neighborhood, Sucre colonial center, Uyuni town',
      foodCosts: {
        streetFood: '$2-$3/meal (salteñas, anticuchos)',
        localRestaurant: '$3-$5',
        selfCook: '$2-$3/meal',
        beer: '$1-$2'
      },
      bestForFood: 'Local markets, street food stalls, set lunch menus (almuerzos)',
      transportation: [
        'Local bus: $0.30-$0.50',
        'Long-distance bus: $10-$30',
        'Shared taxis: $1-$3',
        'Death Road bike tour: $50-$80'
      ],
      activities: [
        'Uyuni Salt Flats: $100-$120 for 3-day tour (biggest expense)',
        'Death Road biking: $50-$80',
        'Lake Titicaca: $10-$20 tours',
        'Valley of the Moon: $3',
        'Witches Market: Free'
      ],
      gettingThere: 'Fly into La Paz from Lima or Buenos Aires ($100-$200), or overland from Peru/Chile',
      safety: 'Generally safe but use street smarts. Avoid protests/demonstrations. Book reputable tour companies for Uyuni. Altitude sickness is common.',
      bestSeason: 'May-October (dry season, best for Uyuni)',
      challenges: 'High altitude requires acclimatization, long bus journeys, basic infrastructure, Uyuni tour is expensive (but worth it)',
      whyLoveIt: 'Cheapest South America, Salar de Uyuni is bucket-list worthy, incredible adventure opportunities, authentic culture, dramatic landscapes',
      proTip: 'Budget extra for the 3-day Uyuni tour ($100-$120) - it is absolutely worth it and the main reason to visit Bolivia.'
    },
    {
      id: 9,
      name: 'Albania',
      location: 'Tirana / Albanian Riviera',
      monthlyBudget: {
        accommodation: '$300 (dorms $10/night)',
        food: '$60-$120 (meals $2-$4)',
        activities: '$150-$300',
        transportation: '$100-$200',
        total: '$600-$750/month ($20-$25/day)'
      },
      whySpecial: "Cheapest Europe. Unspoiled beaches and mountains. Friendly locals. Growing backpacker scene. Beautiful Albanian Alps. Mediterranean coastline at fraction of Greece/Croatia prices. Hidden gem of Europe.",
      accommodation: {
        dorms: '$10/night',
        budgetGuesthouses: '$15-$25/night',
        cheapestSafe: 'Tirana hostels ($8-$12), Gjirokaster guesthouses ($10-$15), Albanian Alps homestays ($10-$15)'
      },
      bestAreas: 'Tirana Blloku district, Saranda, Gjirokaster, Shkoder for Albanian Alps access',
      foodCosts: {
        streetFood: '$2-$4/meal (burek, qofte)',
        localRestaurant: '$4-$8',
        selfCook: '$3-$5/meal',
        beer: '$1-$2'
      },
      bestForFood: 'Local restaurants in non-touristy areas, bakeries for burek, traditional taverns',
      transportation: [
        'Furgon (minibus): $3-$10',
        'Bus between cities: $5-$15',
        'Local bus: $0.50-$1',
        'Rental car: $20-$30/day (best for beaches)'
      ],
      activities: [
        'Hiking Albanian Alps: Free',
        'Beaches: Free',
        'Berat/Gjirokaster UNESCO towns: $3-$5',
        'Rafting: $30+',
        'Blue Eye Spring: $1'
      ],
      gettingThere: 'Fly into Tirana from European cities ($30-$100), or overland from Greece/Montenegro',
      safety: 'Very safe for travelers. Friendly locals. Some roads are rough. Use registered taxis.',
      bestSeason: 'May-June and September-October (warm, not too hot, fewer crowds)',
      challenges: 'Limited public transport to beaches (consider rental car), some English language barriers, infrastructure developing',
      whyLoveIt: 'Cheapest Europe, stunning unspoiled nature, incredibly friendly people, beautiful beaches without crowds, authentic experiences',
      proTip: 'Perfect for budget Europe seekers and adventure travelers. Combine coast and mountains for diverse experience.'
    },
    {
      id: 10,
      name: 'Georgia',
      location: 'Tbilisi / Kazbegi',
      monthlyBudget: {
        accommodation: '$300-$450 (dorms $10-$15/night)',
        food: '$90-$150 (meals $3-$5)',
        activities: '$100-$200',
        transportation: '$60-$120',
        total: '$450-$600/month ($15-$20/day)'
      },
      whySpecial: "Rivals Asia prices in Europe. Ancient wine country (8,000 years of winemaking). Stunning Caucasus mountains. Incredible hospitality. 1-year digital nomad visa available. Diverse landscapes and rich history.",
      accommodation: {
        dorms: '$10-$15/night',
        budgetGuesthouses: '$15-$25/night',
        cheapestSafe: 'Tbilisi Fabrika hostel area ($10-$15), Kazbegi guesthouses ($12-$18), Batumi budget hotels ($15-$20)'
      },
      bestAreas: 'Tbilisi Old Town, Kazbegi mountain villages, Batumi for Black Sea coast',
      foodCosts: {
        streetFood: '$3-$5/meal (khachapuri, khinkali)',
        localRestaurant: '$5-$8',
        selfCook: '$3-$5/meal',
        beer: '$1-$2'
      },
      bestForFood: 'Traditional Georgian restaurants, bakeries for khachapuri, wine bars',
      transportation: [
        'Metro (Tbilisi): $0.20',
        'Marshrutka (minibus): $1-$5',
        'Bus between cities: $5-$15',
        'Shared taxi: $3-$10'
      ],
      activities: [
        'Monasteries: Free',
        'Hiking: Free (Caucasus mountains)',
        'Wine tasting: $10-$20',
        'Sulfur baths: $3-$10',
        'Cable car: $2'
      ],
      gettingThere: 'Fly into Tbilisi from European/Middle Eastern cities ($80-$200)',
      safety: 'Very safe. Extremely hospitable locals. Low crime. Safe for solo travelers including women.',
      bestSeason: 'May-October (spring and fall ideal for hiking)',
      challenges: 'Georgian alphabet is difficult, limited English outside Tbilisi, some rural areas have basic facilities',
      whyLoveIt: 'Asian prices in Europe, incredible food and wine, stunning mountain scenery, warm hospitality, 1-year digital nomad visa, safe and easy',
      proTip: 'Best for Eastern Europe seekers and digital nomads. Take advantage of the 1-year visa-free stay for many nationalities.'
    },
    {
      id: 11,
      name: 'Bulgaria',
      location: 'Sofia / Plovdiv',
      monthlyBudget: {
        accommodation: '$360-$540 (dorms $12-$18/night)',
        food: '$120-$240 (meals $4-$8)',
        activities: '$150-$300',
        transportation: '$100-$200',
        total: '$750-$900/month ($25-$30/day)'
      },
      whySpecial: "Cheapest EU country. Rich history and culture. Beautiful mountains for hiking and skiing. Black Sea beaches. Charming old towns. EU membership means good infrastructure and safety standards at budget prices.",
      accommodation: {
        dorms: '$12-$18/night',
        budgetGuesthouses: '$20-$30/night',
        cheapestSafe: 'Sofia hostels ($12-$18), Plovdiv old town guesthouses ($15-$25), mountain huts ($10-$15)'
      },
      bestAreas: 'Sofia city center, Plovdiv old town, Bansko for skiing, Varna for Black Sea coast',
      foodCosts: {
        streetFood: '$4-$8/meal (banitsa, kebapche)',
        localRestaurant: '$6-$12',
        selfCook: '$4-$6/meal',
        beer: '$1-$2'
      },
      bestForFood: 'Traditional mehanas (taverns), bakeries, local restaurants',
      transportation: [
        'Metro/tram (Sofia): $0.60',
        'Bus between cities: $5-$15',
        'Train: $5-$20',
        'Shared taxi: $3-$10'
      ],
      activities: [
        'Rila Monastery: Free (transport $10-$15)',
        'Hiking Seven Rila Lakes: $8',
        'Old town walks: Free',
        'Museums: $3-$8',
        'Skiing (Bansko): $30-$50/day'
      ],
      gettingThere: 'Fly into Sofia from European cities ($30-$150), or overland from Greece/Romania/Turkey',
      safety: 'Safe EU country. Good infrastructure. Low crime in tourist areas. Reliable public transport.',
      bestSeason: 'May-September (summer), December-March (skiing)',
      challenges: 'Some English language barriers, public transport can be slow, winter is very cold',
      whyLoveIt: 'Cheapest EU destination, EU infrastructure and safety, beautiful nature, rich history, good value skiing, diverse attractions',
      proTip: 'Perfect for budget Europe travelers wanting EU access. Combine Sofia culture with Rila mountains and Black Sea coast.'
    },
    {
      id: 12,
      name: 'Colombia',
      location: 'Medellin / Cartagena',
      monthlyBudget: {
        accommodation: '$300-$450 (dorms $10-$15/night)',
        food: '$90-$180 (meals $3-$6)',
        activities: '$150-$300',
        transportation: '$100-$200',
        total: '$600-$900/month ($20-$30/day)'
      },
      whySpecial: "Improving safety situation. Incredibly friendly locals. World-class coffee region. Diverse landscapes from Caribbean coast to Andes mountains. Vibrant culture. Growing digital nomad hub especially in Medellin.",
      accommodation: {
        dorms: '$10-$15/night',
        budgetGuesthouses: '$20-$30/night',
        cheapestSafe: 'Medellin El Poblado hostels ($10-$15), Cartagena Getsemani ($12-$18), Salento budget hotels ($15-$20)'
      },
      bestAreas: 'Safe Areas: El Poblado (Medellin), Walled City (Cartagena), Salento coffee region',
      foodCosts: {
        streetFood: '$3-$6/meal (arepas, empanadas, bandeja paisa)',
        localRestaurant: '$5-$10',
        selfCook: '$3-$5/meal',
        beer: '$1-$2'
      },
      bestForFood: 'Local restaurants, mercados (markets), street food stalls, coffee shops',
      transportation: [
        'Metro (Medellin): $0.80',
        'Bus between cities: $10-$30',
        'Collectivo (shared van): $5-$15',
        'Uber: $2-$10'
      ],
      activities: [
        'Coffee farm tours: $10-$30',
        'Free walking tours: Free (tip-based)',
        'Museums: $5-$10',
        'Beaches: Free',
        'Cocora Valley hike: $5 (transport)'
      ],
      gettingThere: 'Fly into Bogota or Medellin from US/Central America ($150-$400)',
      safety: 'Research neighborhoods carefully. Stay in safe areas (El Poblado, Walled City). Use Uber. Avoid sketchy areas at night. Safety has improved dramatically but vigilance required.',
      bestSeason: 'December-March (dry season), July-August (also dry)',
      challenges: 'Safety concerns require neighborhood research, some areas still unsafe, altitude in Bogota can affect some travelers',
      whyLoveIt: 'Incredible coffee region, friendly people, improving safety, vibrant culture, diverse landscapes, growing expat/nomad community',
      proTip: 'Stick to safe neighborhoods and use common sense. Medellin El Poblado is excellent for digital nomads and budget travelers.'
    }
  ];

  const influencers = [
    {
      name: 'Siddhartha Joshi',
      handle: '@siddharthajoshi',
      followers: '374.7K',
      description: 'Stanford/NID alum. Sustainable slow travel. 150K+ YouTube. Focuses on meaningful budget experiences, not just cheap travel.'
    },
    {
      name: 'The Travel Mum',
      handle: '@thetravelmum',
      followers: '313.7K',
      description: 'Family budget travel. Deals. Tips. Traveling more for less with kids.'
    },
    {
      name: 'Maddie & Patrick McLean',
      handle: '@thetravelmentors',
      followers: '214.3K',
      description: 'Minimalist packing. Detailed budget tips. Realistic itineraries for less.'
    },
    {
      name: 'Alea Simone',
      handle: '@thetraveltaurus',
      followers: '261.6K',
      description: 'Affordable luxury travel. Hidden gems. Bangkok-based perspective.'
    },
    {
      name: 'Steph',
      handle: '@bigworldsmallpockets',
      followers: '48.5K',
      description: '87 countries solo on ultra-budget. Winner Best British Travel Blog. Budget stretching expert.'
    },
    {
      name: 'Andrew & Emily',
      handle: 'A Long Dusty Road',
      followers: 'Street photographers',
      description: 'Traveling on £30/day ($38). Sharing real tips for longer travel on less.'
    }
  ];

  const budgetPrinciples = [
    'Dorms are your best friend (social, cheap, safe)',
    'Eat where locals eat (street food, markets, not tourist restaurants)',
    'Travel slow (longer stays = cheaper weekly rates)',
    'Book locally, not online (platforms add 15-30% markups)',
    'Use public transport (buses, not taxis)',
    'Accept discomfort (sometimes shared bathrooms, sometimes noise)',
    'Flexibility saves money (book 1-2 days ahead for best deals)',
    'Avoid tourist traps (islands, beach resorts, city centers)'
  ];

  const faqs = [
    {
      question: 'Can I really travel on $30/day?',
      answer: 'Yes, absolutely. In Southeast Asia, you can live comfortably on $15-$20/day. In Eastern Europe and Latin America, $20-$30/day is realistic. The key is choosing the right destinations, staying in dorms, eating street food, and using public transport.'
    },
    {
      question: 'Is budget travel safe?',
      answer: 'Budget travel can be very safe if you take precautions. Stay in well-reviewed hostels, avoid walking alone at night in unfamiliar areas, use registered transport, and trust your instincts. Many budget travelers report feeling safer than in their home cities.'
    },
    {
      question: 'What is the cheapest destination in the world?',
      answer: 'India is arguably the cheapest, where you can live on $10-$15/day. Vietnam, Laos, and Bolivia are also extremely cheap at $15-$20/day. These destinations offer incredible value without sacrificing experiences.'
    },
    {
      question: 'How do I find cheap accommodation?',
      answer: 'Use Hostelworld for verified hostel reviews. Book 1-2 days in advance for flexibility. Look for hostels with free breakfast. Consider longer stays for weekly discounts. Book directly when possible to avoid platform fees.'
    },
    {
      question: 'What about food safety on a budget?',
      answer: 'Eat where locals eat - if a street stall is busy with locals, it is usually safe. Look for hot, freshly cooked food. Avoid raw vegetables and unpeeled fruits initially. Build up tolerance gradually. Carry hand sanitizer.'
    },
    {
      question: 'Should I book accommodation in advance?',
      answer: 'Book 1-2 days ahead for flexibility and better deals. Only book further ahead during peak season or for popular destinations. Last-minute bookings often get better rates as hostels want to fill beds.'
    },
    {
      question: 'How can I meet other travelers on a budget?',
      answer: 'Stay in hostel dorms, not private rooms. Join hostel activities and walking tours. Eat in hostel common areas. Use apps like Couchsurfing for meetups. Budget travelers are inherently more social because they share spaces.'
    },
    {
      question: 'What is the biggest budget travel mistake?',
      answer: 'Going to expensive destinations and trying to do them cheaply. Choose budget-friendly countries instead. Also, booking everything online through platforms that add 15-30% markup instead of booking locally.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Poppins', 'Mulish', sans-serif" }}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Budget Travel</h1>
          <p className="text-2xl md:text-3xl mb-6 font-light">
            Travel Cheap. Travel Long. Travel Smart.
          </p>
          <p className="text-lg md:text-xl max-w-4xl leading-relaxed">
            Budget travel is not about deprivation. It is about strategy. It is about choosing destinations where your money stretches.
            It is about understanding where to splurge and where to save. It is about eating amazing food for $2. It is about staying
            in clean dorms instead of hotels. It is about buses instead of flights.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Budget travelers visit more countries, stay longer, and have richer experiences than luxury travelers. They eat street
              food cooked by grandmas. They stay in family guesthouses. They hike mountains for free. They meet other travelers because
              they are in hostels, not resorts.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The trade-off: less comfort, less privacy, more uncertainty, more flexibility.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              This guide maps the world's cheapest destinations where you can actually live well under $30/day—with real costs, honest
              strategies, and what to realistically expect.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Use This Guide</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pick Your Priority:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li><strong>Absolute Cheapest:</strong> Vietnam, Laos, India ($10-$20/day)</li>
                    <li><strong>Still Cheap + More Comfort:</strong> Thailand, Cambodia, Indonesia ($20-$25/day)</li>
                    <li><strong>Budget Europe:</strong> Albania, Bulgaria, Georgia ($20-$30/day)</li>
                    <li><strong>Budget Americas:</strong> Guatemala, Bolivia, Colombia ($20-$30/day)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li><strong>Best Food:</strong> Vietnam, Thailand, India</li>
                    <li><strong>Best Culture:</strong> Guatemala, India, Georgia</li>
                    <li><strong>Easiest for First-Timers:</strong> Thailand, Vietnam</li>
                    <li><strong>Most Underrated:</strong> Laos, Albania, Georgia</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Travel Influencers Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Budget Travel Influencers</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {influencers.map((influencer, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition">
                <h3 className="text-xl font-bold mb-2">{influencer.name}</h3>
                <p className="text-emerald-100 mb-1">{influencer.handle}</p>
                <p className="text-sm text-emerald-200 mb-3">{influencer.followers} followers</p>
                <p className="text-white/90">{influencer.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">What They All Agree On:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {budgetPrinciples.map((principle, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-emerald-200 mr-3 font-bold">{index + 1}.</span>
                  <p className="text-white">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">
            The 12 Best Budget Destinations Under $30/Day
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Click any destination to see full details including budget breakdown, accommodation, food costs, and insider tips
          </p>

          <div className="grid gap-8">
            {destinations.map((destination) => {
              const isExpanded = expandedCards.includes(destination.id);

              return (
                <div
                  key={destination.id}
                  className="bg-white border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  {/* Card Header - Always Visible */}
                  <div
                    className="p-6 cursor-pointer bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 transition"
                    onClick={() => toggleCard(destination.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-3xl font-bold text-gray-900">{destination.name}</h3>
                          <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {destination.monthlyBudget.total}
                          </span>
                        </div>
                        <p className="text-lg text-gray-600 mb-3">{destination.location}</p>
                        <p className="text-gray-700 leading-relaxed">{destination.whySpecial}</p>
                      </div>
                      <button className="ml-4 p-2 hover:bg-emerald-200 rounded-full transition">
                        {isExpanded ? (
                          <ChevronUp className="w-6 h-6 text-emerald-600" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-emerald-600" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  {isExpanded && (
                    <div className="p-6 bg-white border-t-2 border-gray-100">
                      {/* Monthly Budget Breakdown */}
                      <div className="mb-8">
                        <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">$</span>
                          Realistic Monthly Budget
                        </h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                          <div className="bg-emerald-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Accommodation</p>
                            <p className="font-semibold text-gray-900">{destination.monthlyBudget.accommodation}</p>
                          </div>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Food</p>
                            <p className="font-semibold text-gray-900">{destination.monthlyBudget.food}</p>
                          </div>
                          <div className="bg-teal-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Activities</p>
                            <p className="font-semibold text-gray-900">{destination.monthlyBudget.activities}</p>
                          </div>
                          <div className="bg-cyan-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Transportation</p>
                            <p className="font-semibold text-gray-900">{destination.monthlyBudget.transportation}</p>
                          </div>
                          <div className="bg-emerald-600 p-4 rounded-lg text-white">
                            <p className="text-sm mb-1">Total</p>
                            <p className="font-bold text-lg">{destination.monthlyBudget.total}</p>
                          </div>
                        </div>
                      </div>

                      {/* Accommodation */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Accommodation Options</h4>
                        <div className="bg-gray-50 p-5 rounded-lg space-y-2">
                          <p><strong className="text-emerald-600">Dorms:</strong> {destination.accommodation.dorms}</p>
                          <p><strong className="text-emerald-600">Budget Guesthouses:</strong> {destination.accommodation.budgetGuesthouses}</p>
                          <p><strong className="text-emerald-600">Cheapest Safe:</strong> {destination.accommodation.cheapestSafe}</p>
                          <p className="text-sm text-gray-600 mt-3"><strong>Best Areas:</strong> {destination.bestAreas}</p>
                        </div>
                      </div>

                      {/* Food Costs */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Food Costs</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Street Food</p>
                            <p className="font-semibold text-gray-900">{destination.foodCosts.streetFood}</p>
                          </div>
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Local Restaurant</p>
                            <p className="font-semibold text-gray-900">{destination.foodCosts.localRestaurant}</p>
                          </div>
                          <div className="bg-lime-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Self-Cook</p>
                            <p className="font-semibold text-gray-900">{destination.foodCosts.selfCook}</p>
                          </div>
                          <div className="bg-amber-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600 mb-1">Beer</p>
                            <p className="font-semibold text-gray-900">{destination.foodCosts.beer}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-3"><strong>Best For Food:</strong> {destination.bestForFood}</p>
                      </div>

                      {/* Transportation */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Transportation</h4>
                        <div className="bg-blue-50 p-5 rounded-lg">
                          <ul className="space-y-2">
                            {destination.transportation.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Activities */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Free & Cheap Activities</h4>
                        <div className="bg-purple-50 p-5 rounded-lg">
                          <ul className="space-y-2">
                            {destination.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-purple-600 mr-2">•</span>
                                <span className="text-gray-700">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Additional Information Grid */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">Getting There</h4>
                          <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{destination.gettingThere}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">Best Season</h4>
                          <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{destination.bestSeason}</p>
                        </div>
                      </div>

                      {/* Safety */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Safety Tips</h4>
                        <p className="text-gray-700 bg-green-50 p-4 rounded-lg border-l-4 border-green-500">{destination.safety}</p>
                      </div>

                      {/* Challenges */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Honest Challenges</h4>
                        <p className="text-gray-700 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">{destination.challenges}</p>
                      </div>

                      {/* Why Budget Travelers Love It */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Why Budget Travelers Love It</h4>
                        <p className="text-gray-700 bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">{destination.whyLoveIt}</p>
                      </div>

                      {/* Pro Tip */}
                      {destination.proTip && (
                        <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-5 rounded-lg">
                          <h4 className="text-lg font-bold mb-2">Pro Tip</h4>
                          <p>{destination.proTip}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Travel Realities */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Budget Travel Realities</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-4">What You Gain</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>See more countries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Stay longer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Meet other travelers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Authentic local experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Flexibility and freedom</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Richer cultural immersion</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">What You Sacrifice</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">−</span>
                  <span>Private rooms (shared bathrooms are common)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">−</span>
                  <span>Privacy and quiet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">−</span>
                  <span>Comfort and air conditioning sometimes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">−</span>
                  <span>Speed (buses instead of flights)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">−</span>
                  <span>Certainty (things get booked locally/spontaneously)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">−</span>
                  <span>Some safety concerns (research neighborhoods)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 border-l-4 border-emerald-600 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Reality Check</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Budget travel is achievable at $30/day. But it requires flexibility, acceptance of discomfort, willingness to eat street
              food, and research. It is not deprivation—it is smart prioritization.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The countries that are cheapest are often the most rewarding because you slow down, stay longer, and go deeper.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Plan Your Budget Adventure with Wander</h2>
          <p className="text-xl mb-8 leading-relaxed">
            You have researched destinations. You have calculated realistic costs. You have learned strategies from influencers.
            Now build your actual budget itinerary.
          </p>
          <p className="text-lg mb-8 leading-relaxed">
            Wander's AI travel planning app generates personalized 60-second budget travel itineraries. Instead of hours coordinating
            cheap accommodations, finding authentic street food, planning transport routes—get a custom budget plan in 60 seconds.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">What Wander Does:</h3>
            <ul className="text-left space-y-3 max-w-2xl mx-auto">
              <li className="flex items-start">
                <span className="text-teal-200 mr-3 font-bold">1.</span>
                <span><strong>Budget optimization</strong> – Recommends cheap destinations matching your timeline</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-200 mr-3 font-bold">2.</span>
                <span><strong>Accommodation finder</strong> – Connects to hostels, guesthouses, homestays</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-200 mr-3 font-bold">3.</span>
                <span><strong>Street food guide</strong> – Locates authentic cheap eats where locals eat</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-200 mr-3 font-bold">4.</span>
                <span><strong>Transport planning</strong> – Bus routes, timings, costs, how to book locally</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-200 mr-3 font-bold">5.</span>
                <span><strong>Cost tracking</strong> – Daily budget breakdowns by destination</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-200 mr-3 font-bold">6.</span>
                <span><strong>Itinerary optimization</strong> – Slow travel = cheaper weekly rates</span>
              </li>
            </ul>
          </div>

          <Link
            href="/"
            className="inline-block bg-white text-teal-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
          >
            Plan Your Budget Adventure →
          </Link>
        </div>
      </section>

      {/* Final Truth Section */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">The Real Budget Travel Truth</h2>
          <p className="text-xl mb-6 leading-relaxed">
            Budget travel is not about being poor. It is about choosing to live simply so you can travel longer.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            It is about eating $2 pho on a Hanoi street corner and feeling rich. It is about $8 dorm beds where you meet your travel
            best friend. It is about overnight buses where you do not pay for a hotel. It is about hiking mountains for free.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Budget travelers visit more countries, stay longer, and have deeper experiences than any other travel style.
          </p>
          <p className="text-xl font-semibold">
            The world is cheaper than you think. You just have to be willing to slow down and find it.
          </p>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            href="/"
            className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="py-6 px-6 bg-gray-800 text-gray-400 text-center text-sm">
        <p>Last updated: 2025. This guide covers 12 budget travel destinations with realistic costs, accommodation strategies, food prices, and practical tips based on millions of budget travelers.</p>
      </footer>
    </div>
  );
};

export default BudgetTravelPage;
