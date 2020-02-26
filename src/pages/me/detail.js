import React from 'react'
import { withStore } from 'freenit'

// Components
import {
  Avatar,
  Button,
  TextField,
} from '@material-ui/core'

import { errors } from 'utils'
import Template from 'templates/default/detail'
import styles from './styles'


class Me extends React.Component {
  state = {
    edited: false,
    email: '',
  }

  constructor(props) {
    super(props)
    this.fetch()
  }

  initState = (data = this.props.store.me.detail) => {
    this.setState({
      email: data.email,
    })
  }

  fetch = async () => {
    const { store } = this.props
    const response = await store.me.fetch()
    if (!response.ok) {
      const error = errors(response)
      store.notification.show(error.message)
    } else {
      this.initState(response)
    }
  }

  handleField = (field) => (event) => {
    this.setState({
      edited: field,
      [field]: event.target.value,
    })
  }

  handleFieldCancel = () => {
    this.setState({ edited: false })
    this.initState()
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
    return (
      <Template style={{}}>
        <div style={styles.root}>
          <div style={styles.content}>
            <Avatar style={styles.avatar} />
            <div style={styles.inputs}>
              <TextField
                fullWidth
                label="email"
                value={this.state.email}
                onChange={this.handleField('email')}
              />
              <TextField label="first name" fullWidth />
              <div style={styles.actions}>
                <Button
                  variant="contained"
                  color="primary"
                  style={styles.actions.button}
                  disabled={!this.state.edited}
                >
                  OK
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  style={styles.actions.button}
                  disabled={!this.state.edited}
                  onClick={this.handleFieldCancel}
                >
                  Cancel
                </Button>
              </div>
              <TextField label="last name" fullWidth />
              <TextField label="biography" fullWidth multiline />
            </div>
          </div>
          <div style={styles.actions}>
            <Button
              variant="contained"
              color="primary"
              style={styles.actions.button}
              disabled={!this.state.edited}
            >
              OK
            </Button>
            <Button
              color="secondary"
              variant="contained"
              style={styles.actions.button}
              disabled={!this.state.edited}
              onClick={this.handleFieldCancel}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Template>
    )
  }
}


export default withStore(Me)
