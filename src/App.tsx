import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";

type GetType = {
    userId: number
    id: number
    title: string
    body: string
}

function App() {

    const [get, setGet] = useState<Array<GetType>>([]);

    const getRequestHandler = () => {
        setGet([]);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setGet(json))
    }, []);


    return (
        <div>
            <Button name={'CleanPage'} callback={getRequestHandler}/>
            <ul>
                {get.map((p) => {
                    return (
                        <li>
                            <span>{p.id} - </span>
                            <span>{p.userId} - </span>
                            <span>{p.title} - </span>
                        </li>)
                })}
            </ul>
        </div>
    );
}

export default App;
