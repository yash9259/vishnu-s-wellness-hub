export type Content = {
  nav: { home: string; services: string; gallery: string; brochure: string; book: string };
  hero: {
    badge: string;
    subtitle: string;
    call: string;
    whatsapp: string;
    save: string;
    share: string;
    book: string;
    shareCopied: string;
    shareText: string;
    whatsappMsg: string;
    portraitAlt: string;
  };
  stats: { value: string; label: string }[];
  about: { eyebrow: string; title: string; paragraphs: string[] };
  why: { eyebrow: string; title: string; paragraphs: string[]; disclaimer: string };
  purpose: { eyebrow: string; body: string; tagline: string };
  services: { eyebrow: string; title: string; items: { title: string; body: string }[] };
  journey: { eyebrow: string; title: string; items: { year: string; title: string; body: string }[] };
  gallery: { eyebrow: string; title: string; captions: string[]; categories: Record<string, string> };
  testimonials: {
    eyebrow: string;
    title: string;
    items: { quote: string; name: string }[];
    videoTitle: string;
    videoBody: string;
    videoCta: string;
    videoMsg: string;
  };
  brochure: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
    download: string;
    request: string;
    requestMsg: string;
    meta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    chat: string;
    websiteSoon: string;
    name: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    interest: string;
    interests: string[];
    message: string;
    messagePlaceholder: string;
    submit: string;
    preferChat: string;
    chatLink: string;
    errRequired: string;
    errSend: string;
    success: string;
    whatsappMsg: string;
    demoMsg: string;
  };
  booking: {
    eyebrow: string;
    title: string;
    subtitle: string;
    back: string;
    name: string;
    phone: string;
    email: string;
    date: string;
    time: string;
    slots: string[];
    mode: string;
    modes: string[];
    location: string;
    locationPlaceholder: string;
    notes: string;
    notesPlaceholder: string;
    submit: string;
    errRequired: string;
    errSend: string;
    success: string;
    successBody: string;
    whatsappInstead: string;
    whatsappMsg: string;
    assurances: { title: string; body: string }[];
  };
  footer: { rights: string; disclaimer: string; call: string; whatsapp: string; book: string };
  language: { label: string; english: string; telugu: string };
};

