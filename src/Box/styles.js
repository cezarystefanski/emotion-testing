import styled from 'react-emotion';

// export const BoxStyled = styled('div')`
//   background-color: ${props => props.theme.colors.icyBlue};
//   padding: 25px 50px;
//   margin-top: 30px;
//   border-radius: 15px;
// `;

export const BoxStyled = styled.div({
  backgroundColor: props => props.theme.colors.icyBlue,
  padding: '25px 50px',
  marginTop: '30px',
  borderRadius: '15px',
});