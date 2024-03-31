import React from 'react';

function Greeting(props) {
    if(props.signedIn == false) {
        return <h2>Please login!</h2>;
    } else {
        return (
            <>
                <h2>Welcome back. {props.name}!</h2>
                <article>
                    Latest Movie: A comuter bugs life.
                </article>
            </>
        )
    }
}

export default Greeting;