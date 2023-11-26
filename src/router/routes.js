const routes = [
  {
    path: '/',
    redirect: { name: 'sign_in' },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/explore',
        name: 'explore',
        component: () => import('pages/explore.vue')
      }
    ]
  },
  {
    path: '/user/sign_in',
    name: 'sign_in',
    component: () => import('pages/user/sign_in.vue')
  },
  {
    path: '/user/sign_up',
    name: 'sign_up',
    component: () => import('pages/user/sign_up.vue')
  },
  {
    path: '/user/password/forgot',
    name: 'password_forgot',
    component: () => import('pages/user/password_forgot.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
