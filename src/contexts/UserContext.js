import React, { useState } from 'react';

export const UserContext = React.createContext({
  user: {},
  setUser: () => {},
});

export const UserProvider = (props) => {
  const [ user, setUser ] = useState({});
  
  return(
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}