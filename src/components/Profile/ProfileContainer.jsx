import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile, setUserProfileSuccess} from "../../redux/profile-reducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

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
        this.props.setUserProfile(userId);
    }

    render(){
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})
export default connect(mapStateToProps, { setUserProfile, setUserProfileSuccess})(withRouter(ProfileContainer));