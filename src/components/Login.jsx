import {useContext, useState} from 'react'
import {UserContext} from './context/UserContext'
import Card from './Card'


export default function Login(){
    const [show, setShow]         = useState(true)
    const [status, setStatus]     = useState('')
    const [email, setEmail]       = useState('')
    const [password, setPassword] = useState('')

    const ctx = useContext(UserContext)
  
    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
    }
    

    function handleSubmit(){
      console.log(email,password);
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;
      setShow(false);
    }    
  
    function clearForm(){
      setEmail('');
      setPassword('');
      setShow(true);
    }
  
    return (
      <Card
        bgcolor="primary"
        header="Login"
        status={status} 
        body={show ? (  
                <>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleSubmit}>Login</button>
                </>
              ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm} disable={!validate}>Add another account</button>
                </>
              )}
      />
    )
  }
  //export default function Login() {
//   const ctx = useContext(UserContext);
//   return(
//     <div>
//         <h1>Login</h1>
//         {JSON.stringify(ctx)}<br/>
//     </div>
//     )
// }
