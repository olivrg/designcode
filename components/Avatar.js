import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name =>
      dispatch({
        type: "UPDATE_NAME",
        name: name
      })
  };
}

class Avatar extends React.Component {
  state = {
    photo: "https://cl.ly/27ab466009b2/download/avatar-default.jpg"
  };

  componentDidMount() {
    fetch("https://uifaces.co/api?limit=1&random", {
      headers: new Headers({
        "X-API-KEY": "f57a3629feb9c583ec77c3f60eb6df"
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          photo: response[0].photo
        });
        this.props.updateName(response[0].name);
      });
  }
  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
