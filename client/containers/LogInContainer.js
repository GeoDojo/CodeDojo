import React from 'react'
import Button from '../components/Bu'

const LogInContainer = () => {
    //using OAuth instructions
    const googleLogin = () => {
        console.log("logged In")
    }

    //to-dos: for facebook, github

    //to-dos: anonymous
    
    return (
        <div>
            {/* Reusing the Button.js component and passing genericClick to  */}
            <Button id="Google" genericClick={ googleLogin }/>
            <Button id="Facebook" genericClick={"FACEBOOK Login"}/>
            <Button id="Github" genericClick={"GITHUB Login"}/>
            <Button id="Anonymous" genericClick={"ANON Login"}/>
        </div>
    )
}

export default LogInContainer
