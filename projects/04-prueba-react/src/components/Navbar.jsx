import React from "react"
const Navbar = ({ brand }) => {
    return (
        <nav className=' ' >
            <div className=''>
                <a className=' ' href="/">{brand}</a>
            </div>
        </nav>
    )
};

export default Navbar;