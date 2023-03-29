
import { useTranslation } from 'react-i18next'
function App () {
  const [t, i18n] = useTranslation()

  return (
    <div className='App'>
      <h1>{t('title')}</h1>
      <button onClick={() => i18n.changeLanguage('en')}>change</button>
    </div>
  )
}
export default App
