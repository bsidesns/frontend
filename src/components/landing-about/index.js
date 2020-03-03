import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import { withStore } from 'freenit'
import getStyles from './styles'


class LandingAbout extends React.Component {
  render() {
    const { resolution } = this.props.store
    const styles = getStyles(this.props.theme, resolution.detail)
    return (
      <Paper style={styles.root}>
        <div style={styles.title}>Security BSides Conference</div>
        <div style={styles.title.small}>
          <p style={styles.title.center}>
            Welcome to BSides Novi Sad 2020!
          </p>
          <br />
          <p>
            BSidesNS will be held in Novi Sad, Serbia on 9th of May. The
            conference aims to bring together leading security experts,
            enthusiasts and activists to exchange and share their
            experiences and research results.
          </p>
          <br />
            Security BSides is a community-driven framework for building 
            events by and for information security community members. 
            These events are already happening in major cities all over the world! 
            BSides Novi Sad is a free conference where researchers, 
            practitioners and activists will have a chance to freely
            present and discuss their most recent research, concerns and trends
            as well as challenges and solutions that are
            shaping the future of web, software, hardware and personal security.
          <br />
          <p>
            Our conference will also provide engaging content to
            visitors of all skill levels, from professionals to curious
            amateurs. All presentations will be in English.
          </p>
          <br />
          <p style={styles.title.center}>
            We encourage people who have not had the chance to experience
            BSides to attend our BSidesNS conference in 2020.
          </p>
        </div>
      </Paper>
    )
  }
}


LandingAbout.propTypes = {
  store: PropTypes.shape({
    resolution: PropTypes.shape({
      detail: PropTypes.shape({
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }),
  theme: PropTypes.shape({}).isRequired,
}


export default withTheme(withStore(LandingAbout))
