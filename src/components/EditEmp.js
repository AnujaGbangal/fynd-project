//EDIT PAGE
import Select from 'react-select';
import {Link} from "react-router-dom"
import React from "react";
//import { useHistory } from 'react-router-dom';
import { withRouter } from "react-router-dom";


const subject = [
    { label: "Python", value: 1 },
    { label: "java", value: 2 },
    { label: "R", value: 3 },
    { label: "React JS", value:4 },
   
  ];
  const initialState=
  {
                salutation:"",
                FirstName:"",
                LastName:"",
                about:"",
                Gender:"Female",
                Status:"Unmarried",
                Birthdate:"",
                SkillSet:"",

  }



class EditEmp extends React.Component
{

    constructor(props){
        super(props);
        
            const {id,salutation,FirstName,LastName,about,Gender,Status, Birthdate,SkillSet}=props.location.state.contact;
            this.state={
                id,salutation,FirstName,LastName,about,Gender,Status, Birthdate,SkillSet};
    }

    changeStatus=(value)=>{
        let Status = value ==='Married' ? 'Unmarried'  : 'Married';
        this.setState({Status : Status})
    }
    changeGender=(value)=>{
        let Gender = value ==='Male' ? 'Female'  : 'Male';
        this.setState({Gender : Gender})
    }
    
    update=(e)=>{
        e.preventDefault();
        if(this.state.salutation===""||this.state.FirstName==="" ||this.state.LastName===""   ||this.state.about===""|| this.state.Birthdate===""||this.state.SkillSet===""|| this.state.Status==="" )
        {
            alert("all field are compulsary");
            return;
        }
        else
        {
            this.props.updateContactHandler(this.state);
            this.setState({salutation:" ",FirstName:" ",LastName:" ",about:" ",Gender:" ",Status:" ",Birthdate:" ",SkillSet:" "});
            //let history = useHistory();
            this.props.history.push('/');
            
        }
    };
   

    
    render()
    {
        return(
            <div className="ui main">
                <div class="row">
                    <div class="col-10">
                        <h1 id="bt">Edit Student</h1>
                    </div>
                       
                    <div class="col-2">
                       
                        {/* <Link to="/">
                            <button  id="bt" className="ui button green button">Edit | View </button>
                        </Link> */}
                    </div>
                </div>
                
                
                <form className="ui form" onSubmit={this.update}>
                    <div class="row">
                        <div className="col-2">
                            <div className='field' >
                                
                    
                                
                                
                             <h7>Salutation</h7> <select  id="myForm" value={this.state.salutation} onChange={(e)=>this.setState({salutation:e.target.value})}>
                                <option defaultValue>Select Salutation</option>
                                <option id="myForm1" value="Mr.">Mr.</option>
                                <option id="myForm1" value="Mrs.">Mrs.</option>
                                <option id="myForm1" value="Ms.">Ms</option>
                                </select> 
                            </div>
                        </div>
                    

                        <div className="col-3"> 
                            <div className='field'>
                                <h7>First name</h7>
                                <input  id="myForm" type="Text" name="FirstName" placeholder="FirstName" value={this.state.FirstName} onChange={(e)=>this.setState({FirstName:e.target.value})}/>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className='field' >
                                <h7>Last name</h7>
                                <input  id="myForm"  type="Text" name="LastName" placeholder="LastName" value={this.state.LastName} onChange={(e)=>this.setState({LastName:e.target.value})}/>
                            </div>
                        </div> 
                        

                        <div className="col-2">
                            <div className='field'>
                                <h7 id="head">Gender</h7><br></br>
                                <input type="radio"  value={this.state.Gender} onChange={(e)=>this.changeGender(e.target.value)} checked={this.state.Gender==='Male'}  name="Gender" ></input>
                                <t for="Male"  style={{color:"darkblue"}}> &nbsp;Male&nbsp;</t>
                                <input type="radio" value={this.state.Gender} onChange={(e)=>this.changeGender(e.target.value)} checked={this.state.Gender==='Female'}  name="Gender"  />
                                <t for="Female" style={{color:"darkblue"}}  >&nbsp;Female</t>
                                
                            </div>

                                {/* <input type="checkbox"  value={this.state.Gender} onChange={(e)=>this.changeGender(e.target.value)}  checked={this.state.Gender==='Male'}></input>
                                <t style={{marginTop:0}}> &nbsp;Male</t>  */}
                                     
                        </div>  

                        <div className="col-2">
                            <div className='field'>
                                
                               <h7 >Status</h7><br></br>
                               <input type="checkbox"  value={this.state.Status} onChange={(e)=>this.changeStatus(e.target.value)}  checked={this.state.Status=='Married'}></input>
                               <lable style={{color:"darkblue"}}  > &nbsp; Married</lable>
                            </div>
                        </div>   

                           
                </div>
                <div className="row">

                    <div className="col-8">
                        <div className='field' >
                            <h7>About</h7>
                            <textarea rows="4" cols="50"   id="myForm" type="text" name="name" placeholder="about"value={this.state.about} onChange={(e)=>this.setState({about:e.target.value})}/>
                        </div>
                    </div>

                    <div class="col-2">
                    </div> 

                    <div className="col-2">
                        <div className='field'>
                            <h7>Date of Birth</h7>
                            <input type="date"  id="myForm"  name="bdata" max="2021-07-28" placeholder="birthdate" value={this.state.Birthdate} onChange={(e)=>this.setState({Birthdate:e.target.value})}/>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-2">
                            <div className='field'>
                                <h7>Skill Set</h7>
                              
                                <Select options={subject} isMulti  id="myForm" value={this.state.SkillSet} onChange={(option)=>this.setState({SkillSet:option})}></Select>
                            </div>
                    </div>

                    <div class="col-8">
                    </div>

                    <div className="col-2">
                        <div className='field'>
                            <h7 >Uplode photo</h7>
                        </div>   
                    </div>     
                </div>  
                <div class="row">
                    <div class="col-1">
                    <Link to="/">
                            <button style={{marginTop:"50px",color:"whitesmoke"}} id="bt" className="ui button black button">Cancel</button>
                        </Link>
                    </div>

                    <div class="col-4">
                    </div> 

                    <div class="col-1">
                      <button style={{marginTop:"50px"}} value="reset" id="butn"   onChange={(e)=>this.setState(initialState)} className="btn btn-secondary">Reset</button> 
                    </div> 

                    <div class="col-4">
                        </div>  
                         
                    <div class="col-1">
                        <button id="butn" style={{marginTop:"50px"}}className="ui button blue button">Update</button>
                    </div>     
                       
                </div>
                </form>

            </div>
        );
    }
}

