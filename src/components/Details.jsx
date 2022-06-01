import React from 'react'

const Details = () => {
    return (
        <div className='detailsContainer'>
            <div>
                <p className='detailsLabel'>IP Address</p>
                <p className='detail'>8.8.8.8</p>
            </div>
            <div>
                <p className='detailsLabel'>Location</p>
                <p className='detail'>Boston, MA</p>
            </div>
            <div>
                <p className='detailsLabel'>Timezone</p>
                <p className='detail'>UTC -5.00</p>
            </div>
            <div>
                <p className='detailsLabel'>ISP</p>
                <p className='detail'>Havard Square</p>
            </div>
        </div>
    )
}

export default Details