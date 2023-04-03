
import { useTranslation } from 'react-i18next'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SidebarApp } from './components/layout/SidebarApp/SidebarApp'
// import { Dashboard, Home } from './pages'
import { RoutesGenerate, RoutesAPP } from './routes'

function App () {
  const [t, i18n] = useTranslation()

  return (
    <BrowserRouter>
      <div className='App'>
        App pro 😎
        {/*
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/users'>Users</Link></li>

          </ul>
        </nav> */}

        <Routes>
          <Route path='/' element={<SidebarApp routes={RoutesAPP} />}>
            {
              RoutesAPP.map((route) => {
                const { path, element } = route
                return <Route key={path} path={path} element={element} />
              })
            }
          </Route>
        </Routes>
        <h1>{t('title')}</h1>
        <button onClick={() => i18n.changeLanguage('en')}>change</button>

      </div>
    </BrowserRouter>
  )
}
export default App
