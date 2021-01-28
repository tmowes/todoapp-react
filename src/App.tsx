import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/GlobalStyles'
import * as themes from './styles/themes'
import Router from './routes'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themes.dark}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
