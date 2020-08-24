import { createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    h1: {
      fontFamily: 'Raleway',
      fontSize: '2.5rem',
      fontWeight: 300,
      letterSpacing: '-0.01562em',
      lineHeight: 1.167,
    },
  },
})
