import "antd/dist/antd.min.css";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Header from "../components/header";
import AddressContainer from "../components/address-container";
import ContainerCardFormFilter from "../components/container-card-form-filter";

const PropertiesGridView = () => {
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      <Header
        imageCode="/houseline@2x.png"
        hamburger={false}
        nameObjectFit="cover"
      />
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url('/category@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="relative leading-[72px] font-semibold">
            Properties
          </div>
          <div className="relative text-base leading-[24px] text-whitesmoke-200 font-body-regular-600">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start pt-16 px-0 pb-2 gap-[95px] text-left text-base text-gray-black font-body-regular-600 lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        <div className="w-[272px] flex flex-row items-center justify-start">
          <div className="shrink-0 flex flex-row items-end justify-start gap-[16px]">
            <div className="shrink-0 flex flex-row items-start justify-start gap-[8px]">
              <img
                className="relative w-6 h-6 object-cover"
                alt=""
                src="/listbullets@2x.png"
              />
              <img
                className="relative w-6 h-6 object-cover"
                alt=""
                src="/squaresfour@2x.png"
              />
            </div>
            <div className="relative leading-[24px]">Sort by:</div>
            <Dropdown
              overlay={
                <Menu>
                  {[
                    { value: "Popular properties" },
                    { value: "Latest properties" },
                    { value: "Recommended properties" },
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
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <AddressContainer />
        <div className="flex flex-row items-end justify-center gap-[8px] text-center text-primary-500">
          <div className="rounded bg-primary-50 shrink-0 flex flex-row items-start justify-start p-2.5">
            <img
              className="relative w-6 h-6 object-cover"
              alt=""
              src="/arrowleft@2x.png"
            />
          </div>
          <div className="rounded-10xs bg-primary-500 shrink-0 flex flex-col items-start justify-start py-2.5 px-[9px] text-gray-white">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              1
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 shrink-0 flex flex-col items-start justify-start py-2.5 px-[9px]">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              2
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 shrink-0 flex flex-col items-start justify-start py-2.5 px-[9px]">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              3
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 shrink-0 flex flex-col items-start justify-start py-2.5 px-[9px]">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              ...
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 shrink-0 flex flex-col items-start justify-start py-2.5 px-[9px]">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              54
            </div>
          </div>
          <div className="rounded bg-primary-500 shrink-0 flex flex-row items-start justify-start p-2.5">
            <img
              className="relative w-6 h-6 object-cover"
              alt=""
              src="/arrowright@2x.png"
            />
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
        propOverflow="hidden"
      />
    </div>
  );
};

export default PropertiesGridView;