export const en: Content = {
  nav: { home: "Home", services: "Services", gallery: "Gallery", brochure: "Brochure", book: "Book a consultation" },
  hero: {
    badge: "Enagic Independent Distributor",
    subtitle: "Kangen Water demonstrations, device guidance and a purpose-driven business opportunity.",
    call: "Call",
    whatsapp: "WhatsApp",
    save: "Save contact",
    share: "Share",
    book: "Book a consultation",
    shareCopied: "Card link copied",
    shareText: "Kangen Water demonstrations, device guidance and business opportunity in Hyderabad.",
    whatsappMsg: "Hello Vishnu garu, I would like to know more about Kangen Water.",
    portraitAlt: "Portrait of Vishnu Vardhan Reddy, Enagic Independent Distributor in Hyderabad",
  },
  stats: [
    { value: "20+", label: "Years in manufacturing & business" },
    { value: "Feb 2022", label: "Started the Kangen journey" },
    { value: "~140", label: "Families supported so far" },
  ],
  about: {
    eyebrow: "About me",
    title: "A turning point, one family at a time",
    paragraphs: [
      "I have been in the biscuit manufacturing industry for over 20 years. Although I gained valuable experience in business during those years, I was always searching for something that could give me a deeper sense of satisfaction and purpose.",
      "In February 2022, I purchased my Kangen Water device, and that decision became a turning point in my life.",
      "Today, I feel truly happy and fulfilled because, through my journey, I have been able to positively impact around 140 families. Seeing these families become more aware about their lifestyle and experience greater happiness gives me a sense of purpose that I never felt before.",
      "For me, this journey is not just about business. It is about making a meaningful difference in people's lives, one family at a time.",
    ],
  },
  why: {
    eyebrow: "Why I started",
    title: "It began at home",
    paragraphs: [
      "I started my Kangen Water journey because my wife was facing a vitiligo-related skin concern. We began exploring ways to support a healthier lifestyle and overall wellness, which led us to Kangen Water.",
      "Over approximately six months, we personally observed significant visible improvement, with around 80% of the affected skin area being covered. This personal journey inspired me to learn more about Kangen Water and eventually share my experience with others.",
    ],
    disclaimer:
      "This is a personal family experience shared as it happened. Individual experiences vary, and nothing here is intended as medical advice or a treatment claim.",
  },
  purpose: {
    eyebrow: "My purpose",
    body: "My purpose is to help people create greater awareness about the importance of a healthier lifestyle while also providing an opportunity to explore additional sources of income.",
    tagline: "Better Lifestyle. Better Opportunities. Better Income.",
  },
  services: {
    eyebrow: "What I do",
    title: "Services I personally handle",
    items: [
      {
        title: "Kangen Water Demonstration",
        body: "A live, hands-on demonstration at your home or office so you can see the difference for yourself.",
      },
      {
        title: "Water Quality & Lifestyle Awareness",
        body: "Simple, honest guidance on drinking water quality and everyday lifestyle habits.",
      },
      {
        title: "Device Guidance",
        body: "Help choosing the right Enagic model for your family size, usage and budget.",
      },
      {
        title: "Installation & Customer Support",
        body: "Installation, first-use walkthrough and continued support long after the handover.",
      },
      {
        title: "Business Opportunity Guidance",
        body: "Step-by-step mentoring for anyone who wants to build an additional source of income.",
      },
    ],
  },
  journey: {
    eyebrow: "My journey",
    title: "From manufacturing floor to family wellness",
    items: [
      {
        year: "2002 — 2022",
        title: "Two decades in biscuit manufacturing",
        body: "Over 20 years of running and growing a manufacturing business.",
      },
      {
        year: "February 2022",
        title: "Bought my first Kangen Water device",
        body: "A decision made for my family that changed the direction of my life.",
      },
      {
        year: "2022",
        title: "A personal family experience",
        body: "What we observed at home inspired me to learn deeply and share openly.",
      },
      {
        year: "Today",
        title: "~140 families connected",
        body: "Demonstrations, installations and ongoing support across Hyderabad.",
      },
      {
        year: "Ahead",
        title: "A purpose-driven journey",
        body: "Building awareness, service and opportunity for more families every month.",
      },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Moments from the journey",
    captions: [
      "Kangen Water awareness talk",
      "Business network presentation",
      "Exhibition stall, Hyderabad",
      "One-to-one live demonstration",
      "Customer after a water demo",
      "Home installation & handover",
      "Family awareness session",
      "Customer consultation",
      "Business opportunity discussion",
      "Networking meet",
    ],
    categories: {
      All: "All",
      Presentations: "Presentations",
      Demonstrations: "Demonstrations",
      Installations: "Installations",
      Events: "Events",
    },
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "In the words of the families I serve",
    items: [
      {
        quote:
          "Vishnu garu explained everything patiently and did the demo at our home. No pressure at all — just clear information.",
        name: "Customer, Medipally",
      },
      {
        quote:
          "The installation and follow-up support were excellent. He still checks in with us months later.",
        name: "Customer, Hyderabad",
      },
      {
        quote:
          "His own family story is what convinced us to listen. He speaks from real experience, not a script.",
        name: "Customer, Uppal",
      },
    ],
    videoTitle: "Video testimonials",
    videoBody: "Customer videos will be added here as soon as they are shared.",
    videoCta: "Ask for references",
    videoMsg: "Hello Vishnu garu, can you share customer testimonials?",
  },
  brochure: {
    eyebrow: "Brochure",
    title: "Take my services and journey with you",
    body: "A two-page PDF brochure covering my story, the services I personally handle, my journey so far and my contact details — easy to save or forward to family and friends.",
    bullets: [
      "Services, journey and key milestones",
      "Contact details and how to reach me",
      "Ready to share on WhatsApp",
    ],
    download: "Download brochure (PDF)",
    request: "Request it on WhatsApp",
    requestMsg: "Hello Vishnu garu, please send me your Kangen Water brochure.",
    meta: "PDF · 2 pages · English",
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Book a free demonstration",
    body: "Whether you want to understand Kangen Water, choose a device, or explore the business opportunity — reach out and we'll find a time that suits you.",
    chat: "Chat on WhatsApp",
    websiteSoon: "Website coming soon",
    name: "Your name",
    namePlaceholder: "Full name",
    phone: "Mobile number",
    phonePlaceholder: "10-digit mobile number",
    email: "Email (optional)",
    emailPlaceholder: "you@example.com",
    interest: "I am interested in",
    interests: ["Kangen Water demo", "Device guidance", "Business opportunity", "Other"],
    message: "Message (optional)",
    messagePlaceholder: "Anything you'd like me to know",
    submit: "Send enquiry",
    preferChat: "Prefer chatting?",
    chatLink: "Message on WhatsApp",
    errRequired: "Please add your name and mobile number",
    errSend: "Could not send right now — please use WhatsApp instead",
    success: "Thank you! Vishnu will get back to you shortly.",
    whatsappMsg: "Hello Vishnu garu, I have an enquiry about Kangen Water.",
    demoMsg: "Hello Vishnu garu, I would like to book a Kangen Water demo.",
  },
  booking: {
    eyebrow: "Appointments",
    title: "Book a Kangen Water consultation",
    subtitle:
      "Pick a date and time that suits you. I'll confirm on WhatsApp or by phone, and the demonstration is always free.",
    back: "Back to portfolio",
    name: "Your name",
    phone: "Mobile number",
    email: "Email (optional)",
    date: "Preferred date",
    time: "Preferred time",
    slots: ["Morning (9 AM – 12 PM)", "Afternoon (12 PM – 4 PM)", "Evening (4 PM – 8 PM)"],
    mode: "Consultation type",
    modes: ["Demonstration at my home", "At my office", "Online (video call)"],
    location: "Area / locality",
    locationPlaceholder: "e.g. Medipally, Uppal, Kompally",
    notes: "Anything I should know (optional)",
    notesPlaceholder: "Family size, current water setup, questions…",
    submit: "Request appointment",
    errRequired: "Please add your name, mobile number and a preferred date",
    errSend: "Could not book right now — please use WhatsApp instead",
    success: "Appointment requested",
    successBody: "Thank you! Vishnu will confirm your slot shortly on WhatsApp or by phone.",
    whatsappInstead: "Prefer WhatsApp? Message me directly",
    whatsappMsg: "Hello Vishnu garu, I would like to book a Kangen Water consultation.",
    assurances: [
      { title: "Free demonstration", body: "No cost and no obligation to buy." },
      { title: "At your convenience", body: "Home, office or a simple online session." },
      { title: "Honest guidance", body: "Clear information, never any pressure." },
    ],
  },
  footer: {
    rights: "Independent Enagic Distributor. Website coming soon.",
    disclaimer: "Personal experiences shared here are not medical advice.",
    call: "Call",
    whatsapp: "WhatsApp",
    book: "Book",
  },
  language: { label: "Language", english: "English", telugu: "తెలుగు" },
};

export const te: Content = {
  nav: { home: "హోమ్", services: "సేవలు", gallery: "గ్యాలరీ", brochure: "బ్రోచర్", book: "అపాయింట్‌మెంట్ బుక్ చేయండి" },
  hero: {
    badge: "ఎనాజిక్ ఇండిపెండెంట్ డిస్ట్రిబ్యూటర్",
    subtitle: "కాంగెన్ వాటర్ డెమోలు, డివైస్ మార్గదర్శకత్వం మరియు అర్థవంతమైన వ్యాపార అవకాశం.",
    call: "కాల్",
    whatsapp: "వాట్సాప్",
    save: "కాంటాక్ట్ సేవ్ చేయండి",
    share: "షేర్",
    book: "అపాయింట్‌మెంట్ బుక్ చేయండి",
    shareCopied: "లింక్ కాపీ అయ్యింది",
    shareText: "హైదరాబాద్‌లో కాంగెన్ వాటర్ డెమోలు, డివైస్ మార్గదర్శకత్వం మరియు వ్యాపార అవకాశం.",
    whatsappMsg: "నమస్కారం విష్ణు గారు, కాంగెన్ వాటర్ గురించి తెలుసుకోవాలనుకుంటున్నాను.",
    portraitAlt: "హైదరాబాద్‌లో ఎనాజిక్ ఇండిపెండెంట్ డిస్ట్రిబ్యూటర్ విష్ణు వర్ధన్ రెడ్డి ఫోటో",
  },
  stats: [
    { value: "20+", label: "తయారీ & వ్యాపారంలో సంవత్సరాలు" },
    { value: "ఫిబ్రవరి 2022", label: "కాంగెన్ ప్రయాణం ప్రారంభం" },
    { value: "~140", label: "ఇప్పటివరకు సహాయపడిన కుటుంబాలు" },
  ],
  about: {
    eyebrow: "నా గురించి",
    title: "ఒక మలుపు, ఒక్కో కుటుంబంతో",
    paragraphs: [
      "నేను 20 సంవత్సరాలకు పైగా బిస్కెట్ తయారీ రంగంలో ఉన్నాను. ఆ సంవత్సరాలలో వ్యాపారంలో విలువైన అనుభవం సంపాదించినా, లోతైన సంతృప్తిని, ఉద్దేశ్యాన్ని ఇచ్చే దాని కోసం ఎప్పుడూ వెతుకుతూనే ఉన్నాను.",
      "ఫిబ్రవరి 2022లో నేను నా కాంగెన్ వాటర్ డివైస్ కొనుగోలు చేశాను, ఆ నిర్ణయం నా జీవితంలో ఒక మలుపు అయ్యింది.",
      "ఈరోజు నా ప్రయాణం ద్వారా సుమారు 140 కుటుంబాలపై సానుకూల ప్రభావం చూపగలిగినందుకు నేను నిజంగా సంతోషంగా ఉన్నాను. ఆ కుటుంబాలు తమ జీవనశైలిపై అవగాహన పెంచుకుని మరింత సంతోషంగా ఉండటం చూడటం నాకు గతంలో ఎన్నడూ లేని ఉద్దేశ్యాన్ని ఇస్తుంది.",
      "నాకు ఈ ప్రయాణం కేవలం వ్యాపారం కాదు. ఇది ప్రజల జీవితాల్లో అర్థవంతమైన మార్పు తీసుకురావడం — ఒక్కో కుటుంబంతో.",
    ],
  },
  why: {
    eyebrow: "ఎందుకు ప్రారంభించాను",
    title: "ఇది మా ఇంట్లోనే మొదలైంది",
    paragraphs: [
      "నా భార్యకు విటిలిగో సంబంధిత చర్మ సమస్య ఉండటం వల్ల నా కాంగెన్ వాటర్ ప్రయాణం ప్రారంభమైంది. ఆరోగ్యకరమైన జీవనశైలికి తోడ్పడే మార్గాలను వెతుకుతూ మేము కాంగెన్ వాటర్ వద్దకు చేరాము.",
      "సుమారు ఆరు నెలల్లో మేము వ్యక్తిగతంగా గణనీయమైన మార్పును గమనించాము, ప్రభావిత చర్మ ప్రాంతంలో సుమారు 80% కవర్ అయ్యింది. ఈ వ్యక్తిగత అనుభవం కాంగెన్ వాటర్ గురించి మరింత నేర్చుకుని, ఇతరులతో పంచుకునేలా నన్ను ప్రేరేపించింది.",
    ],
    disclaimer:
      "ఇది మా కుటుంబ వ్యక్తిగత అనుభవం మాత్రమే. ఫలితాలు వ్యక్తికి వ్యక్తికి మారవచ్చు; ఇది వైద్య సలహా లేదా చికిత్స వాదన కాదు.",
  },
  purpose: {
    eyebrow: "నా లక్ష్యం",
    body: "ఆరోగ్యకరమైన జీవనశైలి ప్రాముఖ్యతపై ప్రజల్లో అవగాహన పెంచడం, అదే సమయంలో అదనపు ఆదాయ అవకాశాన్ని అందించడమే నా లక్ష్యం.",
    tagline: "మెరుగైన జీవనశైలి. మెరుగైన అవకాశాలు. మెరుగైన ఆదాయం.",
  },
  services: {
    eyebrow: "నేను చేసేది",
    title: "నేను స్వయంగా అందించే సేవలు",
    items: [
      {
        title: "కాంగెన్ వాటర్ డెమాన్‌స్ట్రేషన్",
        body: "మీ ఇంట్లో లేదా ఆఫీసులో ప్రత్యక్ష డెమో — తేడాను మీరే స్వయంగా చూడవచ్చు.",
      },
      {
        title: "నీటి నాణ్యత & జీవనశైలి అవగాహన",
        body: "తాగునీటి నాణ్యత, రోజువారీ జీవనశైలి అలవాట్లపై సరళమైన, నిజాయితీ మార్గదర్శకత్వం.",
      },
      {
        title: "డివైస్ మార్గదర్శకత్వం",
        body: "మీ కుటుంబ పరిమాణం, వినియోగం, బడ్జెట్‌కు సరిపోయే ఎనాజిక్ మోడల్ ఎంపికలో సహాయం.",
      },
      {
        title: "ఇన్‌స్టాలేషన్ & కస్టమర్ సపోర్ట్",
        body: "ఇన్‌స్టాలేషన్, మొదటిసారి వినియోగ వివరణ మరియు ఆ తర్వాత కూడా నిరంతర సహకారం.",
      },
      {
        title: "వ్యాపార అవకాశ మార్గదర్శకత్వం",
        body: "అదనపు ఆదాయ మార్గం నిర్మించుకోవాలనుకునే వారికి దశలవారీ మార్గదర్శకత్వం.",
      },
    ],
  },
  journey: {
    eyebrow: "నా ప్రయాణం",
    title: "తయారీ రంగం నుండి కుటుంబ ఆరోగ్యం వైపు",
    items: [
      {
        year: "2002 — 2022",
        title: "బిస్కెట్ తయారీలో రెండు దశాబ్దాలు",
        body: "20 సంవత్సరాలకు పైగా తయారీ వ్యాపారాన్ని నడిపి, అభివృద్ధి చేశాను.",
      },
      {
        year: "ఫిబ్రవరి 2022",
        title: "మొదటి కాంగెన్ వాటర్ డివైస్ కొనుగోలు",
        body: "కుటుంబం కోసం తీసుకున్న నిర్ణయం నా జీవిత దిశనే మార్చింది.",
      },
      {
        year: "2022",
        title: "ఒక వ్యక్తిగత కుటుంబ అనుభవం",
        body: "ఇంట్లో మేము గమనించినది లోతుగా నేర్చుకుని, బహిరంగంగా పంచుకునేలా చేసింది.",
      },
      {
        year: "ఈరోజు",
        title: "~140 కుటుంబాలతో అనుబంధం",
        body: "హైదరాబాద్ అంతటా డెమోలు, ఇన్‌స్టాలేషన్లు మరియు నిరంతర సహకారం.",
      },
      {
        year: "ముందుకు",
        title: "లక్ష్యంతో కూడిన ప్రయాణం",
        body: "ప్రతి నెలా మరిన్ని కుటుంబాలకు అవగాహన, సేవ మరియు అవకాశం.",
      },
    ],
  },
  gallery: {
    eyebrow: "గ్యాలరీ",
    title: "ప్రయాణంలోని క్షణాలు",
    captions: [
      "కాంగెన్ వాటర్ అవగాహన సదస్సు",
      "బిజినెస్ నెట్‌వర్క్ ప్రెజెంటేషన్",
      "ఎగ్జిబిషన్ స్టాల్, హైదరాబాద్",
      "ఒకరితో ఒకరు ప్రత్యక్ష డెమో",
      "డెమో తర్వాత కస్టమర్",
      "ఇంటి ఇన్‌స్టాలేషన్ & హ్యాండోవర్",
      "కుటుంబ అవగాహన సెషన్",
      "కస్టమర్ సంప్రదింపు",
      "వ్యాపార అవకాశ చర్చ",
      "నెట్‌వర్కింగ్ మీట్",
    ],
    categories: {
      All: "అన్నీ",
      Presentations: "ప్రెజెంటేషన్లు",
      Demonstrations: "డెమోలు",
      Installations: "ఇన్‌స్టాలేషన్లు",
      Events: "ఈవెంట్లు",
    },
  },
  testimonials: {
    eyebrow: "అభిప్రాయాలు",
    title: "నేను సేవ చేసిన కుటుంబాల మాటల్లో",
    items: [
      {
        quote:
          "విష్ణు గారు ప్రతిదీ ఓపికగా వివరించి మా ఇంట్లోనే డెమో చేశారు. ఎలాంటి ఒత్తిడి లేదు — స్పష్టమైన సమాచారం మాత్రమే.",
        name: "కస్టమర్, మేడిపల్లి",
      },
      {
        quote: "ఇన్‌స్టాలేషన్, ఫాలో-అప్ సపోర్ట్ చాలా బాగుంది. నెలల తర్వాత కూడా మమ్మల్ని పలకరిస్తుంటారు.",
        name: "కస్టమర్, హైదరాబాద్",
      },
      {
        quote: "ఆయన సొంత కుటుంబ అనుభవమే మమ్మల్ని వినేలా చేసింది. స్క్రిప్ట్ కాదు, నిజమైన అనుభవం చెబుతారు.",
        name: "కస్టమర్, ఉప్పల్",
      },
    ],
    videoTitle: "వీడియో అభిప్రాయాలు",
    videoBody: "కస్టమర్ వీడియోలు అందిన వెంటనే ఇక్కడ చేర్చబడతాయి.",
    videoCta: "రిఫరెన్స్‌లు అడగండి",
    videoMsg: "నమస్కారం విష్ణు గారు, కస్టమర్ అభిప్రాయాలు పంపగలరా?",
  },
  brochure: {
    eyebrow: "బ్రోచర్",
    title: "నా సేవలు, ప్రయాణం మీతో తీసుకెళ్లండి",
    body: "నా కథ, నేను అందించే సేవలు, ఇప్పటివరకు నా ప్రయాణం మరియు సంప్రదింపు వివరాలతో కూడిన రెండు పేజీల PDF బ్రోచర్ — సేవ్ చేసుకోవడానికి లేదా కుటుంబ సభ్యులకు పంపడానికి సులభం.",
    bullets: [
      "సేవలు, ప్రయాణం మరియు ముఖ్య మైలురాళ్లు",
      "సంప్రదింపు వివరాలు",
      "వాట్సాప్‌లో షేర్ చేయడానికి సిద్ధం",
    ],
    download: "బ్రోచర్ డౌన్‌లోడ్ (PDF)",
    request: "వాట్సాప్‌లో అడగండి",
    requestMsg: "నమస్కారం విష్ణు గారు, మీ కాంగెన్ వాటర్ బ్రోచర్ పంపగలరా?",
    meta: "PDF · 2 పేజీలు · ఇంగ్లీష్",
  },
  contact: {
    eyebrow: "సంప్రదించండి",
    title: "ఉచిత డెమో బుక్ చేసుకోండి",
    body: "కాంగెన్ వాటర్ గురించి తెలుసుకోవాలన్నా, డివైస్ ఎంచుకోవాలన్నా, లేదా వ్యాపార అవకాశం గురించి తెలుసుకోవాలన్నా — సంప్రదించండి, మీకు అనుకూలమైన సమయం చూసుకుందాం.",
    chat: "వాట్సాప్‌లో చాట్ చేయండి",
    websiteSoon: "వెబ్‌సైట్ త్వరలో",
    name: "మీ పేరు",
    namePlaceholder: "పూర్తి పేరు",
    phone: "మొబైల్ నంబర్",
    phonePlaceholder: "10 అంకెల మొబైల్ నంబర్",
    email: "ఇమెయిల్ (ఐచ్ఛికం)",
    emailPlaceholder: "you@example.com",
    interest: "నాకు ఆసక్తి ఉన్నది",
    interests: ["కాంగెన్ వాటర్ డెమో", "డివైస్ మార్గదర్శకత్వం", "వ్యాపార అవకాశం", "ఇతరం"],
    message: "సందేశం (ఐచ్ఛికం)",
    messagePlaceholder: "మీరు చెప్పదలచుకున్నది",
    submit: "ఎంక్వైరీ పంపండి",
    preferChat: "చాట్ ఇష్టమా?",
    chatLink: "వాట్సాప్‌లో సందేశం",
    errRequired: "దయచేసి మీ పేరు మరియు మొబైల్ నంబర్ నమోదు చేయండి",
    errSend: "ప్రస్తుతం పంపలేకపోయాము — దయచేసి వాట్సాప్ ఉపయోగించండి",
    success: "ధన్యవాదాలు! విష్ణు గారు త్వరలో మిమ్మల్ని సంప్రదిస్తారు.",
    whatsappMsg: "నమస్కారం విష్ణు గారు, కాంగెన్ వాటర్ గురించి ఒక ఎంక్వైరీ ఉంది.",
    demoMsg: "నమస్కారం విష్ణు గారు, కాంగెన్ వాటర్ డెమో బుక్ చేసుకోవాలనుకుంటున్నాను.",
  },
  booking: {
    eyebrow: "అపాయింట్‌మెంట్లు",
    title: "కాంగెన్ వాటర్ సంప్రదింపు బుక్ చేసుకోండి",
    subtitle:
      "మీకు అనుకూలమైన తేదీ, సమయం ఎంచుకోండి. వాట్సాప్ లేదా ఫోన్ ద్వారా నిర్ధారిస్తాను — డెమో ఎప్పుడూ ఉచితం.",
    back: "పోర్ట్‌ఫోలియోకు తిరిగి",
    name: "మీ పేరు",
    phone: "మొబైల్ నంబర్",
    email: "ఇమెయిల్ (ఐచ్ఛికం)",
    date: "కావలసిన తేదీ",
    time: "కావలసిన సమయం",
    slots: ["ఉదయం (9 – 12)", "మధ్యాహ్నం (12 – 4)", "సాయంత్రం (4 – 8)"],
    mode: "సంప్రదింపు రకం",
    modes: ["మా ఇంట్లో డెమో", "మా ఆఫీసులో", "ఆన్‌లైన్ (వీడియో కాల్)"],
    location: "ప్రాంతం / లొకాలిటీ",
    locationPlaceholder: "ఉదా. మేడిపల్లి, ఉప్పల్, కొంపల్లి",
    notes: "నేను తెలుసుకోవలసినది (ఐచ్ఛికం)",
    notesPlaceholder: "కుటుంబ సభ్యుల సంఖ్య, ప్రస్తుత నీటి ఏర్పాటు, ప్రశ్నలు…",
    submit: "అపాయింట్‌మెంట్ అభ్యర్థించండి",
    errRequired: "దయచేసి పేరు, మొబైల్ నంబర్ మరియు తేదీ నమోదు చేయండి",
    errSend: "ప్రస్తుతం బుక్ చేయలేకపోయాము — దయచేసి వాట్సాప్ ఉపయోగించండి",
    success: "అపాయింట్‌మెంట్ అభ్యర్థన అందింది",
    successBody: "ధన్యవాదాలు! విష్ణు గారు త్వరలో వాట్సాప్ లేదా ఫోన్ ద్వారా నిర్ధారిస్తారు.",
    whatsappInstead: "వాట్సాప్ ఇష్టమా? నేరుగా సందేశం పంపండి",
    whatsappMsg: "నమస్కారం విష్ణు గారు, కాంగెన్ వాటర్ సంప్రదింపు బుక్ చేసుకోవాలనుకుంటున్నాను.",
    assurances: [
      { title: "ఉచిత డెమో", body: "ఎలాంటి ఖర్చు లేదు, కొనాల్సిన బాధ్యత లేదు." },
      { title: "మీకు అనుకూలంగా", body: "ఇల్లు, ఆఫీసు లేదా సులభమైన ఆన్‌లైన్ సెషన్." },
      { title: "నిజాయితీ మార్గదర్శకత్వం", body: "స్పష్టమైన సమాచారం, ఎలాంటి ఒత్తిడి లేదు." },
    ],
  },
  footer: {
    rights: "ఇండిపెండెంట్ ఎనాజిక్ డిస్ట్రిబ్యూటర్. వెబ్‌సైట్ త్వరలో.",
    disclaimer: "ఇక్కడ పంచుకున్న వ్యక్తిగత అనుభవాలు వైద్య సలహా కాదు.",
    call: "కాల్",
    whatsapp: "వాట్సాప్",
    book: "బుక్",
  },
  language: { label: "భాష", english: "English", telugu: "తెలుగు" },
};

export const dictionaries = { en, te };
export type Lang = keyof typeof dictionaries;
