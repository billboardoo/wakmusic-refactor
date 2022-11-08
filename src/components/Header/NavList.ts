interface NavListType {
  path: string;
  id: string;
  value: string;
}

export const NavList: NavListType[] = [
  {
    path: "/charts",
    id: "charts",
    value: "CHARTS",
  },
  {
    path: "/albums",
    id: "albums",
    value: "ALBUMS",
  },
  {
    path: "/artists",
    id: "artists",
    value: "ARTISTS",
  },
  {
    path: "/news",
    id: "news",
    value: "NEWS",
  },
  {
    path: "/teams",
    id: "teams",
    value: "TEAMS",
  },
];
