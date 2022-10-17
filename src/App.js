import React,{useState,useEffect} from 'react';
import './App.css';
import{BrowserRouter as Router,Switch,Route} from'react-router-dom';
import { v4 as uuid_v4 } from "uuid";
import EmpDetail from "./components/EmpDetail"
import AddEmp from "./components/AddEmp";
import EmpList from "./components/EmpList";
import EditEmp from './components/EditEmp';
import api from './server-api/db.json';



function App()
{
  const LOCAL_STORAGE_KEY="contacts";
  const[contacts,setContacts]=useState([]);


   const addContactHandler =(contact)=>
    {
      console.log(contact);
      setContacts([...contacts,{ id:uuid_v4(), ...contact}]);
    };

   const removeContactHandler=(id)=>{
      let action=window.confirm(" Are sure to delete?");
      if(action==1)
      {
        const newContactList= contacts.filter((contact)=>
        {
          return contact.id!==id;
        })
        setContacts(newContactList);
      }
      
  };
      const updateContactHandler =async(contact)=>
      { 
      const responce =await api.put(`/contacts/${contact.id}`,contact);
      const {id}=responce.data;
      setContacts(contacts.map((contact)=>
      { 
        return contact.id===id?{...responce.data}:contact;
      })
  );
  
};
  useEffect(()=>
  {
    const retriveContacts =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);


  return (
    <div className="ui container">
      <Router>
      <Switch>
      <Route path="/add"  component={()=><AddEmp addContactHandler={addContactHandler}/>}/>
      <Route path="/" exact component={()=><EmpList contacts={contacts} getContactId={removeContactHandler} />}/>

      {/* <Route path="/edit"  component={()=><EmpDetail updateContactHandler={updateContactHandler}/>}/>
      <Route path="/contact/:id" component={EditEmp}/> */}
      
      <Route path="/edit"  component={()=><EditEmp updateContactHandler={updateContactHandler}/>}/>
      <Route path="/contact/:id" component={EmpDetail}/>
      </Switch>
      {/* <AddEmp addContactHandler={addContactHandler}/>
      <EmpList contacts={contacts} getContactId={removeContactHandler}/> */}
      </Router>
      
    </div>     
  );
}

export default App ;



// const removeContactHandler=(id)=>
// {
//   const newContactList= contacts.filter((contact)=>{
      
//       function box() 
//       {
//         var value=window.confirm("do you want delete?")
//         if(value==true)
//           {
//             return contact.id!==id; 
//           }
//         else
//           {
//             return;
//           }
//       };
//       setContacts(newContactList);        
//     });

    // const newContactList= contacts.filter((contact)=>
    // {
    //   return contact.id!==id;
    // })