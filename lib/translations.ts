export type Locale = "ar" | "en";

export type TranslationKeys = {
  // Navbar
  nav_problems: string;
  nav_services: string;
  nav_benefits: string;
  nav_about: string;
  nav_faq: string;
  nav_contact: string;
  nav_projects: string;
  nav_book_call: string;

  // Hero
  hero_kicker: string;
  hero_title_1: string;
  hero_title_accent: string;
  hero_title_2: string;
  hero_subtitle: string;
  hero_cta_book: string;
  hero_cta_how: string;
  hero_card1_title: string;
  hero_card1_desc: string;
  hero_card2_title: string;
  hero_card2_desc: string;
  hero_supporting: string;

  // Problems
  problems_kicker: string;
  problems_title_1: string;
  problems_title_accent: string;
  problems_subtitle: string;
  problems_p1_title: string;
  problems_p1_desc: string;
  problems_p1_pain: string;
  problems_p2_title: string;
  problems_p2_desc: string;
  problems_p2_pain: string;
  problems_p3_title: string;
  problems_p3_desc: string;
  problems_p3_pain: string;
  problems_p4_title: string;
  problems_p4_desc: string;
  problems_p4_pain: string;
  problems_cta: string;
  problems_cta_link: string;

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

  // Benefits
  benefits_kicker: string;
  benefits_title: string;
  benefits_subtitle: string;
  benefits_b1_title: string;
  benefits_b1_desc: string;
  benefits_b1_stat: string;
  benefits_b1_stat_label: string;
  benefits_b2_title: string;
  benefits_b2_desc: string;
  benefits_b2_stat: string;
  benefits_b2_stat_label: string;
  benefits_b3_title: string;
  benefits_b3_desc: string;
  benefits_b3_stat: string;
  benefits_b3_stat_label: string;
  benefits_b4_title: string;
  benefits_b4_desc: string;
  benefits_b5_title: string;
  benefits_b5_desc: string;
  benefits_b5_stat: string;
  benefits_b5_stat_label: string;
  benefits_b6_title: string;
  benefits_b6_desc: string;

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
  contact_title: string;
  contact_subtitle: string;
  contact_email_label: string;
  contact_response_label: string;
  contact_response_value: string;
  contact_available_label: string;
  contact_available_value: string;
  contact_cta_title: string;
  contact_cta_subtitle: string;

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
  faq_q6: string;
  faq_a6: string;
  faq_q7: string;
  faq_a7: string;

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
  nav_benefits: "المميزات",
  nav_about: "من نحن",
  nav_faq: "الاسئلة الشائعة",
  nav_contact: "تواصل معنا",
  nav_projects: "المشاريع",
  nav_book_call: "استشارة مجانية",

  // Hero
  hero_kicker: "أتمتة وتسويق بالذكاء الاصطناعي",
  hero_title_1: "طوّر أعمالك مع",
  hero_title_accent: "ScalaryX",
  hero_title_2: "",
  hero_subtitle:
    "نبني مواقع إلكترونية وأنظمة تسويق وأتمتة أعمال تشتغل مع بعض لتبسيط عملياتك وتساعدك توسّع شغلك.",
  hero_cta_book: "استشارة مجانية",
  hero_cta_how: "شوف إزاي بيشتغل",
  hero_card1_title: "أتمتة بالذكاء الاصطناعي",
  hero_card1_desc:
    "أتمت المهام المتكررة وأدر الم workflowات وبسّط عملياتك باستخدام أنظمة ذكية — عشان تركز على النمو.",
  hero_card2_title: "التسويق الرقمي",
  hero_card2_desc:
    "نمّي البراند بتاعك وجذب عملاء محتملين مؤهلين وحوّل الاهتمام لعملاء حقيقيين باستخدام استراتيجيات تسويق مبنية على بيانات.",
  hero_supporting:
    "من بناء حضورك الرقمي لتحسين رحلة العميل وأتمتة العمليات اليومية، ScalaryX يحوّل العمليات المفككة لأنظمة أذكى وأكتر قابلية للتوسع — عشان تقلل الوقت في إدارة الشغل وتكرس وقت أكتر للنمو.",

  // Problems
  problems_kicker: "المشكلة",
  problems_title_1: "المشكلة دي",
  problems_title_accent: "تعرفها؟",
  problems_subtitle: "دي المشاكل اللي بتقتل نموك كل يوم. احنا بنينا حلول لكل واحدة فيهم.",
  problems_p1_title: "غرق في الشغل المتكرر",
  problems_p1_desc:
    "فريقك بيقضي 25-40 ساعة كل شهر على إدخال البيانات يدوي والمتابعة والعمليات المتكررة — ساعات أنظمة الأتمتة الذكية ممكن تسترجعها فوراً.",
  problems_p1_pain: "وقت ضايع = نمو محدود",
  problems_p2_title: "تحويل ضعيف للمعملاء والمتابعة",
  problems_p2_desc:
    "العملاء المحتملين بيفصلوا بسبب متابعة بطيئة أو غير منتظمة. كل متابعة فاتتك بتحقق خسارة في الإيرادات — عملاء محتملين بيمشوا كل يوم من غير أتمتة.",
  problems_p2_pain: "متابعة فاتت = إيرادات ضايعة",
  problems_p3_title: "تنفيذ بطيء للتسويق والمحتوى",
  problems_p3_desc:
    "إنك تبني محتوى وإعلانات وحملات يدوي بيثّط نموك. وأنت واقف، المنافسين اللي بيستخدموا أنظمة تسويق بالذكاء الاصطناعي بيمشوا 3 أضعاف أسرع.",
  problems_p3_pain: "تنفيذ بطيء = حضور سلبي في السوق",
  problems_p4_title: "كفاءة تسويقية ضعيفة",
  problems_p4_desc:
    "الميزانية بتضيع على الإعلانات والمحتوى مش منتظم والحملات مش محسّنة. بتجيب زيارات بس مش بيكفيك عملاء محتملين مؤهلين.",
  problems_p4_pain: "ميزانية ضايعة = عائد متراجع",
  problems_cta: "احنا بنزيل كل المشاكل دي — بأنظمة مبنية خصيصاً لبيزنسك.",
  problems_cta_link: "شوف إزاي بيشتغل",

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
  services_final_cta: "ابدأ نظام النمو بتاعك",

  // Benefits
  benefits_kicker: "ليه تأتمت؟",
  benefits_title: "المميزات واضحة",
  benefits_subtitle:
    "أي بيزنس يطبّق أتمتة بالذكاء الاصطناعي بيكتسب ميزة تراكمية على المنافسين اللي لسه بيشتغلوا يدوي.",
  benefits_b1_title: "وفّر 50-80% من وقتك",
  benefits_b1_desc:
    "استبدل ساعات الشغل اليدوي بأنظمة أوتوماتيكية بتنفّذ المهام في ثواني — freeing فريقك يركز على أنشطة عالية التأثير.",
  benefits_b1_stat: "80%",
  benefits_b1_stat_label: "وقت موفر",
  benefits_b2_title: "زوّد الإنتاجية",
  benefits_b2_desc:
    "أنظمة الـ AI بتاعتك شغّالة 24/7، مش بتاخد بريك، وبتتعامل مع مزامين شغل في نفس الوقت — بتضاعف إنتاجية فريقك من غير ما تزوّد الموظفين.",
  benefits_b2_stat: "3X",
  benefits_b2_stat_label: "إنتاجية",
  benefits_b3_title: "قلل أخطاء الإنسان",
  benefits_b3_desc:
    "المهام الأوتوماتيكية بتتّبع القواعد بدقة كل مرة. مفيش متابعة نسيتها، مفيش أخطاء copy-paste، مفيش تناقض في بياناتك.",
  benefits_b3_stat: "~0",
  benefits_b3_stat_label: "معدل الخطأ",
  benefits_b4_title: "عائد استثمار أعلى",
  benefits_b4_desc:
    "بطل تخمين وابدأ تنمّي. كل دولار بتنفقه بيتعقّب ويتحسّن ويتحوّل لنتائج قابلة للقياس.",
  benefits_b5_title: "قلل التكاليف التشغيلية",
  benefits_b5_desc:
    "استبدل العمالة اليدوية المتكررة بالأتمتة الذكية. قلّل التكاليف الثابتة وأزيل العوائق ونمّي بيزنسك من غير ما تزوّد مصروفاتك.",
  benefits_b5_stat: "60%",
  benefits_b5_stat_label: "تخفيض التكاليف",
  benefits_b6_title: "استهداف دقيق",
  benefits_b6_desc:
    "وصّل للناس اللي محتاجين منتجك — بالسن والاهتمام والسلوك والموقع.",

  // About
  about_title: "مبنين لأتمتة الذكاء الاصطناعي والتسويق بالأداء",
  about_p1:
    "ScalaryX شركة حديثة تتمحور حول النمو، بتساعد الشركات تنمو باستخدام أنظمة أتمتة بالذكاء الاصطناعي واستراتيجيات تسويق رقمي عالية الأداء.",
  about_p2:
    "بنصمم ونبني أنظمة أتمتة ذكية بتحل الشغل اليدوي وتُحسّن عمليات الأعمال وتولّد نمو ثابت من خلال الأتمتة والتسويق المبني على البيانات.",
  about_p3: "هدفنا بسيط: نساعد الشركات تشتغل أذكى وتنمو أسرع وتتوسع من غير حدود.",
  about_p4:
    "سواء كانت الأتمتة على العمليات أو تحسين أداء التسويق، ScalaryX بتقدم أنظمة عملية بتحقق نتائج حقيقية.",
  about_cta_services: "شوف الخدمات",
  about_highlight1_value: "50+",
  about_highlight1_label: "أنظمة AI تم بناؤها",
  about_highlight2_value: "10,000+",
  about_highlight2_label: "ساعة تم توفيرها للعملاء",
  about_highlight3_value: "12+",
  about_highlight3_label: "قطاع تم خدمته",

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
  testimonials_subtitle: "نتائج حقيقية من شركات بتستخدم أنظمة أتمتة ScalaryX",
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
  testimonials_stat1: "50+ أتمتة تم بناؤها",
  testimonials_stat2: "10,000+ ساعة تم توفيرها",
  testimonials_stat3: "12+ قطاع تم خدمته",

  // Contact
  contact_title: "تواصل معنا",
  contact_subtitle:
    "عندك سؤال أو عايز تكتشف إزاي الأتمتة أو التسويق ممكن يفيد بيزنسك؟ ابعتلنا رسالة وهنرد عليك خلال 24 ساعة.",
  contact_email_label: "الإيميل",
  contact_response_label: "وقت الرد",
  contact_response_value: "خلال 24 ساعة",
  contact_available_label: "التوفر",
  contact_available_value: "عالمي · عن بُعد",
  contact_cta_title: "جاهز تبدأ؟",
  contact_cta_subtitle: "هنبنى نظام الأتمتة بتاعك",

  // FAQ
  faq_kicker: "الاسئلة الشائعة",
  faq_title: "الاسئلة الشائعة",
  faq_subtitle: "كل اللي محتاج تعرفه عن أتمتة الذكاء الاصطناعي وإزاي ممكن نساعد بيزنسك ينمو.",
  faq_q1: "إيه هي أتمتة الذكاء الاصطناعي؟",
  faq_a1:
    "أتمتة الذكاء الاصطناعي إنك تستخدم أدوات ذكية — زي ChatGPT و n8n و Zapier — تتعامل مع مهام العمل المتكررة أوتوماتيكياً. ده بيشمل الرد على العملاء وإرسال الإيميلات وتوليد العملاء المحتملين وإدارة الـ workflowات، كل ده من غير جهد يدوي.",
  faq_q2: "إزاي الأتمتة ممكن تساعد بيزنسي؟",
  faq_a2:
    "الأتمتة بتحرّر فريقك من المهام المستهلكة للوقت عن طريق التعامل مع ردود خدمة العملاء وتوليد العملاء المحتملين وحملات التسويق بالإيميل ونشر المحتوى على السوشيال — عشان تركز على النمو بدل العمليات.",
  faq_q3: "أتمتة بتكلف كام؟",
  faq_a3:
    "السعر بيعتمد على احتياجات بيزنسك وتعقيد النظام. الأتمتة البسيطة ممكن تبدأ بميزانية منخفضة، بينما الـ workflowات المعقدة بالـ AI بتتسعّر حسب التكاملات والأدوات المطلوبة.",
  faq_q4: "بتتعاملوا مع الشركات الصغيرة؟",
  faq_a4:
    "أكيد. في الواقع، أتمتة Businesses من أقوى المميزات للشركات الصغيرة والمتوسطة — بتخليها تتنافس مع الشركات الكبيرة من غير ما محتاجة فريق كبير.",
  faq_q5: "بتستخدموا إيه من الأدوات؟",
  faq_a5:
    "بنستخدم stack تقني حديث بيشمل n8n لأتمتة الـ workflow و Zapier و Make للتكاملات و OpenAI APIs للمهام بالـ AI و Google Sheets و CRMs ومنصات التسويق بالإيميل الرائدة.",
  faq_q6: "إزاي بتشتغل أتمتة التسويق الرقمي؟",
  faq_a6:
    "بنجمع استراتيجيات تسويق رقمي مجربة مع أدوات أتمتة ناخد عملاء محتملين أوتوماتيكياً ونبعت تسلسلات إيميل مخصصة ونتبع سلوك العملاء ونشغل حملات بجهد يدوي بسيط.",
  faq_q7: "بياخد قد إيه الوقت؟",
  faq_a7:
    "معظم أنظمة الأتمتة بتكون جاهزة في خلال أيام لأسبوعين حسب نطاق وتعقيد متطلبات بيزنسك.",

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
  nav_benefits: "Benefits",
  nav_about: "About",
  nav_faq: "FAQ",
  nav_contact: "Contact",
  nav_projects: "Projects",
  nav_book_call: "Free Consultation",

  // Hero
  hero_kicker: "AI Automation & Workflow Systems",
  hero_title_1: "Scale Your Business Operations with",
  hero_title_accent: "ScalaryX",
  hero_title_2: "",
  hero_subtitle:
    "We build websites, marketing systems, and business automation that work together to streamline your operations and help your business scale.",
  hero_cta_book: "Free Consultation",
  hero_cta_how: "See How It Works",
  hero_card1_title: "AI Automation",
  hero_card1_desc:
    "Automate repetitive tasks, manage workflows, and streamline your operations using smart AI systems — so you can focus on growth.",
  hero_card2_title: "Digital Marketing",
  hero_card2_desc:
    "Grow your brand, attract qualified leads, and convert attention into customers using data-driven marketing strategies.",
  hero_supporting:
    "From building your digital presence to improving customer journeys and automating day-to-day operations, ScalaryX turns disconnected processes into smarter, scalable systems — so your business can spend less time managing work and more time growing.",

  // Problems
  problems_kicker: "The Problem",
  problems_title_1: "Sound",
  problems_title_accent: "Familiar?",
  problems_subtitle: "These are the exact problems killing your growth every day. We've built solutions for all of them.",
  problems_p1_title: "Drowning in Repetitive Work",
  problems_p1_desc:
    "Your team wastes 25–40 hours every month on manual data entry, follow-ups, and repetitive operations — hours that smart AI automation systems can reclaim instantly.",
  problems_p1_pain: "Lost time = lost scalability",
  problems_p2_title: "Poor Lead Conversion & Follow-Up",
  problems_p2_desc:
    "Leads go cold due to slow or inconsistent follow-ups. Every missed follow-up costs you revenue — potential customers slip away every single day without automation.",
  problems_p2_pain: "Missed follow-ups = lost revenue",
  problems_p3_title: "Slow Marketing & Content Execution",
  problems_p3_desc:
    "Creating content, ads, and campaigns manually slows your growth. While you're stuck, competitors using AI-driven marketing systems are moving 3x faster and scaling harder.",
  problems_p3_pain: "Slow execution = weak market presence",
  problems_p4_title: "Marketing Inefficiency",
  problems_p4_desc:
    "Ad spend is wasted, content isn't consistent, and campaigns aren't optimized. You're getting traffic but not enough qualified leads or conversions.",
  problems_p4_pain: "Wasted spend = shrinking ROI",
  problems_cta: "We eliminate all of these — with systems built specifically for your business.",
  problems_cta_link: "See how",

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
  services_final_cta: "Build Your Growth System",

  // Benefits
  benefits_kicker: "Why Automate",
  benefits_title: "The Benefits Are Clear",
  benefits_subtitle:
    "Every business that implements AI automation gains a compounding advantage over competitors who are still doing things manually.",
  benefits_b1_title: "Save 50–80% of Your Time",
  benefits_b1_desc:
    "Replace hours of manual work with automated systems that execute tasks in seconds — freeing your team to focus on high-impact activities.",
  benefits_b1_stat: "80%",
  benefits_b1_stat_label: "Time Saved",
  benefits_b2_title: "Increase Productivity",
  benefits_b2_desc: "Your AI systems work 24/7, never take breaks, and handle multiple workflows simultaneously — multiplying your team's output without multiplying headcount.",
  benefits_b2_stat: "3X",
  benefits_b2_stat_label: "Output",
  benefits_b3_title: "Reduce Human Errors",
  benefits_b3_desc:
    "Automated workflows follow rules precisely every time. No forgotten follow-ups, no copy-paste mistakes, no inconsistencies in your data or messaging.",
  benefits_b3_stat: "~0",
  benefits_b3_stat_label: "Error Rate",
  benefits_b4_title: "Higher ROI",
  benefits_b4_desc:
    "Stop guessing, start growing. Every dollar you spend is tracked, optimized, and turned into measurable results.",
  benefits_b5_title: "Cut Operational Costs",
  benefits_b5_desc:
    "Replace repetitive human labor with intelligent automation. Reduce overhead, eliminate bottlenecks, and scale your business without scaling your expenses.",
  benefits_b5_stat: "60%",
  benefits_b5_stat_label: "Cost Reduction",
  benefits_b6_title: "Laser-Sharp Targeting",
  benefits_b6_desc:
    "Reach the exact people who need your product — by age, interest, behavior, and location.",

  // About
  about_title: "Built for AI Automation & Performance Marketing",
  about_p1:
    "ScalaryX is a modern growth-focused startup helping businesses scale using AI automation systems and high-performance digital marketing strategies.",
  about_p2:
    "We design and build smart workflow automation systems that replace manual work, optimize business operations, and generate consistent growth through automation and data-driven marketing.",
  about_p3: "Our goal is simple: help businesses work smarter, grow faster, and scale without limits.",
  about_p4:
    "Whether it's automating operations or improving marketing performance, ScalaryX delivers practical systems that produce real results.",
  about_cta_services: "See Services",
  about_highlight1_value: "50+",
  about_highlight1_label: "AI Automations Built",
  about_highlight2_value: "10,000+",
  about_highlight2_label: "Hours Saved for Clients",
  about_highlight3_value: "12+",
  about_highlight3_label: "Industries Served",

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
  testimonials_subtitle: "Real results from businesses using ScalaryX automation systems",
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
  testimonials_stat1: "50+ Automations Built",
  testimonials_stat2: "10k+ Hours Saved",
  testimonials_stat3: "12+ Industries Served",

  // Contact
  contact_title: "Get in touch",
  contact_subtitle:
    "Have a question or want to explore what automation or marketing could do for your business? Drop us a message and we'll get back to you within 24 hours.",
  contact_email_label: "Email",
  contact_response_label: "Response Time",
  contact_response_value: "Within 24 hours",
  contact_available_label: "Available",
  contact_available_value: "Worldwide · Remote",
  contact_cta_title: "Ready to get started?",
  contact_cta_subtitle: "Let's build your automation system",

  // FAQ
  faq_kicker: "FAQ",
  faq_title: "Frequently Asked Questions",
  faq_subtitle: "Everything you need to know about AI automation and how we can help your business grow.",
  faq_q1: "What is AI Automation?",
  faq_a1:
    "AI Automation is using artificial intelligence tools — like ChatGPT, n8n, and Zapier — to handle repetitive business tasks automatically. This includes replying to customers, sending emails, generating leads, and managing workflows, all without manual effort.",
  faq_q2: "How can automation help my business?",
  faq_a2:
    "Automation frees your team from time-consuming tasks by handling things like customer support replies, lead generation, email marketing campaigns, and social media posting — so you can focus on growth instead of operations.",
  faq_q3: "How much does automation cost?",
  faq_a3:
    "Pricing depends on your business needs and the complexity of the system. Simple automations can start at a low budget, while advanced AI-powered workflows are scoped and priced based on integrations and tools required.",
  faq_q4: "Do you work with small businesses?",
  faq_a4:
    "Absolutely. In fact, business automation is one of the most powerful advantages for small and medium-sized businesses — it lets them compete with larger companies without needing a large team.",
  faq_q5: "What tools do you use?",
  faq_a5:
    "We use a modern tech stack including n8n for workflow automation, Zapier and Make for integrations, OpenAI APIs for AI-driven tasks, Google Sheets, CRMs, and leading email marketing platforms.",
  faq_q6: "How does digital marketing automation work?",
  faq_a6:
    "We combine proven digital marketing strategies with automation tools to capture leads automatically, send personalized email sequences, track customer behavior, and run campaigns with minimal manual effort.",
  faq_q7: "How long does setup take?",
  faq_a7:
    "Most automation systems are ready within a few days to a few weeks, depending on the scope and complexity of your business requirements.",

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
