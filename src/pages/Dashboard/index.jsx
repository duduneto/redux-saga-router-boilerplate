import React from 'react';
import { useSyncCall } from '../../hooks';
import { useSelector } from 'react-redux';

function Dashboard() {

  const {counter} = useSelector(state => state);

  const syncCall = useSyncCall();

  const handleLogout = () => {
    syncCall(false, 'auth.logged');
  }

  const handleAdiciona = () => {
    syncCall(counter + 1, 'counter')
  }
  const handleRemove = () => {
    syncCall(counter - 1, 'counter')
  }

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={handleLogout} >Logout</button>
      <div>
        <h2>{`Counter ${counter || '0'}`}</h2>
      </div>
      <button onClick={handleAdiciona} >Adiciona</button>
      <button onClick={handleRemove} >Remove</button>
    </>
  );
}

export default Dashboard;