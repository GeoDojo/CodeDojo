import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import App from './App.js';
import './styles/index.scss';

//import { AppContextProvider } from './state/context';
// import { initialAppState, appReducer} from './state/reducers';

// const [ appState, appDispatch] = useReducer(appReducer, initialAppState);

render(
  <BrowserRouter>
    {/* {<AppContextProvider> } */}
      <App />
  {/* {  </AppContextProvider>} */}
  </BrowserRouter>,
  document.getElementById('root')
);

/**
   <BrowserRouter>
    <AppContext.Provider value={{appState, appDispatch}}> 
      <App />
    </AppContext.Provider>
  </BrowserRouter>,
 */