import React from 'react'

/**
 * Container to render a single user item
 * 
 * @param {Props} param0 
 * @returns {Component}
 */
export const ListGropuItem = ({ 
    comment, ...props
}) => {
    return <li className="list-group-item d-flex justify-content-between align-items-center">
        { comment.name }
    </li>
}

export default ListGropuItem;