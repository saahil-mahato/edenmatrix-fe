import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ProjectsView from '@/views/ProjectsView.vue'
import OverviewView from '@/views/OverviewView.vue'
import EngineeringView from '@/views/EngineeringView.vue'
import HumanResourceView from '@/views/HumanResourceView.vue'
import FinanceView from '@/views/FinanceView.vue'
import AnalyticsView from '@/views/AnalyticsView.vue'
import InfrastructureView from '@/views/InfrastructureView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      children: [
        {
          path: 'overview',
          name: 'overview',
          component: OverviewView
        },
        {
          path: 'projects',
          name: 'projects',
          component: ProjectsView
        },
        {
          path: 'engineering',
          name: 'engineering',
          component: EngineeringView
        },
        {
          path: 'human resource',
          name: 'human resource',
          component: HumanResourceView
        },
        {
          path: 'finance',
          name: 'finance',
          component: FinanceView
        },
        {
          path: 'analytics',
          name: 'analytics',
          component: AnalyticsView
        },
        {
          path: 'infrastructure',
          name: 'infrastructure',
          component: InfrastructureView
        }
      ]
    }
  ]
})

export default router
