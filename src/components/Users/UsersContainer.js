import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    followed,
    toggleFetching,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleFollowingFetching, getUser, follow, unfollow
} from "../../redux/users-reducer";
import Preloader from "../Preloader/Preloader";



class UsersContainer extends React.Component{
    constructor(props){
        super(props);
        this.page = 2;
    }

    componentDidMount() {
        this.props.getUser(this.props.pageNumber,this.props.pageCount);
    }

    onClickPagination = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUser(this.props.pageNumber,this.props.pageCount);
    }

    render(){
        return(
            <div className='col-10'>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    pageCount={this.props.state.pageCount}
                    pageTotal={this.props.state.pageTotal}
                    pageNumber={this.props.state.pageNumber}
                    users={this.props.users}
                    showMoreUsers={this.showMoreUsers}
                    onClickPagination={this.onClickPagination}
                    onFollow={this.props.followed}
                    followingInProgress={this.props.isFollowing}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        pageTotal: state.users.pageTotal,
        pageCount: state.users.pageCount,
        pageNumber: state.users.pageNumber,
        isFetching: state.users.isFetching,
        isFollowing: state.users.followingInProgress
    };
}
/*
const mapDispatchToProps = (dispatch) =>{
    return{
        onFollow: (userId) => {
            dispatch(followAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount));
        },
        toggleFetching: (toggle) => {
            dispatch(isFetchingAC(toggle));
        }
    }
}*/

export default connect(mapStateToProps, {
    followed,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleFetching,
    toggleFollowingFetching,
    getUser,
    follow,
    unfollow
})(UsersContainer);
