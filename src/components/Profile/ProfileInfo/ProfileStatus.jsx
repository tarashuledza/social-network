import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        dsd:'dadsa'
    }

   activateEditState = () => {
        this.setState( {
            editMode: true
        } )}

            deactivateEditState = () => {
           this.setState( {
               editMode: false
           } )}


    render() {
        return <>
            {!this.state.editMode
                ? <span onDoubleClick={this.activateEditState}>{this.props.status}</span>
                : <input value={this.props.status} autoFocus={true} onBlur={this.deactivateEditState}/>
            }
        </>
    }
}
export default ProfileStatus;