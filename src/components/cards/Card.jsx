import { Row, Col } from "react-bootstrap";

const Card = ({ data }) => {
  return (
    <div key={data.id} className="d-flex border-bottom mx-3 my-2">
      <img className="img-avatar" src="pic1.png" alt="ddd" />
      <div className="px-3">
        <p className="d-inline fs-6">{data.name}</p>
        <p className="fs-6">{data.date}</p>
      </div>
    </div>
  );
};

export default Card;
