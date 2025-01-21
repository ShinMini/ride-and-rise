import React from 'react'
import { Canvas, RoundedRect, Shadow } from '@shopify/react-native-skia'

import type { InnerShadowProps } from './utils';

export default function ShadowCanvas({
    width, height, shadowSpace, style,
    shadowColor, shadowOffset, shadowBlur,
    backgroundColor,
    inset,
    reflectedLightColor,
    reflectedLightOffset,
    reflectedLightBlur,
    ...props
}: InnerShadowProps) {
    const isReflectedLightEnabled =
        props.isReflectedLightEnabled !== undefined
            ? props.isReflectedLightEnabled
            : inset;


    const boxRadius = Number(style['borderRadius']) || 0;

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
                color={backgroundColor}
            >
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