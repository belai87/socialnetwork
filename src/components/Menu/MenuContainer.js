import React from 'react';
import {connect} from "react-redux";
import Menu from "./Menu";

const mapStateToProps = (state) =>{
    return{
        menu: state.menu.items
    }
}

const MenuContainer = connect(mapStateToProps)(Menu);

export default MenuContainer;