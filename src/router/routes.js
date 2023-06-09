const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'signup', component: () => import('pages/Signup.vue') },
      { path: 'questions', component: () => import('pages/Questions.vue') },
      {
        path: 'questions/new',
        component: () => import('pages/QuestionsNew.vue'),
      },
      { path: 'knowledge', component: () => import('pages/Knowledge.vue') },
      {
        path: 'knowledge/new',
        component: () => import('pages/KnowledgeNew.vue'),
      },
      { path: 'community', component: () => import('pages/Community.vue') },
      {
        path: 'community/new',
        component: () => import('pages/CommunityNew.vue'),
      },
      { path: 'notice', component: () => import('pages/Notice.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
