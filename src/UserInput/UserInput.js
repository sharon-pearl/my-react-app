import React from 'react';

const UserInput = (props) => {
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    textAlign: 'center'
  }
  return (
    <div style={style}>
      <input type="Text" onChange={props.changed} value={props.value}/>
    </div>
  );
}
export default UserInput
