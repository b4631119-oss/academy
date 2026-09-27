import { PublicFooter } from "@/components/PublicFooter"
import { PublicHeader } from "@/components/PublicHeader"

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 p-5 sm:p-8 lg:p-10">{children}</main>
      <PublicFooter />
    </div>
  )
}
