import React from 'react';
import PropType from 'prop-types';
const Header = ({titulo}) => (
    <header>
        <h1 className="text-center">{titulo}</h1>
    </header>
);
 

Header.prototype={
    titulo : PropType.string.isRequired
}
export default Header;