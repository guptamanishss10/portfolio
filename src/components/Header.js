import React from 'react';
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                 <h1>Web  Development</h1>
                 <Typed className='typed-text'
                 strings={["web design","FaceBook ads","Web Development"]}
                 typeSpeed={40}
                 backSpeed={60}
                 loop
                 />
            </div>
            
        </div>
    )
}

export default Header
