import React from 'react'

const Card = ({data}) => {
    return (
        <div>
            <div className="card">
                <img src={data.image_url} alt="kl" className='image' />
            </div>
            <div className="name">
                <h3>{data.name}</h3>
            </div>
        </div>
    )
}

export default Card
