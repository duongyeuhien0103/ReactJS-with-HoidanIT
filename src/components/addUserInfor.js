import React from "react";
class AddUserInfor extends React.Component {
    state = { name: 'dương', age: 10, id: "" }
    handleChangeName = (e) => {
        this.setState({
            name: e.target.value

        })
    }
    handleChangeAge = (e) => {
        this.setState({
            age: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.handleAddUser({
            id: Math.floor(Math.random() * 100) + 1 + "random",
            name: this.state.name,
            age: Number(this.state.age),
        })
        // console.log(this.state)

    }
    render() {
        return (
            < React.Fragment>
                <form type="submit" onSubmit={(e) => { this.handleOnSubmit(e) }}>
                    <label>Nick name: </label>
                    <input placeholder="Điền tên ik" type="text" value={this.state.name} onChange={(e) => { this.handleChangeName(e) }} />
                    <br />
                    <label>Age: </label>
                    <input placeholder="Điền tuổi ik" type={"text"} value={this.state.age} onChange={(e) => { this.handleChangeAge(e) }} />
                    <br />
                    <button>Add user</button>
                </form>
            </React.Fragment>
        )

    }
}
export default AddUserInfor
