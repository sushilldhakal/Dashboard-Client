import React, { Component } from "react";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FormInput, Button } from "shards-react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default class FAQ extends Component {
  constructor(props) {
    super(props);

    const faqId = [];

    this.state = {
      faqId,
      faqQuestion: "",
      faqAnswer: ""
    };
    this.handleAddingFaq = this.handleAddingFaq.bind(this);
    this.removeFaq = this.removeFaq.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
  }

  handleInputChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };

  handleTextareaChange = (e, editor) => {
    const data = editor.getData();
    this.setState({
      faqAnswer: data
    });
  };

  handleAddingFaq() {
    let curr = this.state.faqId;
    const uniqueID = Date.now();
    this.setState({ faqId: [...curr, uniqueID] });
  }

  removeFaq(e) {
    document.getElementById("ai-" + e).remove();
  }

  render() {
    return (
      <div>
        <h4 className="tab-content-title">FAQs</h4>

        <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
          <div className="sortable">
            {this.state.faqId.map((faq, idx) => (
              <AccordionItem key={faq} id={"ai-" + faq}>
                <AccordionItemHeading>
                  <AccordionItemButton>FAQs</AccordionItemButton>
                </AccordionItemHeading>
                <a href="#" className="sort-drag">
                  <i className="material-icons">reorder</i>
                </a>
                <Button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => this.removeFaq(faq)}
                >
                  <i className="material-icons">close</i>
                </Button>
                <AccordionItemPanel>
                  <h6>FAQs Question</h6>
                  <FormInput
                    type="text"
                    placeholder="faq question"
                    name="tripCode"
                    className="form-control mb-3"
                    value={this.state.faqQuestion}
                    onChange={this.handleInputChange}
                    size="lg"
                  />

                  <CKEditor
                    editor={ClassicEditor}
                    data=""
                    placeholder="faq Description"
                    onChange={this.handleTextareaChange}
                    config={{
                      ckfinder: {
                        uploadUrl: "http://localhost/8082/backend/public"
                      }
                    }}
                  />
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </div>
        </Accordion>

        <Button
          theme="accent"
          size="sm"
          className="ml-auto float-right mt-3"
          type="button"
          onClick={this.handleAddingFaq}
        >
          <i className="material-icons">file_copy</i> {"Add FAQs"}
        </Button>
      </div>
    );
  }
}
