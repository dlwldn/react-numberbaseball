import React, { Component } from 'react';


function getNumbers() { 

}




class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: []
    }
   

    onSubmitForm = () => {

    }

    onChangeHandler = (e) => {
        this.setState({
            [e.taget.name]: e.taget.value,
        })
    }


    render() {
        return (
            <div>
                <h1>{this.state.result}</h1>
                <form action="" onSubmit={this.onSubmitForm}>
                    <input type="text" name="value" maxLength={4} value={this.state.value} onChange={this.onChangeHandler}/>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    <li></li>
                </ul>
            </div>
        );
    }
}

export default NumberBaseball;