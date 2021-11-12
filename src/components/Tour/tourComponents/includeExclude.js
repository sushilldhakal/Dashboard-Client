import React, { Component } from "react";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default class IncludeExclude extends Component {
  constructor(props) {
    super(props);

    this.state = {
      include: "",
      exclude: ""
    };
    this.handleIncludeChange = this.handleIncludeChange.bind(this);
    this.handleExcludeChange = this.handleExcludeChange.bind(this);
  }

  handleIncludeChange = (e, editor) => {
    const data = editor.getData();
    this.setState({
      include: data
    });
    console.log(this.state);
  };

  handleExcludeChange = (e, editor) => {
    const data = editor.getData();
    this.setState({
      exclude: data
    });

    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h4 className="tab-content-title">Includes</h4>
        <CKEditor
          editor={ClassicEditor}
          name="include"
          data=""
          placeholder="Description"
          onChange={this.handleIncludeChange}
          config={{
            ckfinder: {
              uploadUrl: "http://localhost/8082/backend/public"
            }
          }}
        />

        <h4 className="tab-content-title mt-3">Excludes</h4>
        <CKEditor
          editor={ClassicEditor}
          name="exclude"
          data=""
          placeholder="Description"
          onChange={this.handleExcludeChange}
          config={{
            ckfinder: {
              uploadUrl: "http://localhost/8082/backend/public"
            }
          }}
        />
      </div>
    );
  }
}
