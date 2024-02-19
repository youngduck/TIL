import React,{useState} from 'react';
import Output from './Output';

const Greeting = () => {

    const [changeText,setChangeText]=useState(false)

    const changeTextHandler = ()=>{
        setChangeText(true)
    }

    return (
        <div>
            <h2>hellow world</h2>
            {!changeText&&
            <Output>good time</Output>}
            {changeText&&
            <Output>bad time</Output>}

]            <button onClick={changeTextHandler}>change Text!</button>
        </div>
    );
};

export default Greeting;