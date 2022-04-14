import {useContext, useState} from 'react'
import {UserContext} from './context/UserContext'
import Card from './Card'


export default function CreateAccount(){
    const [show, setShow]         = useState(true);
    const [status, setStatus]     = useState('');
    const [name, setName]         = useState('');
    const [email, setEmail]       = useState('');
    const [password, setPassword] = useState('');
    
    
    
    const ctx = useContext(UserContext);
    
  
    function validate(field){
      
        if (!field) {
          setStatus('Error: Please Complete Form');
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
    }

    
    function passwordLength(password) {
      if (password.length < 8) {
        setStatus(`Password must be a minimum of 8 characters`);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
    }

    function handleCreate(props){
      console.log(name,email,password);
      if (!validate(name,     'name'))     return;
      if (!validate(email,    'email'))    return;
      if (!passwordLength(password, 'password')) return;
      ctx.users.push({name,email,password,balance:100});
      setShow(false);
    }    

    
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }
  
    return (
      <Card
        id = "CardGroup"
        bgcolor="primary"
        header="Create Account"
        status={status}
        body={show ? (  
                <>
                Name<br/>
                <input type="input" 
                className="form-control" 
                id="name" 
                placeholder="Enter name" 
                value={name} 
                onChange={e => setName(e.currentTarget.value)} /><br/>

                Email address<br/>
                <input type="input" 
                className="form-control" 
                id="email" 
                placeholder="Enter email" 
                value={email} 
                onChange={e => setEmail(e.currentTarget.value)}/><br/>

                Password<br/>
                <input type="password" 
                className="form-control" id="password" 
                placeholder="Enter password" 
                value={password} 
                onChange={e => setPassword(e.currentTarget.value)}/><br/>

                <button type="submit" 
                id = "submit" 
                disabled={name === "" && email === "" && password === ""}
                className="btn btn-light" 
                onClick={handleCreate}>
                Create Account
                </button>

                <br/>
              
                </>
              ):(
                <>
                <h5>Success</h5>
                <button type="submit" 
                className="btn btn-light" 
                onClick={clearForm}>
                  Add another account
                </button>
                </>
              )}
      />
    )
  }
// import {useContext} from 'react'
// import {UserContext} from './UserContext'
// export default function CreateAccount() {
//   const ctx = useContext(UserContext);
//   return(
//     <div>
//         <h1>Create Account</h1>
//         {JSON.stringify(ctx)}<br/>
//     </div>
//     )
// }