import Link from "next/link"

const FOOTER_LINKS = [
  { href: "/privacy", label: "Политика конфиденциальности" },
  { href: "/about", label: "О платформе" },
  { href: "/contact", label: "Контакты" },
]

export function PublicFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © 2026 bilolidin · PROlab Academy
        </p>
        <nav aria-label="Информация о проекте">
          <ul className="flex flex-wrap gap-x-2 gap-y-1">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-md px-2 text-sm text-slate-600 transition-colors hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-slate-300 dark:hover:text-sky-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
