import React from 'react'
import { Link } from 'react-router-dom'
import { AppleData } from '../../Data/AppleData'

function AppleSlice() {
    let MobSlice = AppleData.slice(0, 4)
    return (
        <>
            <div className="d-flex">
                {
                    MobSlice.map((e) => (
                        <div className="grid border p-2" style={{ width: '22%' }} >
                            <img src={e.url} style={{ height: '240px', maxWidth: '100%' }} alt="" />
                            <p>{e.name}</p>
                            <p>{e.title}</p>
                            <p><b>{e.price}</b> / {e.discount}%off</p>
                        </div>
                    ))
                }
                <p className='btn btn-info align-items-center' style={{ height: '30px' }}>See All</p>

            </div>

        </>
    )
}

export default AppleSlice
