export const languages = {
  ar: { name: 'العربية', dir: 'rtl' },
  en: { name: 'English', dir: 'ltr' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ar';
export const langs = Object.keys(languages) as Lang[];

export const ui = {
  ar: {
    'site.name': 'أفق',
    'site.tagline': 'استوديو إبداعي',
    'nav.home': 'الرئيسية',
    'nav.work': 'أعمالنا',
    'nav.services': 'خدماتنا',
    'nav.contact': 'تواصل معنا',
    'home.title': 'نصمم ما يتجاوز الأفق',
    'home.lead': 'استوديو إبداعي يصنع هويات بصرية ومواقع وتجارب رقمية للعلامات الطموحة.',
    'home.ctaWork': 'شاهد أعمالنا',
    'home.ctaContact': 'ابدأ مشروعك',
    'home.servicesHeading': 'ماذا نقدم',
    'work.title': 'أعمالنا',
    'work.lead': 'مختارات من المشاريع التي عملنا عليها.',
    'services.title': 'خدماتنا',
    'services.lead': 'من الفكرة إلى الإطلاق، نرافقك في كل خطوة.',
    'contact.title': 'تواصل معنا',
    'contact.lead': 'أخبرنا عن مشروعك وسنعود إليك قريبًا.',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال',
    'footer.rights': 'جميع الحقوق محفوظة.',
  },
  en: {
    'site.name': 'Ofoq',
    'site.tagline': 'Creative Studio',
    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'home.title': 'Designing beyond the horizon',
    'home.lead': 'A creative studio crafting brand identities, websites and digital experiences for ambitious brands.',
    'home.ctaWork': 'See our work',
    'home.ctaContact': 'Start a project',
    'home.servicesHeading': 'What we do',
    'work.title': 'Our work',
    'work.lead': 'A selection of projects we have worked on.',
    'services.title': 'Services',
    'services.lead': 'From idea to launch, we are with you at every step.',
    'contact.title': 'Contact us',
    'contact.lead': 'Tell us about your project and we will get back to you soon.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function useTranslations(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key];
}

/** Build a localized path, e.g. localePath('en', '/work') -> '/en/work/' */
export function localePath(lang: Lang, path = '/') {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return `/${lang}/${clean ? clean + '/' : ''}`;
}

/** Swap the language segment of the current URL. */
export function switchLangPath(pathname: string, to: Lang) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && (langs as string[]).includes(parts[0])) parts.shift();
  return localePath(to, parts.join('/'));
}

export function langStaticPaths() {
  return langs.map((lang) => ({ params: { lang } }));
}
