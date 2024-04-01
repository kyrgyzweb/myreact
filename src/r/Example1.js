import React from 'react';

export default function Example() {
    function handleEvent() {
        alert('I am an event handler. If you see this message, then i have been called');
    }

    return (
        <h1 onClick={handleEvent}>
            Hello World!
        </h1>
    );
}
