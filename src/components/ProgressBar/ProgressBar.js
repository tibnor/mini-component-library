/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  display: block;
  width: 370px;
  height: ${p => p.theme.barHeight}px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: ${p => p.theme.wrapperPadding};
  border-radius: 4px;
  position: relative;
  background-color: ${COLORS.gray50};
`

const Bar = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: ${COLORS.primary};
`

const Hider = styled.div`
  display: block;
  position: absolute;
  width: ${p => p.width}%;
  height: 100%;
  right: 0;
  top: 0;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 0 4px 4px 0;
  background-color: ${COLORS.gray50};
`



const ProgressBar = ({ value, size }) => {
  let theme;
  if (size === "small") {
    theme = {
      
      barHeight: 8,
      barRadius: 4,
    }
  } else if (size === "medium") {
    theme = {
      barHeight: 12,
      barRadius: 4,
    }
  } else if (size === "large") {
    theme = {
      wrapperPadding: "4px",
      barHeight: 24,
      barRadius: 4,
    }
  }

  return <Wrapper theme={theme} role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={value}>
    <Bar theme={theme}></Bar>
    <Hider width={(100-value)}></Hider>
  </Wrapper>;
};

export default ProgressBar;
