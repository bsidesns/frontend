import React from 'react'
import { withStore } from 'freenit'

// Components
import {
  Avatar,
  Button,
  Paper,
  TextField,
} from '@material-ui/core'

import { errors } from 'utils'
import Template from 'templates/default/detail'
import styles from './styles'


class Me extends React.Component {
  state = {
    email: '',
  }

  constructor(props) {
    super(props)
    this.fetch()
  }

  fetch = async () => {
    const { store } = this.props
    const response = await store.me.fetch()
    if (!response.ok) {
      const error = errors(response)
      store.notification.show(error.message)
    } else {
      this.setState({
        email: response.email,
      })
    }
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  handleEmailCancel = () => {
    this.setState({ email: this.props.store.me.detail.email })
  }

  handleSubmit = async (event) => {
    const { me, notification } = this.props.store
    event.preventDefault()
    const response = await me.edit({ email: this.state.email })
    if (!response.ok) {
      notification.show('Error editing me')
    }
  }

  render() {
    // const me = this.props.store.me.detail
    return (
      <Template style={{}}>
        <Paper style={styles.root}>
          <div style={styles.content}>
            <Avatar style={styles.avatar} />
            <div style={styles.inputs}>
              <TextField fullWidth="true" label="email" />
              <TextField label="first name" fullWidth="true" />
              <TextField fullWidth="true" label="last name" />
              <TextField label="biography" fullWidth="true" multiline="true" />
            </div>
          </div>
          <div style={styles.actions}>
            <Button variant="contained" color="primary" style={styles.actions.button}>
              OK
            </Button>
            <Button color="secondary" variant="contained" style={styles.actions.button}>
              Cancel
            </Button>
          </div>
        </Paper>
      </Template>
    )
  }
}


export default withStore(Me)
