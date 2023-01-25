import React from 'react'
import icon from '../images/Icon.png'
import profile from '../images/profile.png'
const Header = () => {
    return (
        <div>
            <div className='row p-2 head-row'>
                <div className='lefCol col-9 col-md-8 col-lg-9 col-xxl-9'>
                    <h4 className='bakss-h4'>BAKSH</h4>
                </div>
                <div className='rightCol col-md-4 col-3 col-lg-3 p-0 d-flex'>
                    <button className='add-btn px-3'><span>+</span>Add property</button>
                    <div className='mnu-div'><button className='mnu-btn'><img className='mnu-img' src={icon} width='20' /></button>
                        <img src={profile} width='30' /> <div></div></div>
                </div>
            </div>
        </div>
    )
}

export default Header