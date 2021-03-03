import React from 'react';
import CodeBox from '../components/Codemirror';
import SubmitButton from '../components/Button';

const GameContainer = () => {
  return (
    <div className='top-panel panel'>
      <CodeBox codeBoxName={'Prompt'} />
      <CodeBox codeBoxName={'Function'} />
      <CodeBox codeBoxName={'Console'} />
      <SubmitButton
        siteName={'Submit'}
        id='SubmitBtnGameContainer'
        genericClick={'submit'}
      />
    </div>
  );
};

export default GameContainer;
