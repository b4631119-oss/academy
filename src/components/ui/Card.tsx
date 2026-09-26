import { cn } from "@/lib/utils"

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("glass-card p-5 sm:p-7", className)}>
      {children}
    </div>
  )
}
