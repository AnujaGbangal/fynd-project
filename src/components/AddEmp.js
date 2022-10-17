import Select from 'react-select';
import {Link} from "react-router-dom"
import React from "react";
//import { useHistory } from 'react-router-dom';
import { withRouter } from "react-router-dom";

const initialState=
{
    salutation:"",
                FirstName:"",
                LastName:"",
                about:"",
                Gender:"",
                Status:"Unmarried",
                Birthdate:"",
                SkillSet:"",

}
const subject = [
        { label: "Python", value: 1 },
        { label: "java", value: 2 },
        { label: "R", value: 3 },
        { label: "React JS", value:4 }
    ];

class AddEmp extends React.Component
{

    constructor(props){
        super(props);
        
            this.state=initialState;
        
    }
    

    changeStatus=(value)=>{
        let Status = value ==='Married' ? 'Unmarried'  : 'Married';
        this.setState({Status : Status})
    }

    changeGender=(value)=>{
        let Gender = value ==='Male' ? 'Female'  : 'Male';
        this.setState({Gender : Gender})
    }
    
    

    // valid()
    // {

    //     // let salutationError="";
    //        let FirstNameError=" ";
    //     // let LastNameError="";
    //     // let aboutError="";
    //     // let GenderError="";
    //     // let StatusError="";
    //     // let BirthdateError="";
    //     // let SkillSetError="";

    //     if(this.state.FirstNameError==="")
    //     {
    //         FirstNameError="enter the name";
    //     }
    //     if(FirstNameError)
    //     {
    //         this.setState({FirstNameError});
    //         return false;
    //     }
    //     return true;
    // }
    changereset=(value)=>
    {
                this.value.salutation="";
                this.value.FirstName="";
                this.value.LastName="";
                this.value.about="";
                this.value.Gender="";
                this.value.Status="";
                this.value.Birthdate="";
                this.value.SkillSet="";
    };
   
    
    save=(e)=>{
       
        e.preventDefault();
        if(this.state.salutation===""|| this.state.FirstName==="" ||this.state.LastName==="" || this.state.about===""|| this.state.Birthdate===""|| this.state.SkillSet==="" )
        {
            
                if (this.state.salutation==="")
                {
                    alert("Salutation is compulsary");
                    return;
                    
                }
                if ( this.state.FirstName==="" )
                {
                    alert("FirstName is compulsary");
                    return;   
                } 
                if( this.state.LastName==="" ) 
                {
                    alert("LastName is compulsary");
                    return;
                }
                if( this.state.about==="" ) 
                {
                    alert("about is compulsary");
                    return;   
                }
                if( this.state.Birthdate==="" ) 
                {
                    alert("Birthdate is compulsary");
                    return;
                }
                if( this.state.SkillSet==="" ) 
                {
                    alert("SkillSet is compulsary");
                    return;
                }
            
            
        }
        this.props.addContactHandler(this.state);
            
        // this.setState({salutation:"",FirstName:"",LastName:"",about:"",Gender:"",Status:"",Birthdate:"",SkillSet:""});
        //let history = useHistory();
        alert("data saved !")
        this.props.history.push('/');
        
    };
    
    
   
    render()
    {
        return(
            <div className="ui main">
                <div class="row">
                    <div class="col-10">
                        <h1 id="bt" >Add Student</h1>
                    </div>
                        
                    {/* <div class="col-2">
                       
                        <Link to="/">
                            <button  id="bt"  style={{color:"whitesmoke"}} className="ui button green button">Edit | View </button>
                        </Link>
                    </div> */}
                </div>
                
                
                <form className="ui form"  onSubmit={this.save}>
                    <div class="row">
                        <div className="col-2">
                            <div className='field'>
                                <h7>Salutation</h7> <select id="myForm"  placeholder="salutation"    value={this.state.salutation} onChange={(e)=>this.setState({salutation:e.target.value})}>
                                <option defaultValue></option>
                                <option id="myForm" value="Mr.">Mr.</option>
                                <option id="myForm" value="Mrs.">Mrs.</option>
                                <option  id="myForm" value="Ms.">Ms</option>
                                </select>
                               
                            </div>
                        </div>
                    

                        <div className="col-3"> 
                            <div className='field'>
                                <h7 id="head">First name</h7>
                                <input id="myForm" type="Text" name="FirstName" placeholder="First Name" value={this.state.FirstName} onChange={(e)=>this.setState({FirstName:e.target.value})}/>
                            </div>
                             {/* {this.state.FirstNameError ? ( <p style={{color:"red"}}>{this.state.FirstNameError}</p>):null}  */}
                        </div>

                        <div className="col-3">
                            <div className='field'>
                                <h7 id="head">Last name</h7>
                                <input id="myForm" type="Text" name="LastName" placeholder="Last Name" value={this.state.LastName} onChange={(e)=>this.setState({LastName:e.target.value})}/>
                            </div>
                        </div> 
                        

                        <div className="col-2">
                            <div className='field'>
                            <h7 for="Gender" id="head">Gender</h7><br></br>
                                <input type="radio"   name="Gender" value="Male" checked onChange={(e)=>this.setState({Gender:e.target.value})}></input>
                                <t for="Male" style={{color:"darkblue"}} > &nbsp;Male&nbsp;</t>
                                <input type="radio" name="Gender"  value="Female"onChange={(e)=>this.setState({Gender:e.target.value})}/>
                                <t for="Female" style={{color:"darkblue"}}  >&nbsp;Female</t>
                            
                              {/* <input type="checkbox"  value={this.state.Gender} onChange={(e)=>this.changeGender(e.target.value)}  checked={this.state.Gender==='Male'}></input>
                              <t style={{color:"darkblue"}}> &nbsp;Male</t>  */}


                            </div>
                        </div>  

                        <div className="col-2">
                            <div className='field'>
                                
                               <h7 id="head">Status</h7><br></br>
                              
                               <input type="checkbox"  value={this.state.Status} onChange={(e)=>this.changeStatus(e.target.value)}  checked={this.state.Status==='Married'}></input>
                               <t style={{color:"darkblue"}} > &nbsp;Married</t>
                            </div>
                        </div>   

                           
                </div>
                <div className="row">

                    <div className="col-8">
                        <div className='field'>
                            <h7 id="head">About</h7>
                            <textarea rows="4" cols="50"  id="myForm" type="text" name="name" placeholder="About"value={this.state.about} onChange={(e)=>this.setState({about:e.target.value})}/>
                        </div>
                    </div>

                    <div class="col-2">
                    </div> 

                    <div className="col-2">
                        <div className='field'>
                            <h7 id="head">Date of Birth</h7>
                            <input type="date" id="myForm" style={{color:"darkblue"}}  max="2021-07-28" value={this.state.Birthdate} onChange={(e)=>this.setState({Birthdate:e.target.value})}/>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div  className="col-2">
                            <div className='field'>
                                <h7  id="head">Skill Set</h7>
                              
                                <k1><Select id="myForm" options={subject} isMulti value={this.state.SkillSet} onChange={(option)=>this.setState({SkillSet:option})}></Select></k1>
                            </div>
                    </div>

                    <div class="col-8">

                        


                    </div>

                    <div className="col-2">
                        <div className='field'>
                            <h7 id="head">Uplode photo</h7>
                        </div>   
                    </div>     
                </div>  
                <div class="row">
                    <div class="col-1">
                    <Link to="/">
                            <button style={{marginTop:"18px"}}   className="ui button blue button">Cancel</button>
                            
                        </Link>
                    </div>

                    <div class="col-4">

                    </div> 

                    <div class="col-1">
                        
                       <button id="butn" type="reset"  className="ui button black  button">Reset</button> 
                            
                    </div> 

                    <div class="col-4">

                    </div>

                    <div class="col-2">
                        <button id="butn" className="ui button green button">submit</button>
                        
                    </div>     
                    
                </div>
                </form>

            </div>
        );
    }
}

