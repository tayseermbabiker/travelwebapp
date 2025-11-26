'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import RelatedGuides from '@/components/pillar/RelatedGuides'
import PillarCTA from '@/components/pillar/PillarCTA'

interface Destination {
  id: number
  country: string
  location: string
  safetyScore: string
  bestFor: string
  monthlyCost: string
  accommodation: string
  food: string
  activities: string
  transportation: string
  total: string
  whyFamiliesLoveIt: string
  topActivities: string[]
  familyAccommodations: {
    name: string
    price: string
    features: string
  }[]
  transportationDetails: {
    bestOption: string
    safety: string
    cost: string
  }
  healthcare: {
    quality: string
    pediatric: string
    pharmacies: string
  }
  foodOptions: {
    kidFriendly: string
    dietary: string
    restaurants: string
  }
  bestSeason: string
  visa: string
  climate: string
}

const destinations: Destination[] = [
  {
    id: 1,
    country: 'Portugal',
    location: 'Lisbon/Algarve',
    safetyScore: '95/100',
    bestFor: 'Mixed ages (babies to teens)',
    monthlyCost: '$3,250',
    accommodation: '$1,800',
    food: '$800',
    activities: '$400',
    transportation: '$250',
    total: '$3,250/month',
    whyFamiliesLoveIt: 'Portugal is the sweet spot: affordable, safe, kid-friendly culture, excellent healthcare, amazing beaches, and locals genuinely love families. Kids eat well (Portuguese food is simple and healthy). Grandparent vibes everywhere—people help families without being intrusive.',
    topActivities: [
      'Martinhal Hotels Kids Clubs: All-inclusive family resorts with clubs, pools, cultural activities',
      'Beaches: Safe, calm, family-focused (Algarve especially)',
      'Castles & Palaces: Sintra is magical for kids—fairy tale vibes',
      'Easy Day Trips: Cascais, Estoril by train (30 min from Lisbon)',
      'Free: Parks everywhere, playgrounds, beach walks'
    ],
    familyAccommodations: [
      {
        name: 'Martinhal Sagres Resort',
        price: '$230/night',
        features: 'All-inclusive kids club, baby gear provided, perfect for families'
      },
      {
        name: 'The Lisboans',
        price: '$250/night',
        features: 'City apartments with kitchens, family-friendly, central'
      }
    ],
    transportationDetails: {
      bestOption: 'Rental car for Algarve road trips, trains/taxis in Lisbon',
      safety: 'Excellent, well-marked roads',
      cost: 'Car rental ~$40/day'
    },
    healthcare: {
      quality: 'Excellent, world-class',
      pediatric: 'Easy to find, many English-speaking doctors',
      pharmacies: 'Everywhere, well-stocked'
    },
    foodOptions: {
      kidFriendly: 'Yes, Portuguese food is simple (grilled fish, rice, vegetables)',
      dietary: 'Easily accommodated',
      restaurants: 'Very welcoming to families'
    },
    bestSeason: 'Year-round (best April-October)',
    visa: '90 days (Schengen)',
    climate: 'Mild year-round (12-24°C), perfect for families'
  },
  {
    id: 2,
    country: 'Japan',
    location: 'Tokyo/Kyoto',
    safetyScore: '98/100',
    bestFor: 'All ages (babies to teens)',
    monthlyCost: '$3,620',
    accommodation: '$2,200',
    food: '$800',
    activities: '$400',
    transportation: '$220',
    total: '$3,620/month',
    whyFamiliesLoveIt: 'Japan is incredibly organized and safe. Everything works. Public transit is clean and efficient. Kids are welcomed everywhere. Restaurants have kids menus. Hotels provide kids amenities. It\'s orderly. It\'s clean. It\'s perfect for families who like structure.',
    topActivities: [
      'Theme Parks: Tokyo Disneyland, Universal Studios Japan',
      'Temples & Shrines: Kid-friendly cultural experiences (Kyoto)',
      'Themed Cafés: Robot café, cat café, owl café (kids love novelty)',
      'Science Museums: Interactive, fascinating',
      'Trains: Kids obsessed with bullet trains (Shinkansen experience)',
      'Parks: Playgrounds in every neighborhood'
    ],
    familyAccommodations: [
      {
        name: 'Family Hotels',
        price: '$200-250/night',
        features: 'Kids beds standard, welcome babies, family amenities'
      },
      {
        name: 'Airbnbs',
        price: 'Varies',
        features: 'Many family options with kitchens'
      }
    ],
    transportationDetails: {
      bestOption: 'Trains/subways (world\'s best public transit)',
      safety: 'Outstanding, clean, efficient, women-only cars available',
      cost: 'IC card ~$50 for month'
    },
    healthcare: {
      quality: 'Outstanding, world-class hospitals',
      pediatric: 'Available everywhere, English-speaking doctors in major cities',
      pharmacies: 'Everywhere, well-stocked'
    },
    foodOptions: {
      kidFriendly: 'Yes, restaurants have kids menus',
      dietary: 'Allergies accommodated (ask ahead)',
      restaurants: 'Kids welcomed enthusiastically'
    },
    bestSeason: 'Spring (March-May) or Autumn (September-November)',
    visa: '90 days',
    climate: 'Variable by region, best spring or autumn'
  },
  {
    id: 3,
    country: 'Iceland',
    location: 'Reykjavik/Golden Circle',
    safetyScore: '97/100',
    bestFor: 'Young kids to teens (ages 5-17)',
    monthlyCost: '$4,200',
    accommodation: '$2,500',
    food: '$1,000',
    activities: '$450',
    transportation: '$250',
    total: '$4,200/month',
    whyFamiliesLoveIt: 'Iceland offers otherworldly landscapes that captivate kids of all ages. Geysers, waterfalls, glaciers, and the Northern Lights create unforgettable family memories. The country is exceptionally safe, English is widely spoken, and Icelandic culture is welcoming to families. Nature is the main attraction, making it educational and awe-inspiring.',
    topActivities: [
      'Golden Circle Tour: Geysers, waterfalls, Thingvellir National Park',
      'Blue Lagoon: Family-friendly geothermal spa experience',
      'Glacier Walks: Age-appropriate tours available (check minimum ages)',
      'Northern Lights: Winter viewing (September-March)',
      'Whale Watching: Reykjavik harbor tours',
      'Waterfalls: Gullfoss, Seljalandsfoss, Skógafoss—kids love the power'
    ],
    familyAccommodations: [
      {
        name: 'Reykjavik Family Apartments',
        price: '$280/night',
        features: 'Central location, kitchens, family-sized spaces'
      },
      {
        name: 'Countryside Guesthouses',
        price: '$200-250/night',
        features: 'Scenic locations, family rooms, local hospitality'
      }
    ],
    transportationDetails: {
      bestOption: 'Rental car (essential for exploring)',
      safety: 'Excellent roads, well-maintained, weather can be challenging',
      cost: 'Car rental ~$60/day'
    },
    healthcare: {
      quality: 'Excellent, Nordic healthcare standards',
      pediatric: 'Available in Reykjavik and major towns',
      pharmacies: 'Available, well-stocked'
    },
    foodOptions: {
      kidFriendly: 'Moderate (lamb, fish, dairy), some adventurous foods',
      dietary: 'Accommodated in most places',
      restaurants: 'Family-friendly, kids menus available'
    },
    bestSeason: 'Summer (June-August) for mild weather, Winter (Sept-March) for Northern Lights',
    visa: '90 days (Schengen)',
    climate: 'Cool year-round (0-15°C), dress in layers'
  },
  {
    id: 4,
    country: 'Denmark',
    location: 'Copenhagen',
    safetyScore: '96/100',
    bestFor: 'Young kids (ages 3-12)',
    monthlyCost: '$4,000',
    accommodation: '$2,400',
    food: '$900',
    activities: '$450',
    transportation: '$250',
    total: '$4,000/month',
    whyFamiliesLoveIt: 'Copenhagen is consistently rated one of the world\'s most family-friendly cities. Bikes dominate transportation, making it safe and fun for kids. Danish culture prioritizes children, with incredible playgrounds, interactive museums, and kid-focused design everywhere. Plus, it\'s the home of LEGO.',
    topActivities: [
      'Tivoli Gardens: Historic amusement park in city center',
      'LEGOLAND (Billund): Day trip, worth it for LEGO-obsessed kids',
      'Biking: Family bikes available, entire city bikeable',
      'National Aquarium: Den Blå Planet, Scandinavia\'s largest',
      'Nyhavn: Colorful harbor, boat tours, family-friendly cafes',
      'Playgrounds: World-class designs throughout the city'
    ],
    familyAccommodations: [
      {
        name: 'Scandic Hotels',
        price: '$220/night',
        features: 'Family rooms, free kids meals, play areas'
      },
      {
        name: 'Copenhagen Apartments',
        price: '$250/night',
        features: 'Kitchens, central locations, family-friendly'
      }
    ],
    transportationDetails: {
      bestOption: 'Bikes (rent family bikes with trailers)',
      safety: 'Outstanding, separated bike lanes everywhere',
      cost: 'Bike rental ~$20/day for family'
    },
    healthcare: {
      quality: 'Excellent, Danish healthcare world-class',
      pediatric: 'Widely available, English-speaking',
      pharmacies: 'Everywhere, well-stocked'
    },
    foodOptions: {
      kidFriendly: 'Yes, simple Nordic foods (fish, potatoes, bread)',
      dietary: 'Excellent support for all dietary needs',
      restaurants: 'Kids menus standard, very welcoming'
    },
    bestSeason: 'Late spring to early autumn (May-September)',
    visa: '90 days (Schengen)',
    climate: 'Mild summers (15-22°C), cold winters'
  },
  {
    id: 5,
    country: 'Singapore',
    location: 'Singapore City',
    safetyScore: '99/100',
    bestFor: 'All ages (babies to teens)',
    monthlyCost: '$4,500',
    accommodation: '$2,600',
    food: '$1,100',
    activities: '$500',
    transportation: '$300',
    total: '$4,500/month',
    whyFamiliesLoveIt: 'Singapore is ultra-safe, incredibly clean, and designed with families in mind. English is the primary language, making it easy for international families. The food scene is incredible (hawker centers are budget-friendly), and there are endless family activities. Healthcare is world-class. It\'s like a family-friendly theme park city.',
    topActivities: [
      'Gardens by the Bay: Supertrees, Cloud Forest, kids love it',
      'Universal Studios Singapore: Sentosa Island theme park',
      'Singapore Zoo: World-renowned, kid-friendly design',
      'Night Safari: Unique evening wildlife experience',
      'Sentosa Island: Beaches, aquarium, cable cars, family resorts',
      'Hawker Centers: Affordable food tours, kid-friendly options'
    ],
    familyAccommodations: [
      {
        name: 'Sentosa Family Resorts',
        price: '$300/night',
        features: 'Beach access, pools, kids clubs, all amenities'
      },
      {
        name: 'City Serviced Apartments',
        price: '$280/night',
        features: 'Kitchens, family spaces, central locations'
      }
    ],
    transportationDetails: {
      bestOption: 'MRT (subway) - clean, efficient, easy',
      safety: 'Outstanding, safest public transit globally',
      cost: 'Tourist pass ~$30 for 3 days'
    },
    healthcare: {
      quality: 'World-class, top-tier medical facilities',
      pediatric: 'Excellent pediatric care, English-speaking',
      pharmacies: 'Everywhere, well-stocked'
    },
    foodOptions: {
      kidFriendly: 'Excellent, hawker centers have endless options',
      dietary: 'All dietary needs easily accommodated',
      restaurants: 'Kids welcomed, high chairs standard'
    },
    bestSeason: 'Year-round (tropical climate), avoid monsoon season (Nov-Jan)',
    visa: '90 days (visa-free for most countries)',
    climate: 'Hot and humid year-round (25-32°C)'
  },
  {
    id: 6,
    country: 'Australia',
    location: 'Sydney/Gold Coast',
    safetyScore: '94/100',
    bestFor: 'All ages (especially active families)',
    monthlyCost: '$4,300',
    accommodation: '$2,500',
    food: '$1,000',
    activities: '$500',
    transportation: '$300',
    total: '$4,300/month',
    whyFamiliesLoveIt: 'Australia offers incredible beaches, wildlife encounters, and a laid-back family culture. Australians love the outdoors, and this translates to amazing family activities—surfing, snorkeling, wildlife parks, and beaches. Healthcare is excellent, English is spoken, and the infrastructure supports families everywhere.',
    topActivities: [
      'Beaches: Bondi, Manly, Gold Coast—world-class family beaches',
      'Wildlife: Taronga Zoo, Lone Pine Koala Sanctuary',
      'Theme Parks: Gold Coast (Dreamworld, Sea World, Warner Bros)',
      'Snorkeling/Diving: Great Barrier Reef (family tours available)',
      'Surfing Lessons: Safe, family-friendly surf schools',
      'Harbor Activities: Sydney Harbor ferries, picnics, walks'
    ],
    familyAccommodations: [
      {
        name: 'Gold Coast Family Resorts',
        price: '$250/night',
        features: 'Pools, beach access, kids clubs, family suites'
      },
      {
        name: 'Sydney Serviced Apartments',
        price: '$280/night',
        features: 'Kitchens, central locations, family-friendly'
      }
    ],
    transportationDetails: {
      bestOption: 'Mix of public transit (Sydney) and rental car (Gold Coast)',
      safety: 'Excellent, roads well-maintained',
      cost: 'Transit pass ~$50/week, car rental ~$45/day'
    },
    healthcare: {
      quality: 'Excellent, world-class medical system',
      pediatric: 'Widely available, high quality',
      pharmacies: 'Everywhere, called chemists locally'
    },
    foodOptions: {
      kidFriendly: 'Yes, diverse food scene, kids menus standard',
      dietary: 'All dietary needs accommodated',
      restaurants: 'Family-friendly, outdoor dining common'
    },
    bestSeason: 'Spring/Summer (September-March)',
    visa: 'Visa required (e-visitor available)',
    climate: 'Warm to hot (15-30°C), beach weather'
  },
  {
    id: 7,
    country: 'Canada',
    location: 'Vancouver/Whistler',
    safetyScore: '95/100',
    bestFor: 'Active families, ages 5-17',
    monthlyCost: '$3,900',
    accommodation: '$2,300',
    food: '$900',
    activities: '$450',
    transportation: '$250',
    total: '$3,900/month',
    whyFamiliesLoveIt: 'Canada combines outdoor adventure with urban sophistication. Vancouver is a stunning city with mountains, ocean, and parks. Whistler offers world-class skiing (winter) and mountain biking (summer). Canadians are famously polite and welcoming to families. Healthcare is excellent, and English is widely spoken.',
    topActivities: [
      'Skiing/Snowboarding: Whistler (winter), lessons for all ages',
      'Stanley Park: Biking, beaches, aquarium, playgrounds',
      'Capilano Suspension Bridge: Thrilling for kids, safe',
      'Grouse Mountain: Gondola rides, wildlife refuge, scenic views',
      'Science World: Interactive museum, kids love it',
      'Outdoor Adventures: Hiking, kayaking, whale watching'
    ],
    familyAccommodations: [
      {
        name: 'Whistler Family Lodges',
        price: '$280/night',
        features: 'Ski-in/ski-out, kitchens, family rooms'
      },
      {
        name: 'Vancouver Apartments',
        price: '$250/night',
        features: 'Downtown locations, kitchens, family-friendly'
      }
    ],
    transportationDetails: {
      bestOption: 'Rental car for Whistler, transit in Vancouver',
      safety: 'Excellent, roads well-maintained',
      cost: 'Car rental ~$50/day, transit pass ~$40/week'
    },
    healthcare: {
      quality: 'Excellent, Canadian healthcare world-renowned',
      pediatric: 'Widely available, high quality',
      pharmacies: 'Everywhere, well-stocked'
    },
    foodOptions: {
      kidFriendly: 'Yes, diverse food scene',
      dietary: 'All dietary needs accommodated',
      restaurants: 'Family-friendly, kids menus standard'
    },
    bestSeason: 'Winter (Dec-March) for skiing, Summer (June-August) for hiking',
    visa: 'eTA required for most countries',
    climate: 'Mild coastal (5-20°C), cold winters in mountains'
  },
  {
    id: 8,
    country: 'New Zealand',
    location: 'Auckland/Queenstown',
    safetyScore: '96/100',
    bestFor: 'Adventure families, ages 8-17',
    monthlyCost: '$3,800',
    accommodation: '$2,200',
    food: '$900',
    activities: '$450',
    transportation: '$250',
    total: '$3,800/month',
    whyFamiliesLoveIt: 'New Zealand is adventure central. Every activity involves stunning nature—mountains, fjords, beaches, glaciers. The country is safe, English-speaking, and Kiwis are incredibly welcoming to families. Kids remember NZ forever—it\'s like stepping into a fantasy world (Lord of the Rings filming locations help).',
    topActivities: [
      'Queenstown Adventures: Jet boating, gondola rides, scenic cruises',
      'Milford Sound: Fjord cruises, breathtaking scenery',
      'Hobbiton: Movie set tour, magical for kids',
      'Rotorua: Geothermal parks, Maori culture, adventure activities',
      'Beaches: Auckland area, safe and beautiful',
      'Hiking: Family-friendly trails throughout both islands'
    ],
    familyAccommodations: [
      {
        name: 'Queenstown Family Lodges',
        price: '$250/night',
        features: 'Mountain views, kitchens, family suites'
      },
      {
        name: 'Auckland Apartments',
        price: '$220/night',
        features: 'Harbor views, kitchens, family-friendly'
      }
    ],
    transportationDetails: {
      bestOption: 'Rental car (essential for exploring)',
      safety: 'Excellent, scenic drives',
      cost: 'Car rental ~$45/day'
    },
    healthcare: {
      quality: 'Excellent, high standards',
      pediatric: 'Available in major cities',
      pharmacies: 'Available, called chemists'
    },
    foodOptions: {
      kidFriendly: 'Yes, simple foods (lamb, seafood, dairy)',
      dietary: 'Accommodated in most places',
      restaurants: 'Family-friendly, kids menus available'
    },
    bestSeason: 'Summer (December-February)',
    visa: 'Visa waiver or eTA required',
    climate: 'Temperate, varies by region (10-25°C in summer)'
  },
  {
    id: 9,
    country: 'Costa Rica',
    location: 'Manuel Antonio/Playas del Coco',
    safetyScore: '90/100',
    bestFor: 'Toddlers, young kids (ages 2-10)',
    monthlyCost: '$3,000',
    accommodation: '$1,600',
    food: '$700',
    activities: '$400',
    transportation: '$300',
    total: '$3,000/month',
    whyFamiliesLoveIt: 'Nature capital. Every activity involves wildlife: sloths, monkeys, toucans, sea turtles. Eco-lodges are family-oriented. Roads are okay (drive carefully). Weather is warm. Kids are obsessed with the animals.',
    topActivities: [
      'Wildlife Watching: Manuel Antonio National Park (monkeys, sloths, beaches)',
      'Zip-lining: Age-appropriate options (some 8+, some 12+)',
      'Eco-Lodges: Nature immersion, pool time, peaceful vibes',
      'Beaches: Calm, safe, warm water',
      'Hot Springs: Near Arenal Volcano (toddler-friendly)',
      'Turtle Watching: Seasonal nesting tours'
    ],
    familyAccommodations: [
      {
        name: 'Ohana Villas',
        price: '$110/night',
        features: 'Family villas, kitchens, pool, family-run'
      },
      {
        name: 'Eco-Lodge Resorts',
        price: '$150/night',
        features: 'Nature immersion, family rooms, kid-friendly'
      }
    ],
    transportationDetails: {
      bestOption: 'Rental car (drive is scenic but slow)',
      safety: 'Good, drive during day, mountain roads require caution',
      cost: 'Car rental ~$35/day'
    },
    healthcare: {
      quality: 'Good, many English-speaking clinics in main towns',
      pediatric: 'Available but go to bigger towns (San José if serious)',
      pharmacies: 'Well-stocked'
    },
    foodOptions: {
      kidFriendly: 'Yes (rice, beans, fruit are staples)',
      dietary: 'Moderate support (research ahead)',
      restaurants: 'Family-welcoming'
    },
    bestSeason: 'Dry season (December-April)',
    visa: '90 days',
    climate: 'Warm year-round (22-28°C), rainy May-November'
  },
  {
    id: 10,
    country: 'Thailand',
    location: 'Bangkok/Chiang Mai/Islands',
    safetyScore: '91/100',
    bestFor: 'All ages (babies to teens)',
    monthlyCost: '$2,400',
    accommodation: '$1,200',
    food: '$500',
    activities: '$400',
    transportation: '$300',
    total: '$2,400/month',
    whyFamiliesLoveIt: 'Thailand is incredibly affordable, warm year-round, and Thai culture adores children. Families are treated like royalty. Bangkok offers city excitement, Chiang Mai has cultural experiences and elephant sanctuaries, and the islands provide perfect beaches. Healthcare in major cities is surprisingly excellent.',
    topActivities: [
      'Elephant Sanctuaries: Ethical experiences (Chiang Mai)',
      'Beaches: Phuket, Krabi, Koh Samui—family-friendly resorts',
      'Temples: Kid-friendly cultural experiences',
      'Markets: Floating markets, night markets (kids love the energy)',
      'Cooking Classes: Family-friendly Thai cooking',
      'Water Parks: Bangkok and beach destinations'
    ],
    familyAccommodations: [
      {
        name: 'Island Family Resorts',
        price: '$120/night',
        features: 'Beach access, pools, kids clubs, affordable'
      },
      {
        name: 'Bangkok Serviced Apartments',
        price: '$100/night',
        features: 'Kitchens, pools, family-friendly areas'
      }
    ],
    transportationDetails: {
      bestOption: 'Mix of transit, tuk-tuks, and domestic flights',
      safety: 'Good, use metered taxis, avoid unregistered transport',
      cost: 'Very affordable, transit/taxis ~$100/month'
    },
    healthcare: {
      quality: 'Excellent in major cities (Bangkok, Chiang Mai)',
      pediatric: 'Available, international hospitals in Bangkok',
      pharmacies: 'Everywhere, affordable'
    },
    foodOptions: {
      kidFriendly: 'Yes, rice and noodle dishes kids love',
      dietary: 'Moderate support, explain allergies clearly',
      restaurants: 'Kids welcomed warmly everywhere'
    },
    bestSeason: 'Cool season (November-February)',
    visa: '30-60 days visa-free (varies by nationality)',
    climate: 'Hot year-round (25-35°C), monsoon season varies by region'
  },
  {
    id: 11,
    country: 'Dubai, UAE',
    location: 'Dubai',
    safetyScore: '99/100',
    bestFor: 'All ages (babies to teens)',
    monthlyCost: '$3,800',
    accommodation: '$2,200',
    food: '$900',
    activities: '$450',
    transportation: '$250',
    total: '$3,800/month',
    whyFamiliesLoveIt: 'Dubai is luxury family travel. Ultra-safe, English everywhere, world-class amenities, incredible hotels with kids clubs, massive malls with entertainment, and endless family activities. Healthcare is excellent. It\'s hot but everything is air-conditioned. Perfect for families who want a polished, stress-free experience.',
    topActivities: [
      'Water Parks: Aquaventure, Wild Wadi—world-class',
      'Dubai Mall: Aquarium, ice rink, entertainment for all ages',
      'Desert Safari: Family-friendly tours, camel rides',
      'Beaches: JBR, Kite Beach—clean, safe, family-friendly',
      'Ski Dubai: Indoor skiing in the desert',
      'Theme Parks: IMG Worlds, Legoland, Motiongate'
    ],
    familyAccommodations: [
      {
        name: 'Atlantis The Palm',
        price: '$350/night',
        features: 'Water park access, kids clubs, luxury family resort'
      },
      {
        name: 'Dubai Marina Apartments',
        price: '$220/night',
        features: 'Kitchens, beach access, family-friendly'
      }
    ],
    transportationDetails: {
      bestOption: 'Metro and taxis (clean, safe, affordable)',
      safety: 'Outstanding, one of safest cities globally',
      cost: 'Transit pass ~$30/week, taxis reasonable'
    },
    healthcare: {
      quality: 'World-class, top international hospitals',
      pediatric: 'Excellent, English-speaking, state-of-the-art',
      pharmacies: 'Everywhere, well-stocked'
    },
    foodOptions: {
      kidFriendly: 'Excellent, every cuisine available, kids menus standard',
      dietary: 'All dietary needs accommodated',
      restaurants: 'Family-friendly, many with play areas'
    },
    bestSeason: 'Winter (November-March), avoid summer heat',
    visa: 'Visa on arrival (varies by nationality)',
    climate: 'Hot year-round (20-45°C), extremely hot in summer'
  },
  {
    id: 12,
    country: 'Croatia',
    location: 'Split/Dubrovnik',
    safetyScore: '93/100',
    bestFor: 'Mixed ages (young kids to teens)',
    monthlyCost: '$3,100',
    accommodation: '$1,700',
    food: '$750',
    activities: '$400',
    transportation: '$250',
    total: '$3,100/month',
    whyFamiliesLoveIt: 'Croatia offers stunning Adriatic coastline, historic walled cities, and crystal-clear water—all at more affordable prices than Western Europe. Croatians are warm and welcoming to families. The food is Mediterranean and kid-friendly. Beaches are beautiful, history is accessible, and the pace is relaxed.',
    topActivities: [
      'Old Town Dubrovnik: Walled city, Game of Thrones tours, historic forts',
      'Beaches: Pebble beaches, clear water, safe swimming',
      'Island Hopping: Ferry trips to nearby islands',
      'Diocletian\'s Palace: Split historic center, kids love exploring',
      'Plitvice Lakes: National park day trip, waterfalls and nature',
      'Sea Kayaking: Family-friendly tours along the coast'
    ],
    familyAccommodations: [
      {
        name: 'Coastal Family Apartments',
        price: '$150/night',
        features: 'Sea views, kitchens, family-friendly locations'
      },
      {
        name: 'Family Hotels',
        price: '$180/night',
        features: 'Pools, breakfast included, family rooms'
      }
    ],
    transportationDetails: {
      bestOption: 'Rental car for flexibility, ferries for islands',
      safety: 'Good, coastal roads scenic, drive carefully',
      cost: 'Car rental ~$35/day, ferries affordable'
    },
    healthcare: {
      quality: 'Good, improving rapidly',
      pediatric: 'Available in major cities, English common in tourist areas',
      pharmacies: 'Available, well-stocked'
    },
    foodOptions: {
      kidFriendly: 'Yes, Mediterranean diet (seafood, pasta, grilled meats)',
      dietary: 'Generally accommodated',
      restaurants: 'Family-welcoming, outdoor dining common'
    },
    bestSeason: 'Late spring to early autumn (May-September)',
    visa: '90 days (Schengen)',
    climate: 'Mediterranean (15-30°C in season), warm summers'
  }
]

