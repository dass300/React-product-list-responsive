import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { productDatas } from "./data.js";

import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { productDatas } from "./data.js";

// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { productDatas } from "./data.js";

// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { productDatas } from "./data.js";

const Products = () => {
  const [items, setItems] = useState(productDatas);

  const qntyDecrem = (id) => {
    const newItem = items.map((regu) =>
      regu.id === id && regu.Qty > 0 ? { ...regu, Qty: regu.Qty - 1 } : regu
    );
    setItems(newItem);
  };

  const qntyIncrem = (id) => {
    const newItem = items.map((regu) =>
      regu.id === id ? { ...regu, Qty: regu.Qty + 1 } : regu
    );
    setItems(newItem);
  };

  return (
    <div>
      <h1 className="bg-info text-white">Product list</h1>

      {items.map((item) => (
        <div className="d-inline-flex" key={item.id}>
          <Card
            className="shadow p-3 m-2 bg-white rounded"
            style={{ width: "16rem" }}
            
          >
            <Card.Img
            className="p-3"
            style={{  height:"200px" }}
              variant="top"
              src={require(`../assets/${item.image}.jpg`)}
            />
            <Card.Body>
              <Card.Title className=" text-primary text-decoration-underline">{item.Device}</Card.Title>
              <Card.Text className=" text-danger h4 "> {item.Brand} </Card.Text>
              <h5>Price :₹ {item.Price} </h5>

              <div>
                <p>
                  Qty:
                  <Button onClick={() => qntyDecrem(item.id)} className="m-2">
                    -
                  </Button>
                  {item.Qty}
                  <Button onClick={() => qntyIncrem(item.id)} className="m-2">
                    +
                  </Button>
                </p>
              </div>

              <Button variant="success">ADD To Cart</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Products;
