import React from 'react';
import { css } from 'react-emotion';

import { BoxStyled, styles } from './styles';

export const Box = ({ isSmall }) => {
  const secondParagraphClassname = css(
    isSmall ? styles.secondParaSmall : styles.secondParaLarge,
  );

  return (
    <BoxStyled isBorder borderColor="#eaa">
      <h2 className={css(styles.heading)}>Some example heading message</h2>
      <p className={css(styles.optionalParagraph, styles.someOtherClass)}>some paragraph text</p>
      <p className={secondParagraphClassname}>text</p>
      <p className={css(styles.thirdPara)}>text</p>
    </BoxStyled>
  );
};
