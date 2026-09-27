import { cn } from "@/lib/utils"

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/70 dark:border-slate-800/70 p-5 sm:p-7", className)}>
      {children}
    </div>
  )
}
