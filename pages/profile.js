import React, { useState } from 'react';
const placeHolders = [{
    name: "firstNumber",
    placeHolder: "First Number"

},
{
    name: "secondNumber",
    placeHolder: "Second Number"

}]
const profile = () => {
    const [number, setNumbers] = useState({});
    const [total, setTotal] = useState(0);
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setNumbers({
            ...number,
            [name]: value
        })
    }
    const addTwoNumbers = () => {
        setTotal(parseInt(number?.firstNumber) + parseInt(number?.secondNumber));
    }
    return (
        <div className='profileContainer'>
            {placeHolders.map((item, index) => (
                <div style={{ marginTop: "40px" }}>
                    <input type='number'
                        placeholder={item.placeHolder}
                        onChange={(e) => handleOnChange(e)}
                        name={item.name}
                        key={index} />
                </div>
            ))}
            <div style={{ marginTop: "40px" }}>
                <button onClick={addTwoNumbers}>Add two numbers</button>
            </div>
            <p style={{ marginTop: "40px" }}> Total: {total} </p>
        </div>
    );
};

export default profile;