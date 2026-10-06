export type Language = "en" | "km";

export interface Translations {
  nav: {
    groom_name: string;
    bride_name: string;
    groom_fullName: string;
    bride_fullName: string;
    home: string;
    couple: string;
    story: string;
    ceremony: string;
    schedule: string;
    moments: string;
    rsvp: string;
    gifts: string;
    customize: string;
  };
  hero: {
    tagline: string;
    quote: string;
    loveStoryBtn: string;
    saveTheDateBtn: string;
    countdownTitle: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    meetCouple: string;
    venue: string;
    address: string;
    our_wedding_venue: string;
  };
  couple: {
    badge: string;
    heading: string;
    subheading: string;
    groomBadge: string;
    brideBadge: string;
    sonOf: string;
    daughterOf: string;
  };
  story: {
    badge: string;
    heading: string;
    subheading: string;
    milestone1Title: string;
    milestone1Desc: string;
    milestone1Date: string;
    milestone1Loc: string;
    milestone2Title: string;
    milestone2Desc: string;
    milestone2Date: string;
    milestone2Loc: string;
    milestone3Title: string;
    milestone3Desc: string;
    milestone3Date: string;
    milestone3Loc: string;
    milestone4Title: string;
    milestone4Desc: string;
    milestone4Date: string;
    milestone4Loc: string;
    milestone5Title: string;
    milestone5Desc: string;
    milestone5Date: string;
    milestone5Loc: string;
    closingFlourish: string;
  };
  ceremony: {
    badge: string;
    heading: string;
    subheading: string;
    dateTitle: string;
    venueTitle: string;
    dressCodeTitle: string;
    dressCodeValue: string;
    dressCodeDesc: string;
    getDirections: string;
    copyAddress: string;
    addressCopied: string;
  };
  schedule: {
    badge: string;
    heading: string;
    subheading: string;
    event1Title: string;
    event1Desc: string;
    event2Title: string;
    event2Desc: string;
    event3Title: string;
    event3Desc: string;
    event4Title: string;
    event4Desc: string;
    event5Title: string;
    event5Desc: string;
  };
  gallery: {
    badge: string;
    heading: string;
    subheading: string;
    all: string;
    engagement: string;
    travel: string;
    portraits: string;
    close: string;
    photoOf: string;
  };
  rsvp: {
    badge: string;
    heading: string;
    subheading: string;
    fullName: string;
    fullNamePlaceholder: string;
    email: string;
    phone: string;
    attendingLabel: string;
    attendingYes: string;
    attendingNo: string;
    guestsLabel: string;
    dietaryLabel: string;
    dietaryPlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successMessage: string;
    anotherRsvp: string;
    attendeeBadge: string;
  };
  gifts: {
    badge: string;
    heading: string;
    subheading: string;
    bankTransfer: string;
    bankDesc: string;
    accountName: string;
    accountNumber: string;
    copyNumber: string;
    copied: string;
    scanQr: string;
    registryTitle: string;
    registryDesc: string;
    viewRegistry: string;
  };
  closing: {
    heading: string;
    subheading: string;
    backToTop: string;
    madeWithLove: string;
  };
  customizer: {
    title: string;
    description: string;
    groomName: string;
    brideName: string;
    weddingDate: string;
    venueName: string;
    venueAddress: string;
    save: string;
    reset: string;
  };
  audio: {
    play: string;
    pause: string;
    playing: string;
    paused: string;
    title: string;
    subtitle: string;
    nowPlaying: string;
    uploadMp3: string;
    uploadDesc: string;
    orPasteUrl: string;
    urlPlaceholder: string;
    applyUrl: string;
    presets: string;
    presetCanon: string;
    presetAcoustic: string;
    presetClairDeLune: string;
    presetChime: string;
    customTrack: string;
    volume: string;
    loop: string;
    removeCustom: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      groom_name: "Marady",
      bride_name: "Socheata",
      groom_fullName: "Eng Marady",
      bride_fullName: "Kao Hemsocheata",
      home: "Home",
      couple: "Couple",
      story: "Story",
      ceremony: "Ceremony",
      schedule: "Schedule",
      moments: "Moments",
      rsvp: "RSVP",
      gifts: "Gifts",
      customize: "Customize",
    },
    hero: {
      tagline: "We're Getting Married!",
      quote: '"A 100 years old friendship"',
      loveStoryBtn: "Our Love Story",
      saveTheDateBtn: "Save The Date",
      countdownTitle: "Counting down to our special day",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      meetCouple: "Meet The Couple",
      venue: "Borey New World Kambol 6",
      address: "No. 14 St.27c",
      our_wedding_venue: "Our Wedding Venue",
    },
    couple: {
      badge: "Happy Wedding Day",
      heading: "With the new couple",
      subheading:
        "We would like to invite all beloved people to join our wedding that will happen soon.",
      groomBadge: "The Groom",
      brideBadge: "The Bride",
      sonOf: "Son of",
      daughterOf: "Daughter of",
    },
    story: {
      badge: "Our love album",
      heading: "Our Love Journey",
      subheading:
        "Every love story is beautiful, but ours is our absolute favorite. Here are the unforgettable chapters that brought us to forever.",
      milestone1Title: "The First Meeting",
      milestone1Desc:
        "The day our paths crossed and everything began. A serendipitous encounter on a rainy Tuesday morning at a small bookstore cafe on Bleecker Street, reaching for the exact same art biography.",
      milestone1Date: "Autumn 2021",
      milestone1Loc: "New York City",
      milestone2Title: "Our First Date",
      milestone2Desc:
        "Dinner turned into hours of walking under city lights, sharing childhood dreams, favorite records, and realizing neither of us wanted the night to end.",
      milestone2Date: "Winter 2021",
      milestone2Loc: "Brooklyn Promenade",
      milestone3Title: "Falling in Love",
      milestone3Desc:
        "A summer road trip through the coast where silence felt comfortable, laughter came easily, and we realized home wasn’t a place, but each other.",
      milestone3Date: "Summer 2022",
      milestone3Loc: "Big Sur, California",
      milestone4Title: "The Proposal",
      milestone4Desc:
        "At sunset overlooking the ocean on a crisp autumn evening, with our favorite song playing quietly and tears of joy, Julian got down on one knee.",
      milestone4Date: "Autumn 2023",
      milestone4Loc: "Newport, Rhode Island",
      milestone5Title: "Our Wedding Day",
      milestone5Desc:
        "Surrounded by our dearest family and friends, we make our forever promise to love, cherish, and grow old together hand in hand.",
      milestone5Date: "Summer 2026",
      milestone5Loc: "Savannah, Georgia",
      closingFlourish: "And our next chapter begins with you",
    },
    ceremony: {
      badge: "Join Us In Celebration",
      heading: "The Wedding Ceremony",
      subheading:
        "We cordially request the honor of your presence as we exchange vows and celebrate our eternal union.",
      dateTitle: "Date & Time",
      venueTitle: "Ceremony & Reception Venue",
      dressCodeTitle: "Dress Code",
      dressCodeValue: "Cocktail & Formal Attire",
      dressCodeDesc:
        "Blush pink, champagne, soft rose, and neutral elegant pastels are warmly welcomed.",
      getDirections: "Get Directions on Map",
      copyAddress: "Copy Address",
      addressCopied: "Address Copied!",
    },
    schedule: {
      badge: "Order of Events",
      heading: "The Wedding Program",
      subheading:
        "A curated timeline of joy, romance, toasts, and dance as we celebrate together throughout the day.",
      event1Title: "Guest Welcome & Arrival",
      event1Desc:
        "Arrival of beloved guests, signature welcome mocktails & cocktails, light string quartet prelude.",
      event2Title: "Exchange of Vows",
      event2Desc:
        "The solemn and romantic wedding ceremony, exchange of rings, and our first kiss as married couple.",
      event3Title: "Cocktail Hour & Photos",
      event3Desc:
        "Celebratory champagne toast, delicate hors d’oeuvres, lawn games, and garden photo sessions.",
      event4Title: "Wedding Banquet & Toasts",
      event4Desc:
        "A gourmet multi-course dinner, heartfelt speeches and toasts from family and the wedding party.",
      event5Title: "First Dance & Dancing",
      event5Desc:
        "Cutting of the wedding cake, first dance under fairy lights, and dancing the night away!",
    },
    gallery: {
      badge: "Cherished Memories",
      heading: "Our Captured Moments",
      subheading:
        "A glimpse into our favorite adventures, quiet smiles, and tender moments leading up to this special day.",
      all: "All Moments",
      engagement: "Engagement",
      travel: "Travels",
      portraits: "Portraits",
      close: "Close",
      photoOf: "Photo",
    },
    rsvp: {
      badge: "Will You Celebrate With Us?",
      heading: "Please Kindly RSVP",
      subheading:
        "Your love and presence will make our wedding day complete. Please let us know if you can join our celebration.",
      fullName: "Your Full Name *",
      fullNamePlaceholder: "e.g. Eleanor Vance",
      email: "Email Address *",
      phone: "Phone Number (Optional)",
      attendingLabel: "Will you attend our wedding? *",
      attendingYes: "Joyfully Accepts with Pleasure",
      attendingNo: "Regretfully Declines with Warm Wishes",
      guestsLabel: "Total Number of Guests Attending *",
      dietaryLabel: "Dietary Restrictions or Special Wishes",
      dietaryPlaceholder:
        "e.g. Vegetarian, nut allergy, or a sweet message for the couple...",
      submitBtn: "Send RSVP Confirmation",
      submittingBtn: "Sending RSVP...",
      successTitle: "Thank You for Your RSVP!",
      successMessage:
        "We have received your response and cannot wait to celebrate our special day together.",
      anotherRsvp: "Submit Another Response",
      attendeeBadge: "Official Guest Confirmation",
    },
    gifts: {
      badge: "Your Presence is Our Greatest Gift",
      heading: "Wedding Gift & Registry",
      subheading:
        "If you wish to honor us with a gift to help us begin our new journey together, we would be deeply touched and grateful.",
      bankTransfer: "Direct Bank Transfer",
      bankDesc:
        "For guests who prefer sending their blessings via electronic transfer or digital wallet.",
      accountName: "Account Name",
      accountNumber: "Account Number",
      copyNumber: "Copy Number",
      copied: "Copied!",
      scanQr: "Scan QR to Send Blessings",
      registryTitle: "Honeymoon & Home Wishlist",
      registryDesc:
        "Contribute to our dream honeymoon adventure or our cozy new home together.",
      viewRegistry: "View Wedding Registry",
    },
    closing: {
      heading: "Thank You With All Our Hearts",
      subheading:
        "For your love, prayers, laughter, and support that make our love story so truly special. We cannot wait to celebrate with you!",
      backToTop: "Back to Top",
      madeWithLove: "Crafted with love for Julian & Clara’s Wedding",
    },
    customizer: {
      title: "Customize Wedding Details",
      description:
        "Personalize the names, wedding date, and venue details to make this wedding invitation truly yours.",
      groomName: "Groom’s Name",
      brideName: "Bride’s Name",
      weddingDate: "Wedding Date & Time",
      venueName: "Venue Name",
      venueAddress: "Venue Address",
      save: "Save Changes",
      reset: "Reset to Defaults",
    },
    audio: {
      play: "Play Melody",
      pause: "Pause Melody",
      playing: "Melody Playing",
      paused: "Melody Paused",
      title: "Wedding Melody & MP3 Player",
      subtitle:
        "Customize or upload your favorite romantic song for this celebration.",
      nowPlaying: "Now Playing",
      uploadMp3: "Upload Your MP3 File",
      uploadDesc:
        "Select an MP3 file from your device (saved locally on your browser).",
      orPasteUrl: "Or Paste MP3 Audio Link",
      urlPlaceholder: "https://example.com/our-wedding-song.mp3",
      applyUrl: "Set Song URL",
      presets: "Featured Wedding Songs",
      presetCanon: "Canon in D (Pachelbel) - Strings & Piano",
      presetAcoustic: "Acoustic Wedding Romance - Guitar & Harp",
      presetClairDeLune: "Clair de Lune (Debussy) - Romantic Piano",
      presetChime: "Crystal Music Box (Chimes)",
      customTrack: "Custom Song",
      volume: "Volume",
      loop: "Loop Music",
      removeCustom: "Remove Custom Track",
    },
  },
  km: {
    nav: {
      groom_name: "ម៉ារ៉ាឌី",
      bride_name: "សុជាតា",
      groom_fullName: "អេង ម៉ារ៉ាឌី",
      bride_fullName: "កៅ ហែមសុជាតា",
      home: "ទំព័រដើម",
      couple: "គូស្នេហ៍",
      story: "រឿងរ៉ាវស្នេហ៍",
      ceremony: "ពិធីមង្គលការ",
      schedule: "កាលវិភាគ",
      moments: "កម្រងរូបភាព",
      rsvp: "ឆ្លើយតប",
      gifts: "ចំណងដៃ",
      customize: "កែសម្រួល",
    },
    hero: {
      tagline: "យើងរៀបអាពាហ៍ពិពាហ៍ហើយ!",
      quote: "«មិត្ត ១០០ ឆ្នាំ»",
      loveStoryBtn: "រឿងរ៉ាវស្នេហារបស់យើង",
      saveTheDateBtn: "កត់ត្រាកាលបរិច្ឆេទ",
      countdownTitle: "រាប់ថយក្រោយឆ្ពោះទៅកាន់ថ្ងៃពិសេសរបស់ពួកយើង",
      days: "ថ្ងៃ",
      hours: "ម៉ោង",
      minutes: "នាទី",
      seconds: "វិនាទី",
      meetCouple: "ស្គាល់កូនកំលោះ និងកូនក្រមុំ",
      venue: "បុរីពិភពថ្មីកំបូលគម្រោងទី 6",
      address: "ផ្ទះលេខ 14 ផ្លូវលេខ 27c",
      our_wedding_venue: "ទីតាំងពិធីមង្គលការរបស់ពួកយើង",
    },
    couple: {
      badge: "រីករាយជាមួយអាពាហ៍ពិពាហ៍របស់ពួកយើង",
      heading: "With the new couple",
      subheading:
        "សូមគោរពអញ្ជើញភ្ញៀវកិត្តិយសទាំងអស់ចូលរួមអាពាហ៍ពិពាហ៍របស់ពួកយើងនាពេលខាងមុខនេះ។",
      groomBadge: "កូនកំលោះ",
      brideBadge: "កូនក្រមុំ",
      sonOf: "កូនប្រុសរបស់",
      daughterOf: "កូនស្រីរបស់",
    },
    story: {
      badge: "គម្រងរូបភាពរបស់ពួកយើង",
      heading: "រឿងរ៉ាវស្នេហារបស់យើង",
      subheading:
        "រឿងរ៉ាវស្នេហាទាំងអស់សុទ្ធតែស្រស់ស្អាត ប៉ុន្តែរឿងរ៉ាវរបស់យើងគឺជាអ្វីដែលយើងស្រឡាញ់បំផុត។ នេះជាអនុស្សាវរីយ៍ដែលនាំយើងមករកថ្ងៃនេះ។",
      milestone1Title: "ការជួបគ្នាលើកដំបូង",
      milestone1Desc:
        "ថ្ងៃដែលវាសនាបាននាំផ្លូវយើងឱ្យប្រសព្វគ្នា។ នៅក្នុងហាងកាហ្វេ និងសៀវភៅតូចមួយនៅព្រឹកថ្ងៃអង្គារមានភ្លៀងធ្លាក់ស្រិចៗ ពេលដែលដៃយើងទាំងពីរចាប់យកសៀវភៅសិល្បៈដូចគ្នា។",
      milestone1Date: "រដូវស្លឹកឈើជ្រុះ ឆ្នាំ២០២១",
      milestone1Loc: "ទីក្រុងញូវយ៉ក",
      milestone2Title: "ការណាត់ជួបលើកដំបូង",
      milestone2Desc:
        "អាហារពេលល្ងាចបានក្លាយជាការដើរលេងក្រោមពន្លឺភ្លើងទីក្រុងជាច្រើនម៉ោង ចែករំលែកសុបិនកាលពីកុមារភាព និងបទចម្រៀងដែលចូលចិត្ត ដោយគ្មាននរណាចង់ឱ្យរាត្រីនោះបញ្ចប់ឡើយ។",
      milestone2Date: "រដូវរងា ឆ្នាំ២០២១",
      milestone2Loc: "ប្រូមឺណាតប្រ៊ូកលីន",
      milestone3Title: "លង់ស្នេហ៍យ៉ាងជ្រាលជ្រៅ",
      milestone3Desc:
        "ដំណើរកម្សាន្តតាមឆ្នេរសមុទ្ររដូវក្តៅ ដែលភាពស្ងប់ស្ងាត់ពោរពេញដោយផាសុកភាព សំណើចកើតឡើងយ៉ាងងាយស្រួល ហើយយើងដឹងថា «ផ្ទះ» មិនមែនជាទីកន្លែងនោះទេ ប៉ុន្តែជាវត្តមានរបស់គ្នាទៅវិញទៅមក។",
      milestone3Date: "រដូវក្តៅ ឆ្នាំ២០២២",
      milestone3Loc: "ប៊ីកស៊ើរ, រដ្ឋកាលីហ្វ័រញ៉ា",
      milestone4Title: "ការសុំរៀបការ",
      milestone4Desc:
        "នៅពេលថ្ងៃលិចលើផ្ទៃសមុទ្រនារដូវស្លឹកឈើជ្រុះដ៏ស្រស់បំព្រង ជាមួយនឹងបទចម្រៀងដែលយើងស្រឡាញ់ និងទឹកភ្នែកនៃក្តីរំភើប ជូលៀនបានលុតជង្គង់សុំក្លារ៉ារៀបការ។",
      milestone4Date: "រដូវស្លឹកឈើជ្រុះ ឆ្នាំ២០២៣",
      milestone4Loc: "ញូវផត, រដ្ឋរ៉ូដអាយលែន",
      milestone5Title: "ថ្ងៃមង្គលការរបស់យើង",
      milestone5Desc:
        "ហ៊ុំព័ទ្ធដោយក្រុមគ្រួសារ និងមិត្តភក្តិជាទីស្រឡាញ់ យើងសច្ចាស្រឡាញ់ ថែរក្សា និងចាស់ជរាជាមួយគ្នាដោយក្តីស្មោះស្ម័គ្រអស់មួយជីវិត។",
      milestone5Date: "រដូវក្តៅ ឆ្នាំ២០២៦",
      milestone5Loc: "សាវ៉ាណា, រដ្ឋហ្សកហ្ស៊ី",
      closingFlourish:
        "ហើយជំពូកបន្ទាប់នៃជីវិតយើង ចាប់ផ្តើមជាមួយវត្តមានរបស់អ្នក",
    },
    ceremony: {
      badge: "សូមគោរពអញ្ជើញចូលរួម",
      heading: "ពិធីសិរីសួស្តី អាពាហ៍ពិពាហ៍",
      subheading:
        "យើងខ្ញុំមានកិត្តិយស និងសេចក្តីសោមនស្សរីករាយក្រៃលែង សូមគោរពអញ្ជើញឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា ចូលរួមជាអធិបតី និងភ្ញៀវកិត្តិយស។",
      dateTitle: "កាលបរិច្ឆេទ និងពេលវេលា",
      venueTitle: "ទីតាំងរៀបចំពិធីមង្គលការ",
      dressCodeTitle: "ការស្លៀកពាក់",
      dressCodeValue: "សម្លៀកបំពាក់សមរម្យ និងថ្លៃថ្នូរ",
      dressCodeDesc:
        "ពណ៌ផ្កាឈូកស្រាល ពណ៌ស្រាសំប៉ាញ និងពណ៌បែបធម្មជាតិស្រទន់ ត្រូវបានលើកទឹកចិត្តដោយក្តីស្រឡាញ់។",
      getDirections: "ចុចដើម្បីមើលផែនទី Google",
      copyAddress: "ចម្លងអាសយដ្ឋាន",
      addressCopied: "បានចម្លងអាសយដ្ឋាន!",
    },
    schedule: {
      badge: "កាលវិភាគកម្មវិធី",
      heading: "កម្មវិធីសិរីមង្គលការ",
      subheading:
        "ពេលវេលានៃក្តីរីករាយ ក្តីស្រឡាញ់ ការជូនពរ និងការរាំកម្សាន្តដែលយើងនឹងប្រារព្ធជាមួយគ្នាពេញមួយថ្ងៃ។",
      event1Title: "ការទទួលបដិសណ្ឋារកិច្ចភ្ញៀវកិត្តិយស",
      event1Desc:
        "ការអញ្ជើញមកដល់របស់ភ្ញៀវកិត្តិយស ពិសាភេសជ្ជៈទទួលស្វាគមន៍ និងការប្រគំតន្ត្រីបុរាណស្រទន់។",
      event2Title: "ពិធីកាត់ខាន់ស្លា និងសច្ចាប្រណិធាន",
      event2Desc:
        "ពិធីសូត្រមន្តសិរីមង្គល ការផ្លាស់ប្តូរចិញ្ចៀនអាពាហ៍ពិពាហ៍ និងការប្រសិទ្ធពរជ័យពីមាតាបិតា និងចាស់ទុំ។",
      event3Title: "ពិធីជប់លៀងភេសជ្ជៈ និងថតរូបអនុស្សាវរីយ៍",
      event3Desc:
        "ការជល់កែវស្រាសំប៉ាញអបអរសាទរ ពិសាចំណីសម្រន់ និងការថតរូបអនុស្សាវរីយ៍ជាមួយគូស្វាមីភរិយាថ្មី។",
      event4Title: "ពិធីពិសាភោជនាហារ និងថ្លែងអំណរគុណ",
      event4Desc:
        "ការពិសាអាហារយ៉ាងឆ្ងាញ់ពិសា និងការថ្លែងចំណាប់អារម្មណ៍ជូនពរពីក្រុមគ្រួសារ និងមិត្តភក្តិ។",
      event5Title: "កាត់នំខេកមង្គលការ និងរាំកម្សាន្ត",
      event5Desc:
        "ពិធីកាត់នំខេកអាពាហ៍ពិពាហ៍ ការរាំបើកឆាករបស់កូនកំលោះកូនក្រមុំ និងការរាំកម្សាន្តរហូតដល់ចប់កម្មវិធី!",
    },
    gallery: {
      badge: "អនុស្សាវរីយ៍ដ៏មានតម្លៃ",
      heading: "កម្រងរូបភាពអនុស្សាវរីយ៍",
      subheading:
        "ទិដ្ឋភាពនៃក្តីស្រឡាញ់ ស្នាមញញឹមដ៏កក់ក្តៅ និងពេលវេលាដ៏មានអត្ថន័យដែលនាំយើងមកកាន់ថ្ងៃមង្គលការនេះ។",
      all: "រូបភាពទាំងអស់",
      engagement: "ភ្ជាប់ពាក្យ",
      travel: "ដំណើរកម្សាន្ត",
      portraits: "រូបថតគូស្នេហ៍",
      close: "បិទ",
      photoOf: "រូបថត",
    },
    rsvp: {
      badge: "តើលោកអ្នកនឹងចូលរួមជាមួយយើងទេ?",
      heading: "សូមបញ្ជាក់ការចូលរួម (RSVP)",
      subheading:
        "វត្តមាន និងក្តីស្រឡាញ់របស់លោកអ្នក នឹងធ្វើឱ្យថ្ងៃពិសេសរបស់យើងកាន់តែពេញលេញ។ សូមមេត្តាផ្តល់ដំណឹងឱ្យយើងខ្ញុំបានដឹងទុកជាមុន។",
      fullName: "គោត្តនាម និងនាមពេញ *",
      fullNamePlaceholder: "ឧទាហរណ៍៖ សុខ សុវណ្ណ",
      email: "អាសយដ្ឋានអ៊ីមែល *",
      phone: "លេខទូរស័ព្ទ (ស្រេចចិត្ត)",
      attendingLabel: "តើលោកអ្នកអាចចូលរួមបានទេ? *",
      attendingYes: "ខ្ញុំនឹងចូលរួមដោយក្តីរីករាយក្រៃលែង",
      attendingNo: "សូមអភ័យទោស ខ្ញុំមិនអាចចូលរួមបានទេ",
      guestsLabel: "ចំនួនភ្ញៀវចូលរួមសរុប *",
      dietaryLabel: "ចំណាំអំពីចំណីអាហារ ឬសារជូនពរ",
      dietaryPlaceholder:
        "ឧទាហរណ៍៖ ហូបបួស អាលែកហ្ស៊ី ឬពាក្យជូនពរដល់គូស្វាមីភរិយាថ្មី...",
      submitBtn: "ផ្ញើការបញ្ជាក់ចូលរួម",
      submittingBtn: "កំពុងផ្ញើ...",
      successTitle: "សូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅ!",
      successMessage:
        "យើងខ្ញុំបានទទួលការឆ្លើយតបរបស់លោកអ្នករួចរាល់ហើយ ហើយរង់ចាំជួបលោកអ្នកក្នុងថ្ងៃមង្គលការ។",
      anotherRsvp: "ផ្ញើការឆ្លើយតបម្តងទៀត",
      attendeeBadge: "ការបញ្ជាក់វត្តមានជាផ្លូវការ",
    },
    gifts: {
      badge: "វត្តមានរបស់លោកអ្នកជាកាដូដ៏ថ្លៃថ្លាបំផុត",
      heading: "ចំណងដៃ និងអំណោយមង្គលការ",
      subheading:
        "ប្រសិនបើលោកអ្នកមានបំណងជូនពរជាចំណងដៃដល់យើងខ្ញុំ ដើម្បីជាដើមទុនចាប់ផ្តើមជីវិតគ្រួសារថ្មី យើងខ្ញុំសូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅបំផុត។",
      bankTransfer: "ការផ្ទេរប្រាក់តាមធនាគារ (ABA / វីង)",
      bankDesc:
        "សម្រាប់ភ្ញៀវកិត្តិយសដែលមានបំណងជូនពរតាមរយៈការផ្ទេរប្រាក់អេឡិចត្រូនិក ឬស្កេន QR Code។",
      accountName: "ឈ្មោះគណនី",
      accountNumber: "លេខគណនី",
      copyNumber: "ចម្លងលេខគណនី",
      copied: "បានចម្លង!",
      scanQr: "ស្កេន QR Code ដើម្បីជូនពរ",
      registryTitle: "គម្រោងដំណើរកម្សាន្តក្រេបទឹកឃ្មុំ",
      registryDesc:
        "ចូលរួមចំណែកក្នុងដំណើរកម្សាន្តក្រេបទឹកឃ្មុំ ឬការរៀបចំផ្ទះថ្មីដ៏កក់ក្តៅរបស់យើង។",
      viewRegistry: "មើលបញ្ជីអំណោយមង្គលការ",
    },
    closing: {
      heading: "សូមអរគុណពីបាតបេះដូង",
      subheading:
        "ចំពោះក្តីស្រឡាញ់ ពរជ័យ ស្នាមញញឹម និងការគាំទ្រដែលធ្វើឱ្យរឿងរ៉ាវស្នេហារបស់យើងមានអត្ថន័យ។ យើងខ្ញុំរង់ចាំស្វាគមន៍លោកអ្នកដោយក្តីរំភើប!",
      backToTop: "ត្រឡប់ទៅខាងលើ",
      madeWithLove: "រៀបចំឡើងដោយក្តីស្រឡាញ់ សម្រាប់អាពាហ៍ពិពាហ៍ Julian & Clara",
    },
    customizer: {
      title: "កែសម្រួលព័ត៌មានមង្គលការ",
      description:
        "ផ្លាស់ប្តូរឈ្មោះកូនកំលោះ កូនក្រមុំ កាលបរិច្ឆេទ និងទីតាំងមង្គលការតាមតម្រូវការរបស់អ្នក។",
      groomName: "ឈ្មោះកូនកំលោះ",
      brideName: "ឈ្មោះកូនក្រមុំ",
      weddingDate: "កាលបរិច្ឆេទ និងម៉ោង",
      venueName: "ឈ្មោះទីតាំង",
      venueAddress: "អាសយដ្ឋាន",
      save: "រក្សាទុកការផ្លាស់ប្តូរ",
      reset: "កំណត់ឡើងវិញ",
    },
    audio: {
      play: "Play Melody",
      pause: "Pause Melody",
      playing: "Melody Playing",
      paused: "Melody Paused",
      title: "Wedding Melody & MP3 Player",
      subtitle:
        "Customize or upload your favorite romantic song for this celebration.",
      nowPlaying: "Now Playing",
      uploadMp3: "Upload Your MP3 File",
      uploadDesc:
        "Select an MP3 file from your device (saved locally on your browser).",
      orPasteUrl: "Or Paste MP3 Audio Link",
      urlPlaceholder: "https://example.com/our-wedding-song.mp3",
      applyUrl: "Set Song URL",
      presets: "Featured Wedding Songs",
      presetCanon: "Canon in D (Pachelbel) - Strings & Piano",
      presetAcoustic: "Acoustic Wedding Romance - Guitar & Harp",
      presetClairDeLune: "Clair de Lune (Debussy) - Romantic Piano",
      presetChime: "Crystal Music Box (Chimes)",
      customTrack: "Custom Song",
      volume: "Volume",
      loop: "Loop Music",
      removeCustom: "Remove Custom Track",
    },
  },
};
