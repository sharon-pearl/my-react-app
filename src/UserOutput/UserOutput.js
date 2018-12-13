import React from 'react';
import './UserOutput.css'
const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <h1> {props.username} </h1>
      <p> {props.title} </p>
      <p> {props.content} </p>
    </div>
  );
}
export default UserOutput
