import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, getUsers,
    isFetching,
    toggleFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import axios from "axios";
import Loader from "../../Loader";
/*import getUsers, {getUsers2, userAPI} from "../../API/API";*/

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
        /*this.props.isFetching(true);

        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.isFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalUserCount(data.totalCount)*/

    }
    onPageChanged = (pageCurrent) => {
        this.props.getUsers(pageCurrent,this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isLoading ? <Loader/>: null}
                <Users totalUserCount={this.props.totalUserCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       users={this.props.users}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingInProgress={this.props.followingInProgress}
               />
        </>
    }}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default connect(mapStateToProps, {follow, unfollow, isFetching, toggleFollowingProgress, getUsers,})(UsersContainer)
