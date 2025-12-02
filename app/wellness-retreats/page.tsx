'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import RelatedGuides from '@/components/pillar/RelatedGuides';
import PillarCTA from '@/components/pillar/PillarCTA';
import TableOfContents from '@/components/pillar/TableOfContents';

export default function WellnessRetreatsPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const influencers = [
    {
      name: 'Adriene Mishler',
      handle: '@yoga_with_adriene',
      followers: '13.3M YouTube followers',
      description: 'Yoga With Adriene. Inclusive yoga for all levels. Mental health focus. Appeals to beginners worldwide.',
    },
    {
      name: 'Jay Shetty',
      handle: '@jayshetty',
      followers: '17.5M Instagram followers',
      description: 'Mindfulness, meditation, purpose-driven living. Transformational content.',
    },
    {
      name: 'Sadhguru',
      handle: '@sadhguru',
      followers: '13M followers',
      description: 'Spiritual wellness, yoga, breathwork. Spiritual seekers follow him globally.',
    },
    {
      name: 'Koya Webb',
      handle: '@koyawebb',
      followers: '999K followers',
      description: 'Holistic wellbeing, vegan lifestyle, conscious travel. Sustainable wellness focus.',
    },
    {
      name: 'Wim Hof',
      handle: '@iceman_hof',
      followers: '3.2M followers',
      description: 'Breathwork, cold exposure, extreme wellness methods.',
    },
    {
      name: 'Dr. Joe Dispenza',
      handle: '@drjoedispenza',
      followers: '4M followers',
      description: 'Meditation, neuroscience-based transformation, breathwork.',
    },
  ];

  const destinations = [
    {
      title: 'Bali, Indonesia (Ubud/Canggu)',
      focus: 'Yoga, Meditation, Spa, Holistic Healing, Spiritual',
      monthlyCost: {
        budget: '$450-$750',
        midRange: '$1,200-$2,400',
        luxury: '$3,500-$7,000+',
      },
      whySpecial: 'Ubud is packed with spiritual energy. Retreat infrastructure is mature. Instructors are world-class. Costs are affordable. Food is plant-based by default. Rice paddy views while doing yoga. The yogi community is massive.',
      topRetreats: [
        {
          name: 'Five Elements, Puri Ahimsa (Ubud)',
          price: '$500-$900/night',
          details: '4-22 day luxury programs. Riverside suites with private views. Balinese healers + international teachers. Watsu aquatic therapy pool.',
          rating: '9.5/10',
          bestFor: 'Luxury spiritual seekers, transformational work',
        },
        {
          name: 'Bali Firefly (Ubud)',
          price: '$1,800/8 days',
          details: 'Hatha/Vinyasa/Yin yoga. Organic farm-to-table meals. Rice paddy views. Beginner-friendly.',
          bestFor: 'Budget-conscious yogis, nature immersion',
        },
        {
          name: 'Serenity Eco Retreat (Canggu)',
          price: '$108/week unlimited yoga',
          details: '20+ yoga styles. 10 classes/day options. Beach access. Massage included.',
          bestFor: 'Yoga obsessives, beach community',
        },
        {
          name: 'Om Ham Retreat (Ubud)',
          price: 'Customizable 3-8 days',
          details: 'Traditional Kundalini Tantra yoga. Balinese master Guru Ketut Asana. Spiritual healing practices.',
          bestFor: 'Spiritual seekers, energy work focus',
        },
      ],
      wellnessTypes: [
        'Yoga: Yes ($15-$35/class or included in retreats)',
        'Meditation: Yes (daily sessions)',
        'Ayurveda: Limited at budget, extensive at luxury',
        'Spa/Massage: Yes (Balinese massage $15-$40)',
        'Fitness: Yes (jungle hikes, cycling, movement)',
        'Detox: Yes (juice cleanses, plant-based meals)',
        'Holistic: Yes (energy healing, Balinese ceremonies, water purification)',
      ],
      instructors: {
        qualifications: 'Certified (200-500hr yoga teacher training), traditional Balinese healers',
        diversity: 'Mix of Western and local Balinese',
        languages: 'English widely spoken',
      },
      accommodation: {
        budget: 'Dorms $10-$20/night',
        midRange: 'Private rooms $60-$100',
        luxury: 'Villas and suites $200-$500+',
      },
      food: {
        options: 'Vegan, vegetarian, raw, organic, farm-to-table standard',
        quality: 'High, fresh local ingredients, some imported options',
      },
      bestSeason: 'April-October (Dry Season) - Clear skies, comfortable. May (Bali Spirit Festival) - Community gatherings. June-August - Less crowded, still dry.',
      dailySchedule: [
        '6:30am - Meditation',
        '7:00am - Yoga (60-90 min)',
        '9:00am - Breakfast (organic, plant-based)',
        '11:00am - Workshop or healing treatment',
        '1:00pm - Lunch',
        '3:00pm - Activity (Balinese ceremony, massage, nature walk)',
        '5:00pm - Restorative yin yoga',
        '7:00pm - Dinner',
        '8:00pm - Evening meditation or sound healing',
      ],
      commonExperiences: [
        'Emotional release (tears during practice are normal)',
        'Spiritual awakening and insights',
        'Deep community connection',
        'Digital detox (many retreat centers restrict WiFi)',
      ],
      whyChoose: 'Spiritual energy, affordability, world-class yoga teachers, authentic Balinese healing, stunning rice paddy settings, vibrant yogi community, accessible luxury.',
      healthcare: 'Good quality in Ubud, medical tourism available',
      infrastructure: 'Easy airport access (1-2 hours to Ubud/Canggu)',
    },
    {
      title: 'Thailand (Koh Samui/Chiang Mai)',
      focus: 'Spa, Detox, Yoga, Meditation, Integrative Medicine',
      monthlyCost: {
        budget: '$900-$1,500',
        midRange: '$3,000-$5,000',
        luxury: '$6,000-$10,000+',
      },
      whySpecial: 'Thai massage is world-renowned. Detox programs are clinical and thorough. Instructors are trained. Costs are 50% of Western equivalents. Spas are luxury without luxury prices.',
      topRetreats: [
        {
          name: 'Chiva-Som (Hua Hin)',
          price: '$700-$1,200/night',
          details: 'Integrative wellness pioneer. Medical assessments before program. Tailored fitness, nutrition, spa, mental health. Gulf coast oceanfront setting.',
          bestFor: 'Comprehensive wellness, results-focused, detox',
        },
        {
          name: 'Kamalaya (Koh Samui)',
          price: '$400-$600/night',
          details: 'Emotional healing and life coaching. Stress recovery programs. Cliffside sanctuary setting. Holistic assessment.',
          bestFor: 'Burnout recovery, emotional healing, quiet retreat',
        },
        {
          name: 'Yoga Nisarga (Koh Samui)',
          price: '$150-$250/night',
          details: 'Inner Transformation Retreat programs. Led by Swami Chaittanya Hari. Yoga + meditation + wellness. Beach resort setting.',
          bestFor: 'Budget-conscious yoga practitioners',
        },
      ],
      wellnessTypes: [
        'Spa: Thai massage $30-$80, luxury packages $200-$500/day',
        'Yoga: Yes',
        'Meditation: Yes',
        'Detox: Yes (structured programs)',
        'Integrative Medicine: Yes (Eastern + Western)',
      ],
      instructors: {
        qualifications: 'Certified Thai massage therapists, international yoga instructors',
        diversity: 'Mix of Thai and international wellness professionals',
        languages: 'English widely spoken in tourist areas',
      },
      accommodation: {
        budget: 'Basic rooms $40-$80/night',
        midRange: 'Private villas $150-$300',
        luxury: 'Oceanfront suites $400-$800+',
      },
      food: {
        options: 'Thai cuisine, vegetarian, vegan, detox menus, international options',
        quality: 'Fresh, locally sourced, organic ingredients common',
      },
      bestSeason: 'November-March (cool, dry, perfect weather)',
      dailySchedule: [
        '6:00am - Morning meditation',
        '7:00am - Yoga session',
        '9:00am - Healthy breakfast',
        '10:00am - Spa treatment or detox therapy',
        '12:30pm - Light lunch',
        '2:00pm - Workshop or personal consultation',
        '4:00pm - Afternoon yoga or fitness class',
        '6:00pm - Dinner',
        '7:30pm - Evening meditation or wellness talk',
      ],
      commonExperiences: [
        'Deep detoxification and cleansing',
        'Professional spa treatments',
        'Integrative health assessments',
        'Tropical island relaxation',
      ],
      whyChoose: 'World-class spas at affordable prices, integrative medicine blending Eastern + Western, tropical setting, detox expertise, luxury without the luxury price tag.',
      healthcare: 'Excellent medical tourism infrastructure, international hospitals',
      infrastructure: 'International airports in Bangkok, Phuket, Koh Samui',
    },
    {
      title: 'India (Rishikesh/Kerala)',
      focus: 'Yoga, Meditation, Ayurveda, Spiritual, Ashram Life',
      monthlyCost: {
        budget: '$300-$600',
        midRange: '$1,200-$2,000',
        luxury: '$3,000-$5,000+',
      },
      whySpecial: 'Yoga was born here. Ayurveda is practiced authentically. Ashram life is real spiritual immersion. Costs are unbeatable. The energy is different—pilgrims have been meditating here for thousands of years.',
      topRetreats: [
        {
          name: 'Ananda in the Himalayas',
          price: '$500-$800/night',
          details: 'Palace estate setting in foothills. Ayurveda + yoga + Vedanta philosophy. Physician-led programs. Transformational courses.',
          bestFor: 'Serious practitioners, spiritual seekers, budget-flexible',
        },
        {
          name: 'Six Senses Vana',
          price: '$300-$500/night',
          details: 'Integrative Ayurveda approach. Modern medical meets traditional healing. Yoga, wellness, detox programs. Clinical precision with holistic philosophy.',
          bestFor: 'Results-oriented, balanced approach',
        },
        {
          name: 'Parmarth Niketan Ashram (Rishikesh)',
          price: '$15-$30/night',
          details: 'Traditional ashram experience. Ganga Aarti ceremonies daily. Authentic yoga and meditation. Community living.',
          bestFor: 'True seekers, simplicity, authentic ashram experience',
        },
      ],
      wellnessTypes: [
        'Yoga: Yes (all styles, traditional training)',
        'Meditation: Yes (Vipassana, Transcendental, mindfulness)',
        'Ayurveda: Yes (consultations $50-$200, treatments $30-$150)',
        'Panchakarma Detox: Yes ($500-$2,000/week full cleansing)',
        'Holistic: Yes (spiritual rituals, mantras, pranayama)',
      ],
      instructors: {
        qualifications: 'Traditional gurus, certified Ayurvedic physicians, experienced yoga masters',
        diversity: 'Predominantly Indian, some international teachers',
        languages: 'Hindi and English',
      },
      accommodation: {
        budget: 'Ashram dormitories $10-$30/night',
        midRange: 'Private cottages $80-$150',
        luxury: 'Palace suites $300-$600+',
      },
      food: {
        options: 'Strictly vegetarian, Ayurvedic meals, sattvic diet',
        quality: 'Simple, fresh, prepared according to Ayurvedic principles',
      },
      bestSeason: 'October-March (avoid monsoon June-September)',
      dailySchedule: [
        '5:00am - Ashram bells wake-up',
        '5:30am - Morning meditation',
        '6:30am - Yoga practice',
        '8:30am - Simple vegetarian breakfast',
        '10:00am - Ayurvedic consultation or treatment',
        '12:00pm - Lunch',
        '2:00pm - Rest period',
        '4:00pm - Afternoon yoga or philosophy class',
        '6:00pm - Ganga Aarti ceremony (if in Rishikesh)',
        '7:00pm - Light dinner',
        '8:00pm - Evening meditation or satsang',
      ],
      commonExperiences: [
        'Deep spiritual immersion',
        'Authentic Ayurvedic healing',
        'Community ashram living',
        'Real transformation or real discomfort—no middle ground',
      ],
      whyChoose: 'Birthplace of yoga, authentic ashrams, Ayurveda depth, spiritual immersion, affordability, Himalayan energy, pilgrimage destination.',
      healthcare: 'Basic to good in cities, traditional Ayurvedic medicine widely available',
      infrastructure: 'Dehradun airport for Rishikesh, Kochi airport for Kerala',
    },
    {
      title: 'Costa Rica (Nosara/Montezuma)',
      focus: 'Yoga, Fitness, Eco-Wellness, Nature Immersion, Detox',
      monthlyCost: {
        budget: '$1,200-$2,500',
        midRange: '$3,000-$5,000',
        luxury: '$5,000-$8,000+',
      },
      whySpecial: 'Pura Vida culture permeates everything. Eco-friendly wellness is the norm. Jungle and beach settings combine biodiversity with healing. Surf, yoga, and nature immersion create unique wellness experiences.',
      topRetreats: [
        {
          name: 'THE WELL at Hacienda AltaGracia',
          price: '$600-$1,000/night',
          details: 'Luxury eco-resort in mountain setting. Comprehensive wellness programs. Farm-to-table dining. Adventure + wellness combination.',
          bestFor: 'Luxury eco-wellness, nature immersion',
        },
        {
          name: 'Blue Spirit Costa Rica (Nosara)',
          price: '$200-$400/night',
          details: 'Beachfront yoga retreat. Multiple yoga styles daily. Surf lessons available. Organic cuisine. Community-focused.',
          bestFor: 'Yoga + surf combination, community seekers',
        },
        {
          name: 'Bodhi Tree Yoga Resort',
          price: '$150-$250/night',
          details: 'Jungle setting near beach. Daily yoga and meditation. Healthy cuisine. Spa services. Eco-conscious.',
          bestFor: 'Budget-conscious wellness travelers',
        },
      ],
      wellnessTypes: [
        'Yoga: Yes (multiple styles, beach and jungle settings)',
        'Meditation: Yes (nature immersion focus)',
        'Fitness: Yes (surfing, hiking, adventure sports)',
        'Detox: Yes (plant-based cleansing programs)',
        'Eco-Wellness: Yes (nature therapy, forest bathing)',
        'Spa: Yes (natural treatments)',
      ],
      instructors: {
        qualifications: 'Certified yoga instructors, surf instructors, eco-guides',
        diversity: 'Mix of Costa Rican and international wellness professionals',
        languages: 'Spanish and English',
      },
      accommodation: {
        budget: 'Eco-lodges $60-$120/night',
        midRange: 'Private bungalows $150-$300',
        luxury: 'Luxury villas $400-$800+',
      },
      food: {
        options: 'Organic, farm-to-table, vegan, vegetarian, pescatarian',
        quality: 'Fresh tropical fruits, locally grown produce, high quality',
      },
      bestSeason: 'December-April (dry season, perfect weather)',
      dailySchedule: [
        '6:00am - Sunrise yoga on the beach',
        '7:30am - Healthy breakfast',
        '9:00am - Surf lesson or nature hike',
        '12:00pm - Lunch',
        '2:00pm - Free time or spa treatment',
        '4:00pm - Afternoon yoga session',
        '6:00pm - Sunset meditation',
        '7:00pm - Farm-to-table dinner',
        '8:30pm - Evening wellness workshop',
      ],
      commonExperiences: [
        'Pura Vida lifestyle immersion',
        'Surf and yoga combination',
        'Wildlife encounters during practice',
        'Deep connection with nature',
      ],
      whyChoose: 'Pura Vida culture, eco-friendly focus, jungle/beach combination, biodiversity + wellness, adventure opportunities, sustainable tourism.',
      healthcare: 'Good quality in tourist areas, international clinics available',
      infrastructure: 'International airports in San Jose and Liberia',
    },
    {
      title: 'Mexico (Tulum/Oaxaca)',
      focus: 'Yoga, Spa, Holistic, Mayan Spiritual Healing',
      monthlyCost: {
        budget: '$2,000-$3,500',
        midRange: '$4,000-$7,000',
        luxury: '$8,000-$12,000+',
      },
      whySpecial: 'Mayan healing traditions run deep. Cenote rituals connect ancient wisdom with modern wellness. Temazcal ceremonies offer profound transformation. Beach wellness with Caribbean beauty.',
      topRetreats: [
        {
          name: 'Naviva, A Four Seasons Resort',
          price: '$800-$1,500/night',
          details: 'Nature-immersed luxury tents. Comprehensive wellness programs. Mayan healing ceremonies. Oceanfront setting. Farm-to-table dining.',
          bestFor: 'Luxury wellness, cultural immersion',
        },
        {
          name: 'Azulik (Tulum)',
          price: '$400-$800/night',
          details: 'Eco-luxury treehouse villas. Mayan healing spa. Temazcal ceremonies. No electricity wellness experience. Beach and jungle.',
          bestFor: 'Unique eco-luxury, digital detox',
        },
        {
          name: 'Amansala (Tulum)',
          price: '$200-$400/night',
          details: 'Bikini bootcamp and yoga retreats. Beach club setting. Wellness programs. Healthy Mexican cuisine. Chic bohemian vibe.',
          bestFor: 'Fitness-focused wellness, beach lovers',
        },
      ],
      wellnessTypes: [
        'Yoga: Yes (beach yoga, rooftop sessions)',
        'Mayan Healing: Yes (traditional ceremonies, temazcal)',
        'Spa: Yes (Mayan clay treatments, cenote therapy)',
        'Holistic: Yes (energy work, shamanic practices)',
        'Fitness: Yes (beach workouts, cycling)',
        'Meditation: Yes (cenote meditation)',
      ],
      instructors: {
        qualifications: 'Certified yoga instructors, traditional Mayan healers, international wellness experts',
        diversity: 'Mix of Mexican and international practitioners',
        languages: 'Spanish and English',
      },
      accommodation: {
        budget: 'Beach cabanas $80-$150/night',
        midRange: 'Boutique hotels $200-$400',
        luxury: 'Eco-luxury resorts $600-$1,200+',
      },
      food: {
        options: 'Mexican cuisine, vegan, vegetarian, raw food, organic',
        quality: 'Fresh, locally sourced, many organic farms',
      },
      bestSeason: 'November-April (dry season, warm weather)',
      dailySchedule: [
        '6:30am - Beach sunrise yoga',
        '8:00am - Healthy breakfast',
        '10:00am - Temazcal ceremony or Mayan healing',
        '12:30pm - Lunch',
        '2:00pm - Cenote swimming or spa treatment',
        '4:30pm - Afternoon yoga or meditation',
        '6:30pm - Sunset on the beach',
        '7:30pm - Dinner',
        '9:00pm - Evening fire ceremony or sound healing',
      ],
      commonExperiences: [
        'Temazcal sweat lodge ceremonies',
        'Cenote swimming and meditation',
        'Mayan healing rituals',
        'Caribbean beach wellness',
      ],
      whyChoose: 'Mayan healing traditions, cenote rituals, temazcal ceremonies, beach wellness, cultural richness, Caribbean beauty, spiritual depth.',
      healthcare: 'Good quality in Tulum and major cities, medical tourism available',
      infrastructure: 'Cancun International Airport (1.5 hours to Tulum)',
    },
    {
      title: 'Portugal (Algarve)',
      focus: 'Yoga, Meditation, Detox, Spa, Wine Country',
      monthlyCost: {
        budget: '$1,500-$2,500',
        midRange: '$2,500-$3,500',
        luxury: '$4,000-$6,000+',
      },
      whySpecial: 'European wellness at affordable prices. Vineyard wellness combines detox with mindful indulgence. Atlantic Ocean settings. Charming villages. Portuguese hospitality enhances healing.',
      topRetreats: [
        {
          name: 'Six Senses Douro Valley',
          price: '200-250/day',
          details: 'Wine country wellness retreat. Vineyard views. Comprehensive spa. Yoga and meditation. Farm-to-table dining. Balance of wellness and enjoyment.',
          bestFor: 'Wine lovers seeking wellness, luxury retreat',
        },
        {
          name: 'Vale de Moses (Algarve)',
          price: '100-200/night',
          details: 'Eco-retreat in nature. Permaculture gardens. Yoga and meditation. Community living. Sustainable wellness.',
          bestFor: 'Eco-conscious travelers, community seekers',
        },
        {
          name: 'Suryalila Retreat Centre (Andalusia)',
          price: '80-150/night',
          details: 'Yoga retreat center in Portuguese/Spanish border. Daily yoga. Vegetarian meals. Peaceful mountain setting.',
          bestFor: 'Budget yoga retreats, quiet contemplation',
        },
      ],
      wellnessTypes: [
        'Yoga: Yes (various styles)',
        'Meditation: Yes (mindfulness focus)',
        'Detox: Yes (cleansing programs)',
        'Spa: Yes (European spa treatments)',
        'Wine Wellness: Yes (mindful wine tasting)',
        'Nature Therapy: Yes (ocean and mountain settings)',
      ],
      instructors: {
        qualifications: 'European-certified yoga instructors, spa therapists',
        diversity: 'Mix of Portuguese and international wellness professionals',
        languages: 'Portuguese, English, Spanish',
      },
      accommodation: {
        budget: 'Shared rooms $50-$100/night',
        midRange: 'Private rooms $120-$200',
        luxury: 'Vineyard suites $300-$500+',
      },
      food: {
        options: 'Mediterranean diet, vegetarian, vegan, local wines',
        quality: 'Fresh seafood, organic produce, excellent wine',
      },
      bestSeason: 'April-October (warm, sunny Mediterranean climate)',
      dailySchedule: [
        '7:00am - Morning yoga',
        '8:30am - Healthy breakfast',
        '10:00am - Spa treatment or meditation',
        '12:30pm - Mediterranean lunch',
        '2:00pm - Free time or vineyard tour',
        '5:00pm - Afternoon yoga',
        '7:00pm - Dinner',
        '8:30pm - Evening meditation or wellness talk',
      ],
      commonExperiences: [
        'European wellness culture',
        'Ocean cliff meditation',
        'Vineyard mindfulness',
        'Portuguese hospitality',
      ],
      whyChoose: 'European affordability, vineyard + wellness, ocean settings, detox programs, Mediterranean diet, charming villages, cultural richness.',
      healthcare: 'Excellent European healthcare system',
      infrastructure: 'Lisbon and Porto international airports',
    },
    {
      title: 'Spain (Ibiza)',
      focus: 'Holistic, Yoga, Spa, Beach Wellness, Sound Healing',
      monthlyCost: {
        budget: '$2,000-$3,500',
        midRange: '$3,500-$5,500',
        luxury: '$6,000-$10,000+',
      },
      whySpecial: 'Beyond the party scene lies a deep wellness culture. Energy vortex locations. World-class yoga instructors. Mediterranean beauty. Bohemian wellness community. Beach and pine forest combination.',
      topRetreats: [
        {
          name: 'Atzaro Agroturismo Hotel',
          price: '$300-$600/night',
          details: 'Luxury wellness hotel. Orange groves setting. Spa sanctuary. Yoga and meditation. Organic farm dining. Peaceful countryside.',
          bestFor: 'Luxury wellness, nature lovers',
        },
        {
          name: 'Yoga Sutras Retreat',
          price: '$150-$300/night',
          details: 'Dedicated yoga retreat center. Daily classes. Vegetarian meals. Beach access. Sound healing sessions.',
          bestFor: 'Yoga enthusiasts, sound healing seekers',
        },
        {
          name: 'Can Marti Ibiza',
          price: '$200-$400/night',
          details: 'Boutique wellness hotel. Yoga and Pilates. Spa treatments. Healthy Mediterranean cuisine. Tranquil setting.',
          bestFor: 'Boutique wellness, holistic health',
        },
      ],
      wellnessTypes: [
        'Yoga: Yes (beach and studio settings)',
        'Sound Healing: Yes (crystal bowls, gong baths)',
        'Spa: Yes (Mediterranean treatments)',
        'Meditation: Yes (energy vortex locations)',
        'Holistic: Yes (energy work, reiki)',
        'Beach Wellness: Yes (ocean therapy)',
      ],
      instructors: {
        qualifications: 'International yoga instructors, sound healers, holistic practitioners',
        diversity: 'Very international wellness community',
        languages: 'Spanish, English, German, French',
      },
      accommodation: {
        budget: 'Shared accommodations $80-$150/night',
        midRange: 'Private rooms $200-$350',
        luxury: 'Luxury suites $500-$1,000+',
      },
      food: {
        options: 'Mediterranean, vegetarian, vegan, organic, farm-to-table',
        quality: 'Fresh seafood, local produce, high quality',
      },
      bestSeason: 'May-June and September-October (avoiding summer crowds)',
      dailySchedule: [
        '7:00am - Beach sunrise yoga',
        '8:30am - Healthy breakfast',
        '10:00am - Sound healing session',
        '12:00pm - Mediterranean lunch',
        '2:00pm - Spa treatment or free time',
        '5:00pm - Sunset yoga',
        '7:30pm - Dinner',
        '9:00pm - Evening meditation or cacao ceremony',
      ],
      commonExperiences: [
        'Energy vortex experiences',
        'Sound healing transformations',
        'Beach wellness rituals',
        'International wellness community',
      ],
      whyChoose: 'Beyond the party scene - deep wellness culture, energy vortex locations, world-class instructors, Mediterranean beauty, bohemian community, beach and pine forests.',
      healthcare: 'Excellent Spanish healthcare system',
      infrastructure: 'Ibiza International Airport with connections across Europe',
    },
    {
      title: 'Greece (Santorini/Crete)',
      focus: 'Holistic, Transformational, Spa, Movement, Philosophy',
      monthlyCost: {
        budget: '$2,500-$4,000',
        midRange: '$4,000-$6,000',
        luxury: '$7,000-$12,000+',
      },
      whySpecial: 'Greek philosophy meets modern wellness. Ancient healing traditions. Volcanic island energy. Aegean Sea beauty. Mediterranean diet in its homeland. Philosophy and movement combined.',
      topRetreats: [
        {
          name: 'Euphoria Retreat (Mystras)',
          price: '300-500/night',
          details: 'Greek philosophy + Chinese medicine. Pine-forest setting. Transformational wellness journeys. Comprehensive spa. Gourmet healthy cuisine.',
          bestFor: 'Transformational wellness, holistic healing',
        },
        {
          name: 'Mana Retreat (Crete)',
          price: '$200-$400/night',
          details: 'Yoga and wellness retreat. Mountain and sea views. Organic farm. Cretan diet focus. Holistic programs.',
          bestFor: 'Yoga and Mediterranean diet combination',
        },
        {
          name: 'Blue Palace Elounda (Crete)',
          price: '$400-$800/night',
          details: 'Luxury spa resort. Elounda Spa & Thalassotherapy. Greek wellness treatments. Beach setting. Comprehensive programs.',
          bestFor: 'Luxury spa wellness, thalassotherapy',
        },
      ],
      wellnessTypes: [
        'Yoga: Yes (with philosophical integration)',
        'Thalassotherapy: Yes (seawater therapy)',
        'Spa: Yes (Greek and Mediterranean treatments)',
        'Movement: Yes (dance, Pilates, hiking)',
        'Philosophy: Yes (ancient Greek wisdom)',
        'Holistic: Yes (integrative approach)',
      ],
      instructors: {
        qualifications: 'European-certified wellness professionals, philosophers, traditional healers',
        diversity: 'Mix of Greek and international practitioners',
        languages: 'Greek, English, multiple European languages',
      },
      accommodation: {
        budget: 'Traditional rooms $100-$200/night',
        midRange: 'Sea-view suites $250-$400',
        luxury: 'Luxury villas $600-$1,200+',
      },
      food: {
        options: 'Mediterranean diet, vegetarian, vegan, Cretan cuisine',
        quality: 'Fresh seafood, olive oil, local produce, exceptional',
      },
      bestSeason: 'April-June and September-October (perfect weather, fewer crowds)',
      dailySchedule: [
        '6:30am - Sunrise meditation',
        '7:30am - Movement practice (yoga, Pilates, dance)',
        '9:00am - Mediterranean breakfast',
        '10:30am - Philosophy workshop or spa treatment',
        '1:00pm - Lunch',
        '3:00pm - Thalassotherapy or personal time',
        '5:30pm - Afternoon yoga',
        '7:30pm - Greek dinner',
        '9:00pm - Evening reflection or star gazing',
      ],
      commonExperiences: [
        'Greek philosophy integration',
        'Transformational journeys',
        'Aegean Sea healing',
        'Ancient wisdom practices',
      ],
      whyChoose: 'Greek philosophy + Chinese medicine, pine-forest nature, transformational journeys, Mediterranean diet homeland, Aegean beauty, ancient healing traditions.',
      healthcare: 'Good European healthcare, especially in tourist areas',
      infrastructure: 'Athens, Santorini, and Heraklion airports',
    },
    {
      title: 'Sri Lanka',
      focus: 'Ayurveda, Yoga, Meditation, Beach Wellness, Spiritual',
      monthlyCost: {
        budget: '$800-$1,500',
        midRange: '$2,000-$3,500',
        luxury: '$4,000-$7,000+',
      },
      whySpecial: 'Authentic Ayurveda at accessible prices. Buddhist meditation traditions. Pristine beaches and tea country. Ancient healing wisdom. Warm hospitality. Affordable luxury wellness.',
      topRetreats: [
        {
          name: 'Santani Wellness Resort',
          price: '$250-$450/night',
          details: 'Mountain wellness sanctuary. Ayurveda and yoga programs. Sustainable architecture. Organic cuisine. Comprehensive wellness.',
          bestFor: 'Holistic wellness, nature immersion',
        },
        {
          name: 'Siddhalepa Ayurveda Health Resort',
          price: '$150-$300/night',
          details: 'Authentic Ayurveda treatments. Beachfront location. Traditional physicians. Panchakarma programs. Affordable luxury.',
          bestFor: 'Authentic Ayurveda, budget luxury',
        },
        {
          name: 'Ulpotha',
          price: '$200-$350/night',
          details: 'Seasonal retreat village. Yoga and Ayurveda. Community living. Lake setting. Traditional Sri Lankan experience.',
          bestFor: 'Cultural immersion, community seekers',
        },
      ],
      wellnessTypes: [
        'Ayurveda: Yes (authentic treatments, consultations)',
        'Yoga: Yes (traditional and modern styles)',
        'Meditation: Yes (Buddhist traditions)',
        'Panchakarma: Yes (comprehensive detox)',
        'Spa: Yes (Sri Lankan treatments)',
        'Spiritual: Yes (Buddhist temples, practices)',
      ],
      instructors: {
        qualifications: 'Ayurvedic physicians, certified yoga instructors, Buddhist monks',
        diversity: 'Predominantly Sri Lankan with some international teachers',
        languages: 'Sinhala, Tamil, English',
      },
      accommodation: {
        budget: 'Simple rooms $40-$80/night',
        midRange: 'Private chalets $120-$250',
        luxury: 'Luxury villas $350-$600+',
      },
      food: {
        options: 'Ayurvedic cuisine, vegetarian, vegan, Sri Lankan',
        quality: 'Fresh, organic, prepared according to Ayurvedic principles',
      },
      bestSeason: 'December-March (west coast) or April-September (east coast)',
      dailySchedule: [
        '6:00am - Morning meditation',
        '6:30am - Yoga practice',
        '8:00am - Ayurvedic breakfast',
        '9:30am - Ayurvedic consultation or treatment',
        '12:00pm - Lunch',
        '2:00pm - Rest period (Ayurvedic recommendation)',
        '4:00pm - Afternoon yoga or beach walk',
        '6:00pm - Evening meditation',
        '7:00pm - Dinner',
        '8:00pm - Wellness talk or star gazing',
      ],
      commonExperiences: [
        'Authentic Ayurvedic healing',
        'Buddhist meditation practices',
        'Beach and mountain wellness',
        'Cultural temple visits',
      ],
      whyChoose: 'Authentic Ayurveda at accessible prices, Buddhist meditation traditions, pristine beaches, tea country, ancient healing wisdom, warm hospitality, affordable luxury.',
      healthcare: 'Good quality in Colombo and tourist areas',
      infrastructure: 'Colombo International Airport',
    },
    {
      title: 'Peru (Sacred Valley)',
      focus: 'Spiritual, Shamanic Healing, Yoga, Plant Medicine, Energy Work',
      monthlyCost: {
        budget: '$1,000-$2,000',
        midRange: '$2,500-$4,500',
        luxury: '$5,000-$8,000+',
      },
      whySpecial: 'Ancient Incan energy sites. Shamanic traditions run deep. High-altitude healing. Sacred plant medicine ceremonies. Machu Picchu spiritual pilgrimage. Andean wisdom combined with modern wellness.',
      topRetreats: [
        {
          name: 'Samadhi Sacred Valley',
          price: '$200-$400/night',
          details: 'Yoga and spiritual retreat. Sacred Valley views. Shamanic ceremonies. Andean healing practices. Organic farm-to-table.',
          bestFor: 'Spiritual seekers, cultural immersion',
        },
        {
          name: 'The Willka Tika Guest House',
          price: '$100-$200/night',
          details: 'Sacred garden retreat. Chakra gardens. Yoga and meditation. Shamanic healing. Budget-friendly spiritual wellness.',
          bestFor: 'Budget spiritual retreats, energy work',
        },
        {
          name: 'Skylodge Adventure Suites',
          price: '$400-$600/night',
          details: 'Unique cliffside capsules. Yoga and adventure combination. Sacred Valley immersion. Transformational experience.',
          bestFor: 'Unique experiences, adventure + wellness',
        },
      ],
      wellnessTypes: [
        'Yoga: Yes (with Andean spiritual integration)',
        'Shamanic Healing: Yes (traditional ceremonies)',
        'Plant Medicine: Yes (with experienced guides)',
        'Energy Work: Yes (chakra healing, Reiki)',
        'Meditation: Yes (high-altitude practices)',
        'Spiritual: Yes (Incan traditions, sacred sites)',
      ],
      instructors: {
        qualifications: 'Traditional shamans, certified yoga instructors, energy healers',
        diversity: 'Mix of Peruvian and international practitioners',
        languages: 'Spanish, Quechua, English',
      },
      accommodation: {
        budget: 'Simple accommodations $50-$100/night',
        midRange: 'Comfortable lodges $150-$300',
        luxury: 'Luxury retreats $400-$700+',
      },
      food: {
        options: 'Organic, vegetarian, vegan, traditional Andean cuisine',
        quality: 'Fresh, locally grown, high-altitude superfoods',
      },
      bestSeason: 'May-September (dry season, best for Sacred Valley)',
      dailySchedule: [
        '6:00am - Sunrise meditation',
        '7:00am - Yoga practice',
        '8:30am - Andean breakfast',
        '10:00am - Shamanic ceremony or healing session',
        '12:30pm - Lunch',
        '2:00pm - Sacred site visit or free time',
        '5:00pm - Afternoon yoga',
        '7:00pm - Dinner',
        '8:30pm - Evening fire ceremony or coca tea',
      ],
      commonExperiences: [
        'Shamanic healing ceremonies',
        'Sacred site pilgrimages',
        'Plant medicine experiences',
        'Andean energy work',
      ],
      whyChoose: 'Ancient Incan energy sites, shamanic traditions, high-altitude healing, sacred plant medicine, Machu Picchu pilgrimage, Andean wisdom, profound spiritual transformation.',
      healthcare: 'Basic in Sacred Valley, better in Cusco',
      infrastructure: 'Cusco airport, then ground transport to Sacred Valley',
    },
    {
      title: 'Switzerland (Swiss Alps)',
      focus: 'Clinical, Longevity, Medical Detox, Anti-Aging',
      monthlyCost: {
        budget: '$5,000-$8,000',
        midRange: '$8,000-$12,000',
        luxury: '$12,000-$20,000+',
      },
      whySpecial: 'Medical precision meets wellness. Longevity science pioneers. Physician-led programs. Measurable results. Swiss expertise and quality. Alpine healing environment. Clinical detox and anti-aging focus.',
      topRetreats: [
        {
          name: 'Clinique La Prairie',
          price: '$1,000-$2,000/night',
          details: 'Longevity pioneer since 1931. Comprehensive medical assessments. Anti-aging programs. Physician-led. Measurable results focus.',
          bestFor: 'Longevity, anti-aging, medical wellness',
        },
        {
          name: 'Chenot Palace Weggis',
          price: '$800-$1,500/night',
          details: 'Medical wellness retreat. Detox programs. Bioenergetic treatments. Lake Lucerne setting. Scientific approach.',
          bestFor: 'Medical detox, scientific wellness',
        },
        {
          name: 'The Dolder Grand Spa',
          price: '$500-$1,000/night',
          details: 'Luxury medical spa. Comprehensive wellness. Alpine views. Physician consultations. Integrative programs.',
          bestFor: 'Luxury medical spa, alpine setting',
        },
      ],
      wellnessTypes: [
        'Medical Wellness: Yes (physician-led programs)',
        'Longevity: Yes (anti-aging, diagnostics)',
        'Detox: Yes (clinical medical detox)',
        'Diagnostics: Yes (comprehensive health assessments)',
        'Spa: Yes (luxury Alpine spa treatments)',
        'Fitness: Yes (personalized training)',
      ],
      instructors: {
        qualifications: 'Medical doctors, licensed therapists, certified trainers',
        diversity: 'International medical and wellness professionals',
        languages: 'German, French, English, Italian',
      },
      accommodation: {
        budget: 'Not applicable (luxury focus)',
        midRange: 'Standard suites $600-$1,000',
        luxury: 'Premium suites $1,200-$2,500+',
      },
      food: {
        options: 'Medical nutrition, detox menus, gourmet healthy cuisine',
        quality: 'Exceptional, Swiss quality standards',
      },
      bestSeason: 'Year-round (summer for hiking, winter for alpine experience)',
      dailySchedule: [
        '7:00am - Medical assessment or diagnostic',
        '8:00am - Nutritious breakfast',
        '9:00am - Physician consultation',
        '10:30am - Treatment or therapy session',
        '12:00pm - Healthy lunch',
        '2:00pm - Spa treatment or personal training',
        '4:00pm - Alpine walk or relaxation',
        '6:00pm - Progress review',
        '7:00pm - Gourmet healthy dinner',
        '8:30pm - Evening relaxation',
      ],
      commonExperiences: [
        'Comprehensive medical diagnostics',
        'Measurable health improvements',
        'Swiss precision and quality',
        'Alpine healing environment',
      ],
      whyChoose: 'Medical precision, longevity science, physician-led programs, measurable results, Swiss expertise, Alpine environment, clinical detox, anti-aging focus, world-class facilities.',
      healthcare: 'World-class Swiss medical system',
      infrastructure: 'Zurich and Geneva international airports, excellent rail connections',
    },
    {
      title: 'USA (Sedona, Arizona)',
      focus: 'Spiritual, Energy Vortex, Yoga, Meditation, Desert Healing',
      monthlyCost: {
        budget: '$2,500-$4,000',
        midRange: '$4,500-$7,000',
        luxury: '$8,000-$12,000+',
      },
      whySpecial: 'Famous energy vortex locations. Red rock healing landscapes. Native American spiritual traditions. Modern wellness meets ancient wisdom. High desert clarity. Transformational energy.',
      topRetreats: [
        {
          name: 'Mii amo, A Destination Spa',
          price: '$800-$1,500/night',
          details: 'Luxury destination spa. Energy vortex location. Comprehensive wellness programs. Native American healing. Red rock setting.',
          bestFor: 'Luxury wellness, energy work, transformational',
        },
        {
          name: 'Sedona Mago Retreat',
          price: '$200-$400/night',
          details: 'Energy healing retreat. Chakra meditation. Yoga and Qigong. Vortex experiences. Affordable spiritual wellness.',
          bestFor: 'Energy healing, spiritual seekers',
        },
        {
          name: 'L\'Auberge de Sedona',
          price: '$400-$800/night',
          details: 'Luxury creekside resort. Spa sanctuary. Yoga and meditation. Red rock views. High-end wellness.',
          bestFor: 'Romantic wellness, luxury retreat',
        },
      ],
      wellnessTypes: [
        'Energy Vortex: Yes (famous vortex site experiences)',
        'Yoga: Yes (with energy work focus)',
        'Meditation: Yes (vortex meditation)',
        'Spiritual: Yes (Native American traditions)',
        'Spa: Yes (desert-inspired treatments)',
        'Hiking: Yes (red rock trails)',
      ],
      instructors: {
        qualifications: 'Certified yoga instructors, energy healers, Native American guides',
        diversity: 'American wellness professionals',
        languages: 'English',
      },
      accommodation: {
        budget: 'Standard rooms $150-$250/night',
        midRange: 'Comfortable suites $300-$500',
        luxury: 'Luxury villas $700-$1,200+',
      },
      food: {
        options: 'Southwestern cuisine, vegetarian, vegan, organic',
        quality: 'Fresh, locally sourced, high quality',
      },
      bestSeason: 'March-May and September-November (avoid summer heat)',
      dailySchedule: [
        '6:00am - Sunrise vortex meditation',
        '7:30am - Yoga practice',
        '9:00am - Healthy breakfast',
        '10:00am - Energy healing session or vortex tour',
        '12:30pm - Lunch',
        '2:00pm - Spa treatment or red rock hike',
        '5:00pm - Sunset meditation at vortex',
        '7:00pm - Dinner',
        '8:30pm - Star gazing or sound healing',
      ],
      commonExperiences: [
        'Energy vortex experiences',
        'Red rock healing',
        'Native American traditions',
        'Transformational energy shifts',
      ],
      whyChoose: 'Famous energy vortex locations, red rock healing landscapes, Native American spiritual traditions, modern wellness + ancient wisdom, high desert clarity, transformational energy.',
      healthcare: 'Good American healthcare system',
      infrastructure: 'Phoenix airport (2 hours drive to Sedona)',
    },
  ];

  const faqs = [
    {
      question: 'Will I actually feel different after a wellness retreat?',
      answer: 'Yes. Your nervous system shifts. You sleep better. Stress decreases. But lasting change requires continuation at home—yoga 3x/week, meditation daily, dietary changes. The retreat is the catalyst, not the cure.',
    },
    {
      question: 'What about detox symptoms?',
      answer: 'Real. Headaches, fatigue, emotional release are common first 2-3 days. Your body is eliminating toxins and adjusting. It passes. Hydrate, rest, expect it.',
    },
    {
      question: 'How long should I stay?',
      answer: 'Minimum 7 days (nervous system starts shifting). Ideal 10-14 days (deep transformation). 21+ days (lasting habit formation).',
    },
    {
      question: 'Can beginners go?',
      answer: 'Yes. But tell retreat operators. They adjust intensity. Yoga/meditation are beginner-friendly. You\'ll be uncomfortable sometimes—that\'s growth.',
    },
    {
      question: 'What\'s included vs. not?',
      answer: 'Included: Meals, daily yoga/meditation, workshops, some treatments. Not Included: Extra spa services, excursions, private sessions, flights, alcohol.',
    },
    {
      question: 'Best time of year?',
      answer: 'Season depends on destination. Avoid monsoons (Asia June-August). Avoid extreme heat. Research specific locations.',
    },
    {
      question: 'Will I be judged for taking time off?',
      answer: 'No. Everyone at wellness retreats is doing the same thing. It\'s normalized. Your nervous system will thank you.',
    },
    {
      question: 'What are typical wellness retreat costs?',
      answer: 'Budget (SE Asia, India): $150-$300/day. Mid-Range (Bali, Costa Rica, Portugal): $300-$600/day. Luxury (Switzerland, Maldives, California): $600-$2,500+/day.',
    },
  ];

  const wellnessPrinciples = [
    'Consistency matters more than intensity',
    'Wellness is mental + physical + spiritual',
    'Authenticity over Instagram moments',
    'Community is healing',
    'Your nervous system needs rest, not just activity',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 font-sans pt-16 relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-400/30 to-teal-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-teal-400/30 to-cyan-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative py-8 px-4">
        <div className="max-w-6xl mx-auto text-center backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>
            Wellness Destinations
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700" style={{ fontFamily: 'Mulish, sans-serif' }}>
            Discover transformational wellness experiences across 12 global destinations
          </p>
          <p className="text-lg max-w-3xl mx-auto text-gray-600" style={{ fontFamily: 'Mulish, sans-serif' }}>
            From yoga in Bali to longevity clinics in Switzerland, this comprehensive guide maps authentic retreats, honest costs, instructor qualifications, and what actually happens during transformation.
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <TableOfContents
            title="12 Wellness Retreat Destinations"
            summary="The complete guide to wellness travel in 2025. From yoga retreats in Bali to longevity clinics in Switzerland - authentic experiences, real costs, and what transformation actually looks like."
            highlights={[
              { label: 'Best Value', value: 'Bali ($50-200/day)' },
              { label: 'Best Yoga', value: 'India (Rishikesh)' },
              { label: 'Best Luxury', value: 'Switzerland' },
              { label: 'Total Destinations', value: '12' },
            ]}
            sections={[
              { id: 'introduction', label: 'Introduction' },
              { id: 'influencers', label: 'Expert Advice' },
              { id: 'destinations', label: 'All 12 Destinations' },
              { id: 'faqs', label: 'FAQs' },
              { id: 'truth', label: 'Real Truth' },
            ]}
          />
        </div>
      </div>

      {/* Introduction Section */}
      <div id="introduction" className="max-w-6xl mx-auto px-4 py-16 relative scroll-mt-20">
        <div className="prose prose-lg max-w-none backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>
            Wellness Travel Isn't a Luxury. It's an Investment in You.
          </h2>
          <p className="text-gray-700 mb-4" style={{ fontFamily: 'Mulish, sans-serif' }}>
            Wellness retreats have exploded. People are burned out. They're searching for clarity, healing, transformation. The industry has responded with retreats for every goal: burnout recovery, yoga deepening, meditation, detox, spiritual growth, longevity, fitness transformation.
          </p>
          <p className="text-gray-700 mb-8" style={{ fontFamily: 'Mulish, sans-serif' }}>
            The challenge: knowing which retreat matches your actual needs, how much to budget, where to go, and what to realistically expect.
          </p>

          <div className="backdrop-blur-lg bg-emerald-100/50 border-l-4 border-emerald-500 p-6 mb-8 rounded-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>
              Pick Your Wellness Goal:
            </h3>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700" style={{ fontFamily: 'Mulish, sans-serif' }}>
              <li><strong>Burnout Recovery:</strong> Rest, emotional healing, stress relief</li>
              <li><strong>Yoga Deepening:</strong> Advanced practice, spiritual immersion</li>
              <li><strong>Meditation:</strong> Silent retreats, breathwork, mindfulness</li>
              <li><strong>Spa & Pampering:</strong> Luxury treatments, rejuvenation</li>
              <li><strong>Fitness & Detox:</strong> Weight loss, cleansing, results-driven</li>
              <li><strong>Spiritual Growth:</strong> Energy work, ceremonies, rituals</li>
              <li><strong>Digital Detox:</strong> Nature immersion, offline time</li>
              <li><strong>Longevity:</strong> Anti-aging, diagnostics, biohacking</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Wellness Travel Influencers Section */}
      <div id="influencers" className="py-16 px-4 relative scroll-mt-20">
        <div className="max-w-6xl mx-auto backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>
            The Wellness Travel Influencers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {influencers.map((influencer, index) => (
              <div key={index} className="backdrop-blur-lg bg-gradient-to-br from-emerald-50/80 to-teal-50/80 border border-white/60 rounded-lg p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold mb-2 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {influencer.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1" style={{ fontFamily: 'Mulish, sans-serif' }}>
                  {influencer.handle}
                </p>
                <p className="text-sm font-semibold mb-3 text-emerald-600" style={{ fontFamily: 'Mulish, sans-serif' }}>
                  {influencer.followers}
                </p>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'Mulish, sans-serif' }}>
                  {influencer.description}
                </p>
              </div>
            ))}
          </div>

          <div className="backdrop-blur-lg bg-gradient-to-br from-teal-50/80 to-cyan-50/80 border border-white/60 rounded-lg p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-center bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>
              What They All Agree On:
            </h3>
            <ul className="space-y-2 max-w-3xl mx-auto text-gray-700" style={{ fontFamily: 'Mulish, sans-serif' }}>
              {wellnessPrinciples.map((principle, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-emerald-600 font-semibold mr-2">{index + 1}.</span>
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <div id="destinations" className="max-w-6xl mx-auto px-4 py-16 relative scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>
          The 12 Best Wellness Retreat Destinations
        </h2>

        <div className="space-y-6">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/60 border border-white/60 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className="bg-gradient-to-r from-emerald-400/80 via-teal-400/80 to-cyan-400/80 backdrop-blur-sm text-white p-6 cursor-pointer flex justify-between items-center"
                onClick={() => toggleCard(index)}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {destination.title}
                  </h3>
                  <p className="text-sm opacity-90" style={{ fontFamily: 'Mulish, sans-serif' }}>
                    {destination.focus}
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedCard === index ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </div>

              {expandedCard === index && (
                <div className="p-6 backdrop-blur-lg bg-white/40">
                  {/* Monthly Cost */}
                  <div className="mb-6">
                    <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Monthly Cost
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="font-semibold text-gray-700 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          Budget
                        </p>
                        <p className="text-2xl font-bold text-green-600" style={{ fontFamily: 'Mulish, sans-serif' }}>
                          {destination.monthlyCost.budget}
                        </p>
                      </div>
                      <div className="bg-teal-50 p-4 rounded-lg">
                        <p className="font-semibold text-gray-700 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          Mid-Range
                        </p>
                        <p className="text-2xl font-bold text-teal-600" style={{ fontFamily: 'Mulish, sans-serif' }}>
                          {destination.monthlyCost.midRange}
                        </p>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <p className="font-semibold text-gray-700 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          Luxury
                        </p>
                        <p className="text-2xl font-bold text-emerald-600" style={{ fontFamily: 'Mulish, sans-serif' }}>
                          {destination.monthlyCost.luxury}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Why Special */}
                  <div className="mb-6">
                    <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Why It's Special for Wellness
                    </h4>
                    <p className="text-gray-700" style={{ fontFamily: 'Mulish, sans-serif' }}>
                      {destination.whySpecial}
                    </p>
                  </div>

                  {/* Top Retreats */}
                  <div className="mb-6">
                    <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Top Wellness Retreats
                    </h4>
                    <div className="space-y-4">
                      {destination.topRetreats.map((retreat, idx) => (
                        <div key={idx} className="border-l-4 border-teal-500 pl-4 py-2 bg-gray-50 rounded">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              {retreat.name}
                            </h5>
                            <span className="text-teal-600 font-semibold whitespace-nowrap ml-4" style={{ fontFamily: 'Mulish, sans-serif' }}>
                              {retreat.price}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mb-2" style={{ fontFamily: 'Mulish, sans-serif' }}>
                            {retreat.details}
                          </p>
                          {retreat.rating && (
                            <p className="text-sm font-semibold text-gray-600 mb-1" style={{ fontFamily: 'Mulish, sans-serif' }}>
                              Rating: {retreat.rating}
                            </p>
                          )}
                          <p className="text-sm text-gray-600" style={{ fontFamily: 'Mulish, sans-serif' }}>
                            <strong>Best For:</strong> {retreat.bestFor}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Types of Wellness */}
                  <div className="mb-6">
                    <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Types of Wellness Available
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2" style={{ fontFamily: 'Mulish, sans-serif' }}>
                      {destination.wellnessTypes.map((type, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start">
                          <span className="text-teal-500 mr-2">•</span>
                          <span>{type}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructors */}
                  <div className="mb-6">
                    <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Instructor Qualifications
                    </h4>
                    <div className="bg-emerald-50 p-4 rounded-lg space-y-2" style={{ fontFamily: 'Mulish, sans-serif' }}>
                      <p className="text-gray-700">
                        <strong>Qualifications:</strong> {destination.instructors.qualifications}
                      </p>
                      <p className="text-gray-700">
                        <strong>Diversity:</strong> {destination.instructors.diversity}
                      </p>
                      <p className="text-gray-700">
                        <strong>Languages:</strong> {destination.instructors.languages}
                      </p>
                    </div>
                  </div>

                  {/* Accommodation */}
                  <div className="mb-6">
                    <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Accommodation Options
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4" style={{ fontFamily: 'Mulish, sans-serif' }}>
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="font-semibold text-gray-700 mb-1">Budget</p>
                        <p className="text-sm text-gray-600">{destination.accommodation.budget}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="font-semibold text-gray-700 mb-1">Mid-Range</p>
                        <p className="text-sm text-gray-600">{destination.accommodation.midRange}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="font-semibold text-gray-700 mb-1">Luxury</p>
                        <p className="text-sm text-gray-600">{destination.accommodation.luxury}</p>
                      </div>
                    </div>
                  </div>

                  {/* Food */}
                  <div className="mb-6">
                    <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Food & Dietary Options
                    </h4>
                    <div className="bg-green-50 p-4 rounded-lg space-y-2" style={{ fontFamily: 'Mulish, sans-serif' }}>
                      <p className="text-gray-700">
                        <strong>Options:</strong> {destination.food.options}
                      </p>
                      <p className="text-gray-700">
                        <strong>Quality:</strong> {destination.food.quality}
                      </p>
                    </div>
                  </div>

                  {/* Best Season */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Best Season
                    </h4>
                    <p className="text-gray-700" style={{ fontFamily: 'Mulish, sans-serif' }}>
                      {destination.bestSeason}
                    </p>
                  </div>

                  {/* Daily Schedule */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      What to Expect (Daily Schedule)
                    </h4>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <ul className="space-y-2" style={{ fontFamily: 'Mulish, sans-serif' }}>
                        {destination.dailySchedule.map((item, idx) => (
                          <li key={idx} className="text-gray-700">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Common Experiences */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Common Experiences
                    </h4>
                    <ul className="space-y-2" style={{ fontFamily: 'Mulish, sans-serif' }}>
                      {destination.commonExperiences.map((exp, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start">
                          <span className="text-emerald-500 mr-2">✓</span>
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Why Choose */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Why People Choose {destination.title}
                    </h4>
                    <p className="text-gray-700 italic" style={{ fontFamily: 'Mulish, sans-serif' }}>
                      {destination.whyChoose}
                    </p>
                  </div>

                  {/* Healthcare & Infrastructure */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Healthcare
                      </h5>
                      <p className="text-sm text-gray-700" style={{ fontFamily: 'Mulish, sans-serif' }}>
                        {destination.healthcare}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Infrastructure
                      </h5>
                      <p className="text-sm text-gray-700" style={{ fontFamily: 'Mulish, sans-serif' }}>
                        {destination.infrastructure}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faqs" className="bg-gray-50 py-16 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Real Wellness Retreat Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {faq.question}
                </h3>
                <p className="text-gray-700" style={{ fontFamily: 'Mulish, sans-serif' }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Real Wellness Truth */}
      <div id="truth" className="max-w-4xl mx-auto px-4 py-16 scroll-mt-20">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
          The Real Wellness Truth
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700" style={{ fontFamily: 'Mulish, sans-serif' }}>
          <p className="text-lg mb-4">
            Wellness retreats work—but only if you do the work.
          </p>
          <p className="mb-4">
            The retreat is a circuit-breaker. It pauses your normal life. It gives your nervous system space to reset. But if you return to stress without changes, you'll be back to square one in weeks.
          </p>
          <p className="mb-4">
            The transformation happens 80% after the retreat—in daily practice, dietary choices, boundaries you set.
          </p>
          <p className="mb-4 font-semibold">
            A retreat is the catalyst. You're the change.
          </p>
          <p className="text-lg">
            This guide maps the best catalysts on the planet.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <PillarCTA guideName="wellness-retreats" />
          <RelatedGuides currentPage="wellness-retreats" />
        </div>
      </div>

      {/* Back to Home */}
      <div className="bg-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            href="/"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
