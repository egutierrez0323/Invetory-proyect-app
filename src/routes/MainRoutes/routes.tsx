import { Dashboard, Home, Users } from '@/pages'
import { RouteType } from '../model/route.model'

export const Routes: RouteType = [
  {
    path: '/',
    element: <Home />,
    sidebarProps: {
      displayText: 'Home'
    }
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    sidebarProps: {
      displayText: 'Dashboard'
    }
  },
  {
    path: '/users',
    element: <Users />,
    sidebarProps: {
      displayText: 'Users'
    }
  }
]
