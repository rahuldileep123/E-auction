import React, { useContext, useEffect, useState } from 'react'
import { useCol } from 'react-bootstrap/esm/Col'
import { expireResopnseContext } from '../../context/ContextApi'



function Countdown({ start, end, }) {
const {expireResponse,setExpireResponse}=useContext(expireResopnseContext)

    const [timeLeft, setTimeLeft] = useState({ days: "", hours: "", minutes: "", seconds: "" })
    const [upcoming, setUpcoming] = useState(false)
    const [exipre,setExpire]=useState(false)
    const endDate = new Date(end)

    const startDate = new Date(start)

    const getTimeleft = () => {
        const starting = new Date() - startDate

        if (starting > 0) {
            setUpcoming(false)
            const totalTimeLeft = endDate - new Date()
            if(totalTimeLeft>0){
                setExpire(false)
                setExpireResponse("")
                const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24))
                const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24)
                const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60)
                const seconds = Math.floor((totalTimeLeft / 1000) % 60)
                setTimeLeft({ days: days, hours: hours, minutes: minutes, seconds: seconds })
            }else{
                setExpire(true)
                setExpireResponse(endDate)
            }

          
        } else {

            setUpcoming(true)
            setExpireResponse(endDate)
        }
    }


    useEffect(() => {
        console.log("inside counter");
        const timer = setInterval(() => {
            getTimeleft()
        }, 1000)
        return () => {
            clearInterval(timer)
        }

    }, [start])




    return (
        <>
            {upcoming ?
                <div className="row d-flex justify-content-center mt-3">
                    <div style={{ width: "60%", height: "70px", backgroundColor: "blue", color: "white" }} className="upbox  shadow d-flex align-items-center justify-content-center rounded fw-bolder ">
                        <span>Upcoming</span>
                    </div>
                </div>

                :
                   

                <div className={exipre? "d-none" : "row d-flex gap-3 justify-content-center mt-3"}>
                    <div style={{ width: "70px", height: "70px", backgroundColor: "blue", color: "white" }} className="box text-center shadow d-flex flex-column align-items-center justify-content-center rounded fw-bolder">
                        <span>{timeLeft?.days}</span>
                        <p>Days</p>
                    </div>
                    <div style={{ width: "70px", height: "70px", backgroundColor: "blue", color: "white" }} className="box text-center shadow d-flex flex-column align-items-center justify-content-center rounded fw-bolder">
                        <span>{timeLeft?.hours}</span>
                        <p>Hours</p>
                    </div>
                    <div style={{ width: "70px", height: "70px", backgroundColor: "blue", color: "white" }} className="box text-center shadow d-flex flex-column align-items-center justify-content-center rounded fw-bolder">
                        <span>{timeLeft?.minutes}</span>
                        <p>Minutes</p>
                    </div>
                    <div style={{ width: "70px", height: "70px", backgroundColor: "blue", color: "white" }} className="box text-center shadow d-flex flex-column align-items-center justify-content-center rounded fw-bolder">
                        <span>{timeLeft?.seconds}</span>
                        <p>seconds</p>
                    </div>
                </div>

            }

            {exipre &&  <div className="row d-flex justify-content-center mt-3">
                    <div style={{ width: "60%", height: "70px", backgroundColor: "blue", color: "white" }} className="upbox  shadow d-flex align-items-center justify-content-center rounded fw-bolder ">
                        <span>Expired</span>
                    </div>
                </div>}


        </>
    )
}

export default Countdown