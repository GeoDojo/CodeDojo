import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';

import '../../node_modules/codemirror/lib/codemirror.css';
import '../../node_modules/codemirror/theme/dracula.css';

// import context object
// import { PromptContext } from '../state/contexts';
// import { QuestionContext } from '../state/contexts';
// import { ConsoleContext } from '../state/contexts';

function CodeBox({id}) {

  // const { PromptState } = useContext(PromptContext);
  // const { QuestionState } = useContext(QuestionContext);
  // const { ConsoleState } = useContext(ConsoleContext);

  // let code;
  // if (PromptState.showPrompt) {code = PromptState.Prompt}
  // if (QuestionState.showQuestion) {code = QuestionState.Question}
  // if (ConsoleState.showConsole) {code = ConsoleState.Console}

  return (
    <div id={id}>
      <CodeMirror className='codebox'
       value='<h1>I ♥ react-codemirror2</h1>'
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