import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Container, Row, Col } from "react-bootstrap";
import worldData from "../data/world.json";
import usStateData from "../data/usa.json";
import indiaStateData from "../data/india.json";
import chinaProvincesData from "../data/china.json";
import "../styles.css";
import { name } from "file-loader";

const indiaStates = [
    {name: "Maharashtra"},
    {name: "Gujarat"},
    {name: "Karnataka"},
    {name: "Tamil Nadu"},
    {name: "Andhra Pradesh"}
]

const chinaProvinces = [

  {name: "广东", englishName: "Guangdong"},
  {name:"广西", englishName: "Guangxi"},
  {name: "湖南", englishName: "Hunan"},
  {name: "福建", englisnName: "Fujian"},
  {name: "江西", englishName: "Jiangxi"}
]
const top30States = [
  { name: "California", code: "CA" },
  { name: "Texas", code: "TX" },
  { name: "Florida", code: "FL" },
  { name: "New York", code: "NY" },
  { name: "Pennsylvania", code: "PA" },
  { name: "Illinois", code: "IL" },
  { name: "Ohio", code: "OH" },
  { name: "Georgia", code: "GA" },
  { name: "North Carolina", code: "NC" },
  { name: "Michigan", code: "MI" },
  { name: "New Jersey", code: "NJ" },
  { name: "Virginia", code: "VA" },
  { name: "Washington", code: "WA" },
  { name: "Arizona", code: "AZ" },
  { name: "Massachusetts", code: "MA" },
  { name: "Tennessee", code: "TN" },
  { name: "Indiana", code: "IN" },
  { name: "Missouri", code: "MO" },
  { name: "Maryland", code: "MD" },
  { name: "Wisconsin", code: "WI" },
  { name: "Colorado", code: "CO" },
  { name: "Minnesota", code: "MN" },
  { name: "South Carolina", code: "SC" },
  { name: "Alabama", code: "AL" },
  { name: "Louisiana", code: "LA" },
  { name: "Kentucky", code: "KY" },
  { name: "Oregon", code: "OR" },
  { name: "Oklahoma", code: "OK" },
  { name: "Connecticut", code: "CT" },
  { name: "Utah", code: "UT" },
  { name: "Nevada", code: "NV"}
];

const Map = () => {
  return (
    <Container fluid className="map-block">
      <Container>
        <Row>
          <Col md={4}>
            <Container className="map-text d-flex flex-column justify-content-center">
              <h3 className="my-4">
                Global Manufacturing at Your Fingertips: Digital, Decentralized,
                On-Demand
              </h3>
              <p>
                Welcome to the future of manufacturing. Our platform connects
                you to a vast, decentralized network of top-tier manufacturers
                around the globe. With just a few clicks, you can access a world
                of possibilities, sourcing precisely what you need, when you
                need it, without geographical constraints. Our digital interface
                makes it simple to navigate, ensuring a seamless process from
                initial quote to final delivery. Experience unmatched efficiency
                and quality, all managed through our cutting-edge, user-friendly
                platform.
              </p>
            </Container>
          </Col>
          <Col md={8}>
            <Container className="mb-4">
              <ComposableMap
                projectionConfig={{
                  scale: 160,
                  center: [0, 20],
                }}
                width={800}
                height={450}
                projection="geoEqualEarth"
              >
                <Geographies geography={worldData}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#EAEAEC"
                        stroke="#F9F9FC"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>
                <Geographies geography={usStateData}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={
                          top30States.some(
                            (state) => state.name === geo.properties.name
                          )
                            ? "#1c85e9"
                            : "#EAEAEC"
                        }
                        stroke="#F9F9FC"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>
                <Geographies geography={indiaStateData}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={
                          indiaStates.some(
                            (state) => state.name === geo.properties.name
                          )
                            ? "#1c85e9"
                            : "#EAEAEC"
                        }
                        stroke="#F9F9FC"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>
                <Geographies geography={chinaProvincesData}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={
                          chinaProvinces.some(
                            (state) => state.name === geo.properties.name
                          )
                            ? "#1c85e9"
                            : "#EAEAEC"
                        }
                        stroke="#F9F9FC"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>
              </ComposableMap>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Map;
