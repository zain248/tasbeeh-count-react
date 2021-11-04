import React from 'react'
import "./app.css"
export default class App extends React.Component{
   state={
       count:0,
   }
    handleInc=()=>{
this.setState({
    count:this.state.count+1
})
    }
    handlezero=()=>{
        this.setState({
            count:0
        })
            }
    handledec=()=>{
        this.setState({
            count:this.state.count-1
            
        })
        if(this.state.count===0){
            this.setState({
                count:0
            })
        }
            }
    render(){
        console.log(this.state,"test")
        return(
            <div className="mai">
                <h1>Digital Tasbeeh</h1>
            <h1 className="gh">{this.state.count}</h1>
            <button onClick={this.handleInc}>inc</button>
            <button onClick={this.handledec}>dec</button>
            <button onClick={this.handlezero}>zero</button>
            </div>
        )
    }
}