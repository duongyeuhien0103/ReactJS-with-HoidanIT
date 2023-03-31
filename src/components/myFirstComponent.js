import React from "react";
import AddUserInfor from "./addUserInfor";
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

    render() {
        return (
            <div>
                <AddUserInfor
                    myInfor={this.state.myInfor}

                />

            </div>
        )
    }
}
export default MyComponent