import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

export type Language = 'en' | 'bg' | 'ru';

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'bg', label: 'Български', flag: '🇧🇬' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
];

const translations = {
  en: {
    header: {
      links: [
        { link: '#home', label: 'Home' },
        { link: '#about', label: 'About Me' },
        { link: '#services', label: 'Services' },
        { link: '#projects', label: 'Projects' },
        { link: '#contact', label: 'Contact' },
      ],
      downloadCv: 'Download CV',
      language: 'Language',
      toggleTheme: 'Toggle color scheme',
    },
    welcome: {
      hi: 'Hi I am',
      name: 'Stefani Dimitrova',
      role: 'UI & UX\nDesigner',
      intro: 'I design modern, fast, and user-friendly websites that work beautifully on every device.',
      hire: 'Hire Me',
    },
    about: {
      title: 'About Me',
      text:
        'I craft interfaces that feel light, clear, and purposeful. From concept to delivery, I focus on usability, speed, and a polished visual finish.',
      skills: [
        { label: 'Website Design', value: 85 },
        { label: 'Website Development', value: 90 },
        { label: 'App Design', value: 80 },
      ],
    },
    services: {
      title: 'Services',
      subtitle: 'Clean design systems, fast delivery, and pixel-level care for your next product.',
      cards: [
        {
          title: 'Website Design',
          description: 'Strategic website design focused on clarity, brand consistency, and usability.',
        },
        {
          title: 'Web Development',
          description: 'Reliable and efficient web solutions aligned with business goals and scalability.',
        },
        {
          title: 'App Design',
          description: 'Functional and intuitive app design with a strong focus on user experience.',
        },
      ],
    },
    projects: {
      title: 'My Projects',
      subtitle: 'A curated selection of recent landing pages and product concepts.',
    },
    contact: {
      title: "Let's Design Together",
      text: 'Tell me about your project and I will respond with a clear plan and timeline.',
      emailPlaceholder: 'Enter your email',
      contactCta: 'Contact Me',
      emailButton: 'Email',
      linkedinButton: 'LinkedIn',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
  bg: {
    header: {
      links: [
        { link: '#home', label: 'Начало' },
        { link: '#about', label: 'За мен' },
        { link: '#services', label: 'Услуги' },
        { link: '#projects', label: 'Проекти' },
        { link: '#contact', label: 'Контакт' },
      ],
      downloadCv: 'Свали CV',
      language: 'Език',
      toggleTheme: 'Смени тема',
    },
    welcome: {
      hi: 'Здравейте, аз съм',
      name: 'Stefani Dimitrova',
      role: 'UI & UX\nДизайнер',
      intro: 'Създавам модерни, бързи и удобни за потребителя сайтове, които изглеждат отлично на всяко устройство.',
      hire: 'Наеми ме',
    },
    about: {
      title: 'За мен',
      text:
        'Създавам интерфейси, които са леки, ясни и целенасочени. От концепция до реализация се фокусирам върху използваемост, скорост и изискан визуален финал.',
      skills: [
        { label: 'Уеб дизайн', value: 85 },
        { label: 'Уеб разработка', value: 90 },
        { label: 'Дизайн на приложения', value: 80 },
      ],
    },
    services: {
      title: 'Услуги',
      subtitle: 'Чисти дизайн системи, бърза доставка и пикселна прецизност за следващия ви продукт.',
      cards: [
        {
          title: 'Уеб дизайн',
          description: 'Стратегически уеб дизайн с фокус върху яснота, консистентност на бранда и използваемост.',
        },
        {
          title: 'Уеб разработка',
          description: 'Надеждни и ефективни уеб решения, съобразени с бизнес целите и мащабируемостта.',
        },
        {
          title: 'Дизайн на приложения',
          description: 'Функционален и интуитивен дизайн с силен фокус върху потребителското преживяване.',
        },
      ],
    },
    projects: {
      title: 'Моите проекти',
      subtitle: 'Подбрана селекция от последни лендинг страници и продуктови концепции.',
    },
    contact: {
      title: 'Нека създадем дизайн заедно',
      text: 'Разкажете ми за проекта си и ще отговоря с ясен план и срокове.',
      emailPlaceholder: 'Въведете имейл',
      contactCta: 'Свържи се с мен',
      emailButton: 'Имейл',
      linkedinButton: 'LinkedIn',
    },
    footer: {
      rights: 'Всички права запазени.',
    },
  },
  ru: {
    header: {
      links: [
        { link: '#home', label: 'Главная' },
        { link: '#about', label: 'Обо мне' },
        { link: '#services', label: 'Услуги' },
        { link: '#projects', label: 'Проекты' },
        { link: '#contact', label: 'Контакты' },
      ],
      downloadCv: 'Скачать CV',
      language: 'Язык',
      toggleTheme: 'Сменить тему',
    },
    welcome: {
      hi: 'Привет, я',
      name: 'Stefani Dimitrova',
      role: 'UI & UX\nДизайнер',
      intro: 'Я создаю современные, быстрые и удобные сайты, которые отлично выглядят на любых устройствах.',
      hire: 'Нанять меня',
    },
    about: {
      title: 'Обо мне',
      text:
        'Я создаю интерфейсы, которые выглядят легко, ясно и целенаправленно. От концепции до запуска фокусируюсь на удобстве, скорости и аккуратном визуальном результате.',
      skills: [
        { label: 'Веб-дизайн', value: 85 },
        { label: 'Веб-разработка', value: 90 },
        { label: 'Дизайн приложений', value: 80 },
      ],
    },
    services: {
      title: 'Услуги',
      subtitle: 'Чистые дизайн-системы, быстрая доставка и пиксельная точность для вашего продукта.',
      cards: [
        {
          title: 'Веб-дизайн',
          description: 'Стратегический веб-дизайн с фокусом на ясность, целостность бренда и удобство.',
        },
        {
          title: 'Веб-разработка',
          description: 'Надежные и эффективные веб-решения, соответствующие бизнес-целям и масштабу.',
        },
        {
          title: 'Дизайн приложений',
          description: 'Функциональный и интуитивный дизайн с акцентом на пользовательский опыт.',
        },
      ],
    },
    projects: {
      title: 'Мои проекты',
      subtitle: 'Подборка последних лендингов и продуктовых концепций.',
    },
    contact: {
      title: 'Давайте создавать дизайн вместе',
      text: 'Расскажите о проекте, и я отвечу с ясным планом и сроками.',
      emailPlaceholder: 'Введите email',
      contactCta: 'Связаться со мной',
      emailButton: 'Email',
      linkedinButton: 'LinkedIn',
    },
    footer: {
      rights: 'Все права защищены.',
    },
  },
};

type TranslationSet = typeof translations.en;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationSet;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'site-language';

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en';
  }
  const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored && LANGUAGES.some((language) => language.code === stored)) {
    return stored;
  }
  const browser = window.navigator.language.toLowerCase();
  if (browser.startsWith('bg')) return 'bg';
  if (browser.startsWith('ru')) return 'ru';
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
