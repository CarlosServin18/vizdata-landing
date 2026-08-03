import { COLORS } from '../../constants';

export default function Button({ children, href, className = '', ...props }) {
  const baseStyles = `bg-${COLORS.primary.replace('#', '')} hover:bg-${COLORS.primaryDark.replace('#', '')} text-white font-semibold py-3 px-8 rounded shadow transition inline-block`;

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${className}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}
