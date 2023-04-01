import React from "react";
import "./display.scss"
class DisplayInfor extends React.Component {
    state = {
        isShowUser: true
    }
    hidenAndShowUser = () => {
        this.setState({
            isShowUser: !this.state.isShowUser
        })
    }

    render() {
        const { myInfor } = this.props
        return (
            <React.Fragment>
                <button onClick={() => { this.hidenAndShowUser() }}>{this.state.isShowUser === true ? "Hide user" : "Show user"}</button>
                <br />

                {this.state.isShowUser && myInfor.map(user => (
                    <React.Fragment key={user.id}>
                        <p className={user.age > 30 ? "red" : "green"}>
                            My name is {user.name}
                        </p>
                        <br />
                        I'm {user.age} years old
                        <br />
                        <button onClick={() => {
                            this.props.handleDeleteUser(user.id)
                        }}>Delete user</button>
                        <hr />
                    </React.Fragment>
                ))
                }
            </React.Fragment>
        )
    }
}
export default DisplayInfor