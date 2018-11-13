import styled, {css} from 'react-emotion';

import { themeTemplate as theme } from '../Theme/Theme';

const spacingFactor = 8;

const computeGoldenRatio = (spacingFactor, exp) => Math.round(spacingFactor * Math.pow(1.618, exp));

export const spacing = {
  space0: `${computeGoldenRatio(spacingFactor, 0)}px`,  // 8
  space1: `${computeGoldenRatio(spacingFactor, 1)}px`,  // 13
  space2: `${computeGoldenRatio(spacingFactor, 2)}px`,  // 21
  space3: `${computeGoldenRatio(spacingFactor, 3)}px`,  // 34
  space4: `${computeGoldenRatio(spacingFactor, 4)}px`,  // 55
  space5: `${computeGoldenRatio(spacingFactor, 5)}px`,  // 89
};

// const borderPartial = (props) => props.isBorder && css(`border: 5px solid ${props.borderColor}`);

// export const BoxStyled = styled('div')`
//   background-color: ${props => props.theme.colors.icyBlue};
//   padding: 25px 50px;
//   margin-top: 30px;
//   border-radius: 15px;
//   ${borderPartial};
//   label: box-styled;
// `;

export const BoxStyled = styled.div(props => ({
  backgroundColor: props.theme.colors.icyBlue,
  padding: '25px 50px',
  marginTop: '30px',
  borderRadius: '15px',
  border: props.isBorder ? `5px solid ${props.borderColor}` : null,
  label: 'box-styled',
}));

export const styles = {
  heading: {
    fontSize: theme.fonts.sizes.big,
    fontWeight: theme.fonts.weights.bold,
  },
  optionalParagraph: {
    fontSize: theme.fonts.sizes.normal,
  },
  someOtherClass: {
    color: theme.colors.darkgrey,
    ':hover': {
      color: theme.colors.white,
    }
  },
  secondParaSmall: {
    fontSize: theme.fonts.sizes.small,
  },
  secondParaLarge: {
    fontSize: theme.fonts.sizes.veryBig,
  },
  thirdPara: {
    marginTop: spacing.space5,
  },
};
