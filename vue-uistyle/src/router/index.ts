import { createRouter, createWebHashHistory } from 'vue-router'

import OverviewView from '../views/OverviewView.vue'
import ButtonGuideView from '../views/ButtonGuideView.vue'

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: '/',
      name: 'overview',
      component: OverviewView,
      meta: {
        title: 'Overview',
      },
    },
    {
      path: '/components/button',
      name: 'button',
      component: ButtonGuideView,
      meta: {
        title: 'Button',
      },
    },
  ],

  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = `${to.meta.title ?? '가이드'} | Vue UI Style`
})

export default router