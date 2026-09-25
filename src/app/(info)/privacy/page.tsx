import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Политика конфиденциальности | PROlab Academy",
  description: "Какие данные обрабатывает сайт PROlab Academy и как связаться с автором проекта.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
}

const sectionClass = "space-y-3"
const paragraphClass = "text-base leading-7 text-slate-700 dark:text-slate-300"

export default function PrivacyPage() {
  return (
    <article className="space-y-10 text-slate-900 dark:text-slate-100">
      <header className="space-y-3">
        <p className="text-sm text-slate-500 dark:text-slate-400">Последнее обновление: 26 сентября 2026 г.</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Политика конфиденциальности</h1>
        <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
          Эта страница описывает, какие данные обрабатываются при использовании сайта PROlab Academy — открытых
          учебных материалов по веб-разработке.
        </p>
      </header>

      <section className={sectionClass}>
        <h2 className="text-xl font-semibold">Кто отвечает за обработку данных</h2>
        <p className={paragraphClass}>
          Сайт ведёт автор проекта. Связаться по вопросам обработки данных можно по email <a
            href="mailto:bilolmen998@gmail.com"
            className="text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
          >
            bilolmen998@gmail.com
          </a> или через <a
            href="https://github.com/b4631119-oss"
            target="_blank"
            rel="noreferrer"
            className="text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
          >            GitHub автора проекта
          </a>.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className="text-xl font-semibold">Какие данные собирает сайт</h2>
        <p className={paragraphClass}>
          Сайт не содержит регистрации, входа в личный кабинет, форм обратной связи и загрузки файлов. Учётные
          записи, имена, email, ответы на задания и результаты не собираются и не хранятся: приложению негде их
          хранить — у него нет базы данных и серверных операций с пользовательскими данными.
        </p>
        <p className={paragraphClass}>
          Контент сайта открыт, поэтому личные данные для его просмотра не требуются.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className="text-xl font-semibold">Cookies и локальное хранилище</h2>
        <p className={paragraphClass}>
          Приложение не устанавливает cookies для аутентификации, аналитики, рекламы или отслеживания — таких
          механизмов в нём нет.
        </p>
        <p className={paragraphClass}>
          Выбор светлой или тёмной темы сохраняется в localStorage браузера под ключом{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm dark:bg-slate-800">theme</code>. Это
          настройка интерфейса: она остаётся в браузере пользователя, не передаётся на сервер и не используется
          для отслеживания.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className="text-xl font-semibold">Аналитика и реклама</h2>
        <p className={paragraphClass}>
          Сервисы веб-аналитики, рекламные сети, счётчики и сторонние трекеры на сайте не подключены. Сайт не
          строит профили пользователей и не передаёт данные третьим лицам для маркетинга.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className="text-xl font-semibold">Внешние ссылки</h2>
        <p className={paragraphClass}>
          Сайт содержит ссылки на внешние ресурсы (профиль и репозиторий автора на GitHub, страницу портфолио).
          При переходе по ним действуют правила и политики соответствующих сервисов, а не этого сайта.
        </p>
        <p className={paragraphClass}>
          Шрифты встраиваются в сборку сайта, поэтому браузер не обращается за ними к сторонним сервисам при
          открытии страниц.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className="text-xl font-semibold">Срок хранения и удаление данных</h2>
        <p className={paragraphClass}>
          Сайт не хранит персональные данные пользователей, поэтому удалять по запросу нечего. Если вы считаете,
          что какие-то ваши данные всё же были обработаны через этот сайт, напишите по контактам, указанным выше.
        </p>
        <p className={paragraphClass}>
          Если в будущем на сайте появятся учётные записи или другие формы обработки данных, эта страница будет
          обновлена до их запуска.
        </p>
      </section>

      <section className={`${sectionClass} border-t border-slate-200 pt-8 dark:border-slate-800`}>
        <h2 className="text-xl font-semibold">Обновления этой страницы</h2>
        <p className={paragraphClass}>
          Политика обновляется вместе с сайтом: если на нём появятся учётные записи, формы или сторонние
          сервисы, эта страница будет изменена до их запуска.
        </p>
      </section>
    </article>
  )
}
