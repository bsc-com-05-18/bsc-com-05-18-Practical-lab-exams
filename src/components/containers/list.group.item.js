import React from 'react'

/**
 * Container to render a single user item
 * 
 * @param {Props} param0 
 * @returns {Component}
 */
export const ListGroupItem = ({
    user,
    handleUserClick
}) => {
    return <a href={`#${user.name}`}
        className="list-group-item list-group-item-action align-items-center"
        onClick={e => handleUserClick(e, user)}
    >
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{user.name}</h5>
            <small>3 days ago</small>
        </div>
        <p className="mb-1">{ user.email }</p>
    </a>
}

// export default ListGroupItem;