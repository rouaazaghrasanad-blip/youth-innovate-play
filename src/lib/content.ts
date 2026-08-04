export const REGISTER_URL = "https://forms.gle/YOUR-GOOGLE-FORM-ID"; // TODO: replace with the real Google Form URL

export type Lang = "en" | "ar";

export const content = {
  en: {
    dir: "ltr" as const,
    nav: {
      home: "Home",
      about: "About",
      journey: "Journey",
      themes: "Themes",
      who: "Who Can Apply",
      timeline: "Timeline",
      faq: "FAQ",
      register: "Register",
      switch: "العربية",
      menu: "Open menu",
    },
    hero: {
      badge: "An innovation journey for young creators",
      title1: "Learn. Create. Play.",
      title2: "Inspire Change.",
      subtitle:
        "PLAY 4 IMPACT turns young talent into game makers. Train with experts, build digital and board games around real social issues, and showcase a working prototype.",
      primary: "Register Now",
      secondary: "Explore the Journey",
      stats: [
        { value: "40", label: "Participants trained" },
        { value: "7", label: "Teams" },
        { value: "30h", label: "Training" },
      ],
      illustrationAlt:
        "Illustration of young people designing board games, coding and drawing game characters together",
    },
    about: {
      eyebrow: "About the program",
      title: "Games with a purpose, built by young people",
      body:
        "PLAY 4 IMPACT is an interactive program that empowers young people to create educational and awareness games — digital and non-digital — around issues that matter in their communities.",
      body2:
        "It runs as one connected path: specialised training first, then a competitive innovation camp where multi-disciplinary teams turn ideas into playable prototypes.",
      points: [
        { title: "Learn by making", text: "Hands-on training in game design, systems and prototyping." },
        { title: "Mixed teams", text: "Designers, developers, artists and community voices in one room." },
        { title: "Real impact", text: "Every game carries a message built to change behaviour." },
      ],
      illustrationAlt: "Illustration of young people brainstorming around a lightbulb made of puzzle pieces",
    },
    themes: {
      eyebrow: "Challenge themes",
      title: "Pick a challenge worth playing",
      note: "5–6 final themes will be selected for the camp.",
      items: [
        { title: "Physical Health & Wellbeing", text: "Health awareness for Adolescents and Youth.", icon: "HeartPulse" },
        { title: "Safe Digital Communication", text: "Digital protection and online safety.", icon: "ShieldCheck" },
        { title: "Climate Action", text: "Sustainability and the environment.", icon: "Leaf" },
        { title: "Mental Health", text: "Wellbeing and managing pressure.", icon: "Brain" },
        { title: "Citizenship & Participation", text: "Community engagement and cohesion.", icon: "Users" },
      ],
    },
    who: {
      eyebrow: "Who can apply",
      title: "Built for creators of every discipline",
      note: "Young women and young people are strongly encouraged to apply, as are persons with disabilities. please add in the beginning (adolescents girls and boys...)",
      items: [
        { title: "Game Designers", text: "Shape the rules and the play.", icon: "Dices" },
        { title: "Game Developers", text: "Bring the game to life in code.", icon: "Code2" },
        { title: "Community Activists & Specialists", text: "Ground the game in real issues.", icon: "Megaphone" },
        { title: "Game Storytellers", text: "Write the worlds and the message.", icon: "BookOpen" },
        { title: "Game Enthusiasts", text: "Curious about how games are made.", icon: "Gamepad2" },
        { title: "Graphic Designers & Artists", text: "Joining at the innovation camp.", icon: "Palette" },
      ],
    },
    journey: {
      eyebrow: "Program journey",
      title: "Seven stages, one prototype",
      items: [
        { title: "Registration", text: "Open call for young creators.", icon: "PenLine", date: "" },
        { title: "Pre-training", text: "4 days, 30 hours of foundations.", icon: "GraduationCap", date: "24–27 Aug" },
        { title: "Selection", text: "The strongest 30 move forward.", icon: "Filter", date: "" },
        { title: "Innovation Camp", text: "3 intensive days of building.", icon: "Rocket", date: "1–3 Sep" },
        { title: "Prototype Development", text: "Refine, playtest, iterate.", icon: "Wrench", date: "" },
        { title: "Final Showcase", text: "Games meet their audience.", icon: "Sparkles", date: "23 Sep" },
        { title: "Awards", text: "Jury and audience prizes.", icon: "Trophy", date: "" },
      ],
    },
    training: {
      eyebrow: "Training",
      title: "Four days that change how you see games",
      meta: "24–27 Aug ",
      items: [
        { day: "Day 1", title: "Introduction to Game Design", text: "Game elements, types and what keeps players playing.", icon: "Puzzle" },
        { day: "Day 2", title: "Gameplay, Systems & Concept", text: "Mechanics, player journey and a mini design document.", icon: "Layers" },
        { day: "Day 3", title: "Prototyping & Playtesting", text: "Paper, board and digital prototypes, then iterate.", icon: "FlaskConical" },
        { day: "Day 4", title: "Social Impact & Intervention Design", text: "Turning issues into behaviour-changing play.", icon: "HeartHandshake" },
      ],
    },
    camp: {
      eyebrow: "Innovation camp",
      title: "1–3 September",
      items: [
        { day: "Day 1", title: "Inspiration & Challenge Framing", icon: "Lightbulb" },
        { day: "Day 2", title: "Concept Development", icon: "Compass" },
        { day: "Day 3", title: "Prototype, Refinement & Pitch", icon: "Presentation" },
      ],
    },
    showcase: {
      eyebrow: "Final showcase",
      title: "23 September",
      items: ["Prototype Showcase", "Audience Voting", "Networking Session", "Awards & Closing"],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Good to know",
      items: [
        { q: "Do I need coding experience?", a: "No. Designers, storytellers, artists, activists and developers are all welcome." },
        { q: "How many people are selected?", a: "40 participants join the training, and the strongest 30 continue to the innovation camp." },
        { q: "Target age group?", a: "Adolescent girls and boys, and young women and men aged 16 to 29 years." },
        { q: "Do I apply as a team or alone?", a: "You apply individually. Teams are built during the program." },
        { q: "Is there a cost to participate?", a: "No. Participation in the program is free." },
      ],
    },
    cta: {
      eyebrow: "Your turn",
      title: "Your idea deserves to be played",
      text: "Registration is open for young creators ready to learn, build and make an impact.",
      button: "Register Now",
      illustrationAlt: "Illustration of young people presenting game prototypes at a showcase",
    },
    footer: {
      tagline: "An innovation journey where young people create games with real social impact.",
      contactLabel: "Contact",
      email: "info@sanadyouth.org",
      social: "Follow",
      rights: "All rights reserved.",
    },
  },
  ar: {
    dir: "rtl" as const,
    nav: {
      home: "الرئيسية",
      about: "عن البرنامج",
      journey: "الرحلة",
      themes: "المحاور",
      who: "من يمكنه التقديم",
      timeline: "الجدول الزمني",
      faq: "الأسئلة",
      register: "سجّل الآن",
      switch: "English",
      menu: "فتح القائمة",
    },
    hero: {
      badge: "رحلة ابتكار لليافعين واليافعات والشباب",
      title1: "تعلّم. ابتكر. العب.",
      title2: "واصنع التغيير.",
      subtitle:
        "play 4 impact برنامج يحوّل الطاقات الشابة إلى صنّاع ألعاب. تدرّب مع خبراء، طوّر ألعاباً رقمية ولوحية حول قضايا مجتمعية حقيقية، واعرض نموذجك الأولي.",
      primary: "سجّل الآن",
      secondary: "اكتشف الرحلة",
      stats: [
        { value: "40", label: "مشارك ومشاركة" },
        { value: "7", label: "فرق" },
        { value: "30", label: "ساعة تدريب" },
      ],
      illustrationAlt: "رسم توضيحي لشباب يصممون ألعاباً لوحية ورقمية معاً",
    },
    about: {
      eyebrow: "عن البرنامج",
      title: "ألعاب هادفة يصنعها الشباب",
      body:
        "play 4 im برنامج تفاعلي يمكّن اليافعين واليافعات والشباب من تطوير ألعاب تعليمية وتوعوية، رقمية وغير رقمية، تعالج قضايا محورية في مجتمعاتهم.",
      body2:
        "ينفَّذ كمسار متكامل: تأهيل تدريبي متخصص أولاً، ثم معسكر ابتكار تنافسي تتحول فيه الأفكار إلى نماذج ألعاب قابلة للتجريب ضمن فرق متعددة التخصصات.",
      points: [
        { title: "تعلّم بالممارسة", text: "تدريب عملي على تصميم الألعاب والأنظمة والنمذجة." },
        { title: "فرق متنوعة", text: "مصممون ومطورون وفنانون وأصوات مجتمعية في مكان واحد." },
        { title: "أثر حقيقي", text: "كل لعبة تحمل رسالة قادرة على تغيير السلوك." },
      ],
      illustrationAlt: "رسم توضيحي لشباب يعصفون ذهنياً حول مصباح من قطع أحجية",
    },
    themes: {
      eyebrow: "محاور التحدي",
      title: "اختر تحدياً يستحق أن يُلعب",
      note: "سيتم اعتماد 5–6 محاور نهائية ضمن المعسكر.",
      items: [
        { title: "الصحة الجسدية والتوعية", text: "الوعي الصحي لليافعين واليافعات.", icon: "HeartPulse" },
        { title: "التواصل الرقمي الآمن", text: "الحماية الرقمية والأمان على الإنترنت.", icon: "ShieldCheck" },
        { title: "العمل المناخي", text: "الاستدامة البيئية والمناخ.", icon: "Leaf" },
        { title: "الصحة النفسية", text: "العافية النفسية وإدارة الضغوط.", icon: "Brain" },
        { title: "المواطنة والمشاركة", text: "المشاركة المجتمعية والتماسك.", icon: "Users" },
      ],
    },
    who: {
      eyebrow: "من يمكنه التقديم",
      title: "مساحة لكل التخصصات الإبداعية",
      note: "نشجّع اليافعين واليافعات والشباب والأشخاص ذوي الإعاقة على التقديم.",
      items: [
        { title: "مصممو الألعاب", text: "يصوغون القواعد وتجربة اللعب.", icon: "Dices" },
        { title: "مطورو الألعاب", text: "يحوّلون الفكرة إلى لعبة تعمل.", icon: "Code2" },
        { title: "ناشطون واختصاصيون مجتمعيون", text: "يربطون اللعبة بالقضايا الحقيقية.", icon: "Megaphone" },
        { title: "رواة قصص الألعاب", text: "يكتبون العوالم والرسالة.", icon: "BookOpen" },
        { title: "المهتمون بصناعة الألعاب", text: "شغوفون بمعرفة كيف تُصنع الألعاب.", icon: "Gamepad2" },
        { title: "المصممون البصريون والفنانون", text: "ينضمون في معسكر الابتكار.", icon: "Palette" },
      ],
    },
    journey: {
      eyebrow: "رحلة البرنامج",
      title: "سبع مراحل نحو نموذج أولي",
      items: [
        { title: "التسجيل", text: "دعوة مفتوحة للمبدعين والمبدعات.", icon: "PenLine", date: "" },
        { title: "التدريب التأهيلي", text: "4 أيام و30 ساعة تأسيسية.", icon: "GraduationCap", date: "24–27 آب" },
        { title: "الاختيار", text: "انتقال أفضل 30 مشاركاً ومشاركة.", icon: "Filter", date: "" },
        { title: "معسكر الابتكار", text: "3 أيام مكثفة من البناء.", icon: "Rocket", date: "1–3 أيلول" },
        { title: "تطوير النموذج الأولي", text: "تحسين واختبار وتكرار.", icon: "Wrench", date: "" },
        { title: "المعرض الختامي", text: "الألعاب تلتقي جمهورها.", icon: "Sparkles", date: "23 أيلول" },
        { title: "الجوائز", text: "جوائز لجنة التحكيم والجمهور.", icon: "Trophy", date: "" },
      ],
    },
    training: {
      eyebrow: "التدريب",
      title: "أربعة أيام تغيّر نظرتك إلى الألعاب",
      meta: "24–27 آب ",
      items: [
        { day: "اليوم الأول", title: "مدخل إلى تصميم الألعاب", text: "عناصر اللعبة وأنواعها وما يبقي اللاعب متفاعلاً.", icon: "Puzzle" },
        { day: "اليوم الثاني", title: "الميكانيكيات وبناء المفهوم", text: "الأنظمة ورحلة اللاعب ووثيقة تصميم مبسطة.", icon: "Layers" },
        { day: "اليوم الثالث", title: "النمذجة الأولية والاختبار", text: "نماذج ورقية ولوحية ورقمية ثم التحسين.", icon: "FlaskConical" },
        { day: "اليوم الرابع", title: "تصميم التدخلات المجتمعية", text: "تحويل القضايا إلى تجارب لعب تغيّر السلوك.", icon: "HeartHandshake" },
      ],
    },
    camp: {
      eyebrow: "معسكر الابتكار",
      title: "1–3 أيلول",
      items: [
        { day: "اليوم الأول", title: "الإلهام وتأطير التحديات", icon: "Lightbulb" },
        { day: "اليوم الثاني", title: "تطوير المفهوم", icon: "Compass" },
        { day: "اليوم الثالث", title: "النموذج الأولي والتحسين والعرض", icon: "Presentation" },
      ],
    },
    showcase: {
      eyebrow: "المعرض الختامي",
      title: "23 أيلول",
      items: ["معرض النماذج الأولية", "تصويت الجمهور", "جلسة التشبيك", "الجوائز والختام"],
    },
    faq: {
      eyebrow: "الأسئلة الشائعة",
      title: "معلومات تهمّك",
      items: [
        { q: "هل أحتاج خبرة في البرمجة؟", a: "لا. المصممون والرواة والفنانون والناشطون والمطورون جميعهم مرحّب بهم." },
        { q: "ماهي الفئة العمرية المطلوبة", a: "اليافعون واليافعات  الشباب والشابات من عمر 16 ل 29." },
        { q: "كم عدد المقبولين؟", a: "40 مشاركاً ومشاركة في التدريب، ويتابع أفضل 30 إلى معسكر الابتكار." },
        { q: "هل أسجّل بشكل فردي أم ضمن فريق؟", a: "التسجيل فردي، وتُبنى الفرق خلال البرنامج." },
        { q: "هل هناك رسوم للمشاركة؟", a: "لا، المشاركة في البرنامج مجانية." },
      ],
    },
    cta: {
      eyebrow: "دورك الآن",
      title: "فكرتك تستحق أن تُلعب",
      text: "التسجيل مفتوح للمبدعين والمبدعات المستعدين للتعلّم والبناء وصناعة الأثر.",
      button: "سجّل الآن",
      illustrationAlt: "رسم توضيحي لشباب يعرضون نماذج ألعابهم في المعرض الختامي",
    },
    footer: {
      tagline: "رحلة ابتكار يصنع فيها الشباب ألعاباً ذات أثر مجتمعي حقيقي.",
      contactLabel: "التواصل",
      email: "info@sanadyouth.org",
      social: "تابعنا",
      rights: "جميع الحقوق محفوظة.",
    },
  },
};

export type Content = (typeof content)["en"];

export const getContent = (lang: Lang): Content => content[lang] as unknown as Content;
