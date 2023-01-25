import React from 'react'
import b from '../images/b.png'
import search from '../images/search.png'
import bulit from '../images/bulit.png'
import mosq from '../images/mosq.png'
const Home = () => {
    return (
        <div>
            <div className='row m-0'>
                <div className='col-lg-12 discover-col mt-4'>
                    <div className='col-lg-2 col-md-4'>
                        <div className='discover'>
                            <h1>Discover a <span className='place'> place</span> you'll love to live</h1>
                        </div>
                        <div>
                        </div>
                    </div></div>
                <div className='col-lg-12 buyrent-col mt-4'>
                    <div className='col-lg-3 buyrent-btn'>
                        <button className='buy-btn'>Buy</button>
                        <button className='rent-btn'>Rent</button>
                    </div>
                </div>
                <div className='row location-row mt-3 mx-auto'>
                    <div className='col-lg-6 col-md-12 location-col'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-4 loc'>
                                <h4>Location</h4>
                                <p>Bahria Town Islamabad</p>
                            </div>
                            <div className='col-lg-4 col-md-6 pro'>
                                <h4>Property</h4>
                                <p>Appartment</p>
                            </div>
                            <div className='col-lg-1 col-b col-md-1 pl-0'>
                                <img src={b} width='33' />
                            </div>
                            <div className='col-lg-1 col-md-1 col-search'>
                                <img src={search} width='31' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4 mb-1'>
                    <div className='col-lg-12 box d-flex justify-content-center'>
                        <div className='col-lg-4 col-md-8'>
                            <div className='row box-col mt-3'>
                                <div className='col-1 col-md-1 bulits'>
                                    <img src={bulit} width='25' />
                                    <h4 className='wanted'>Wanted</h4>
                                </div>
                                <div className='col-lg-11 col-md-10 bulit'>
                                    <h4 className='Sumit-h4 mb-0'>submit your requirments</h4>
                                    <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut enim ad minim veniam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <footer>
                        <img className='img-fluid' src={mosq} />
            </footer>
        </div>
        
        )
}
export default Home