import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const STYLES = {
    'small': {
      fontSize: '.875rem',
      iconSize: 16,
      iconStroke: 1,
    },
    'large': {
      fontSize: '1.125rem',
      iconSize: 24,
      iconStroke: 2,
    }
  }

  const style = STYLES[size];
  if (!style) throw new Error('Invalid size in IconInput');

  return (
    <InputWrapper>
      <StyledInput
        type="text"
        id={label}
        placeholder={placeholder}
        style={{
          '--fontSize': style.fontSize,
          '--strokeWidth': style.iconStroke + 'px',
          '--leftPadding': (style.iconSize + 8) + 'px',
          '--height': (style.iconSize + 8) + 'px',
          '--width': width,
        }}
      />
      <IconWrapper
        style={{
          '--size': style.iconSize + 'px',
        }}
      >
        <Icon id={icon} size={style.iconSize} strokeWidth={style.iconStroke}/>
      </IconWrapper>
    </InputWrapper>
  );
};

const InputWrapper = styled.label`
  position: relative;
  width: max-content;

  color: ${COLORS.gray700};

  &:hover{
    color: black;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--size);
  height: var(--size);
  margin: auto;
`

const StyledInput = styled.input`
  width: var(--width);
  height: var(--height);
  padding: 0;
  padding-left: var(--leftPadding);
  font-size: var(--fontSize);
  border: none;
  border-bottom: var(--strokeWidth) solid black;
  color: inherit;
  font-weight: 700;
  line-height: 1;

  &::placeholder{
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus{
    outline-offset: 2px;
  }

  &:hover{
    color: black;
  }
`

export default IconInput;
