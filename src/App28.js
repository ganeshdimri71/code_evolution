import React from 'react'
import { useState } from 'react'

const App28 = () => {
    const [number, setNumber] = useState()
    const handleOnChange = (e) => {
        console.log('e,kry: ', e.key)
        setNumber(e.target.value)
    }
    // const onKeyDownHandler = (e) => {
    //     let text = e.key;
    //     let pattern = /[0-9]/g;
    //     console.log('e,kry: ', e.key)
    //     if (text.match(pattern)) {
    //         console.log('I am passed')
    //         setNumber(e.target.value)
    //         console.log('number: ', number)
    //     } else {
    //         e.preventDefault()
    //         console.log('I am failed')
    //     }
    // }
    const submitHandler = (e) => {
        // e.preventDefault()
    }
    React.useEffect(() => {
        document
            .querySelector("input[type='number']")
            .addEventListener("keypress", evt => {
                if (evt.which === 8) {
                    return;
                }
                if (evt.which < 48 || evt.which > 57) {
                    evt.preventDefault();
                }
            });
    }, []);
    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <input type="number"
                    value={number}
                    // onKeyUp={(e) => onKeyDownHandler(e)}
                    onChange={(e) => { (handleOnChange(e)) }}
                />
                <button>submit</button>
            </form>

        </div>
    )
}

export default App28