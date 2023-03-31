import React from "react";
import Infor from "./UserInfor";

class MyComponent extends React.Component {
    state = {
        myInfor: [
            {
                id: 1,
                name: "Dương",
                address: "HÀ Đông",
                age: 22
            },
            {
                id: 2,
                name: "Hiền",
                address: "Long Biên",
                age: 22
            },
            {
                id: 3,
                name: "Vô danh",
                address: "vô gia cư",
                age: 99
            }
        ]
    }
    render() {
        return (
            <div>
                <Infor
                    myInfor={this.state.myInfor}
                />

            </div>
        )
    }
}
export default MyComponent