export default withRouter(AddEmp);
















// <form className="ui form" onSubmit={this.add}>

// <div className='field'>

// <label>Salutation</label> <select value={this.state.salutation} onChange={(e)=>this.setState({salutation:e.target.value})}>
//     <option defaultValue>SelectSalutation</option>
//     <option value="Mr.">Mr.</option>
//     <option value="Mrs.">Mrs.</option>
//     <option value="Ms.">Ms</option>
// </select><br />
// </div>



// <div className='field'>
//     <label>FirstName:</label>
//     <input type="Text" name="FirstName" placeholder="FirstName" value={this.state.FirstName} onChange={(e)=>this.setState({FirstName:e.target.value})}/>
// </div>

// <div className='field'>
//     <label>LastName:</label>
//     <input type="Text" name="LastName" placeholder="LastName" value={this.state.LastName} onChange={(e)=>this.setState({LastName:e.target.value})}/>
// </div>

// <div className='field'>
//     <label>about</label>
//     <input type="text" name="name" placeholder="about"value={this.state.about} onChange={(e)=>this.setState({about:e.target.value})}/>
//     </div>

//     <div className='field'>
//         <label>Gender :</label><select value={this.state.Gender} onChange={(e)=>this.setState({Gender:e.target.value})}>
//         <option defaultValue>Select Gender</option>
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//         </select><br />
//     </div>

//     <div className='field'>
//         <label>Status :</label><select value={this.state.Status} onChange={(e)=>this.setState({Status:e.target.value})}>
//         <option value="Married">Married</option>
//         <option value="Unmarried">Unmarried</option>
//         </select><br />
//     </div>

//     <div className='field'>
//        <label>date of birth</label>
//         <input type="date" name="bdata" placeholder="birthdate" value={this.state.Birthdate} onChange={(e)=>this.setState({Birthdate:e.target.value})}/>
//     </div>


//     <div className='field'>
//         <label>SkillSet</label>
//         {/* <select value={this.state.SkillSet} onChange={(e)=>this.setState({SkillSet:e.target.value})}/> */}
//         <Select options={subject} isMulti value={this.state.skillset} onChange={(option)=>this.setSkilset(option)}/>
        
//     </div>

    
//     <button id="butn" className="btn btn-primary"> Add</button>
  
//     <input id="butn" class="btn btn-secondary" type="reset"></input>
//     <button id="butn" class="btn btn-dark" >Cancel</button>

// </form>




// var is_empty=[{ name:'salutation',value:0},
//                 {name:'FirstName',value:0},
//                 {name:'LastName',value:0}, 
//                 {name:'about',value:0},
//                 { name:'Gender',value:0} ,
//                 {name:'Birthdate',value:0} ,
//                 {name:'SkillSet',value:0}
//             ] ; 
    // var date= new Date();
    // var tdate=date.getDate();
    // if(tdate<10){
    //     tdate="0"+tdate;
    // }

    // var tmonth=date.getMonth()+1;
    // if(tmonth<10){
    //     tmonth="0"+tmonth;
    // }

    // var tyear=date.getUTCFullYear() ;
    // var maxDate=tyear+"-"+tmonth+"-"+tdate
    // document.getElementById('demo').setAttribute("max",maxDate)
    // console.log(maxDate)