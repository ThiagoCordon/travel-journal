import pin from "/pin.png";

export default function Card(props) {
  return (
    <div className="Card">
      <img src={props.imageUrl} alt="image" />
      <div className="info">
        <div className="location-info">
          <img src={pin} alt="pin" />
          <h3 className="location">{props.location}</h3>
          <a href={props.googleMapsUrl} className="google-maps">
            View on Google Maps
          </a>
        </div>
        <h2 className="title">{props.title}</h2>
        <h4 className="date">
          {props.startDate} - {props.endDate}
        </h4>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
