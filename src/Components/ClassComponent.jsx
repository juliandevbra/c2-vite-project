import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
    };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Se montó el componente");
  }
  componentDidUpdate() {
    console.log("Se actualizó el componente");
  }
  componentWillUnmount() {}

  render() {
    console.log("Render");
    return <div>ClassComponent</div>;
  }
}
