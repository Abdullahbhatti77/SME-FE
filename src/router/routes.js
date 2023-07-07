const routes = [
  {
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/",
    component: () => import("layouts/FrontEndLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "register", component: () => import("pages/RegisterPage.vue") },
      { path: "home", component: () => import("pages/HomeSme.vue") },
      { path: "login", component: () => import("pages/LoginPage.vue") },
      { path: "members", component: () => import("pages/MembersPage.vue")},
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
