import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  const array = ['dog', 'cat', 'sheep'];
  const [first, second] = array;
  console.log(first, second); // dog cat
  return (
    <div>
      <p>현재 카운터 값은 <b>{value}</b> 입니다.</p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  )
}
export default Counter;


