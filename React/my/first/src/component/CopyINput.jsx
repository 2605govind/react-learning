import React, { useState } from 'react'
import PopupContent from './PopupContent';

const CopyINput = () => {

    const [inputValue, setInputValue] = useState('');
    const [copied, setCopied] = useState(false);

    const handlecopy = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000)
        })
    }

    return (
        <div>
            <input type='text' value={inputValue} placeholder='Enter value' onChange={e => setInputValue(e.target.value)} />
            <button onClick={handlecopy}>Copy</button>

            <PopupContent copied={copied}/>
        </div>
    )
}

export default CopyINput