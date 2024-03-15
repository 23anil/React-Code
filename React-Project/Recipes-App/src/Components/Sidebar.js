import { Card } from "react-bootstrap";

function Sidebar({ setselectedDish, setisShow, Racipes }) {
  let senddata = (val) => {
    setselectedDish(val);
    setisShow(true);
  };

  return (
    <div className="sidebar">
      {Racipes.map((val, idx) => {
        return (
          <Card
            key={idx}
            style={{ cursor: "pointer", zIndex: 50 }}
            className="text-center"
            onClick={() => {
              senddata(val);
            }}
          >
            <Card.Header className="fs-5 fw-bold">{val.name}</Card.Header>
            <Card.Body className="p-0">
              <img
                src={val.image}
                alt={val.name}
                height={"256px"}
                width={"100%"}
              />
            </Card.Body>
            <Card.Footer className="fs-5 fw-bold">{val.No}</Card.Footer>
          </Card>
        );
      })}
    </div>
  );
}

export default Sidebar;
