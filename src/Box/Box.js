import React from 'react';

import { BoxStyled } from './styles';

// import { css } from '../Theme/Theme';
const styles = {};

const css = (prop) => ({
  className: prop
})

export const Box = ({ isSmall }) => {
  const secondParagraphClassname = css(
    isSmall ? styles.secondParaSmall : styles.secondParaLarge,
  );

  return (
    <BoxStyled>
      <h2 {...css(styles.heading)}>Some example heading message</h2>
      <p {...css(styles.optionalParagraph, styles.someOtherClass)}>some paragraph text</p>
      <p {...secondParagraphClassname}>text</p>
      <p {...css(styles.thirdPara)}>text</p>
    </BoxStyled>
  );
};
