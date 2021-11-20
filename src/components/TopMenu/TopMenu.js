import React from 'react';

// components
import SpaceXSvgLogo from './../Logo';
import MenuLinks from './../MenuLinks';

const TopMenu = ({ rockets, toggleMenu }) => (
    <div className="col d-flex justify-content-between align-items-center position-absolute">
        <MenuLinks rockets={rockets} toggleMenu={toggleMenu} />
        <SpaceXSvgLogo />
    </div>
);

export default TopMenu;
