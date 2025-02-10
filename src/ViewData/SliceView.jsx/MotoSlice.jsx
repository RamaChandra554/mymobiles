import React from 'react'
import { Link } from 'react-router-dom'
import { NewMotoData } from '../../Data/NewMotoData'

function MotoSlice() {
    let MobSlice = NewMotoData.slice(0, 4)
    return (
        <>
            <div>
                <div className="d-flex">
                    {
                        MobSlice.map((e) => (
                            <div className="grid border p-2">
                                <img src={e.url} style={{height:'240px', maxWidth:'240px'}} alt="" />
                                <p>{e.name}</p>
                                <p>{e.title}</p>
                                <p><b>{e.originalPrice}</b> / {e.discount}%off</p>
                            </div>
                        ))
                    }
                </div>
            </div>


        </>
    )
}

export default MotoSlice
