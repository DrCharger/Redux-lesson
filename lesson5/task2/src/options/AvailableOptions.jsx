import { connect } from 'react-redux';
import { availableOptionsSelector } from './options.selectors';
import Options from './Options';
import { toggleOption } from './options.actions';

const mapState = state => {
  return {
    options: availableOptionsSelector(state),
  };
};

const mapDispach = {
  moveOption: toggleOption,
};

export default connect(mapState, mapDispach)(Options);
