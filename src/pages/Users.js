import React from "react";
import axios from "axios";
import {
  Card,
  Spinner,
  CardText,
  CardBody,
  CardTitle,
  Button,
  CardImg,
} from "reactstrap";

import "../pages/user.css";

import Image from "../../src/assets/icon.png";

const BASE_URL = "https://jsonplaceholder.typicode.com";
class Users extends React.Component {
  state = {
    users: [],
    isLoading: false,
  };

  componentDidMount = () => {
    this.setState({
      ...this.state,
      isLoading: true,
    });

    axios
      .get(`${BASE_URL}/users`)
      .then((res) => {
        this.setState({
          users: res.data,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          ...this.state,
          isLoading: false,
        });
      });
  };

  render() {
    if (this.state.isLoading)
      return (
        <div className='spinner'>
          <Spinner color='primary' style={{ width: "5rem", height: "5rem" }} />
        </div>
      );
    return (
      <div className='container'>
        {this.state.users.map((user) => {
          return (
            <Card key={user.id} className='mt-3'>
              <CardImg
                src={Image}
                alt='icon'
                style={{
                  marginLeft: "45%",
                  width: "100px",
                  height: "100px",
                }}
              />
              <CardBody style={{ textAlign: "center" }}>
                <CardTitle tag='h5'> {user.name} </CardTitle>
                <CardText> {user.email} </CardText>
              </CardBody>
              <Button color='primary'>View Profile</Button>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default Users;
