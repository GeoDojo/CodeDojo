import React, { useEffect, useContext } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import { AppContext } from '../state/context';


function PromptCodeBox() {

  const { appState } = useContext(AppContext);

  let displayPrompt;

  useEffect(() => {

    displayPrompt = appState.prompt;

  }, [appState.prompt])

  return (
    <div>
      <div className='codebox-title'>Prompt</div>
      <div className='codebox'>
        <CodeMirror
          className='code-mirror-container'
          value={displayPrompt}
          options={{
            lineWrapping: true,
            lineNumbers: true,
            cursorScrollMargin: 48,
            indentUnit: 2,
            tabSize: 2,
            styleActiveLine: true,
            smartIndent: true,
            lineWrapping: true,
            lint: true,
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true,
            readOnly: 'nocursor',
          }}
        />
      </div>
    </div>
  );
}

export default PromptCodeBox;
