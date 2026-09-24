export type Locale = "ar" | "en";

export type TranslationKeys = {
  // Navbar
  nav_problems: string;
  nav_services: string;
  nav_process: string;
  nav_benefits: string;
  nav_about: string;
  nav_faq: string;
  nav_contact: string;
  nav_projects: string;
  nav_book_call: string;

  // Hero
  hero_title_1: string;
  hero_title_accent: string;
  hero_title_2: string;
  hero_subtitle: string;
  hero_cta_book: string;
  hero_cta_how: string;
  hero_supporting: string;

  // Problems — The Noise
  problems_noise_kicker: string;
  problems_noise_calm1: string;
  problems_noise_calm2: string;
  problems_noise_w1: string;
  problems_noise_w2: string;
  problems_noise_w3: string;
  problems_noise_w4: string;
  problems_noise_w5: string;
  problems_noise_w6: string;
  problems_noise_w7: string;
  problems_noise_resolve1: string;
  problems_noise_resolve2: string;

  // Services
  services_kicker: string;
  services_title: string;
  services_subtitle: string;
  services_stage1_title: string;
  services_stage1_desc: string;
  services_stage2_title: string;
  services_stage2_desc: string;
  services_stage3_title: string;
  services_stage3_desc: string;
  services_stage4_title: string;
  services_stage4_desc: string;
  services_stage5_title: string;
  services_stage5_desc: string;
  services_final_title: string;
  services_final_l1: string;
  services_final_l2: string;
  services_final_l3: string;
  services_final_l4: string;
  services_final_l5: string;
  services_final_connect: string;
  services_final_cta: string;

  // Process — Assemble
  process_kicker: string;
  process_title: string;
  process_p1: string;
  process_p2: string;
  process_p3: string;
  process_p4: string;
  process_p5: string;
  process_p6: string;
  process_end1: string;
  process_end2: string;

  // Receipt — Case results
  receipt_kicker: string;
  receipt_title: string;
  receipt_before: string;
  receipt_after: string;
  receipt_r1_before: string;
  receipt_r1_after: string;
  receipt_r2_before: string;
  receipt_r2_after: string;
  receipt_r3_before: string;
  receipt_r3_after: string;
  receipt_r4_before: string;
  receipt_r4_after: string;
  receipt_r5_before: string;
  receipt_r5_after: string;

  // Capabilities
  cap_kicker: string;
  cap_lead: string;
  cap_w1: string;
  cap_w2: string;
  cap_w3: string;
  cap_w4: string;
  cap_w5: string;
  cap_w6: string;

  // Final CTA — The Decision
  cta_l1: string;
  cta_l2: string;
  cta_l3: string;

  // Benefits — The Shift
  benefits_shift_kicker: string;
  benefits_shift_title: string;
  benefits_s1_from: string;
  benefits_s1_to: string;
  benefits_s2_from: string;
  benefits_s2_to: string;
  benefits_s3_from: string;
  benefits_s3_to: string;
  benefits_s4_from: string;
  benefits_s4_to: string;
  benefits_s5_from: string;
  benefits_s5_to: string;
  benefits_shift_end1: string;
  benefits_shift_end2: string;

  // Why Scale — The Layer
  layer_kicker: string;
  layer_title: string;
  layer_support: string;
  layer_center: string;
  layer_l1: string;
  layer_l2: string;
  layer_l3: string;
  layer_l4: string;

  // About
  about_title: string;
  about_p1: string;
  about_p2: string;
  about_p3: string;
  about_p4: string;
  about_cta_services: string;
  about_highlight1_value: string;
  about_highlight1_label: string;
  about_highlight2_value: string;
  about_highlight2_label: string;
  about_highlight3_value: string;
  about_highlight3_label: string;
  about_stats_label: string;

  // Blog
  blog_title: string;
  blog_subtitle: string;
  blog_post1_title: string;
  blog_post1_excerpt: string;
  blog_post1_tag: string;
  blog_post2_title: string;
  blog_post2_excerpt: string;
  blog_post2_tag: string;
  blog_post3_title: string;
  blog_post3_excerpt: string;
  blog_post3_tag: string;

  // Testimonials
  testimonials_title: string;
  testimonials_subtitle: string;
  testimonial1_quote: string;
  testimonial1_name: string;
  testimonial1_role: string;
  testimonial2_quote: string;
  testimonial2_name: string;
  testimonial2_role: string;
  testimonial3_quote: string;
  testimonial3_name: string;
  testimonial3_role: string;
  testimonial4_quote: string;
  testimonial4_name: string;
  testimonial4_role: string;
  testimonial5_quote: string;
  testimonial5_name: string;
  testimonial5_role: string;
  testimonials_stat1: string;
  testimonials_stat2: string;
  testimonials_stat3: string;

  // Contact
  contact_email_label: string;
  contact_response_label: string;
  contact_response_value: string;

  // FAQ
  faq_kicker: string;
  faq_title: string;
  faq_subtitle: string;
  faq_q1: string;
  faq_a1: string;
  faq_q2: string;
  faq_a2: string;
  faq_q3: string;
  faq_a3: string;
  faq_q4: string;
  faq_a4: string;
  faq_q5: string;
  faq_a5: string;

  // Footer
  footer_desc: string;
  footer_services: string;
  footer_svc1: string;
  footer_svc2: string;
  footer_svc3: string;
  footer_svc4: string;
  footer_marketing: string;
  footer_mkt1: string;
  footer_mkt2: string;
  footer_mkt3: string;
  footer_company: string;
  footer_cpy1: string;
  footer_cpy2: string;
  footer_cpy3: string;
  footer_cpy4: string;
  footer_rights: string;
  footer_privacy: string;
  footer_terms: string;

  // Interactive Projects
  interactive_kicker: string;
  interactive_title: string;
  interactive_subtitle: string;
  interactive_view_project: string;
  interactive_view_all: string;

  // CTAs & Phone
  book_btn_default: string;
  cta_free_structure: string;
  cta_free_structure_short: string;
  contact_phone: string;

  // Misc
  founder: string;
};

