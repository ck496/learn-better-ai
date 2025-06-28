// Static Data for Nav button names and paths
export interface NavButtonValues {
  label: string;
  path: string;
}

export const navButtonValues: NavButtonValues[] = [
  { label: "Home", path: "/" },
  { label: "Notes", path: "/notes" },
  { label: "Tools", path: "/tools" },
  { label: "Leaderboards", path: "/leaderboards" },
  { label: "About", path: "/about" },
];
