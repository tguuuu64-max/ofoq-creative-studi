import type { Lang } from './ui';

type Localized = Record<Lang, string>;

export const services: { title: Localized; body: Localized }[] = [
  {
    title: { ar: 'الهوية البصرية', en: 'Brand identity' },
    body: {
      ar: 'شعارات وأنظمة بصرية متكاملة تعبّر عن شخصية علامتك.',
      en: 'Logos and complete visual systems that express your brand.',
    },
  },
  {
    title: { ar: 'تصميم وتطوير المواقع', en: 'Web design & development' },
    body: {
      ar: 'مواقع سريعة وثنائية اللغة تعمل على كل الأجهزة.',
      en: 'Fast, bilingual websites that work on every device.',
    },
  },
  {
    title: { ar: 'المحتوى والحملات', en: 'Content & campaigns' },
    body: {
      ar: 'محتوى مرئي وحملات رقمية تصل إلى جمهورك.',
      en: 'Visual content and digital campaigns that reach your audience.',
    },
  },
];

// Placeholder projects: replace with real case studies.
export const projects: { title: Localized; category: Localized; color: string }[] = [
  { title: { ar: 'مشروع أول', en: 'Project one' }, category: { ar: 'هوية بصرية', en: 'Branding' }, color: 'from-amber-400 to-orange-600' },
  { title: { ar: 'مشروع ثانٍ', en: 'Project two' }, category: { ar: 'موقع إلكتروني', en: 'Website' }, color: 'from-sky-400 to-indigo-600' },
  { title: { ar: 'مشروع ثالث', en: 'Project three' }, category: { ar: 'حملة رقمية', en: 'Campaign' }, color: 'from-emerald-400 to-teal-700' },
  { title: { ar: 'مشروع رابع', en: 'Project four' }, category: { ar: 'تغليف', en: 'Packaging' }, color: 'from-rose-400 to-fuchsia-700' },
];
