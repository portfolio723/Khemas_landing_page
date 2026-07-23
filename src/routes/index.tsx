import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  Star,
  Phone,
  MessageCircle,
  Download,
  FileText,
  ShieldCheck,
  Factory,
  Globe2,
  Package,
  Zap,
  Droplets,
  FlaskConical,
  Beaker,
  Cpu,
  Wind,
  Microscope,
  Check,
  Plus,
  Minus,
  ArrowRight,
  X,
  ChevronLeft,
  ZoomIn,
  Play,
  Box,
  Award,
  Clock,
  Truck,
  Wrench,
  Menu,
} from "lucide-react";

import heroImg from "@/assets/rotameter-hero.jpg";
import detailImg from "@/assets/rotameter-detail.jpg";
import angleImg from "@/assets/rotameter-angle.jpg";
import explodedImg from "@/assets/rotameter-exploded.jpg";
import appPharma from "@/assets/app-pharma.jpg";
import appChemical from "@/assets/app-chemical.jpg";
import appWater from "@/assets/app-water.jpg";
import appLab from "@/assets/app-lab.jpg";
import factoryMachining from "@/assets/factory-machining.jpg";
import factoryAssembly from "@/assets/factory-assembly.jpg";
import factoryCalibration from "@/assets/factory-calibration.jpg";

export const Route = createFileRoute("/")({
  component: ProductPage,
});

const gallery = [
  { src: heroImg, alt: "KE Glass Tube Rotameter — front view", type: "image" as const },
  { src: detailImg, alt: "Scale and float macro detail", type: "image" as const },
  { src: angleImg, alt: "Angled mounting view", type: "image" as const },
  { src: explodedImg, alt: "Exploded parts diagram", type: "image" as const },
  { src: heroImg, alt: "360° view", type: "360" as const },
  { src: detailImg, alt: "Product video", type: "video" as const },
  { src: explodedImg, alt: "CAD preview", type: "cad" as const },
  { src: angleImg, alt: "Datasheet preview", type: "pdf" as const },
];

const trustStrip = [
  { icon: ShieldCheck, label: "ISO Certified" },
  { icon: Factory, label: "Made in India" },
  { icon: Package, label: "Bulk Manufacturing" },
  { icon: Globe2, label: "Export Ready" },
  { icon: Wrench, label: "Calibration Available" },
];

const quickInfo: Array<[string, string]> = [
  ["Flow Range", "0.1 – 2000 LPM"],
  ["Accuracy", "±2% FSD"],
  ["Tube Material", "Borosilicate 3.3"],
  ["Float Material", "SS316 / PTFE"],
  ["Connection", '1/4" – 4" (NPT / Flange)'],
  ["Operating Pressure", "Up to 10 bar"],
  ["Temperature", "-20 to 120 °C"],
  ["Calibration", "NABL Traceable"],
  ["Warranty", "12 Months"],
];

const highlights = [
  { title: "Accuracy", value: "±2%", note: "Full scale deflection" },
  { title: "Chemical Resistant", value: "PTFE", note: "Wetted parts option" },
  { title: "Borosilicate Tube", value: "3.3", note: "Thermal shock proof" },
  { title: "Long Service Life", value: "10+ yrs", note: "Field proven" },
  { title: "Easy Installation", value: "Inline", note: "Vertical mount" },
  { title: "No Electricity", value: "Passive", note: "Zero power draw" },
  { title: "Corrosion Resistant", value: "SS316", note: "Marine grade" },
  { title: "Replaceable Float", value: "Modular", note: "Field serviceable" },
];

const applications = [
  { title: "Pharmaceutical", img: appPharma, note: "Batch dosing, WFI systems" },
  { title: "Chemical", img: appChemical, note: "Reactor feed lines" },
  { title: "Water Treatment", img: appWater, note: "Chlorine & dosing skids" },
  { title: "Laboratories", img: appLab, note: "R&D and QC benches" },
  { title: "OEM Equipment", img: factoryAssembly, note: "Skid integration" },
  { title: "Food Processing", img: appPharma, note: "CIP & flow monitoring" },
  { title: "HVAC", img: appWater, note: "Chilled water loops" },
  { title: "Research", img: appLab, note: "Pilot plant setups" },
];

const applicationIcons = [FlaskConical, Beaker, Droplets, Microscope, Cpu, Wind];

