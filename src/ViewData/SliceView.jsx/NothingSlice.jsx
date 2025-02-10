import React from 'react'
import { NothingData } from '../../Data/NotingData'

function NothingSlice() {
    let MobSlice = NothingData.slice(0, 4)
    return (
        <>
            <div>
                <div className="d-flex">
                    {
                        MobSlice.map((e) => (
                            <div className="grid border p-2">
                              <img src={e.url} style={{height:'240px', width:'200px'}} alt="" />
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

export default NothingSlice