const influencers = [
  {
    name: 'The Bucket List Family',
    handle: '@thebucketlistfamily',
    followers: '3.2M followers',
    description: 'Global adventures with focus on safety and kid activities. Multi-age content. Mid-to-high budget.'
  },
  {
    name: 'The Mom Trotter',
    handle: '@themomtrotter',
    followers: '390K followers',
    description: 'Black/multicultural RV and global travel. Budget-conscious. Inclusivity focus. Tips for all ages.'
  },
  {
    name: 'Travel Babbo',
    handle: '@travelbabbo',
    followers: '368K followers',
    description: 'Forbes/Fodor\'s "Top Family Traveler." Global exploration. Culture and unique experiences. All ages.'
  },
  {
    name: 'Travel Mad Mum',
    handle: '@travelmadmum',
    followers: '163K followers',
    description: '90+ countries with kids (babies to teens). Both budget and luxury content. Healthcare-focused.'
  },
  {
    name: 'Flying The Nest',
    handle: '@flyingthenest',
    followers: '170K followers',
    description: 'Full-time family travel. Practical planning. Kids of all ages. Global destinations.'
  },
  {
    name: 'Travelynn Family',
    handle: '@travelynnfamily',
    followers: '27K followers',
    description: 'Backpacking with kids. Worldschooling. Budget to mid-range. Adventure-focused.'
  }
]

