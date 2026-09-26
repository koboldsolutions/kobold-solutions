import Link from 'next/link';

export default function ActionLink({ href, children, className = '' }) {
  return (
    <Link href={href} className={`ks-button ${className}`}>
      {children}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 18 18 6M6 6h12v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}
