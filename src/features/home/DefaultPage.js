import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RedditList } from './';
import * as actions from './redux/actions';

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { count, fetchRedditReactjsListPending, redditReactjsList, fetchRedditReactjsListError } = this.props.home;
    const { counterPlusOne, counterMinusOne, resetCounter, fetchRedditReactjsList } = this.props.actions;
    return (
      <div className="intro-body">
        <div className="profile-container">
          <img className="jeff-pic" alt="Jeff Landfield" src="../images/jeff-suit.png" />
          <p>Jeff Landfield</p>
          <p>Privates Investigator</p>
        </div>
        <div className="intro-text">
          <p>
                Hello and congratulations on your selection as a member of the Municipality of Anchorage inaugural
                Female Bathroom Inspector squad.
          </p>
          <p>
                I am Jeff Landfield, the municipality&#39;s lead Privates Investigator. For only a fraction of the cost of
                the <a href="https://www.adn.com/alaska-news/anchorage/2017/03/05/40-million-spent-on-troubled-anchorage-software-project-had-no-measurable-benefit-to-city-mayor-says/">
                    SAP software project
            </a>, I have developed this training program for new FBI recruits.
          </p>
          <p>
            As you know, in March 2018, Anchorage voters passed Proposition One, Regulating Access to Facilities Such as Locker Rooms and Bathrooms On the Basis of Sex at Birth, Rather Than Gender Identity.
          </p>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
