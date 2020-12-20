import React, { lazy, useState } from "react"

import './search.form.css'

const DefaultPrimaryIcon = lazy(() => import('../icons/default.primary.icon'))

/**
 * Search for a particular list of elements i.e. users, comments etc.
 * 
 * @param {Props} param0
 * @returns {Component} 
 */
export const SearchForm = ({
    handleChange,
    searcheable
}) => {
    const [toggle, setToggle] = useState(false)

    const handleFocusToggle = e => setToggle(!toggle)

    const handleFilter = e => {
        const searchTerm = e.target.value
        const elements = document.getElementById('searchable').getElementsByTagName('a')
        for (let i = 0; i < elements.length; i++) {
            let txtValue = elements[i].textContent || elements[i].innerText;
            txtValue.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1
                ? elements[i].style.display = "" : elements[i].style.display = "none"
        }
    }

    return <form
        role="search" onSubmit={e => handleChange(e)}
        className="py-2 bd-search col-md-4 d-flex align-items-center dropdown"
    >
        <input
            className="form-control dropbtn"
            name="term" id="search-input"
            onChange={e => handleChange(e)}
            onMouseUp={handleFocusToggle}
            onKeyUp={handleFilter}
            type="search"
            placeholder="Search..." aria-label="Search for..."
            autoComplete="off" data-docs-version="4.5"
        />
        <div id="searchable" className={`dropdown-content dropdown-menu ${toggle && 'show'}`}>
            {
                searcheable ? searcheable.slice(0, 10).map(user => {
                    return <a
                        key={user.id}
                        href={`#${user.name}`}
                        className="dropdown-item">{user.name}
                    </a>
                }) : <a href="#nodata">No Searcheable data</a>
            }
            <div role="separator" className="dropdown-divider"></div>
            <a href="#admins" className="dropdown-item">Administrators</a>
        </div>
        <button className="btn bd-search-docs-toggle d-md-none p-0 ml-3 bg-white" 
            type="button" data-toggle="collapse" data-target="#bd-docs-nav" 
            aria-controls="bd-docs-nav" aria-expanded="false" aria-label="Toggle docs navigation"
        >
            <DefaultPrimaryIcon width="30" height="30" />
        </button>
    </form>
}

export default SearchForm;