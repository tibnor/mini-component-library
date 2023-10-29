/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Element = styled.progress`

  /* Reset the default appearance */
  -webkit-appearance: none;
   appearance: none;

  width: 250px;
  height: 20px;
  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: 4px;
  }

  &::-webkit-progress-value {
      height: 12px
      background-color: ${COLORS.primary}; 
  }
`

const ProgressBar = ({ value, size }) => {
  return <Element value={value/100} />;
};

export default ProgressBar;
