import { Dashboard, Home, Users, NotFoundPage } from '@/pages'
import { RouteType } from '../model/route.model'

export const RoutesAPP: RouteType[] = [
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
  },
  {
    path: '/*',
    element: <NotFoundPage />,
    exact: true,
    sidebarProps: {
      displayText: 'Not Found'
    }
  }
]
