import React, { Component } from "react";

import { Col, FormInput, Button } from "shards-react";

import ReactDragListView from "react-drag-listview";

export default class Facts extends Component {
  constructor(props) {
    super(props);
    var items = ["Gold", "Crimson", "Hotpink"];
    const data = [];
    this.state = {
      data,
      iconCode: "",
      factInfo: "",
      items
    };

    this.handleAddingFact = this.handleAddingFact.bind(this);
    this.removeFact = this.removeFact.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };

  handleAddingFact() {
    let curr = this.state.data;
    const uniqueID = Date.now();
    this.setState({ data: [...curr, uniqueID] });
  }
  removeFact(e) {
    document.getElementById("ai-" + e).remove();
  }

  render() {
    const dragPropsNew = {
      onDragEnd(fromIndex, toIndex) {
        const data = this.state.data;
        const item = data.splice(fromIndex, 1)[0];
        data.splice(toIndex, 0, item);
        this.setState({ data });
      },
      nodeSelector: "li",
      handleSelector: "a"
    };
    return (
      <div>
        <h4 className="tab-content-title">Facts</h4>

        <ReactDragListView {...dragPropsNew}>
          <ol className="sortable container">
            {this.state.data.map((item, index) => (
              <li key={index} className="row" id={"ai-" + item}>
                <Col lg="2" md="3" xs="6">
                  <a href="#" className="sort-drag">
                    <i className="material-icons">reorder</i>
                  </a>
                </Col>

                <Col lg="4" md="3" xs="6">
                  {item.title}
                  <FormInput
                    type="text"
                    placeholder="icon code"
                    name="iconCode"
                    className="form-control mb-3"
                    value={this.state.iconCode}
                    onChange={this.handleInputChange}
                    size="lg"
                  />
                </Col>
                <Col lg="4" md="3" xs="6">
                  <FormInput
                    type="text"
                    placeholder="Fact info"
                    name="factInfo"
                    className="form-control mb-3"
                    value={this.state.factInfo}
                    onChange={this.handleInputChange}
                    size="lg"
                  />
                </Col>
                <Col lg="2" md="3" xs="6">
                  <Button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => this.removeFact(item)}
                  >
                    <i className="material-icons">close</i>
                  </Button>
                </Col>
              </li>
            ))}
          </ol>
        </ReactDragListView>
        <Button
          theme="accent"
          size="sm"
          className="ml-auto float-right mt-3"
          type="button"
          onClick={this.handleAddingFact}
        >
          <i className="material-icons">file_copy</i> {"Add Facts"}
        </Button>
      </div>
    );
  }
}
