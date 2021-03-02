import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {checkAuth, setUserData} from "../../redux/auth-reducer";
import {auth} from "../../API/api";


class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.checkAuth();
    }

    render(){
        return(
            <Header {...this.props} />
        );
    }

}

const mapStateToProps = (state) => ({
    userId: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {setUserData, checkAuth})(HeaderContainer);


