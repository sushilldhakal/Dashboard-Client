import React, { Component } from "react";
import { render } from "react-dom";

import { FormInput, FormTextarea } from "shards-react";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      shortDescription: "",
      tripCode: ""
    };

    // this.fileInput = React.createRef();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.tripDescription = this.tripDescription.bind(this);
  }

  tripDescription = (e, editor) => {
    const data = editor.getData();
    this.setState({
      description: data
    });
    console.log(this.state);
  };

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
        <h4 className="tab-content-title">Trip Code</h4>
        <FormInput
          type="text"
          placeholder="Trip Code"
          name="tripCode"
          className="form-control mb-3"
          value={this.state.tripCode}
          onChange={this.handleInputChange}
          size="lg"
        />
        <h4 className="tab-content-title">Description</h4>
        <CKEditor
          editor={ClassicEditor}
          data=""
          placeholder="Description"
          onChange={this.tripDescription}
          config={{
            ckfinder: {
              uploadUrl: "http://localhost/8082/backend/public"
            }
          }}
        />
        <h4 className="tab-content-title mt-4">Short Description</h4>
        <FormTextarea
          className="mt-1"
          placeholder="Short Description"
          col="5"
          row="5"
          value={this.state.shortDescription}
          onChange={e => this.setState({ shortDescription: e.target.value })}
        ></FormTextarea>
      </div>
    );
  }
}
