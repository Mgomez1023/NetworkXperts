import { type FormEvent, type ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ClipboardList, Network, Server, Shield, Menu, X, type LucideIcon } from "lucide-react";
import founderPic from "../FounderPic.jpeg";
import logoMark from "./assets/network-logo-mark.png";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

type ThemeMode = "light" | "hybrid" | "dark";

const themeOptions: { label: string; value: ThemeMode }[] = [
  { label: "Light", value: "light" },
  { label: "Hybrid", value: "hybrid" },
  { label: "Dark", value: "dark" },
];

const contactInfo = {
  email: "johnny@example.com",
  phone: "(555) 555-5555",
  phoneHref: "tel:+15555555555",
};

const serviceItems = [
  {
    title: "Network Architecture",
    text: "Planning, segmentation, wireless coverage, and resilient connectivity for growing teams.",
    accent: "cyan",
    tags: ["Segmentation", "Wireless", "Resilience"],
  },
  {
    title: "Infrastructure Support",
    text: "Server, endpoint, cloud, and vendor coordination with practical operational guidance.",
    accent: "red",
    tags: ["Cloud", "Endpoints", "Vendors"],
  },
  {
    title: "Security Readiness",
    text: "Baseline hardening, access reviews, backup posture, and remediation priorities.",
    accent: "cyan",
    tags: ["Hardening", "Access", "Backups"],
  },
  {
    title: "Business Technology",
    text: "IT roadmaps, procurement support, documentation, and systems alignment for daily operations.",
    accent: "red",
    tags: ["Roadmaps", "Procurement", "Docs"],
  },
];

const pricingItems = [
  {
    title: "Assessment",
    description:
      "A focused review of the current environment, operational risks, and short-term technical priorities.",
    bestFor: "Organizations needing clarity before investing.",
    deliverables: [
      "Environment review",
      "Risk identification",
      "Infrastructure observations",
      "Prioritized recommendations",
    ],
    cta: "Request assessment",
    accent: "cyan",
  },
  {
    title: "Project Engagement",
    description:
      "Scoped implementation support for infrastructure upgrades, migrations, security improvements, and modernization initiatives.",
    bestFor: "Teams executing a defined technical initiative.",
    deliverables: [
      "Project scoping",
      "Deployment support",
      "Vendor coordination",
      "Documentation handoff",
      "Post-project stabilization",
    ],
    cta: "Discuss project",
    accent: "primary",
  },
  {
    title: "Ongoing Advisory",
    description:
      "Recurring consulting support for organizations that need a reliable long-term technical partner.",
    bestFor: "Businesses without internal IT leadership.",
    deliverables: [
      "Strategic guidance",
      "Operational consulting",
      "Technology planning",
      "Security posture reviews",
      "Ongoing recommendations",
    ],
    cta: "Start conversation",
    accent: "red",
  },
];

const aboutValues = [
  {
    title: "",
    text: "Clear communication and dependable follow-through.",
  },
  {
    title: "",
    text: "Solutions built around how the business actually works.",
  },
  {
    title: "",
    text: "Disciplined standards from the first conversation.",
  },
];

const aboutExperienceItems: {
  title: string;
  text: string;
  icon: LucideIcon;
  accent: "red" | "cyan";
}[] = [
  {
    title: "Systems Administration",
    text: "Business systems, endpoints, vendors, and daily technical operations.",
    icon: Server,
    accent: "cyan",
  },
  {
    title: "Network & Infrastructure",
    text: "Network technician and systems engineering experience across support environments.",
    icon: Network,
    accent: "red",
  },
  {
    title: "Military Leadership",
    text: "U.S. Marine Corps veteran with disciplined operational standards.",
    icon: Shield,
    accent: "cyan",
  },
  {
    title: "Project Coordination",
    text: "Experience coordinating teams, priorities, documentation, and operational follow-through.",
    icon: ClipboardList,
    accent: "red",
  },
];

const revealEase = [0.22, 1, 0.36, 1] as const;

