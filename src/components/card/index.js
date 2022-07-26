import React from 'react';
import styled from 'styled-components';

const Card = ({
  children
}) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
}

const StyledCard = styled.div`
  background: ${props => props.theme.name === "light" ? props.theme.background : props.theme.backgroundTertiary};
  box-shadow: ${props => props.theme.shadow.small};
  border-radius: 8px;
  color: ${props => props.theme.color};
  margin: 24px 0;
  padding: 32px;

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    margin: 24px 0;
    padding: 16px
  }
`

export default Card; 