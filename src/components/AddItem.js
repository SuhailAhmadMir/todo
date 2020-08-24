import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

const useStyles = makeStyles({
  container: {
    backgroundColor: '#eee',
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',

    padding: '1rem',
    boxShadow: '.8px 2px 8px #888888',
  },
  button: {
    margin: '6px 16px',
  },
})

const AddItem = (props) => {
  const classes = useStyles()
  const [term, setTerm] = useState('')

  const handleChange = (e) => {
    setTerm(e.target.value)
  }

  const handleClick = () => {
    props.addItem(term)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addItem(term)
  }
  return (
    <Container className={classes.container}>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Add item'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <PlaylistAddRoundedIcon />
              </InputAdornment>
            ),
          }}
          value={term}
          onChange={handleChange}
        />
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          endIcon={<Icon>add</Icon>}
          onClick={handleClick}
        >
          Add
        </Button>
      </form>
    </Container>
  )
}

export default AddItem
