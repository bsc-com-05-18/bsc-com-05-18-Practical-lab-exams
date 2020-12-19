import React, { lazy } from 'react';
import { Link } from 'react-router-dom';

const DefaultIcon = lazy(() => import('../icons/default.icon'))

export const Footer = () => {
    return (<footer className="container-fluid py-5 border-top">
        <div className="row">
            <div className="col-12 col-md">
                <Link className="py-2 d-flex text-none" to="/" aria-label="Product">
                    <DefaultIcon width="2em" height="2em" className="d-block bi bi-badge-8k text-muted" />

                    <small className="d-block mb-3 text-muted" 
                        style={{ paddingLeft: `0.3em`, paddingTop: `0.6em` }}
                    >
                        &copy; Copyright {new Date().getFullYear()}
                    </small>
                </Link>

                <small className="d-block mb-3 text-muted">Developers</small>
                <ul className="list-styled text-small">
                    <small className="d-block mb-3 text-muted">
                        ShukranIsaac(Mwakabira)
                    </small>
                    <small className="d-block mb-3 text-muted">
                        INF221 - Modern Web Design & Development (2020)
                    </small>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>Services</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="/">Cool stuff</a></li>
                    <li><a className="text-muted" href="/">Random feature</a></li>
                    <li><a className="text-muted" href="/">Team feature</a></li>
                    <li><a className="text-muted" href="/">Stuff for developers</a></li>
                    <li><a className="text-muted" href="/">Another one</a></li>
                    <li><a className="text-muted" href="/">Last time</a></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>Support</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="/">Business</a></li>
                    <li><a className="text-muted" href="/">Education</a></li>
                    <li><a className="text-muted" href="/">Government</a></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>About</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="/">Developers</a></li>
                    <li><a className="text-muted" href="/">Locations</a></li>
                    <li><a className="text-muted" href="/">Privacy</a></li>
                    <li><a className="text-muted" href="/">Terms</a></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>Development & Pricing</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="/">Sites</a></li>
                    <li><a className="text-muted" href="/">Documentation</a></li>
                    <li><a className="text-muted" href="/">Services</a></li>
                </ul>
            </div>
        </div>
    </footer>);
}

export default Footer;