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
        <div style={styles.title}>Conference</div>
        <div style={styles.title.small}>
          <p style={styles.title.center}>
            Welcome to BSides Novi Sad 2020!
          </p>
          <br />
          <p>
            BSidesNS will be held in Novi Sad, Serbia on 9st of May. The
            conference aims to bring together leading local security experts,
            enthusiasts and business professionals to exchange and share their
            experiences and research results.
          </p>
          <br />
          <p>
            BSidesNS is a one day, community-driven conference full of
            talks, tutorials, and other activities that strives to
            strengthen the local security community.All talks at the conference
            will be in English, recorded and uploaded on our YouTube channel so
            we can also promote our local community globally. Security
            researchers, practitioners and educators will have a chance to
            present and discuss the most recent innovations, trends, and
            concerns as well as practical challenges and solutions that are
            shaping the future of software and hardware security.
          </p>
          <br />
          <p>
            Our conference will also provide engaging content to
            visitors of all skill levels, from professionals to curious
            amateurs.
          </p>
          <br />
          <p style={styles.title.center}>
            We encourage people who have not had the chance to experience
            BSidesNS to attend our conference in 2020.
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
