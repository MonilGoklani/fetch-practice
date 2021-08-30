import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import { ConcatenationScope } from 'webpack'
import Counter from './counter'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            view: false
        }
        this.toggle = this.toggle.bind(this)
    }

    async componentDidMount() {
        const users = await fetch('/api/users')
                    .then(res => res.json())
                    .then(data => data)
                    .catch((error) => console.log('ERROR',error))

        console.log('USERS', users)

        const users2 = (await axios.get('/api/users')).data
        console.log('USERS2', users2)

        const users3 = await fetch('/api/users')
        const data3 = await users3.json()
        console.log('USERS3', users3)
        console.log('data3', data3)
        // .then(res => res.json())
        // .then(data => data)
        // .catch((error) => console.log('ERROR',error))

        const name = 'Monil'
        const user3 = (await axios.post('/api/users', {name})).data
        console.log(user3)

        const name2 = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify({name: "Niharika"})
        }
        const user4 = await fetch('/api/users', name2)

        await fetch('/api/users',{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({name:"Arjun"})
        })
    }



    toggle(){
        this.setState({
            view : !this.state.view
        })
    }
    render(){
        const {view} = this.state
        const {toggle} = this
        return(
            <div>
                <h1 onClick = {toggle}>VIEW</h1>
                {view ? <Counter/> : ''}
            </div>
        )
    }
}


ReactDOM.render(<App/>,document.querySelector('#root'))