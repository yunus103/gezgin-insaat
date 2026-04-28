"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  RiMenu3Line,
  RiCloseLine,
  RiArrowDownSLine,
  RiPhoneLine,
  RiMailLine,
} from "react-icons/ri";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  openInNewTab?: boolean;
  subLinks?: NavItem[];
};

function resolveHref(item: NavItem): string {
  return item.href || "#";
}

export function Header({
  settings,
  navigation,
}: {
  settings: any;
  navigation: any;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const links: NavItem[] = navigation?.headerLinks || [];
  // Menü açıldığındaki scroll pozisyonunu sakla — cleanup çalışsa bile kaybolmasın
  const savedScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll kilidi
  useEffect(() => {
    if (menuOpen) {
      // Pozisyonu ref'e kaydet, SONRA body'i kilitle
      savedScrollY.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${savedScrollY.current}px`;
      document.body.style.width = "100%";
    } else {
      // Kilidi aç ve ref'teki pozisyona geri dön
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      // savedScrollY > 0 ise geri dön (ilk render'da 0 ise scroll'a gerek yok)
      if (savedScrollY.current > 0) {
        window.scrollTo({ top: savedScrollY.current, behavior: "instant" });
      }
    }
    return () => {
      // Unmount'ta body kilitliyse temizle VE pozisyona geri dön
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (savedScrollY.current > 0) {
        window.scrollTo({ top: savedScrollY.current, behavior: "instant" });
      }
    };
  }, [menuOpen]);

  // Sayfa değiştiğinde menüyü kapat
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (item: NavItem) => {
    const href = resolveHref(item);
    if (href === "/" && pathname !== "/") return false;
    return pathname.startsWith(href);
  };

  const isHomePage = pathname === "/";
  // Force client-side evaluation to fix ISR hydration bug
  const isTransparent = mounted && isHomePage && !scrolled && !menuOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        !isTransparent
          ? "bg-background/95 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent border-b border-white/10",
      )}
      style={{ width: "100%", maxWidth: "100vw", boxSizing: "border-box" }}
    >
      {/* Inner bar */}
      <div
        className="flex h-16 md:h-20 items-center justify-between w-full px-4 md:px-8 lg:px-16"
        style={{ boxSizing: "border-box" }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0 group"
          style={{ minWidth: 0 }}
        >
          {settings?.logo?.asset?.url ? (
            <img
              src={settings.logo.asset.url}
              alt={settings.logo.alt || settings.siteName || "Logo"}
              className="h-12 md:h-16 w-auto transition-all duration-300 group-hover:brightness-110 group-hover:scale-[1.02] active:scale-95 drop-shadow-[0_0_6px_rgba(0,0,0,0.3)]"
              style={{
                display: "block",
                maxWidth: "180px",
                objectFit: "contain",
              }}
            />
          ) : (
            <span
              className={cn(
                "font-bold text-xl md:text-2xl tracking-tight leading-none font-headline transition-colors",
                isTransparent ? "text-white" : "text-foreground",
              )}
            >
              {settings?.siteName}
            </span>
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 shrink-0">
          {links.map((item, i) => (
            <DesktopNavItem
              key={i}
              item={item}
              active={isActive(item)}
              isTransparent={isTransparent}
            />
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="flex items-center md:hidden shrink-0">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-sm transition-all duration-200 active:scale-90",
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-foreground hover:bg-muted",
            )}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <RiCloseLine size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <RiMenu3Line size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              style={{ top: 0 }}
            />

            {/* Slide-in Panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 h-screen bg-background z-50 md:hidden flex flex-col shadow-2xl"
              style={{
                width: "min(100vw, 420px)",
                maxWidth: "100vw",
                overflowY: "auto",
                overflowX: "hidden",
              }}
            >
              {/* Drawer Header */}
              <div
                className="flex h-16 items-center justify-between border-b border-border/40 shrink-0"
                style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
              >
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center shrink-0"
                >
                  {settings?.logo?.asset?.url ? (
                    <img
                      src={settings.logo.asset.url}
                      alt={settings.logo.alt || settings.siteName || "Logo"}
                      className="h-10 w-auto"
                      style={{
                        display: "block",
                        maxWidth: "150px",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <span className="font-bold text-xl tracking-tight font-headline">
                      {settings?.siteName}
                    </span>
                  )}
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Menüyü kapat"
                  className="flex items-center justify-center w-10 h-10 rounded-sm text-foreground hover:bg-muted transition-colors"
                >
                  <RiCloseLine size={26} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex-1 flex flex-col justify-center px-8 py-10">
                <nav className="flex flex-col gap-2">
                  {links.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.07 + 0.1,
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                    >
                      <MobileNavItem
                        item={item}
                        active={isActive(item)}
                        onClose={() => setMenuOpen(false)}
                        pathname={pathname}
                      />
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="shrink-0 border-t border-border/40 px-8 py-8 space-y-3 bg-muted/20"
              >
                {settings?.contactInfo?.phone && (
                  <a
                    href={`tel:${settings.contactInfo.phone}`}
                    className="flex items-center gap-3 text-base font-semibold hover:text-primary transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <RiPhoneLine size={16} className="text-primary" />
                    </span>
                    {settings.contactInfo.phone}
                  </a>
                )}
                {settings?.contactInfo?.email && (
                  <a
                    href={`mailto:${settings.contactInfo.email}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <RiMailLine size={16} className="text-primary" />
                    </span>
                    {settings.contactInfo.email}
                  </a>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ─── Desktop Nav Item ─────────────────────────────────────── */
function DesktopNavItem({
  item,
  active,
  isTransparent,
}: {
  item: NavItem;
  active: boolean;
  isTransparent: boolean;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isSubActive = item.subLinks?.some(
    (sub) => pathname === resolveHref(sub),
  );
  const reallyActive = active || isSubActive;

  const linkClass = cn(
    "text-sm font-medium tracking-wide transition-all duration-200 relative group",
    reallyActive
      ? "text-primary font-semibold"
      : isTransparent
        ? "text-white/85 hover:text-white"
        : "text-foreground/70 hover:text-foreground",
  );

  if (!item.subLinks || item.subLinks.length === 0) {
    return (
      <Link
        href={resolveHref(item)}
        target={item.openInNewTab ? "_blank" : undefined}
        rel={item.openInNewTab ? "noopener noreferrer" : undefined}
        className={cn(
          linkClass,
          "after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
          reallyActive && "after:w-full",
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={cn(linkClass, "flex items-center gap-1 cursor-default")}
        aria-expanded={isOpen}
      >
        {item.label}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <RiArrowDownSLine size={16} />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 top-full pt-3 min-w-[210px]"
          >
            <div className="bg-popover border border-border/60 rounded-sm shadow-xl p-1.5">
              {item.subLinks!.map((sub, j) => {
                const subActive = pathname === resolveHref(sub);
                return (
                  <Link
                    key={j}
                    href={resolveHref(sub)}
                    target={sub.openInNewTab ? "_blank" : undefined}
                    rel={sub.openInNewTab ? "noopener noreferrer" : undefined}
                    className={cn(
                      "flex items-center px-4 py-2.5 text-sm font-medium rounded-sm hover:bg-muted transition-colors",
                      subActive
                        ? "text-primary bg-primary/5"
                        : "text-foreground/70 hover:text-foreground",
                    )}
                  >
                    {sub.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Mobile Nav Item ──────────────────────────────────────── */
function MobileNavItem({
  item,
  active,
  onClose,
  pathname,
}: {
  item: NavItem;
  active: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const [subOpen, setSubOpen] = useState(false);
  const isSubActive = item.subLinks?.some(
    (sub) => pathname === resolveHref(sub),
  );
  const reallyActive = active || isSubActive;

  if (!item.subLinks || item.subLinks.length === 0) {
    return (
      <Link
        href={resolveHref(item)}
        onClick={onClose}
        className={cn(
          "block py-3.5 text-2xl font-bold font-headline tracking-tight border-b border-border/20 transition-colors",
          reallyActive
            ? "text-primary"
            : "text-foreground/80 hover:text-primary",
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-border/20">
      <button
        onClick={() => setSubOpen(!subOpen)}
        className={cn(
          "flex items-center justify-between w-full py-3.5 text-2xl font-bold font-headline tracking-tight transition-colors",
          reallyActive
            ? "text-primary"
            : "text-foreground/80 hover:text-primary",
        )}
      >
        {item.label}
        <motion.span
          animate={{ rotate: subOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <RiArrowDownSLine size={22} />
        </motion.span>
      </button>

      <AnimatePresence>
        {subOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden" }}
          >
            <div className="pl-4 pb-3 flex flex-col gap-1">
              {item.subLinks.map((sub, j) => {
                const subActive = pathname === resolveHref(sub);
                return (
                  <Link
                    key={j}
                    href={resolveHref(sub)}
                    onClick={onClose}
                    className={cn(
                      "py-2 text-lg font-medium transition-colors",
                      subActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    {sub.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
