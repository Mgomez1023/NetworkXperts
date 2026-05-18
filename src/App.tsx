import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logoMark from "./assets/network-logo-mark.png";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#050505]/45 backdrop-blur-md"
    >
      <nav
        className="mx-auto flex h-20 max-w-[1800px] items-center justify-between px-6 sm:px-10 lg:px-16"
        aria-label="Primary navigation"
      >
        <a href="#" className="flex items-center gap-3 text-sm font-black uppercase text-white">
          <span className="h-2.5 w-2.5 bg-nxg-red" aria-hidden="true" />
          <span>Network Xperts Group</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-white/62 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 border border-white/20 px-5 py-3 text-xs font-black uppercase text-white transition hover:border-nxg-cyan hover:bg-nxg-cyan/10 sm:flex"
        >
          Get Consultation
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-white transition hover:border-nxg-cyan md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/8 bg-[#050505]/95 md:hidden"
          >
            <div className="mx-auto grid max-w-[1800px] gap-1 px-6 py-5 sm:px-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-1 py-3 text-sm font-bold text-white/72"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 inline-flex items-center justify-center gap-2 border border-nxg-cyan px-5 py-3 text-xs font-black uppercase text-white"
                onClick={() => setMenuOpen(false)}
              >
                Get Consultation
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

function ButtonLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: string;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-xs font-black uppercase transition";
  const styles =
    variant === "solid"
      ? "bg-nxg-red text-white shadow-nxg-red hover:bg-[#ff3039]"
      : "border border-nxg-cyan/70 bg-black/20 text-white shadow-nxg-cyan hover:bg-nxg-cyan/10";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

function HeroCopy() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="hero-copy-panel order-2 mx-auto max-w-md text-center lg:order-1 lg:mx-0 lg:max-w-sm lg:text-left"
    >
      <div className="mb-7 flex items-center justify-center gap-4 lg:justify-start">
        <span className="h-px w-12 bg-nxg-red" aria-hidden="true" />
        <p className="text-xs font-black uppercase text-white/78">Veteran Owned IT Company</p>
      </div>

      <p className="text-balance text-base leading-7 text-white/64 sm:text-lg">
        Reliable IT consulting for networks, infrastructure, and business technology support.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
      >
        <ButtonLink href="#services">Learn More</ButtonLink>
        <ButtonLink href="#contact" variant="outline">
          Get Consultation
        </ButtonLink>
      </motion.div>
    </motion.div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual-stage">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.95, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="logo-halo hero-logo-halo"
        aria-hidden="true"
      />

      <motion.img
        src={logoMark}
        alt=""
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 0.98, scale: 1 }}
        transition={{ duration: 1, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="logo-mark hero-logo-mark select-none"
        draggable="false"
      />

      <motion.h1
        initial={{ opacity: 0, x: 52 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="poster-title shine-text hero-title font-black uppercase italic tracking-normal"
      >
        <span className="block bg-gradient-to-br from-white via-[#f1fbff] to-white/62 bg-clip-text text-transparent">
          Network
        </span>
        <span className="block bg-gradient-to-r from-white via-white to-[#dce8ed] bg-clip-text text-transparent">
          Xperts
        </span>
        <span className="block bg-gradient-to-br from-white via-[#eef7fa] to-white/56 bg-clip-text text-transparent">
          Group
        </span>
      </motion.h1>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <motion.a
      href="#services"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.05 }}
      className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-[0.68rem] font-black uppercase text-white/52 md:flex"
    >
      <span>Scroll Down</span>
      <span className="relative h-14 w-px overflow-hidden bg-white/15">
        <span className="absolute left-0 top-0 h-1/2 w-px bg-nxg-red" />
        <span className="absolute bottom-0 left-0 h-1/2 w-px bg-nxg-cyan" />
      </span>
    </motion.a>
  );
}

function Hero() {
  return (
    <section className="hero-shell relative min-h-screen overflow-hidden bg-nxg-black text-white">
      <div className="noise-layer" aria-hidden="true" />
      <HeroVisual />
      <div className="hero-copy-shell relative z-20 mx-auto max-w-[2200px] px-6 pb-20 sm:px-10 lg:min-h-screen lg:px-16">
        <main className="hero-copy-layout flex flex-col justify-center lg:block lg:min-h-screen">
          <HeroCopy />
        </main>
      </div>
      <ScrollIndicator />
    </section>
  );
}

function PlaceholderSection({ id, title }: { id: string; title: string }) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-white/8 bg-[#070809] px-6 py-28 text-white sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1800px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-xs font-black uppercase text-nxg-cyan">Network Xperts Group</p>
          <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl">{title}</h2>
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <PlaceholderSection id="services" title="Services" />
      <PlaceholderSection id="about" title="About" />
      <PlaceholderSection id="pricing" title="Pricing" />
      <PlaceholderSection id="contact" title="Contact" />
    </>
  );
}
