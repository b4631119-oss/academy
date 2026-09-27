# 🎓 PROlab Academy

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: All rights reserved](https://img.shields.io/badge/License-All%20rights%20reserved-lightgrey.svg?style=for-the-badge)](LICENSE)

## 📋 О проекте

**PROlab Academy** — сайт с открытыми учебными материалами по веб-разработке. Курсы по HTML, CSS,
JavaScript, DOM и инструментам разработчика доступны без регистрации: у проекта нет учётных записей,
личных кабинетов и серверной базы данных.

Проект разработан для **PROlab Academy** (г. Ош, Кыргызстан).

- 🔗 **Сайт проекта:** https://prolab-academy.site
- 💻 **GitHub репозиторий:** https://github.com/b4631119-oss/academy

---

## ✨ Возможности

- 📚 **Каталог курсов** — треки HTML, CSS, JavaScript, DOM и инструменты разработчика.
- 📖 **Уроки с примерами кода** — теория, разборы типичных ошибок и практические задания внутри каждой темы.
- ⚡ **Статическая выдача** — страницы уроков собираются заранее, серверных операций и запросов к БД нет.
- ℹ️ **Информационные страницы** — «О платформе», «Контакты», «Политика конфиденциальности».
- 🇷🇺 **Полная локализация интерфейса** на русский язык.
- 📱 **Адаптивный дизайн** для ПК, планшетов и смартфонов.
- 🔍 **SEO-оптимизация**: метаданные, Open Graph, structured data, sitemap, robots.
- 🌗 **Тёмная и светлая темы** с сохранением выбора в localStorage.

---

## 🛠️ Технологии

| Технология | Описание |
| :--- | :--- |
| **Next.js 16** | Фреймворк для React (App Router). |
| **React 19** | Пользовательский интерфейс. |
| **TypeScript** | Строгая типизация. |
| **Tailwind CSS 4** | Утилитарная стилизация. |
| **lucide-react** | Иконки. |
| **Vercel** | Хостинг и деплой. |

---

## 🚀 Быстрый старт

### Требования

- Node.js 20.x или выше
- npm

### Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/b4631119-oss/academy.git
cd academy
```

2. Установите зависимости:
```bash
npm install
```

3. При необходимости задайте канонический домен — создайте `.env.local` в корне проекта (см. `.env.example`):
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```
Переменная используется в metadata, `sitemap.xml` и `robots.txt`. Без неё подставляется домен по умолчанию.

4. Запустите сервер разработки:
```bash
npm run dev
```
Откройте [http://localhost:3000](http://localhost:3000).

---

## 📁 Структура проекта

```text
academy/
├── src/
│   ├── app/
│   │   ├── (info)/          # Публичные страницы: о платформе, контакты, политика
│   │   ├── (skills)/        # Каталог курсов и страницы уроков
│   │   ├── layout.tsx       # Глобальный layout, метаданные, SEO
│   │   ├── page.tsx         # Главная страница (landing)
│   │   ├── manifest.ts      # PWA-манифест
│   │   ├── robots.ts        # robots.txt
│   │   └── sitemap.ts       # sitemap.xml
│   ├── components/          # Переиспользуемые компоненты (шапка, футер, уроки)
│   └── lib/
│       ├── seo/             # Ключевые слова, описания треков
│       ├── skills/          # Контент курсов и каталог
│       ├── theme-provider.tsx
│       └── utils.ts
├── e2e/                     # Playwright: проверки публичных страниц
├── scripts/                 # Вспомогательные скрипты
├── public/                  # Статические файлы
└── package.json
```

---

## 🧪 Проверки

```bash
npm run lint            # ESLint
npx tsc --noEmit        # Проверка типов
npm run build           # Production-сборка
npm run check:lines     # Контроль размера файлов

# Smoke-тесты публичных страниц (нужен запущенный dev-сервер или он поднимется сам)
npx playwright test --config=playwright.config.ts

# Те же проверки по production-домену
npx playwright test --config=playwright.prod.config.ts
```

Скрипты `playwright.config.ts` и `playwright.prod.config.ts` запускают один и тот же публичный набор
(`e2e/public-smoke.spec.ts`): главную страницу, каталог курсов, `robots.txt` и `sitemap.xml`.

---

## 📝 Заметки для владельца

Эти заметки ведутся здесь, а не на публичных страницах.

- **Имена:** репозиторий на GitHub называется `github.com/b4631119-oss/academy` — все ссылки на него приведены к этому имени. npm-пакет остаётся `prolab-academy`, домен сайта — `prolab-academy.site`.
- **Контакты опубликованы:** на `/contact` и `/privacy` указан email `bilolmen998@gmail.com` рядом с GitHub.
- **Уже принятые решения по данным**, чтобы не искать заново: юридические реквизиты владельца на страницах не публикуются; раздел про журналы хостинга удалён; отдельная процедура удаления данных не описывается, потому что сайт ничего не собирает.
- **Правило на будущее:** учётные записи, формы, аналитика или сторонние сервисы требуют обновления политики конфиденциальности до запуска.

---

## 👨‍💻 Автор

- **Разработчик:** Билолидин
- 📍 г. Ош, Кыргызстан
- 💻 **GitHub:** https://github.com/b4631119-oss
- 🌐 **Портфолио:** https://portfolio-devroot.vercel.app

---

## 🤝 Хотите помочь или обсудить?

Если вы хотите предложить улучшение, помочь с контентом или просто обсудить проект —
напишите автору напрямую:

- 📧 **Email:** bilolmen998@gmail.com
- 💻 **GitHub:** https://github.com/b4631119-oss

Контрибуции и обсуждение приветствуются — так проект становится лучше. Пожалуйста,
не форкайте проект и не выпускайте его как отдельный продукт без разрешения автора.

---

## 📄 Лицензия

**Все права защищены.** Copyright (c) 2026 Bilolidin. All rights reserved.

Код открыт для просмотра в портфолио-целях, но использование, копирование,
изменение и распространение без явного разрешения автора запрещены.
Подробности см. в файле [LICENSE](LICENSE).

---

## 🙏 Благодарности

- Сообществу [Next.js](https://nextjs.org/) за отличные инструменты разработки.
