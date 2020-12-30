import React, { useEffect, useState } from 'react';
import DashBoardTop from '../AdminPanel/DashBoardTop/DashBoardTop';
import DashBoardMenu from '../DashBoardMenu/DashBoardMenu';
import Footer from '../Footer/Footer';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './DailySell.css';
import searching from '../../images/searching-gif.gif';

const DailySell = () => {
    const [selectedDate, setSelectedDate] = useState(["No Date Clicked"]);
    const [orderByDate, setOrderByDate] = useState([]);
    const handleDateChange = date => {
        let curentDate = date.toLocaleDateString();
        setSelectedDate(curentDate);
        // console.log(curentDate)
        // setSelectedDate(date);

        fetch('http://localhost:5000/orderByDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ curentDate })
        })
            .then(response => response.json())
            .then(data => setOrderByDate(data))
    }

    // console.log(selectedDate)
    // console.log(orderByDate)

    return (
        <div className="container">
            <div className="row mx-0">
                <div className="col-md-3 dashBoardMenu bg-dark px-0">
                    <DashBoardMenu></DashBoardMenu>
                </div>
                <div className="col-md-9 dashBoardMainDiv px-0">
                    <DashBoardTop></DashBoardTop>
                    <div className="reviews row bg-light ml-0 mr-0">
                        <div className="col-md-12 pr-0 pl-0" style={{ height: '620px' }}>
                            <div className="row">
                                <div className="col-md-4">
                                    <div>
                                        <h4 style={{ fontWeight: '700' }} className="mt-5 pt-5 mb-4 text-center">Pick any Date</h4>
                                        <div className="calender ml-3">
                                            <Calendar
                                                onChange={handleDateChange}
                                                value={new Date()}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8" >
                                    <h4 className="my-2 text-center">Total Order in ( <span className="text-info">{selectedDate}</span> ) : (<span className="text-danger">{orderByDate.length}</span>)</h4>
                                    <div style={{ overflow: 'scroll' }} className="dateWiseOrderList mr-2">
                                        {/* ============== Product navigation menu bar ================= */}
                                        <div className="sticky-top">
                                            <div className="row mx-0 mb-2 d-flex align-items-center bg-dark py-2 text-light">

                                                <div className="col-md-4">
                                                    <h6 className="text-center">Coustomer</h6>
                                                </div>
                                                <div className="col-md-4">
                                                    <h6>Email</h6>
                                                </div>
                                                <div className="col-md-2">
                                                    <h6>Price</h6>
                                                </div>
                                                <div className="col-md-2">
                                                    <h6 className="ml-2">Status</h6>
                                                </div>

                                            </div>
                                        </div>
                                        {
                                            orderByDate.map(order => <div style={{ borderBottom: '1px solid black' }} className="row mx-0 d-flex align-items-center">

                                                <div className="col-md-4">
                                                    <h6 style={{ fontSize: '12px' }} className="text-center">{order.name || "No Name Found"}</h6>
                                                </div>
                                                <div className="col-md-4">
                                                    <p style={{ fontSize: '12px' }}>{order.email || "No Email Found"}</p>
                                                </div>
                                                <div className="col-md-2">
                                                    <h6 style={{ fontSize: '12px' }}>{"$" + order.price || "No Price Found"}</h6>
                                                </div>
                                                <div className="col-md-2">
                                                    {
                                                        order.status === "pending" && <h6 className="ml-2 text-danger">{order.status || "No Status Found"}</h6>
                                                    }
                                                    {
                                                        order.status === "Done" && <h6 className="ml-2 text-success">{order.status || "No Status Found"}</h6>
                                                    }
                                                    {
                                                        order.status === "On Going" && <h6 style={{ color: '#F6B426' }} className="ml-2">{order.status || "No Status Found"}</h6>
                                                    }
                                                </div>

                                            </div>)
                                        }

                                        {
                                            orderByDate.length === 0 && <div className="notFoundSearch">
                                                <img style={{ width: "100%" }} src={searching} alt="searching gif" />
                                                <p className="notFoundText text-danger">Not Found ! select another date</p>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DailySell;