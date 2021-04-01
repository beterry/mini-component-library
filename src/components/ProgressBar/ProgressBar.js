/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  'small': {
    height: 8,
    padding: 0,
    radius: 4,
  },
  'medium': {
    height: 12,
    padding: 0,
    radius: 4,
  },
  'large': {
    height: 18,
    padding: 4,
    radius: 8,
  }
}



const ProgressWrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  background: ${COLORS.transparentGray15};
  padding: var(--padding);
`

const MeterWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`

const ProgressMeter = styled.div`
  background: ${COLORS.primary};
  width: var(--width);
  border-radius: 4px 0 0 4px;
  height: var(--height);
`

const ProgressBar = ({ value, size }) => {

  const style = STYLES[size];
  if(!style) throw new Error('Invalid size passed to ProgressBar');

  return (
    <ProgressWrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        '--padding': style.padding + 'px',
        '--radius': style.radius + 'px',
      }}
    >
      <MeterWrapper>
        <ProgressMeter 
          style={{
            '--width': value + '%',
            '--height': style.height + 'px',
          }}
          size={size}
        />
      </MeterWrapper>
    </ProgressWrapper>
  )
};

export default ProgressBar;