function ThemeToggle({
  theme,
  onThemeChange,
  compact = false,
}: {
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  compact?: boolean;
}) {
  return (
    <div
      className={`theme-toggle ${compact ? "theme-toggle-compact" : ""}`}
      role="radiogroup"
      aria-label="Theme preview"
    >
      {themeOptions.map((option) => (
        <button
          key={option.value}
          type="button"
          className="theme-toggle-option"
          aria-checked={theme === option.value}
          role="radio"
          onClick={() => onThemeChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function Header({
  theme,
  onThemeChange,
}: {
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-transparent"
    >
      <nav
        className="mx-auto flex h-20 max-w-[1800px] items-center justify-between px-6 sm:px-10 lg:px-16"
        aria-label="Primary navigation"
      >
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.08em] text-neutral-950"
        >
          <img src={logoMark} alt="" className="h-8 w-8 object-contain" draggable="false" />
          <span>Network Xperts Group</span>
        </a>

        <div className="ml-auto hidden items-center justify-end gap-8 lg:flex">
          <div className="flex items-center justify-end gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="header-nav-link arrow-link text-sm font-bold text-neutral-600"
              >
                {item.label}
              </a>
            ))}
          </div>
          <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-black/15 text-neutral-950 transition hover:border-nxg-cyan lg:hidden"
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
            className="overflow-hidden border-t border-black/10 bg-white/95 lg:hidden"
          >
            <div className="mx-auto grid max-w-[1800px] gap-1 px-6 py-5 sm:px-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="header-nav-link arrow-link px-1 py-3 text-sm font-bold text-neutral-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mobile-theme-preview">
                <ThemeToggle theme={theme} onThemeChange={onThemeChange} compact />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

function ArrowCTA({
  href,
  children,
  variant,
}: {
  href: string;
  children: string;
  variant: "red" | "cyan";
}) {
  return (
    <a href={href} className={`arrow-cta arrow-link arrow-cta-${variant}`}>
      <span className="arrow-cta-label">{children}</span>
      <span className="arrow-cta-line" aria-hidden="true" />
    </a>
  );
}

function HeroCopy() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -34 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="hero-copy-panel order-2 mx-auto max-w-md text-center lg:order-1 lg:mx-0 lg:max-w-sm lg:text-left"
    >
      <div className="mb-7 flex items-center justify-center gap-4 lg:justify-start">
        <span className="h-px w-12 bg-nxg-red" aria-hidden="true" />
        <p className="text-xs font-black uppercase text-neutral-700">Veteran Owned IT Company</p>
      </div>

      <p className="text-balance text-base leading-7 text-neutral-700 sm:text-lg">
        Reliable IT consulting for networks, infrastructure, and business technology support.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="cta-grid mt-9 flex flex-col items-center gap-5 lg:items-start"
      >
        <ArrowCTA href="#services" variant="red">
          Learn More
        </ArrowCTA>
        <ArrowCTA href="#contact" variant="cyan">
          Get Consultation
        </ArrowCTA>
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
        // TODO: Replace this raster fallback with separated SVG logo parts for directional piece-by-piece animation.
        initial={{ opacity: 0, scale: 0.94, y: 18 }}
        animate={{ opacity: 0.98, scale: 1, y: 0 }}
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
        <span className="block bg-gradient-to-br from-neutral-950 via-[#1e282d] to-neutral-800 bg-clip-text text-transparent">
          Network
        </span>
        <span className="block bg-gradient-to-r from-neutral-950 via-[#1f2b30] to-neutral-800 bg-clip-text text-transparent">
          Xperts
        </span>
        <span className="block bg-gradient-to-br from-neutral-950 via-[#1e282d] to-neutral-800 bg-clip-text text-transparent">
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
      className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-[0.68rem] font-black uppercase text-neutral-500 md:flex"
    >
    </motion.a>
  );
}

function Hero() {
  return (
    <section className="hero-shell relative min-h-screen overflow-hidden bg-white text-neutral-950">
      <div className="noise-layer" aria-hidden="true" />
      <div className="hero-geometry-layer" aria-hidden="true">
        <span className="geometry-stroke geometry-stroke-red" />
        <span className="geometry-stroke geometry-stroke-cyan" />
        <span className="geometry-stroke geometry-stroke-dark" />
        <span className="geometry-sweep" />
        <span className="geometry-tracer geometry-tracer-cyan" />
      </div>
      <HeroVisual />
      <div className="hero-copy-shell relative z-20 mx-auto max-w-[2000px] px-6 pb-20 sm:px-10 lg:min-h-screen lg:px-16">
        <main className="hero-copy-layout flex flex-col justify-center lg:block lg:min-h-screen">
          <HeroCopy />
        </main>
      </div>
      <ScrollIndicator />
    </section>
  );
}

type RevealSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  accent: "red" | "cyan";
  children: ReactNode;
};

const revealSectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.95,
    },
  },
};

const revealContentVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: revealEase },
  },
};

function RevealSection({ id, eyebrow, title, accent, children }: RevealSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const initialState = prefersReducedMotion ? false : "hidden";

  return (
    <motion.section
      id={id}
      className="reveal-section scroll-mt-24 border-t border-black/10 bg-[#f4f6f7] px-6 py-28 text-neutral-950 sm:px-10 lg:px-16"
      initial={initialState}
      whileInView="visible"
      viewport={{ once: true, amount: 0.28 }}
      variants={revealSectionVariants}
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="reveal-header">
          <motion.p
            className={`reveal-eyebrow reveal-eyebrow-${accent}`}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: revealEase } },
            }}
          >
            {eyebrow}
          </motion.p>

          <div className="reveal-sweep" aria-hidden="true">
            <motion.span
              className={`reveal-sweep-line reveal-sweep-line-${accent}`}
              variants={{
                hidden: { scaleX: 0, opacity: 0 },
                visible: {
                  scaleX: 1,
                  opacity: 1,
                  transition: { duration: 0.78, delay: 0.12, ease: revealEase },
                },
              }}
            />
          </div>

          <div className="reveal-title-mask">
            <motion.h2
              className="reveal-title"
              variants={{
                hidden: { clipPath: "inset(0 100% 0 0)", x: -14 },
                visible: {
                  clipPath: "inset(0 0% 0 0)",
                  x: 0,
                  transition: { duration: 0.82, delay: 0.18, ease: revealEase },
                },
              }}
            >
              {title}
            </motion.h2>
          </div>
        </div>

        <motion.div className="reveal-content" variants={revealContentVariants}>
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}

function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <motion.article className="section-card" variants={revealContentVariants}>
      <h3>{title}</h3>
      <p>{children}</p>
    </motion.article>
  );
}

function ServicesContent() {
  return (
    <motion.div
      className="services-capability-wrap"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.09,
          },
        },
      }}
    >
      <span className="services-watermark" aria-hidden="true" />
      <div className="services-capability-grid">
        {serviceItems.map((item) => (
          <motion.article
            key={item.title}
            className={`interactive-card service-capability-card service-capability-card-${item.accent}`}
            variants={revealContentVariants}
          >
            <div className="service-card-topline">
              <h3>{item.title}</h3>
              <span className="service-card-corner" aria-hidden="true" />
            </div>
            <p>{item.text}</p>
            <div className="service-card-tags" aria-label={`${item.title} capabilities`}>
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}

const aboutFounderPhotoVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.58, delay: 0.1, ease: revealEase },
  },
};

