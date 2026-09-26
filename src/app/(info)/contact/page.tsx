import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Контакты | PROlab Academy",
  description: "Контакты автора проекта PROlab Academy: email и GitHub.",
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
}

export default function ContactPage() {
  return (
    <article className="space-y-8 text-slate-900 dark:text-slate-100">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Контакты</h1>
        <p className="text-lg leading-8 text-slate-600 dark:text-slate-400">
          Публичные способы связи по вопросам проекта — email автора и его GitHub.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Связаться по проекту</h2>
        <ul className="space-y-3 text-base leading-7">
          <li>
            <a
              href="mailto:bilolmen998@gmail.com"
              className="text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
            >
              bilolmen998@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/b4631119-oss"
              target="_blank"
              rel="noreferrer"
              className="text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
            >
              Профиль автора на GitHub
            </a>
          </li>
        </ul>
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
          Вопросы по проекту и по обработке данных — по ссылкам выше.
        </p>
      </section>

      <section className="space-y-3 border-t border-slate-200 pt-6 dark:border-slate-800">
        <h2 className="text-xl font-semibold">Вопросы об обработке данных</h2>
        <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
          Сайт не использует учётные записи и не хранит персональные данные. Если у вас есть вопрос об этом,
          напишите на email выше.
        </p>
      </section>
    </article>
  )
}
