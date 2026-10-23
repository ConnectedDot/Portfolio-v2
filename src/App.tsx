import {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
} from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  CalendarDays,
  Check,
  ChevronDown,
  Code2,
  Command,
  Copy,
  Download,
  Github,
  Globe2,
  Linkedin,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  Moon,
  Pause,
  Phone,
  Play,
  Search,
  Sun,
  X,
} from "lucide-react";
import { projects, type Project } from "./projects";
import ProjectVisual from "./components/ProjectVisual";
import CaseStudy from "./components/CaseStudy";
import CommandMenu from "./components/CommandMenu";
import { usePortfolioMotion } from "./hooks/usePortfolioMotion";
const BookingDialog = lazy(() => import("./components/BookingDialog"));
const EMAIL = "psalmomo@gmail.com";
const filters = [
  "Selected work",
  "All projects",
  "Enterprise",
  "Architecture",
  "Earlier work",
];
const projectFromHash = () =>
  projects.find((p) => `#work/${p.id}` === window.location.hash) || null;
function External({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight size={15} />
    </a>
  );
}
function readSetting(key: string, fallback: string) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}
function saveSetting(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* Optional browser preference. */
  }
}
function LagosClock() {
  const format = () =>
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Lagos",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 60000);
    return () => clearInterval(id);
  }, []);
  return (
    <span>
      LAGOS, NG <i /> {time} WAT
    </span>
  );
}
function InteractivePortrait({ motion }: { motion: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  function move(e: PointerEvent<HTMLDivElement>) {
    if (!motion || e.pointerType !== "mouse") return;
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - bounds.left) / bounds.width - 0.5;
    const y = (e.clientY - bounds.top) / bounds.height - 0.5;
    ref.current?.style.setProperty("--rx", `${-y * 4}deg`);
    ref.current?.style.setProperty("--ry", `${x * 5}deg`);
  }
  function reset() {
    ref.current?.style.setProperty("--rx", "0deg");
    ref.current?.style.setProperty("--ry", "0deg");
  }
  return (
    <div className="portrait-stage" onPointerMove={move} onPointerLeave={reset}>
      <div className="portrait-orbit" aria-hidden="true" />
      <div className="portrait-cross cross-one" aria-hidden="true">
        +
      </div>
      <div className="portrait-cross cross-two" aria-hidden="true">
        +
      </div>
      <div className="portrait-frame" ref={ref}>
        <img
          src="/assets/theophilus-at-work.webp"
          alt="Theophilus working at his laptop, from the original portfolio"
          width="1200"
          height="906"
          fetchPriority="high"
        />
        <div className="portrait-shade" />
        <span className="portrait-coordinate">LAGOS, NIGERIA / REMOTE</span>
        <div className="portrait-caption">
          <span className="portrait-initial">TS.</span>
          <span>
            THE PERSON
            <br />
            BEHIND THE PIXELS.
          </span>
          <ArrowUpRight size={25} />
        </div>
      </div>
      <div className="portrait-side">
        CREATIVE THINKING / ENGINEERING DISCIPLINE
      </div>
      <div className="portrait-tag">
        <span className="status-dot" /> OPEN TO THE RIGHT OPPORTUNITY
      </div>
    </div>
  );
}
export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">(() =>
    readSetting("portfolio-theme", "dark") === "light" ? "light" : "dark",
  );
  const [systemReduced, setSystemReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [motionPaused, setMotionPaused] = useState(
    () => readSetting("portfolio-motion", "on") === "off",
  );
  const motion = !motionPaused && !systemReduced;
  const [filter, setFilter] = useState("Selected work");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Project | null>(projectFromHash);
  const [menu, setMenu] = useState(false);
  const [booking, setBooking] = useState(false);
  const [command, setCommand] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const progress = useRef<HTMLDivElement>(null);
  usePortfolioMotion(motion);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    saveSetting("portfolio-theme", theme);
  }, [theme]);
  useEffect(() => {
    document.documentElement.dataset.motion = motion ? "on" : "off";
    saveSetting("portfolio-motion", motionPaused ? "off" : "on");
  }, [motion, motionPaused]);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setSystemReduced(media.matches);
    media.addEventListener("change", change);
    return () => media.removeEventListener("change", change);
  }, []);
  useEffect(() => {
    const sync = () => {
      setSelected(projectFromHash());
      setMenu(false);
    };
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  useEffect(() => {
    function key(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (!document.querySelector("dialog[open]") || command)
          setCommand((v) => !v);
      }
      if (e.key === "Escape") setMenu(false);
    }
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [command]);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.current?.style.setProperty(
        "transform",
        `scaleX(${max > 0 ? scrollY / max : 0})`,
      );
      frame = 0;
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    addEventListener("scroll", scroll, { passive: true });
    addEventListener("resize", scroll);
    update();
    return () => {
      removeEventListener("scroll", scroll);
      removeEventListener("resize", scroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  const visible = projects.filter(
    (p) =>
      (filter === "All projects" ||
        (filter === "Selected work"
          ? p.category !== "Earlier work"
          : p.category === filter)) &&
      `${p.title} ${p.tags.join(" ")} ${p.summary}`
        .toLowerCase()
        .includes(search.toLowerCase()),
  );
  function open(p: Project) {
    window.location.hash = `work/${p.id}`;
    setSelected(p);
  }
  function closeCase() {
    history.replaceState(
      null,
      "",
      `${location.pathname}${location.search}#work`,
    );
    setSelected(null);
  }
  function openBooking() {
    if (selected) closeCase();
    setMenu(false);
    setCommand(false);
    setBooking(true);
  }
  function applyFilter(f: string) {
    setFilter(f);
    setSearch("");
  }
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="reading-progress" ref={progress} aria-hidden="true" />
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="Theophilus Samuel home">
            <span className="brand-mark">
              t<span>s</span>
              <i />
            </span>
            <span>
              Theophilus Samuel<small>FRONTEND ENGINEER / TECHNICAL LEAD</small>
            </span>
          </a>
          <nav
            id="main-mobile-nav"
            aria-label="Main navigation"
            className={menu ? "is-open" : ""}
          >
            <a href="#work" onClick={() => setMenu(false)}>
              Selected work<span>01</span>
            </a>
            <a href="#about" onClick={() => setMenu(false)}>
              The engineer<span>02</span>
            </a>
            <a href="#contact" onClick={() => setMenu(false)}>
              Contact<span>03</span>
            </a>
          </nav>
          <div className="header-actions">
            <button
              className="command-trigger icon-button"
              aria-label="Open quick navigation"
              onClick={() => setCommand(true)}
            >
              <Command size={17} />
              <kbd>K</kbd>
            </button>
            <button
              className="theme-toggle icon-button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="header-book" onClick={openBooking}>
              Let’s talk <ArrowUpRight size={16} />
            </button>
            <button
              className="menu-button icon-button"
              aria-label={menu ? "Close menu" : "Open menu"}
              aria-expanded={menu}
              aria-controls="main-mobile-nav"
              onClick={() => setMenu((v) => !v)}
            >
              {menu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>
      <main id="main">
        <section id="home" className="hero">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="container">
            <div className="hero-topline">
              <span>
                <span className="status-dot" /> FRONTEND ENGINEER & TEAM LEAD
              </span>
              <LagosClock />
            </div>
            <div className="hero-grid">
              <div className="hero-copy">
                <div
                  className="hero-kicker intro-enter"
                  style={{ "--entry": 0 } as CSSProperties}
                >
                  <span>HELLO, I’M</span>
                  <span className="mini-code">&lt;ConnectedDot /&gt;</span>
                </div>
                <h1 aria-label="Theophilus Samuel">
                  <span
                    className="hero-name intro-enter"
                    style={{ "--entry": 1 } as CSSProperties}
                  >
                    Theophilus<span className="name-period">.</span>
                  </span>
                  <span
                    className="hero-surname intro-enter"
                    style={{ "--entry": 2 } as CSSProperties}
                  >
                    Samuel
                  </span>
                </h1>
                <div
                  className="hero-role intro-enter"
                  style={{ "--entry": 3 } as CSSProperties}
                >
                  <span className="accent-line" /> Interfaces with intent.
                  <br />
                  <span>Engineering with depth.</span>
                </div>
                <p
                  className="hero-description intro-enter"
                  style={{ "--entry": 4 } as CSSProperties}
                >
                  I turn complex product requirements into clear, dependable web
                  experiences. React, TypeScript and a view of the system beyond
                  the screen.
                </p>
                <div
                  className="hero-actions intro-enter"
                  style={{ "--entry": 5 } as CSSProperties}
                >
                  <a className="button primary" href="#work">
                    Explore selected work <ArrowUpRight size={18} />
                  </a>
                  <button className="button outline" onClick={openBooking}>
                    <CalendarDays size={16} /> Book a conversation
                  </button>
                </div>
                <div
                  className="hero-socials intro-enter"
                  style={{ "--entry": 6 } as CSSProperties}
                >
                  <External href="https://github.com/ConnectedDot">
                    <Github size={15} /> GitHub
                  </External>
                  <External href="https://www.linkedin.com/in/theophilus-mcsamue/">
                    <Linkedin size={15} /> LinkedIn
                  </External>
                  <a href="/Theophilus-Samuel-CV.pdf" download>
                    Résumé <Download size={14} />
                  </a>
                </div>
              </div>
              <div
                className="hero-portrait intro-enter"
                style={{ "--entry": 2 } as CSSProperties}
              >
                <InteractivePortrait motion={motion} />
              </div>
            </div>
            <div className="hero-foot">
              <a className="scroll-cue" href="#work">
                <span className="scroll-circle">
                  <ArrowDown size={18} />
                </span>
                SCROLL TO EXPLORE
              </a>
              <span className="hero-foot-note">
                PRODUCT THINKING. <span>PRECISE EXECUTION.</span>
              </span>
              <button
                className="motion-control"
                disabled={systemReduced}
                title={
                  systemReduced
                    ? "Motion follows your reduced-motion system preference"
                    : undefined
                }
                onClick={() => setMotionPaused((v) => !v)}
              >
                {motion ? <Pause size={12} /> : <Play size={12} />}{" "}
                {motion ? "Pause motion" : "Motion paused"}
              </button>
            </div>
          </div>
          <div
            className="stack-ribbon"
            aria-label="Core technologies: React, TypeScript, Next.js, SPFx, Node.js and React Native"
          >
            <div className="ribbon-track" aria-hidden="true">
              {[0, 1].map((set) => (
                <div className="ribbon-group" key={set}>
                  {[
                    "React",
                    "TypeScript",
                    "Next.js",
                    "SPFx",
                    "Node.js",
                    "React Native",
                  ].map((t) => (
                    <span key={t}>
                      {t}
                      <span className="ribbon-star">✳</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="work" className="work-section">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <div className="eyebrow">
                  <span className="section-index">01</span> THE WORK
                </div>
                <h2>
                  Built with purpose.
                  <br />
                  <span>Backed by detail.</span>
                </h2>
              </div>
              <div className="section-description">
                <p>
                  A selection of interfaces, applications and architectural
                  thinking. Open a project for my contribution, the decisions
                  and the evidence.
                </p>
                <span className="mono-label">
                  SELECTED PROJECTS / 2026 & EARLIER
                </span>
              </div>
            </div>
            <div className="work-controls">
              <div
                className="filters"
                role="group"
                aria-label="Filter projects"
              >
                {filters.map((f) => (
                  <button
                    key={f}
                    aria-pressed={filter === f}
                    className={filter === f ? "active" : ""}
                    onClick={() => applyFilter(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <label className="project-search">
                <Search size={16} />
                <input
                  aria-label="Search projects"
                  placeholder="Find a project or stack…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                  <button
                    aria-label="Clear search"
                    onClick={() => setSearch("")}
                  >
                    <X size={15} />
                  </button>
                )}
              </label>
            </div>
            <div className="work-count" role="status">
              <span className="count-square" />
              {String(visible.length).padStart(2, "0")} PROJECTS{" "}
              <span>
                /{" "}
                {filter === "Selected work"
                  ? "RECENT WORK"
                  : filter.toUpperCase()}
              </span>
            </div>
            <div className="project-grid">
              {visible.map((p, i) => (
                <article className={`project-card card-${p.visual}`} key={p.id}>
                  <div className="project-card-top">
                    <span>
                      CASE STUDY /{" "}
                      {String(projects.indexOf(p) + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`project-status ${p.id === "care" ? "is-proposal" : ""}`}
                    >
                      <i />
                      {p.id === "care"
                        ? "PROPOSED"
                        : p.category === "Earlier work"
                          ? "EARLIER BUILD"
                          : "IMPLEMENTATION"}
                    </span>
                  </div>
                  <button
                    className={`project-image visual-${p.visual}`}
                    onClick={() => open(p)}
                    aria-label={`Read ${p.title} case study`}
                  >
                    {p.image ? (
                      <img
                        src={p.image}
                        loading="lazy"
                        alt={`${p.title} original interface capture`}
                      />
                    ) : (
                      <ProjectVisual kind={p.visual} />
                    )}
                    <span className="project-open">
                      <ArrowUpRight size={22} />
                    </span>
                    <span className="image-hover-label">EXPLORE PROJECT</span>
                  </button>
                  <div className="project-info">
                    <div className="project-kicker">
                      <span>{p.category}</span>
                      <span>{p.year === "2026" ? "2026" : "ARCHIVE"}</span>
                    </div>
                    <button className="project-title" onClick={() => open(p)}>
                      <h3>{p.title}</h3>
                      <ArrowUpRight size={21} />
                    </button>
                    <p>{p.summary}</p>
                    <div className="tags">
                      {p.tags.slice(0, 3).map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <div className="project-bottom">
                      <span>{p.status}</span>
                      <button
                        onClick={() => open(p)}
                        aria-label={`View ${p.title} case study`}
                      >
                        Inside the project <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {!visible.length && (
              <div className="empty-state">
                <Search size={29} />
                <h3>No matching work.</h3>
                <p>
                  Try a different technology or explore the complete collection.
                </p>
                <button
                  className="button primary"
                  onClick={() => applyFilter("All projects")}
                >
                  Show all projects <ArrowRight size={16} />
                </button>
              </div>
            )}
            <div className="work-note">
              <span>There’s more to the story.</span>
              <button
                className="text-button"
                onClick={() =>
                  applyFilter(
                    filter === "Earlier work"
                      ? "Selected work"
                      : "Earlier work",
                  )
                }
              >
                {filter === "Earlier work"
                  ? "Return to recent work"
                  : "Explore four earlier builds"}
                <ArrowUpRight size={15} />
              </button>
              <span>Private projects use sanitised summaries.</span>
            </div>
          </div>
        </section>
        <section id="about" className="about-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-intro" data-reveal>
                <div className="eyebrow">
                  <span className="section-index">02</span> THE ENGINEER
                </div>
                <h2>
                  I build for people.
                  <br />
                  <span>I think in systems.</span>
                </h2>
                <p className="about-lead">
                  The interface is where a product meets its users. I care just
                  as much about what makes it hold together.
                </p>
                <p className="muted">
                  My foundation is React and TypeScript. Enterprise delivery, IT
                  support and team leadership have shaped how I approach state,
                  permissions, failure states and the people maintaining a
                  product after it ships.
                </p>
                <div className="approach-lines">
                  <span>
                    <Braces size={17} /> Clear components. Understandable code.
                  </span>
                  <span>
                    <Code2 size={17} /> Thoughtful reviews. Shared ownership.
                  </span>
                  <span>
                    <Globe2 size={17} /> Product context. Engineering judgement.
                  </span>
                </div>
                <div className="education">
                  <span className="mono-label">FOUNDATION</span>
                  <b>B.Eng. · Ekiti State University</b>
                  <small>2015–2023 · ALX Software Engineering, 2022–2024</small>
                </div>
              </div>
              <div className="experience" data-reveal>
                <div className="subsection-label">
                  <span>EXPERIENCE</span>
                  <span>2021 — NOW</span>
                </div>
                <details open>
                  <summary>
                    <span className="job-header">
                      <span className="job-dot" />
                      <span>
                        <strong>Lotus Beta Analytics</strong>
                        <span>Team Lead / Software Developer</span>
                        <small>Dec 2025 — Present</small>
                      </span>
                    </span>
                    <ChevronDown size={18} />
                  </summary>
                  <div className="job-content">
                    <p>
                      Enterprise application delivery, approval workflows,
                      reusable interfaces, peer review and developer mentoring.
                    </p>
                    <div className="promotion">
                      <span>DEVELOPER ROLE</span>
                      <b>IT Specialist / Software Developer</b>
                      <small>Feb 2023 — Present</small>
                    </div>
                    <p>
                      Responsive interfaces, shared components and application
                      support, in collaboration with business analysis and
                      design teams.
                    </p>
                  </div>
                </details>
                <details>
                  <summary>
                    <span className="job-header">
                      <span className="job-dot secondary" />
                      <span>
                        <strong>Hightower Inc.</strong>
                        <span>Frontend Developer</span>
                        <small>Jun 2021 — Jan 2023</small>
                      </span>
                    </span>
                    <ChevronDown size={18} />
                  </summary>
                  <div className="job-content">
                    <p>
                      Responsive React and JavaScript interfaces, interactive UI
                      behaviour and web experiences across screen sizes.
                    </p>
                  </div>
                </details>
                <div className="experience-footer">
                  <a href="/Theophilus-Samuel-CV.pdf" download>
                    View the full résumé <Download size={15} />
                  </a>
                  <span>Titles & dates from my supplied CV.</span>
                </div>
              </div>
            </div>
            <div className="skills-block" data-reveal>
              <div className="skills-heading">
                <div className="eyebrow">A LOOK UNDER THE HOOD</div>
                <h3>Capability you can inspect.</h3>
              </div>
              <div className="skills-grid">
                {[
                  {
                    label: "01 / FRONTEND",
                    title: "Interface engineering",
                    stack: "React · TypeScript · Tailwind",
                    text: "Composable interfaces, deliberate state and a consistent product language.",
                    project: "fortis",
                    link: "Fortis workspace",
                  },
                  {
                    label: "02 / ENTERPRISE",
                    title: "Beyond the happy path",
                    stack: "SPFx · APIs · workflows",
                    text: "Permissions, request context and failure states treated as part of the experience.",
                    project: "travel",
                    link: "Enterprise travel",
                  },
                  {
                    label: "03 / ARCHITECTURE",
                    title: "Boundaries that make sense",
                    stack: "Domain models · access design",
                    text: "Separate responsibilities, explicit ownership and human review where it matters.",
                    project: "care",
                    link: "Connected Care proposal",
                  },
                ].map((s) => (
                  <button
                    className="skill-card"
                    key={s.label}
                    onClick={() =>
                      open(projects.find((p) => p.id === s.project)!)
                    }
                  >
                    <span className="mono-label">{s.label}</span>
                    <h4>{s.title}</h4>
                    <span className="skill-stack">{s.stack}</span>
                    <p>{s.text}</p>
                    <span className="skill-link">
                      {s.link}
                      <ArrowUpRight size={17} />
                    </span>
                  </button>
                ))}
              </div>
              <p className="supporting-stack">
                ALSO IN THE TOOLKIT <span>Next.js</span>
                <span>Firebase</span>
                <span>Node.js</span>
                <span>React Native / Expo</span>
              </p>
            </div>
            <div id="contact" className="contact-block" data-reveal>
              <div className="contact-top">
                <div className="eyebrow">
                  <span className="section-index">03</span> GOOD WORK STARTS
                  WITH A CONVERSATION
                </div>
                <span>
                  <span className="status-dot" /> OPEN TO REMOTE OPPORTUNITIES
                </span>
              </div>
              <div className="contact-main">
                <div>
                  <h2>
                    Have a role in mind?
                    <br />
                    <span>Let’s meet.</span>
                    <span className="contact-asterisk" aria-hidden="true">
                      ✳
                    </span>
                  </h2>
                  <p>
                    A React / TypeScript role, a product challenge,
                    <br />
                    or an engineering conversation. Let’s find a time.
                  </p>
                </div>
                <div className="contact-actions">
                  <button className="button primary" onClick={openBooking}>
                    <CalendarDays size={19} /> Book a 30-min call{" "}
                    <ArrowUpRight size={21} />
                  </button>
                  <span className="booking-note">
                    Live availability · Cal Video · Your timezone
                  </span>
                  <a className="contact-email" href={`mailto:${EMAIL}`}>
                    Prefer an email?{" "}
                    <span>
                      Say hello <ArrowUpRight size={15} />
                    </span>
                  </a>
                </div>
              </div>
              <div className="contact-bottom">
                <div className="email-row">
                  <Mail size={15} />
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  <button
                    className="icon-button"
                    aria-label="Copy email address"
                    onClick={copyEmail}
                  >
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                  </button>
                  <span className="copy-status" role="status">
                    {copied
                      ? "Copied"
                      : copyError
                        ? "Select the address to copy"
                        : ""}
                  </span>
                </div>
                <a href="tel:+2347042206770">
                  <Phone size={14} /> +234 704 220 6770
                </a>
                <span>
                  <MapPin size={14} /> Lagos, Nigeria · Working globally
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="footer-wordmark" aria-hidden="true">
            THEOPHILUS<span>✳</span>
          </div>
          <div className="footer-inner">
            <span>© 2026 THEOPHILUS SAMUEL</span>
            <div>
              <External href="https://github.com/ConnectedDot">GITHUB</External>
              <External href="https://www.linkedin.com/in/theophilus-mcsamue/">
                LINKEDIN
              </External>
              <button onClick={() => setCommand(true)}>
                QUICK JUMP <kbd>⌘ K</kbd>
              </button>
            </div>
            <span className="private-label">PORTFOLIO / 2026</span>
            <a href="#home">
              BACK TO TOP <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </footer>
      {selected && (
        <CaseStudy
          project={selected}
          onClose={closeCase}
          onProject={open}
          onBook={openBooking}
        />
      )}
      {command && (
        <CommandMenu onClose={() => setCommand(false)} onBook={openBooking} />
      )}
      <Suspense
        fallback={
          <div className="booking-loading" role="status">
            Opening your calendar…
          </div>
        }
      >
        {booking && (
          <BookingDialog onClose={() => setBooking(false)} theme={theme} />
        )}
      </Suspense>
    </>
  );
}
