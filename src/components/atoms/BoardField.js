import React from 'react';
import { Rect, Text, Star } from "react-konva";
import PropTypes from 'prop-types';

import { FIELDS_PARAMS } from '../globalVariables';

const BoardField = ({ x, y, type }) => {
    const size = 570 / 15;
    return (
        <>
            <Rect
                x={x * size}
                y={y * size}
                width={size}
                height={size}
                fill="#08763b"
                stroke="#badce9"
            />
            {type && (
                <>
                    <Rect
                        x={x * size + size / 2}
                        y={y * size - size / 4 + 1}
                        width={size}
                        height={size}
                        fill={FIELDS_PARAMS[type].color}
                        rotation={45}
                    />
                    <Rect
                        x={x * size}
                        y={y * size}
                        width={size}
                        height={size}
                        fill={FIELDS_PARAMS[type].color}
                        stroke="#badce9"
                    />
                    <Text
                        x={x * size}
                        y={y * size + 8}
                        width={size}
                        height={size}
                        text={FIELDS_PARAMS[type].text}
                        align="center"
                        fontSize={7}
                        verticalAlign="center"
                        fontFamily="Calibri"
                        padding={1}
                    />
                    {type === "middle" && (
                        <Star
                            x={x * size + size / 2}
                            y={y * size + size / 2}
                            numPoints={8}
                            innerRadius={size / 6}
                            outerRadius={size / 4}
                            fill="#DC9C10"
                            opacity={1}
                        />
                    )}
                </>
            )}
        </>
    )
};


BoardField.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    type: PropTypes.string,
};


export default BoardField;
