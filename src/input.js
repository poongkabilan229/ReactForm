import React from "react";
import Thead from "./thead";
import "./input.css";
let suba = [];
let ed =[];
class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      isSubmitted: false,
      username: "",
      email: "",
      password: "",
      sub: {
        name: "",
        email: "",
        password: ""
      }
      
    };
  }
 del = (i)=>{
    //  debugger
        // let index=event.target.id;
        // // console.log(index);
        // let y = [...this.state.disp];
        suba.splice(i,1);
        this.setState({
            sub:suba
        })
    } 
    edit =(j,n,e,p)=>{
        // debugger
        this.setState({
            username:n,
            email:e,
            password:p,
        })
        // debugger
      
           let newName = this.state.username;
           let newMail =this.state.email;
            let newPass =this.state.password;
    
        suba.splice(j,1,{name:newName,email:newMail,password:newPass})
        this.setState({
            sub:suba
            })

            

        

    }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    let temp = {
      name: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    if(this.state.username && this.state.email && this.state.password)
    {
        suba.push(temp);
    this.setState({
      sub: suba,
      isSubmitted: true
    });
    
    }
    this.Clear();
  };
  Clear = () => {
    this.setState({
      username: "",
      email: "",
      password: ""
    });
  };
  render() {
    return (
      <>
        <div className="infield">
          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              value={this.state.username}
              name="username"
              placeholder="Enter Your Name"
              onChange={this.handleChange}
            />
            <br />
            <label>MailId</label>
            <input
              type="email"
              value={this.state.email}
              name="email"
              placeholder="Enter Your MailId"
              onChange={this.handleChange}
            />
            <br />
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              name="password"
              placeholder="Enter Your Password"
              onChange={this.handleChange}
            />
            <br />
            <button onClick={(e)=>this.handleSubmit(e)}>Submit</button>
          </form>
        </div>
        <div>{this.state.isSubmitted &&  <Thead obj={this.state.sub} delete={(i)=>this.del(i) } edit={(j,n,e,p)=>this.edit(j,n,e,p)}/>}</div>
      </>
    );
  }
}

export default Input;
