import Avatar from "./Avatar";
import Detail from "./Detail";

function ContactCard(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <p>{props.id}</p>
          <h2 className="name">{props.name}</h2>
          <Avatar imgURL={props.imgURL}/>
        </div>
        <div className="bottom">
          <Detail detailInfo={props.phone}/>
          <Detail detailInfo={props.email}/>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
