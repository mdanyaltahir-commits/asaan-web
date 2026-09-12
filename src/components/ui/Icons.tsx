import type { SVGProps } from "react";

export function Icon({ name, className = "h-5 w-5", ...props }: SVGProps<SVGSVGElement> & { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    search: <><circle cx="11" cy="11" r="6" /><path d="m16 16 4 4" /></>,
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    chevron: <path d="m8 10 4 4 4-4" />,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    home: <><path d="m3 11 9-7 9 7" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
    tag: <><path d="m20 13-7 7-9-9V4h7l9 9Z" /><circle cx="8.5" cy="8.5" r="1" /></>,
    key: <><circle cx="8" cy="15" r="4" /><path d="m11 12 8-8m-2 2 2 2m-5 1 2 2" /></>,
    shield: <><path d="M12 3 5 6v5c0 4.5 2.8 8.1 7 10 4.2-1.9 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    document: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h5M9 12h6M9 16h6" /></>,
    merge: <><path d="M7 4v5a3 3 0 0 0 3 3h7" /><path d="m14 9 3 3-3 3" /><path d="M7 20v-3a5 5 0 0 1 5-5" /></>,
    building: <><path d="M4 21V7l8-4v18M12 9h8v12M7 9h2M7 13h2M7 17h2M15 13h2M15 17h2" /></>,
    city: <><path d="M3 21V10h7v11M10 21V4h8v17M18 21v-8h3v8M6 14h1M6 17h1M13 8h2M13 12h2M13 16h2" /></>,
    check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
    chart: <><path d="M4 20V5M4 20h16" /><path d="m7 16 4-5 3 2 5-7" /></>,
    wallet: <><path d="M4 7a3 3 0 0 1 3-3h11v16H6a2 2 0 0 1-2-2Z" /><path d="M4 8h14M14 12h7v5h-7a2.5 2.5 0 0 1 0-5Z" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    expand: <><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></>,
  };

  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>{paths[name] ?? paths.home}</svg>;
}
