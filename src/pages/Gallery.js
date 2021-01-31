import React from "react";
import axios from "axios";
import {
  Card,
  Spinner,
  CardText,
  CardBody,
  CardTitle,
  CardFooter,
  CardSubtitle,
} from "reactstrap";

import "../pages/post.css";

const BASE_URL = "https://jsonplaceholder.typicode.com";
class Gallery extends React.Component {
  state = {
    photos: [],
    isLoading: false,
  };

  componentDidMount = () => {
    this.setState({
      ...this.state,
      isLoading: true,
    });

    axios
      .get(`${BASE_URL}/photos`)
      .then((res) => {
        this.setState({
          photos: res.data,
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
          <Spinner
            type='grow'
            color='primary'
            style={{ width: "5rem", height: "5rem" }}
          />
        </div>
      );
    return (
      <div className='container'>
        {this.state.photos.map((photo) => {
          return (
            <Card key={photo.id} className='mt-3'>
              <CardBody>
                <CardTitle> {photo.id} </CardTitle>
                <CardText> {photo.url} </CardText>
              </CardBody>
              <CardFooter
                style={{
                  backgroundColor: "#e83e8c",
                  textAlign: "center",
                  color: "#fff",
                }}>
                <CardSubtitle> Image Title : {photo.title} </CardSubtitle>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
