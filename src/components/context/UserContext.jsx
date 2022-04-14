import { createContext } from 'react'


export const UserContext = createContext(null);

export default function UserContextProvider ({ children }){
    return (
        <UserContext.Provider
          value={{
            users: [
              {
                name: 'abel',
                email: 'abel@mit.edu',
                password: 'mysecret',
                balance: 10,
                
              },
              {
                name: 'bowie',
                email: 'bowie@dogsrule.com',
                password: 'dogsecret',
                balance: 10,
                
              },
              {
                name: 'amy',
                email: 'amy@mit.edu',
                password: 'amypassword',
                balance: 10,
                
              },
            ],
          }}
        >
          {children}
        </UserContext.Provider>
      );
    }
    
//     function useUserData() {
//       return useContext(UserContext);
//     }

// // utilize useContext to make the user data available to other components 

  
//   export { useUserData };



