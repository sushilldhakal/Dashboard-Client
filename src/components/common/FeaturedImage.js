import React, { Component } from "react";
import DropzoneComponent from "react-dropzone-component";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem
} from "shards-react";

export default class FeaturedImage extends Component {
  constructor(props) {
    super(props);

    // For a full list of possible configurations,
    // please consult http://www.dropzonejs.com/#configuration
    this.djsConfig = {
      addRemoveLinks: true,
      acceptedFiles: "image/jpeg,image/png,image/gif"
    };

    this.componentConfig = {
      iconFiletypes: [".jpg", ".png", ".gif"],
      showFiletypeIcon: true,
      postUrl: "/uploadHandler"
    };

    // If you want to attach multiple callbacks, simply
    // create an array filled with all your callbacks.
    this.callbackArray = [() => console.log("Hi!"), () => console.log("Ho!")];

    // Simple callbacks work too, of course
    this.callback = () => console.log("Hello!");

    this.success = file => console.log("uploaded", file);

    this.removedfile = file => console.log("removing...", file);

    this.dropzone = null;

    this.state = {
      fImage: ""
    };
  }

  render() {
    const config = this.componentConfig;
    const djsConfig = this.djsConfig;

    // For a list of all possible events (there are many), see README.md!
    const eventHandlers = {
      init: dz => (this.dropzone = dz),
      drop: this.callbackArray,
      addedfile: this.callback,
      success: this.success,
      removedfile: this.removedfile
    };
    return (
      <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Feature Image</h6>
        </CardHeader>
        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="d-flex px-3">
              <DropzoneComponent
                config={config}
                eventHandlers={eventHandlers}
                djsConfig={djsConfig}
                multiple="false"
              />
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    );
  }
}
