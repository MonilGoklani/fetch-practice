import React from 'react'
import Item from './item'

class Counter extends React.Component{
    constructor(){
        super();
        const array = [1,2]
        this.state = {
            array 
        }
        this.addNumber = this.addNumber.bind(this)
        this.removeNumber = this.removeNumber.bind(this)
    }

    addNumber(){
        this.setState({array: [...this.state.array,this.state.array.length+1]})
    }

    removeNumber(elem){
        this.setState({
            array: this.state.array.filter(num => num!== elem)
        })
    }
    render(){
        const {array} = this.state
        const {addNumber,removeNumber} = this
        return(
            <div>
                <h1> Count is {array.length}</h1>
                <button onClick = {addNumber}>Add</button>
                <ul>
                    {array.map((elem, idx) => {
                        return (
                            <Item elem={elem} idx={idx} removeNumber={removeNumber}/>
                        )
                    })}    
                </ul>
            </div>
        )
    }
}

export default Counter