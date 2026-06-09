import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/draft", label: "Draft" },
  { href: "/team", label: "Team" },
  { href: "/simulate", label: "Simulate" },
  { href: "/hall-of-fame", label: "Hall of Fame" },
];

export function Navbar() {
  return (
    <header className="border-b border-white/10 bg-[#06100b]/85 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded border border-emerald-300/40 bg-emerald-400/10 text-lg font-black text-emerald-200">
            14
          </span>
          <span className="text-base font-bold uppercase tracking-[0.24em] text-stone-100">
            IPL Challenge
          </span>
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded border border-transparent px-3 py-2 text-sm font-semibold text-stone-300 transition hover:border-emerald-300/30 hover:bg-emerald-300/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