const benefits = [
  {
    problem: "Fluctuating batch accuracy",
    solution: "Precision borosilicate tube with tapered profile",
    result: "Consistent ±2% dosing — less production loss",
  },
  {
    problem: "Aggressive media eating up meters",
    solution: "PTFE-lined wetted parts, SS316 fittings",
    result: "5× longer field life vs plastic rotameters",
  },
  {
    problem: "Downtime for calibration",
    solution: "NABL-traceable factory calibration",
    result: "Ready to install, zero commissioning delay",
  },
  {
    problem: "Slow OEM procurement cycles",
    solution: "Bulk MOQ with OEM branding on request",
    result: "Predictable dispatch in 2–3 weeks",
  },
];

const specTabs = ["Overview", "Technical", "Dimensions", "Materials", "Connections", "Downloads"];

const specTables: Record<string, Array<[string, string]>> = {
  Overview: [
    ["Type", "Variable Area Flow Meter"],
    ["Mounting", "Vertical inline"],
    ["Indication", "Direct reading, no power"],
    ["Standard", "IS / ASTM compliant"],
  ],
  Technical: [
    ["Flow Range (Water)", "0.1 – 2000 LPM"],
    ["Flow Range (Air)", "0.5 – 5000 NLPM"],
    ["Accuracy", "±2% FSD"],
    ["Repeatability", "±0.5%"],
    ["Turndown Ratio", "10:1"],
  ],
  Dimensions: [
    ["Overall Length", "250 / 350 / 500 mm"],
    ["Tube ID", "6 – 65 mm"],
    ["Weight", "0.9 – 4.5 kg"],
  ],
  Materials: [
    ["Tube", "Borosilicate Glass 3.3"],
    ["Float", "SS316 / PTFE / Hastelloy"],
    ["End Fittings", "SS304 / SS316 / PP"],
    ["Gaskets", "Viton / PTFE / EPDM"],
  ],
  Connections: [
    ["Threaded", '1/4" – 2" NPT / BSP'],
    ["Flanged", "ANSI 150# / DIN PN16"],
    ["Tri-Clover", "Available on request"],
  ],
  Downloads: [
    ["Datasheet", "PDF · 1.2 MB"],
    ["Installation Manual", "PDF · 2.4 MB"],
    ["3D CAD (STEP)", "ZIP · 8.1 MB"],
  ],
};

const downloads = [
  { icon: FileText, title: "PDF Datasheet", size: "1.2 MB" },
  { icon: FileText, title: "Installation Manual", size: "2.4 MB" },
  { icon: Award, title: "Calibration Certificate", size: "480 KB" },
  { icon: Box, title: "2D Drawing", size: "620 KB" },
  { icon: Box, title: "3D CAD (STEP)", size: "8.1 MB" },
];

const compareRows: Array<[string, string, string, string]> = [
  ["Chemical resistance", "Excellent", "Good", "Limited"],
  ["Temperature range", "-20 to 120 °C", "-40 to 300 °C", "0 to 60 °C"],
  ["Visibility of media", "Full clarity", "Not visible", "Partial"],
  ["Accuracy", "±2%", "±2%", "±4%"],
  ["Service life", "10+ years", "15+ years", "2–3 years"],
  ["Best for", "Pharma / Lab / Chem", "Steam / High T", "Low-cost water"],
];

const manufacturingSteps = [
  { label: "Raw Material", img: factoryMachining },
  { label: "Machining", img: factoryMachining },
  { label: "Assembly", img: factoryAssembly },
  { label: "Calibration", img: factoryCalibration },
  { label: "Testing", img: factoryCalibration },
  { label: "Packaging", img: factoryAssembly },
];

const qaSteps = [
  "Incoming Inspection",
  "Assembly",
  "Leak Test",
  "Calibration",
  "Quality Check",
  "Dispatch",
];

