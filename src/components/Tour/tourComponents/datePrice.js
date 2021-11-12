import React, { Component } from "react";

import { Col, FormInput, Button } from "shards-react";

export default class DatePrice extends Component {
  constructor(props) {
    super(props);

    const data = [];
    data.push({});
    this.state = {
      startDate: "",
      endDate: "",
      status: "",
      price: "",
      data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddingList = this.handleAddingList.bind(this);
    this.removeDiv = this.removeDiv.bind(this);
  }

  handleAddingList() {
    let curr = this.state.data;
    const uniqueID = Date.now();
    this.setState({ data: [...curr, uniqueID] });
  }
  removeDiv(e) {
    document.getElementById("ai-" + e).remove();
  }

  handleInputChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <h4 className="tab-content-title">Dates/Prices</h4>

        <ol className="sortable container date-price">
          {this.state.data.map((item, index) => (
            <li key={index} className="row" id={"ai-" + item}>
              <Col lg="6" md="6" xs="12">
                <label htmlFor="">Start Date</label>
                <FormInput
                  type="text"
                  placeholder="Start Date"
                  name="startDate"
                  className="form-control mb-3"
                  value={this.state.startDate}
                  onChange={this.handleInputChange}
                  size="lg"
                />
              </Col>

              <Col lg="6" md="6" xs="12">
                <label htmlFor="">End Date</label>
                <FormInput
                  type="text"
                  placeholder="endDate"
                  name="icon code"
                  className="form-control mb-3"
                  value={this.state.endDate}
                  onChange={this.handleInputChange}
                  size="lg"
                />
              </Col>

              <Col lg="6" md="6" xs="12">
                <label htmlFor="">Status</label>
                <FormInput
                  type="text"
                  placeholder="Status"
                  name="status"
                  className="form-control mb-3"
                  value={this.state.status}
                  onChange={this.handleInputChange}
                  size="lg"
                />
              </Col>

              <Col lg="6" md="6" xs="12">
                <label htmlFor="">Price</label>
                <FormInput
                  type="text"
                  placeholder="Price"
                  name="price"
                  className="form-control mb-3"
                  value={this.state.price}
                  onChange={this.handleInputChange}
                  size="lg"
                />
              </Col>
              <Button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => this.removeDiv(item)}
              >
                <i className="material-icons">close</i>
              </Button>
            </li>
          ))}
        </ol>
        <Button
          theme="accent"
          size="sm"
          className="ml-auto float-right mt-3"
          type="button"
          onClick={this.handleAddingList}
        >
          <i className="material-icons">file_copy</i> {"Add Date and Price"}
        </Button>
      </div>
    );
  }
}
