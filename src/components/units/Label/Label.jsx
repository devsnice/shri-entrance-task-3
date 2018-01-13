import React from 'react';
import styled from 'styled-components';

const LabelWrapper = styled.div`
  font-family: ${props => props.theme.fontBold};
  font-size: 13px;
  line-height: 16px;
  margin-bottom: 4px;
`;

const Label = ({ label }) => {
  if (!label) return null;

  return <LabelWrapper>{label}</LabelWrapper>;
};

export default Label;
