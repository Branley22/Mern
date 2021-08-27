import React, { useContext } from 'react';
import Context from './../Context/Context';

const Form = () => {
  const { nameInput, setNameInput } = useContext(Context);

  return (
    <div>
      <div>
        <label>Name:</label>{" "}
        <input
        value={nameInput}
        onChange={e => setNameInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Form;