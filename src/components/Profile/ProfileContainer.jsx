import React from "react";
import {connect} from "react-redux";
import {
    getUserStatus,
    setUserProfile,
    updateUserStatus
} from "../../redux/profile-reducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {withAuthNavigate} from "../HOC/withAuthNavigate";
import {compose} from "redux";
import Profile from "./Profile";

function withRouter(ProfileContainer) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (<ProfileContainer {...props} router={{location, navigate, params}}/>)
    }
    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 26684;
        }
        this.props.setUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    render(){
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatus}/>
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {setUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthNavigate
)(ProfileContainer);
