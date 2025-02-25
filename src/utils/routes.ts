interface IRoutes {
  title: string;
  path: string;
}

export const navBarRoutes: IRoutes[] = [
  {
    title: "Home",
    path: "#",
  },
  {
    title: "Sobre",
    path: "#",
  },
  {
    title: "Portfólio",
    path: "#",
  },
  {
    title: "Contatos",
    path: "#",
  },
];

export const routes = {
  home: "#",
  about: "#",
  portfolio: "#",
  contacts: "#",
};
