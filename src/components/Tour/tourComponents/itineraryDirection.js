import React, { Component } from "react";
import { FormInput, Button } from "shards-react";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

export default class ItineraryDirection extends Component {
  constructor(props) {
    super(props);

    const itinearyId = [];

    this.state = {
      direction: "",
      outline: "",
      date: "",
      title: "",
      time: "",
      info: "",
      itineraryArray: [],
      object: {},
      itinearyId
    };

    // this.fileInput = React.createRef();

    this.itineraryOutline = this.itineraryOutline.bind(this);

    this.handleArrayChange = this.handleArrayChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.itineraryArrayTextArea = this.itineraryArrayTextArea.bind(this);

    this.handleAddingAccordion = this.handleAddingAccordion.bind(this);
    this.removeItineary = this.removeItineary.bind(this);
  }

  handleInputChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };

  handleArrayChange = e => {
    this.setState({
      ...this.state
    });
  };

  itineraryOutline = (e, editor) => {
    const data = editor.getData();
    this.setState({
      outline: data
    });
  };

  itineraryArrayTextArea = (e, editor) => {
    const data = editor.getData();
    this.setState({
      info: data
    });
    //console.log(this.state.info);
  };
  saveItineraryArray = e => {
    //e.preventDefault();
    const date = this.state.date;
    const title = this.state.title;
    const time = this.state.time;
    const info = this.state.info;
    const obj = { date: date, title: title, time: time, info: info };
    this.setState({
      itineraryArray: [...this.state.itineraryArray, obj]
    });
    console.log(this.state.itineraryArray);
  };

  handleAddingAccordion() {
    let curr = this.state.itinearyId;
    const uniqueID = Date.now();
    this.setState({ itinearyId: [...curr, uniqueID] });
  }

  removeItineary(e) {
    document.getElementById("ai-" + e).remove();
  }

  render() {
    return (
      <div>
        <h4 className="tab-content-title">Direction</h4>
        <FormInput
          type="text"
          placeholder="Add Iframe link form goole map"
          name="direction"
          className="form-control mb-3"
          value={this.state.direction}
          onChange={this.handleInputChange}
          size="lg"
        />

        <h4 className="tab-content-title">Itinerary Outline</h4>
        <div className="ckeditor-height-small">
          <CKEditor
            editor={ClassicEditor}
            data=""
            placeholder="Itineray Description"
            onChange={this.itineraryOutline}
            config={{
              ckfinder: {
                uploadUrl: "http://localhost/8082/backend/public"
              }
            }}
          />
        </div>

        <h4 className="tab-content-title">Itineary</h4>

        <Accordion
          allowMultipleExpanded={true}
          allowZeroExpanded={true}
          className="itineary-accordion accordion"
        >
          {this.state.itinearyId.map((itineary, idx) => (
            <AccordionItem key={idx} id={"ai-" + itineary}>
              <a href="#" className="sort-drag">
                <i className="material-icons">reorder</i>
              </a>
              <AccordionItemHeading>
                <AccordionItemButton>Itineary Day</AccordionItemButton>
              </AccordionItemHeading>

              <Button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => this.removeItineary(itineary)}
              >
                <i className="material-icons">close</i>
              </Button>
              <AccordionItemPanel>
                <h6>Itineary Title</h6>
                <FormInput
                  type="text"
                  placeholder="itineary title"
                  name="title"
                  className="form-control mb-3"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  size="lg"
                />

                <FormInput
                  type="text"
                  placeholder="itineary date"
                  name="date"
                  className="form-control mb-3"
                  value={this.state.date}
                  onChange={this.handleInputChange}
                  size="lg"
                />

                <FormInput
                  type="text"
                  placeholder="itineary time"
                  name="time"
                  className="form-control mb-3"
                  value={this.state.time}
                  onChange={this.handleInputChange}
                  size="lg"
                />

                <CKEditor
                  editor={ClassicEditor}
                  data=""
                  placeholder="info"
                  onChange={this.itineraryArrayTextArea}
                  config={{
                    ckfinder: {
                      uploadUrl: "http://localhost/8082/backend/public"
                    }
                  }}
                />
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>

        <Button
          theme="accent"
          size="sm"
          className="ml-auto float-right mt-3"
          type="button"
          onClick={this.handleAddingAccordion}
        >
          <i className="material-icons">file_copy</i> {"Add Itineary"}
        </Button>

        <Button
          theme="accent"
          size="sm"
          className="ml-auto float-left mt-3"
          type="button"
          onClick={this.saveItineraryArray}
        >
          <i className="material-icons">file_copy</i> {"Save Data"}
        </Button>
      </div>
    );
  }
}
