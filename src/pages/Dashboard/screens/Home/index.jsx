import React from 'react';
import { FiShoppingCart, FiArrowUp, FiArrowDown } from 'react-icons/fi'
import { MdAttachMoney } from 'react-icons/md'
import { FaRegMoneyBillAlt } from 'react-icons/fa'

// import { Container } from './styles';

function Home() {
    return (
        <div className="dashboard-content-container">
            <div className="dashboard-title-container">
                <span className="dashboard-title" >Dashboard</span>
            </div>
            <div className="all-page dashboard-content">
                <div className="dashboard-panel-1 pd-2" >
                    <div className="info-box"></div>
                </div>
                <div className="dashboard-panel-2 pd-2" >
                    <div className="info-box">
                        <div className="title-container">
                            <span className="label">statics</span>
                            <span className="value">jan/20 - jan/21</span>
                        </div>
                        <div className="info-content">
                            <div className="box">
                                <div className="icon-container">
                                    <FiShoppingCart color={"#FEB820"} />
                                </div>
                                <div className="info">
                                    <span className="label">Orders</span>
                                    <span className="value">1.584</span>
                                </div>
                                <div className="obs">
                                    <div className="obs-content">
                                        <FiArrowUp />
                                        <span>15,2%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="icon-container">
                                    <MdAttachMoney color={"#F8802E"} />
                                </div>
                                <div className="info">
                                    <span className="label">Revenue</span>
                                    <span className="value">$17.524,25</span>
                                </div>
                                <div className="obs">
                                    <div className="obs-content">
                                        <FiArrowUp />
                                        <span>2,0%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="icon-container">
                                    <FaRegMoneyBillAlt color={"#AAD475"} />
                                </div>
                                <div className="info">
                                    <span className="label">Earnings</span>
                                    <span className="value">$15.295,25</span>
                                </div>
                                <div className="obs">
                                    <div className="obs-content color-warning">
                                        <FiArrowDown />
                                        <span>1,9%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;