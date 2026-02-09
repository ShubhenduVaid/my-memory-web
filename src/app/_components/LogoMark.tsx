type Props = {
  className?: string;
};

export function LogoMark({ className }: Props) {
  return (
    <svg
      className={className}
      // Cropped viewBox so the mark reads well at small sizes in the header.
      viewBox="13.5 8 44 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Head outline */}
      <path
        d="M50 56H26V49C26 45.5 24.6 42.5 22.1 40.4C19.5 38.2 18.2 35.1 18.5 32.1C18.8 29.2 20.8 26.9 23.6 26.1C20.6 24.7 19.8 20.8 21.9 18.3C25.5 14 31.2 11.6 37 12.3C42.7 13 47.6 16.8 50.3 21.9C53.7 28.1 53.5 36 49.8 41.8C48.7 43.5 47.3 45.1 45.6 46.4V56H50Z"
        strokeWidth="2.2"
      />

      {/* Nose/profile hint */}
      <path
        d="M23.6 26.1L18.2 28.6L23.1 30.1"
        strokeWidth="2.2"
      />

      {/* Gears */}
      <g strokeWidth="1.8">
        <path d="M34 14L35.79 17.17L39.31 16.69L38.83 20.21L42 22L38.83 23.79L39.31 27.31L35.79 26.83L34 30L32.21 26.83L28.69 27.31L29.17 23.79L26 22L29.17 20.21L28.69 16.69L32.21 17.17L34 14Z" />
        <circle cx="34" cy="22" r="3.8" />
      </g>

      <g strokeWidth="1.8">
        <path d="M43 27L44.22 29.3L46.83 29.1L46.1 31.63L48 33L46.1 34.37L46.83 36.9L44.22 36.7L43 39L41.78 36.7L39.17 36.9L39.9 34.37L38 33L39.9 31.63L39.17 29.1L41.78 29.3L43 27Z" />
        <circle cx="43" cy="33" r="2.6" />
      </g>
    </svg>
  );
}
