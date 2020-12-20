import React, { Fragment, lazy } from 'react';

const MainHeader = lazy(() => import('./main.header'))
const SubHeader = lazy(() => import('./sub.header'))

export const Header = ({ 
    onChange, ...props 
}) => {
    return <Fragment>
        <MainHeader {...props} handleChange={ onChange }></MainHeader>
        <SubHeader></SubHeader>
    </Fragment>
}

export default Header;