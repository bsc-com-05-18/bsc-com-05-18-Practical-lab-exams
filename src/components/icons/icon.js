import React from 'react';

export const Icon = ({
    width, height, viewBox,
    className, currentColor, 
    strokeLinecap, strokeWidth,
    strokeLinejoin, focusable=true,
    role, fill, ...props
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={ width } height={ height } fill={ fill }
            className={className} viewBox={ viewBox } role={ role }
            stroke={ currentColor } strokeLinecap={ strokeLinecap }
            strokeLinejoin={ strokeLinejoin } strokeWidth={ strokeWidth }
            focusable={ focusable }
        >
            { props.children}
        </svg>
    );
}

export default Icon;