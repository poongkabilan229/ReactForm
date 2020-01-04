import React,{Component} from 'react';

import "./table.css"

export default class Table extends Component {
    constructor(props){
        super(props);
        this.state={
            disp:this.props.obj
        }
    }
    // edit =(event)=>{
    //     let index=event.target.id;
    //     // console.log(index);
    //     let x= [...this.state.disp];
    //     // console.log(x);

    // }
    del = (event)=>{
        let index=event.target.id;
        // console.log(index);
        let y = [...this.state.disp];
        y.splice(index,1);
        this.setState({
            disp:y
        })
    }
    render() {
        return (<>

            {this.state.disp.map((value,index)=>(
                        <tr >
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.password}</td>
                            {/* <td><button id={index} onClick={this.edit}>edit</button></td> */}
                            <td><button id={index} onClick={(e)=>this.del(e)}>del</button></td>
                        </tr>))}
            </>
        )
    }
}
