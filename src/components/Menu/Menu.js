import React from 'react';
import MenuItem from "./MenuItem/MenuItem";


const Menu = (props) => {
    let menu = props.menu.map(el => <MenuItem to={el.to} key={el.id} id={el.id} name={el.name} active={el.active}/>)
    return (
        <div className="col-2">
            <nav>
                <ul className="nav flex-column">
                    {menu}
                </ul>
            </nav>
        </div>
    );
}


export default Menu;

