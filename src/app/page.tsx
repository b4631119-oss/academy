import Link from "next/link"
import { BookOpen } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { PublicHeader } from "@/components/PublicHeader"
import { PublicFooter } from "@/components/PublicFooter"
import { JsonLd } from "@/components/JsonLd"
import { commonKeywords } from "@/lib/seo/keywords"

// www is the canonical serving host (the apex host 308s to www).
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.prolab-academy.site"

export const metadata = {
  title: "PROlab Academy — IT-образование в Оше | Курсы программирования",
  description: "PROlab Academy — обучение программированию в Оше, Кыргызстан. Курсы JavaScript, HTML, CSS для начинающих, учебные материалы и онлайн-тесты. Start learning today.",
  keywords: commonKeywords,
  openGraph: {
    title: "PROlab Academy — IT-образование в Оше",
    description: "PROlab Academy — обучение программированию в Оше, Кыргызстан. Курсы JavaScript, HTML, CSS для начинающих.",
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
    description: "PROlab Academy — обучение программированию в Оше, Кыргызстан. Курсы JavaScript, HTML, CSS для начинающих.",
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
    "https://github.com/b4631119-oss/prolab-academy",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ош",
    addressCountry: "KG",
  },
  description: "PROlab Academy — образовательная платформа для изучения программирования и онлайн-тестирования в Оше, Кыргызстан.",
}

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
              Изучай IT и развивай практические навыки
            </p>
          </div>

          <div className="mt-10 max-w-sm mx-auto slide-up">
            <Link href="/skills" className="group">
              <Card className="h-full flex flex-col items-center gap-3 p-7 text-center transition-all hover:border-sky-200 dark:hover:border-sky-700 hover:shadow-lg hover:shadow-sky-50 dark:hover:shadow-sky-950/50">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 transition-colors group-hover:bg-sky-50 dark:group-hover:bg-sky-950">
                  <BookOpen className="w-6 h-6 text-slate-600 dark:text-slate-400 transition-colors group-hover:text-sky-500 dark:group-hover:text-sky-400" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">Обучение</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">HTML и CSS — основы веб-разработки</p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </main>

      <PublicFooter />
    </>
  )
}