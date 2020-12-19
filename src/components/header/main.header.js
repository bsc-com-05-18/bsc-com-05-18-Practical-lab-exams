import React, { lazy } from 'react';
import { Link } from 'react-router-dom';

const DefaultIcon = lazy(() => import('../icons/default.icon'))
const AuthIcon = lazy(() => import('../icons/auth.account.icon'))

export const MainHeader = ({ handleChange }) => {
    return (<div className="container-fluid site-header sticky-top py-1 d-flex flex-column flex-md-row justify-content-between">
        <Link className="py-2 d-flex text-none" to="/" aria-label="Product">
            <DefaultIcon width="2em" height="2em" className="d-block bi bi-badge-8k" />

            <h5 className="text-none font-weight-normal">
                <span style={{ paddingLeft: `0.3em`, paddingTop: `0.6em` }}>Octo-Disco-Fantastic Exams</span>
            </h5>
        </Link>

        <form role="search" onSubmit={ e => handleChange(e) } className="py-2 bd-search col-md-4 d-flex align-items-center">
            <input onChange={ e => handleChange(e) } type="search" className="form-control" name="term" id="search-input" placeholder="Search..." aria-label="Search for..." autoComplete="off" data-docs-version="4.5" />
            <button className="btn bd-search-docs-toggle d-md-none p-0 ml-3 bg-white" type="button" data-toggle="collapse" data-target="#bd-docs-nav" aria-controls="bd-docs-nav" aria-expanded="false" aria-label="Toggle docs navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img" focusable="false">
                    <title>Menu</title>
                    <path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M4 7h22M4 15h22M4 23h22" />
                </svg>
            </button>
        </form>
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