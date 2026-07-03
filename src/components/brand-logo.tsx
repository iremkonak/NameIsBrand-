type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({
  compact = false,
  className = "",
}: BrandLogoProps) {
  return (
    <span className={`brand-logo ${compact ? "is-compact" : ""} ${className}`}>
      <svg
        className="brand-logo-mark"
        viewBox="0 0 120 120"
        role="img"
        aria-label="NAB, Name is Brand"
      >
        <defs>
          <linearGradient id="nab-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f0d3aa" />
            <stop offset="0.48" stopColor="#d8b98a" />
            <stop offset="1" stopColor="#a96d58" />
          </linearGradient>
        </defs>

        <circle
          className="brand-logo-orbit"
          cx="60"
          cy="60"
          r="49"
          pathLength="100"
        />
        <circle className="brand-logo-dot" cx="102" cy="34" r="2.2" />

        <g fill="url(#nab-gold)">
          <text
            className="brand-logo-n"
            x="28"
            y="80"
            fontFamily="Cormorant Garamond, Times New Roman, serif"
            fontSize="70"
            fontWeight="500"
          >
            N
          </text>
          <text
            className="brand-logo-b"
            x="62"
            y="84"
            fontFamily="Cormorant Garamond, Times New Roman, serif"
            fontSize="52"
            fontWeight="500"
          >
            B
          </text>
        </g>
      </svg>

      {!compact && (
        <span className="brand-logo-wordmark">
          <strong>NAME IS BRAND</strong>
          <span aria-hidden="true" />
          <small>YOUR REPUTATION IS CAPITAL</small>
        </span>
      )}
    </span>
  );
}
