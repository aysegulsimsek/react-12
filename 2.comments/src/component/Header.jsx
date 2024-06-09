import React from 'react'
import '../App.css'
import { IoIosArrowDown } from "react-icons/io";

function Header() {
    return (
        <div className='header'>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', paddingLeft: '20px', paddingBottom: '5px', paddingTop: '5px', gap: '10px', borderBottom: '1px solid lightgray' }}>
                <img src="https://th.bing.com/th/id/OIP.WpnGIPj1DKAGo-CP64znTwHaHa?rs=1&pid=ImgDetMain" alt="user"
                    className='user_img'
                />
                <div className='username'>
                    User Name
                </div>
            </div>
            <div style={{ fontSize: '12px', color: '#2f73d2', display: 'flex', alignItems: 'center', padding: '12px 25px', justifyContent: 'start' }}>
                <p style={{ cursor: 'pointer' }}>See comments</p>
                <IoIosArrowDown style={{ paddingTop: '2px', marginLeft: '5px', cursor: 'pointer' }} />
            </div>
        </div>
    )
}

export default Header