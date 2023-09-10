import React from 'react';
import 'Sunglass.css';
import Watch from '../Watch/Watch';
import { add, multiply, firstNumberDivitedBySecondNumber as divide } from '../Utilities/calculate';
// import add from '../Utilities/calculate';
 



const Sunglass = () => {

    const first = 55;
    const second = 199;
    const sum = add(first, second);
    const mult = multiply(first, second)
    const vag = divide(first, second)

    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;