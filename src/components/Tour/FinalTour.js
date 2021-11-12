import React, { Component } from "react";
import { Row, Col, Card, CardBody, Form, FormInput } from "shards-react";
import axios from "axios";

import "./tour.css";

import TourTab from "./tourComponents/TourTab";
import SidebarActions from "../common/SidebarActions";
import SidebarCategories from "../common/SidebarCategories";
import FeaturedImage from "../common/FeaturedImage";

export default class FinalTour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };

    // this.fileInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", this.state.title);
    axios
      .post(process.env.BASE_URL + "api/tours", data, {})
      .then((res) => {
        this.setState({
          title: "",
          description: "",
          profileImg: "",
          status: "Draft",
          visibility: "Public",
          schedule: "Now",
          readability: "ok",
          uncategorized: false,
          design: false,
          development: false,
          writing: false
        });
        //this.props.history.push("/blog-tours");
      })
      .catch((err) => {
        console.log("Error in Createpage!");
      });
  };

  render() {
    return (
      <Row>
        <Form id="form1" className="add-new-page" onSubmit={this.handleSubmit}>
          <Col lg="9" md="12">
            <Card small className="mb-3">
              <CardBody>
                <FormInput
                  type="text"
                  placeholder="Title of the Tour"
                  name="title"
                  className="form-control mb-3"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  size="lg"
                />
                <TourTab></TourTab>

                <br />
                <br />
              </CardBody>
            </Card>
          </Col>

          {/* Sidebar Widgets */}
          <Col lg="3" md="12">
            <SidebarActions></SidebarActions>
            <SidebarCategories></SidebarCategories>
            <FeaturedImage></FeaturedImage>
          </Col>
        </Form>
      </Row>
    );
  }
}
