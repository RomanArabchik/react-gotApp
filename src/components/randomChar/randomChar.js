import React, {useState, useEffect} from 'react';
import './randomChar.css';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

function RandomChar ({getData}) {
    
    const [character, onCharLoaded] = useState({
        char: {},
        loading: true,
        error: false
    })

    useEffect (() => {
        updateChar();
        
        let timerId = setInterval(updateChar, 15000);
        return () => {
            clearInterval(timerId);
        }
    }, []) 

    function updateChar () {
        const id = Math.floor(Math.random() * 140) + 25;
        getData(id)
            .then( (char) => onCharLoaded ({
                char,
                loading: false,
                error: false
            }))
            .catch(onError)
    }

    const onError = (err) => {
        onCharLoaded ({
            error: true,
            loading: false
        })
    }

    
    const {char, loading, error} = character;
    const errorMessage = error ? <ErrorMessage/>: null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View char={char}/> : null;

    return (
        <div className="random-block rounded">
            {content}
            {spinner}
            {errorMessage}
        </div>
    );
    
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}

export default RandomChar;