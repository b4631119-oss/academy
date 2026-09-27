import Link from "next/link"
import { BookOpen, Code2, ListChecks } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { PublicHeader } from "@/components/PublicHeader"
import { PublicFooter } from "@/components/PublicFooter"
import { JsonLd } from "@/components/JsonLd"
import { commonKeywords } from "@/lib/seo/keywords"
import { TRACKS, TRACK_ORDER } from "@/lib/skills/catalog"

// www is the canonical serving host (the apex host 308s to www).
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.prolab-academy.site"

const DESCRIPTION =
  "PROlab Academy — открытые учебные материалы по веб-разработке: HTML, CSS, JavaScript и DOM для начинающих, на русском языке, без регистрации. Ош, Кыргызстан."

export const metadata = {
  title: "PROlab Academy — IT-образование в Оше | Курсы программирования",
  description: DESCRIPTION,
  keywords: commonKeywords,
  openGraph: {
    title: "PROlab Academy — IT-образование в Оше",
    description: DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: "PROlab Academy",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "PROlab Academy — IT-образование в Оше",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PROlab Academy — IT-образование в Оше",
    description: DESCRIPTION,
    images: ["/hero-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: "index, follow",
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "PROlab Academy",
  url: SITE_URL,
  logo: `${SITE_URL}/hero-image.png`,
  sameAs: [
    "https://github.com/b4631119-oss/academy",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ош",
    addressCountry: "KG",
  },
  description: "PROlab Academy — открытые учебные материалы по веб-разработке и программированию в Оше, Кыргызстан.",
}

const HOW_IT_WORKS = [
  {
    icon: BookOpen,
    title: "Открытый доступ без регистрации",
    text: "Все материалы открыты: аккаунт создавать не нужно.",
  },
  {
    icon: Code2,
    title: "Уроки с примерами кода",
    text: "Теория с разборами и примерами кода в каждой теме.",
  },
  {
    icon: ListChecks,
    title: "Практические задания внутри уроков",
    text: "Задачи для закрепления — в конце каждой темы.",
  },
]

export default function Home() {
  return (
    <>
      <PublicHeader />
      <JsonLd data={organizationJsonLd} />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-2xl mx-auto text-center space-y-5 fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-tight">
              PROlab Academy
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Открытые учебные материалы по веб-разработке: HTML, CSS, JavaScript и DOM. Для
              начинающих, на русском языке, без регистрации.
            </p>
          </div>

          <div className="mt-10 max-w-sm mx-auto slide-up">
            <Link href="/skills" className="group">
              <Card className="h-full flex flex-col items-center gap-3 p-7 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-300 dark:hover:border-sky-700">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 transition-colors group-hover:bg-sky-50 dark:group-hover:bg-sky-950">
                  <BookOpen className="w-6 h-6 text-slate-600 dark:text-slate-400 transition-colors group-hover:text-sky-500 dark:group-hover:text-sky-400" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">Обучение</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    HTML, CSS, JavaScript, DOM и инструменты разработчика
                  </p>
                </div>
              </Card>
            </Link>
          </div>

          <section className="mt-16 sm:mt-20 space-y-8">
            <div className="max-w-2xl mx-auto text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Что внутри
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Курсы собраны в треки: можно идти по порядку — от первых инструментов до продвинутого
                JavaScript — или выбирать нужную тему.
              </p>
            </div>
            {/* Один общий стеклянный слой под сеткой: blur на всю подложку,
                а не тяжёлый blur на каждой из 9 карточек — так дешевле для GPU. */}
            <div className="relative rounded-3xl p-3 sm:p-5">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl border border-white/60 bg-gradient-to-br from-sky-100/70 via-white/40 to-sky-50/60 backdrop-blur-xl dark:border-slate-700/40 dark:from-sky-950/50 dark:via-slate-900/30 dark:to-slate-800/40"
              />
              <ul className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {TRACK_ORDER.map((id) => (
                  <li key={id}>
                    <div className="h-full rounded-2xl border border-white/70 bg-white/55 p-5 transition-all duration-200 hover:-translate-y-1 hover:bg-white/75 dark:border-slate-700/50 dark:bg-slate-900/45 dark:hover:bg-slate-900/65">
                      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                        {TRACKS[id].title}
                        {TRACKS[id].optional && (
                          <span className="ml-2 text-xs font-normal text-slate-500 dark:text-slate-400">
                            необязательный трек
                          </span>
                        )}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {TRACKS[id].description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-16 sm:mt-20 space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 text-center">
              Как это устроено
            </h2>
            <ul className="grid gap-4 sm:grid-cols-3">
              {HOW_IT_WORKS.map((item) => (
                <li key={item.title}>
                  <Card className="h-full p-5 space-y-2">
                    <div className="flex items-center gap-2">
                      <item.icon className="w-5 h-5 text-sky-500 dark:text-sky-400" aria-hidden="true" />
                      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
                  </Card>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-16 text-center">
            <Link
              href="/skills"
              className="inline-flex items-center rounded-xl bg-sky-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              Перейти к курсам
            </Link>
          </div>
        </div>
      </main>

      <PublicFooter />
    </>
  )
}
