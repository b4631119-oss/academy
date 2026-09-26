import Link from "next/link"
import { BookOpen, Code2, ListChecks } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { PublicHeader } from "@/components/PublicHeader"
import { PublicFooter } from "@/components/PublicFooter"
import { JsonLd } from "@/components/JsonLd"
import { commonKeywords } from "@/lib/seo/keywords"
import { TRACKS, TRACK_ORDER, TRACK_ICONS, TRACK_ACCENTS } from "@/lib/skills/catalog"

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
            <h1 className="gradient-text text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              PROlab Academy
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Открытые учебные материалы по веб-разработке: HTML, CSS, JavaScript и DOM. Для
              начинающих, на русском языке, без регистрации.
            </p>
          </div>

          <div className="mt-10 max-w-sm mx-auto slide-up">
            <Link href="/skills" className="group">
              <Card className="btn-glow h-full flex flex-col items-center gap-3 p-7 text-center">
                <div className="p-3 rounded-xl" style={{ backgroundColor: "rgba(59, 130, 246, 0.15)" }}>
                  <BookOpen className="w-6 h-6 text-blue-500 dark:text-blue-400" />
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
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TRACK_ORDER.map((id) => {
                const Icon = TRACK_ICONS[id] || Code2
                const accent = TRACK_ACCENTS[id]
                return (
                  <li key={id}>
                    <div className="glass-card h-full p-5">
                      <div className="flex items-start gap-3">
                        <div className="rounded-xl p-2.5" style={{ backgroundColor: accent.plate }}>
                          <Icon className="h-5 w-5" style={{ color: accent.fg }} aria-hidden="true" />
                        </div>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                          {TRACKS[id].title}
                          {TRACKS[id].optional && (
                            <span className="ml-2 text-xs font-normal text-slate-500 dark:text-slate-400">
                              необязательный трек
                            </span>
                          )}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {TRACKS[id].description}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </section>

          <section className="mt-16 sm:mt-20 space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 text-center">
              Как это устроено
            </h2>
            <ul className="grid gap-4 sm:grid-cols-3">
              {HOW_IT_WORKS.map((item) => (
                <li key={item.title}>
                  <Card className="h-full p-5 space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl p-2.5" style={{ backgroundColor: "rgba(59, 130, 246, 0.15)" }}>
                        <item.icon className="w-5 h-5 text-blue-500 dark:text-blue-400" aria-hidden="true" />
                      </div>
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
              className="btn-glow inline-flex items-center rounded-xl bg-sky-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
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
