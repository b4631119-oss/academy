import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Политика конфиденциальности | PROlab Academy",
  description: "Политика конфиденциальности PROlab Academy: сведения о сайте и контакты автора проекта.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
}

const sectionClass = "space-y-3"
const paragraphClass = "text-base leading-7 text-slate-700 dark:text-slate-300"

export default function PrivacyPage() {
  return (
    <article className="space-y-10 text-slate-900 dark:text-slate-100">
      <header className="space-y-3">
        <p className="text-sm text-slate-500 dark:text-slate-400">Последнее обновление: 27 сентября 2026 г.</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Политика конфиденциальности</h1>
        <p className={paragraphClass}>
          PROlab Academy — открытые учебные материалы по веб-разработке: курсы по HTML, CSS, JavaScript, DOM и
          инструментам разработчика.
        </p>
      </header>

      <section className={sectionClass}>
        <h2 className="text-xl font-semibold">Контакты автора проекта</h2>
        <p className={paragraphClass}>
          Сайт ведёт автор проекта. Связаться с ним можно по email{" "}
          <a
            href="mailto:bilolmen998@gmail.com"
            className="text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
          >
            bilolmen998@gmail.com
          </a>{" "}
          или через{" "}
          <a
            href="https://github.com/b4631119-oss"
            target="_blank"
            rel="noreferrer"
            className="text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
          >
            GitHub автора проекта
          </a>
          .
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className="text-xl font-semibold">Внешние ссылки</h2>
        <p className={paragraphClass}>
          Сайт содержит ссылки на внешние ресурсы (профиль и репозиторий автора на GitHub, страницу портфолио).
          При переходе по ним действуют правила и политики соответствующих сервисов, а не этого сайта.
        </p>
      </section>
    </article>
  )
}
