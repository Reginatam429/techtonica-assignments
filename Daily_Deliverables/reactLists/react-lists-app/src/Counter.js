import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter: props.initialCount
        };
    }
    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                    <button onClick= {()=> 
                        this.setState({counter:this.state.counter+1})}>
                        increment
                    </button>
                    <button onClick= {()=>
                        this.setState({counter:this.state.counter-1
                        })}>
                        decrement
                    </button>
            </div>
        );
    }
}


export default Counter;