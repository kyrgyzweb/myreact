import React from 'react';
import Button from './Button';

export default function Talker() {

    function talk() {
        let speech = '';
        for(let i = 0; i < 100; i++) {
            speech += 'blah';
        }
        alert(speech);
    }

    return <Button talk={talk} />
}