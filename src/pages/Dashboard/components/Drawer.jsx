import React from 'react';

// import { Container } from './styles';

function Drawer() {

  const [visible, setVisible] = React.useState(false);

  const handleDrawerVisible = () => {
    setVisible(!visible)
  }

  return (
    <>
      <div className="drawer-container" style={{ width: visible ? '300px' : 0 }} >
      </div>
      <div
        className="drawer-float-trigger" style={{ left: visible ? '280px' : 0 }}
        onClick={handleDrawerVisible}
      >

      </div>
    </>
  );
}

export default Drawer;