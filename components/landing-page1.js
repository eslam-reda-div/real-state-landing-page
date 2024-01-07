import { memo } from "react";
import "antd/dist/antd.min.css";
import { Button } from "@mui/material";
import { Dropdown, Menu, Button as AntButton } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Header from "./header";
import PropertiesByAreaContainer from "./properties-by-area-container";
import CardWithInputs from "./card-with-inputs";
import RentPropertiesContainer from "./rent-properties-container";
import ContainerCardFormFilter from "./container-card-form-filter";

const LandingPage1 = memo(() => {
  return (
    <main className="bg-gray-white w-[1920px] h-[5096px] flex flex-col items-center justify-start text-center text-21xl text-primary-800 font-body-regular-600">
      <Header imageCode="/houseline.svg" hamburger nameObjectFit="unset" />
      <section className="self-stretch flex flex-col items-center justify-start py-[120px] px-[30px] bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
        <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[72px] font-semibold font-inherit">
              Find Your Dream Home
            </h1>
            <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <form className="m-0 self-stretch flex flex-col items-center justify-start gap-[17px]">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <button
                className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start"
                autoFocus={true}
                disabled={false}
              >
                <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
                  Rent
                </div>
              </button>
              <Button color="primary" size="medium" variant="contained">
                Sale
              </Button>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
              <nav className="m-0 flex-1 rounded-lg bg-gray-white shrink-0 flex flex-row items-center justify-between py-8 px-[62px] box-border max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
                <div className="w-[137px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-primary-700 text-center">
                    Locations
                  </div>
                  <Dropdown
                    overlay={
                      <Menu>
                        {[
                          { value: "New York" },
                          { value: "Los Angeles" },
                          { value: "Chicago" },
                          { value: "Berlin" },
                        ].map((option, index) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select your city `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
                <div className="w-[177px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-primary-700 text-left flex items-end w-[150px]">
                    Property Type
                  </div>
                  <Dropdown
                    className="self-stretch"
                    overlay={
                      <Menu>
                        {[
                          { value: "Studio apartments" },
                          { value: "One-bedroom apartments" },
                          { value: "Two-bedroom apartments" },
                          { value: "Three-bedroom apartments" },
                          { value: "Four or more bedroom apartments/houses" },
                        ].map((option, index) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select property type `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
                <div className="w-[155px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-primary-700 text-left flex items-end w-[150px]">
                    Rent Range
                  </div>
                  <Dropdown
                    className="self-stretch"
                    overlay={
                      <Menu>
                        {[
                          { value: "$500-$2000" },
                          { value: "$2500-$10000" },
                          { value: "$10000+" },
                        ].map((option, index) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select rent range `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
                <AntButton
                  size="middle"
                  shape="default"
                  style={{ width: "102px" }}
                  type="primary"
                >
                  Search
                </AntButton>
              </nav>
            </div>
          </form>
        </div>
      </section>
      <div className="self-stretch flex-1 flex flex-col items-center justify-start py-[53px] px-[50px] gap-[45px]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] gap-[24px] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Properties by Area
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-center py-0 px-2.5 box-border max-w-[95%] text-left text-5xl text-gray-white">
          <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
            <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
              <a
                className="[text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-1@3x.png')] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
                target="_blank"
              >
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </a>
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-2@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-3@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start p-2.5 box-border relative bg-[url('/card-4@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Arlington
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start p-2.5 box-border relative bg-[url('/card-5@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PropertiesByAreaContainer
        imageId="/icon@2x.png"
        propFlex="unset"
        propFlexShrink="0"
        propFlexShrink1="0"
        propFlex1="unset"
        propWidth="312px"
        propFlex2="unset"
        propFlexShrink2="0"
        propFlexShrink3="0"
        propFlex3="unset"
        propWidth1="312px"
      />
      <form className="m-0 w-[1920px] flex flex-col items-center justify-start py-[86px] px-0 box-border gap-[39px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%] md:pl-[60px] md:pr-[60px] md:box-border">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%] lg:max-w-[95%] md:self-stretch md:w-auto">
            <div className="self-stretch relative text-21xl leading-[48px] font-semibold font-body-regular-600 text-primary-800 text-center">
              Latest Properties of Rent
            </div>
            <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-lightslategray text-center">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-2.5 gap-[32px]">
            <CardWithInputs imageDimensions="/property-image@2x.png" />
            <CardWithInputs imageDimensions="/property-image@2x.png" />
            <CardWithInputs imageDimensions="/property-image@2x.png" />
            <CardWithInputs imageDimensions="/property-image@2x.png" />
          </div>
        </div>
        <Button color="primary" size="medium" variant="contained">
          Load more listing
        </Button>
      </form>
      <div className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px]">
        <RentPropertiesContainer />
        <Button color="primary" size="medium" variant="contained">
          Load more listing
        </Button>
      </div>
      <div className="self-stretch bg-primary-50 flex flex-row flex-wrap items-start justify-center py-[86px] px-[5px]">
        <div className="flex-1 flex flex-col items-center justify-start py-0 px-2.5 box-border gap-[40px] max-w-[900px]">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%] lg:max-w-[95%] md:self-stretch md:w-auto">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Contact us
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-gray-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-7 px-[30px] gap-[17px] text-left text-5xl text-darkslategray font-poppins">
            <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
              <b className="self-stretch relative leading-[36px]">
                Enquiry Form
              </b>
              <div className="self-stretch relative text-lg leading-[30px] font-components-input-text text-slategray">
                Are you looking for details about a certain property? Ask us a
                question using the form below.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[10px] text-base text-darkgray font-components-input-text">
              <div className="self-stretch flex flex-row items-start justify-center gap-[10px] md:flex-col md:gap-[10px] md:items-start md:justify-center">
                <div className="self-stretch flex-1 rounded flex flex-col items-start justify-start py-4 px-3 border-[1px] border-solid border-gray1 md:flex-[unset] md:self-stretch">
                  <div className="relative tracking-[0.15px] leading-[24px]">
                    First name
                  </div>
                </div>
                <div className="self-stretch flex-1 rounded flex flex-col items-start justify-center py-4 px-3 border-[1px] border-solid border-gray1 md:flex-[unset] md:self-stretch">
                  <div className="relative tracking-[0.15px] leading-[24px]">
                    Last name
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded flex flex-col items-start justify-start py-4 px-3 border-[1px] border-solid border-gray1">
                <div className="relative tracking-[0.15px] leading-[24px]">
                  Email id
                </div>
              </div>
              <div className="self-stretch rounded box-border h-[105px] flex flex-col items-start justify-start p-3 border-[1px] border-solid border-gray1">
                <div className="relative tracking-[0.15px] leading-[24px]">
                  Comments or questions
                </div>
              </div>
              <Button
                sx={{ width: 222 }}
                color="primary"
                size="medium"
                variant="contained"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ContainerCardFormFilter
        imageDimensions="/houseline@2x.png"
        dimensionText="/social-media-logo@2x.png"
        imageDimensionsText="/social-media-logo@2x.png"
        imageDimensionsId="/social-media-logo@2x.png"
        imageDimensionsCode="/social-media-logo@2x.png"
        imageDimensionsTextId="/social-media-logo@2x.png"
        propOverflow="unset"
      />
    </main>
  );
});

export default LandingPage1;
