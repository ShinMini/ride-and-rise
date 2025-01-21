import React from 'react';
import { Pressable } from 'react-native';

import { DEFAULT_SHADOW_SPACE, getBackgroundColor, getShadowProperty, LinearInnerShadowViewProps } from './utils';
import LinearShadowCanvas from './LinearInnerShadowCanvas';

const LinearShadowView: React.FunctionComponent<LinearInnerShadowViewProps> = ({
    shadowSpace = DEFAULT_SHADOW_SPACE,
    ...props
}) => {
    const [boxSize, setBoxSize] = React.useState({ width: 0, height: 0 });

    const backgroundColor = getBackgroundColor(props)
    const shadowProperties = getShadowProperty(props);

    return (
        <Pressable
            onLayout={({ nativeEvent: { layout: { width, height } } }) =>
                setBoxSize({ width, height })
            }
            {...props}
            style={[
                props.style,
                {
                    backgroundColor: 'transparent',
                },
            ]}
        >
            {boxSize.width === 0 && boxSize.height === 0 ? null : (
                <LinearShadowCanvas
                    {...props}
                    {...shadowProperties}
                    backgroundColor={backgroundColor}
                    shadowSpace={shadowSpace}
                    width={boxSize.width}
                    height={boxSize.height}
                />
            )}
            {props.children}
        </Pressable>
    );
};

export default LinearShadowView;