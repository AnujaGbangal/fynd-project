//TABLE HEADING DATA
import React from "react";
import ContactCard from "./EmpCard";
import {Link} from "react-router-dom"
const EmpList=(props)=>
{
    console.log(props);


    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };

    
    const renderContactList=props.contacts.map((contact)=>
    {
        return<ContactCard contact={contact} clickHandler ={deleteContactHandler}key={contact.id}> </ContactCard>     
       
    });
    return<div  className="ui celled list"> 
    <div  class="row">
        
        <div class="col-5">
            <h1 id="bt" > Employee List</h1>
        </div>
        <div class="col-4"></div>
        <div class="col-3">
            <Link to="/add">
                <button id="bt1" className="ui button green"> Add Employee </button>
            </Link>
        </div>

    </div>
   


    <table id="customers">
     <tr>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Created on</th>
        <th>Update on</th>
        <th>Action</th> 
    </tr>
        {renderContactList}
    </table>
</div>
    
  

};

export default EmpList;