'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, MapPin, DollarSign, Calendar, Utensils, Video, Globe } from 'lucide-react'
import RelatedGuides from '@/components/pillar/RelatedGuides'
import PillarCTA from '@/components/pillar/PillarCTA'

export default function FoodieDestinationsPage() {
  const [expandedDestination, setExpandedDestination] = useState<number | null>(null)
  const [expandedYoutuber, setExpandedYoutuber] = useState<number | null>(null)

  const toggleDestination = (index: number) => {
    setExpandedDestination(expandedDestination === index ? null : index)
  }

  const toggleYoutuber = (index: number) => {
    setExpandedYoutuber(expandedYoutuber === index ? null : index)
  }

  const destinations = [
    {
      name: 'Tokyo, Japan',
      region: 'Asian Foodie Destinations',
      season: 'Spring (March-May) & Autumn (September-November)',
      budget: {
        daily: '$50-$150',
        accommodation: 'Shinjuku, Shibuya, near Tsukiji Market',
        details: 'Budget for street food to Michelin dining experiences'
      },
      whyThisCity: 'Tokyo isn\'t just a city with good food—it\'s a food culture obsession taken to the highest level. The city has 169 Michelin stars (more than any city in the world), but that\'s only the beginning. You\'ll find Michelin-quality technique in a tiny ramen bar that costs $8. There\'s sushi that will ruin you for all other sushi. There are kaiseki restaurants where you watch the chef work inches from your face, 12 courses of pure precision. What makes Tokyo different: ingredient obsession. Fish is selected by the minute. Rice is cooked to exact temperature standards. Noodles are made the same way they\'ve been made for 50 years. This isn\'t food—it\'s respect for tradition mixed with relentless perfection.',
      whyYoutubersLoveIt: 'Mark Wiens created entire video series on Tokyo sushi adventures and omakase experiences. Rick Stein focused on Tsukiji fish market (the early morning tuna auctions are legendary). Passport Kitchen filmed Tokyo street snacks and izakaya crawls. Gordon Ramsay documented Michelin dining and hidden sushi restaurants.',
      whatToEat: [
        'Sushi/Sashimi (Omakase Style) - Sit at the counter, let the chef decide. This is how you experience sushi at its highest level.',
        'Ramen (Tonkotsu, Shoyu, Miso) - Each style is completely different. Try all three.',
        'Tempura - The simplest dishes reveal the most skill. Watch the chef fry in front of you.',
        'Yakitori (Grilled Chicken Skewers) - Every part of the chicken, each part transformed.',
        'Okonomiyaki (Savory Pancake) - Cooked on an iron griddle in front of you. Osaka vs. Tokyo styles are rivals.',
        'Takoyaki (Octopus Balls) - Street food, but made with technique.',
        'Kaiseki (Traditional Multi-Course) - If you do one fancy meal, this is it. 12-15 courses, seasonal ingredients.',
        'Wagyu Beef (A5 Grade) - Japanese beef is in another category entirely.'
      ],
      whereToEat: {
        streetFood: 'Tsukiji Outer Market - Early morning tuna auctions, street food stalls, fresh sashimi',
        markets: 'Shibuya/Shinjuku Street Food Tours - Neon-lit alleyways with tiny hole-in-the-wall spots',
        michelin: 'Fine Dining - Michelin kaiseki and omakase restaurants throughout the city',
        experiences: [
          'Cooking Classes - Sushi-making, ramen-making, tempura workshops',
          'Izakaya Crawls - Golden Gai in Shinjuku: 6 seats per bar, standing room only, locals packed in',
          'Depachika - Department store food halls (seriously, go to them, they\'re incredible)'
        ]
      },
      specialNotes: 'Avoid: March-May (burning season, air quality terrible). Look for hotels in Shinjuku, Shibuya, or near Tsukiji Market for easy access to food districts.'
    },
    {
      name: 'Bangkok, Thailand',
      region: 'Asian Foodie Destinations',
      season: 'November-February (Cool Season)',
      budget: {
        daily: '$2-$4 street food, $6-$8 cafe meals',
        accommodation: 'Silom-Sathorn, Chinatown (Yaowarat), Chatuchak area',
        details: 'Everything costs $2-4 per meal'
      },
      whyThisCity: 'Bangkok is the street food capital of the world. Not metaphorically—this is where food YouTubers go to eat things you didn\'t know existed and fall in love with flavors they can\'t explain. The city has mastered balance: spicy, sour, sweet, salty—all at once. Regional Thai cuisines (Northern, Southern, Isaan, Central) each have completely different identities. You can eat completely differently every single day for a month and never repeat yourself. Plus, everything costs $2-4 per meal. Mark Wiens literally lives here and runs his own restaurant (Phed Mark). This isn\'t a place he visits—it\'s home. That tells you everything.',
      whyYoutubersLoveIt: 'Mark Wiens: Lives in Bangkok, created "48 Hours in Bangkok," "Thai Regional Food Tour" (all 4 Thai cuisines in one day). His Phed Mark restaurant specializes in pad krapow. The Food Ranger: "Thai Street Food in Bangkok with Mark Wiens" collaborations. Best Ever Food Review Show (Sonny Side): Deep-dive Bangkok street food episodes with proper documentary approach.',
      whatToEat: [
        'Pad Thai - Stir-fried noodles. Simple? Try finding the best version. You\'ll taste the difference.',
        'Tom Yum Goong - Spicy shrimp soup. The complexity of flavor in one bowl.',
        'Som Tam - Green papaya salad with fermented fish. Sounds weird. Tastes like addiction.',
        'Pad Krapow - Basil stir-fry with egg over rice. Mark Wiens\' personal favorite at his restaurant.',
        'Massaman Curry - Slower, deeper, more complex than other curries.',
        'Khao Soi - Northern Thai curry noodles. Different from every other noodle dish.',
        'Mango Sticky Rice - Dessert that tastes like heaven.',
        'Boat Noodles - Served in a small bowl, meant to be eaten quickly. Addictive.'
      ],
      whereToEat: {
        streetFood: 'Chinatown (Yaowarat) Night Markets - Narrow streets packed with food stalls after dark. This is where locals eat.',
        markets: 'Or Tor Kor Market - Gourmet ingredients, some prepared food, vegetables like you\'ve never seen. Wang Lang Market - Street food paradise on the Chao Phraya River',
        restaurants: [
          'Som Tam Jay So Restaurant - Isaan food, famous for specific regional specialties',
          'Phed Mark - Mark Wiens\' own restaurant. Book ahead.'
        ],
        experiences: [
          'Cooking Classes - Thai curry and pad Thai workshops in dedicated schools'
        ]
      },
      specialNotes: 'Perfect street food weather. Not too hot to eat multiple meals. Fewer crowds. Outdoor eating is comfortable (80-85°F rather than 95°F+). April (Songkran Water Festival): Special holiday foods emerge.'
    },
    {
      name: 'Lima, Peru',
      region: 'Global Culinary Capitals',
      season: 'May-October (Dry Season)',
      budget: {
        daily: '$15-$40',
        accommodation: 'Miraflores (beachfront), Barranco (food-focused), San Isidro',
        details: 'Budget includes street food to fine dining options'
      },
      whyThisCity: 'Lima is ranked #1 foodie city by TasteAtlas. This isn\'t hype—it\'s a fusion of Hispanic, Japanese (Nikkei), Chinese (Chifa), and indigenous Peruvian cuisines, all concentrated in one capital. Ceviche was invented here. The world\'s best ceviche lives here. Pisco sour (the national cocktail) was perfected here. The city has multiple top-10 World\'s Best Restaurants. Farm-to-table is standard, not trendy. Markets overflow with ingredients that don\'t exist anywhere else on Earth. This is a city where food isn\'t just important—it\'s part of the identity.',
      whyYoutubersLoveIt: 'Mark Wiens: Entire video series on Lima food tours and ceviche deep dives. Peruvian street food guides on Migrationology. Gordon Ramsay: Featured Lima\'s culinary scene, visited Central and Maido (the world\'s #1 rated restaurant).',
      whatToEat: [
        'Ceviche - Raw fish cured in lime juice. The definition of simplicity revealing complexity.',
        'Lomo Saltado - Stir-fried beef with potatoes. Fusion of Asian and Peruvian.',
        'Anticuchos - Grilled beef heart skewers. Sounds intimidating. Tastes incredible.',
        'Aji de Gallina - Creamy chicken stew with chilies. Comfort food elevated.',
        'Causa - Layered potato dish with avocado, fish, lime. Architectural food.',
        'Nikkei Fusion - Japanese-Peruvian cuisine (Japan had large immigration to Peru in the 1800s). Result: mind-blowing fusion at restaurants like Maido.',
        'Pisco Sour - The national cocktail. Pisco brandy, lime, egg white, bitters.',
        'Picarones - Sweet potato donuts. Street food dessert.'
      ],
      whereToEat: {
        markets: 'Surquillo Market Tours - Where locals shop for ingredients',
        neighborhoods: 'Barranco Neighborhood Food Walks - Touristy but food-focused (LA73, Isolina Taberna)',
        michelin: 'Nikkei Tasting Menus - At Maido or similar world-class restaurants',
        experiences: [
          'Cooking Classes - Ceviche and pisco sour workshops',
          'Street Food Tours - Miraflores neighborhood'
        ]
      },
      specialNotes: 'Clear skies perfect for outdoor dining in Barranco and Miraflores. Temperatures 15-25°C (59-77°F). Lima has mild coastal weather year-round, but this is the best season.'
    },
    {
      name: 'Mexico City, Mexico',
      region: 'Global Culinary Capitals',
      season: 'October-November',
      budget: {
        daily: '$10-$30',
        accommodation: 'Roma Norte, Condesa (trendy), Polanco (upscale)',
        details: 'Street food to upscale dining'
      },
      whyThisCity: 'The taco capital of the world. Street food paradise. Mole varieties that take lifetimes to master. Just received Michelin Guide in 2024 (recognition of what locals already knew). This is a city where street food is elevated to art form. You can eat from a cart on the street and experience technique that rivals restaurants. Markets overflow with ingredients. Every neighborhood has a different food identity. The New Wave Mexican gastronomy scene is booming.',
      whyYoutubersLoveIt: 'Mark Wiens: "Extreme Mexico City Street Food Tour with 5 Mexican Guys," taco deep dives, Taquería Los Cocuyos featured prominently. Matty Matheson: Mexico City taco stands and casual dining exploration. Passport Kitchen: Mexican cooking immersion and market tours.',
      whatToEat: [
        'Tacos al Pastor - Spit-roasted pork on corn tortillas. The most iconic taco.',
        'Tacos de Cabeza - Head meat tacos. Sounds weird. Reality: incredible.',
        'Tlacoyos - Oval corn masa cakes filled with beans, cheese, or herbs.',
        'Chilaquiles - Fried tortillas in salsa. Breakfast or late night snack.',
        'Mole - Complex sauce with chocolate (sometimes 30+ ingredients). Regional varieties.',
        'Elote - Grilled corn with mayo, cheese, chili. Street food.',
        'Tamales - Steamed corn dough with fillings. Breakfast food that requires skill.',
        'Mezcal - Smoky agave spirit. Tastings reveal completely different flavor profiles.'
      ],
      whereToEat: {
        neighborhoods: 'Roma/Condesa Neighborhood Food Tours - Trendy restaurants mixed with street food',
        markets: 'Mercado de la Merced and San Juan Markets - Where the city sources ingredients',
        streetFood: 'Taquería Los Cocuyos - Legendary taco stall that Mark Wiens featured',
        fineDining: 'Polanco Fine Dining District - For upscale meals',
        experiences: [
          'Mezcalería Tastings - Understanding regional mezcal styles',
          'Cooking Classes - Mole and tortilla-making workshops'
        ]
      },
      specialNotes: 'Día de Muertos (Day of the Dead) food traditions. Specific foods made only for this holiday. Comfortable weather (15-25°C / 59-77°F). Autumn harvest season.'
    },
    {
      name: 'Istanbul, Turkey',
      region: 'Mediterranean Foodie Destinations',
      season: 'April-May & September-October',
      budget: {
        daily: '$15-$35',
        accommodation: 'Sultanahmet (Old City), Beyoglu (modern), Karaköy',
        details: 'Historic markets to modern restaurants'
      },
      whyThisCity: 'Istanbul is the culinary crossroads of Europe and Asia. Ottoman cuisine influences everything. Spice markets overflow with flavors you\'ve never smelled before. Meze (small plates culture) is an art form. Seafood along the Bosphorus is some of the freshest on Earth. Street food (simit, balik ekmek) is breakfast culture. The Spice Bazaar (Mısır Çarşısı) is 500+ years old and still the heart of the city\'s food culture.',
      whyYoutubersLoveIt: 'Helen Rennie: Cilicia Market shopping guides, Turkish cooking technique deep dives. Passport Kitchen: Istanbul food culture immersion and market exploration. Best Ever Food Review Show (Sonny Side): Istanbul street food episodes with proper documentary approach. Mark Wiens: Istanbul street food and market tours.',
      whatToEat: [
        'Kebabs - Adana kebab (spiced ground meat), Iskender kebab (layers with yogurt sauce)',
        'Meze Platters - Hummus, baba ganoush, stuffed grape leaves, cheese, olives. The whole experience.',
        'Balik Ekmek - Fish sandwich. Simple. Perfect.',
        'Simit - Sesame bread rings. Street food breakfast.',
        'Lahmacun - Turkish pizza (thin dough, ground meat, herbs)',
        'Baklava - Phyllo, nuts, honey. Done right, it\'s transcendent.',
        'Turkish Breakfast (Kahvalti) - Cheese, bread, olives, honey, jams, vegetables. A ritual.',
        'Turkish Coffee - Thick, strong, served in small cups. The entire ceremony matters.'
      ],
      whereToEat: {
        markets: 'Spice Bazaar (Mısır Çarşısı) Tours - 500-year-old market. Get lost. Eat. Repeat.',
        seafood: 'Bosphorus Seafood Restaurants - Waterfront dining watching ships pass',
        neighborhoods: [
          'Sultanahmet Street Food Walks - Historic district food exploration',
          'Beyoglu Neighborhood Food Tours - Modern, artsy, food-forward'
        ],
        experiences: [
          'Turkish Cooking Classes - Meze and baklava workshops',
          'Rooftop Dining - Overlooking mosques, the Bosphorus, Old City'
        ]
      },
      specialNotes: 'Mild temperatures (15-25°C / 59-77°F). Comfortable for exploring markets and outdoor dining. Fewer summer crowds. Perfect eating weather.'
    },
    {
      name: 'Paris, France',
      region: 'Global Culinary Capitals',
      season: 'September-October',
      budget: {
        daily: '$40-$100+',
        accommodation: 'Le Marais, Saint-Germain, 8th arrondissement',
        details: 'Budget boulangeries to Michelin stars'
      },
      whyThisCity: 'Paris invented fine dining. Boulangeries (bakeries) exist on every corner, each one taking bread seriously. Patisseries are art galleries made of butter and sugar. Bistros are where locals eat (not tourists). Michelin stars cluster here more than anywhere. Wine culture runs deeper than any city. Farm-to-table isn\'t new—it\'s how Parisians have always eaten. This is food as philosophy.',
      whyYoutubersLoveIt: 'Ina Garten: Detailed Paris food guides, L\'Ami Louis (her personal favorite), Saint-Germain recommendations. Gordon Ramsay: Fine dining focus, Michelin-starred restaurant documentaries. Matty Matheson: Classic Parisian bistros and casual neighborhood eating.',
      whatToEat: [
        'Croissants and Pain au Chocolat - Breakfast. Get them warm from a boulangerie.',
        'Boeuf Bourguignon - Beef braised in Burgundy wine. The definition of bistro food.',
        'Coq au Vin - Chicken in red wine. Similar to beef bourguignon but different soul.',
        'Escargots - Snails in garlic butter. Once you try them, you understand why.',
        'French Onion Soup - Caramelized onions, beef stock, Gruyère. Simple. Addictive.',
        'Macarons - Almond meringue cookies. Light, delicate, perfect.',
        'Croque Monsieur - Ham and cheese sandwich, pressed and buttered. Lunch that changes you.',
        'Steak Frites - Steak with fries. When done right, it\'s everything.'
      ],
      whereToEat: {
        markets: 'Marché des Enfants Rouges - Oldest covered market. Still operating since 1615.',
        neighborhoods: [
          'Saint-Germain Boulangerie Tours - Learn which boulangeries are worth going to',
          'Le Marais Pastry Crawls - Jacques Genin, Edwart Chocolatier, smaller hidden spots'
        ],
        michelin: 'Michelin-Star Dining - Le Cinq, Épicure, Astrance',
        experiences: [
          'Cooking Classes - Croissant and macaron workshops',
          'Wine Tastings - Sommelier-led or casual neighborhood tastings'
        ]
      },
      specialNotes: 'Autumn harvest. Truffle season begins. Comfortable weather (15-20°C / 59-68°F). Fewer summer tourists clogging bistros. Outdoor café season continues. Perfect.'
    },
    {
      name: 'Oaxaca, Mexico',
      region: 'Global Culinary Capitals',
      season: 'October-November',
      budget: {
        daily: '$8-$25',
        accommodation: 'Centro Historico, surrounding neighborhoods',
        details: 'Street food to traditional restaurants'
      },
      whyThisCity: 'Oaxaca is the culinary heart of Mexico. Seven varieties of mole (complex sauces that take days to make). Mezcal capital (tasting rooms everywhere). Markets overflow with ingredients unique to Oaxaca. Traditional cooking techniques preserved for generations. Tlayudas (Oaxacan pizza), chapulines (grasshoppers), quesillo (Oaxacan string cheese). This is where Mexican food traditions are most authentic and preserved.',
      whyYoutubersLoveIt: 'Mark Wiens: Oaxacan food culture deep dives, mole tastings, mezcal experiences. Passport Kitchen: Traditional Oaxacan cooking and market immersion. Food YouTubers consider this the "real" Mexico for food.',
      whatToEat: [
        'Mole Negro - Black mole (over 30 ingredients, chocolate base). The most complex.',
        'Mole Rojo - Red mole. Different profile entirely.',
        'Tlayudas - Large crispy tortilla with toppings. Oaxacan pizza.',
        'Chapulines - Grasshoppers. Crunchy, salty, lime. Traditional protein.',
        'Quesillo - Oaxacan string cheese. Melts perfectly.',
        'Tamales Oaxaqueños - Wrapped in banana leaves. Regional style.',
        'Mezcal - Artisanal production. Tastings reveal terroir.',
        'Chocolate Oaxaqueño - Made with cacao, cinnamon, almonds. Hot or cold.'
      ],
      whereToEat: {
        markets: [
          'Mercado 20 de Noviembre - Smoke-filled market with grilled meats',
          'Mercado Benito Juárez - Ingredients, prepared foods, local specialties'
        ],
        streetFood: 'Centro Historico Street Stalls - Evening food scene',
        experiences: [
          'Mezcal Tastings - Visit palenques (distilleries) in surrounding villages',
          'Cooking Classes - Mole-making workshops',
          'Market Tours - Understanding Oaxacan ingredients'
        ]
      },
      specialNotes: 'Day of the Dead (Día de Muertos) celebrations with special foods and altars. Guelaguetza festival (July). Comfortable temperatures (20-26°C / 68-79°F).'
    },
    {
      name: 'Barcelona, Spain',
      region: 'Mediterranean Foodie Destinations',
      season: 'May-June & September',
      budget: {
        daily: '$30-$60',
        accommodation: 'Barceloneta (beach), Gothic Quarter, Gràcia',
        details: 'Tapas to Michelin dining'
      },
      whyThisCity: 'Catalan cuisine has its own identity separate from Spanish food (locals will tell you this). Tapas culture here means pintxos (bite-sized pieces you pick from the bar). La Boqueria Market is legendary—walk inside and you understand how seriously Barcelona takes food. Mediterranean seafood. Jamón ibérico (cured ham). Vermouth on tap culture. Michelin-starred restaurants (Tickets, Disfrutar). The beaches mean seafood is fresh. The season diversity means you eat differently all year.',
      whyYoutubersLoveIt: 'Rick Stein: Mediterranean seafood focus, Spanish coastal cuisine expertise. Gordon Ramsay: Catalan fine dining documentation. Mark Wiens: Barcelona street food and La Boqueria Market tours.',
      whatToEat: [
        'Paella - Seafood or mixed. The iconic Spanish dish.',
        'Tapas Variety - Patatas bravas (fried potatoes with spicy sauce), pan con tomate (bread with tomato)',
        'Jamón Ibérico - Cured ham from black pigs. Served paper-thin.',
        'Crema Catalana - Catalan custard dessert (like crème brûlée)',
        'Escalivada - Grilled vegetables with oil and salt',
        'Calcots - Grilled spring onions (seasonal in spring)',
        'Fideuà - Noodle paella (paella made with noodles instead of rice)',
        'Vermouth on Tap - Local vermouth served cold with olives. The ritual matters.'
      ],
      whereToEat: {
        markets: 'La Boqueria Market Tours - Literally walk in and eat your way through',
        neighborhoods: [
          'Gothic Quarter Tapas Crawls - Bar-hop through historic streets',
          'Gràcia Neighborhood Food Tours - Bohemian neighborhood with local restaurants'
        ],
        seafood: 'Barceloneta Beachfront Seafood Dining - Walk on the beach, eat seafood',
        michelin: 'Michelin-Star Dining - Disfrutar, Moments, others',
        experiences: [
          'Cooking Classes - Paella workshops'
        ]
      },
      specialNotes: 'Perfect weather (20-27°C / 68-81°F). Fewer summer crowds. Outdoor dining ideal. Calcot season (spring). Wine harvest (autumn).'
    },
    {
      name: 'Naples, Italy',
      region: 'Mediterranean Foodie Destinations',
      season: 'April-May & September-October',
      budget: {
        daily: '$20-$45',
        accommodation: 'Centro Storico, Chiaia, Vomero',
        details: 'Pizza to coastal seafood'
      },
      whyThisCity: 'Naples is the birthplace of pizza. Not pizza as Americans know it—Neapolitan pizza with San Marzano tomatoes, buffalo mozzarella, wood-fired ovens, and strict regulations. But it\'s more than pizza: coastal seafood, sfogliatella (pastries), espresso culture, street food (cuoppo, fried everything). This is Southern Italian food at its most authentic. Markets overflow with fresh produce. The food is simple, but technique-heavy.',
      whyYoutubersLoveIt: 'Rick Stein: Italian coastal cuisine and seafood expertise. Pasta Grannies: Traditional Neapolitan cooking techniques. Italian food YouTubers consider Naples the "real" Italy for food culture.',
      whatToEat: [
        'Pizza Napoletana - Wood-fired, San Marzano tomatoes, buffalo mozzarella. The original.',
        'Sfogliatella - Shell-shaped pastry with ricotta filling. Breakfast pastry.',
        'Pasta alla Genovese - Slow-cooked onion and meat sauce. Takes hours.',
        'Frittatina - Fried pasta. Street food.',
        'Cuoppo - Paper cone of fried seafood or vegetables. Street food perfection.',
        'Babà - Rum-soaked cake. Traditional dessert.',
        'Spaghetti alle Vongole - Spaghetti with clams. Coastal classic.',
        'Espresso - Stand at the bar, drink it in one shot. Neapolitan ritual.'
      ],
      whereToEat: {
        pizza: [
          'L\'Antica Pizzeria da Michele - The famous one (featured in Eat Pray Love)',
          'Sorbillo - Multiple locations, consistently excellent',
          'Di Matteo - Local favorite, less touristy'
        ],
        markets: 'Pignasecca Market - Where locals shop for ingredients',
        streetFood: 'Centro Storico Street Food Walks - Historic center exploration',
        experiences: [
          'Pizza-Making Classes - Learn Neapolitan technique',
          'Coastal Seafood Dining - Posillipo area overlooking the bay'
        ]
      },
      specialNotes: 'Mild weather (18-25°C / 64-77°F). Fewer summer crowds. Perfect for exploring markets and eating outdoors. Day trips to Amalfi Coast, Pompeii.'
    },
    {
      name: 'Hanoi, Vietnam',
      region: 'Asian Foodie Destinations',
      season: 'October-April (Cool Season)',
      budget: {
        daily: '$5-$15',
        accommodation: 'Tay Ho (West Lake), Ba Dinh, Old Quarter',
        details: 'Street food paradise'
      },
      whyThisCity: 'Hanoi is Northern Vietnamese food culture. Pho originated here (different from Southern pho). Bun cha (grilled pork with noodles) is a specialty. French colonial influences (baguettes, coffee). Bia hoi (fresh beer) culture. Street food on every corner. Old Quarter is a maze of food stalls. This is authentic Vietnamese food without the tourism of Ho Chi Minh City.',
      whyYoutubersLoveIt: 'Mark Wiens: Hanoi food tours, pho deep dives, bun cha episodes. Best Ever Food Review Show: Northern Vietnamese street food documentaries. Anthony Bourdain (Parts Unknown): Featured Hanoi\'s food culture, ate bun cha with Obama.',
      whatToEat: [
        'Pho - Northern style (clear broth, more subtle than Southern). The breakfast staple.',
        'Bun Cha - Grilled pork patties with noodles, herbs, dipping sauce. Hanoi specialty.',
        'Banh Mi - Vietnamese baguette sandwich. French colonial influence.',
        'Cha Ca - Turmeric fish with dill. Regional specialty from Hanoi.',
        'Egg Coffee (Ca Phe Trung) - Egg yolk whipped with condensed milk on coffee. Unique to Hanoi.',
        'Banh Cuon - Steamed rice rolls with pork and mushrooms.',
        'Bia Hoi - Fresh beer. Served on street corners for $0.25.',
        'Xoi - Sticky rice with various toppings. Breakfast food.'
      ],
      whereToEat: {
        streetFood: 'Old Quarter Street Food Tours - Narrow streets packed with stalls',
        specific: [
          'Bun Cha Huong Lien - Where Obama and Bourdain ate',
          'Pho Gia Truyen - Famous pho spot in Old Quarter',
          'Giang Cafe - Original egg coffee location'
        ],
        markets: 'Dong Xuan Market - Local ingredients and prepared foods',
        experiences: [
          'Cooking Classes - Pho and bun cha workshops',
          'Coffee Culture Tours - Understanding Vietnamese coffee'
        ]
      },
      specialNotes: 'Cool season (15-25°C), dry, perfect. Avoid May-September (heat, humidity, flooding risk). Tet (Lunar New Year) brings special foods but some closures.'
    },
    {
      name: 'Singapore',
      region: 'Asian Foodie Destinations',
      season: 'Year-round (tropical climate)',
      budget: {
        daily: '$10-$50',
        accommodation: 'Chinatown, Little India, Kampong Glam',
        details: 'Hawker centers to fine dining'
      },
      whyThisCity: 'Singapore is a melting pot of Chinese, Malay, Indian, and Peranakan cuisines. Hawker centers (government-regulated food courts) have Michelin-starred stalls. Chili crab is the national dish. Laksa, chicken rice, satay, roti prata—every culture contributes. The food is regulated for safety and quality. You can eat street food with zero health concerns. Plus, everything is clean, efficient, and organized.',
      whyYoutubersLoveIt: 'Gordon Ramsay: Singapore street food and Michelin hawker stalls. Mark Wiens: Hawker center tours, chili crab experiences. Rick Stein: Asian seafood and cultural food fusion.',
      whatToEat: [
        'Chili Crab - The national dish. Messy, spicy, sweet. Eat with mantou (fried buns).',
        'Hainanese Chicken Rice - Poached chicken with fragrant rice. Simple. Perfect.',
        'Laksa - Spicy coconut curry noodle soup. Peranakan dish.',
        'Satay - Grilled skewered meat with peanut sauce.',
        'Char Kway Teow - Stir-fried rice noodles with seafood and sausage.',
        'Roti Prata - Indian flatbread. Breakfast with curry.',
        'Bak Kut Teh - Pork rib soup with herbs and spices.',
        'Kaya Toast - Coconut jam on toast with soft-boiled eggs. Breakfast staple.'
      ],
      whereToEat: {
        hawkerCenters: [
          'Lau Pa Sat - Historic hawker center, central location',
          'Maxwell Food Centre - Famous chicken rice stalls',
          'Tekka Centre - Indian food focus',
          'Tiong Bahru Market - Local favorite'
        ],
        michelin: 'Hawker Chan - Michelin-starred soya sauce chicken rice (under $5)',
        neighborhoods: [
          'Chinatown Food Tours - Chinese-Singaporean cuisine',
          'Little India - Indian food and spices',
          'Kampong Glam - Malay and Middle Eastern influence'
        ],
        experiences: [
          'Chili Crab Dinners - At seafood restaurants',
          'Cooking Classes - Laksa and chicken rice workshops'
        ]
      },
      specialNotes: 'Year-round tropical climate (26-32°C). Rain possible any time but brief. Food hawker centers are air-conditioned or covered. Safe, clean, efficient. English widely spoken.'
    },
    {
      name: 'New York City, USA',
      region: 'Global Culinary Capitals',
      season: 'May-June & September-October',
      budget: {
        daily: '$20-$80',
        accommodation: 'West Village, Chinatown, Midtown, Brooklyn',
        details: 'Street carts to Michelin dining'
      },
      whyThisCity: 'New York is a global food capital. Diverse immigrant cuisines all concentrated in one city. Pizza culture (where you eat determines everything). Bagels with lox (pastrami on rye). Food trucks. Farm-to-table movement. Michelin-star fine dining clusters here. Smorgasburg outdoor markets. Brooklyn food scene is innovative. This is a city where you can eat the world in one week.',
      whyYoutubersLoveIt: 'Gordon Ramsay: Michelin dining, Hell\'s Kitchen restaurant documentation. Ina Garten: NYC upscale dining and market recommendations. Matty Matheson: Casual NYC eats, pizza, iconic delis.',
      whatToEat: [
        'New York-Style Pizza - Joe\'s Pizza, Lucali (and find your own favorite)',
        'Bagels with Lox - Russ & Daughters (legendary)',
        'Pastrami on Rye - Katz\'s Delicatessen (iconic)',
        'Hot Dogs - From street carts (quality varies wildly)',
        'Cheesecake - Junior\'s (traditional)',
        'Cronuts - Dominique Ansel Bakery (croissant-donut hybrid)',
        'Ramen - Ippudo, Ichiran, smaller Japanese spots',
        'Halal Cart Chicken/Lamb Over Rice - Street food. Perfect. $6.'
      ],
      whereToEat: {
        markets: 'Smorgasburg Brooklyn Food Market - Weekends only, curated vendors. Chelsea Market Tours - Food hall history',
        neighborhoods: [
          'Chinatown/Little Italy Walking Tours - Historic neighborhoods, current food',
          'Pizza Crawls - Manhattan and Brooklyn (find your best slice)'
        ],
        streetFood: 'Food Truck Festivals - Seasonal',
        michelin: 'Michelin-Star Dining - Eleven Madison Park, Le Bernardin, others',
        experiences: []
      },
      specialNotes: 'Mild weather (15-25°C / 59-77°F). Smorgasburg outdoor markets open. Restaurant week events (seasonal). Comfortable outdoor dining.'
    }
  ]

  const youtubers = [
    {
      name: 'Mark Wiens (Migrationology)',
      subscribers: '11M Subscribers',
      description: 'The most authentic street food explorer on the planet. Mark lives in Bangkok and eats with locals, focusing on flavor stories and cultural context. If you follow his recommendations, you\'ll find yourself in the kind of place where tourists never go—and it\'s perfect.',
      destinations: 'Bangkok (his home base), Mexico City, Lima, Tokyo, Ho Chi Minh City, Lisbon, Istanbul, Jakarta'
    },
    {
      name: 'Best Ever Food Review Show (Sonny Side)',
      subscribers: '10M Subscribers',
      description: 'Willing to try anything. Sonny travels to remote, underrated destinations and showcases indigenous cuisines you won\'t find anywhere else. His approach is immersive and educational—part documentary, part adventure.',
      destinations: 'Vietnam, Papua New Guinea, Egypt, Brunei, Thailand, Philippines, Morocco, India, Tanzania'
    },
    {
      name: 'The Food Ranger (Trevor James)',
      subscribers: '5M Subscribers',
      description: 'Deep expertise in regional Chinese cuisines (Sichuan, Yunnan, Xinjiang) and Southeast Asian street food. Energetic personality, noodle obsession, and frequent collaborations with Mark Wiens.',
      destinations: 'Xi\'an (China), Bangkok, Chengdu, Dubai, Pakistan, India, Malaysia'
    },
    {
      name: 'Gordon Ramsay',
      subscribers: '21M YouTube, 18M Instagram',
      description: 'The celebrity chef angle. Gordon combines Michelin-star fine dining recommendations with street food discoveries. His restaurant empire gives him insider access to dining scenes most travelers never see.',
      destinations: 'London, Paris, Las Vegas, New York, Singapore, Dubai, Bordeaux'
    },
    {
      name: 'Matty Matheson',
      subscribers: 'Chef & TV Personality',
      description: 'Authentic, unpretentious, chef-driven recommendations. Focuses on vibes and community over Michelin stars. He loves comfort food, steakhouses, and neighborhood taverns where locals actually eat.',
      destinations: 'Chicago, Toronto, Los Angeles, Paris, London'
    },
    {
      name: 'Ina Garten (Barefoot Contessa)',
      subscribers: 'TV Chef & Author',
      description: 'Sophisticated yet approachable dining. Ina focuses on quality ingredients and charming venues. Her recommendations feel elegant but not pretentious—perfect if you want upscale dining without the stuffiness.',
      destinations: 'Paris, New York, Hamptons, Palm Beach'
    },
    {
      name: 'Helen Rennie',
      subscribers: 'Culinary Expert',
      description: 'Deep culinary technique knowledge and trustworthy restaurant reviews. Helen is the expert\'s expert—she explains food science, ingredient sourcing, and why a dish works.',
      destinations: 'Turkey, Greece, Italy, Boston, New England'
    },
    {
      name: 'Rick Stein',
      subscribers: 'BBC Travel Series',
      description: 'The world\'s foremost seafood expert. Rick\'s BBC travel series have spanned decades, and he\'s focused on coastal European and Asian seafood cultures.',
      destinations: 'Cornwall (UK), Spain, Greece, Sydney, Thailand, Vietnam'
    },
    {
      name: 'Passport Kitchen',
      subscribers: 'Recipe & Travel',
      description: 'Recipe-focused, blending travel with home cooking tutorials. They show you not just what to eat, but how to cook it when you get home.',
      destinations: 'Tokyo, Istanbul, Mexico City, California, Mediterranean coast'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-red-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-red-400/30 to-pink-500/30 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section - Glassmorphism */}
      <section className="relative py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none"></div>

            <div className="relative z-10 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                Foodie Destinations
              </h1>
              <p className="text-2xl md:text-3xl mb-4 text-gray-800 font-light">
                Eat Like a Local. Travel Like a Foodie.
              </p>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Food isn't just fuel when you're traveling—it's the story of a place. It's the spice merchant in a Istanbul bazaar who's been working the same stall for 30 years. It's the 3 AM ramen bar in Tokyo where salarymen crowd around steaming bowls. It's the street vendor in Bangkok who perfects a single dish so good that Mark Wiens flew back specifically to film it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative py-6 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <p className="text-lg text-gray-700 mb-6">
              The world's best travel experiences don't always happen at famous landmarks. They happen in a Lima market at dawn, tasting ceviche made by someone's grandmother. They happen when you accidentally wander into a hole-in-the-wall Paris bistro and taste boeuf bourguignon that changes how you think about food.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              This guide maps the planet's greatest foodie destinations—the places where every meal is an adventure, where food culture runs deep, and where eating is considered an art form. We've organized these destinations by how famous food YouTubers with millions of followers recommend them, so you know you're going where the real food stories are.
            </p>
            <div className="backdrop-blur-md bg-orange-50/70 p-6 rounded-lg border border-orange-200/50 mt-8">
              <h3 className="text-xl font-bold text-orange-700 mb-3">How to Use This Guide:</h3>
              <p className="text-gray-700">
                Select your journey below. Explore by cuisine type, by food experience, by the YouTuber whose recommendations you trust, or by destination. Each location includes specific details on what to eat, where to eat, best seasons to visit, and budget breakdowns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore by Cuisine Type */}
      <section className="relative py-6 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Explore by Cuisine Type</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-teal-600 mb-4">Asian Foodie Destinations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Tokyo, Japan</li>
                <li>Bangkok, Thailand</li>
                <li>Hanoi, Vietnam</li>
                <li>Singapore</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-600 mb-4">Mediterranean Foodie Destinations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Istanbul, Turkey</li>
                <li>Naples, Italy</li>
                <li>Barcelona, Spain</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-600 mb-4">Global Culinary Capitals</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Lima, Peru</li>
                <li>Mexico City, Mexico</li>
                <li>Oaxaca, Mexico</li>
                <li>Paris, France</li>
                <li>New York City, USA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Explore by Food Experience */}
      <section className="relative py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>Explore by Food Experience</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-orange-700 mb-3">Street Food Paradise</h3>
              <p className="text-gray-700">Bangkok | Mexico City | Hanoi | Istanbul | Oaxaca</p>
            </div>
            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-orange-700 mb-3">Food Market Hubs</h3>
              <p className="text-gray-700">Barcelona (La Boqueria) | Bangkok (Or Tor Kor) | Istanbul (Spice Bazaar) | Paris (Marché des Enfants Rouges) | Tokyo (Tsukiji)</p>
            </div>
            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-orange-700 mb-3">Fine Dining Capitals (Michelin Stars)</h3>
              <p className="text-gray-700">Tokyo (169 Michelin stars) | Paris (119 Michelin stars) | Lima (Maido #1 World's Best) | New York City | Barcelona</p>
            </div>
            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-orange-700 mb-3">Cooking Class Destinations</h3>
              <p className="text-gray-700">Bangkok (Thai curry) | Mexico City (mole) | Oaxaca (traditional) | Lima (ceviche) | Paris (croissant) | Naples (pizza)</p>
            </div>
            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 md:col-span-2">
              <h3 className="text-xl font-bold text-orange-700 mb-3">Seafood Destinations</h3>
              <p className="text-gray-700">Barcelona (Barceloneta) | Istanbul (Bosphorus) | Lima (Pacific ceviche) | Tokyo (Tsukiji Fish Market) | Singapore</p>
            </div>
          </div>
        </div>
      </section>

      {/* Famous Food YouTubers */}
      <section className="relative py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>Explore by Famous Food YouTuber</h2>
          <div className="space-y-4">
            {youtubers.map((youtuber, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/50 border border-white/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <button
                  onClick={() => toggleYoutuber(index)}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-orange-400/80 via-red-400/80 to-pink-400/80 backdrop-blur-sm text-white p-6 flex items-center justify-between text-left hover:from-orange-500/90 hover:via-red-500/90 hover:to-pink-500/90 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                  <div className="flex-1 relative z-10">
                    <h3 className="text-xl font-bold mb-1 drop-shadow-lg">
                      {youtuber.name}
                    </h3>
                    <p className="text-sm opacity-90 drop-shadow">{youtuber.subscribers}</p>
                  </div>
                  <div className="ml-4 relative z-10">
                    {expandedYoutuber === index ? (
                      <ChevronUp className="w-6 h-6 drop-shadow-lg" />
                    ) : (
                      <ChevronDown className="w-6 h-6 drop-shadow-lg" />
                    )}
                  </div>
                </button>

                {expandedYoutuber === index && (
                  <div className="p-6 backdrop-blur-sm bg-white/60">
                    <p className="text-gray-800 mb-4">{youtuber.description}</p>
                    <div className="backdrop-blur-lg bg-white/80 p-4 rounded-lg border border-white/60 shadow-lg">
                      <p className="text-sm text-gray-700 font-semibold mb-2">Top Destinations:</p>
                      <p className="text-gray-800">{youtuber.destinations}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 12 Destinations */}
      <section className="relative py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>The 12 Global Foodie Destinations</h2>
          <div className="space-y-4">
            {destinations.map((destination, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/50 border border-white/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <button
                  onClick={() => toggleDestination(index)}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-orange-400/80 via-red-400/80 to-pink-400/80 backdrop-blur-sm text-white p-6 flex items-center justify-between text-left hover:from-orange-500/90 hover:via-red-500/90 hover:to-pink-500/90 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                  <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                      {index + 1}. {destination.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm opacity-90 drop-shadow">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {destination.region}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> {destination.season}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" /> {destination.budget.daily}
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
                    {/* Why This City for Foodies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">Why This City for Foodies</h4>
                      <p className="text-gray-700 leading-relaxed">{destination.whyThisCity}</p>
                    </div>

                    {/* Why Famous Food YouTubers Love It */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">Why Famous Food YouTubers Love It</h4>
                      <p className="text-gray-700 leading-relaxed">{destination.whyYoutubersLoveIt}</p>
                    </div>

                    {/* What to Eat */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">What to Eat</h4>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <ul className="space-y-3">
                          {destination.whatToEat.map((item, idx) => (
                            <li key={idx} className="text-gray-700">
                              <span className="font-semibold text-teal-600">{idx + 1}.</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Where to Eat */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">Where to Eat</h4>
                      <div className="space-y-3">
                        {destination.whereToEat.streetFood && (
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h5 className="font-semibold text-teal-600 mb-2">Street Food</h5>
                            <p className="text-gray-700">{destination.whereToEat.streetFood}</p>
                          </div>
                        )}
                        {destination.whereToEat.markets && (
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h5 className="font-semibold text-teal-600 mb-2">Markets</h5>
                            {typeof destination.whereToEat.markets === 'string' ? (
                              <p className="text-gray-700">{destination.whereToEat.markets}</p>
                            ) : (
                              <ul className="space-y-2">
                                {destination.whereToEat.markets.map((market: string, idx: number) => (
                                  <li key={idx} className="text-gray-700">{market}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}
                        {destination.whereToEat.michelin && (
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h5 className="font-semibold text-teal-600 mb-2">Michelin / Fine Dining</h5>
                            <p className="text-gray-700">{destination.whereToEat.michelin}</p>
                          </div>
                        )}
                        {destination.whereToEat.pizza && Array.isArray(destination.whereToEat.pizza) && (
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h5 className="font-semibold text-teal-600 mb-2">Pizza</h5>
                            <ul className="space-y-2">
                              {destination.whereToEat.pizza.map((place: string, idx: number) => (
                                <li key={idx} className="text-gray-700">{place}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {destination.whereToEat.hawkerCenters && Array.isArray(destination.whereToEat.hawkerCenters) && (
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h5 className="font-semibold text-teal-600 mb-2">Hawker Centers</h5>
                            <ul className="space-y-2">
                              {destination.whereToEat.hawkerCenters.map((center: string, idx: number) => (
                                <li key={idx} className="text-gray-700">{center}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {destination.whereToEat.seafood && (
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h5 className="font-semibold text-teal-600 mb-2">Seafood</h5>
                            <p className="text-gray-700">{destination.whereToEat.seafood}</p>
                          </div>
                        )}
                        {destination.whereToEat.fineDining && (
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h5 className="font-semibold text-teal-600 mb-2">Fine Dining</h5>
                            <p className="text-gray-700">{destination.whereToEat.fineDining}</p>
                          </div>
                        )}
                        {destination.whereToEat.restaurants && Array.isArray(destination.whereToEat.restaurants) && (
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h5 className="font-semibold text-teal-600 mb-2">Restaurants</h5>
                            <ul className="space-y-2">
                              {destination.whereToEat.restaurants.map((restaurant: string, idx: number) => (
                                <li key={idx} className="text-gray-700">{restaurant}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {destination.whereToEat.specific && Array.isArray(destination.whereToEat.specific) && (
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h5 className="font-semibold text-teal-600 mb-2">Specific Recommendations</h5>
                            <ul className="space-y-2">
                              {destination.whereToEat.specific.map((place: string, idx: number) => (
                                <li key={idx} className="text-gray-700">{place}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {destination.whereToEat.neighborhoods && Array.isArray(destination.whereToEat.neighborhoods) && (
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h5 className="font-semibold text-teal-600 mb-2">Neighborhoods</h5>
                            <ul className="space-y-2">
                              {destination.whereToEat.neighborhoods.map((neighborhood: string, idx: number) => (
                                <li key={idx} className="text-gray-700">{neighborhood}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {destination.whereToEat.experiences && Array.isArray(destination.whereToEat.experiences) && destination.whereToEat.experiences.length > 0 && (
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h5 className="font-semibold text-teal-600 mb-2">Food Experiences</h5>
                            <ul className="space-y-2">
                              {destination.whereToEat.experiences.map((experience: string, idx: number) => (
                                <li key={idx} className="text-gray-700">{experience}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Best Season to Visit */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">Best Season to Visit</h4>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700">{destination.season}</p>
                      </div>
                    </div>

                    {/* Budget Breakdown */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">Budget</h4>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700 mb-2"><strong>Daily food budget:</strong> {destination.budget.daily}</p>
                        <p className="text-gray-700 mb-2"><strong>Where to stay:</strong> {destination.budget.accommodation}</p>
                        <p className="text-gray-700"><strong>Details:</strong> {destination.budget.details}</p>
                      </div>
                    </div>

                    {/* Special Notes */}
                    {destination.specialNotes && (
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-3">Special Notes & Tips</h4>
                        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                          <p className="text-gray-700">{destination.specialNotes}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to Stay */}
      <section className="relative py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>Where to Stay: Finding the Right Accommodation</h2>
          <p className="text-lg text-gray-800 mb-6 text-center">
            Every destination in this guide has accommodation options across all budgets and styles. The key isn't the hotel price—it's the neighborhood location.
          </p>

          <div className="space-y-4">
            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-orange-700 mb-3">Neighborhood Matters More Than Hotel Name</h3>
              <p className="text-gray-700">
                A $30/night hostel in Trastevere puts you in the middle of Rome's best food culture. A $300/night luxury hotel in a business district means you're isolated from real food. Location determines your food experience.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-orange-700 mb-3">How to Pick Your Neighborhood</h3>
              <ul className="space-y-3 text-gray-700">
                <li><strong>For Street Food:</strong> Stay where locals live and eat, not in tourist zones. Look for neighborhoods with markets (Ben Thanh, Or Tor Kor, La Boqueria). Budget options cluster here.</li>
                <li><strong>For Fine Dining:</strong> Stay near business districts or upscale neighborhoods (Polanco, Miraflores, Michelin-star areas). Mid-range to luxury hotels.</li>
                <li><strong>For Mixed Experiences:</strong> Stay in central neighborhoods that are walkable to both street food and restaurants (Trastevere, Marais, Condesa). Mid-range options work best.</li>
              </ul>
            </div>

            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-orange-700 mb-3">General Booking Strategy</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Identify the neighborhood you want to experience</li>
                <li>Search hotels in that neighborhood on booking platforms</li>
                <li>Read reviews from foodies – look for mentions of nearby restaurants and markets</li>
                <li>Check walkability – can you walk to markets, restaurants, street food stalls?</li>
                <li>Don't overpay for luxury – a mid-range hotel in the right location beats a luxury hotel in the wrong place</li>
              </ol>
            </div>

            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-orange-700 mb-3">Pro Tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Book near a public market if you want authentic food access</li>
                <li>Avoid booking in major chain hotel areas—they're isolated from real neighborhoods</li>
                <li>Check if the hotel is near a metro/train station—easy neighborhood access</li>
                <li>Read recent reviews mentioning nearby restaurants</li>
                <li>Stay in neighborhoods that have foot traffic at night—means locals eat there</li>
              </ul>
              <p className="text-gray-800 mt-4 font-semibold">
                The best food experiences happen when you live like a local, not like a tourist. Pick your neighborhood first. The hotel is secondary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.02em'}}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-800 mb-2">When should I visit these destinations for the best food?</h3>
              <p className="text-gray-700">
                Every destination has an ideal season. Generally: Spring/Fall are best for walking, markets, and outdoor eating. Summer is crowded but warm. Winter varies by location (perfect in Bangkok, rough in Paris). See each destination's "Best Season" section.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Do I need to speak the language to enjoy street food?</h3>
              <p className="text-gray-700">
                No. Point and eat. Watch other people order. Use your phone. Smile. Language barrier is half the fun.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-800 mb-2">How much does street food cost?</h3>
              <p className="text-gray-700">
                Expect $1-5 per meal in most destinations. Fine dining is $50-300+ per person.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Are cooking classes worth it?</h3>
              <p className="text-gray-700">
                Absolutely. You learn technique while supporting locals. Plus you have a skill to take home.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-800 mb-2">How do I know if street food is safe?</h3>
              <p className="text-gray-700">
                Simple rule: If locals are eating there and there's a line, it's safe. High turnover = fresh food.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-800 mb-2">What's the best hotel for foodies?</h3>
              <p className="text-gray-700">
                It depends on your style. Downtown hotels put you near markets and neighborhoods. Business hotels offer convenience. Budget hotels get you in the food scene. Pick what matches your travel style.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Can I get food allergies accommodated?</h3>
              <p className="text-gray-700">
                Easier in fine dining. For street food, learn key words in the local language: "no peanuts," "no shellfish," etc.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-800 mb-2">How many days should I spend in each city?</h3>
              <p className="text-gray-700">
                Minimum 3 days (breakfast, lunch, dinner × 3 minimum). Ideally 5-7 days to really know a place.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/60 border border-white/60 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Should I book restaurants in advance?</h3>
              <p className="text-gray-700">
                Michelin-starred and famous restaurants: yes, sometimes months ahead. Street food: never, just go. Local trattorias: depends on popularity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Plan Your Foodie Adventure with Wander</h2>
            <p className="text-xl mb-4 text-teal-100">
              You've read about the destinations. You've seen the hotels. You've learned what to eat.
            </p>
            <p className="text-lg mb-8 text-teal-100">
              Now it's time to actually plan your trip.
            </p>
            <p className="text-lg mb-8 text-teal-100 max-w-3xl mx-auto">
              Wander's AI travel planning app does something different: it generates personalized 60-second travel itineraries that prioritize food experiences. Instead of generic "Things to Do in Bangkok," Wander creates itineraries tailored to your food interests, budget, how many days you have, and whether you want fine dining, street food, or both.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg mb-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">What Wander Does:</h3>
              <ul className="text-left space-y-3 text-teal-100">
                <li className="flex items-start">
                  <span className="mr-3">1.</span>
                  <span><strong>Analyzes your preferences</strong> – Fine dining or street food? Which cuisines excite you? Budget?</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">2.</span>
                  <span><strong>Generates custom itineraries</strong> – 60 seconds gets you a day-by-day plan focused on food experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">3.</span>
                  <span><strong>Integrates real partnerships</strong> – Wander connects you with local cooking classes, restaurant reservations, and tours</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">4.</span>
                  <span><strong>Adapts in real-time</strong> – Change your mind? Get a new itinerary instantly.</span>
                </li>
              </ul>
            </div>

            <p className="text-xl mb-8 text-teal-100">
              You could spend hours researching Bangkok food tours, reading reviews, coordinating with guides, booking restaurants.
            </p>
            <p className="text-xl mb-8 text-teal-100">
              Or you could use Wander and have your plan in 60 seconds, leaving you more time to actually eat.
            </p>

            <a
              href="https://wander.app"
              className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-50 transition-colors shadow-lg"
            >
              Plan Your Foodie Trip with Wander
            </a>
          </div>
        </div>
      </section>

      {/* The Truth About Food Travel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">The Truth About Food Travel</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Food isn't just about taste. It's about connection.
              </p>
              <p>
                It's the street vendor who's been making the same dish for 30 years, passing technique to the next generation. It's the grandmother in a Bangkok apartment cooking pad krapow for Mark Wiens. It's the chef at Maido in Lima, respecting both Japanese technique and Peruvian ingredients, creating something entirely new.
              </p>
              <p>
                When you eat food in these places, you're not just tasting flavors. You're tasting history, culture, love, and community.
              </p>
              <p>
                This guide maps where those experiences live. The rest is up to you.
              </p>
              <p className="text-xl font-semibold text-center text-gray-800 mt-8">
                Get eating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-12">
        <PillarCTA guideName="foodie-destinations" />
        <RelatedGuides currentPage="foodie-destinations" />
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            Last updated: 2025. This guide covers 12 major foodie destinations featuring recommendations from food YouTubers with 75+ million combined subscribers and curated hotel options for every travel style and budget.
          </p>
        </div>
      </footer>
    </div>
  )
}

