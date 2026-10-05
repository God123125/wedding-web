import {
  CoupleInfo,
  TimelineMilestone,
  WeddingEvent,
  GalleryPhoto,
  GiftDetails,
} from "../types/wedding";

export const initialCoupleInfo: CoupleInfo = {
  groomName: "Julian Vance",
  groomTitle: "The Groom",
  groomBio:
    "An architect with a passion for timeless spaces, quiet mornings with pour-over coffee, and making Clara laugh until she cries. From the second we met, I knew our love was the masterpiece of my life.",
  groomImage:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  brideName: "Clara Kensington",
  brideTitle: "The Bride",
  brideBio:
    "A landscape botanical artist who finds poetry in wildflower fields, acoustic vinyl records, and sunsets by the sea. Julian is my favorite sanctuary, my warmest home, and my greatest adventure.",
  brideImage:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  weddingDate: "2026-06-20T15:30:00",
  weddingTime: "Saturday, June 20, 2026 at 3:30 PM",
  venueName: "The Rosewood Glasshouse & Botanical Gardens",
  venueAddress: "450 Magnolia Blossom Way, Savannah, GA 31401",
  venueNote:
    "Valet parking will be provided at the main gate. The ceremony will take place inside the climate-controlled glass conservatory, followed by cocktails on the rose lawn.",
  googleMapsUrl: "https://maps.google.com/?q=Savannah+Botanical+Gardens",
  dressCode: "Black Tie Optional • Romantic Garden Pastels",
};

export const initialMilestones: TimelineMilestone[] = [
  {
    id: "1",
    date: "Autumn 2021",
    title: "The First Meeting",
    description:
      "The day our paths crossed and everything began. A serendipitous encounter on a rainy Tuesday morning at a small bookstore cafe on Bleecker Street, reaching for the exact same art biography.",
    location: "New York City",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    date: "Spring 2022",
    title: "Our First Date",
    description:
      "A simple date that became the beginning of something beautiful. Handcrafted pasta by candlelight, followed by a three-hour moonlit stroll along the Hudson waterfront talking about our dreams.",
    location: "West Village, NY",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    date: "Summer 2023",
    title: "Falling in Love",
    description:
      "We discovered how special life could be together. Road-tripping along coastal cliffs, cooking chaotic dinners with too much garlic, and realizing neither of us ever wanted to imagine tomorrow without the other.",
    location: "Big Sur, California",
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    date: "December 2024",
    title: "The Proposal",
    description:
      "One question, one unforgettable moment, and a lifetime ahead. Surrounded by blooming wisteria on the sun-drenched cliffs of Amalfi at golden hour, Julian knelt with hands shaking and eyes shining.",
    location: "Positano, Italy",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    date: "June 20, 2026",
    title: "Our Wedding Day",
    description:
      "The beginning of our forever. Surrounded by our dearest family, cherished friends, and fragrant blush blossoms, we promise each other all of our tomorrows.",
    location: "Savannah, Georgia",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
  },
];

export const initialEvents: WeddingEvent[] = [
  {
    id: "event-1",
    title: "Wedding Ceremony",
    time: "3:30 PM - 4:30 PM",
    location: "The Glass Conservatory",
    description:
      "An intimate vows exchange beneath cascading blush florals, crystal chandeliers, and soft acoustic strings.",
    icon: "ceremony",
  },
  {
    id: "event-2",
    title: "Cocktails & Photography",
    time: "4:45 PM - 6:00 PM",
    location: "The Rose Lawn & Veranda",
    description:
      "Signature peach bellinis, artisanal charcuterie, harpist melodies, and romantic sunset golden hour photos.",
    icon: "photography",
  },
  {
    id: "event-3",
    title: "Reception & Dinner",
    time: "6:30 PM - 8:30 PM",
    location: "The Grand Magnolia Ballroom",
    description:
      "A four-course seasonal culinary banquet paired with fine reserve wines, heartfelt toasts, and wedding cake cutting.",
    icon: "dinner",
  },
  {
    id: "event-4",
    title: "Dancing & Send-Off",
    time: "8:30 PM - 11:30 PM",
    location: "Under the Starlit Pavilion",
    description:
      "Live jazz & modern acoustic band, dancing under fairy lights, and an enchanting sparkler send-off.",
    icon: "reception",
  },
];

export const initialGallery: GalleryPhoto[] = [
  {
    id: "photo-1",
    title: "Golden Sunset at Amalfi",
    category: "engagement",
    caption: 'Ten minutes after she whispered "Yes" to forever.',
    imageUrl:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    likes: 124,
  },
  {
    id: "photo-2",
    title: "Laughter by the Seaside",
    category: "travels",
    caption: "Chasing the tides in Positano, barefoot and completely in love.",
    imageUrl:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80",
    likes: 98,
  },
  {
    id: "photo-3",
    title: "Lavender Fields of Provence",
    category: "travels",
    caption: "Lost among fragrant purple waves under the warm French sun.",
    imageUrl:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1000&q=80",
    likes: 142,
  },
  {
    id: "photo-4",
    title: "The Vows Preview",
    category: "moments",
    caption:
      "Quiet moments writing our forever promises on handmade cotton paper.",
    imageUrl:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80",
    likes: 85,
  },
  {
    id: "photo-5",
    title: "First Autumn In Our Garden",
    category: "moments",
    caption: "Planting our first rose bushes together on our new porch.",
    imageUrl:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1000&q=80",
    likes: 110,
  },
  {
    id: "photo-6",
    title: "Starlight Romance",
    category: "engagement",
    caption: "Under the glittering canopy of Savannah night stars.",
    imageUrl:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
    likes: 167,
  },
];

export const initialGiftDetails: GiftDetails = {
  title: "Honeymoon & Future Home Fund",
  message:
    "Your loving presence and blessings at our wedding are truly the greatest gift of all. For friends and family who have kindly inquired, we have established a honeymoon adventure and new home sanctuary fund.",
  bankName: "Heritage Rose Trust Bank",
  accountHolder: "Julian Vance & Clara Kensington",
  accountNumber: "•••• •••• 4829",
  routingNumber: "021000089",
  zelleOrVenmo: "@JulianAndClara2026",
  honeymoonGoal: "Two weeks in the countryside of Tuscany & the Greek Isles",
};
