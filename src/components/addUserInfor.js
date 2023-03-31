import React from "react";
import logo from "./../logo.svg"
class AddUserInfor extends React.Component {
    state = {
        isAdult: true
    }
    handleClick = () => {
        this.setState({
            isAdult: !this.state.isAdult
        })
    }
    handleAge = (e) => {

    }
    handleName = (e) => {
        return e.target.value
    }
    handleOnSubmit = (event) => {
        event.preventDefault()

    }


    render() {

        const { myInfor } = this.props
        return (
            <React.Fragment>
                <form type="submit" onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>nick name: </label>
                    <input type="text" placeholder="điền tên ik" onBlur={(e) => { this.handleName(e) }} ></input>
                    <br />
                    <label>Tuổi gì: </label>
                    <input type="text" placeholder="điền tuổi ik" onChange={(e) => { this.handleAge(e) }} ></input>
                    <br />
                    <button>Submit</button>
                    <br />
                    <button onClick={() => { this.handleClick() }}>{
                        this.state.isAdult === true ? "Hide info" : "Show info"
                    }</button>
                    {myInfor.map(info => {
                        return (
                            <React.Fragment key={info.id}>
                                <div>
                                    {this.state.isAdult &&
                                        <div>
                                            My name is {info.name}
                                            <br />
                                            Im {info.age} years old
                                            <hr />
                                        </div>
                                    }
                                </div>
                            </React.Fragment>
                        )

                    })}
                </form>
                <img src={logo} />
            </React.Fragment>

        );
    }
}
export default AddUserInfor