import React, { lazy } from 'react';

const Icon = lazy(() => import('./icon'))

export const DefaultPrimaryIcon = ({
    width, height,
    className
}) => {
    return (<Icon className={className}
        width={width} height={height} role="img"
        viewBox="0 0 30 30" focusable="false"
    >
        <title>Menu</title>
        <path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M4 7h22M4 15h22M4 23h22" />
    </Icon>);
}

export default DefaultPrimaryIcon;