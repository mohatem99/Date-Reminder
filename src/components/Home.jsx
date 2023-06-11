import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import CardList from "./cards/CardList";
import { persons } from "../data";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useState(persons);
  const onDelete = () => {
    setData([]);
  };
  const onView = () => {
    setData(persons);
  };

  return (
    <Container className="py-5">
      <Header person={data} />
      <CardList person={data} />
      <Footer onDelete={onDelete} onView={onView} />
    </Container>
  );
};
export default Home;