const reviews = [
  {
    initials: "RK",
    company: "Rajesh Kumar",
    industry: "Plant Manager",
    country: "Hyderabad, Telangana",
    rating: 5,
    text: "The Glass Tube Rotameter from Khemas Engineers has been performing consistently in our pharmaceutical production line. The build quality and accuracy have met our expectations.",
  },
  {
    initials: "AP",
    company: "Amit Patel",
    industry: "Maintenance Engineer",
    country: "Ahmedabad, Gujarat",
    rating: 5,
    text: "Excellent product quality and prompt delivery. The installation was straightforward, and the technical support team was very helpful throughout the process.",
  },
  {
    initials: "SR",
    company: "Suresh Reddy",
    industry: "Production Head",
    country: "Visakhapatnam, Andhra Pradesh",
    rating: 5,
    text: "We've been using Khemas Glass Tube Rotameters for our process applications, and the performance has been reliable. A durable product with minimal maintenance.",
  },
  {
    initials: "VS",
    company: "Vivek Sharma",
    industry: "Instrumentation Engineer",
    country: "Pune, Maharashtra",
    rating: 5,
    text: "The product is well-engineered and provides accurate flow measurement. We are satisfied with both the product quality and after-sales support.",
  },
  {
    initials: "KR",
    company: "Karthik Rao",
    industry: "Purchase Manager",
    country: "Bengaluru, Karnataka",
    rating: 5,
    text: "The ordering process was smooth, and the team helped us select the right model for our application. Good quality product at a competitive price.",
  },
  {
    initials: "AM",
    company: "Anil Mehta",
    industry: "Engineering Manager",
    country: "Vadodara, Gujarat",
    rating: 5,
    text: "We appreciate the sturdy construction and reliable performance of the Glass Tube Rotameter. It has integrated seamlessly into our production process.",
  },
  {
    initials: "PS",
    company: "Prakash Singh",
    industry: "Project Engineer",
    country: "Chennai, Tamil Nadu",
    rating: 5,
    text: "Khemas Engineers delivered exactly what we required. The product quality, timely delivery, and technical assistance exceeded our expectations.",
  },
  {
    initials: "MV",
    company: "Manoj Verma",
    industry: "Operations Manager",
    country: "Baddi, Himachal Pradesh",
    rating: 5,
    text: "The Glass Tube Rotameter offers excellent accuracy and is easy to maintain. We would definitely consider Khemas Engineers for future requirements.",
  },
  {
    initials: "SR",
    company: "Srinivas Rao",
    industry: "Plant Engineer",
    country: "Hyderabad, Telangana",
    rating: 5,
    text: "Reliable performance, excellent finish, and quick customer support. The product has been operating without any issues since installation.",
  },
  {
    initials: "DN",
    company: "Deepak Nair",
    industry: "Utility Manager",
    country: "Mumbai, Maharashtra",
    rating: 5,
    text: "We were looking for a dependable flow measurement solution, and Khemas Engineers delivered a product that met our technical requirements perfectly.",
  },
];

const faqs = [
  {
    q: "What is the MOQ?",
    a: "Single units for evaluation, 25+ units for OEM branding. Bulk pricing starts from 50 units.",
  },
  {
    q: "What is the typical delivery time?",
    a: "Standard configurations dispatch in 5–7 working days. Custom builds 2–3 weeks.",
  },
  {
    q: "Is factory calibration included?",
    a: "Yes. Every meter ships with a NABL-traceable calibration certificate. Third-party certification available on request.",
  },
  {
    q: "What warranty do you offer?",
    a: "12 months from date of dispatch against manufacturing defects, with lifetime engineering support.",
  },
  {
    q: "Can I customise flow range or connections?",
    a: "Yes. Flow range, tube length, wetted materials, and process connections are all configurable.",
  },
  {
    q: "Do you support OEM branding?",
    a: "Laser-etched logos and private-label packaging available from 25 units onwards.",
  },
  {
    q: "Which certificates do you provide?",
    a: "Material Test Certificate, Calibration Certificate, and CoC as standard. ATEX / IECEx on request.",
  },
  {
    q: "Do you export?",
    a: "Yes — 30+ countries. We handle documentation, HS classification, and FOB / CIF shipping.",
  },
];

const related = [
  { title: "Metal Tube Rotameters", note: "High temperature & pressure" },
  { title: "Flow Switches", note: "On/off flow detection" },
  { title: "Level Gauges", note: "Tubular & magnetic types" },
  { title: "Needle Valves", note: "Precision flow control" },
];

const sectionNav = [
  ["contact", "Inquiry"],
  ["overview", "Overview"],
  ["reviews", "Reviews"],
  ["faq", "FAQ"],
];

