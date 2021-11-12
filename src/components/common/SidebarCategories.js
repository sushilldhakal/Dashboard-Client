import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  InputGroup,
  InputGroupAddon,
  FormCheckbox,
  FormInput
} from "shards-react";

export default class SidebarCategories extends Component {
  constructor(props) {
    super(props);

    const category = [];
    category.push({
      title: [
        {
          uncategorized: false
        }
      ],
      title: [
        {
          design: false
        }
      ],
      title: [
        {
          development: false
        }
      ],
      title: [
        {
          writing: false
        }
      ]
    });

    this.state = {
      uncategorized: false,
      design: false,
      development: false,
      writing: false,
      category
    };

    this.handleCategories = this.handleCategories.bind(this);

    // this.handleAddingCategory = this.handleAddingCategory.bind(this);
    // this.removeCategory = this.removeCategory.bind(this);
  }

  // handleAddingcategory() {
  //   let curr = this.state.categoryId;
  //   const uniqueID = Date.now();
  //   this.setState({ categoryId: [...curr, uniqueID] });
  // }

  // removecategory(e) {
  //   document.getElementById("ai-" + e).remove();
  // }

  handleCategories = name => e => {
    this.setState({
      [name]: e.target.checked
    });
  };

  render() {
    return (
      <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Categories</h6>
        </CardHeader>
        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="px-3 pb-2">
              <FormCheckbox
                className="mb-1"
                name="uncategorized"
                checked={this.state.uncategorized}
                onChange={this.handleCategories("uncategorized")}
                value="uncategorized"
              >
                Uncategorized
              </FormCheckbox>
              <FormCheckbox
                className="mb-1"
                name="Design"
                checked={this.state.design}
                onChange={this.handleCategories("design")}
                value="design"
              >
                Design
              </FormCheckbox>
              <FormCheckbox
                name="Development"
                checked={this.state.development}
                className="mb-1"
                value="development"
                onChange={this.handleCategories("development")}
              >
                Development
              </FormCheckbox>
              <FormCheckbox
                name="Writing"
                checked={this.state.writing}
                onChange={this.handleCategories("writing")}
                className="mb-1"
                value="writing"
              >
                Writing
              </FormCheckbox>
            </ListGroupItem>

            <ListGroupItem className="d-flex px-3">
              <InputGroup className="ml-auto">
                <FormInput placeholder="New category" />
                <InputGroupAddon type="append">
                  <Button theme="white" className="px-2">
                    <i className="material-icons">add</i>
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    );
  }
}
