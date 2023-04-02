import { Route, Routes } from 'react-router-dom'
import { RouteType } from '../model/route.model'

export const RoutesGenerate = (props : RouteType[]) => {
  const routes : RouteType[] = props
  console.log(routes)
  return (
    <Routes>
      {routes.map((route) => {
        return <Route key={route.path} path={route.path} element={route.element} />
      })}
    </Routes>

  )
}
