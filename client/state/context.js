import React, { createContext, useReducer } from 'react';

//import { initialAppState, appReducer} from './reducers';

//createcontext initialize empty object
export const AppContext = createContext();

//const [appState, appDispatch] = useReducer(appReducer, initialAppState);

// export const AppContextProvider = (children) => {
//   return(
//     <AppContext.Provider value ={{
//       appState,
//       appDispatch
//     }}>
//       {children}
//     </AppContext.Provider>
//   )
// }