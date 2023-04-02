
import { ReactNode } from 'react'

export type RouteType = {
  index?: boolean,
  path?: string,
  element: ReactNode,
  sidebarProps?: {
  displayText: string,
  icon?: ReactNode;
  };
};
