import React from "react";
import { Button, FormControl } from "react-bootstrap";

const TextField = ({ value, updateText, handleAction }) => {
  
  return (
    <label>
    <FormControl
      placeholer='Что нового?'
      value={value}
      onChange={(e) => updateText(e.target.value)}
    />
    <div class='mt-2'>
    <Button onClick={handleAction}>Добавить</Button>
    </div>
  </label>
  );
};

export default TextField;