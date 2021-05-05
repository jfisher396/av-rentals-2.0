import React, { Component } from "react";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import API from "../../utils/API";

export default class Screens extends Component {
  state = {
    screens: [],
  };

  componentDidMount() {
    API.getAllScreens().then((res) => {
      this.setState({ screens: res.data });
    });
  }

  render() {
    return (
      <Container>
        {this.state.screens.map((item) => (
          <Card
            key={item.id}
            image1={item.image}
            model={item.model}
            description={item.description}
            indicator={item.size}
            price={item.price ? item.price : "150 and up"}
            label1={"Size: "}
          />
        ))}
      </Container>
    );
  }
}
