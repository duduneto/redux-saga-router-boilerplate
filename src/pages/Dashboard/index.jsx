import React from 'react';
import { Header, Content, Drawer } from './components';

function Dashboard() {

  return (
    <div className="dashboard">
      <Header />
      <div className="under-header-container">
        <Drawer />
        <Content />
      </div>
    </div>
  );
}

export default Dashboard;