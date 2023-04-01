import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
import "./display.scss"
class MyComponent extends React.Component {
    state = {
        myInfor: [
            {
                id: 1,
                name: "Dương",
                age: 22
            },
            {
                id: 2,
                name: "Hiền",
                age: 22
            },
            {
                id: 3,
                name: "Vô danh",
                age: 99
            }
        ]
    }
    handleAddUser = (obj) => {
        this.setState({
            myInfor: [obj, ...this.state.myInfor]
        })
    }
    handleDeleteUser = (userId) => {
        let myInforClone = [...this.state.myInfor]
        // myInforClone.filter(item => item.id !== userId)
        myInforClone.filter((item) => {
            return item.id.toString() !== userId
        })
        this.setState({
            myInfor: myInforClone
        })

    }


    render() {

        return (
            <React.Fragment >
                <AddUserInfor
                    handleAddUser={this.handleAddUser}
                ></AddUserInfor>
                <DisplayInfor
                    myInfor={this.state.myInfor}
                    handleDeleteUser={this.handleDeleteUser}
                >

                </DisplayInfor>

                {/* <img src={logo} /> */}
            </React.Fragment>
        )
    }
}
export default MyComponent