import '@/styles/globals.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { darkTheme, lightTheme } from '../../themes'


export default function App({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider theme={ darkTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    
  ) 
}
