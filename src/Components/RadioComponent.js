import React from 'react';
import '../Css/RadioComponents.css'

const RadioComponent = ({ text, changeSelection, data }) => {

  const handleChecked = (val) => {
    changeSelection(val)
  }

  return (
    <div className= {`form-check-label ${data === text ? "active" : "inactive"}`} name={text} onClick={() => { handleChecked(text) }}>
      <span className='text'>{text}</span>
    </div>
  );
}

export default RadioComponent;
