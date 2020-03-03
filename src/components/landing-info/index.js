import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import getStyles from './styles'
import bsidesnsLogo from './bsidesns-logo.svg'


class LandingInfo extends Component {
  render() {
    const height = this.props.height || 'calc(100vh - 64px)'
    const styles = getStyles(this.props.theme, height);
    return (
      <div style={styles.root}>
        <img src={bsidesnsLogo} alt="BSidesNS Logo" style={styles.logo} />
        <div style={styles.small}>
          Novi Sad, Serbia, 09. May 2020.
        </div>
        <div style={styles.small}>
          <a
            style={styles.link}
            href="https://kc-lab.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            KC Lab, Dr Hempta 2
          </a>
        </div>
        <Link to="/cfp" style={styles.tickets.link}>
          <Paper style={styles.tickets}>
            CALL FOR PAPERS
          </Paper>
        </Link>
      </div>
    )
  }
}


LandingInfo.propTypes = {
  height: PropTypes.number,
  theme: PropTypes.shape({}).isRequired,
}


export default withTheme(LandingInfo)
