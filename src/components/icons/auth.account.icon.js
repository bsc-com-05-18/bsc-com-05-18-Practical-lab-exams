import React, { lazy } from 'react';

const Icon = lazy(() => import('./icon'))

export const AuthIcon = ({
    width, height,
    className
}) => {
    return (<Icon
    width={ width } height={ height }
    currentColor="currentColor" strokeLinecap="round"
    strokeLinejoin="round" strokeWidth="2"
    viewBox="0 0 24 24" className={ className }
    fill="none"
>
    <circle cx="12" cy="12" r="10" />
    <path fillRule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
</Icon>);
}

export default AuthIcon;