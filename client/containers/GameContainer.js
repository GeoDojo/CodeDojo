import React, { useContext, createContext, useEffect, useReducer, Provider } from 'react';
import CodeBox from '../components/Codemirror';
import SubmitButton from '../components/Button';
import { AppContext } from '../state/context';

const GameContainer = () => {

    const { appState, appDispatch } = useContext(AppContext);

  return (
    <div className='panel'>
      {/* <CodeBox codeBoxName={'Prompt'} codeBoxValue={appState.prompt}/> */}
      <CodeBox codeBoxName={'Prompt'} codeBoxValue={appState.prompt}/>
      <CodeBox codeBoxName={'Function'} codeBoxValue={appState.function}/>
      <CodeBox codeBoxName={'Test Cases'} codeBoxValue={appState.test_cases}/> //
      <SubmitButton
        genericClick = { () => {
            // fetch(`/game/start`, {
            //     method: 'POST',
            //     headers: {
            //       'Content-Type': 'Application/JSON',
            //     }
            //     // , body: JSON.stringify({
            //     // 
            //     // }),
            //   })
            //     .then((data) => data.json())
            //     .then((data) => {

                    appDispatch({
                        type: 'UPDATE_PROMPT',
                        payload: { prompt: "prompt state updated", }//data.prompt
                    })

                    appDispatch({
                        type: 'UPDATE_FUNCTION',
                        payload: { function: "function state updated",}
                    })  

                appDispatch({
                        type: 'UPDATE_TEST_CASES',
                        payload: { test_cases: "test cases state updated", }
                    })
        //         }) 
        }}
        siteName={'Submit'}
        id='SubmitBtnGameContainer'
        // genericClick={'submit'}
      />
    </div>
  );
};

export default GameContainer;


                
            // eval("(var fn = function(s){ return s })");
            // console.log(fn("s"));

            //grab the user input from codeMirror, add paratheses in the begining and end of the string
            //declare a variable (evalfn) to store the = eval(new userInput string)
            //send it back to back end in request body {userFxn = evalfn}
            //     let userFn = eval(
            //     `(function addTwo(num){
            //         return num + 2;
            //     })`)
            // console.log(userFn(2))
