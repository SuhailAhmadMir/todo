import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import { makeStyles } from '@material-ui/core/styles'
import { theme } from './ui/Theme'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles({
  container: {
    backgroundColor: '#FAFAFA',
    marginTop: '.4%',
  },
  deleteIcon: {
    color: 'red',
    margin: '0rem 1rem',
    cursor: 'pointer',
  },
  editIcon: {
    color: theme.palette.secondary.main,
    margin: '0rem 1rem',
    cursor: 'pointer',
  },
  assignmentIcon: {
    color: 'blue',
    margin: '0rem 1rem',
    cursor: 'pointer',
  },
  textComplete: {
    textDecoration: 'line-through',
  },
})
const TodoList = (props) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [text, setText] = React.useState('')
  const [index, setIndex] = React.useState(null)
  const [value, setValue] = React.useState(null)

  const handleDelete = (i) => {
    props.delete(i)
  }

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = (e) => {
    setOpen(false)
  }

  const handleChange = (e) => {
    setText(e.target.value)
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.edit(index, text)
  }

  const handleEdit = (i) => {
    handleOpen()
    setIndex(i)
    props.items.map((item, index) => (index === i ? setValue(item.text) : item))
  }

  const handleComplete = (i) => {
    props.complete(i)
  }
  return (
    <Container className={classes.container}>
      <List>
        {props.items.map((todo, i) => {
          return (
            <ListItem key={i}>
              <ListItemIcon>
                <LabelImportantIcon />
              </ListItemIcon>

              {todo.isCompleted === true ? (
                <ListItemText
                  className={classes.textComplete}
                  primary={todo.text}
                />
              ) : (
                <ListItemText primary={todo.text} />
              )}

              <Button>
                <AssignmentTurnedInIcon
                  className={classes.assignmentIcon}
                  onClick={() => handleComplete(i)}
                />
              </Button>
              <Button>
                <EditIcon
                  className={classes.editIcon}
                  onClick={() => handleEdit(i)}
                />
              </Button>
              <Button>
                <DeleteIcon
                  className={classes.deleteIcon}
                  onClick={() => handleDelete(i)}
                />
              </Button>
            </ListItem>
          )
        })}
      </List>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id='form-dialog-title'>Edit</DialogTitle>
          <DialogContent>
            <DialogContentText>Edit Todo details.</DialogContentText>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Edit Todo'
              type='text'
              fullWidth
              onChange={handleChange}
              value={value}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={handleClose} color='primary'>
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Container>
  )
}

export default TodoList
