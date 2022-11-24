import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

   activateEditState = () => {
        this.setState( {
            editMode: true
        } )}

    deactivateEditState = () => {
        this.setState( {
               editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <>
            {!this.state.editMode
                ? <span onDoubleClick={this.activateEditState}>{this.props.status || "-------"}</span>
                : <input onChange={this.onStatusChange} value={this.state.status} autoFocus={true} onBlur={this.deactivateEditState}/>
            }
        </>
    }
}
export default ProfileStatus;