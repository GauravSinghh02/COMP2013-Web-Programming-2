export default function ResortCard(props) {
  console.log(props);

  return (
    <div
      className={
        props.rating > 4.0
          ? "rating-green"
          : "rating-red"
      }
    >
      <img src={props.image} alt="" width="100px" />
      <h2>{props.hotel}</h2>
      {props.rating > 4.0 ? (
        <h3 className="Card-Sale">High Rating</h3>
      ) : (
        <h3>&nbsp;</h3>
      )}
      <p>{props.country}</p>
      <p>
        <strong>${props.price}</strong>/night
      </p>
      <button>Book Now</button>
    </div>
  );
}




