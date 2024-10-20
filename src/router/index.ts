import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ProjectsView from '@/views/dashboard/ProjectsView.vue'
import OverviewView from '@/views/dashboard/OverviewView.vue'
import EngineeringView from '@/views/dashboard/EngineeringView.vue'
import HumanResourceView from '@/views/dashboard/HumanResourceView.vue'
import FinanceView from '@/views/dashboard/FinanceView.vue'
import AnalyticsView from '@/views/dashboard/AnalyticsView.vue'
import InfrastructureView from '@/views/dashboard/InfrastructureView.vue'

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
          name: 'Overview',
          component: OverviewView
        },
        {
          path: 'projects',
          name: 'Projects',
          component: ProjectsView
        },
        {
          path: 'engineering',
          name: 'Engineering',
          component: EngineeringView
        },
        {
          path: 'humanresource',
          name: 'Human Resource',
          component: HumanResourceView
        },
        {
          path: 'finance',
          name: 'Finance',
          component: FinanceView
        },
        {
          path: 'analytics',
          name: 'Analytics',
          component: AnalyticsView
        },
        {
          path: 'infrastructure',
          name: 'Infrastructure',
          component: InfrastructureView
        }
      ]
    }
  ]
})

export default router
