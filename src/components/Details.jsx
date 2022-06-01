import React from 'react'

const Details = ( { ip } ) => {
    return (
        <div className='detailsContainer'>
            <div>
                <p className='detailsLabel'>IP Address</p>
                <p className='detail'>{ip.ip}</p>
            </div>
            <div>
                <p className='detailsLabel'>Location</p>
                <p className='detail'>{ip.location?.city}, {ip.location?.region}</p>
            </div>
            <div>
                <p className='detailsLabel'>Timezone</p>
                <p className='detail'>UTC {ip.location?.timezone}</p>
            </div>
            <div>
                <p className='detailsLabel'>ISP</p>
                <p className='detail'>{ip.isp}</p>
            </div>
        </div>
    )
}

export default Details