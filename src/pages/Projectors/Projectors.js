import React, { Component } from "react";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import API from "../../utils/API";

class Projectors extends Component {
  state = {
    projectors: []
  }

  componentDidMount() {
    API.getAllProjectors().then(res => {
     this.setState({ projectors: res.data })
    }
    )}

  render() {
    return (
      <Container>
        {this.state.projectors.map((item) => (
          <Card
            key={item.id}
            image={item.image1}
            model={item.model}
            description={item.description}
          />
        ))}
      </Container>
    );
  }
}

export default Projectors;
