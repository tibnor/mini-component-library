import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from '../VisuallyHidden';

const SelectWrapper = styled.select`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  appearance: none;
`;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray500};
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  font-family: "Roboto";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25;
  border: 0;

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`

const ChevronIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;
`


const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <div>
      <Wrapper>
        {displayedValue}
        <ChevronIcon><Icon id="chevron-down"/></ChevronIcon>
        <SelectWrapper value={value} onChange={onChange}>
{children}
          </SelectWrapper>
      </Wrapper>
        
    </div>
  );
};

export default Select;
