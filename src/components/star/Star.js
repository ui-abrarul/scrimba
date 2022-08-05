import React from 'react'
import starEmpty from '../../assets/star-empty.png'
import starFilled from '../../assets/star-filled.png'
const Star = (props) => {

    let starIcon = props.isFilled ? starFilled : starEmpty

    return (
        <img
            src={starIcon}
            className="card--favorite"
            alt=""
            onClick={props.toggleFavorite}
        />
    )
}

export default Star