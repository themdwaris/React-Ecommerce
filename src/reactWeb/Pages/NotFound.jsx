import React from 'react'
import { NavLink } from 'react-router-dom'
import pageNotFound from '../images/pageNotFound.svg'

const NotFound = () => {
  return (
    <div className='notFoundContainer lr-pad martop'>
        <div className='notfound'>
            <div className='rotate'><img src={pageNotFound} alt='notFound'/></div>
            <h1>Page not found</h1>
            <NavLink to='/'>Go Back</NavLink>
        </div>
    </div>
  )
}

export default NotFound