import React from 'react';

function LoginButton ({ siteName, genericClick, id }){

    return(
        <div>
            <button onClick={genericClick} id={id} className='generic-button'>{siteName}</button>
        </div>
    )
}

export default LoginButton;