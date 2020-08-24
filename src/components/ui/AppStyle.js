import { makeStyles } from '@material-ui/core/styles'
import { theme } from './Theme'

export const useStyles = makeStyles({
  appContainer: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
    padding: '1rem',
  },
  mainHeading: {
    ...theme.typography.h1,
  },
  listIcon: {
    color: 'purple',
    fontSize: '2.5rem',
    marginRight: '0.5rem',
    marginTop: '2rem',
  },
})