export default withRouter(EditEmp);









// //EDIT PAGE
// import Select from 'react-select';
// import {Link} from "react-router-dom"
// import React from "react";
// //import { useHistory } from 'react-router-dom';
// import { withRouter } from "react-router-dom";


// const subject = [
//     { label: "Python", value: 1 },
//     { label: "java", value: 2 },
//     { label: "R", value: 3 },
//     { label: "React JS", value:4 },
   
//   ];
//   const initialState=
//   {
//                 salutation:"",
//                 FirstName:"",
//                 LastName:"",
//                 about:"",
//                 Gender:"Female",
//                 Status:"Unmarried",
//                 Birthdate:"",
//                 SkillSet:"",

//   }



// class EditEmp extends React.Component
// {

//     constructor(props){
//         super(props);
        
//             const {id,salutation,FirstName,LastName,about,Gender,Status, Birthdate,SkillSet}=props.location.state.contact;
//             this.state={
//                 id,salutation,FirstName,LastName,about,Gender,Status, Birthdate,SkillSet};
//     }

//     changeStatus=(value)=>{
//         let Status = value ==='Married' ? 'Unmarried'  : 'Married';
//         this.setState({Status : Status})
//     }
//     changeGender=(value)=>{
//         let Gender = value ==='Male' ? 'Female'  : 'Male';
//         this.setState({Gender : Gender})
//     }
    
//     update=(e)=>{
//         e.preventDefault();
//         if(this.state.salutation===""||this.state.FirstName==="" ||this.state.LastName===""   ||this.state.about===""|| this.state.Birthdate===""||this.state.SkillSet===""|| this.state.Status==="" )
//         {
//             alert("all field are compulsary");
//             return;
//         }
//         else
//         {
//             this.props.updateContactHandler(this.state);
//             this.setState({salutation:" ",FirstName:" ",LastName:" ",about:" ",Gender:" ",Status:" ",Birthdate:" ",SkillSet:" "});
//             //let history = useHistory();
//             this.props.history.push('/');
            
//         }
//     };
   

    
//     render()
//     {
//         return(
//             <div className="ui main">
//                 <div class="row">
//                     <div class="col-10">
//                         <h1 id="bt">Edit Employee</h1>
//                     </div>
                       
//                     <div class="col-2">
                       
