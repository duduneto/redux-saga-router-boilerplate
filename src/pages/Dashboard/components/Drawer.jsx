import React from 'react';
import { BsJustify, BsFillHouseDoorFill, BsFillBagFill, BsFillGearFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useSyncCall } from '../../../hooks';

// import { Container } from './styles';

function Drawer() {

  const history = useHistory();
  const syncCall = useSyncCall();
  const { visible } = useSelector(state => state.drawer);

  const menu_options = [
    {
      label: 'Home',
      path: '/dashboard/home',
      icon: <BsFillHouseDoorFill size={28} />
    },
    {
      label: 'Products',
      path: '/dashboard/products',
      icon: <BsFillBagFill size={28} />
    },
    {
      label: 'Settings',
      path: '/dashboard/settings',
      icon: <BsFillGearFill size={28} />
    },
  ];

  const handleDrawerVisible = () => {
    syncCall(!visible, 'drawer.visible')
  }

  const handleClickOption = (path) => {
    history.push(path)
  }

  return (
    <>
      <div
        className={`drawer-container ${visible ? 'drawer-open' : 'drawer-closed'}`}
      // style={{ width: visible ? '300px' : 0 }}
      >
        {
          menu_options.map(option => {
            return (
              <div
                className="drawer-menu-options clickable"
                onClick={() => handleClickOption(option.path)}
              >
                {option.icon}
                <span>{option.label}</span>
              </div>
            )
          })
        }
      </div>
      <div
        className={`drawer-float-trigger ${visible ? 'drawer-open' : 'drawer-trigger-closed'} clickable`}
        // style={{ left: visible ? '200px' : 0 }}
        onClick={handleDrawerVisible}
      >
        <BsJustify />
      </div>
    </>
  );
}

export default Drawer;