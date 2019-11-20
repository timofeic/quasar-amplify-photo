const routes = [{
  path: '/',
  component: () => import('layouts/MyLayout.vue'),
  children: [{
    path: '',
    name: 'photos',
    component: () => import('pages/Photos.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: 'albums',
    name: 'Albums',
    component: () => import('pages/Albums.vue'),
    meta: {
      requiresAuth: true
    }
  }]
},
{
  path: '/auth',
  component: () => import('layouts/MyLayout.vue'),
  children: [{
    path: '',
    name: 'auth',
    component: () => import('pages/Auth.vue'),
    meta: {
      requiresAuth: false
    }
  }]
},
{
  path: '/settings',
  component: () => import('layouts/MyLayout.vue'),
  children: [{
    name: 'settings',
    path: '',
    component: () => import('pages/Settings.vue'),
    meta: {
      requiresAuth: true
    }
  }]
},
]
// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}
export default routes