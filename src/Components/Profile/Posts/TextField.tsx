import React from "react";
import { Button, FormControl } from "react-bootstrap";

interface TextFieldProps {
  value:string,
  updateText: (str: string) => void,
  handleAction: () => void
}

const TextField: React.FC<TextFieldProps> = ({ value, updateText, handleAction }) => {
  
  return (
    <label>
    <FormControl
      placeholder='Что нового?'
      value={value}
      onChange={(e) => updateText(e.target.value)}
    />
    <div className='mt-2'>
    <Button onClick={handleAction}>Добавить</Button>
    </div>
  </label>
  );
};

export default TextField;