//                         {/* <Link to="/">
//                             <button  id="bt" className="ui button green button">Edit | View </button>
//                         </Link> */}
//                     </div>
//                 </div>
                
                
//                 <form className="ui form" onSubmit={this.update}>
//                     <div class="row">
//                         <div className="col-2">
//                             <div className='field' >
                                
                    
                                
                                
//                              <h7>Salutation</h7> <select  id="myForm" value={this.state.salutation} onChange={(e)=>this.setState({salutation:e.target.value})}>
//                                 <option defaultValue>Select Salutation</option>
//                                 <option id="myForm1" value="Mr.">Mr.</option>
//                                 <option id="myForm1" value="Mrs.">Mrs.</option>
//                                 <option id="myForm1" value="Ms.">Ms</option>
//                                 </select> 
//                             </div>
//                         </div>
                    

//                         <div className="col-3"> 
//                             <div className='field'>
//                                 <h7>First name</h7>
//                                 <input  id="myForm" type="Text" name="FirstName" placeholder="FirstName" value={this.state.FirstName} onChange={(e)=>this.setState({FirstName:e.target.value})}/>
//                             </div>
//                         </div>

//                         <div className="col-3">
//                             <div className='field' >
//                                 <h7>Last name</h7>
//                                 <input  id="myForm"  type="Text" name="LastName" placeholder="LastName" value={this.state.LastName} onChange={(e)=>this.setState({LastName:e.target.value})}/>
//                             </div>
//                         </div> 
                        

//                         <div className="col-2">
//                             <div className='field'>
//                                 <h7 id="head">Gender</h7><br></br>
//                                 <input type="radio"  value={this.state.Gender} onChange={(e)=>this.changeGender(e.target.value)} checked={this.state.Gender==='Male'}  name="Gender" ></input>
//                                 <t for="Male"  style={{color:"darkblue"}}> &nbsp;Male&nbsp;</t>
//                                 <input type="radio" value={this.state.Gender} onChange={(e)=>this.changeGender(e.target.value)} checked={this.state.Gender==='Female'}  name="Gender"  />
//                                 <t for="Female" style={{color:"darkblue"}}  >&nbsp;Female</t>
                                
//                             </div>

//                                 {/* <input type="checkbox"  value={this.state.Gender} onChange={(e)=>this.changeGender(e.target.value)}  checked={this.state.Gender==='Male'}></input>
//                                 <t style={{marginTop:0}}> &nbsp;Male</t>  */}
                                     
//                         </div>  

//                         <div className="col-2">
//                             <div className='field'>
                                
//                                <h7 >Status</h7><br></br>
//                                <input type="checkbox"  value={this.state.Status} onChange={(e)=>this.changeStatus(e.target.value)}  checked={this.state.Status=='Married'}></input>
//                                <lable style={{color:"darkblue"}}  > &nbsp; Married</lable>
//                             </div>
//                         </div>   

                           
//                 </div>
//                 <div className="row">

//                     <div className="col-8">
//                         <div className='field' >
//                             <h7>About</h7>
//                             <textarea rows="4" cols="50"   id="myForm" type="text" name="name" placeholder="about"value={this.state.about} onChange={(e)=>this.setState({about:e.target.value})}/>
//                         </div>
//                     </div>

//                     <div class="col-2">
//                     </div> 

//                     <div className="col-2">
//                         <div className='field'>
//                             <h7>Date of Birth</h7>
//                             <input type="date"  id="myForm"  name="bdata" max="2021-07-28" placeholder="birthdate" value={this.state.Birthdate} onChange={(e)=>this.setState({Birthdate:e.target.value})}/>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="row">

//                     <div className="col-2">
//                             <div className='field'>
//                                 <h7>Skill Set</h7>
                              
//                                 <Select options={subject} isMulti  id="myForm" value={this.state.SkillSet} onChange={(option)=>this.setState({SkillSet:option})}></Select>
//                             </div>
//                     </div>

//                     <div class="col-8">
//                     </div>

//                     <div className="col-2">
//                         <div className='field'>
//                             <h7 >Uplode photo</h7>
//                         </div>   
//                     </div>     
//                 </div>  
//                 <div class="row">
//                     <div class="col-1">
//                     <Link to="/">
//                             <button style={{marginTop:"50px",color:"whitesmoke"}} id="bt" className="ui button black button">Cancel</button>
//                         </Link>
//                     </div>

//                     <div class="col-4">
//                     </div> 

//                     <div class="col-1">
//                       <button style={{marginTop:"50px"}} value="reset" id="butn"   onChange={(e)=>this.setState(initialState)} className="btn btn-secondary">Reset</button> 
//                     </div> 

//                     <div class="col-4">
//                         </div>  
                         
//                     <div class="col-1">
//                         <button id="butn" style={{marginTop:"50px"}}className="ui button blue button">Update</button>
//                     </div>     
                       
//                 </div>
//                 </form>

//             </div>
//         );
//     }
// }

// export default withRouter(EditEmp);









