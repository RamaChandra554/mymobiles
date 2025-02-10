import React from 'react'
import { NothingData } from '../../Data/NotingData'
import { CenterFocusStrong } from '@mui/icons-material'

function NothingSlice() {
    let MobSlice = NothingData.slice(0, 4)
    return (
        <>
            <div className="d-flex">
                {
                    MobSlice.map((e) => (
                        <div className="grid border p-2" style={{ width: '22%' }}>
                            <img src={e.url} style={{ height: '240px', maxWidth: '100%' }} alt="" />
                            <p>{e.name}</p>
                            <p>{e.title}</p>
                            <p><b>{e.originalPrice}</b> / {e.discount}%off</p>
                        </div>
                    ))
                }
                <p className='btn btn-info align-items-center' style={{ height: '30px' }}>See All</p>

            </div>
        </>
    )
}

export default NothingSlice
