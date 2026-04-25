"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, GraduationCap, Clock, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", icon: Home, label: "Accueil" },
  { href: "/niveaux", icon: GraduationCap, label: "Niveaux" },
  { href: "/historique", icon: Clock, label: "Historique" },
  { href: "/progression", icon: BarChart3, label: "Progression" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-warm-200 bg-warm-50/95 backdrop-blur-sm sm:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const levelPattern = /^\/(6e|5e|4e|3e|2nde|1ere|terminale)(\/|$)/;
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : item.href === "/niveaux"
              ? pathname.startsWith("/niveaux") || levelPattern.test(pathname)
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-0.5 rounded-lg px-3 py-1.5 text-xs transition-colors",
                isActive
                  ? "text-accent-600 font-semibold"
                  : "text-warm-500 hover:text-warm-700"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5",
                  isActive ? "text-accent-600" : "text-warm-400"
                )}
              />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
