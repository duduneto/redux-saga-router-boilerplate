import React from 'react';

// import { Container } from './styles';

function Button({ label, onClick }) {
  const handleClick = () => {
    if(onClick){
      onClick();
    }
  }
  return (
    <button className="btn-primus" onClick={handleClick} >
      {label}
    </button>
  );
}

export default Button;