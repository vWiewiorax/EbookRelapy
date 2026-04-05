import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "@relapy",
      href: "https://www.tiktok.com/@relapyblog",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
        </svg>
      ),
    },
    {
      name: "@relapyblog",
      href: "https://www.instagram.com/relapyblog/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col gap-12">
          {/* Top section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            {/* Logo & Copyright & Socials */}
            <div className="flex flex-col items-center md:items-start ">
              <Link href="/" className="font-serif text-xl tracking-wide">
                RELAPY
              </Link>
              
              <p className="text-sm text-muted-foreground">
                © {currentYear} Wszelkie prawa zastrzeżone.
              </p>

              {/* Social Media Links */}
             
            </div>

            {/* Payment Methods */}
            <div className="flex flex-col items-center gap-4 pt-1">
              <p className="text-sm text-muted-foreground">
                Bezpieczne metody płatności
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 opacity-80">
                <Image src="/payments/blik.png" alt="BLIK" width={48} height={24} />
                <Image src="/payments/link.png" className="bg-white p-2 rounded" alt="Link" width={60} height={38} />
                <Image src="/payments/visa.png" alt="Visa" width={48} height={24} />
                <Image src="/payments/mastercard.png" alt="Mastercard" width={48} height={24} />
                <Image src="/payments/maestro.png" alt="Maestro" width={48} height={24} />
              </div>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3 max-w-s">
              {[
                { href: "/about", label: "O nas" },
                { href: "/policy", label: "Polityka prywatności" },
                { href: "/regulamin", label: "Regulamin" },
                { href: "/cookies", label: "Cookies" },
                { href: "/opinion_police", label: "Polityka opinii" },
                { href: "/contact", label: "Kontakt" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
             
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;