export function Appearences({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M3 7L6 4H9C9 4.39397 9.0776 4.78407 9.22836 5.14805C9.37913 5.51203 9.6001 5.84274 9.87868 6.12132C10.1573 6.3999 10.488 6.62087 10.8519 6.77164C11.2159 6.9224 11.606 7 12 7C12.394 7 12.7841 6.9224 13.1481 6.77164C13.512 6.62087 13.8427 6.3999 14.1213 6.12132C14.3999 5.84274 14.6209 5.51203 14.7716 5.14805C14.9224 4.78407 15 4.39397 15 4H18L21 7L20.5 12L18 10.5V20H6V10.5L3.5 12L3 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Time({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.24 16.24L12 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Ball({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 256 256"
      fill="none"
      className={className}
    >
      <circle
        cx="127.98"
        cy="128.07"
        r="118.73"
        stroke="currentColor"
        strokeWidth="8"
      />
      <line
        x1="211.94"
        x2="44.03"
        y1="44.11"
        y2="212.02"
        stroke="currentColor"
        strokeWidth="8"
      />
      <line
        x1="44.03"
        x2="211.94"
        y1="44.11"
        y2="212.02"
        stroke="currentColor"
        strokeWidth="8"
      />
      <path
        d="M122.33 9.2A96.16 96.16 0 0 1 9.6 121.94"
        stroke="currentColor"
        strokeWidth="8"
      />
      <path
        d="M246.75 133.62A96.15 96.15 0 0 0 134 246.36"
        stroke="currentColor"
        strokeWidth="8"
      />
    </svg>
  );
}

export function Assist({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 -20.62 67 67"
      fill="currentColor"
      className={className}
    >
      <path
        d="M179 256.625C179 263.46 176.939 269 174.4 269a1.845 1.845 0 0 1-.7-.16 4.6 4.6 0 0 1-1.145.16h-52.182a5.753 5.753 0 0 1-1.767-.31c-3.837-.79-6.606-3.016-6.606-5.644 0-2.168 1.857-3.935 4.7-5.1a18.859 18.859 0 0 1 2.671-.86s4.758-1.772 10.928-4.45l-.167-.267a.881.881 0 0 1 .366-1.256 1.049 1.049 0 0 1 1.366.337l.245.391c.754-.335 1.519-.677 2.3-1.033l-.275-.438a.88.88 0 0 1 .366-1.256 1.049 1.049 0 0 1 1.366.337l.332.53q1.13-.53 2.269-1.079l-.333-.531a.88.88 0 0 1 .366-1.256 1.049 1.049 0 0 1 1.366.337l.365.581c1.55-.775 3.087-1.573 4.569-2.389a4.383 4.383 0 0 1 .86-.343c3.4 1.581 9.139 2.62 15.651 2.62.189 0 .351-.006.535-.007a13.02 13.02 0 0 1 4.938-.2c5.541-.468 8.539-4.342 9.178-4.358 2.7-.77.868 2.476 1.558 4.189A25.35 25.35 0 0 1 179 256.625Z"
        transform="translate(-112 -243.236)"
      />
    </svg>
  );
}

export function Card({ color = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ color }}
    >
      <path d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.0799 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.0799 19 6.2V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5902 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5902 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V6.2Z" />
    </svg>
  );
}
