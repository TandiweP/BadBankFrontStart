import {useContext, useState} from 'react'
import {UserContext} from './context/UserContext'
// import Card from './Card'

export default function Balance() {

    
  const ctx = useContext(UserContext)
  return (
      <div className="card text-white bg-primary" style={{margin: "5% 30% 30% 30%"}}>
          <h5 className="card-header" >Balance:</h5>
          <div className="card-body" style={{fontSize: "1.5em"}}>
          
          <pre>{JSON.stringify(ctx, null, 2)}</pre>
          </div>
      
</div>
  );
}