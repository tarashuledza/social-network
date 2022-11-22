import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthNavigate = (Component) => {
    class NavigateComponent extends React.Component {
        render() {
            if(this.props.isAuth) return <Navigate to="/login" />
            return <Component {...this.props} profile={this.props.profile}/>
        }
    }

    let ConnectedAutNavigateComponent = connect(mapStateToPropsForRedirect)(NavigateComponent);
    return ConnectedAutNavigateComponent;
}
