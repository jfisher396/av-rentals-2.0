import React, { Component } from "react";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import API from "../../utils/API";

export default class Audio extends Component {
  state = {
    audio: [],
  };

  componentDidMount() {
    API.getAllAudio().then((res) => {
      this.setState({ audio: res.data });
    });
  }

  render() {
    return (
      <Container>
        {this.state.audio.map((item) => (
          <Card
            key={item.id}
            image1={item.image1}
            model={item.model}
            description={item.description}
            // indicator={item.screenSize}
            price={item.rate}
            // label1={"Screen Size: "}
          />
        ))}
      </Container>
    );
  }
}
