import React from 'react';
import '../Css/SeatInputs.css'

const SeatInput = ({key , text , changeNoOfSeats , noOfSeat}) => {

  const change_seats = (e)=>{
    changeNoOfSeats({...noOfSeat,[e.target.name]:Number(e.target.value)})

    window.localStorage.setItem("seats" ,
      JSON.stringify({
        ...noOfSeat,
        [e.target.name]:Number(e.target.value)
      })
    )
  }
  return (
    <div className='form-check-label seats'>
      <span className="text">{text}</span>
      <input type="number" className='seats-input' placeholder='0' max="30" min="0" name={text} onChange={change_seats} value={noOfSeat[text]} />
    </div>
  );
}

export default SeatInput;