function ProductPage() {
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [specTab, setSpecTab] = useState("Overview");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(4);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      setShowStickyNav(window.scrollY > heroRef.current.offsetHeight - 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((v) => (v === null ? v : (v + 1) % gallery.length));
      if (e.key === "ArrowLeft")
        setLightbox((v) => (v === null ? v : (v - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-hairline bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-md bg-ke-red text-primary-foreground">
                <span className="text-[13px] font-medium">KE</span>
              </div>
              <span className="text-[15px] tracking-[-0.01em]">KE Instruments</span>
            </a>
            <nav className="hidden items-center gap-7 text-[13px] text-muted-foreground md:flex">
              <a href="#" className="hover:text-foreground">
                Products
              </a>
              <a href="#" className="hover:text-foreground">
                Industries
              </a>
              <a href="#" className="hover:text-foreground">
                Support
              </a>
              <a href="#" className="hover:text-foreground">
                Downloads
              </a>
              <a href="#contact" className="hover:text-foreground">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full border border-hairline px-4 py-2 text-[13px] hover:bg-surface md:inline-flex"
            >
              Request Quote
            </a>
            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full bg-charcoal px-4 py-2 text-[13px] text-primary-foreground hover:opacity-90 md:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" /> Call Engineer
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg border border-hairline p-2 text-muted-foreground hover:bg-surface hover:text-foreground md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-hairline bg-background p-4 md:hidden">
            <nav className="flex flex-col gap-3 text-[14px]">
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-ke-red"
              >
                Products
              </a>
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-ke-red"
              >
                Industries
              </a>
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-ke-red"
              >
                Support
              </a>
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-ke-red"
              >
                Downloads
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-ke-red"
              >
                Contact
              </a>
              <div className="mt-2 flex flex-col gap-2 pt-2 border-t border-hairline">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-ke-red px-4 py-2 text-[13px] text-primary-foreground"
                >
                  Request Quote
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-hairline px-4 py-2 text-[13px]"
                >
                  <Phone className="h-3.5 w-3.5" /> Call Engineer
                </a>
              </div>
            </nav>
          </div>
        )}

        {/* Sticky section nav appears after hero */}
        {showStickyNav && (
          <div className="border-t border-hairline bg-background/95 backdrop-blur">
            <div className="mx-auto flex max-w-[1440px] gap-6 overflow-x-auto px-6 py-3 text-[13px] text-muted-foreground">
              {sectionNav.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="relative whitespace-nowrap py-1 transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-ke-red after:transition-all hover:after:w-full"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        ref={heroRef}
        className="mx-auto max-w-[1440px] px-4 sm:px-6 pb-10 pt-4 md:pb-24 md:pt-8"
      >
        <div className="grid gap-6 md:gap-12 lg:grid-cols-[42fr_58fr]">
          {/* Sticky gallery */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative overflow-hidden rounded-3xl bg-surface group">
              <div className="aspect-square">
                <img
                  src={gallery[activeImg].src}
                  alt={gallery[activeImg].alt}
                  className="h-full w-full object-cover transition-opacity duration-500"
                />
              </div>

              {/* Carousel Left / Right Arrow controls — mobile only */}
              <button
                onClick={() => setActiveImg((v) => (v - 1 + gallery.length) % gallery.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-background/80 text-foreground backdrop-blur shadow-sm hover:bg-background transition-colors md:hidden"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setActiveImg((v) => (v + 1) % gallery.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-background/80 text-foreground backdrop-blur shadow-sm hover:bg-background transition-colors md:hidden"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <button
                onClick={() => setLightbox(activeImg)}
                className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-[12px] backdrop-blur hover:bg-background"
              >
                <ZoomIn className="h-3.5 w-3.5" /> Expand
              </button>

              {/* Dotted indicator for images — mobile only */}
              <div className="absolute bottom-3 inset-x-0 flex justify-center items-center gap-1.5 md:hidden">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`h-2 rounded-full transition-all ${
                      activeImg === i ? "w-6 bg-ke-red" : "w-2 bg-white/70 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-8 gap-2">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActiveImg(i)}
                  onClick={() => setActiveImg(i)}
                  className={`relative aspect-square overflow-hidden rounded-lg border transition-all ${
                    activeImg === i ? "border-ke-red" : "border-hairline hover:border-charcoal/40"
                  }`}
                >
                  <img src={g.src} alt={g.alt} className="h-full w-full object-cover" />
                  {g.type === "video" && (
                    <div className="absolute inset-0 grid place-items-center bg-black/30">
                      <Play className="h-4 w-4 text-white" />
                    </div>
                  )}
                  {g.type === "360" && (
                    <div className="absolute bottom-0.5 right-0.5 rounded bg-black/60 px-1 text-[8px] text-white">
                      360°
                    </div>
                  )}
                  {g.type === "cad" && (
                    <div className="absolute bottom-0.5 right-0.5 rounded bg-black/60 px-1 text-[8px] text-white">
                      CAD
                    </div>
                  )}
                  {g.type === "pdf" && (
                    <div className="absolute bottom-0.5 right-0.5 rounded bg-black/60 px-1 text-[8px] text-white">
                      PDF
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-[12px] text-muted-foreground">
                <span className="rounded-full bg-surface px-3 py-1">Variable Area Flow Meter</span>
                <span className="rounded-full bg-surface px-3 py-1">Corrosion Resistant</span>
                <span className="rounded-full bg-surface px-3 py-1">Industrial Grade</span>
                <span className="rounded-full bg-surface px-3 py-1">For Pharmaceutical</span>
              </div>
              <h1 className="mt-4 text-[26px] sm:text-[44px] md:text-[56px] leading-[1.08] tracking-[-0.02em]">
                KE Glass Tube Rotameter
              </h1>
              <p className="mt-3 text-[15px] text-muted-foreground">
                Precision variable-area flow meter engineered for pharmaceutical, chemical and OEM
                applications. Borosilicate 3.3 tube, SS316 or PTFE wetted parts, NABL-traceable
                calibration.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex items-center gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-ke-red text-ke-red" />
                  ))}
                </div>
                <span className="font-num text-[14px]">4.9</span>
                <span className="text-[13px] text-muted-foreground">(286 verified buyers)</span>
              </div>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted-foreground">
              {trustStrip.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5">
                  <Icon className="h-4 w-4 text-success" />
                  {label}
                </span>
              ))}
            </div>

            {/* Quote card (instead of price) */}
            <div className="rounded-2xl border border-hairline bg-surface p-5 sm:p-6">
              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <div className="text-[12px] uppercase tracking-[0.1em] text-muted-foreground">
                    Need Pricing?
                  </div>
                  <div className="mt-1 text-[20px] sm:text-[22px] tracking-[-0.02em]">
                    Get a quotation within 30 minutes.
                  </div>
                  <div className="mt-2 flex flex-wrap gap-3 text-[12px] text-muted-foreground">
                    <span>· MOQ available</span>
                    <span>· Bulk discounts</span>
                    <span>· OEM branding</span>
                    <span>· Fast dispatch</span>
                  </div>
                </div>
                <div className="hidden flex-wrap gap-2 md:flex">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-ke-red px-5 py-3 text-[14px] text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    Request Quote <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background px-5 py-3 text-[14px] hover:bg-surface"
                  >
                    <img
                      src="https://img.icons8.com/?size=100&id=7OeRNqg6S7Vf&format=png&color=000000"
                      alt="WhatsApp"
                      className="h-4 w-4 object-contain"
                    />{" "}
                    WhatsApp
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background px-5 py-3 text-[14px] hover:bg-surface"
                  >
                    <Phone className="h-4 w-4" /> Call Engineer
                  </a>
                </div>
              </div>
            </div>

            {/* Quick info */}
            <div>
              <div className="mb-3 text-[12px] uppercase tracking-[0.1em] text-muted-foreground">
                Quick Information
              </div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {quickInfo.map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-baseline justify-between border-b border-hairline pb-3"
                  >
                    <dt className="text-[13px] text-muted-foreground">{k}</dt>
                    <dd className="font-spec text-[14px]">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Secondary chips */}
            <div className="flex flex-wrap gap-2 text-[12px]">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-3 py-1.5">
                <Truck className="h-3.5 w-3.5" /> Dispatch 5–7 days
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-3 py-1.5">
                <Package className="h-3.5 w-3.5" /> MOQ 1 unit
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-3 py-1.5">
                <Wrench className="h-3.5 w-3.5" /> Customisation available
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-3 py-1.5">
                <Award className="h-3.5 w-3.5" /> NABL calibration
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION — Inquiry */}
      <Section id="contact" eyebrow="Inquiry" title="Talk to a KE application engineer">
        <div className="grid gap-10 rounded-3xl border border-hairline bg-surface p-6 md:p-12 lg:grid-cols-2">
          {/* Features div on left side — hidden on mobile, visible on desktop */}
          <div className="hidden lg:block">
            <h3 className="text-[24px] tracking-[-0.02em]">
              Get pricing, drawings and lead time in one reply
            </h3>
            <ul className="mt-6 space-y-3 text-[14px]">
              {[
                "First reply within 30 minutes on working days",
                "Application-specific configuration guidance",
                "Sample calibration certificate on request",
                "Direct escalation to a senior engineer if needed",
                "Bulk & OEM pricing without back-and-forth",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-ke-red" />
              <span className="text-[13px]">Typical response · under 30 minutes</span>
            </div>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-success px-5 py-3 text-[14px] text-white hover:opacity-90"
            >
              <img
                src="https://img.icons8.com/?size=100&id=16712&format=png&color=ffffff"
                alt="WhatsApp"
                className="h-5 w-5 object-contain"
              />{" "}
              WhatsApp us for urgent support
            </a>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full rounded-2xl border border-hairline bg-background p-4 sm:p-6 md:p-8 shadow-sm"
          >
            <div className="mb-5">
              <h3 className="text-[20px] font-medium tracking-[-0.01em]">Send an Inquiry</h3>
              <p className="mt-1 text-[13px] text-muted-foreground">
                Get pricing, technical drawings and lead time in one reply within 30 minutes.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" placeholder="Your name" />
              <Field label="Company" placeholder="Company name" />
              <Field label="Phone" placeholder="+91 · 00000 00000" />
              <Field label="Email" placeholder="you@company.com" type="email" />
              <Field label="Quantity" placeholder="e.g. 25 units" />
              <div>
                <label className="mb-1.5 block text-[12px] text-muted-foreground">Industry</label>
                <select className="h-11 w-full rounded-lg border border-hairline bg-background px-3 text-[14px] outline-none focus:border-ke-red">
                  <option>Pharmaceutical</option>
                  <option>Chemical</option>
                  <option>Water Treatment</option>
                  <option>Laboratory</option>
                  <option>OEM</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-[12px] text-muted-foreground">
                  Requirement
                </label>
                <textarea
                  rows={4}
                  className="w-full resize-none rounded-lg border border-hairline bg-background p-3 text-[14px] outline-none focus:border-ke-red"
                  placeholder="Flow range, media, connections, certifications..."
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ke-red px-5 py-3 text-[14px] text-primary-foreground transition-transform hover:scale-[1.01]"
            >
              Submit Inquiry <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              By submitting you agree to be contacted about your enquiry.
            </p>
          </form>
        </div>
      </Section>

      {/* SECTION — Overview */}
      <Section
        id="overview"
        eyebrow="Overview"
        title="Purpose-built for accurate industrial flow measurement"
      >
        <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-start md:gap-12">
          <p className="text-[16px] md:text-[17px] leading-[1.65] text-muted-foreground">
            The KE Glass Tube Rotameter measures liquid and gas flow using a tapered borosilicate
            tube and a precision-machined float. It works without electricity, gives a direct visual
            reading, and stands up to the aggressive media typical of pharmaceutical and chemical
            plants. Every unit is factory calibrated and traceable to national standards.
          </p>
          <div className="overflow-hidden rounded-2xl bg-surface">
            <img
              src={explodedImg}
              alt="Exploded rotameter diagram"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* SECTION — Comparison */}
      <Section eyebrow="Comparison" title="Glass vs metal vs plastic rotameters">
        {/* Desktop / tablet table */}
        <div className="hidden overflow-hidden rounded-3xl border border-hairline md:block">
          <div className="grid grid-cols-4 border-b border-hairline bg-surface text-[13px]">
            <div className="p-5 text-muted-foreground">Parameter</div>
            <div className="p-5 border-l border-hairline">
              <div className="text-[11px] uppercase tracking-[0.1em] text-ke-red">Recommended</div>
              <div className="mt-1">Glass Tube</div>
            </div>
            <div className="p-5 border-l border-hairline">Metal Tube</div>
            <div className="p-5 border-l border-hairline">Plastic</div>
          </div>
          {compareRows.map(([label, a, b, c], i) => (
            <div
              key={label}
              className={`grid grid-cols-4 text-[14px] ${i % 2 ? "bg-surface/50" : ""}`}
            >
              <div className="p-5 text-muted-foreground">{label}</div>
              <div className="p-5 border-l border-hairline font-spec">{a}</div>
              <div className="p-5 border-l border-hairline font-spec text-muted-foreground">
                {b}
              </div>
              <div className="p-5 border-l border-hairline font-spec text-muted-foreground">
                {c}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile stacked cards */}
        <div className="grid gap-4 md:hidden">
          {[
            { name: "Glass Tube", tag: "Recommended", muted: false, idx: 1 },
            { name: "Metal Tube", tag: null, muted: true, idx: 2 },
            { name: "Plastic", tag: null, muted: true, idx: 3 },
          ].map((col) => (
            <div key={col.name} className="rounded-2xl border border-hairline bg-background p-5">
              <div className="flex items-center justify-between">
                <div className="text-[16px]">{col.name}</div>
                {col.tag && (
                  <span className="rounded-full bg-ke-red-soft px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] text-ke-red">
                    {col.tag}
                  </span>
                )}
              </div>
              <dl className="mt-4 divide-y divide-hairline text-[13px]">
                {compareRows.map((row) => (
                  <div key={row[0]} className="flex items-baseline justify-between gap-4 py-2.5">
                    <dt className="text-muted-foreground">{row[0]}</dt>
                    <dd
                      className={`font-spec text-right ${col.muted ? "text-muted-foreground" : ""}`}
                    >
                      {row[col.idx as 1 | 2 | 3]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION — Quality Assurance (shield badges removed) */}
      <Section eyebrow="Quality Assurance" title="Every unit passes a six-stage QA workflow">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {qaSteps.map((step, i) => (
            <div
              key={step}
              className="lift lift-hover group relative overflow-hidden rounded-2xl border border-hairline bg-background p-6"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-ke-red-soft text-[13px] text-ke-red font-num">
                  0{i + 1}
                </div>
              </div>
              <div className="mt-5 text-[16px] tracking-[-0.01em]">{step}</div>
              <div className="mt-1 text-[12px] text-muted-foreground">
                Documented · traceable · signed off
              </div>
              <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-ke-red transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION — Reviews */}
      <Section id="reviews" eyebrow="Customer Reviews" title="286 verified industrial buyers">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div className="rounded-3xl border border-hairline p-6 sm:p-8">
            <div className="font-num text-[64px] leading-none tracking-[-0.03em]">4.9</div>
            <div className="mt-2 flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-ke-red text-ke-red" />
              ))}
            </div>
            <div className="mt-1 text-[13px] text-muted-foreground">
              Based on 286 verified reviews
            </div>
            <div className="mt-6 space-y-2">
              {[5, 4, 3, 2, 1].map((s) => {
                const pct = s === 5 ? 78 : s === 4 ? 15 : s === 3 ? 5 : s === 2 ? 1 : 1;
                return (
                  <div key={s} className="flex items-center gap-3 text-[12px]">
                    <span className="w-3 text-muted-foreground">{s}</span>
                    <Star className="h-3 w-3 fill-muted-foreground text-muted-foreground" />
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface">
                      <div className="h-full bg-ke-red" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="font-num w-8 text-right text-muted-foreground">{pct}%</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reviews.slice(0, visibleReviewsCount).map((r, i) => (
                <div key={i} className="rounded-2xl border border-hairline p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ke-red-soft text-[13px] text-ke-red">
                      {r.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-[14px]">{r.company}</div>
                      <div className="text-[12px] text-muted-foreground">
                        {r.industry} · {r.country}
                      </div>
                    </div>
                    <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-1 text-[10px] text-success">
                      <Check className="h-3 w-3" /> Verified
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${i < r.rating ? "fill-ke-red text-ke-red" : "text-hairline"}`}
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-[14px] leading-[1.55] text-muted-foreground">{r.text}</p>
                </div>
              ))}
            </div>

            {visibleReviewsCount < reviews.length && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setVisibleReviewsCount((v) => Math.min(v + 6, reviews.length))}
                  className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background px-6 py-3 text-[13px] hover:bg-surface transition-colors cursor-pointer"
                >
                  Load More Reviews ({reviews.length - visibleReviewsCount} remaining)
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Review gallery */}
        <div className="mt-10">
          <div className="mb-4 text-[13px] text-muted-foreground">Customer installations</div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {[appPharma, appChemical, appWater, appLab, factoryAssembly, factoryCalibration].map(
              (img, i) => (
                <button
                  key={i}
                  className="group relative aspect-[4/3] w-40 sm:w-64 shrink-0 overflow-hidden rounded-2xl bg-surface"
                >
                  <img
                    src={img}
                    alt="Customer installation"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </button>
              ),
            )}
          </div>
        </div>
      </Section>

      {/* SECTION — FAQ */}
      <Section
        id="faq"
        eyebrow="FAQ"
        title="Answers to what buyers ask most"
        headerCenterDesktop={true}
      >
        <div className="mx-auto max-w-3xl divide-y divide-hairline rounded-3xl border border-hairline">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-surface"
                >
                  <span className="text-[15px]">{f.q}</span>
                  {open ? (
                    <Minus className="h-4 w-4 shrink-0" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0" />
                  )}
                </button>
                <div
                  className="grid overflow-hidden px-6 text-[14px] text-muted-foreground transition-all duration-300"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0">
                    <p className="pb-5 leading-[1.6]">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* SECTION — Related */}
      <Section eyebrow="Related Products" title="Complete your flow measurement stack">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pb-16 md:pb-0">
          {related.map((r, i) => (
            <a
              key={r.title}
              href="#"
              className="lift lift-hover group overflow-hidden rounded-2xl border border-hairline bg-background"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface">
                <img
                  src={[detailImg, angleImg, heroImg, explodedImg][i]}
                  alt={r.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between gap-3 p-5">
                <div className="min-w-0">
                  <div className="truncate text-[15px]">{r.title}</div>
                  <div className="text-[12px] text-muted-foreground">{r.note}</div>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Floating CTA — desktop */}
      <div className="pointer-events-none fixed bottom-6 right-6 z-40 hidden md:block">
        <div className="pointer-events-auto rounded-2xl border border-hairline bg-background/95 p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] backdrop-blur">
          <div className="text-[12px] uppercase tracking-[0.1em] text-muted-foreground">
            Need bulk pricing?
          </div>
          <div className="mt-2 flex gap-2">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-3 py-1.5 text-[12px] hover:bg-surface"
            >
              <img
                src="https://img.icons8.com/?size=100&id=7OeRNqg6S7Vf&format=png&color=000000"
                alt="WhatsApp"
                className="h-3.5 w-3.5 object-contain"
              />{" "}
              WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-ke-red px-3 py-1.5 text-[12px] text-primary-foreground"
            >
              Quote
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-3 py-1.5 text-[12px] hover:bg-surface"
            >
              <Phone className="h-3.5 w-3.5" /> Call
            </a>
          </div>
        </div>
      </div>

      {/* Sticky bottom CTA — mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-background/95 p-3 backdrop-blur md:hidden">
        <div className="grid grid-cols-3 gap-2">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-ke-red px-3 py-2.5 text-[13px] text-primary-foreground"
          >
            Quote
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-hairline px-3 py-2.5 text-[13px]"
          >
            <img
              src="https://img.icons8.com/?size=100&id=7OeRNqg6S7Vf&format=png&color=000000"
              alt="WhatsApp"
              className="h-5 w-5 object-contain"
            />{" "}
            WhatsApp
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-hairline px-3 py-2.5 text-[13px]"
          >
            <Phone className="h-3.5 w-3.5" /> Call
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/80 backdrop-blur-md">
          <div className="flex items-center justify-between p-4 text-white">
            <div className="text-[13px] text-white/70">
              {lightbox + 1} / {gallery.length}
            </div>
            <div className="flex items-center gap-2">
              <button
                className="rounded-full bg-white/10 p-2 hover:bg-white/20"
                title="Download CAD"
              >
                <Box className="h-4 w-4" />
              </button>
              <button
                onClick={() => setLightbox(null)}
                className="rounded-full bg-white/10 p-2 hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="relative flex flex-1 items-center justify-center px-6">
            <button
              onClick={() =>
                setLightbox((v) => (v === null ? v : (v - 1 + gallery.length) % gallery.length))
              }
              className="absolute left-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <img
              src={gallery[lightbox].src}
              alt={gallery[lightbox].alt}
              className="max-h-[75vh] max-w-[85vw] rounded-xl object-contain"
            />
            <button
              onClick={() => setLightbox((v) => (v + 1) % gallery.length)}
              className="absolute right-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto p-4">
            {gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                  i === lightbox
                    ? "border-white"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={g.src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  headerCenterDesktop = false,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  headerCenterDesktop?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-[1440px] px-4 sm:px-6 py-8 md:py-[120px]">
      <div
        className={`mb-6 flex flex-wrap items-end gap-4 md:mb-14 ${
          headerCenterDesktop ? "justify-start md:justify-center md:text-center" : "justify-between"
        }`}
      >
        <div className={headerCenterDesktop ? "w-full md:flex md:flex-col md:items-center" : ""}>
          <div className="text-[12px] uppercase tracking-[0.14em] text-ke-red">{eyebrow}</div>
          <h2 className="mt-2 max-w-2xl text-[28px] leading-[1.1] tracking-[-0.02em] sm:text-[32px] md:text-[42px]">
            {title}
          </h2>
        </div>
      </div>
      {children}
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[12px] text-muted-foreground">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="h-11 w-full rounded-lg border border-hairline bg-background px-3 text-[14px] outline-none placeholder:text-muted-foreground/60 focus:border-ke-red"
      />
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-[13px]">{title}</div>
      <ul className="mt-4 space-y-2 text-[13px] text-muted-foreground">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="hover:text-foreground">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