const ar: TranslationKeys = {
  // Navbar
  nav_problems: "المشاكل",
  nav_services: "الخدمات",
  nav_process: "آلية العمل",
  nav_benefits: "المميزات",
  nav_about: "من نحن",
  nav_faq: "الاسئلة الشائعة",
  nav_contact: "تواصل معنا",
  nav_projects: "المشاريع",
  nav_book_call: "استشارة مجانية",

  // Hero
  hero_title_1: "طوّر أعمالك مع",
  hero_title_accent: "ScalaryX",
  hero_title_2: "",
  hero_subtitle:
    "نبني مواقع إلكترونية وأنظمة تسويق وأتمتة أعمال تشتغل مع بعض لتبسيط عملياتك وتساعدك توسّع شغلك.",
  hero_cta_book: "استشارة مجانية",
  hero_cta_how: "شوف إزاي بيشتغل",
  hero_supporting:
    "من بناء حضورك الرقمي لتحسين رحلة العميل وأتمتة العمليات اليومية، ScalaryX يحوّل العمليات المفككة لأنظمة أذكى وأكتر قابلية للتوسع — عشان تقلل الوقت في إدارة الشغل وتكرس وقت أكتر للنمو.",

  // Problems — The Noise
  problems_noise_kicker: "الضوضاء",
  problems_noise_calm1: "بيزنسك شغال.",
  problems_noise_calm2: "بس هل النظام شغال؟",
  problems_noise_w1: "شغل يدوي",
  problems_noise_w2: "عملاء ضايعين",
  problems_noise_w3: "متابعة متأخرة",
  problems_noise_w4: "أدوات متفرقة",
  problems_noise_w5: "مهام متكررة",
  problems_noise_w6: "حضور رقمي ضعيف",
  problems_noise_w7: "مفيش نظام واضح",
  problems_noise_resolve1: "المشكلة مش في المجهود.",
  problems_noise_resolve2: "المشكلة في النظام.",

  // Services
  services_kicker: "التوسّع في الأعمال بالذكاء الاصطناعي",
  services_title: "نبني أعمالاً تتوسّع.",
  services_subtitle:
    "نجمع بين الاستراتيجية والتقنية والذكاء الاصطناعي وأنظمة النمو لتحويل الأعمال إلى عمليات أذكى وأكثر قابلية للتوسّع.",
  services_stage1_title: "تجارب رقمية تبيع",
  services_stage1_desc:
    "مواقع وصفحات هبوط ومنصات وواجهات وتجارب رقمية مبنية حول أهداف البيزنس.",
  services_stage2_title: "يجدونك. ويختارونك.",
  services_stage2_desc:
    "التسويق والمحتوى والحملات المدفوعة وتوليد العملاء وأنظمة اكتساب العملاء.",
  services_stage3_title: "حوّل الاهتمام إلى فرصة",
  services_stage3_desc:
    "قنوات بيع وتحسين التحويل وتربية العملاء المحتملين ورحلات العميل.",
  services_stage4_title: "اجعل بيزنسك يعمل بذكاء",
  services_stage4_desc:
    "أتمتة العمليات وأتمتة سير العمل والتكاملات وأنظمة CRM والأنظمة التشغيلية.",
  services_stage5_title: "وظّف الذكاء الاصطناعي",
  services_stage5_desc:
    "وكلاء AI ومساعدون أذكياء وسلاسل عمل ذكية وأنظمة AI مخصصة تحسّن طريقة عمل البيزنس.",
  services_final_title: "بيزنس واحد. نظام نمو واحد.",
  services_final_l1: "موقعك بيجيب الناس.",
  services_final_l2: "التسويق بيبني الفرص.",
  services_final_l3: "أنظمةك بتحوّلهم لعملاء.",
  services_final_l4: "الأتمتة بتشغّل كل حاجة.",
  services_final_l5: "والذكاء الاصطناعي بيخلي العملية كلها أذكى.",
  services_final_connect: "بنربط كل حاجة مع بعض.",

  // Process — Assemble
  process_kicker: "آلية العمل",
  process_title: "بنركّب النظام.",
  process_p1: "استراتيجية",
  process_p2: "تصميم",
  process_p3: "تقنية",
  process_p4: "تسويق",
  process_p5: "أتمتة",
  process_p6: "ذكاء اصطناعي",
  process_end1: "مبنٍ حول بيزنسك.",
  process_end2: "مش حوالين طريقة شغلنا.",

  // Receipt — Case results
  receipt_kicker: "الإثبات",
  receipt_title: "إيه اللي اتغير بعد ما النظام اتبنى؟",
  receipt_before: "قبل",
  receipt_after: "بعد",
  receipt_r1_before: "3 أيام في البحث عن عملاء",
  receipt_r1_after: "أقل من 15 دقيقة",
  receipt_r2_before: "ساعات شغل يدوي",
  receipt_r2_after: "بيتم في ثواني",
  receipt_r3_before: "أدوات متفرقة",
  receipt_r3_after: "نظام واحد متصل",
  receipt_r4_before: "ميزانية إعلانات مش محسّنة",
  receipt_r4_after: "حملات محسّنة",
  receipt_r5_before: "تقارير يدوية",
  receipt_r5_after: "مراقبة أوتوماتيكية",

  // Capabilities
  cap_kicker: "إيه اللي ممكن نغيّره؟",
  cap_lead: "نقدر نساعدك توصل لأكتر",
  cap_w1: "عملاء محتملين",
  cap_w2: "عملاء",
  cap_w3: "كفاءة",
  cap_w4: "سرعة",
  cap_w5: "تحكم",
  cap_w6: "نمو",

  // Final CTA — The Decision
  cta_l1: "بيزنسك مش محتاج أدوات أكتر.",
  cta_l2: "محتاج نظام أحسن.",
  cta_l3: "يلا نبنيه.",
  services_final_cta: "ابدأ نظام النمو بتاعك",

  // Benefits — The Shift
  benefits_shift_kicker: "التحول",
  benefits_shift_title: "بيزنسك لما النظام يشتغل.",
  benefits_s1_from: "يدوي",
  benefits_s1_to: "أوتوماتيكي",
  benefits_s2_from: "متفرق",
  benefits_s2_to: "متصل",
  benefits_s3_from: "بطيء",
  benefits_s3_to: "أسرع",
  benefits_s4_from: "رد فعل",
  benefits_s4_to: "استباقي",
  benefits_s5_from: "تخمين",
  benefits_s5_to: "ذكاء",
  benefits_shift_end1: "احتكاك أقل.",
  benefits_shift_end2: "زخم أكثر.",

  // Why Scale — The Layer
  layer_kicker: "الطبقة",
  layer_title: "مش بنضيف أداة جديدة. بنبني الطبقة اللي تربطهم كلهم.",
  layer_support: "موقع، تسويق، أتمتة، وذكاء اصطناعي — تحت نظام واحد.",
  layer_center: "BUSINESS",
  layer_l1: "EXPERIENCE",
  layer_l2: "MARKETING",
  layer_l3: "AUTOMATION",
  layer_l4: "AI",

  // About
  about_title: "نبني لنجعل بيزنسك يشتغل أفضل وينمو أسرع",
  about_p1:
    "ScalaryX بتساعد الشركات تبني حضور رقمي أقوى وعمليات أذكى من خلال مواقع إلكترونية عالية الأداء وتسويق رقمي استراتيجي وأنظمة أتمتة عملية.",
  about_p2:
    "نجمع موقعك والتسويق وعمليات بيزنسك مع بعض لنصنع مسار أوضح من جذب العملاء لإنجاز الشغل اللي ورا الكواليس.",
  about_p3:
    "من بناء موقع يحوّل الزوار لعملاء، لبناء أنظمة تسويق تجيب الفرص المناسبة، لأتمتة العمليات المتكررة — بنبني الحلول حول طريقة بيزنسك الفعلية في الشغل.",
  about_p4: "الهدف بسيط: احتكاك أقل، أداء أفضل، وبизنس جاهز يتوسع.",
  about_cta_services: "شوف الخدمات",
  about_highlight1_value: "50+",
  about_highlight1_label: "عملاء تم خدمتهم",
  about_highlight2_value: "10,000+",
  about_highlight2_label: "ساعة تم توفيرها للعملاء",
  about_highlight3_value: "12+",
  about_highlight3_label: "قطاع تم خدمته",
  about_stats_label: "ScalaryX في أرقام",

  // Blog
  blog_title: "من المدونة",
  blog_subtitle:
    "أدلة عملية على أتمتة الذكاء الاصطناعي وأنظمة الـ workflow والنمو التسويقي — مبنية لأصحابBusiness اللي عايزين نتائج.",
  blog_post1_title: "إزاي أتمتة الذكاء الاصطناعي بتحوّل الشركات الصغيرة في 2026",
  blog_post1_excerpt:
    "اكتشف إزاي أدوات أتمتة الـ workflow الذكية زي n8n و Zapier بتساعد الشركات الصغيرة توفّر ساعات كل أسبوع وتنمو أسرع من أي وقت.",
  blog_post1_tag: "أتمتة AI",
  blog_post2_title: "الدليل الشامل لأتمتة n8n للشركات النامية",
  blog_post2_excerpt:
    "اتعلم إزاي أتمتة n8n بتربط أدواتك المفضلة وتزيل المهام اليدوية وتخلق أنظمة أعمال قوية — من غير ما تكتب كود معقد.",
  blog_post2_tag: "أتمتة n8n",
  blog_post3_title: "استراتيجيات أتمتة التسويق اللي فعلاً بتزوّد الإيرادات",
  blog_post3_excerpt:
    "استكشف تكتيكات أتمتة التسويق الرقمي المجربة اللي بتاخد عملاء محتملين وتربّي العملاء وتحوّل الزيارات لعملاء دافعين أوتوماتيكياً.",
  blog_post3_tag: "أتمتة التسويق",

  // Testimonials
  testimonials_title: "النتائج",
  testimonials_subtitle: "نتائج حقيقية من الشركات اللي ساعدناها تنمو",
  testimonial1_quote:
    "ScalaryX بنيلنا نظام بيشتغل كل حاجة 24/ كنا بنقضي 3 أيام ندور على عملاء، دلوقتي بياخد أقل من 15 دقيقة. بجد من أحسن الاستثمارات اللي عملناها.",
  testimonial1_name: "أحمد محمود",
  testimonial1_role: "مدير تنفيذي، شركة تقنية",
  testimonial2_quote:
    "الشغل مع ScalaryX وفّرلنا وقت وجهد مجنون. مهام كانت بتاخد ساعات دلوقتي أوتوماتيكية وبتتم في ثواني. شغل بجودة عالية جداً.",
  testimonial2_name: "سارة جمال",
  testimonial2_role: "مديرة تسويق، وكالة إبداعية",
  testimonial3_quote:
    "النظام اللي بنوه قلّل أخطاءنا تقريباً لصفر وربط كل الأدوات اللي بنستخدمها مع بعض. شغل احترافي جداً، أرشحه لأي حد عايز يتوسع.",
  testimonial3_name: "مصطفى كمال",
  testimonial3_role: "مؤسس متجر إلكتروني",
  testimonial4_quote:
    "ScalaryX ساعدونا نحسّن أداء الإعلانات بشكل كبير. حملاتنا دلوقتي محسّنة أوتوماتيكياً، مما قلّل تكاليف الإعلانات وخلّى النتائج أسرع وأكتر كفاءة.",
  testimonial4_name: "يوسف ليلى",
  testimonial4_role: "قائد التسويق بالأداء",
  testimonial5_quote:
    "من أكبر التغييرات بالنسبة لنا كانت أتمتة التسويق. دلوقتي بنوفر وقت كبير في التقارير والمراقبة، وكل حاجة بتشتغل أسرع وأوضح وأكتر كفاءة.",
  testimonial5_name: "نور رضا",
  testimonial5_role: "مديرة تسويق رقمي",
  testimonials_stat1: "50+ عميل تم خدمتهم",
  testimonials_stat2: "10,000+ ساعة تم توفيرها",
  testimonials_stat3: "12+ قطاع تم خدمته",

  // Contact
  contact_email_label: "الإيميل",
  contact_response_label: "وقت الرد",
  contact_response_value: "خلال 24 ساعة",

  // FAQ
  faq_kicker: "نظام مفتوح",
  faq_title: "اسألنا مباشرة.",
  faq_subtitle: "أجابات قصيرة من غير لف.",
  faq_q1: "محتاج AI أصلاً؟",
  faq_a1: "بس في المواضع اللي بتعمل قيمة حقيقية لبيزنسك.",
  faq_q2: "بتبنيوا مواقع بس؟",
  faq_a2: "لأ. بنبني النظام اللي حوالين الموقع — تسويق وأتمتة وربط بينهم.",
  faq_q3: "تقدروا تشتغلوا مع الأدوات اللي عندنا؟",
  faq_a3: "أيوة. بنربط اللي شغال ونستبدل اللي مش شغال.",
  faq_q4: "التكلفة بتعتمد على إيه؟",
  faq_a4: "على نطاق الشغل والنتائج المطلوبة. الأنظمة البسيطة تبدأ بميزانية خفيفة، والمشاريع الأكبر بتتقاس حسب الهدف منها.",
  faq_q5: "بياخد قد إيه الوقت؟",
  faq_a5: "معظم الأنظمة بتكون جاهزة في أيام لأسبوعين حسب النطاق والتعقيد.",

  // Footer
  footer_desc:
    "وكالة أتمتة ذكاء اصطناعي وتسويق رقمي بتساعد الشركات توفّر الوقت وتقلل الأخطاء وتتوسع أسرع بأنظمة ذكية وأداء تسويقي عالي.",
  footer_services: "الخدمات",
  footer_svc1: "أنظمة أتمتة بالذكاء الاصطناعي",
  footer_svc2: "إدارة العملاء المحتملين",
  footer_svc3: "أتمتة المحتوى",
  footer_svc4: "وكلاء ذكاء اصطناعي مخصصين",
  footer_marketing: "التسويق",
  footer_mkt1: "استراتيجية التسويق الرقمي",
  footer_mkt2: "الإعلانات المدفوعة وتوليد العملاء",
  footer_mkt3: "قنوات وتحسين التحويل",
  footer_company: "الشركة",
  footer_cpy1: "من نحن",
  footer_cpy2: "المميزات",
  footer_cpy3: "استشارة مجانية",
  footer_cpy4: "تواصل معنا",
  footer_rights: "جميع الحقوق محفوظة.",
  footer_privacy: "سياسة الخصوصية",
  footer_terms: "شروط الخدمة",

  // Interactive Projects
  interactive_kicker: "المشاريع التفاعلية",
  interactive_title: "استكشف عروضنا التفاعلية",
  interactive_subtitle: "اضغط على أي مشروع تشوف دراسة الحالة وتفتح التجربة التفاعلية الحية.",
  interactive_view_project: "شوف المشروع",
  interactive_view_all: "شوف كل المشاريع",

  // CTAs & Phone
  book_btn_default: "استشارة مجانية",
  cta_free_structure: "احصل علي هيكله مجانيه لمشروعك",
  cta_free_structure_short: "استشرنا مجانًا",
  contact_phone: "01105920342",

  // Misc
  founder: "مؤسس",
};

