import React from 'react'

const Card = () => {
    return (
        <>
            <div className="card-deck">
                <div className="card bg-dark">
                    <div className="card-header"><h1>header</h1></div>
                    <div className="card-body">
                        <img src="op" alt="image" className="card img-top" />
                        <p className="card-text">thiss is some text</p>
                    </div>
                    <div className="card-footer">footer</div>
                </div>
            </div>
        </>
    )
}

export default Card
