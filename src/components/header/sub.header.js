import React, { lazy } from 'react';
import { Link } from 'react-router-dom';

const HomeIcon = lazy(() => import('../icons/home.icon'))
const SettingsIcon = lazy(() => import('../icons/settings.icon'))
const ManageUserIcon = lazy(() => import('../icons/users.manage.icon'))
const NotificationsIcon = lazy(() => import('../icons/notifications.icon'))
const ResourcesIcon = lazy(() => import('../icons/resource.icon'))

const styles = {
    paddingLeft: `0.5em`,
    paddingTop: `0.5em`
};

export const SubHeader = () => {
    return (<div className="container-fluid site-header py-1 d-flex flex-column
            flex-md-row justify-content-center col-md-12 align-items-center"
        style={{ backgroundColor: `#F3F2EF`, paddingTop: `-1px` }}
    >
        <nav className="py-2 my-md-0 mr-md-3 d-flex align-items-center">
            <Link className="p-2 text-none" to="/dashboard">
                <HomeIcon width="26" height="26" className="bi bi-house" />
                <span style={styles}>Admin</span>
            </Link>
            <Link className="p-2 text-none" to="/resources">
                <ResourcesIcon width="26" height="26" className="bi bi-node-plus" />
                <span style={styles}>Resources</span>
            </Link>
            <Link className="p-2 text-none" to="/users">
                <ManageUserIcon width="26" height="26" className="bi bi-people" />
                <span style={styles}>Manage Accounts</span>
            </Link>
            <Link className="p-2 text-none" to="/messages">
                <NotificationsIcon width="26" height="26" className="bi bi-bell" />
                <span style={styles}>Messages</span>
            </Link>
            <Link className="p-2 text-none" to="/settings">
                <SettingsIcon width="26" height="26" className="bi bi-gear" />
                <span style={styles}>Settings</span>
            </Link>
        </nav>
    </div>);
}

export default SubHeader;