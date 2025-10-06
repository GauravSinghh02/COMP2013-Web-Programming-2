export default function ResortCard(props) {
  return (
    <div className="Card-Components">
      <img src={props.image} alt="" width="200px" />
      <h2>{props.country}</h2>
      <p>{props.name}</p>
      <p>
        {props.ratings > 4.0 ? (
          <p className="ratings-green" >{props.ratings} ★  </p>
        ) : (
          <p className="ratings-red" >{props.ratings} ★  </p>
        )}
      </p>

      <p>{props.price}</p>
    </div>
  );
}