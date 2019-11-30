import React from 'react';

export default function ValidationError(props) {
  if(props.message) {
    return (
      <div style={{color: 'red'}} className="error">{props.message}</div>
    );
  }

  return <></>
}