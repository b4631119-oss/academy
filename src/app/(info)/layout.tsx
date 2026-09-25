import { PublicFooter } from "@/components/PublicFooter"
import { PublicHeader } from "@/components/PublicHeader"

export default function PublicInfoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        {children}
      </main>
      <PublicFooter />
    </div>
  )
}
