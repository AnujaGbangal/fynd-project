//NEAR TABLE DATA
import React from 'react';
import {Link} from "react-router-dom";

const EmpCard=(props)=>
{
    const moment= require('moment')
    var result = moment().format('MMM Do YY')

    const {id,FirstName,LastName}= props.contact;
    return(
            <tr>
                <td>{FirstName}</td>
                <td>{LastName}</td>
                <td>{result}</td>
                <td>{result}</td>
                <td> <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px", marginLeft:"10px",}} onClick={()=> props.clickHandler(id)}></i> 
                <Link to={{pathname:`/contact/${id}`,state:{contact:props.contact}}}><i className="eye alternate ouline icon"  style={{color:"pink", marginTop:"7px", marginLeft:"10px",}}></i></Link>
                <Link to={{pathname:"/edit",state:{contact:props.contact}}}><i className="edit alternate ouline icon"  style={{color:"blue", marginTop:"7px", marginLeft:"10px",}}></i></Link> 
                </td>
                 
            </tr>

    );

};
// <Link to={{pathname:"/edit",state:{contact:props.contact }}}><button>edit</button></Link> 

export default EmpCard;


/*
const EmpCard=(props)=>
{
    
    const {id,salutation,FirstName,LastName,about,Gender,Status,Birthdate,SkillSet}= props.contact;
    return(




<div className="item">
                    <div className="content">
                        <div className="header">{salutation}</div>
                        <div className="header">{FirstName}</div>
                        <div className="header">{LastName}</div>
                        <div className="header">{about}</div>
                        <div className="header">{Gender}</div>
                        <div className="header">{Status}</div>
                        <div className="header" >{Birthdate}</div>
                        <div className="header">{SkillSet}</div>
                    
                    </div>
            
                <button type="button" className="btn btn-info" onClick={()=>props.clickHandler(id)}>Delete</button>
                
            </div> */