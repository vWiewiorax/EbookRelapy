import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/20 bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col gap-12">
          {/* Top section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo & Copyright */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <Link href="/" className="font-serif text-xl tracking-wide">
                RELAPY
              </Link>
              <p className="text-sm text-muted-foreground">
                © {currentYear} Wszelkie prawa zastrzeżone.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 border-t border-border/20 pt-8">
  <p className="text-sm text-muted-foreground">
    Bezpieczne metody płatności
  </p>

  <div className="flex flex-wrap justify-center items-center gap-6 opacity-80">
    {/* Local */}
    <Image src="/payments/blik.svg" alt="BLIK" width={48} height={24} />
    <Image src="/payments/link.png" className="bg-white p-2" alt="Link" width={60} height={38} />

    {/* Cards */}
    <Image src="/payments/visa.png" alt="Visa" width={48} height={24} />
    <Image src="/payments/mastercard.png" alt="Mastercard" width={48} height={24} />
    <Image src="/payments/maestro.png" alt="Maestro" width={48} height={24} />
  </div>
</div>
            {/* Links */}
            <nav className="flex flex-wrap justify-center gap-8">
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                O nas
              </Link>
              <Link
                href="/policy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Polityka prywatności
              </Link>
              <Link
                href="/regulamin"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Regulamin
              </Link>
            </nav>
          </div>

          {/* Payment methods banner */}
          {/* Payment methods banner */}


        </div>
      </div>
    </footer>
  );
};

export default Footer;
