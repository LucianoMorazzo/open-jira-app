import '@/styles/globals.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { UIProvider } from '../../context/ui'
import { darkTheme, lightTheme } from '../../themes'


export default function App({ Component, pageProps }: AppProps) {
  return(
    <UIProvider>
      <ThemeProvider theme={ darkTheme }>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
    
  ) 
}
