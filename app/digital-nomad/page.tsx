'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Wifi, DollarSign, Calendar, MapPin, Users, Shield, Sun } from 'lucide-react'

export default function DigitalNomadPage() {
  const [expandedDestination, setExpandedDestination] = useState<number | null>(null)

  const toggleDestination = (index: number) => {
    setExpandedDestination(expandedDestination === index ? null : index)
  }

  const destinations = [
    {
      name: 'Chiang Mai, Thailand',
      timezone: 'UTC+7',
      safetyRating: '85/100',
      community: 'Very Large',
      budget: '$800-$1,000',
      midRange: '$1,200-$1,800',
      upscale: '$2,000+',
      whyLiveHere: 'Chiang Mai is the world\'s #1 digital nomad destination. It\'s not romantic hyperbole—every digital nomad community tracking site ranks it first. Why? The perfect storm: sub-$1,000 living, reliable internet, coworking everywhere, massive community, and visa flexibility.',
      visas: [
        {
          name: 'Long-Term Resident (LTR) Visa',
          duration: '10 years',
          requirements: 'Requires $80,000 annual income OR $250,000 investment (legal path for long-term stay)'
        },
        {
          name: 'Thailand Elite Visa',
          duration: '5-20 years',
          requirements: 'Costs $15,000-$60,000 (pay-to-stay program)'
        },
        {
          name: 'Tourist Visa',
          duration: '60 days',
          requirements: 'Extendable to 90 days. Most nomads do "visa runs" to neighboring countries every 30-60 days'
        },
        {
          name: 'Reality',
          duration: 'Variable',
          requirements: 'Most nomads just keep 60-day tourist visas and do border runs to Myanmar or Laos quarterly'
        }
      ],
      budgetBreakdown: {
        accommodation: '$250-$400 (studio in Nimman or Santitham)',
        food: '$150-$250 (street food $2-3, café meals $4-6)',
        coworking: '$50-$100',
        internet: '$45 (AIS Fiber $30, SIM $15)',
        other: '$100-$150'
      },
      internet: {
        download: '150-300 Mbps',
        upload: '50-100 Mbps',
        reliability: 'Excellent (fiber widely available)',
        note: 'The internet is legitimately good. Fiber is standard. Not Thailand-grade 2010 anymore.'
      },
      coworkingSpaces: [
        { name: 'CAMP (Maya Mall)', price: '$100/month', note: 'The famous nomad hub, can get crowded' },
        { name: 'Punspace', price: '$80-$120/month', note: '24/7 access, multiple locations' },
        { name: 'RealSpace Coworking', price: '$90/month', note: '5.0 rating, excellent community' }
      ],
      neighborhoods: [
        { name: 'Nimman Haemin', description: 'Modern, cafés, coworking, networking epicenter' },
        { name: 'Santitham', description: 'Quieter, more affordable, long-term vibe' },
        { name: 'Old City', description: 'Walkable, central, cultural immersion' }
      ],
      workCafes: 'Graph Café, Ristr8to, Yellow Crafts, Akha Ama Coffee',
      bestSeason: 'November-February: Cool season (18-28°C), perfect weather, lowest air pollution. Avoid: March-May (burning season, air quality terrible)',
      whyMoving2025: 'Still the world\'s most affordable "complete package." Sub-$1,000 living + massive community + reliable infrastructure + visa flexibility. Cost rising slightly but remains unbeatable value.'
    },
    {
      name: 'Lisbon, Portugal',
      timezone: 'UTC+0 (WET/WEST)',
      safetyRating: '88/100',
      community: 'Large',
      budget: '$1,400-$1,800',
      midRange: '$2,200-$2,800',
      upscale: '$3,500+',
      whyLiveHere: 'Lisbon is the European gateway for digital nomads. It checks boxes that other European cities can\'t: EU residency, Schengen travel access, affordable (by European standards), startup ecosystem, and new digital nomad visa specifically designed for remote workers.',
      visas: [
        {
          name: 'D8 Digital Nomad Visa',
          duration: '2 years renewable',
          requirements: '+ 3-year extension possible, requires €3,480/month income ($3,800), legal for remote workers/freelancers. This is the most popular.'
        },
        {
          name: 'D7 Passive Income Visa',
          duration: '2 years renewable',
          requirements: 'Requires €870/month passive income ($950), €12,000 bank deposit, 1-year accommodation proof'
        },
        {
          name: 'Temporary Stay Visa',
          duration: '4 months',
          requirements: 'Converts to 2-year residence permit'
        }
      ],
      budgetBreakdown: {
        accommodation: '$700-$1,000 (studio in Alfama/Graça)',
        food: '$300-$400',
        coworking: '$150-$250',
        internet: '$50',
        other: '$200'
      },
      internet: {
        download: '200-300 Mbps',
        upload: '100-150 Mbps',
        reliability: 'Excellent (fiber standard)',
        note: ''
      },
      coworkingSpaces: [
        { name: 'Second Home Lisboa', price: '$350/month', note: 'Design-focused, rooftop terrace' },
        { name: 'Selina Secret Garden', price: '$180-$250/month', note: 'Coliving + coworking, social vibe' },
        { name: 'Lisbon WorkHub', price: '$220/month', note: 'Central, professional' }
      ],
      neighborhoods: [
        { name: 'Príncipe Real', description: 'Trendy, walkable, coworking hubs, LGBTQ-friendly' },
        { name: 'Alfama', description: 'Historic, affordable, authentic Portuguese' },
        { name: 'Cais do Sodré', description: 'Nightlife, riverside, Time Out Market, young crowd' }
      ],
      workCafes: 'Ler Devagar (LX Factory), Fabrica Coffee Roasters, Dear Breakfast',
      bestSeason: 'April-June & September-October: Mild (18-25°C), perfect outdoor work weather, fewer tourists',
      whyMoving2025: 'D8 Digital Nomad Visa launch (game-changer). EU + Schengen access. Strong nomad community. Startup ecosystem booming. Non-habitual resident tax benefits (0-20% tax for 10 years). Gateway to Europe.'
    },
    {
      name: 'Bali (Canggu/Ubud), Indonesia',
      timezone: 'UTC+8 (WITA)',
      safetyRating: '80/100',
      community: 'Very Large',
      budget: '$700-$1,000',
      midRange: '$1,200-$2,000',
      upscale: '$2,500+',
      whyLiveHere: 'Bali combines affordability with lifestyle. Canggu is the actual digital nomad hub (beaches, cafés, coworking). Ubud is quieter (rice terraces, creative scene). Both are significantly cheaper than Chiang Mai while offering better weather and beach culture.',
      visas: [
        {
          name: 'E33G Remote Worker Visa',
          duration: '12 months (non-renewable)',
          requirements: 'Costs $630 + $150 processing fee ($780 total), tax-free for 6 months'
        },
        {
          name: 'B211A Business Visa',
          duration: '60 days',
          requirements: 'Extendable to 180 days, $205 total cost'
        },
        {
          name: 'Tourist Visa',
          duration: '30 days',
          requirements: 'Often extended to 60'
        }
      ],
      budgetBreakdown: {
        accommodation: '$240-$400 (guesthouse/villa in Canggu)',
        food: '$200-$300 (warungs $2-4, cafés $6-8)',
        coworking: '$80-$150',
        internet: '$40 (SIM 4GB = $10/month)',
        other: '$150'
      },
      internet: {
        download: '50-150 Mbps',
        upload: '20-50 Mbps',
        reliability: 'Moderate (invest in backup mobile hotspot)',
        note: 'Internet is the weak point. Reliable in coworking spaces. At home, it varies.'
      },
      coworkingSpaces: [
        { name: 'Tropical Nomad (Ubud)', price: '$60/month', note: 'Community-focused, retreats organized' },
        { name: 'Dojo Coworking (Canggu)', price: '$120/month', note: 'Social scene, events' },
        { name: 'Monsoon Collective (Canggu)', price: '$150/month', note: 'Professional environment' }
      ],
      neighborhoods: [
        { name: 'Canggu', description: 'Beaches, nightlife, coworking, party vibe' },
        { name: 'Ubud', description: 'Creative, quiet, rice terraces, digital nomads + creatives' },
        { name: 'Seminyak', description: 'Upscale, restaurants, beach clubs' }
      ],
      workCafes: 'Warung Bodag Barong, Karsa Café, Karsa Kafe Ubud',
      bestSeason: 'April-June & September-November: Dry season, clear skies, humidity manageable. Avoid December-March (rainy).',
      whyMoving2025: '12-month E33G visa launched (major change). Bali\'s oversaturation causing exodus to Ubud (quieter, more remote-work friendly). Affordability still unbeatable. Beach lifestyle attracts lifestyle nomads over pure entrepreneurs.'
    },
    {
      name: 'Mexico City, Mexico',
      timezone: 'UTC-6',
      safetyRating: '75/100',
      community: 'Large',
      budget: '$1,200-$1,600',
      midRange: '$1,800-$2,400',
      upscale: '$3,000+',
      whyLiveHere: 'Mexico City is the fastest-growing digital nomad hub. US timezone overlap = easy client calls. Vibrant culture, incredible food, massive expat community, and surprisingly good infrastructure. It\'s becoming the "San Francisco of Latin America" for startups.',
      visas: [
        {
          name: 'Temporal Resident Visa (TRV)',
          duration: '4 years renewable',
          requirements: 'Requires $2,700 monthly income or $57,000 in the bank. Path to permanent residency.'
        },
        {
          name: 'Mexico Tourist Visa (FMM)',
          duration: '180 days',
          requirements: 'Easiest entry, free form on arrival'
        },
        {
          name: 'Digital Nomad Visa (proposed)',
          duration: 'Not yet official',
          requirements: 'But tourist visa + renewals = indefinite stays'
        }
      ],
      budgetBreakdown: {
        accommodation: '$600-$900 (apartment in Roma Norte/Condesa)',
        food: '$300-$400',
        coworking: '$150-$200',
        internet: '$40',
        other: '$200'
      },
      internet: {
        download: '200-300 Mbps',
        upload: '100-150 Mbps',
        reliability: 'Excellent (fiber widely available)',
        note: ''
      },
      coworkingSpaces: [
        { name: 'Selina Reforma', price: '$250/month', note: 'Social coliving, events, networking' },
        { name: 'Impact Hub', price: '$200/month', note: 'Startup focus, professional' },
        { name: 'Sun Desk', price: '$150/month', note: 'Outdoor garden workspace, chill vibe' }
      ],
      neighborhoods: [
        { name: 'Roma Norte', description: 'Trendy, cafés, restaurants, nightlife, expat hub' },
        { name: 'Condesa', description: 'Adjacent, similar vibe, parks, tree-lined streets' },
        { name: 'Polanco', description: 'Upscale, fine dining, business district vibe' }
      ],
      workCafes: 'Kafka Café, Blend Station, Blend',
      bestSeason: 'October-May: Dry season, perfect weather (16-26°C), comfortable outdoor working',
      whyMoving2025: 'Fastest-growing nomad hub globally. US timezone (critical for American clients). Startup ecosystem exploding (Mexico City\'s "Silicon Valley" vibe). Affordability + quality of life balance. Direct flights to everywhere.'
    },
    {
      name: 'Barcelona, Spain',
      timezone: 'UTC+1 (CET)',
      safetyRating: '87/100',
      community: 'Large',
      budget: '$1,800-$2,200',
      midRange: '$2,500-$3,200',
      upscale: '$4,000+',
      whyLiveHere: 'Barcelona is the Mediterranean option. Beaches, culture, infrastructure, and the Spanish lifestyle. It\'s more expensive than Southeast Asia but justifiable for the quality of life and European location. Growing nomad community, startup scene, and the city is designed for outdoor work (cafés everywhere).',
      visas: [
        {
          name: 'Spain Digital Nomad Visa',
          duration: '1-3 years renewable',
          requirements: 'Requires €2,300/month income ($2,500). Legal framework for remote workers.'
        },
        {
          name: 'Tourist Visa',
          duration: '90 days',
          requirements: 'In Schengen zone, can reset by leaving EU'
        },
        {
          name: 'Long-Stay Visa',
          duration: '1+ year',
          requirements: 'Various options for 1+ year stay'
        }
      ],
      budgetBreakdown: {
        accommodation: '$900-$1,200 (apartment in Gràcia/Sant Antoni)',
        food: '$400-$500',
        coworking: '$150-$250',
        internet: '$50',
        other: '$300'
      },
      internet: {
        download: '300+ Mbps',
        upload: '150+ Mbps',
        reliability: 'Excellent',
        note: ''
      },
      coworkingSpaces: [
        { name: 'SunDesk', price: '$250/month', note: 'Outdoor rooftop, creative vibe' },
        { name: 'OneCoWork', price: '$200/month', note: 'Modern, professional' },
        { name: 'Aticco', price: '$180/month', note: 'Startup focus, multiple locations' }
      ],
      neighborhoods: [
        { name: 'Gràcia', description: 'Hip, bohemian, young crowd, authentic Barcelona' },
        { name: 'Sant Antoni', description: 'Trendy, parks, weekend market, nightlife' },
        { name: 'Eixample', description: 'Central, business district, easy metro access' }
      ],
      workCafes: 'Gresca, La Boqueria Café, Brunch Society',
      bestSeason: 'May-June & September-October: Perfect weather (20-25°C), Mediterranean sun, less tourists than summer',
      whyMoving2025: 'Spain\'s official digital nomad visa. Startup ecosystem competitive with Berlin. EU location. Quality of life unmatched. Mediterranean lifestyle. Easy Schengen travel.'
    },
    {
      name: 'Medellín, Colombia',
      timezone: 'UTC-5',
      safetyRating: '82/100',
      community: 'Medium-Large',
      budget: '$1,000-$1,400',
      midRange: '$1,600-$2,200',
      upscale: '$2,500+',
      whyLiveHere: 'Medellín has rebranded itself. Crime concerns are outdated. The city is safe, affordable, has perfect weather year-round ("eternal spring"), and is rapidly developing a startup ecosystem. It\'s emerging as the next Latin American digital nomad hub.',
      visas: [
        {
          name: 'Digital Nomad Visa (V Visa)',
          duration: 'Launched 2024, 2 years renewable',
          requirements: 'Requires $2,700 USD monthly income'
        },
        {
          name: 'Tourist Visa',
          duration: '90 days',
          requirements: 'Extendable once to 180 days'
        },
        {
          name: 'Resident Visa',
          duration: '1+ years',
          requirements: 'With investment or employment'
        }
      ],
      budgetBreakdown: {
        accommodation: '$500-$700 (apartment in Laureles/Sabaneta)',
        food: '$250-$350',
        coworking: '$80-$120',
        internet: '$30',
        other: '$150'
      },
      internet: {
        download: '150-250 Mbps',
        upload: '50-100 Mbps',
        reliability: 'Good (fiber increasingly available)',
        note: ''
      },
      coworkingSpaces: [
        { name: 'WorkIN Medellín', price: '$100/month', note: 'Startup focus, events' },
        { name: 'Endorphins Coworking', price: '$120/month', note: 'Social, wellness-focused' },
        { name: 'The Loft', price: '$90/month', note: 'Budget-friendly, community' }
      ],
      neighborhoods: [
        { name: 'Laureles', description: 'Young professionals, affordable, safe, nightlife' },
        { name: 'El Poblado', description: 'Touristy, expats, restaurants, walkable' },
        { name: 'Sabaneta', description: 'Quiet, family-friendly, emerging nomad spot' }
      ],
      workCafes: 'Café Amor, Balcón de Letras, Donde Arturo',
      bestSeason: 'Year-round: Eternal spring climate (16-26°C), no harsh seasons, consistent productivity weather',
      whyMoving2025: 'Official digital nomad visa launched. Perfect weather year-round. Significant cost advantage over Lisbon/Barcelona. Growing startup ecosystem. Safety improving dramatically. Emerging market = low saturation compared to Chiang Mai/Bali.'
    },
    {
      name: 'Buenos Aires, Argentina',
      timezone: 'UTC-3',
      safetyRating: '79/100',
      community: 'Medium-Large',
      budget: '$800-$1,200',
      midRange: '$1,500-$2,000',
      upscale: '$2,500+',
      whyLiveHere: 'Buenos Aires is experiencing a digital nomad boom due to currency devaluation (argentinazo). Your dollars/euros go incredibly far. It\'s European in feel (architecture, culture, food) with Latin American prices. Startup scene is thriving. Fall/spring weather is perfect.',
      visas: [
        {
          name: 'Digital Nomad Visa',
          duration: '2 years renewable',
          requirements: 'No specific income requirement, residence-based visa'
        },
        {
          name: 'Tourist Visa',
          duration: '90 days',
          requirements: 'Easily extendable by leaving/returning'
        },
        {
          name: 'Temporary Resident Visa',
          duration: '2 years',
          requirements: 'Various pathways'
        }
      ],
      budgetBreakdown: {
        accommodation: '$400-$600 (apartment in San Telmo/La Boca)',
        food: '$250-$350',
        coworking: '$60-$100',
        internet: '$30',
        other: '$100'
      },
      internet: {
        download: '200-300 Mbps',
        upload: '100+ Mbps',
        reliability: 'Excellent',
        note: ''
      },
      coworkingSpaces: [
        { name: 'Espacio Mako', price: '$150/month', note: 'Startup focus, central location' },
        { name: 'Mi Oficina', price: '$120/month', note: 'Budget-friendly, multiple locations' },
        { name: 'Selina Soho House', price: '$180/month', note: 'Upscale, events' }
      ],
      neighborhoods: [
        { name: 'San Telmo', description: 'Historic, tango culture, restaurants, nightlife' },
        { name: 'La Boca', description: 'Colorful, touristy, artistic vibe' },
        { name: 'Palermo', description: 'Trendy, cafés, parks, young crowd' }
      ],
      workCafes: 'Café Tortoni, Los Inmortales, Museo Histórico',
      bestSeason: 'April-May & September-October: Fall/Spring, perfect weather (15-25°C), pleasant outdoor work',
      whyMoving2025: 'Extreme affordability due to currency devaluation (blue dollar rate). European feel on Latin American budget. Booming startup scene. Visa policies nomad-friendly. Growing digital nomad community. Direct flights to US.'
    },
    {
      name: 'Dubai, UAE',
      timezone: 'UTC+4',
      safetyRating: '94/100',
      community: 'Medium',
      budget: '$2,200-$2,800',
      midRange: '$3,500-$4,500',
      upscale: '$5,000+',
      whyLiveHere: 'Dubai isn\'t for everyone (it\'s expensive, hot, corporate), but it\'s the bridge between Asia and Europe timezones, has exceptional safety, excellent schools for families, and zero taxation on personal income. It\'s the choice for high-income nomads with families.',
      visas: [
        {
          name: 'Remote Work Visa (Freelancer Visa)',
          duration: '12 months',
          requirements: 'Costs $260, requirements flexible'
        },
        {
          name: 'Virtual Working Program',
          duration: 'Official 12-month visa',
          requirements: 'For remote workers'
        },
        {
          name: 'Tourist Visa',
          duration: '30 days',
          requirements: 'Extendable to 90 days'
        }
      ],
      budgetBreakdown: {
        accommodation: '$1,200-$1,600 (studio in Marina/JBR)',
        food: '$500-$700',
        coworking: '$150-$250',
        internet: '$50',
        other: '$300'
      },
      internet: {
        download: '500+ Mbps',
        upload: '200+ Mbps',
        reliability: 'Excellent (best in the region)',
        note: ''
      },
      coworkingSpaces: [
        { name: 'The Bureau', price: '$350/month', note: 'Premium, rooftop terrace, networking' },
        { name: 'Regus Business Centers', price: '$300/month', note: 'Professional, multiple locations' },
        { name: 'Spaces Dubai', price: '$250/month', note: 'Modern, fitness + coworking' }
      ],
      neighborhoods: [
        { name: 'Marina', description: 'Modern, expat-heavy, fitness clubs, safe' },
        { name: 'Downtown', description: 'Central, high-rises, business district vibe' },
        { name: 'DIFC', description: 'Free Zone, startup ecosystem, special tax benefits' }
      ],
      workCafes: 'Coffeology, Vessels Coffee, Time Out',
      bestSeason: 'November-April: Perfect weather (20-28°C), clear skies, comfortable. Avoid May-September (45°C+ heat).',
      whyMoving2025: 'Legitimate digital nomad visa (official recognition). 0% tax on personal income. Exceptional safety. World-class infrastructure. Gateway to Asia-Europe timezone. Family-friendly (schools, expat services). DIFC Free Zone benefits for entrepreneurs.'
    },
    {
      name: 'Prague, Czech Republic',
      timezone: 'UTC+1 (CET)',
      safetyRating: '89/100',
      community: 'Medium',
      budget: '$1,200-$1,600',
      midRange: '$1,800-$2,400',
      upscale: '$3,000+',
      whyLiveHere: 'Prague combines European charm with Eastern European affordability. Incredible food and beer culture, walkable old town, strong tech community, and cost of living that doesn\'t require constant penny-pinching. It\'s the overlooked gem of European digital nomad destinations.',
      visas: [
        {
          name: 'Work from Czech Republic Visa',
          duration: '2 years',
          requirements: 'Requires CZK 119,000/month (~$5,200), legal remote work status'
        },
        {
          name: 'Tourist Visa',
          duration: '90 days',
          requirements: 'In Schengen zone'
        },
        {
          name: 'Long-Stay Visa',
          duration: '1+ years',
          requirements: 'Renewable with employment/study'
        }
      ],
      budgetBreakdown: {
        accommodation: '$600-$800 (apartment in Vinohrady/Žižkov)',
        food: '$300-$400',
        coworking: '$100-$150',
        internet: '$30',
        other: '$200'
      },
      internet: {
        download: '300-500 Mbps',
        upload: '150+ Mbps',
        reliability: 'Excellent',
        note: ''
      },
      coworkingSpaces: [
        { name: 'Boltmakers', price: '$180/month', note: 'Startup focus, events, coffee included' },
        { name: 'Hubhub', price: '$150/month', note: 'Central Old Town location' },
        { name: 'Desk Prague', price: '$100/month', note: 'Budget option, multiple locations' }
      ],
      neighborhoods: [
        { name: 'Vinohrady', description: 'Residential, safe, local vibe, cafés' },
        { name: 'Žižkov', description: 'Hip, nightlife, restaurants, young crowd' },
        { name: 'New Town', description: 'Central, busy, easy metro access' }
      ],
      workCafes: 'Můj Růžový Slon, Blind Eye Coffee, Kantýna',
      bestSeason: 'May & September-October: Pleasant (15-22°C), mild, clear skies. Winter is dark, summer can be touristy.',
      whyMoving2025: 'Unofficial refuge as Western Europe gets saturated. Strong tech community. Affordable without being "developing." European infrastructure. Growing English-speaking population. Beer and food culture excellent.'
    },
    {
      name: 'Hanoi, Vietnam',
      timezone: 'UTC+7',
      safetyRating: '81/100',
      community: 'Small-Medium',
      budget: '$700-$1,000',
      midRange: '$1,200-$1,800',
      upscale: '$2,000+',
      whyLiveHere: 'Hanoi is the emerging alternative to Bangkok and Chiang Mai. It\'s rapidly building digital nomad infrastructure. History, culture, and French colonial architecture. Super affordable. It\'s where smart nomads move when Chiang Mai gets overcrowded.',
      visas: [
        {
          name: 'Digital Nomad Visa (proposed)',
          duration: 'In development',
          requirements: 'Expected 2025'
        },
        {
          name: 'Tourist Visa',
          duration: '30 days',
          requirements: 'Easily renewed/extended to 12 months'
        },
        {
          name: 'Business Visa',
          duration: '1-12 months',
          requirements: 'With sponsorship, ~$150-$250'
        }
      ],
      budgetBreakdown: {
        accommodation: '$300-$450 (apartment in Tay Ho/Ba Dinh)',
        food: '$200-$300 (street food incredibly cheap)',
        coworking: '$60-$100',
        internet: '$30',
        other: '$100-$150'
      },
      internet: {
        download: '100-200 Mbps',
        upload: '30-50 Mbps',
        reliability: 'Good (fiber expanding, backup mobile recommended)',
        note: ''
      },
      coworkingSpaces: [
        { name: 'Hive Mind', price: '$80/month', note: 'Startup ecosystem, events' },
        { name: 'The Hive', price: '$100/month', note: 'Established, central location' },
        { name: 'Spaces Hanoi', price: '$120/month', note: 'Upscale option' }
      ],
      neighborhoods: [
        { name: 'Tay Ho', description: 'Expat-heavy, safe, restaurants, parks' },
        { name: 'Ba Dinh', description: 'Central, walkable, Old Quarter nearby' },
        { name: 'Hoan Kiem', description: 'Tourist area, convenient, busy' }
      ],
      workCafes: 'Ciao Hanoi, Hoa Sua Coffee, Hanoi Social Club',
      bestSeason: 'October-April: Cool season (15-25°C), dry, perfect. Avoid May-September (heat, humidity, flooding risk).',
      whyMoving2025: 'Emerging alternative to overcrowded Chiang Mai. Infrastructure rapidly improving. Ultra-affordable. Authentic Vietnamese culture. Digital nomad visa incoming (game-changer). Direct flights expanding.'
    },
    {
      name: 'Tokyo, Japan',
      timezone: 'UTC+9',
      safetyRating: '95/100',
      community: 'Small',
      budget: '$2,000-$3,000',
      midRange: '$3,000-$4,500',
      upscale: '$5,000+',
      whyLiveHere: 'Tokyo offers unmatched infrastructure, safety, and cultural experiences. While expensive, it provides exceptional quality of life, world-class public transportation, and a unique blend of traditional and modern culture. The tech scene is thriving and the internet infrastructure is among the world\'s best.',
      visas: [
        {
          name: 'Tourist Visa',
          duration: '90 days',
          requirements: 'Standard tourist entry for most nationalities'
        },
        {
          name: 'Digital Nomad Visa',
          duration: 'In pilot',
          requirements: 'Currently being tested, details emerging'
        },
        {
          name: 'Working Holiday Visa',
          duration: '12 months',
          requirements: 'Available for select countries, age restrictions apply'
        }
      ],
      budgetBreakdown: {
        accommodation: '$1,000-$1,500 (small apartment in Shibuya/Shinjuku)',
        food: '$500-$800 (affordable meals available, but adds up)',
        coworking: '$200-$350',
        internet: '$50-$80',
        other: '$300-$500'
      },
      internet: {
        download: '1 Gbps+',
        upload: '500+ Mbps',
        reliability: 'Exceptional (among world\'s best)',
        note: 'Internet infrastructure is outstanding. Fiber is standard even in residential areas.'
      },
      coworkingSpaces: [
        { name: 'WeWork Tokyo', price: '$350/month', note: 'Premium spaces across multiple locations' },
        { name: 'The Terminal', price: '$280/month', note: 'Tech-focused community, events' },
        { name: 'Fabbit', price: '$200/month', note: 'Startup ecosystem, multiple locations' }
      ],
      neighborhoods: [
        { name: 'Shibuya', description: 'Young, vibrant, tech companies, excellent transportation' },
        { name: 'Shinjuku', description: 'Business district, diverse, central hub' },
        { name: 'Roppongi', description: 'International, nightlife, expat-friendly' }
      ],
      workCafes: 'Blue Bottle Coffee, Fuglen Tokyo, Streamer Coffee Company',
      bestSeason: 'April-May & October-November: Cherry blossoms in spring, fall colors, mild weather (15-25°C). Avoid July-August (humid, hot).',
      whyMoving2025: 'Exceptional infrastructure and internet. Unmatched safety (world-class). Digital nomad visa pilot program launching. Strong tech industry connections. High quality of life. Perfect for structure-focused, high-income nomads seeking productivity.'
    },
    {
      name: 'Tallinn, Estonia',
      timezone: 'UTC+2',
      safetyRating: '91/100',
      community: 'Small-Medium',
      budget: '$1,200-$1,600',
      midRange: '$1,800-$2,400',
      upscale: '$3,000+',
      whyLiveHere: 'Tallinn is the digital-first capital of Europe. E-residency program, exceptional internet infrastructure, thriving startup ecosystem (Skype, Wise, Bolt originated here), and progressive digital policies make it ideal for tech entrepreneurs. Affordable by Western European standards with EU access.',
      visas: [
        {
          name: 'Digital Nomad Visa',
          duration: '1 year',
          requirements: 'Recently updated, requires proof of remote work and €3,504/month income'
        },
        {
          name: 'E-Residency',
          duration: 'Permanent',
          requirements: 'Not a visa, but allows you to run an EU company remotely'
        },
        {
          name: 'Tourist Visa',
          duration: '90 days',
          requirements: 'Schengen zone standard'
        }
      ],
      budgetBreakdown: {
        accommodation: '$600-$900 (apartment in Old Town/Kalamaja)',
        food: '$300-$450',
        coworking: '$150-$200',
        internet: '$30 (excellent speeds)',
        other: '$200-$300'
      },
      internet: {
        download: '300-1000 Mbps',
        upload: '200-500 Mbps',
        reliability: 'Exceptional (world-class digital infrastructure)',
        note: 'Estonia has some of the best internet in Europe. Free WiFi in most public spaces.'
      },
      coworkingSpaces: [
        { name: 'Lift99', price: '$180/month', note: 'Startup-focused, strong community, events' },
        { name: 'Spring Hub', price: '$160/month', note: 'Central location, modern facilities' },
        { name: 'Workland', price: '$140/month', note: 'Multiple locations, flexible plans' }
      ],
      neighborhoods: [
        { name: 'Old Town', description: 'Medieval architecture, tourist center, charming but pricey' },
        { name: 'Kalamaja', description: 'Hipster district, creative vibe, wooden houses, local cafés' },
        { name: 'Telliskivi', description: 'Creative quarter, coworking spaces, restaurants, startup scene' }
      ],
      workCafes: 'Kompressor, F-Hoone, Reval Café',
      bestSeason: 'May-September: Warm summer (15-22°C), long daylight hours, outdoor festivals. Winter is cold and dark but has its charm.',
      whyMoving2025: 'E-residency program benefits for entrepreneurs. Exceptional digital infrastructure (world leader). Updated digital nomad visa. Strong startup ecosystem. EU access. Tech-forward culture. Growing English-speaking community.'
    },
    {
      name: 'Da Nang, Vietnam',
      timezone: 'UTC+7',
      safetyRating: '83/100',
      community: 'Small-Medium',
      budget: '$800-$1,200',
      midRange: '$1,400-$1,900',
      upscale: '$2,200+',
      whyLiveHere: 'Da Nang offers beach lifestyle combined with affordability and emerging digital nomad infrastructure. More relaxed than Hanoi or Ho Chi Minh City, with stunning beaches, mountains nearby, and a growing expat community. It\'s the quieter alternative for those who want Vietnam without the chaos.',
      visas: [
        {
          name: 'Tourist Visa',
          duration: '30 days',
          requirements: 'Extendable to 60-90 days, easy renewals'
        },
        {
          name: 'Business Visa',
          duration: '3-12 months',
          requirements: 'With sponsorship, costs $150-$300 depending on duration'
        },
        {
          name: 'Digital Nomad Visa',
          duration: 'Proposed',
          requirements: 'Vietnam discussing official remote work visa'
        }
      ],
      budgetBreakdown: {
        accommodation: '$350-$550 (apartment near My Khe Beach/An Thuong)',
        food: '$250-$350 (street food very cheap, Western options affordable)',
        coworking: '$80-$120',
        internet: '$30 (good speeds for the price)',
        other: '$120-$180'
      },
      internet: {
        download: '100-200 Mbps',
        upload: '30-60 Mbps',
        reliability: 'Good (fiber available in main areas, improving)',
        note: 'Internet is reliable in city center and expat areas. Backup mobile hotspot recommended.'
      },
      coworkingSpaces: [
        { name: 'Enouvo Space', price: '$100/month', note: 'Tech startup focus, good community' },
        { name: 'The Hive Da Nang', price: '$120/month', note: 'Established, professional environment' },
        { name: 'Vietnam Nomad Village', price: '$80/month', note: 'Budget-friendly, social atmosphere' }
      ],
      neighborhoods: [
        { name: 'My Khe Beach', description: 'Beachfront, expat-friendly, relaxed vibe, restaurants' },
        { name: 'An Thuong', description: 'Trendy area, cafés, nightlife, walking distance to beach' },
        { name: 'Son Tra', description: 'Quieter, residential, nature nearby, peninsula views' }
      ],
      workCafes: 'The Espresso Station, Cong Caphe, Bread of Life',
      bestSeason: 'February-May: Dry, warm (25-30°C), clear skies, perfect beach weather. Avoid September-December (rainy season, occasional typhoons).',
      whyMoving2025: 'Budget-conscious nomads seeking beach lifestyle. Less crowded than Bali or Thailand. Authentic Vietnamese culture. Growing infrastructure. Proximity to Hoi An (UNESCO site). Balance of affordability and comfort.'
    },
    {
      name: 'Split, Croatia',
      timezone: 'UTC+1',
      safetyRating: '88/100',
      community: 'Small',
      budget: '$1,400-$1,800',
      midRange: '$2,000-$2,600',
      upscale: '$3,200+',
      whyLiveHere: 'Split combines Mediterranean lifestyle with affordability and European infrastructure. Historic Old Town (UNESCO site), stunning Adriatic coastline, and a growing digital nomad scene. More affordable than Western European coastal cities while offering similar quality of life and EU access.',
      visas: [
        {
          name: 'Tourist Visa',
          duration: '90 days',
          requirements: 'Schengen zone standard for most nationalities'
        },
        {
          name: 'Temporary Residence',
          duration: '1 year',
          requirements: 'Various categories including digital nomad work, requires proof of income'
        },
        {
          name: 'Digital Nomad Visa',
          duration: '1 year',
          requirements: 'Croatia offers temporary residence for remote workers, income requirements apply'
        }
      ],
      budgetBreakdown: {
        accommodation: '$700-$1,000 (apartment in Bacvice/Firule)',
        food: '$350-$500',
        coworking: '$120-$180',
        internet: '$40-$60',
        other: '$250-$350'
      },
      internet: {
        download: '300+ Mbps',
        upload: '100-150 Mbps',
        reliability: 'Excellent (fiber widely available in city)',
        note: 'Reliable internet infrastructure, especially in main residential areas.'
      },
      coworkingSpaces: [
        { name: 'Fiskalizacija', price: '$150/month', note: 'Central location, modern facilities, events' },
        { name: 'Cirquark', price: '$180/month', note: 'Premium space, strong community' },
        { name: 'Coworking Split', price: '$120/month', note: 'Budget-friendly, near Old Town' }
      ],
      neighborhoods: [
        { name: 'Bacvice', description: 'Beach area, lively, cafés, nightlife, popular with younger crowd' },
        { name: 'Firule', description: 'Residential, quiet, beach access, local vibe' },
        { name: 'Meje', description: 'Close to center, walkable, authentic neighborhood' }
      ],
      workCafes: 'Lvxor, Paradigma, Black Cat',
      bestSeason: 'May-June & September-October: Perfect Mediterranean weather (20-26°C), fewer tourists than summer, ideal for work-life balance. Summer (July-August) is hot and crowded.',
      whyMoving2025: 'Affordable EU/Schengen access. Adriatic lifestyle at fraction of Italian/French coast prices. Growing nomad community. Excellent internet. Safe and walkable. Island-hopping opportunities. Mediterranean climate and culture.'
    },
    {
      name: 'Penang, Malaysia',
      timezone: 'UTC+8',
      safetyRating: '85/100',
      community: 'Small-Medium',
      budget: '$900-$1,300',
      midRange: '$1,400-$2,000',
      upscale: '$2,500+',
      whyLiveHere: 'Penang offers stability, affordability, and cultural diversity in Southeast Asia. George Town is a UNESCO World Heritage site with incredible food scene. The MM2H visa provides long-term stability rare in the region. It\'s the "mature" choice for nomads seeking structure and established expat infrastructure.',
      visas: [
        {
          name: 'MM2H (Malaysia My Second Home)',
          duration: '10 years',
          requirements: 'Requires financial proof (RM500,000 assets or RM10,000/month income), fixed deposit required'
        },
        {
          name: 'Tourist Visa',
          duration: '90 days',
          requirements: 'Visa-free entry for most countries, renewable'
        },
        {
          name: 'Professional Visit Pass',
          duration: '12 months',
          requirements: 'For business/professional purposes, requires sponsorship'
        }
      ],
      budgetBreakdown: {
        accommodation: '$450-$650 (condo in George Town/Tanjung Bungah)',
        food: '$250-$400 (hawker food $2-4, restaurants $8-15)',
        coworking: '$80-$130',
        internet: '$40-$60',
        other: '$180-$250'
      },
      internet: {
        download: '100-200 Mbps',
        upload: '50-100 Mbps',
        reliability: 'Good (fiber available, mobile backup recommended)',
        note: 'Reliable in main areas, improving infrastructure. Coworking spaces have excellent connectivity.'
      },
      coworkingSpaces: [
        { name: 'Common Ground', price: '$120/month', note: 'Central George Town, professional, events' },
        { name: 'Settlers Café', price: '$80/month', note: 'Casual environment, good community' },
        { name: 'The Co Penang', price: '$130/month', note: 'Modern facilities, networking events' }
      ],
      neighborhoods: [
        { name: 'George Town', description: 'UNESCO heritage, street art, cafés, cultural hub' },
        { name: 'Tanjung Bungah', description: 'Beach area, quieter, expat-friendly, condos' },
        { name: 'Gurney Drive', description: 'Modern, shopping, restaurants, waterfront' }
      ],
      workCafes: 'China House, Mugshot Café, The Alley',
      bestSeason: 'December-March: Drier season (some rain year-round), cooler (26-32°C). Avoid September-November (monsoon season, heavy rainfall).',
      whyMoving2025: 'Long-term stability (MM2H 10-year visa). Established expat infrastructure. Affordable without compromising quality. Diverse food culture (world-class). Safe and stable politically. Strategic Asian hub location. English widely spoken.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 font-sans pt-16 relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-400/30 to-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-teal-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-500/30 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-8 px-4 mb-6">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none"></div>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Digital Nomad Destinations
              </h1>
              <p className="text-2xl md:text-3xl mb-4 text-gray-800 font-semibold">
                Work From Anywhere. Actually.
              </p>
              <p className="text-base text-gray-700 leading-relaxed" style={{lineHeight: '1.6'}}>
                The dream: a laptop, a WiFi signal, and your choice of where to be. The reality: not all destinations are built the same for remote work. This guide cuts through the noise with real data on visa length, internet reliability, cost of living, community size, and whether you can actually get work done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use This Guide */}
      <section className="relative py-8 px-4 mb-6">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-teal-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>How to Use This Guide</h2>
            <p className="text-base text-gray-700 mb-6" style={{lineHeight: '1.6'}}>Pick Your Priority:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <DollarSign className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Budget</h3>
                  <p className="text-gray-600">Under $1,000/month total</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Visa Length</h3>
                  <p className="text-gray-600">Longest legal stay without visa runs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Community</h3>
                  <p className="text-gray-600">Largest nomad populations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Wifi className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Infrastructure</h3>
                  <p className="text-gray-600">Best internet reliability</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Sun className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Weather</h3>
                  <p className="text-gray-600">Productivity climate</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Timezone</h3>
                  <p className="text-gray-600">Match your clients/team</p>
                </div>
              </div>
            </div>
            <p className="text-base text-gray-700 mt-8" style={{lineHeight: '1.6'}}>
              Each destination includes exactly what you need to know: visa options with lengths, realistic monthly costs, internet speeds, coworking spaces with prices, where nomads actually live, and why people are moving there in 2025.
            </p>
          </div>
        </div>
      </section>

      {/* Influencers Section */}
      <section className="relative py-8 px-4 mb-6">
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-teal-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>The Digital Nomad Influencers & Their Picks</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-teal-600 mb-2">Pieter Levels (@levelsio)</h3>
              <p className="text-gray-700 mb-3">
                Founder of Nomad List (the database literally built for this). Influenced millions of nomads. Founder of $3M+ ARR business from the road.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Top destinations:</strong> Chiang Mai, Bangkok, Lisbon, Barcelona, Mexico City
              </p>
            </div>
            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-teal-600 mb-2">Nomadic Matt (Matt Kepnes)</h3>
              <p className="text-gray-700 mb-3">
                Budget-focused long-term traveler. Advocates for slow travel and affordability.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Top destinations:</strong> Chiang Mai, Medellín, Lisbon, Budapest, Prague
              </p>
            </div>
            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-teal-600 mb-2">Johnny FD</h3>
              <p className="text-gray-700 mb-3">
                Lived in Chiang Mai 5+ years. Entrepreneur-focused.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Top destinations:</strong> Bangkok, Da Nang, Manila, Southeast Asia
              </p>
            </div>
            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-teal-600 mb-2">Kristin Wilson (@TravelingWithKristin)</h3>
              <p className="text-gray-700 mb-3">
                Visa expert and YouTube creator. Focuses on visa-friendly destinations and community.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Top destinations:</strong> Mexico City, Barcelona, Porto, Medellín
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="relative py-8 px-4 mb-6">
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-teal-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>The 15 Best Digital Nomad Destinations</h2>
          <div className="space-y-4">
            {destinations.map((destination, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/50 border border-white/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <button
                  onClick={() => toggleDestination(index)}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-teal-400/80 via-blue-400/80 to-cyan-400/80 backdrop-blur-sm text-white p-6 flex items-center justify-between text-left hover:from-teal-500/90 hover:via-blue-500/90 hover:to-cyan-500/90 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                  <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                      {index + 1}. {destination.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm opacity-90 drop-shadow">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {destination.timezone}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" /> {destination.budget}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" /> {destination.community}
                      </span>
                      <span className="flex items-center gap-1">
                        <Shield className="w-4 h-4" /> Safety: {destination.safetyRating}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4 relative z-10">
                    {expandedDestination === index ? (
                      <ChevronUp className="w-6 h-6 drop-shadow-lg" />
                    ) : (
                      <ChevronDown className="w-6 h-6 drop-shadow-lg" />
                    )}
                  </div>
                </button>

                {expandedDestination === index && (
                  <div className="p-6 backdrop-blur-sm bg-white/60">
                    {/* Why Live Here */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Why Remote Workers Live Here</h4>
                      <p className="text-gray-700">{destination.whyLiveHere}</p>
                    </div>

                    {/* Visa Options */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">Digital Nomad Visas & Stay Length</h4>
                      <div className="space-y-3">
                        {destination.visas.map((visa, vIndex) => (
                          <div key={vIndex} className="bg-white p-4 rounded-lg border border-gray-200">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h5 className="font-semibold text-gray-800">{visa.name}</h5>
                                <p className="text-sm text-teal-600 font-medium">{visa.duration}</p>
                                <p className="text-sm text-gray-600 mt-1">{visa.requirements}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Monthly Cost Breakdown */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">Monthly Cost Breakdown</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <h5 className="font-semibold text-teal-600 mb-2">Budget ({destination.budget})</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>Accommodation: {destination.budgetBreakdown.accommodation}</li>
                            <li>Food: {destination.budgetBreakdown.food}</li>
                            <li>Coworking: {destination.budgetBreakdown.coworking}</li>
                            <li>WiFi/Mobile: {destination.budgetBreakdown.internet}</li>
                            <li>Other: {destination.budgetBreakdown.other}</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <h5 className="font-semibold text-teal-600 mb-2">Mid-Range</h5>
                          <p className="text-sm text-gray-700">{destination.midRange}</p>
                          <p className="text-xs text-gray-600 mt-2">Nicer apartment, mix of dining, travel</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <h5 className="font-semibold text-teal-600 mb-2">Upscale</h5>
                          <p className="text-sm text-gray-700">{destination.upscale}</p>
                          <p className="text-xs text-gray-600 mt-2">Premium accommodations, fine dining, lifestyle</p>
                        </div>
                      </div>
                    </div>

                    {/* Internet & Infrastructure */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">Internet & Infrastructure</h4>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="grid md:grid-cols-3 gap-4 mb-2">
                          <div>
                            <p className="text-sm text-gray-600">Download Speed</p>
                            <p className="font-semibold text-gray-800">{destination.internet.download}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Upload Speed</p>
                            <p className="font-semibold text-gray-800">{destination.internet.upload}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Reliability</p>
                            <p className="font-semibold text-gray-800">{destination.internet.reliability}</p>
                          </div>
                        </div>
                        {destination.internet.note && (
                          <p className="text-sm text-gray-600 mt-2 italic">{destination.internet.note}</p>
                        )}
                      </div>
                    </div>

                    {/* Coworking Spaces */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">Coworking Spaces</h4>
                      <div className="space-y-2">
                        {destination.coworkingSpaces.map((space, sIndex) => (
                          <div key={sIndex} className="bg-white p-3 rounded-lg border border-gray-200 flex items-start justify-between">
                            <div className="flex-1">
                              <h5 className="font-semibold text-gray-800">{space.name}</h5>
                              <p className="text-sm text-gray-600">{space.note}</p>
                            </div>
                            <div className="text-right ml-4">
                              <p className="font-semibold text-teal-600">{space.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Best Neighborhoods */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">Best Neighborhoods</h4>
                      <div className="space-y-2">
                        {destination.neighborhoods.map((neighborhood, nIndex) => (
                          <div key={nIndex} className="bg-white p-3 rounded-lg border border-gray-200">
                            <h5 className="font-semibold text-gray-800">{neighborhood.name}</h5>
                            <p className="text-sm text-gray-600">{neighborhood.description}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 mt-3">
                        <strong>Popular work cafés:</strong> {destination.workCafes}
                      </p>
                    </div>

                    {/* Safety & Community */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">Safety & Community</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <p className="text-sm text-gray-600">Safety Rating</p>
                          <p className="text-xl font-bold text-teal-600">{destination.safetyRating}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <p className="text-sm text-gray-600">Community Size</p>
                          <p className="text-xl font-bold text-teal-600">{destination.community}</p>
                        </div>
                      </div>
                    </div>

                    {/* Best Season */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Best Season for Productivity</h4>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700">{destination.bestSeason}</p>
                      </div>
                    </div>

                    {/* Why Moving There 2025 */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Why Nomads Are Moving There in 2025</h4>
                      <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                        <p className="text-gray-700">{destination.whyMoving2025}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Critical Numbers Section */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800" style={{letterSpacing: '-0.02em'}}>The Critical Numbers: What Actually Matters</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-600 mb-4">Best for Budget (Under $1,000/month)</h3>
              <ol className="space-y-2 text-gray-700">
                <li>1. Hanoi, Vietnam - $750</li>
                <li>2. Chiang Mai, Thailand - $800-$1,000</li>
                <li>3. Buenos Aires, Argentina - $800-$1,200</li>
                <li>4. Da Nang, Vietnam - $800-$1,200</li>
                <li>5. Bali, Indonesia - $700-$1,000</li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-600 mb-4">Best for Visa Length (6+ Months Easy)</h3>
              <ol className="space-y-2 text-gray-700">
                <li>1. Georgia - 1 year visa-free</li>
                <li>2. Thailand - Tourist visa + extensions = 6-9 months</li>
                <li>3. Mexico - 180-day tourist visa</li>
                <li>4. Portugal D7/D8 - 2 years renewable</li>
                <li>5. Medellín - 2 years official digital nomad visa</li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-600 mb-4">Best for Community (Largest Nomad Populations)</h3>
              <ol className="space-y-2 text-gray-700">
                <li>1. Chiang Mai - Very Large (world #1)</li>
                <li>2. Bali (Canggu) - Very Large</li>
                <li>3. Mexico City - Large (fastest-growing)</li>
                <li>4. Lisbon - Large, EU hub</li>
                <li>5. Barcelona - Large, Mediterranean option</li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-600 mb-4">Best for Internet Speed (Most Reliable)</h3>
              <ol className="space-y-2 text-gray-700">
                <li>1. Dubai - 500+ Mbps consistent</li>
                <li>2. Tokyo - 1 Gbps+ standard</li>
                <li>3. Barcelona - 300+ Mbps</li>
                <li>4. Lisbon - 200-300 Mbps</li>
                <li>5. Prague - 300-500 Mbps</li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-600 mb-4">Best for Timezone (GMT/UTC)</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Lisbon (UTC+0):</strong> Perfect US East Coast + Europe overlap</li>
                <li><strong>Dubai (UTC+4):</strong> Middle ground Asia + Europe</li>
                <li><strong>Bali (UTC+8):</strong> Early Asia calls, US West Coast evening</li>
                <li><strong>Chiang Mai (UTC+7):</strong> Southeast Asia sweet spot</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-600 mb-4">Best for Families (Safety + Infrastructure)</h3>
              <ol className="space-y-2 text-gray-700">
                <li>1. Dubai - Safest, excellent schools</li>
                <li>2. Lisbon - Safe, parks, schools, family visas</li>
                <li>3. Prague - Safe, affordable schools</li>
                <li>4. Barcelona - Beaches, schools, safe neighborhoods</li>
                <li>5. Tallinn - Safe, tech-forward, good schools</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* How to Pick Your Destination */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800" style={{letterSpacing: '-0.02em'}}>How to Actually Pick Your Destination</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Step 1: Your Non-Negotiables</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Budget limit?</li>
                <li>Timezone requirements?</li>
                <li>Internet speed minimum?</li>
                <li>Visa length needed?</li>
                <li>Climate preference?</li>
                <li>Community size?</li>
              </ul>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Step 2: Match to Destinations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Narrow to 3-4 destinations that fit your needs</li>
                <li>Don't optimize for everything (impossible)</li>
              </ul>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Step 3: Test Before Committing</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Visit for 2-4 weeks first</li>
                <li>Rent short-term, test internet, explore neighborhoods</li>
                <li>Attend coworking events, meet nomads</li>
                <li>Eat street food, check cost reality</li>
              </ul>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Step 4: Plan Your Visa Strategy</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Check visa length, extensions, runs</li>
                <li>Plan quarterly to understand patterns</li>
                <li>Build backup plan (visa runs to neighboring countries)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800" style={{letterSpacing: '-0.02em'}}>FAQs: What Digital Nomads Actually Ask</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-2">How long can I realistically stay?</h3>
              <p className="text-gray-700">
                Visa lengths vary. Tourist visas = 30-180 days. Digital nomad visas = 1-3 years. Most nomads combine approaches: tourist visa + extension + periodic visa runs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-2">What's minimum internet speed I need?</h3>
              <p className="text-gray-700">
                For video calls: minimum 50 Mbps (both directions). For streaming/collaboration: 100+ Mbps. Get 150+ Mbps and you have buffer for everything.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Is internet reliable enough for Zoom calls?</h3>
              <p className="text-gray-700">
                In coworking spaces: yes, almost always. At home: depends. Test before commitment. Have backup mobile hotspot plan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-2">What about timezone when moving?</h3>
              <p className="text-gray-700">
                Major consideration if you have scheduled client calls. Choose destination based on where your clients are. Europe (UTC+1-2) suits US/EU. Asia (UTC+7-8) suits US evening + early Asia.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-2">How do I avoid getting lonely?</h3>
              <p className="text-gray-700">
                Join coworking spaces, attend nomad meetups, Facebook groups, attend community events. Larger hubs (Chiang Mai, Bali, Lisbon) make this easier.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-2">What about taxes and work permits?</h3>
              <p className="text-gray-700">
                Rules vary wildly. Tourist visas = technically illegal to work (rarely enforced). Digital nomad visas = legal. Some countries don't care. Others are strict. Research and consider tax advice.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-2">What if I get sick?</h3>
              <p className="text-gray-700">
                Bring travel insurance. Most destinations have decent healthcare. Coworking communities usually know good doctors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-2">How often do visa runs?</h3>
              <p className="text-gray-700">
                Thailand: every 30-60 days. Lisbon: not at all (2-year visa). Mexico: can stay 180+ days. Plan based on your destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Plan Your Digital Nomad Trip with Wander</h2>
            <p className="text-xl mb-4 text-teal-100">
              You've read about destinations. You've seen the numbers. You've evaluated timezones and visa options.
            </p>
            <p className="text-lg mb-8 text-teal-100">
              Now build your actual itinerary.
            </p>
            <p className="text-lg mb-8 text-teal-100 max-w-3xl mx-auto">
              Wander's AI travel planning app generates personalized 60-second travel itineraries for digital nomads. Instead of hours researching coworking spaces, neighborhoods, visa requirements, and local tips—get a custom plan in 60 seconds.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg mb-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">What Wander Does:</h3>
              <ul className="text-left space-y-3 text-teal-100">
                <li className="flex items-start">
                  <span className="mr-3">1.</span>
                  <span><strong>Analyzes your priorities</strong> – Budget? Timezone? Community size? Climate?</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">2.</span>
                  <span><strong>Generates custom itineraries</strong> – Where to stay, where to work, visa strategy, best neighborhoods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">3.</span>
                  <span><strong>Integrates coworking spaces</strong> – Real options with pricing and access</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">4.</span>
                  <span><strong>Adapts for remote work</strong> – Includes reliable wifi locations, backup power, quiet zones</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">5.</span>
                  <span><strong>Includes community connectors</strong> – Facebook groups, meetup events, coworking community nights</span>
                </li>
              </ul>
            </div>

            <p className="text-xl mb-8 text-teal-100">
              You could spend weeks researching. Or 60 seconds with Wander.
            </p>

            <a
              href="https://wander.app"
              className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-50 transition-colors shadow-lg"
            >
              Plan Your Digital Nomad Adventure →
            </a>
          </div>
        </div>
      </section>

      {/* The Reality Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">The Reality of Location Independence</h2>
            <p className="text-lg text-gray-700 mb-4">
              Location independence isn't about paradise every day. Some days you'll be lonely. Some wifi will fail. Some neighborhoods won't feel like home.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              But here's the real benefit: if something isn't working (wrong timezone, too lonely, weather terrible), you move. You have options. The next destination is always possible.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              That's the digital nomad advantage.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              This guide maps where the best combinations of infrastructure, affordability, community, and visa flexibility exist. The rest is up to you.
            </p>
            <p className="text-lg font-semibold text-gray-800">
              Start with a destination that matches your needs. Expect 2-4 weeks to truly settle. If it works, stay. If it doesn't, move. That flexibility is the whole point.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            Last updated: 2025. This guide covers 15 global digital nomad destinations with visa data, realistic costs, internet speeds, coworking spaces, and community insights.
          </p>
        </div>
      </footer>
    </div>
  )
}
