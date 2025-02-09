import React from 'react'
import { MotorData } from '../Data/MotoData'
import { Link } from 'react-router-dom'

function MotoSlice() {
    let MobSlice = MotorData.slice(0, 4)
    return (
        <>
            <div>
                <div className="d-flex">
                    {
                        MobSlice.map((e) => (
                            <div className="border p-4">
                                <img src={e.url} alt="" />
                                <p>{e.brand}</p>
                                <p>{e.title}</p>
                                <p><b>{e.actualPrice}</b> / {e.discount}%off</p>
                            </div>
                        ))
                    }
                </div>
            </div>


        </>
    )
}

export default MotoSlice
