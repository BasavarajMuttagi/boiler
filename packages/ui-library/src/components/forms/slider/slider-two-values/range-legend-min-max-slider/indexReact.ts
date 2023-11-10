import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrRangelegendMinMaxSlider } from '.';

export const BlrLabelRangeSliderReact = createComponent({
  tagName: 'blr-label-range-slider',
  elementClass: BlrRangelegendMinMaxSlider,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
    onChange: 'pointerdown' as EventName<PointerEvent>,
  },
});