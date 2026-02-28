// Latest News Data for UPSC Preparation
const latestNews = [
    {
        title: "UPSC वार्षिक कैलेंडर 2026 जारी",
        description: "आयोग ने CSE 2026 के लिए कार्यक्रम जारी किया है। प्रीलिम्स मई के अंत में निर्धारित। अब तिथियां जांचें।",
        date: "आज",
        source: "आधिकारिक वेबसाइट",
        url: "#",
        category: "notification"
    },
    {
        title: "DAF-1 फॉर्म जमा करने की अंतिम तिथि",
        description: "मेन्स क्वालीफाईड उम्मीदवारों के लिए डिटेल्ड एप्लीकेशन फॉर्म जमा करने की अंतिम तिथि नजदीक आ रही है।",
        date: "कल",
        source: "अधिसूचना",
        url: "#",
        category: "notification"
    },
    {
        title: "नए वैकल्पिक विषयों के रुझान",
        description: "पिछले साल के परिणामों के विश्लेषण से मानव विज्ञान और PSIR की ओर बदलाव दिखता है।",
        date: "2 दिन पहले",
        source: "विश्लेषण",
        url: "#",
        category: "analysis"
    },
    {
        title: "आर्थिक सर्वेक्षण सारांश PDF",
        description: "आर्थिक सर्वेक्षण 2024-25 का सार डाउनलोड करें। जीएस-3 और निबंध के लिए आवश्यक।",
        date: "1 सप्ताह पहले",
        source: "संसाधन",
        url: "#",
        category: "resource"
    },
    {
        title: "UPSC प्रीलिम्स 2025 रिजल्ट घोषित",
        description: "प्रीलिम्स परीक्षा 2025 का परिणाम जारी कर दिया गया है। आधिकारिक वेबसाइट पर देखें।",
        date: "3 दिन पहले",
        source: "परिणाम",
        url: "#",
        category: "result"
    },
    {
        title: "मेन्स उत्तर लेखन अभ्यास शुरू",
        description: "मेन्स 2025 के लिए विशेष उत्तर लेखन अभ्यास श्रृंखला। रोजाना 2 प्रश्न हल करें।",
        date: "5 दिन पहले",
        source: "तैयारी",
        url: "#",
        category: "preparation"
    },
    {
        title: "नई NCERT पुस्तकें जारी",
        description: "कक्षा 12 की राजनीति विज्ञान की नई NCERT पुस्तकों में बदलाव, UPSC के लिए महत्वपूर्ण।",
        date: "1 सप्ताह पहले",
        source: "NCERT",
        url: "#",
        category: "resource"
    },
    {
        title: "सिविल सेवा दिवस 2025 समारोह",
        description: "21 अप्रैल को सिविल सेवा दिवस पर प्रधानमंत्री का संबोधन और पुरस्कार वितरण।",
        date: "2 सप्ताह पहले",
        source: "कार्यक्रम",
        url: "#",
        category: "event"
    },
    {
        title: "नए UPSC अध्यक्ष नियुक्त",
        description: "संघ लोक सेवा आयोग के नए अध्यक्ष का कार्यभार ग्रहण, आयोग में बदलाव।",
        date: "2 सप्ताह पहले",
        source: "UPSC",
        url: "#",
        category: "notification"
    },
    {
        title: "IFS परीक्षा 2025 तिथियां घोषित",
        description: "भारतीय विदेश सेवा (IFS) परीक्षा 2025 का कार्यक्रम जारी, आवेदन शुरू।",
        date: "3 सप्ताह पहले",
        source: "अधिसूचना",
        url: "#",
        category: "notification"
    }
];

// Alternative data structure with more details
const latestNewsExtended = [
    {
        id: 1,
        title: "UPSC सिविल सेवा परीक्षा 2026 नोटिफिकेशन",
        summary: "UPSC CSE 2026 के लिए अधिसूचना फरवरी 2026 में जारी होगी। आवेदन ऑनलाइन मोड में स्वीकार किए जाएंगे।",
        fullText: "संघ लोक सेवा आयोग (UPSC) द्वारा सिविल सेवा परीक्षा 2026 के लिए अधिसूचना फरवरी 2026 में जारी की जाएगी। इच्छुक उम्मीदवार आधिकारिक वेबसाइट upsconline.nic.in पर आवेदन कर सकेंगे।",
        date: "15 फरवरी 2026",
        source: "UPSC Official",
        category: "notification",
        tags: ["upsc", "notification", "2026"],
        url: "#",
        isImportant: true
    },
    {
        id: 2,
        title: "प्रीलिम्स परीक्षा पैटर्न में बदलाव",
        summary: "UPSC ने प्रीलिम्स परीक्षा के पैटर्न में मामूली बदलाव किए हैं। GS पेपर में अब करंट अफेयर्स से अधिक प्रश्न होंगे।",
        fullText: "नए परीक्षा पैटर्न के अनुसार, सामान्य अध्ययन पेपर I में करंट अफेयर्स सेक्शन को बढ़ाया गया है। अब लगभग 25-30 प्रश्न करंट अफेयर्स पर आधारित होंगे।",
        date: "10 फरवरी 2026",
        source: "UPSC Updates",
        category: "exam-pattern",
        tags: ["prelims", "pattern", "gs"],
        url: "#",
        isImportant: true
    },
    {
        id: 3,
        title: "हिंदी माध्यम के छात्रों के लिए विशेष मार्गदर्शन",
        summary: "हिंदी माध्यम से UPSC की तैयारी कर रहे छात्रों के लिए दृष्टि IAS द्वारा विशेष मेंटरशिप प्रोग्राम शुरू किया गया।",
        fullText: "इस कार्यक्रम के तहत हिंदी माध्यम के छात्रों को उनकी मातृभाषा में विशेष मार्गदर्शन, नोट्स और टेस्ट सीरीज प्रदान की जाएगी।",
        date: "5 फरवरी 2026",
        source: "Drishti IAS",
        category: "coaching",
        tags: ["hindi-medium", "mentorship"],
        url: "#",
        isImportant: false
    },
    {
        id: 4,
        title: "पर्यावरण और पारिस्थितिकी पर नई रिपोर्ट",
        summary: "IPCC की नई रिपोर्ट के अनुसार, भारत में जलवायु परिवर्तन के प्रभाव बढ़ेंगे। UPSC के लिए महत्वपूर्ण।",
        fullText: "इंटरगवर्नमेंटल पैनल ऑन क्लाइमेट चेंज (IPCC) की नवीनतम रिपोर्ट में कहा गया है कि भारत में अगले दशक में चरम मौसम की घटनाओं में वृद्धि होगी।",
        date: "3 फरवरी 2026",
        source: "IPCC",
        category: "environment",
        tags: ["climate-change", "environment", "gs-3"],
        url: "#",
        isImportant: true
    },
    {
        id: 5,
        title: "G20 सम्मेलन में भारत की भूमिका",
        summary: "हाल ही में संपन्न G20 शिखर सम्मेलन में भारत ने डिजिटल पब्लिक इंफ्रास्ट्रक्चर पर जोर दिया।",
        fullText: "G20 सम्मेलन में प्रधानमंत्री ने डिजिटल इंडिया की सफलता को वैश्विक मंच पर रखा और वैश्विक दक्षिण के देशों के लिए भारत के अनुभव को साझा किया।",
        date: "28 जनवरी 2026",
        source: "विदेश मंत्रालय",
        category: "international-relations",
        tags: ["g20", "foreign-policy", "gs-2"],
        url: "#",
        isImportant: true
    }
];
