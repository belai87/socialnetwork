import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {userProfile, getStatusProfile, updateStatusProfile} from "../../redux/profile-reduser";
import {withRouter} from "react-router";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.userProfile(userId);
        this.props.getStatusProfile(userId);
    }

    render(){
        //console.log(this.props);
        return(
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusProfile}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
        status: state.profile.status
    };
}

export default compose(
    connect(mapStateToProps, {userProfile, getStatusProfile, updateStatusProfile}),
    withRouter,
    //withAuthRedirectContainer
)(ProfileContainer);



