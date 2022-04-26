import { useState } from 'react'

function useInput() {
    const [value, setValue] = useState('')
    const reset = () => {
        setValue('')
    }

    const bind = {
        value: value,
        onChange: e => {
            setValue(e.target.value)
        }
    }

    return [value, bind, reset]
}

export default useInput