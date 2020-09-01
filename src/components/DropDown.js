import React from 'react'
import {Link} from 'react-router-dom'
class DropDownExample extends React.Component{
    constructor(){
        super();
        this.state={
            options:[
                { key: 1, text: 'Lifestyle', value: 1 },
                { key: 2, text: 'Choice 2', value: 2 },
                { key: 3, text: 'Choice 3', value: 3 },
              ]
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row" style={{marginTop:"60px"}}>
                    <div className="col-xs-6 col-xs-offset-3">
                        <select className="form-control" style={{height:"50px"}}>
                            <option>Lifestyle</option>
                            <option>Choice 2</option>
                            <option>Choice 3</option>
                        </select>
                        <center>
                        <Link to="/tabs">
                            <button 
                            className="btn btn-primary" 
                            style={{marginTop:"20px",height:"35px"}}>Continue
                            </button>
                            </Link>    
                        </center>   
                    </div>
                </div>

                
            </div>
        )
    }
}

export default DropDownExample;