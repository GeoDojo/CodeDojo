import React from 'react';

function LoginBotton ({ siteName, genericClick }){

    return(
        <div>:
            <button onClick={genericClick}>{siteName}</button>
        </div>
    )
}