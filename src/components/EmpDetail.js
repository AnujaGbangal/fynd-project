//VIEW PAGE
//import Select from 'react-select';
import {Link} from "react-router-dom"
// import React from "react";
// //import { useHistory } from 'react-router-dom';
// import { withRouter } from "react-router-dom";
const EmpDetail=(props)=>
{
        console.log(props);
        const{salutation,about, FirstName,LastName,Gender,Status,Birthdate,SkillSet}=props.location.state.contact;    
        
        return(
            <div className="ui main">
                <div class="row">
                    <div class="col-10">
                        <h1 id="bt">View Employee</h1>
                    </div>

                    <div class="col-2">
                       
                        <Link to="/">
                            <button  style={{color:"whitesmoke"}} id="bt" className="ui button green button">Edit | View </button>
                        </Link>
                    </div>
                       
                   
                </div>
                
                
                <form className="ui form" >
                    <div class="row">
                        <div className="col-2">
                            <div className='field' >
                                <h7>Salutation</h7> <select      style={{color:"   gray"}}  value={ salutation} >
                                <option defaultValue>Select Salutation</option>
                                <option  id="myForm1"  value="Mr.">Mr.</option>
                                <option id="myForm1"  value="Mrs.">Mrs.</option>
                                <option id="myForm1"  value="Ms.">Ms</option>
                                </select>
                            </div>
                        </div>
                    

                        <div className="col-3"> 
                            <div className='field'>
                                <h7 id="head" >First name</h7>
                                <input style={{color:"gray"}}  id="myForm" type="Text" name="FirstName" placeholder="FirstName" value={ FirstName} />
                            </div>
                        </div>

                        <div className="col-3">
                            <div className='field' >
                                <h7>Last name</h7>
                                <input style={{color:"gray"}} id="myForm" type="Text" name="LastName" placeholder="LastName" value={LastName} />
                            </div>
                        </div> 
                        

                        <div className="col-2">
                            <div style={{color:"darkblue"}}  className='field'>
                            <h7 for="Gender">Gender</h7><br></br>
                            { Gender}
                            </div>
                        </div>  

                        <div className="col-2">
                            <div style={{color:"darkblue"}} className='field'>
                                
                               <h7>Status</h7><br></br>
                              
                               {Status}
                               
                            </div>
                        </div>   

                           
                </div>
                <div className="row">

                    <div className="col-8">
                        <div className='field' >
                            <h7>About</h7>
                            <textarea rows="4" cols="50" type="text" name="name" id="myForm"  style={{color:"   gray"}} placeholder="about"value={about} />
                        </div>
                    </div>

                    <div class="col-2">
                    </div> 

                    <div className="col-2">
                        <div className='field'>
                            <h7>Date of Birth</h7>
                            <input style={{color: "gray"}}  max="2021-07-27"   id="myForm"   value={Birthdate} />
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-2">
                            <div className='field'>
                               <h7> Skill Set</h7>
                                {SkillSet.map(SkillSet =>(<li key={SkillSet.label}>{SkillSet.label}</li>)) }
                            </div>
                    </div>

                    <div class="col-8">
                    </div>

                    <div className="col-2">
                        <div className='field'>
                            <h7>Uplode photo</h7>
                        </div>   
                    </div>     
                </div>  
                <div class="row">
                    <div class="col-1">
                    <Link to="/">
                            <button style={{marginTop:"50px", color:"whitesmoke"}} id="bt" className="ui button black button">Cancel</button>
                        </Link>
                    </div>
                </div>
                </form>

            </div>
        );
    }


export default (EmpDetail);















// import {Link} from "react-router-dom";

// const EmpDetail=(props)=>
// {
//     console.log(props);
//     const{salutation,about, FirstName,LastName,Gender,Status,Birthdate,SkillSet}=props.location.state.contact;    
    
    


//     return(

//         <div className="main">
//             <div className="card">
//                 <div className="detail">
//                     <div className="header"><b>Salutaton:</b>{salutation}</div>
//                     <div className="header"><b>Firstname:</b>{FirstName}</div>
//                     <div className="header"><b>LastName:</b>{LastName}</div>
//                     <div className="header"><b>About:</b>{about}</div>
//                     <div className="header"><b>Gender:</b>{Gender}</div>
//                     <div className="header"><b>Status:</b>{Status}</div>
//                     <div className="header"><b>Birthdate:</b>{Birthdate}</div>
//                     <div className="Header"><b>SkillSet:</b>{SkillSet.map(SkillSet =>(<li key={SkillSet.label}>{SkillSet.label}</li>)) }</div>
//                 </div>
//             </div> 
//             <div className="center-div">
//                 <Link to="/"><button className="ui button blue center">Cancel</button></Link>
//             </div>
//         </div>
       
//     );
// };


// export default EmpDetail;
