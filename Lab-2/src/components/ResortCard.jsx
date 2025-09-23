function ResortCard(props) {
    const ratingStyle = props.rating > 4.0 ? 'rating-green' : 'rating-red';

    return (
        <div className="card-component">
            <img src={props.image} alt={props.hotel} />
            <h3>{props.country}</h3>
            <p>{props.hotel}</p>
            <p>
                <span className={ratingStyle}>{props.rating} ★</span>
            </p>
            <p>
                <strong>${props.price}</strong>/night
            </p>
        </div>
    );
}

export default ResortCard;

