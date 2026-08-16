export function allMatches({ color = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      width="20px"
      height="20px"
      viewBox="0 0 256 256"
      id="Flat"
    >
      <path d="M120,48v64a7.9954,7.9954,0,0,1-8,8H48a7.99539,7.99539,0,0,1-8-8V48a7.99539,7.99539,0,0,1,8-8h64A7.9954,7.9954,0,0,1,120,48Zm88-8H144a7.99539,7.99539,0,0,0-8,8v64a7.9954,7.9954,0,0,0,8,8h64a7.9954,7.9954,0,0,0,8-8V48A7.9954,7.9954,0,0,0,208,40Zm-96,96H48a7.99539,7.99539,0,0,0-8,8v64a7.9954,7.9954,0,0,0,8,8h64a7.9954,7.9954,0,0,0,8-8V144A7.9954,7.9954,0,0,0,112,136Zm96,0H144a7.99539,7.99539,0,0,0-8,8v64a7.9954,7.9954,0,0,0,8,8h64a7.9954,7.9954,0,0,0,8-8V144A7.9954,7.9954,0,0,0,208,136Z" />
    </svg>
  );
}

export function upcomingMatches({ color = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6V12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.24 16.24L12 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function finishedMatches({ color = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.29417 12.9577L10.5048 16.1681L17.6729 9"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
    </svg>
  );
}
