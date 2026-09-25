import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "О платформе | PROlab Academy",
  description: "Что такое PROlab Academy: учебные материалы по веб-разработке для самостоятельного изучения.",
  alternates: { canonical: "/about" },
  robots: { index: true, follow: true },
}

const sectionClass = "space-y-3"
const paragraphClass = "text-base leading-7 text-slate-700 dark:text-slate-300"

export default function AboutPage() {
  return (
    <article className="space-y-10 text-slate-900 dark:text-slate-100">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">О платформе</h1>
        <p className="text-lg leading-8 text-slate-600 dark:text-slate-400">
          PROlab Academy — это открытые учебные материалы по веб-разработке, собранные в последовательные курсы.
        </p>
      </header>

      <section className={sectionClass}>
        <h2 className="text-xl font-semibold">Что это за платформа</h2>
        <p className={paragraphClass}>
          Курсы по основам веб-разработки: HTML, CSS, JavaScript и работе с DOM, а также вводный блок про
          инструменты разработчика. Материалы доступны в браузере без регистрации и без установки чего-либо.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className="text-xl font-semibold">Какую задачу решает</h2>
        <p className={paragraphClass}>
          Начинающим сложно понять, в каком порядке изучать веб-разработку и где остановиться на каждом шаге.
          Здесь темы выстроены по трекам: от разметки и стилей до JavaScript и браузерных API, с примерами кода и
          практическими заданиями внутри уроков.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className="text-xl font-semibold">Для кого</h2>
        <p className={paragraphClass}>
          Для тех, кто начинает изучать веб-разработку самостоятельно: школьников и всех, кто хочет
          разобраться в основах frontend-разработки на русском языке.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className="text-xl font-semibold">Что можно делать</h2>
        <ul className="list-disc space-y-2 pl-6 text-base leading-7 text-slate-700 dark:text-slate-300">
          <li>Изучать уроки и темы по HTML, CSS, JavaScript, DOM и инструментам разработчика.</li>
          <li>Смотреть примеры кода и разборы типичных ошибок внутри каждого урока.</li>
          <li>Выполнять практические задания к урокам, не создавая учётную запись.</li>
        </ul>
        <p className={paragraphClass}>
          Регистрация, вход в личный кабинет и платные подписки не используются: весь контент открыт.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className="text-xl font-semibold">Об авторе</h2>
        <p className={paragraphClass}>Автор проекта — Билолидин.</p>
        <ul className="space-y-2 text-base leading-7">
          <li>
            <a
              href="https://github.com/b4631119-oss"
              target="_blank"
              rel="noreferrer"
              className="text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
            >
              GitHub: github.com/b4631119-oss
            </a>
          </li>
          <li>
            <a
              href="https://portfolio-devroot.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
            >
              Портфолио: portfolio-devroot.vercel.app
            </a>
          </li>
        </ul>
      </section>
    </article>
  )
}
