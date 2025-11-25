import React, { useState } from 'react'

const ShopingList = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [quentity, setQuentity] = useState('');

    const submitHandle = (event) => {
        event.preventDefault();

        if(!name || !quentity) return;

        setItems( item => [...item, {name, quentity: parseInt(quentity)}]);
        setName('');
        setQuentity('');
    }



    return (
        <div>
            <h1>ShopingList</h1>
            <form onSubmit={submitHandle}>
                <input type='text' placeholder='item Name' value={name} onChange={e => setName(e.target.value)} />
                <input type='number' placeholder='Quentity' value={quentity} onChange={e => setQuentity(e.target.value)} />

                <button type='submit'>Add Item</button>
            </form>

            <div>
                <ul>
                    {items?.map((item, index) => (
                        <li key={index}>
                            {item.name} - Quentity: {item.quentity}
                        </li>
                    ) )}
                </ul>
            </div>
        </div>
    )
}

export default ShopingList