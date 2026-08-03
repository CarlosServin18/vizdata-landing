import { COLORS, STRINGS } from '../../constants';

export default function Footer() {
  return (
    <footer
      className="py-12"
      style={{
        backgroundColor: COLORS.dark,
        color: COLORS.white,
      }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Column */}
          <div>
            <h4 className="font-bold mb-4">{STRINGS.footer.company}</h4>
            <ul className="space-y-2">
              {STRINGS.footer.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="opacity-80 hover:opacity-100 transition"
                    style={{ textDecoration: 'none', color: COLORS.white }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-bold mb-4">{STRINGS.footer.legal}</h4>
            <ul className="space-y-2">
              {STRINGS.footer.legalLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="opacity-80 hover:opacity-100 transition"
                    style={{ textDecoration: 'none', color: COLORS.white }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand Column */}
          <div>
            <h4 className="font-bold mb-4">VizData</h4>
            <p className="opacity-80">Transformamos tus datos en decisiones.</p>
          </div>
        </div>

        <div
          className="border-t pt-6 text-center text-sm opacity-80"
          style={{
            borderColor: 'rgba(255,255,255,0.1)',
          }}
        >
          <p>{STRINGS.footer.copyright.replace('{year}', new Date().getFullYear())}</p>
        </div>
      </div>
    </footer>
  );
}
