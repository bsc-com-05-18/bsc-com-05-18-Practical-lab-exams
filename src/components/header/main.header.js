import React, { lazy } from 'react';
import { Link } from 'react-router-dom';

const DefaultIcon = lazy(() => import('../icons/default.icon'))
const AuthIcon = lazy(() => import('../icons/auth.account.icon'))
const SearchForm = lazy(() => import('../header/seach.form'))

export const MainHeader = ({ handleChange, ...props }) => {
    return (<div className="container-fluid site-header sticky-top py-1 d-flex flex-column flex-md-row justify-content-between">
        <Link className="py-2 d-flex text-none" to="/" aria-label="Product">
            <DefaultIcon width="2em" height="2em" className="d-block bi bi-badge-8k" />

            <h5 className="text-none font-weight-normal">
                <span style={{ paddingLeft: `0.3em`, paddingTop: `0.6em` }}>
                    Octo-Disco-Fantastic
                </span>
            </h5>
        </Link>

        {/* Header Search Form Field */}
        <SearchForm {...props} handleChange={handleChange} />

        <nav className="py-2 my-md-0 mr-md-3">
            <Link className="p-2 text-none" to="/about">About</Link>
            <Link className="p-2 text-none" to="/services">Services</Link>
            <Link className="p-2 text-none" to="/support">Support</Link>
            <Link className="p-2 text-none" to="/pricing">Pricing</Link>
            <Link className="p-2 text-none my-2 my-md-0" to="/account">
                <AuthIcon width="2em" height="2em" className="bi bi-person" />
            </Link>
        </nav>
    </div>);
}

export default MainHeader;