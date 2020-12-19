import React from 'react';

export const MainContent = ({ props, ...rest }) => {
    // console.log(props.match)
    return (<div className="container-fluid">
        <div className="row flex-xl-nowrap">
            {/* Main Content-Sidebar-Right */}
            <div className="col-md-6 col-xl-5 bd-sidebar">
                <nav className="collapse bd-links" id="bd-docs-nav" aria-label="Main navigation">
                    <div className="bd-toc-item active">
                        <h6 className="bd-toc-link">Queued Resources</h6>
                        <ul className="nav bd-sidenav">
                            <li className="active bd-sidenav-active">
                                <a href="/">Resources</a>
                            </li>
                        </ul>
                        <h6 className="bd-toc-link">Resources</h6>
                        <ul className="nav bd-sidenav">
                            <li className="active bd-sidenav-active">
                                <a href="/">Services</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Main Content Main-Section */}
            <main className="col-md-8 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
                <h1 className="bd-title" id="content">Introduction</h1>
            </main>
        </div>
    </div>);
}

export default MainContent;