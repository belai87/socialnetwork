import React from 'react';


class ProfileStatus extends React.Component{

    state = {
        isVisible: true,
        status: this.props.status
    }

    activeteStatus = () => {
        this.setState({
            isVisible: !this.state.isVisible
        });
        this.props.updateStatus(this.state.status);
    }

    statusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }
    }


    render(){
        return (
            <div>
                {this.state.isVisible &&

                    <div>
                        <span onDoubleClick={this.activeteStatus}>{this.props.status ? this.props.status : 'my status'}</span>
                    </div>
                }

                {!this.state.isVisible &&
                    <div>
                        <input onChange={this.statusChange} autoFocus={true} onBlur={this.activeteStatus} type="text" defaultValue={this.props.status}/>
                    </div>
                }

            </div>
        );
    }

}

export default ProfileStatus;

