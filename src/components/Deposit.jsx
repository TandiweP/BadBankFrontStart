import {useContext, useState} from 'react'
import {UserContext} from './context/UserContext'
import Card from './Card'


export default function Deposit(){
    const [show, setShow]                       = useState(true);
    const [deposit, setDeposit]                 = useState('');
    const [currentBalance, setCurrentBalance]   = useState('')
    const [status, setStatus]                   = useState('')
    
    const ctx = useContext(UserContext)
    
    function handleDeposit() {
        let newBalance = currentBalance + deposit
        setCurrentBalance(newBalance)
        ctx.users.balance = newBalance;
        setShow(false);
    }    

    function handleChange (event) {
      setDeposit(Number(event.target.value))

    }

    function validDeposit(deposit, num){
        if (!deposit) {
          setStatus('Error: Please complete form');
          setTimeout(() => setStatus(''),3000);
          return false;
        } else  if (deposit < 0 ) {
          setStatus('Error: Please enter a number greater than 0 for deposit');
          setTimeout(() => setStatus(''),3000);
          return false;
         } else if (isNaN(parseFloat(num))) {
            setStatus('Error: Please enter a number');
            setTimeout(() => setStatus(''),3000);
          return false;
        } 
        return true;
    }

    function clearForm(){
      setDeposit('');
      setShow(true);
    }
  
    return (
      <Card 
        id = "CardGroup"
        bgcolor="primary"
        header="Make A Deposit"
        status={status}
        body={ show ? (  
                <>
                {/* Your current balance: $${ctx.user.balance} */}
                <input type="input" className="form-control" placeholder="Deposit Amount" value={deposit} onChange={handleChange} /><br/>
                <button type="submit" className="btn btn-light" onClick={handleDeposit} disabled={!validDeposit}>Deposit</button> 
                </>
              ) : (
                <>
                <h5>Success! </h5>
                <h4>Current balance is ${setCurrentBalance}</h4>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit</button>
                </>
              )}
      />
    )
  }


// export default function Deposit() {
//   const ctx = useContext(UserContext);
//   return(
//     <div>
//         <h1>Deposit</h1>
//         {JSON.stringify(ctx)}<br/>
//     </div>
//     )
// }