const en: TranslationKeys = {
  // Navbar
  nav_problems: "Problems",
  nav_services: "Services",
  nav_process: "Process",
  nav_benefits: "Benefits",
  nav_about: "About",
  nav_faq: "FAQ",
  nav_contact: "Contact",
  nav_projects: "Projects",
  nav_book_call: "Free Consultation",

  // Hero
  hero_title_1: "Scale Your Business Operations with",
  hero_title_accent: "ScalaryX",
  hero_title_2: "",
  hero_subtitle:
    "We build websites, marketing systems, and business automation that work together to streamline your operations and help your business scale.",
  hero_cta_book: "Free Consultation",
  hero_cta_how: "See How It Works",
  hero_supporting:
    "From building your digital presence to improving customer journeys and automating day-to-day operations, ScalaryX turns disconnected processes into smarter, scalable systems — so your business can spend less time managing work and more time growing.",

  // Problems — The Noise
  problems_noise_kicker: "The Noise",
  problems_noise_calm1: "Your business is working.",
  problems_noise_calm2: "But is the system working?",
  problems_noise_w1: "MANUAL WORK",
  problems_noise_w2: "MISSED LEADS",
  problems_noise_w3: "SLOW FOLLOW-UP",
  problems_noise_w4: "DISCONNECTED TOOLS",
  problems_noise_w5: "REPETITIVE TASKS",
  problems_noise_w6: "WEAK ONLINE PRESENCE",
  problems_noise_w7: "NO CLEAR SYSTEM",
  problems_noise_resolve1: "The problem isn't effort.",
  problems_noise_resolve2: "It's the system.",

  // Services
  services_kicker: "Scale Business with AI",
  services_title: "We Build Businesses That Scale.",
  services_subtitle:
    "We combine strategy, technology, AI and growth systems to turn businesses into smarter, more scalable operations.",
  services_stage1_title: "Digital Experiences That Sell",
  services_stage1_desc:
    "Websites, landing pages, platforms, UX/UI and digital experiences built around business goals.",
  services_stage2_title: "Get Found. Get Chosen.",
  services_stage2_desc:
    "Marketing, content, paid campaigns, lead generation and customer acquisition systems.",
  services_stage3_title: "Turn Attention Into Opportunity",
  services_stage3_desc:
    "Funnels, conversion optimization, lead nurturing and customer journeys.",
  services_stage4_title: "Make Your Business Run Smarter",
  services_stage4_desc:
    "Business automation, workflow automation, integrations, CRM systems and operational systems.",
  services_stage5_title: "Put AI to Work",
  services_stage5_desc:
    "AI agents, AI assistants, intelligent workflows and custom AI systems that improve how the business operates.",
  services_final_title: "One Business. One Growth System.",
  services_final_l1: "Your website brings people in.",
  services_final_l2: "Your marketing creates opportunities.",
  services_final_l3: "Your systems convert them.",
  services_final_l4: "Your automation keeps everything moving.",
  services_final_l5: "Your AI makes the whole operation smarter.",
  services_final_connect: "We connect it all.",

  // Process — Assemble
  process_kicker: "The Process",
  process_title: "Assemble the system.",
  process_p1: "STRATEGY",
  process_p2: "DESIGN",
  process_p3: "TECHNOLOGY",
  process_p4: "MARKETING",
  process_p5: "AUTOMATION",
  process_p6: "AI",
  process_end1: "Built around your business.",
  process_end2: "Not around our process.",

  // Receipt — Case results
  receipt_kicker: "The Receipt",
  receipt_title: "What changed after the system was built?",
  receipt_before: "BEFORE",
  receipt_after: "AFTER",
  receipt_r1_before: "3 days finding clients",
  receipt_r1_after: "Under 15 minutes",
  receipt_r2_before: "Hours of manual tasks",
  receipt_r2_after: "Done in seconds",
  receipt_r3_before: "Scattered tools",
  receipt_r3_after: "One connected system",
  receipt_r4_before: "Unoptimized ad spend",
  receipt_r4_after: "Optimized campaigns",
  receipt_r5_before: "Manual reporting",
  receipt_r5_after: "Automated monitoring",

  // Capabilities
  cap_kicker: "What can we change?",
  cap_lead: "We can help you get more",
  cap_w1: "LEADS",
  cap_w2: "CUSTOMERS",
  cap_w3: "EFFICIENCY",
  cap_w4: "SPEED",
  cap_w5: "CONTROL",
  cap_w6: "GROWTH",

  // Final CTA — The Decision
  cta_l1: "Your business doesn't need more tools.",
  cta_l2: "It needs a better system.",
  cta_l3: "Let's build it.",
  services_final_cta: "Build Your Growth System",

  // Benefits — The Shift
  benefits_shift_kicker: "The Shift",
  benefits_shift_title: "Your business, when the system works.",
  benefits_s1_from: "MANUAL",
  benefits_s1_to: "AUTOMATED",
  benefits_s2_from: "SCATTERED",
  benefits_s2_to: "CONNECTED",
  benefits_s3_from: "SLOW",
  benefits_s3_to: "FASTER",
  benefits_s4_from: "REACTIVE",
  benefits_s4_to: "PROACTIVE",
  benefits_s5_from: "GUESSWORK",
  benefits_s5_to: "INTELLIGENCE",
  benefits_shift_end1: "Less friction.",
  benefits_shift_end2: "More momentum.",

  // Why Scale — The Layer
  layer_kicker: "The Layer",
  layer_title: "We don't add another tool. We build the layer that connects them.",
  layer_support: "Website, marketing, automation, and AI — under one system.",
  layer_center: "BUSINESS",
  layer_l1: "EXPERIENCE",
  layer_l2: "MARKETING",
  layer_l3: "AUTOMATION",
  layer_l4: "AI",

  // About
  about_title: "Built to Make Your Business Work Better and Grow Faster",
  about_p1:
    "ScalaryX helps businesses build a stronger digital presence and smarter operations through high-performance websites, strategic digital marketing, and practical automation systems.",
  about_p2:
    "We bring your website, marketing, and business processes together to create a smoother path from attracting customers to managing the work behind the scenes.",
  about_p3:
    "From building a website that converts, to creating marketing systems that bring in the right opportunities, to automating repetitive operations — we build solutions around how your business actually works.",
  about_p4: "The goal is simple: less friction, better performance, and a business that is ready to scale.",
  about_cta_services: "See Services",
  about_highlight1_value: "50+",
  about_highlight1_label: "Clients Served",
  about_highlight2_value: "10,000+",
  about_highlight2_label: "Hours Saved for Clients",
  about_highlight3_value: "12+",
  about_highlight3_label: "Industries Served",
  about_stats_label: "ScalaryX at a glance",

  // Blog
  blog_title: "From the blog",
  blog_subtitle:
    "Practical guides on AI automation, workflow systems, and marketing growth — built for business owners who want results.",
  blog_post1_title: "How AI Automation Is Transforming Small Businesses in 2026",
  blog_post1_excerpt:
    "Discover how smart workflow automation tools like n8n and Zapier are helping small businesses save hours every week and scale faster than ever.",
  blog_post1_tag: "AI Automation",
  blog_post2_title: "The Complete Guide to n8n Workflow Automation for Growing Companies",
  blog_post2_excerpt:
    "Learn how n8n automation connects your favorite tools, eliminates manual tasks, and creates powerful business systems — without writing complex code.",
  blog_post2_tag: "n8n Automation",
  blog_post3_title: "Marketing Automation Strategies That Actually Drive Revenue",
  blog_post3_excerpt:
    "Explore proven digital marketing automation tactics that capture leads, nurture prospects, and turn traffic into paying customers on autopilot.",
  blog_post3_tag: "Marketing Automation",

  // Testimonials
  testimonials_title: "Results",
  testimonials_subtitle: "Real results from the businesses we've helped grow",
  testimonial1_quote:
    "ScalaryX built us a system that runs everything 24/7. We used to spend 3 days finding clients, now it takes less than 15 minutes. Honestly one of the best investments we've made.",
  testimonial1_name: "Ahmed Mahmoud",
  testimonial1_role: "CEO, Tech Company",
  testimonial2_quote:
    "Working with ScalaryX saved us an insane amount of time and effort. Tasks that used to take hours are now fully automated and done in seconds. Really high-quality work.",
  testimonial2_name: "Sara Gamal",
  testimonial2_role: "Marketing Manager, Creative Agency",
  testimonial3_quote:
    "The system they built reduced our errors to almost zero and connected all the tools we use together. Very professional work, highly recommended for anyone serious about scaling.",
  testimonial3_name: "Mostafa Kamal",
  testimonial3_role: "E-commerce Founder",
  testimonial4_quote:
    "ScalaryX helped us significantly improve our ad performance. Our campaigns are now optimized automatically, which reduced our ad costs and made results much faster and more efficient.",
  testimonial4_name: "Youssef Laila",
  testimonial4_role: "Performance Marketing Lead",
  testimonial5_quote:
    "One of the biggest changes for us was marketing automation. We now save a huge amount of time on reporting and monitoring, and everything runs faster, cleaner, and more efficiently.",
  testimonial5_name: "Nour Reda",
  testimonial5_role: "Digital Marketing Manager",
  testimonials_stat1: "50+ Clients Served",
  testimonials_stat2: "10k+ Hours Saved",
  testimonials_stat3: "12+ Industries Served",

  // Contact
  contact_email_label: "Email",
  contact_response_label: "Response Time",
  contact_response_value: "Within 24 hours",

  // FAQ
  faq_kicker: "Open System",
  faq_title: "Ask us straight.",
  faq_subtitle: "Short answers, no runaround.",
  faq_q1: "Do we need AI?",
  faq_a1: "Only where it creates real value for the business.",
  faq_q2: "Do you only build websites?",
  faq_a2: "No. We build the system around them — marketing, automation, and the connections between them.",
  faq_q3: "Can you work with our existing tools?",
  faq_a3: "Yes. We connect what already works and replace what doesn't.",
  faq_q4: "What does a system cost?",
  faq_a4: "It depends on scope and outcomes. Simple systems start lean; larger builds are scoped around the results you need.",
  faq_q5: "How long does it take?",
  faq_a5: "Most systems go live in a few days to a couple of weeks, depending on scope and complexity.",

  // Footer
  footer_desc:
    "AI Automation & Marketing Agency helping businesses save time, reduce errors, and scale faster with intelligent systems and high-performance marketing.",
  footer_services: "Services",
  footer_svc1: "AI Automation Systems",
  footer_svc2: "Lead Management",
  footer_svc3: "Content Automation",
  footer_svc4: "Custom AI Agents",
  footer_marketing: "Marketing",
  footer_mkt1: "Digital Marketing Strategy",
  footer_mkt2: "Paid Ads & Lead Generation",
  footer_mkt3: "Conversion Optimization Funnels",
  footer_company: "Company",
  footer_cpy1: "About",
  footer_cpy2: "Benefits",
  footer_cpy3: "Free Consultation",
  footer_cpy4: "Contact",
  footer_rights: "All rights reserved.",
  footer_privacy: "Privacy Policy",
  footer_terms: "Terms of Service",

  // Interactive Projects
  interactive_kicker: "Interactive Projects",
  interactive_title: "Explore Our Interactive Demos",
  interactive_subtitle: "Click on any project to view its case study and open the live interactive experience.",
  interactive_view_project: "View Project",
  interactive_view_all: "View All Projects",

  // CTAs & Phone
  book_btn_default: "Free Consultation",
  cta_free_structure: "Get a Free Structure",
  cta_free_structure_short: "Get a Free Structure",
  contact_phone: "01105920342",

  // Misc
  founder: "Founder",
};

export const translations: Record<Locale, TranslationKeys> = { ar, en };
