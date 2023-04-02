import { Route, Routes } from 'react-router-dom'
import { RouteType } from '../model/route.model'
import React from 'react'

interface Props {
  routes: RouteType[]
}

export const RoutesGenerate : React.FC<Props> = (props) => {
  const { routes } = props
  return (
    <Routes>
      {routes.map((route: RouteType) => {
        return <Route key={route.path} path={route.path} element={route.element} />
      })}
    </Routes>

  )
}
