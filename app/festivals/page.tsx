'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, MapPin, DollarSign, Users, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

interface Festival {
  id: string;
  name: string;
  tagline: string;
  location: string;
  period: string;
  category: string;
  description: string;
  proTip: string;
  budget: string;
  budgetNote: string;
  familyFriendly: boolean;
  safety: {
    rating: string;
    soloFemale: string;
    notes: string;
    safeZones?: string;
    cautionZones?: string;
  };
}

export default function FestivalsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedFestival, setExpandedFestival] = useState<string | null>(null);

  const toggleFestival = (id: string) => {
    setExpandedFestival(expandedFestival === id ? null : id);
  };

  const categories = [
    { id: 'all', name: 'All Festivals', icon: '🌍' },
    { id: 'culture-heritage', name: 'Culture & Heritage', icon: '🎭' },
    { id: 'music-arts', name: 'Arts & Performance', icon: '🎨' },
    { id: 'food-culture', name: 'Food & Culinary', icon: '🍜' },
    { id: 'nature-seasons', name: 'Nature & Seasons', icon: '🌸' },
    { id: 'adventure-sports', name: 'Adventure & Sports', icon: '🏔️' }
  ];

  const festivals: Festival[] = [
    {
      id: 'cherry-blossom-japan',
      name: 'Cherry Blossom Season (Hanami)',
      tagline: 'When Japan turns pink',
      location: 'Tokyo, Kyoto & nationwide, Japan',
      period: 'Late March - Early April',
      category: 'nature-seasons',
      description: 'Every spring, Japan transforms into a dreamscape of pale pink as millions of cherry trees burst into bloom. Locals spread picnic blankets beneath the branches for hanami - the centuries-old tradition of flower viewing. By day, families and friends gather in parks; by night, lanterns illuminate the blossoms in an ethereal glow. The fleeting blooms remind everyone that life\'s most precious moments are temporary.',
      proTip: 'Skip the famous spots on weekends. Meguro River in Tokyo is stunning but packed. Instead, try Philosopher\'s Path in Kyoto at sunrise, or head to Hirosaki in northern Japan for fewer crowds.',
      budget: 'Budget-Friendly',
      budgetNote: 'Parks are free; book accommodation 6+ months ahead as prices surge',
      familyFriendly: true,
      safety: {
        rating: 'excellent',
        soloFemale: 'excellent',
        notes: 'Japan consistently ranks as one of the world\'s safest destinations. Virtually no street harassment. The biggest concern is crowds at popular spots.'
      }
    },
    {
      id: 'diwali-india',
      name: 'Diwali (Festival of Lights)',
      tagline: 'A billion flames against the darkness',
      location: 'Jaipur, Varanasi, Mumbai, India',
      period: 'October - November',
      category: 'culture-heritage',
      description: 'Imagine 800 million people lighting oil lamps simultaneously. That\'s Diwali - the most significant festival celebrating light over darkness. Cities transform into glittering wonderlands as homes are decorated with rangoli patterns, fireworks paint the sky, and families gather for feasts of sweets. In Varanasi, thousands of floating lamps drift down the Ganges. In Jaipur, the Pink City glows gold.',
      proTip: 'Mumbai offers the safest experience for solo travelers while still delivering full Diwali magic. Book a heritage hotel\'s Diwali dinner for a curated introduction. Bring an N95 mask - firework smoke gets intense in cities.',
      budget: 'Budget-Friendly',
      budgetNote: 'Street celebrations and temple visits are free; heritage experiences vary',
      familyFriendly: true,
      safety: {
        rating: 'moderate',
        soloFemale: 'requires-caution',
        notes: 'Mumbai and Kerala are significantly safer than Delhi or Jaipur. Dress modestly (cover shoulders and knees). Avoid walking alone after dark. Consider organized tours or traveling with companions.',
        safeZones: 'Mumbai, Goa, Kerala',
        cautionZones: 'Delhi, Jaipur'
      }
    },
    {
      id: 'songkran-thailand',
      name: 'Songkran Water Festival',
      tagline: 'The world\'s biggest water fight',
      location: 'Bangkok, Chiang Mai, Phuket, Thailand',
      period: 'April 13-16 (fixed dates)',
      category: 'culture-heritage',
      description: 'Thai New Year starts with temple visits and respectful water blessings - then erupts into the planet\'s most epic water fight. For three days, entire cities become splash zones. The chaos has deeper roots - water symbolizes washing away the old year\'s misfortunes. But mostly it\'s about gleeful, soaking-wet fun in 35°C heat. You will get drenched. You will love it.',
      proTip: 'Chiang Mai is ground zero for the most intense battles. Waterproof everything (phone in sealed pouch, cash in ziplock). Wear quick-dry clothes and closed-toe shoes - streets get slippery. Never splash monks, elderly people, or babies.',
      budget: 'Budget-Friendly',
      budgetNote: 'Street participation is free; accommodation prices surge',
      familyFriendly: true,
      safety: {
        rating: 'good',
        soloFemale: 'moderate',
        notes: 'Known as "Seven Dangerous Days" due to road accidents - avoid motorbikes. Protect eyes with goggles. Use Grab app for transport, never unlicensed taxis.'
      }
    },
    {
      id: 'dia-de-muertos-mexico',
      name: 'Día de los Muertos',
      tagline: 'Death has never looked so alive',
      location: 'Oaxaca, Mexico City, Pátzcuaro, Mexico',
      period: 'October 31 - November 2',
      category: 'culture-heritage',
      description: 'Día de los Muertos is Mexico\'s most profound and beautiful tradition, blending Indigenous beliefs with Catholic influences into something utterly unique. Families build elaborate altars laden with marigolds, candles, photos, and the favorite foods of departed loved ones. Cemeteries transform into candlelit gatherings where people picnic beside graves, sharing stories and memories. Streets fill with skeleton face paint, parades, and papel picado banners. It\'s not morbid — it\'s a joyful reunion with those who\'ve passed, a celebration of memory and continuity.',
      proTip: 'Oaxaca is the heart of the tradition and safer than Mexico City. Visit the Panteón General cemetery on November 2nd for the most authentic experience. Join a local family\'s celebration if invited — this is where the real magic happens.',
      budget: 'Budget-Friendly',
      budgetNote: 'Most celebrations are free; Oaxaca accommodation books up early',
      familyFriendly: true,
      safety: {
        rating: 'moderate',
        soloFemale: 'moderate',
        notes: 'Oaxaca is considerably safer than Mexico City. Stick to tourist areas in Centro. Use Uber or registered taxis only. The vibe is family-friendly and welcoming.',
        safeZones: 'Oaxaca Centro, Pátzcuaro'
      }
    },
    {
      id: 'holi-india',
      name: 'Holi (Festival of Colors)',
      tagline: 'Paint the world in every color',
      location: 'Mathura, Vrindavan, Jaipur, India',
      period: 'March (full moon)',
      category: 'culture-heritage',
      description: 'Spring arrives in India with an explosion of color. Holi celebrates the victory of good over evil, and everyone is a target. Strangers throw handfuls of vibrant gulal powder at each other. Water balloons rain down from rooftops. By noon, you\'re tie-dyed head to toe in pink, purple, green, and gold. It\'s chaotic, messy, joyful, and absolutely unforgettable. The colors symbolize the breaking down of social barriers — during Holi, everyone is equal, everyone celebrates together.',
      proTip: 'Book a private hotel Holi party at a heritage property in Jaipur for a safer, more comfortable experience. Wear old white clothes you don\'t mind ruining. Apply coconut oil to skin and hair beforehand — makes color removal much easier. Use natural/organic colors only.',
      budget: 'Budget-Friendly',
      budgetNote: 'Street celebrations free ($5-10 for colors); private events $50-200',
      familyFriendly: true,
      safety: {
        rating: 'moderate',
        soloFemale: 'private-events-recommended',
        notes: 'Private hotel celebrations offer the safest experience. If attending public events, travel in family groups and stay near exits. Protect eyes from powder.',
        safeZones: 'Private hotel celebrations in Jaipur'
      }
    },
    {
      id: 'lunar-new-year-asia',
      name: 'Lunar New Year',
      tagline: 'Asia\'s biggest celebration',
      location: 'Singapore, Taipei, Hong Kong, Beijing',
      period: 'January - February',
      category: 'culture-heritage',
      description: 'When a billion people celebrate simultaneously, you feel it. Lunar New Year is Asia\'s defining festival — a time for family reunions, feasting, and fresh starts. Red dominates everything: red lanterns, red envelopes stuffed with lucky money, red decorations on every door. Lion dances weave through streets. Fireworks light up the sky. Temples overflow with incense. Each year brings a new zodiac animal and new fortunes to discover. Whether you\'re in the neon sprawl of Hong Kong or the temple gardens of Taipei, the energy is unmistakable.',
      proTip: 'Taiwan and Singapore offer the safest, most accessible experiences for first-timers. Taipei\'s Pingxi Lantern Festival (around day 15) is absolutely magical — thousands of glowing lanterns rising into the night sky. Singapore\'s Chinatown decorations are spectacular.',
      budget: 'Varies',
      budgetNote: 'Street celebrations free; accommodation prices surge across Asia',
      familyFriendly: true,
      safety: {
        rating: 'excellent',
        soloFemale: 'excellent',
        notes: 'Singapore and Taiwan rank among the world\'s safest destinations. Hong Kong is very safe with normal urban precautions.'
      }
    },
    {
      id: 'venice-carnival',
      name: 'Venice Carnival',
      tagline: 'Where masks hide a thousand stories',
      location: 'Venice, Italy',
      period: 'February (before Lent)',
      category: 'culture-heritage',
      description: 'For two weeks, Venice transforms into a living Renaissance painting. Elaborate masks and baroque costumes fill the piazzas. Gondolas glide past palazzo windows where masked celebrations unfold. Street performers and musicians create theatrical tableaux at every turn. The carnival tradition dates back to the 12th century — a period when masks allowed all social classes to mingle. Today, it\'s part living history, part fashion show, part fever dream. The photography opportunities alone justify the trip.',
      proTip: 'The famous masks are everywhere — but quality varies wildly. For authentic craftsmanship, visit Ca\' Macana or Ca\' del Sol. The best free entertainment is simply watching the costume parades in Piazza San Marco. Stay in Mestre to save money; trains run constantly.',
      budget: 'Moderate-to-High',
      budgetNote: 'Street events free; special events vary; Venice is expensive generally',
      familyFriendly: true,
      safety: {
        rating: 'good',
        soloFemale: 'good',
        notes: 'Venice is generally safe but pickpocketing reaches high levels during Carnival — crowded bridges and squares are prime spots. Keep valuables secure. Avoid isolated alleys after dark.'
      }
    },
    {
      id: 'semana-santa-spain',
      name: 'Semana Santa (Holy Week)',
      tagline: 'Faith, art, and fire',
      location: 'Seville, Málaga, Granada, Spain',
      period: 'Week before Easter',
      category: 'culture-heritage',
      description: 'Spain\'s Holy Week is theatrical spectacle on a grand scale. Seville leads with over 60 brotherhoods parading elaborate floats bearing life-sized statues through medieval streets. Hooded penitents in pointed capirotes walk in solemn procession. Saetas (traditional laments) pierce the night air. Incense clouds the streets. Whether you\'re devout or simply appreciative of tradition, the emotional weight is undeniable. It\'s Spain at its most dramatic and deeply traditional.',
      proTip: 'Seville is the most famous but most crowded. Málaga offers equally stunning processions with easier logistics. The Madrugá (early Friday morning processions starting at midnight) is the climax. No reserved viewing spots for street processions; arrive 2+ hours early for good positions. Dress respectfully.',
      budget: 'Budget-Friendly',
      budgetNote: 'Processions are free; accommodation prices surge',
      familyFriendly: true,
      safety: {
        rating: 'very-good',
        soloFemale: 'very-good',
        notes: 'Family-friendly religious event with strong police presence. Spain is generally safe. Standard precautions: watch for pickpockets in crowds.'
      }
    },
    {
      id: 'gion-matsuri-japan',
      name: 'Gion Matsuri',
      tagline: 'A thousand years of tradition',
      location: 'Kyoto, Japan',
      period: 'Throughout July',
      category: 'culture-heritage',
      description: 'Gion Matsuri is Japan\'s most famous festival — a month-long celebration dating back to 869 AD. The highlights are the massive yamaboko floats, some weighing 12 tons and standing three stories tall, pulled through Kyoto\'s streets by teams of men in traditional happi coats. The three nights before (Yoiyama) transform downtown into a pedestrian street fair with food stalls, yukata-clad crowds, and illuminated floats. It\'s Kyoto at its cultural peak — tradition, craftsmanship, and community.',
      proTip: 'Yoiyama evenings (July 14-16) are more atmospheric than the procession itself — explore the floats up close and soak up the energy. Rent a yukata (summer kimono) for the full experience — many shops offer tourist rentals.',
      budget: 'Budget-Friendly',
      budgetNote: 'All events free; food stalls extra',
      familyFriendly: true,
      safety: {
        rating: 'excellent',
        soloFemale: 'excellent',
        notes: 'Japan\'s exceptional safety applies fully here. Well-organized festival with clear crowd control. The only concern is July heat — stay hydrated.'
      }
    },
    {
      id: 'pingxi-lantern-taiwan',
      name: 'Pingxi Lantern Festival',
      tagline: 'Wishes rising into the night',
      location: 'Pingxi (near Taipei), Taiwan',
      period: '15th day of Lunar New Year',
      category: 'culture-heritage',
      description: 'Few images are as magical as thousands of glowing lanterns rising into a dark sky. At Pingxi, participants write wishes on paper lanterns, light the internal flame, and release them heavenward — a tradition symbolizing letting go of the past and embracing hope. The main event sees hundreds launching simultaneously, creating a scene that looks computer-generated but is absolutely real. It\'s romantic, contemplative, and one of those rare travel moments that exceeds expectations.',
      proTip: 'The main event in Pingxi requires free tickets (released online weeks ahead). But the mountain village releases lanterns every night during the festival period — you can show up, buy a lantern (~$5-10), and have the experience without the mega-crowds.',
      budget: 'Budget-Friendly',
      budgetNote: 'Lanterns ~$5-10; event itself is free',
      familyFriendly: true,
      safety: {
        rating: 'excellent',
        soloFemale: 'excellent',
        notes: 'Taiwan is exceptionally safe — consistently rated one of the world\'s best destinations for all travelers. Friendly locals, excellent public transport, virtually no concerns.'
      }
    },
    {
      id: 'edinburgh-fringe',
      name: 'Edinburgh Festival Fringe',
      tagline: 'The world\'s biggest arts festival',
      location: 'Edinburgh, Scotland',
      period: 'August (3+ weeks)',
      category: 'music-arts',
      description: 'Every August, Edinburgh\'s population doubles as the city transforms into an open-air stage. The Fringe is staggering in scale: 3,000+ shows daily across every conceivable venue — church basements, parking garages, the backs of pubs. From unknown comedians to future stars, experimental theater to circus acts, there\'s nothing too creative or too wonderful. The Royal Mile becomes a non-stop performer parade. You\'ll stumble into career-defining performances in rooms with twenty seats. It\'s where creative careers launch and artistic boundaries dissolve.',
      proTip: 'Don\'t over-plan — half the magic is stumbling into unexpected shows. The Free Fringe has excellent performances. Download the official app to navigate the chaos. Book accommodation impossibly early (6+ months). Stay for at least 4-5 days to barely scratch the surface.',
      budget: 'Moderate',
      budgetNote: 'Many shows £10-20; Free Fringe exists; accommodation is the expense',
      familyFriendly: true,
      safety: {
        rating: 'excellent',
        soloFemale: 'excellent',
        notes: 'Edinburgh is extremely safe and walkable. Strong police presence during the festival. Scotland is consistently rated one of the safest places for all travelers. Only concern: pickpockets on the crowded Royal Mile.'
      }
    },
    {
      id: 'la-tomatina-spain',
      name: 'La Tomatina',
      tagline: 'The world\'s messiest food fight',
      location: 'Buñol (near Valencia), Spain',
      period: 'Last Wednesday of August',
      category: 'food-culture',
      description: 'One hour. 150 tons of overripe tomatoes. 20,000 people. Complete chaos. La Tomatina is gloriously, hilariously absurd — a small Spanish town\'s annual tradition of pelting each other with tomatoes until everyone and everything is dripping red. It started as a spontaneous food fight in 1945 and somehow became an international phenomenon. When the second cannon fires, it\'s over. The streets are hosed down, participants stumble to nearby pools and rivers, and Buñol returns to being a sleepy village. Until next year.',
      proTip: 'Wear goggles — tomato acid stings. Closed-toe shoes that can be ruined (the streets become a pulpy swamp). Leave everything at your hotel — no phones, no cameras, nothing. Squash tomatoes before throwing (it\'s the rule). Stay near the edges if you want a slightly less intense experience.',
      budget: 'Moderate',
      budgetNote: 'Tickets €50-70; Valencia accommodation + transport adds up',
      familyFriendly: true,
      safety: {
        rating: 'very-good',
        soloFemale: 'very-good',
        notes: 'Surprisingly well-organized despite the chaos. Zero serious injuries in recent years. Strict safety rules enforced. Medical stations throughout. The event is controlled mayhem — emphasis on controlled.'
      }
    },
    {
      id: 'dubai-food-festival',
      name: 'Dubai Food Festival',
      tagline: 'Where the world\'s cuisines meet',
      location: 'Dubai, UAE',
      period: 'February - March',
      category: 'food-culture',
      description: 'Dubai doesn\'t do "small" — and its food festival reflects the city\'s ambition. Celebrity chefs fly in for exclusive dinners. Pop-up restaurants showcase cuisines from 200+ nationalities. Beach clubs transform into gourmet food markets. From Michelin-starred tasting menus to street food stalls serving Pakistani biryani, Emirati luqaimat, and Japanese ramen, it\'s a culinary passport without leaving the city. The festival coincides with Dubai\'s perfect weather season, making outdoor dining a pleasure.',
      proTip: 'Book the "Beach Canteen" events for the best value — casual tastings from top restaurants at accessible prices. The city is extremely safe, so wander freely between venues. Fresh juices and Arabic coffee are exceptional here. Pair with a Desert Safari for the complete Dubai experience.',
      budget: 'Moderate',
      budgetNote: 'Tasting events $20-100; fine dining experiences vary widely',
      familyFriendly: true,
      safety: {
        rating: 'excellent',
        soloFemale: 'excellent',
        notes: 'Dubai consistently ranks as the world\'s safest city for all travelers. Walk anywhere at any hour without concern. Strong law enforcement. Virtually no street crime. Dress modestly in public (shoulders/knees covered).'
      }
    },
    {
      id: 'balloon-fiesta-usa',
      name: 'Albuquerque Balloon Fiesta',
      tagline: '500 balloons painting the sunrise sky',
      location: 'Albuquerque, New Mexico, USA',
      period: 'First two weeks of October',
      category: 'nature-seasons',
      description: 'Imagine 500+ hot air balloons rising simultaneously into a crisp desert morning. That\'s the "Mass Ascension" at Albuquerque\'s Balloon Fiesta — the world\'s largest ballooning event and one of the most photogenic festivals anywhere. Special shape balloons (characters, animals, objects) mingle with traditional designs. The "Dawn Patrol" lights balloons from within before sunrise. Evening "Glow" events illuminate the field in an otherworldly display. It\'s family-friendly, genuinely magical, and unlike anything else.',
      proTip: 'Mass Ascension happens at sunrise (~6am) — arrive by 5am for parking. The light and calm winds at dawn create perfect flying conditions. Bring layers; desert mornings are cold. The "Balloon Glow" on Saturday evening is spectacular. Special Shapes Rodeo showcases the most creative designs.',
      budget: 'Budget-Friendly',
      budgetNote: 'Entry ~$15; free parking areas available',
      familyFriendly: true,
      safety: {
        rating: 'excellent',
        soloFemale: 'excellent',
        notes: 'Extremely family-friendly event with excellent safety record. Dawn timing means no nighttime crowd concerns. Perfect for first-time travelers looking for a safe, joyful experience. Only concern: altitude adjustment (1600m) — take it easy.'
      }
    },
    {
      id: 'harbin-ice-festival',
      name: 'Harbin Ice Festival',
      tagline: 'A frozen city of light',
      location: 'Harbin, China',
      period: 'January - February',
      category: 'nature-seasons',
      description: 'Harbin transforms into a frozen wonderland with the world\'s largest ice and snow festival. These aren\'t cute ice sculptures — they\'re full-scale illuminated castles, temples, and cityscapes carved from Songhua River ice blocks. At night, colored lights turn the structures into a surreal frozen cityscape. Ice slides, snow sculptures, and winter activities complete the experience. It\'s spectacular and absolutely bone-chilling — this is one of Earth\'s coldest cities.',
      proTip: 'This is serious cold: -20°C to -30°C is normal. Invest in proper winter gear — thermal layers, insulated boots, hand warmers, face covering. Sunset to 9pm offers the best lighting for photography. Budget 2-3 hours maximum outside before warming up.',
      budget: 'Moderate',
      budgetNote: 'Entry ~$30-50 per park; winter gear is the real investment',
      familyFriendly: true,
      safety: {
        rating: 'good',
        soloFemale: 'good',
        notes: 'China has low violent crime. Main challenges: language barrier (download translation apps), extreme cold (frostbite risk without proper gear), and icy walkways. Book through reputable agencies.'
      }
    },
    {
      id: 'tulip-festival-netherlands',
      name: 'Tulip Season',
      tagline: 'Seven million flowers in bloom',
      location: 'Keukenhof Gardens (near Amsterdam), Netherlands',
      period: 'Late March - Mid-May',
      category: 'nature-seasons',
      description: 'For eight weeks each spring, the Netherlands transforms into a carpet of color. Keukenhof Gardens — the world\'s largest flower garden — explodes with seven million tulips, daffodils, and hyacinths across 32 hectares of meticulously designed displays. Beyond Keukenhof, the surrounding Bollenstreek region offers endless fields of tulips stretching to the horizon. Cycle through the flower-lined countryside. It\'s genuinely overwhelming in person — the colors seem almost artificial in their intensity.',
      proTip: 'Skip the weekend crowds — visit Keukenhof on a weekday, ideally early morning. Rent a bike and explore the surrounding flower fields independently (free, and equally stunning). Mid-April hits peak bloom. Book garden tickets online to skip lines.',
      budget: 'Moderate',
      budgetNote: 'Keukenhof entry ~€20; surrounding fields are free to view',
      familyFriendly: true,
      safety: {
        rating: 'excellent',
        soloFemale: 'excellent',
        notes: 'Netherlands ranks in the top 10 for safety globally. Excellent cycling infrastructure. Minimal concerns. The only "danger" is getting clipped by a bicycle — they have right of way.'
      }
    },
    {
      id: 'autumn-foliage-japan',
      name: 'Autumn Foliage (Koyo)',
      tagline: 'When Japan turns to flame',
      location: 'Kyoto, Nikko, Hakone, Japan',
      period: 'October - November',
      category: 'nature-seasons',
      description: 'If cherry blossoms are Japan\'s spring symphony, autumn foliage (koyo) is its jazz — richer, warmer, more contemplative. Maple trees ignite in reds, oranges, and golds. Temples frame themselves against fiery canopies. Evening illuminations (light-up events) transform gardens into otherworldly scenes. The Japanese approach koyo with the same reverence as hanami — a season of appreciation for nature\'s fleeting beauty. Kyoto\'s temple gardens are legendary, but Nikko\'s mountains offer equally stunning alternatives.',
      proTip: 'Kyoto\'s Tofuku-ji Temple has the most famous foliage but intense crowds. Instead try Eikando Temple at night (illuminations are magical) or Jojakko-ji in Arashiyama. Follow the "koyo forecast" to time your visit perfectly.',
      budget: 'Moderate',
      budgetNote: 'Temple entry ~$5-10 each; some illumination events are free',
      familyFriendly: true,
      safety: {
        rating: 'excellent',
        soloFemale: 'excellent',
        notes: 'Same exceptional safety as cherry blossom season. Japan remains one of the world\'s safest countries. No concerns for travelers of any experience level.'
      }
    },
    {
      id: 'naadam-mongolia',
      name: 'Naadam Festival',
      tagline: 'The Olympics of the Steppe',
      location: 'Ulaanbaatar, Mongolia',
      period: 'July 11-15 (fixed dates)',
      category: 'adventure-sports',
      description: 'Naadam celebrates Mongolia\'s nomadic heritage through the "Three Manly Games": wrestling, horse racing, and archery. For five days, the nation turns its attention to these ancient sports. Wrestlers in traditional zodog vests compete in elimination rounds. Child jockeys race horses across 15-30km of open steppe. Archers in traditional dress launch arrows at targets. Beyond the competition, it\'s a window into a culture largely unchanged for centuries — yurts, throat singing, and the vast emptiness of the Mongolian landscape.',
      proTip: 'The opening ceremony at the National Stadium is spectacular — book tickets through tour operators. For the horse racing, you\'ll need transportation to the steppe (races start 30+ km from town). Going with a tour is strongly recommended for logistics.',
      budget: 'Moderate',
      budgetNote: 'Event tickets $20-100; tours recommended ($100-300/day)',
      familyFriendly: true,
      safety: {
        rating: 'good',
        soloFemale: 'good',
        notes: 'Mongolia has low violent crime and welcoming locals. Main challenges: language barrier (very few English speakers) and logistics complexity. Book through reputable tour agencies.'
      }
    },
    {
      id: 'san-fermin-spain',
      name: 'San Fermín',
      tagline: 'Spain\'s most famous fiesta',
      location: 'Pamplona, Spain',
      period: 'July 6-14 (fixed dates)',
      category: 'adventure-sports',
      description: 'Every July, Pamplona erupts in red and white as visitors descend for Spain\'s most famous festival. Beyond the famous encierro (bull run), San Fermín is a week-long celebration of Basque culture — traditional music, parades, fireworks, and communal gatherings in the old town. The opening chupinazo ceremony and closing Pobre de Mí are deeply significant cultural moments. It\'s Spain at its most festive and traditional.',
      proTip: 'Watching the cultural events is the heart of San Fermín. The opening ceremony on July 6 at noon is unforgettable. The procession of San Fermín on July 7 shows the religious roots. Balcony spots for viewing are available — book months ahead. The festival is about much more than one event.',
      budget: 'Moderate',
      budgetNote: 'Festival is free; accommodation prices triple; balcony spots €50-200',
      familyFriendly: false,
      safety: {
        rating: 'moderate',
        soloFemale: 'moderate',
        notes: 'Crowded streets require vigilance. Pickpocketing is common. Travel in groups. Stick to main areas. Standard festival precautions apply.'
      }
    }
  ];

  const getSafetyBadge = (rating: string) => {
    switch(rating) {
      case 'excellent':
      case 'very-good':
        return (
          <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-700 px-3 py-1 rounded-full text-xs font-semibold border border-green-500/30">
            <CheckCircle className="w-3 h-3" /> Safe for Solo Female Travel
          </span>
        );
      case 'good':
      case 'moderate':
      case 'requires-caution':
        return (
          <span className="inline-flex items-center gap-1 bg-yellow-500/20 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold border border-yellow-500/30">
            <AlertTriangle className="w-3 h-3" /> Extra Precautions Advised
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 bg-red-500/20 text-red-700 px-3 py-1 rounded-full text-xs font-semibold border border-red-500/30">
            <Shield className="w-3 h-3" /> Private Events Recommended
          </span>
        );
    }
  };

  const filteredFestivals = selectedCategory && selectedCategory !== 'all'
    ? festivals.filter(f => f.category === selectedCategory)
    : festivals;

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 font-sans pt-16 relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-yellow-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-teal-400/30 to-blue-500/30 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none"></div>

            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                World Festivals & Events
              </h1>
              <p className="text-2xl md:text-3xl text-center mb-3 text-gray-800 font-light">
                Plan Your Trip Around the World's Greatest Celebrations
              </p>
              <p className="text-lg text-center max-w-3xl mx-auto text-gray-700 leading-relaxed">
                From cherry blossoms in Japan to water festivals in Thailand, discover recurring festivals that define cultures and create unforgettable travel moments. Every festival includes safety ratings, solo female travel guidance, and insider tips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 pb-8 pt-4">

        {/* Category Filter */}
        <section className="backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id === 'all' ? null : cat.id)}
                className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                  (selectedCategory === cat.id || (!selectedCategory && cat.id === 'all'))
                    ? 'bg-purple-500 text-white shadow-lg scale-105'
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:scale-105'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* Festivals List */}
        <div className="space-y-6">
          {filteredFestivals.map((festival) => (
            <div key={festival.id} className="backdrop-blur-lg bg-white/50 border border-white/60 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => toggleFestival(festival.id)}
                className="w-full p-6 text-left hover:bg-white/30 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{festival.name}</h3>
                    <p className="text-lg text-gray-600 italic mb-3">{festival.tagline}</p>

                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="inline-flex items-center gap-1 text-sm text-gray-700">
                        <MapPin className="w-4 h-4 text-purple-600" />
                        {festival.location}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-gray-700">
                        <Calendar className="w-4 h-4 text-purple-600" />
                        {festival.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-gray-700">
                        <DollarSign className="w-4 h-4 text-purple-600" />
                        {festival.budget}
                      </span>
                      {festival.familyFriendly && (
                        <span className="inline-flex items-center gap-1 text-sm text-gray-700">
                          <Users className="w-4 h-4 text-purple-600" />
                          Family Friendly
                        </span>
                      )}
                    </div>

                    <div className="mb-3">
                      {getSafetyBadge(festival.safety.soloFemale)}
                    </div>
                  </div>

                  {expandedFestival === festival.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600 flex-shrink-0" />
                  )}
                </div>
              </button>

              {expandedFestival === festival.id && (
                <div className="px-6 pb-6 space-y-4 border-t border-white/30 pt-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">About This Festival</h4>
                    <p className="text-gray-700 leading-relaxed">{festival.description}</p>
                  </div>

                  <div className="bg-purple-50/70 p-4 rounded-lg border border-purple-200/50">
                    <h4 className="font-bold text-purple-700 mb-2">💡 Pro Tip</h4>
                    <p className="text-gray-700">{festival.proTip}</p>
                  </div>

                  <div className="bg-blue-50/70 p-4 rounded-lg border border-blue-200/50">
                    <h4 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Safety Information
                    </h4>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Overall Safety:</strong> {festival.safety.rating}
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Solo Female Safety:</strong> {festival.safety.soloFemale}
                    </p>
                    <p className="text-sm text-gray-700">{festival.safety.notes}</p>
                    {festival.safety.safeZones && (
                      <p className="text-sm text-gray-700 mt-2">
                        <strong>Safer Areas:</strong> {festival.safety.safeZones}
                      </p>
                    )}
                    {festival.safety.cautionZones && (
                      <p className="text-sm text-gray-700 mt-2">
                        <strong>Exercise Caution:</strong> {festival.safety.cautionZones}
                      </p>
                    )}
                  </div>

                  <div className="bg-green-50/70 p-4 rounded-lg border border-green-200/50">
                    <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Budget Information
                    </h4>
                    <p className="text-sm text-gray-700">
                      <strong>Budget Level:</strong> {festival.budget}
                    </p>
                    <p className="text-sm text-gray-700 mt-1">{festival.budgetNote}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFestivals.length === 0 && (
          <div className="backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-12 text-center">
            <p className="text-xl text-gray-600">No festivals found in this category.</p>
          </div>
        )}

        {/* Safety Disclaimer */}
        <div className="mt-8 backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-6">
          <h3 className="font-bold text-gray-800 mb-3">⚠️ Safety Disclaimer</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Safety ratings are based on aggregated data from multiple sources including government travel advisories, community feedback, and recent traveler reviews. Individual experiences may vary. Always check current government travel advisories, research recent traveler reviews, and trust your instincts. Wander is not liable for incidents during travel.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            <strong>Sources:</strong> UN Women Safety Index, US State Department, UK Foreign Office, Numbeo Crime Index, Solo Female Travelers community feedback.
          </p>
        </div>
      </div>
    </main>
  );
}
