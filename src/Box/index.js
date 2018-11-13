import { compose } from 'recompose';

import { Box } from './Box';

import withStyles from './styles';

const enhance = compose(
  withStyles,
);

const Component = enhance(Box);

export default Component;
