
import { useTranslation } from 'react-i18next'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { Dashboard, Home } from './pages'
import { RoutesGenerate, Routes } from './routes'

function App () {
  const [t, i18n] = useTranslation()

  return (
    <BrowserRouter>
      <div className='App'>
        App pro 😎

        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
          </ul>
        </nav>

        {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes> */}

        <RoutesGenerate routes={Routes} />
        <h1>{t('title')}</h1>
        <button onClick={() => i18n.changeLanguage('en')}>change</button>

      </div>
    </BrowserRouter>
  )
}
export default App
