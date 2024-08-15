export interface NavObject {
  title: string;
  route?: string;
  icon?: string;
  children?: NavObject[];
}

const navConfig: NavObject[] = [
  {
    title: "users.title",
    icon: "users",
    route: "users",
    children: [
      {
        title: "users.management",
        icon: "users-settings",
        route: "users/management",
      },
      {
        title: "users.settings",
        icon: "settings-solid",
        route: "users/settings",
        children: [
          {
            title: "mainPage",
            icon: "main-page",
            route: "users/settings",
          },
        ],
      },
    ],
  },
  {
    title: "dead.title",
    icon: "dead",
    route: "dead",
    children: [
      {
        title: "dead.list",
        icon: "dead-list",
        route: "dead/list",
      },
    ],
  },
];

export default navConfig;