function AboutContent() {
  return (
    <motion.div
      className="about-section-layout"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <motion.div
        className="about-copy-panel"
        variants={{
          hidden: { opacity: 0, x: -24 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.62, ease: revealEase } },
        }}
      >
        <motion.div
          className="about-block"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          <motion.p variants={revealContentVariants}>
            Network Xperts Group is a veteran-owned IT consulting company focused on practical
            technology support for businesses that need dependable infrastructure, cleaner
            networks, and a clear path forward.
          </motion.p>
          <motion.div
            className="about-founder-row"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            <motion.div
              className="about-experience-list"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.06,
                  },
                },
              }}
            >
              {aboutExperienceItems.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    className={`about-experience-row about-experience-row-${item.accent}`}
                    variants={revealContentVariants}
                  >
                    <span className="about-experience-icon" aria-hidden="true">
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <span className="about-experience-copy">
                      <strong>{item.title}</strong>
                      <span>{item.text}</span>
                    </span>
                  </motion.article>
                );
              })}
            </motion.div>
            <motion.figure className="about-founder-photo-frame" variants={aboutFounderPhotoVariants}>
              <img
                src={founderPic}
                alt="Johnny A. Ramirez, founder of Network Xperts Group"
                className="about-founder-photo"
              />
              <figcaption>Johnny A. Ramirez, Founder</figcaption>
            </motion.figure>
          </motion.div>
          <motion.p variants={revealContentVariants}>
            The approach is simple: understand the environment, reduce avoidable risk, and
            implement systems that help the business operate with confidence.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function PricingContent() {
  return (
    <motion.div
      className="pricing-engagement-wrap"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.09,
          },
        },
      }}
    >
      <span className="pricing-blueprint" aria-hidden="true" />
      <motion.p className="pricing-intro" variants={revealContentVariants}>
        Every environment is different. Engagements are scoped around operational needs, risk
        level, and implementation complexity.
      </motion.p>
      <div className="pricing-engagement-grid">
        {pricingItems.map((item) => (
          <motion.article
            key={item.title}
            className={`interactive-card pricing-engagement-card pricing-engagement-card-${item.accent}`}
            variants={revealContentVariants}
          >
            {item.accent === "primary" ? <span className="pricing-card-badge">Most Common</span> : null}
            <div className="pricing-card-rule" aria-hidden="true" />
            <h3>{item.title}</h3>
            <p className="pricing-card-description">{item.description}</p>
            <div className="pricing-best-for">
              <span>Best for</span>
              <p>{item.bestFor}</p>
            </div>
            <ul className="pricing-deliverables">
              {item.deliverables.map((deliverable) => (
                <li key={deliverable}>{deliverable}</li>
              ))}
            </ul>
            <a href="#contact" className="pricing-card-cta">
              {item.cta}
            </a>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}

function ContactContent() {
  const [formOpen, setFormOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("Form ready for integration.");
  }

  return (
    <motion.div className="contact-block" variants={revealContentVariants}>
      <motion.div className="contact-copy" variants={revealContentVariants}>
        <div>
          <p className="contact-kicker">Start with a focused consultation.</p>
          <p>
            Share what is slowing your systems down, what needs to be secured, or what needs to be
            built next. Network Xperts Group will help define the next practical step.
          </p>
        </div>

        <div className="contact-info-list" aria-label="Contact information">
          <a href={`mailto:${contactInfo.email}`} className="contact-info-row">
            <span>Email</span>
            <strong>{contactInfo.email}</strong>
          </a>
          <a href={contactInfo.phoneHref} className="contact-info-row">
            <span>Phone</span>
            <strong>{contactInfo.phone}</strong>
          </a>
        </div>
      </motion.div>

      <motion.div className="contact-form-column" variants={revealContentVariants}>
        <button
          type="button"
          className="contact-form-toggle"
          aria-expanded={formOpen}
          aria-controls="contact-form-panel"
          onClick={() => {
            setFormOpen((value) => !value);
            setFormStatus("");
          }}
        >
          <span>{formOpen ? "Close contact form" : "Open contact form"}</span>
        </button>

        <AnimatePresence initial={false}>
          {formOpen ? (
            <motion.div
              id="contact-form-panel"
              className="contact-form-panel"
              initial={{ height: 0, opacity: 0, y: -8 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -8 }}
              transition={{ duration: 0.42, ease: revealEase }}
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <label>
                  <span>Email</span>
                  <input type="email" name="email" autoComplete="email" required />
                </label>
                <label>
                  <span>Description</span>
                  <textarea name="description" rows={5} required />
                </label>
                <button type="submit" className="contact-submit">
                  Send
                </button>
                {formStatus ? <p className="contact-form-status">{formStatus}</p> : null}
              </form>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const savedTheme = window.localStorage.getItem("nxg-theme-preview");
    return themeOptions.some((option) => option.value === savedTheme)
      ? (savedTheme as ThemeMode)
      : "light";
  });

  useEffect(() => {
    window.localStorage.setItem("nxg-theme-preview", theme);
  }, [theme]);

  return (
    <div className={`theme-preview theme-${theme}`}>
      <Header theme={theme} onThemeChange={setTheme} />
      <Hero />
      <RevealSection
        id="services"
        eyebrow="Network Xperts Group"
        title="Services"
        accent="cyan"
      >
        <ServicesContent />
      </RevealSection>
      <RevealSection
        id="about"
        eyebrow="Veteran Owned IT Company"
        title="About"
        accent="red"
      >
        <AboutContent />
      </RevealSection>
      <RevealSection
        id="pricing"
        eyebrow="Flexible Engagements"
        title="Pricing"
        accent="cyan"
      >
        <PricingContent />
      </RevealSection>
      <RevealSection id="contact" eyebrow="Ready When You Are" title="Contact" accent="red">
        <ContactContent />
      </RevealSection>
    </div>
  );
}
