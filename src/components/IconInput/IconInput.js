import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.label`
  position: relative;
  display: block;
  width: ${p => p.theme.width};
  height: ${p => p.theme.height};
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: ${p => p.theme.iconHeight};
  color: ${COLORS.gray700};
  pointer-events: none;
`

const NativeInput = styled.input`
  appearance: none;
  font-size: ${p => p.theme.fontSize};
  border: 0;
  border-bottom: ${p => p.theme.borderWidth} solid ${COLORS.black};
  padding: 0;
  padding-left: ${p => p.theme.leftPadding};
  padding-top: ${p => p.theme.borderWidth};
  width: 100%;
  height: 100%;
  font-weight: 700;
  color: ${COLORS.gray700};
  line-height: ${21.09/18};

  &:focus {
    outline-offset: 2px;
  }

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`

const THEME = {
  small: {
    height: 24 / 16 + "rem",
    borderWidth: "1px",
    strokeWidth: 1,
    iconHeight: "1rem",
    fontSize: 14 / 16 + "rem",
    leftPadding: 24 / 16 + "rem"
  },
  large: {
    height: 36 / 16 + "rem",
    borderWidth: "2px",
    strokeWidth: 2,
    iconHeight: 24 / 16 + "rem",
    fontSize: 18 / 16 + "rem",
    leftPadding: 36 / 16 + "rem",
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  let theme = THEME[size]
  theme.width = width+"px";

  return <Wrapper theme={theme}>
    <VisuallyHidden>
      {label}
    </VisuallyHidden>
    <IconWrapper theme={theme}>
      <Icon id={icon} size={theme.iconHeight} strokeWidth={theme.strokeWidth}/>
    </IconWrapper>
    <NativeInput placeholder={placeholder} width={width} theme={theme}/>
  </Wrapper>;
};

export default IconInput;
