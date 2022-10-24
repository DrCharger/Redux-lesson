import { connect } from 'react-redux';
import { selectedOptionsSelector } from './options.selectors';
import Options from './Options';
import { toggleOption } from './options.actions';

const mapState = state => {
  return {
    options: selectedOptionsSelector(state),
  };
};

const mapDispach = {
  moveOption: toggleOption,
};

export default connect(mapState, mapDispach)(Options);
