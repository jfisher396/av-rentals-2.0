import React, { Component } from "react";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import API from "../../utils/API";

export default class Computers extends Component {
  state = {
    computers: [],
  };

  componentDidMount() {
    API.getAllComputers().then((res) => {
      this.setState({ computers: res.data });
    });
  }

  render() {
    return (
      <Container>
        {this.state.computers.map((item) => (
          <Card
            key={item.id}
            image1={item.image}
            model={item.model}
            description={item.description}
            indicator={item.screenSize}
            price={item.rate}
            label1={"Screen Size: "}
          />
        ))}
      </Container>
    );
  }
}
