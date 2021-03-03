import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';

// import context object
// import { CodeContext } from '../state/contexts';

function CodeBox({ codeBoxName }) {
//   const { codeState } = useContext(CodeContext);

//   let code;
//   codeState.showSchema
//     ? (code = codeState.schema)
//     : (code = codeState.resolver);

  return (
    <div>
      <CodeMirror className='codemirror'
       value={`/*
       *** function will be displayed here ***
       */`}
       options={{
        mode: 'javascript',
        lineWrapping: true,
        theme: 'dracula',
        lineNumbers: true,
        cursorScrollMargin: 48,
        indentUnit: 2,
        tabSize: 2,
        styleActiveLine: true,
        smartIndent: true,
       }}
       />
    </div>
  )
}

export default CodeBox;