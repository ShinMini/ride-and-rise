import React from 'react'
import { Canvas, LinearGradient, vec, RoundedRect, Shadow } from '@shopify/react-native-skia'

import type { LinearInnerShadowViewProps } from './utils';

export default function LinearShadowCanvas({
  width, height, shadowSpace, style,
  shadowColor, shadowOffset, shadowBlur,
  inset,
  reflectedLightColor,
  reflectedLightOffset,
  reflectedLightBlur,
  from = 'top',
  to = 'bottom',
  colors = ['#FFFFFF', '#FFFFFF'],
  ...props
}: LinearInnerShadowViewProps) {
  const isReflectedLightEnabled =
  props.isReflectedLightEnabled !== undefined
      ? props.isReflectedLightEnabled
      : inset;

  const boxRadius = Number(style['borderRadius']) || 0;
  const top = vec(width /2, 0);
  const bottom = vec(width /2, height);

  const left = vec(shadowSpace.dx, height / 2);
  const right = vec(width - shadowSpace.dx * 2, height / 2);

  const direction = { top, bottom, left, right };

  return (
    <Canvas
      style={[
        style,
        {
          position: 'absolute',
          left: 0,
          top: 0,
          backgroundColor: 'transparent',
          width,
          height,
        }
      ]}>
      <RoundedRect
        x={shadowSpace.dx}
        y={shadowSpace.dy}
        width={width - shadowSpace.dx * 2}
        height={height - shadowSpace.dy * 2}
        r={boxRadius}
      >
        <LinearGradient
          start={direction[from]}
          end={direction[to]}
          colors={colors}
        />
        {/* main shadow - 메인 그림자입니다.*/}
        <Shadow
          dx={shadowOffset.width}
          dy={shadowOffset.height}
          blur={shadowBlur}
          color={shadowColor}
          inner={inset}
        />
        {/* reflected light effect - 반사광 표현 */}
        {isReflectedLightEnabled && (
          <Shadow
            dx={reflectedLightOffset.width}
            dy={reflectedLightOffset.height}
            blur={reflectedLightBlur}
            color={reflectedLightColor}
            inner={inset}
          />)}
      </RoundedRect>
    </Canvas>
  )
}