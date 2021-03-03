import React, { useContext, createContext, useEffect, useReducer, Provider } from 'react';
import CodeBox from '../components/Codemirror';
import SubmitButton from '../components/Button';

import { AppContext } from '../state/context';

const GameContainer = () => {

    const { appState, appDispatch } = useContext(AppContext);


  return (
    <div className='panel'>
      <CodeBox codeBoxName={'Prompt'} codeBoxValue={appState.prompt}/>
      <CodeBox codeBoxName={'Function'} codeBoxValue={appState.function}/>
      <CodeBox codeBoxName={'Console'} codeBoxValue={appState.console}/>
      <SubmitButton
        genericClick = { () => {
            // eval("(var fn = function(s){ return s })");
            // console.log(fn("s"));

            //grab the user input from codeMirror, add paratheses in the begining and end of the string
            //declare a variable (evalfn) to store the = eval(new userInput string)
            //send it back to back end in request body {userFxn = evalfn}
                let userFn = eval(
                `(function addTwo(num){
                    return num + 2;
                })`)
            console.log(userFn(2))
        }}
        siteName={'Submit'}
        id='SubmitBtnGameContainer'
        // genericClick={'submit'}
      />
    </div>
  );
};

export default GameContainer;
