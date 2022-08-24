import React from 'react'
import Countdown, { zeroPad } from 'react-countdown';

const startOfOrientation = '2022-09-05T09:00:00'

const CountdownTimer = () => {

    const Completionist = () => <span>You are good to go!</span>;

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
        // Render a completed state
        return <Completionist />;
        } else {
        // Render a countdown
        return (
        <>
        <span style={{marginTop: '2rem'}}>
            <div className='d-flex '>
            <div className='countdown-container'>
                <span>
                    {zeroPad(days)}
                </span>
                <span className='countdown-caption'>
                    days
                </span>
            </div>
            <div className='countdown-container'>
                <span>
                    {zeroPad(hours)}
                </span>
                <span className='countdown-caption'>
                    hrs
                </span>
            </div>
            <div className='countdown-container'>
                <span>
                    {zeroPad(minutes)}
                </span>
                <span className='countdown-caption'>
                    min
                </span>
            </div>
            <div className='countdown-container'>
                <span>
                    {zeroPad(seconds)}
                </span>
                <span className='countdown-caption'>
                    sec
                </span>
            </div>
            </div>

        </span>
        </>
        );
        }
    };

  return (
    <>
        <Countdown 
        date={startOfOrientation}
        renderer={renderer}>

        </Countdown>
    </>
  )
}

export default CountdownTimer
