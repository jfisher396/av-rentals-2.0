import React, { Component } from "react";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";

class Projectors extends Component {
  state = [
    {
      image:
        "https://static.wixstatic.com/media/94e10e_5eea370ee4fd4559875a628bc806728d~mv2.jpg/v1/fill/w_960,h_660,al_c,q_85/94e10e_5eea370ee4fd4559875a628bc806728d~mv2.webp",
      model: "Epson Powerlite Pro L1505",
      description: "12,000 Lumen DLP Projector",
    },
    {
      image:
        "https://static.wixstatic.com/media/94e10e_5eea370ee4fd4559875a628bc806728d~mv2.jpg/v1/fill/w_960,h_660,al_c,q_85/94e10e_5eea370ee4fd4559875a628bc806728d~mv2.webp",
      model: "Epson Powerlite Pro L1505",
      description: "12,000 Lumen DLP Projector",
    },
    {
      image:
        "https://static.wixstatic.com/media/94e10e_5eea370ee4fd4559875a628bc806728d~mv2.jpg/v1/fill/w_960,h_660,al_c,q_85/94e10e_5eea370ee4fd4559875a628bc806728d~mv2.webp",
      model: "Epson Powerlite Pro L1505",
      description: "12,000 Lumen DLP Projector",
    },
  ];

  render() {
    return (
      <Container>
        {this.state.map((item) => (
          <Card
            image={item.image}
            model={item.model}
            description={item.description}
          />
        ))}
        
      </Container>
    );
  }
}

export default Projectors;
