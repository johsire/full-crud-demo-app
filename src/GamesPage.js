import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GamesList from './GamesList';

class GamesPage extends React.Component {
 render() {
  return (
   <div>
    <h1>Games List</h1>

    <GamesList games={this.props.games} />
   </div>
  )
 }
};


GamesPage.protoTypes = {
 games: PropTypes.array.isRequired
}

// GamesPage.propTypes = {
 // games: PropTypes.array.isRequired
 // games: PropTypes.arrayOf(PropTypes.shape({
 //  name: PropTypes.string,
 //  rating: PropTypes.number,
 // })).isRequired
// };

function mapStateToProps(state) {
 return {
  games: state.games
 }
};

export default connect(mapStateToProps)(GamesPage);
