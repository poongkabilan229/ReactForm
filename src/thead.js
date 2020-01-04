import React,{Component} from 'react'
import './thead.css'


export default class Thead extends Component {
    constructor(props){
        super(props);
        this.state={
            disp:this.props.obj
        }
    }

    // delete(i){
    //     console.log(i)
    //     debugger
    // }
    
    render() {
        console.log(this.delete)
        return (<>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </thead>
                    {this.state.disp.map((value,index)=>(
                        <tr >
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.password}</td>
                            <td><button id={index} onClick={()=>this.props.edit(index,value.name,value.email,value.password)}>edit</button></td>
                            <td><button id={index} onClick={()=>this.props.delete(index)}>del</button></td>
                        </tr>))}
            </table>
            </>
        )
    }
}

