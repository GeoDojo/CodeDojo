import React from 'react'
import LoginButton from '../components/Button'

const LogInContainer = () => {

    //to-do: using OAuth instructions
        // const googleLogin = () => {
        //     console.log("logged In")
        // }

    //to-dos: for facebook, github
    //to-dos: anonymous
    //to-dos: reRoute to waitingRoom (this might be in the App.js)
    
    return (
        <div>
            {/* Reusing the Button.js component and passing genericClick to  */}
            <LoginButton id="GoogleBtn" siteName={'Google'} genericClick={ "googleLogin" }/>
            <LoginButton id="FacebookBtn" siteName= {'Facebook'} genericClick={"FACEBOOK Login"}/>
            <LoginButton id="GithubBtn" siteName={'GitHub'} genericClick={"GITHUB Login"}/>
            <LoginButton id="AnonymousBtn" siteName= {'Anonymous'}genericClick={"ANON Login"}/>
        </div>
    )
}

export default LogInContainer
