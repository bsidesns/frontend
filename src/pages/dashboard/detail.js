import React from 'react'
import { withStore } from 'freenit'
import Template from 'templates/default/detail'

// Components
import {
  Paper,
} from '@material-ui/core'
import AdminDashboard from './admin'

import styles from './styles'


class Dashboard extends React.Component {
  state = {
    admin: false,
  }

  handleDashboard = (admin) => () => {
    this.setState({ admin })
  }

  render() {
    return (
      <Template secure style={{}}>
        <Paper style={styles.root}>
          <AdminDashboard />
        </Paper>
      </Template>
    )
  }
}


export default withStore(Dashboard)
