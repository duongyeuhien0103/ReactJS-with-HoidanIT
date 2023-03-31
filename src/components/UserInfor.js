import React from "react";

class Infor extends React.Component {
    state = {
        isAdult: true
    }
    handleClick = () => {
        this.setState({
            isAdult: !this.state.isAdult
        })
    }

    render() {

        const { myInfor } = this.props

        return (
            <React.Fragment>
                <button onClick={() => { this.handleClick() }}>{
                    this.state.isAdult === true ? "Hide info" : "Show info"
                }</button>
                {myInfor.map(info => {
                    return (
                        <React.Fragment>
                            <div>
                                {this.state.isAdult && <div>
                                    My name is {info.name}
                                </div>}
                            </div>
                        </React.Fragment>
                    )

                })}
            </React.Fragment>
        );
    }
}
export default Infor