export default function FamilyTravelPage() {
  const [expandedCards, setExpandedCards] = useState<number[]>([])

  const toggleCard = (id: number) => {
    setExpandedCards(prev =>
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 font-sans pt-16 relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-400/30 to-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>
              Family Destinations
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-700 font-medium">
              The World's Best Destinations for Kids
            </p>
            <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-gray-600">
              Travel with kids. Actually enjoy it. Discover destinations where infrastructure supports families,
              where kids are welcomed, where safety is non-negotiable, and where there's something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>
            How to Use This Guide
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Family travel isn't about sacrificing your trip. It's about choosing destinations where the infrastructure
            supports families, where kids are welcomed, where safety is non-negotiable, and where there's actually
            something for everyone to do.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            The reality: Some destinations make traveling with kids easy. Others make it stressful. The difference is
            infrastructure, healthcare access, kid-friendly activities, and cultural attitudes toward families.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="backdrop-blur-md bg-green-50/70 border border-green-100/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4">
                Pick Your Priority
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Safety:</strong> Child-specific safety (healthcare, traffic, crime)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Age Group:</strong> Best for toddlers? Teens? Mixed ages?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Budget:</strong> Monthly cost for family of 4</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Activities:</strong> What will actually entertain your kids?</span>
                </li>
              </ul>
            </div>

            <div className="backdrop-blur-md bg-blue-50/70 border border-blue-100/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                What's Included
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Healthcare:</strong> Access to pediatric care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Climate:</strong> Heat? Cold? Rainy season?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Culture:</strong> How welcoming are people to families?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Costs:</strong> Detailed monthly breakdown</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Family Travel Influencers Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>
              The Family Travel Influencers
            </h2>
            <p className="text-lg text-center mb-12 text-gray-600">
              These creators travel the world with kids and have millions of followers watching
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {influencers.map((influencer, index) => (
                <div key={index} className="backdrop-blur-md bg-gradient-to-br from-green-50/70 via-blue-50/70 to-purple-50/70 border border-white/50 rounded-xl p-6 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {influencer.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{influencer.handle}</p>
                  <p className="text-sm font-semibold mb-3 text-blue-600">{influencer.followers}</p>
                  <p className="text-sm leading-relaxed text-gray-700">{influencer.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 backdrop-blur-md bg-gradient-to-br from-purple-50/70 to-blue-50/70 border border-white/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                What They All Agree On
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">1.</span>
                    <span>Healthcare access is non-negotiable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">2.</span>
                    <span>Kid-friendly activities matter (free parks, museums, nature)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">3.</span>
                    <span>Family-focused accommodations (kitchens, space, kids' clubs)</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">4.</span>
                    <span>Safety is everything</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">5.</span>
                    <span>Local culture's attitude toward families matters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">6.</span>
                    <span>Budget varies wildly—there are options at every price point</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>
          The 12 Best Family-Friendly Destinations
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Fully detailed destination cards with safety scores, costs, activities, and everything you need to know
        </p>

        <div className="space-y-6">
          {destinations.map((destination) => (
            <div key={destination.id} className="backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              {/* Card Header - Always Visible */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      {destination.country}
                    </h3>
                    <p className="text-lg text-gray-600">{destination.location}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <div className="bg-gradient-to-r from-green-400/80 via-blue-400/80 to-purple-400/80 text-white px-4 py-2 rounded-full font-bold mb-2 backdrop-blur-sm">
                      Safety: {destination.safetyScore}
                    </div>
                    <div className="bg-gradient-to-r from-blue-400/80 via-purple-400/80 to-green-400/80 text-white px-4 py-2 rounded-full font-bold backdrop-blur-sm">
                      {destination.monthlyCost}/month
                    </div>
                  </div>
                </div>

                {/* Key Info Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="backdrop-blur-md bg-green-50/70 border border-green-100/50 rounded-lg p-4">
                    <p className="text-sm text-green-700 font-semibold mb-1">Best For</p>
                    <p className="text-gray-800">{destination.bestFor}</p>
                  </div>
                  <div className="backdrop-blur-md bg-blue-50/70 border border-blue-100/50 rounded-lg p-4">
                    <p className="text-sm text-blue-700 font-semibold mb-1">Best Season</p>
                    <p className="text-gray-800">{destination.bestSeason}</p>
                  </div>
                </div>

                {/* Expandable Content */}
                {expandedCards.includes(destination.id) && (
                  <div className="mt-6 space-y-6 animate-fadeIn">
                    {/* Monthly Cost Breakdown */}
                    <div className="backdrop-blur-md bg-gradient-to-br from-green-50/70 to-blue-50/70 border border-white/50 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">
                        Monthly Cost Breakdown (Family of 4)
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Accommodation</p>
                          <p className="font-bold text-gray-800">{destination.accommodation}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Food</p>
                          <p className="font-bold text-gray-800">{destination.food}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Activities</p>
                          <p className="font-bold text-gray-800">{destination.activities}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Transportation</p>
                          <p className="font-bold text-gray-800">{destination.transportation}</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-300">
                        <p className="text-lg font-bold text-gray-800">Total: {destination.total}</p>
                      </div>
                    </div>

                    {/* Why Families Love It */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">
                        Why Families Love It
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{destination.whyFamiliesLoveIt}</p>
                    </div>

                    {/* Top Family Activities */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">
                        Top Family Activities
                      </h4>
                      <ul className="space-y-2">
                        {destination.topActivities.map((activity, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span className="text-gray-700">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Family Accommodations */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">
                        Family Accommodations
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {destination.familyAccommodations.map((accommodation, idx) => (
                          <div key={idx} className="backdrop-blur-md bg-purple-50/70 border border-purple-100/50 rounded-lg p-4">
                            <p className="font-bold text-purple-800 mb-1">{accommodation.name}</p>
                            <p className="text-sm text-purple-600 mb-2">{accommodation.price}</p>
                            <p className="text-sm text-gray-700">{accommodation.features}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Transportation */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">
                        Transportation
                      </h4>
                      <div className="backdrop-blur-md bg-blue-50/70 border border-blue-100/50 rounded-lg p-4 space-y-2">
                        <p className="text-gray-700">
                          <span className="font-semibold text-blue-800">Best Option:</span> {destination.transportationDetails.bestOption}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold text-blue-800">Safety:</span> {destination.transportationDetails.safety}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold text-blue-800">Cost:</span> {destination.transportationDetails.cost}
                        </p>
                      </div>
                    </div>

                    {/* Healthcare */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">
                        Healthcare
                      </h4>
                      <div className="backdrop-blur-md bg-green-50/70 border border-green-100/50 rounded-lg p-4 space-y-2">
                        <p className="text-gray-700">
                          <span className="font-semibold text-green-800">Quality:</span> {destination.healthcare.quality}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold text-green-800">Pediatric:</span> {destination.healthcare.pediatric}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold text-green-800">Pharmacies:</span> {destination.healthcare.pharmacies}
                        </p>
                      </div>
                    </div>

                    {/* Food Options */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">
                        Food Options
                      </h4>
                      <div className="backdrop-blur-md bg-purple-50/70 border border-purple-100/50 rounded-lg p-4 space-y-2">
                        <p className="text-gray-700">
                          <span className="font-semibold text-purple-800">Kid-Friendly:</span> {destination.foodOptions.kidFriendly}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold text-purple-800">Dietary Needs:</span> {destination.foodOptions.dietary}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold text-purple-800">Restaurants:</span> {destination.foodOptions.restaurants}
                        </p>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="backdrop-blur-md bg-blue-50/70 border border-blue-100/50 rounded-lg p-4">
                        <p className="font-semibold text-gray-800 mb-1">Visa Requirements</p>
                        <p className="text-gray-700">{destination.visa}</p>
                      </div>
                      <div className="backdrop-blur-md bg-green-50/70 border border-green-100/50 rounded-lg p-4">
                        <p className="font-semibold text-gray-800 mb-1">Climate</p>
                        <p className="text-gray-700">{destination.climate}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Expand/Collapse Button */}
                <button
                  onClick={() => toggleCard(destination.id)}
                  className="mt-6 w-full bg-gradient-to-r from-green-400/80 via-blue-400/80 to-purple-400/80 backdrop-blur-sm text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                >
                  {expandedCards.includes(destination.id) ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp className="ml-2 w-5 h-5" />
                    </>
                  ) : (
                    <>
                      <span>View Full Details</span>
                      <ChevronDown className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Family Travel Questions Answered
          </h2>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                What age groups are these destinations best for?
              </h3>
              <p className="leading-relaxed">
                Each destination is rated for specific age groups. Babies and toddlers (0-3) do best in Portugal, Thailand,
                and Costa Rica. Young kids (4-9) love Denmark, Netherlands, and Japan. Teens (13+) prefer adventure destinations
                like New Zealand, Iceland, and Dubai. Many destinations like Japan, Singapore, and Australia work for all ages.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                How accurate are the monthly cost estimates?
              </h3>
              <p className="leading-relaxed">
                Costs are based on real family travel data for a family of 4 (2 adults, 2 kids) staying in family-friendly
                accommodations with kitchens, eating a mix of home-cooked and restaurant meals, and doing typical family
                activities. Your costs may vary based on travel style, accommodation choices, and seasonal pricing.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                What about healthcare emergencies?
              </h3>
              <p className="leading-relaxed">
                All destinations listed have reliable healthcare with pediatric services available. Japan, Singapore, Dubai,
                and Australia have world-class medical facilities. Always purchase travel insurance that covers kids, know
                the location of nearby hospitals, and carry copies of any prescriptions your children need.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Can we travel with babies and toddlers?
              </h3>
              <p className="leading-relaxed">
                Absolutely. Portugal, Thailand, Costa Rica, and Japan are particularly welcoming to families with young
                children. Look for accommodations with kitchens (for preparing baby food), verify that pediatric care is
                nearby, and choose destinations with mild climates. Most family influencers agree that traveling with babies
                is often easier than traveling with school-age kids.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                What should we pack for family travel?
              </h3>
              <p className="leading-relaxed">
                Essentials include: kids' medications, passport copies, travel insurance documents, car seat (if needed),
                favorite snacks, entertainment for flights, sun protection, and a first aid kit. Pack light but bring comfort
                items that help kids feel secure. Many accommodations provide cribs, high chairs, and other baby gear.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                How do we handle dietary restrictions?
              </h3>
              <p className="leading-relaxed">
                Most destinations accommodate dietary needs. Portugal, Japan, and Singapore are excellent for food allergies.
                Learn key phrases in the local language, research restaurants ahead of time, identify grocery stores for
                apartment cooking, and always ask about allergy protocols. Bring familiar snacks as backup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Plan Your Family Adventure
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            You've researched destinations. You've evaluated safety. You've considered activities and healthcare.
            Now build your actual family itinerary with Wander's AI travel planning app.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 text-left">
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              What Wander Does
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-pink-200 mr-2">•</span>
                <span>Age-appropriate activities customized by kids' ages</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-200 mr-2">•</span>
                <span>Healthcare nearby - locates hospitals and pharmacies</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-200 mr-2">•</span>
                <span>Kid-friendly dining with kids' menus and dietary accommodations</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-200 mr-2">•</span>
                <span>Realistic timing accounting for naps, downtime, and travel time</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-200 mr-2">•</span>
                <span>Family logistics including car rentals and kid-specific tips</span>
              </li>
            </ul>
          </div>
          <a
            href="/"
            className="inline-block bg-teal-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-teal-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Planning Your Family Trip
          </a>
        </div>
      </section>

      {/* Reality Check Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Reality Check: Honest Family Travel Truth
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                What Actually Works
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Families with flexible expectations have the best time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>One main activity per day is enough</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Kids remember experiences more than hotel stars</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Downtime is crucial (siesta culture is real)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Local playgrounds are often better than paid attractions</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                What Doesn't Work
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Packed itineraries (kids get overwhelmed)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Traveling sick (one sick kid = whole trip affected)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Luxury expectations (things break, kids spill, it happens)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Expecting kids to behave like adults (they won't)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Underbudgeting meals and activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <PillarCTA guideName="family-travel" />
        <RelatedGuides currentPage="family-travel" />
      </section>

      {/* Back to Home */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <Link
          href="/"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-lg transition-colors"
        >
          <span className="mr-2">←</span>
          Back to Home
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            Last updated: 2025. This guide covers 12 family-friendly destinations with safety ratings, realistic costs,
            activities, and healthcare access based on millions of family travelers.
          </p>
        </div>
      </footer>
    </div>
  )
}
