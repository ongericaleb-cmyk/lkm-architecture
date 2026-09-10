export type Project = {
  number: string;
  slug: string;
  title: string;
  location: string;
  category: string;
  status: string;
  description: string;
  narrative: string;
  services: string[];
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "new-life-towers",
    title: "Proposed New Life Twin Towers",
    location: "Mavueni · Kilifi · Kenya",
    category: "Institutional · Commercial · Mixed-Use",
    status: "Proposed",
    description:
      "A landmark twin-tower development conceived as a contemporary institutional, commercial and community destination.",
    narrative:
      "The project explores a strong contemporary architectural identity while responding to the climatic conditions and character of the Kenyan coast. The design brings together complex planning requirements, vertical development and a distinctive architectural expression.",
    services: [
      "Architecture",
      "Concept Design",
      "Planning",
      "Design Development",
      "Coordination",
    ],
  },

  {
    number: "02",
    slug: "muiruri-house",
    title: "The Muiruri House",
    location: "Mhasibu Estate · Ruiru · Kenya",
    category: "Residential Architecture",
    status: "Developed",
    description:
      "A contemporary private residence designed around comfort, natural light, functionality and modern family living.",
    narrative:
      "A residential design focused on creating comfortable family spaces while maintaining a clear contemporary architectural language.",
    services: [
      "Architecture",
      "Concept Design",
      "Design Development",
    ],
  },

  {
    number: "03",
    slug: "daisy-house",
    title: "Proposed Daisy House",
    location: "Bungoma · Kenya",
    category: "Residential Architecture",
    status: "Proposed",
    description:
      "A contemporary residential proposal exploring functional planning, architectural character and modern living.",
    narrative:
      "The project explores a balanced relationship between form, function and the everyday requirements of family living.",
    services: [
      "Architecture",
      "Concept Design",
      "Planning",
    ],
  },

  {
    number: "04",
    slug: "villa-barasa",
    title: "Villa Barasa",
    location: "Kimilili · Bungoma · Kenya",
    category: "Residential · Design & Build",
    status: "Ongoing",
    description:
      "A contemporary private residence demonstrating the journey from architectural vision through design development and construction.",
    narrative:
      "Villa Barasa is conceived as a contemporary family residence with a strong architectural presence and carefully considered spatial organisation. The project brings together architectural design, technical coordination and construction execution.",
    services: [
      "Architecture",
      "Interior Architecture",
      "Structural Coordination",
      "Quantity Surveying",
      "Construction",
    ],
  },

  {
    number: "05",
    slug: "runda-classic-home",
    title: "Proposed Runda Classic Home",
    location: "Runda · Nairobi · Kenya",
    category: "Luxury Residential Architecture",
    status: "Proposed",
    description:
      "A timeless residential concept combining classical character with contemporary planning and refined living.",
    narrative:
      "A refined residential proposal balancing timeless architectural character with contemporary requirements.",
    services: [
      "Architecture",
      "Concept Design",
      "Interior Architecture",
    ],
  },

  {
    number: "06",
    slug: "suswa-cottages",
    title: "Proposed Suswa Cottages",
    location: "Suswa · Kenya",
    category: "Hospitality · Leisure · Tourism",
    status: "Proposed",
    description:
      "A destination hospitality concept inspired by landscape, place and the experience of retreat.",
    narrative:
      "A retreat-oriented development responding to landscape and the experience of hospitality.",
    services: [
      "Architecture",
      "Masterplanning",
      "Hospitality Design",
    ],
  },

  {
    number: "07",
    slug: "kyumvi-house",
    title: "Kyumvi House",
    location: "Kyumvi · Machakos · Kenya",
    category: "Residential Architecture",
    status: "Developed",
    description:
      "A private residential project developed around contemporary living, functionality and architectural clarity.",
    narrative:
      "A contemporary family residence with an emphasis on functionality and clear architectural expression.",
    services: [
      "Architecture",
      "Concept Design",
    ],
  },

  {
    number: "08",
    slug: "olturutto-house",
    title: "The Olturutto House",
    location: "Kajiado · Kenya",
    category: "Residential Architecture",
    status: "Developed",
    description:
      "A residential project exploring contemporary form, spatial quality and a strong relationship with its setting.",
    narrative:
      "A private residence developed around contemporary form and a strong connection to its environment.",
    services: [
      "Architecture",
      "Concept Design",
      "Planning",
    ],
  },

  {
    number: "09",
    slug: "diani-villas",
    title: "The Diani Villas",
    location: "Diani · Kenya",
    category: "Residential · Hospitality",
    status: "Developed",
    description:
      "A villa development designed around coastal living, hospitality and a relaxed architectural experience.",
    narrative:
      "A coastal villa concept responding to the relaxed character and environmental conditions of Diani.",
    services: [
      "Architecture",
      "Hospitality Design",
      "Masterplanning",
    ],
  },

  {
    number: "10",
    slug: "ian-house",
    title: "Ian House",
    location: "Kamakis · Ruiru · Kenya",
    category: "Residential Architecture",
    status: "Developed",
    description:
      "A contemporary family home designed around practical living, comfort and architectural identity.",
    narrative:
      "A contemporary family home balancing practical requirements with architectural identity.",
    services: [
      "Architecture",
      "Concept Design",
    ],
  },

  {
    number: "11",
    slug: "kinungi-bungalow",
    title: "Kinungi Bungalow",
    location: "Naivasha · Kenya",
    category: "Residential Architecture",
    status: "Developed",
    description:
      "A bungalow residence responding to its setting with practical planning and contemporary character.",
    narrative:
      "A compact residential concept focused on efficient planning and comfortable living.",
    services: [
      "Architecture",
      "Planning",
    ],
  },

  {
    number: "12",
    slug: "vipingo-villas",
    title: "Proposed Vipingo Villas",
    location: "Vipingo Ridge · Kilifi · Kenya",
    category: "Luxury Residential · Hospitality",
    status: "Proposed",
    description:
      "A proposed villa development exploring refined coastal living, landscape and contemporary architecture.",
    narrative:
      "A premium villa concept responding to the coastal environment and the character of Vipingo Ridge.",
    services: [
      "Architecture",
      "Masterplanning",
      "Hospitality Design",
    ],
  },

  {
    number: "13",
    slug: "diani-guest-house",
    title: "Proposed Diani Guest House",
    location: "Diani · Kenya",
    category: "Hospitality · Leisure",
    status: "Proposed",
    description:
      "A guest house concept designed around tropical living, hospitality and the coastal environment.",
    narrative:
      "A hospitality concept focused on tropical living and a relaxed guest experience.",
    services: [
      "Architecture",
      "Hospitality Design",
    ],
  },

  {
    number: "14",
    slug: "nakuru-county-assembly",
    title: "Proposed County Assembly of Nakuru Offices",
    location: "Nakuru · Kenya",
    category: "Institutional · Civic Architecture",
    status: "Proposed",
    description:
      "A civic office development exploring institutional identity, functionality and contemporary public architecture.",
    narrative:
      "An institutional proposal combining civic identity with functional workplace planning.",
    services: [
      "Architecture",
      "Planning",
      "Concept Design",
    ],
  },

  {
    number: "15",
    slug: "mua-hills-cabins",
    title: "The Mua Hills Cabins",
    location: "Mua Hills · Machakos · Kenya",
    category: "Hospitality · Leisure · Tourism",
    status: "Developed",
    description:
      "A cabin retreat concept centred on landscape, escape and an intimate relationship with nature.",
    narrative:
      "A retreat concept centred on landscape, privacy and the experience of escaping the city.",
    services: [
      "Architecture",
      "Hospitality Design",
      "Masterplanning",
    ],
  },

  {
    number: "16",
    slug: "new-life-petrol-station-hotel",
    title: "Proposed New Life Petrol Station & Hotel",
    location: "Kenya",
    category: "Commercial · Hospitality",
    status: "Proposed",
    description:
      "A combined commercial and hospitality development designed around mobility, convenience and destination use.",
    narrative:
      "A mixed commercial and hospitality concept combining convenience, mobility and accommodation.",
    services: [
      "Architecture",
      "Commercial Design",
      "Hospitality Design",
    ],
  },

  {
    number: "17",
    slug: "doctors-plaza-aga-khan",
    title: "Proposed Concept for Aga Khan Hospital Services",
    location: "Dr's Plaza · Mombasa · Kenya",
    category: "Healthcare · Commercial",
    status: "Proposed",
    description:
      "A healthcare-oriented concept exploring efficient planning, professional environments and contemporary service spaces.",
    narrative:
      "A healthcare-focused development concept designed around efficient planning and professional service environments.",
    services: [
      "Architecture",
      "Healthcare Design",
      "Planning",
    ],
  },

  {
    number: "18",
    slug: "aga-khan-outreach-interiors",
    title: "Proposed Interior Fit-Outs for Aga Khan Kisumu-Busia Outreach Centre",
    location: "Kisumu · Busia · Kenya",
    category: "Healthcare · Interior Architecture",
    status: "Proposed",
    description:
      "Interior fit-out concepts developed to support functional healthcare and outreach environments.",
    narrative:
      "Interior architecture developed around healthcare functionality and a professional patient experience.",
    services: [
      "Interior Architecture",
      "Healthcare Design",
      "Space Planning",
    ],
  },

  {
    number: "19",
    slug: "dental-emporium",
    title: "Proposed Dental Emporium",
    location: "Fairbank · Nairobi West · Kenya",
    category: "Healthcare · Commercial · Interiors",
    status: "Proposed",
    description:
      "A specialised dental environment combining healthcare planning, commercial identity and contemporary interiors.",
    narrative:
      "A specialised healthcare environment combining functional planning with a contemporary commercial identity.",
    services: [
      "Architecture",
      "Interior Architecture",
      "Healthcare Design",
    ],
  },

  {
    number: "20",
    slug: "kimaitas-house",
    title: "The Kimaita's House",
    location: "Meru · Kenya",
    category: "Residential Architecture",
    status: "Developed",
    description:
      "A private residence designed to balance family living, spatial comfort and architectural expression.",
    narrative:
      "A family residence balancing comfort, function and architectural expression.",
    services: [
      "Architecture",
      "Concept Design",
    ],
  },

  {
    number: "21",
    slug: "mixed-urban-development",
    title: "Proposed Mixed Urban Development",
    location: "Nairobi West · Kenya",
    category: "Mixed-Use · Urban Development",
    status: "Proposed",
    description:
      "An urban development concept integrating multiple uses within a contemporary and efficient architectural framework.",
    narrative:
      "A mixed-use urban concept exploring density, connectivity and efficient development.",
    services: [
      "Architecture",
      "Masterplanning",
      "Urban Design",
    ],
  },

  {
    number: "22",
    slug: "nyamira-apartment",
    title: "Proposed Apartment Unit",
    location: "Nyamira · Kenya",
    category: "Residential · Multi-Family",
    status: "Proposed",
    description:
      "A multi-unit residential development exploring density, functionality and contemporary urban living.",
    narrative:
      "A residential concept exploring efficient use of space and contemporary multi-family living.",
    services: [
      "Architecture",
      "Planning",
      "Residential Design",
    ],
  },

  {
    number: "23",
    slug: "nyamira-mud-development",
    title: "Proposed MUD Development",
    location: "Nyamira Town · Kenya",
    category: "Mixed-Use · Urban Development",
    status: "Proposed",
    description:
      "A mixed urban development concept designed to bring together multiple uses within a growing town environment.",
    narrative:
      "A mixed urban development responding to the changing needs of a growing town.",
    services: [
      "Architecture",
      "Masterplanning",
      "Urban Design",
    ],
  },

  {
    number: "24",
    slug: "salon-barber-shop",
    title: "Proposed Salon & Barber Shop Interior Fit-Out",
    location: "Kenya",
    category: "Interior Architecture · Retail",
    status: "Proposed",
    description:
      "A contemporary commercial interior designed around customer experience, branding and functional flow.",
    narrative:
      "A commercial interior focused on customer experience, efficient circulation and brand identity.",
    services: [
      "Interior Architecture",
      "Space Planning",
      "Design",
    ],
  },

  {
    number: "25",
    slug: "kilifi-restaurant",
    title: "Proposed Kilifi Restaurant",
    location: "Mavueni · Kilifi · Kenya",
    category: "Hospitality · Restaurant · Interior",
    status: "Proposed",
    description:
      "A restaurant concept developed around social experience, hospitality and a distinctive coastal identity.",
    narrative:
      "A restaurant concept designed around social interaction, atmosphere and coastal character.",
    services: [
      "Architecture",
      "Interior Architecture",
      "Hospitality Design",
    ],
  },

  {
    number: "26",
    slug: "brac-international-interior",
    title: "Proposed BRAC International Interior Fit-Out",
    location: "Kenya",
    category: "Corporate · Interior Architecture",
    status: "Proposed",
    description:
      "A workplace interior concept designed around functionality, organisational identity and contemporary work culture.",
    narrative:
      "A contemporary workplace environment designed around functionality and organisational identity.",
    services: [
      "Interior Architecture",
      "Space Planning",
      "Design",
    ],
  },

  {
    number: "27",
    slug: "loft-bistro-interior",
    title: "Proposed The Loft Bistro Interior",
    location: "Nakuru · Kenya",
    category: "Hospitality · Interior Architecture",
    status: "Proposed",
    description:
      "A bistro interior concept exploring atmosphere, materiality and a memorable dining experience.",
    narrative:
      "A hospitality interior developed around atmosphere, materiality and the dining experience.",
    services: [
      "Interior Architecture",
      "Hospitality Design",
      "Space Planning",
    ],
  },

  {
    number: "28",
    slug: "absa-lounge-interior",
    title: "Proposed Absa Bank Lounge Interior Fit-Out",
    location: "Kenya",
    category: "Corporate · Interior Architecture",
    status: "Proposed",
    description:
      "A premium corporate lounge interior designed around comfort, brand experience and refined material expression.",
    narrative:
      "A premium corporate environment designed around comfort, identity and a refined user experience.",
    services: [
      "Interior Architecture",
      "Space Planning",
      "Design",
    ],
  },
];