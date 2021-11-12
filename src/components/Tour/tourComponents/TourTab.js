import React, { Component } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Description from "./description";
import ItineraryDirection from "./itineraryDirection";
import IncludeExclude from "./includeExclude";
import Facts from "./facts";
import DatePrice from "./datePrice";
import Gallery from "./gallery";
import FAQ from "./faq";
import Download from "./download";
export default class TourTab extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Itinerary/Direction</Tab>
          <Tab>Includes/Excludes</Tab>
          <Tab>Facts</Tab>
          <Tab>Dates/Prices</Tab>
          <Tab>Gallery</Tab>
          <Tab>FAQs</Tab>
          <Tab>Download</Tab>
        </TabList>

        <TabPanel>
          <div>
            <Description></Description>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <ItineraryDirection></ItineraryDirection>
          </div>
        </TabPanel>
        <TabPanel>
          <IncludeExclude></IncludeExclude>
        </TabPanel>
        <TabPanel>
          <Facts></Facts>
        </TabPanel>
        <TabPanel>
          <DatePrice></DatePrice>
        </TabPanel>
        <TabPanel>
          <Gallery></Gallery>
        </TabPanel>
        <TabPanel>
          <FAQ></FAQ>
        </TabPanel>
        <TabPanel>
          <Download></Download>
        </TabPanel>
      </Tabs>
    );
  }
}
