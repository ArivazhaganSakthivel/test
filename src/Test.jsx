import React, { useEffect, useState } from 'react'

const Test = () => {
    const [type, SetType] = useState(['Block', 'hsh'])

    useEffect(() => {
        console.log('Type changed---');
        return ()=> {
            console.log('From return It will run first')
        }
    }, [type])

    return (
        <>
            <button onClick={() => SetType('Block 1')}>Block 1</button>
            <button onClick={() => SetType('Block 2')}>Block 2</button>
            <button onClick={() => SetType('Block 3')}>Block 3</button>
            <div>{type}</div>
        </>
    )
}

export default Test