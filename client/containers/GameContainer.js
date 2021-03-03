import React from 'react'
import CodeBox from '../components/Codemirror'
import SubmitButton from '../components/Button'

const GameContainer = () => {



    return (
        <div>
            <div id="PromptCodeBox">
            <CodeBox />
            </div>
            <div id="QuestionCodeBox">
            <CodeBox />
            </div>
            <div id="ConsoleCodeBox">
            <CodeBox />
            </div>
            <div >
            <SubmitButton id="SubmitBtn" siteName= {'Submit'} genericClick={"Submit"}/>
            </div>
        </div>
    )
}

export default GameContainer;
