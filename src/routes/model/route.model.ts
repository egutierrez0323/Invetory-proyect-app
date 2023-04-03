
import { ReactNode } from 'react'

export type RouteType = {
  index?: boolean,
  path?: string,
  element: ReactNode,
  exact?: boolean,
  sidebarProps?: {
  displayText: string,
  icon?: ReactNode;
  };
};
