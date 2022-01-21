import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar row'>
            <Link to={'/'} style={{ 'textDecoration': 'none', 'color': 'black' }} className='col-6 '><h2 className='col-6'> Navbar </h2></Link>
            <Link to={'/favourites'} style={{ 'textDecoration': 'none', 'color': 'black' }} className='col-6'><h3 className='col-6'>Favourites </h3></Link>
        </div>
    )
}
