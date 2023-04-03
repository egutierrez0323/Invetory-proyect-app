import { Route  } from 'react-router-dom'
import { RouteType } from '../model/route.model'
import React from 'react'

interface Props {
  routes: RouteType
}

export const RoutesGenerate = (props : Props) => {
  const { path,element } = props.routes
    
  return <Route key={path} path={path} element={element} />

}
