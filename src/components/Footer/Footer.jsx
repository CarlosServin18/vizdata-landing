import { COLORS, STRINGS } from '../../constants';

export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{
        backgroundColor: COLORS.dark,
        color: COLORS.white,
      }}
    >
      <div className="container mx-auto px-6 text-center">
        <p className="mb-2">
          {STRINGS.footer.copyright.replace('{year}', new Date().getFullYear())}
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">
            {STRINGS.footer.privacy}
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            {STRINGS.footer.terms}
          </a>
        </div>
      </div>
    </footer>
  );
}
