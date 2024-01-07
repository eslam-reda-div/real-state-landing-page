import { memo, useMemo } from "react";

const PropertiesByAreaContainer = memo(
  ({
    imageId,
    propFlex,
    propFlexShrink,
    propFlexShrink1,
    propFlex1,
    propWidth,
    propFlex2,
    propFlexShrink2,
    propFlexShrink3,
    propFlex3,
    propWidth1,
  }) => {
    const sellYourHomeStyle = useMemo(() => {
      return {
        flex: propFlex,
        flexShrink: propFlexShrink,
      };
    }, [propFlex, propFlexShrink]);

    const contentsStyle = useMemo(() => {
      return {
        flexShrink: propFlexShrink1,
      };
    }, [propFlexShrink1]);

    const rentYourHomeStyle = useMemo(() => {
      return {
        flex: propFlex1,
        width: propWidth,
      };
    }, [propFlex1, propWidth]);

    const buyAHomeStyle = useMemo(() => {
      return {
        flex: propFlex2,
        flexShrink: propFlexShrink2,
      };
    }, [propFlex2, propFlexShrink2]);

    const contents1Style = useMemo(() => {
      return {
        flexShrink: propFlexShrink3,
      };
    }, [propFlexShrink3]);

    const freeMarketingStyle = useMemo(() => {
      return {
        flex: propFlex3,
        width: propWidth1,
      };
    }, [propFlex3, propWidth1]);

    return (
      <div className="self-stretch bg-primary-50 flex flex-col items-center justify-start py-[70px] px-0 text-center text-21xl text-primary-800 font-body-regular-600">
        <div className=" m-auto self-stretch flex flex-col items-center justify-start pt-[75px] px-0 pb-0 box-border gap-[54px] max-w-[95%]">
          <div className=" self-stretch flex flex-col items-center justify-start py-0 px-[30px] box-border gap-[24px] max-w-[95%]">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Properties by Area
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-left text-base text-gray-700">
            <div
              className="flex-1 rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col items-start justify-start p-[22px] box-border min-w-[300px] max-w-[340px]"
              style={sellYourHomeStyle}
            >
              <div
                className="flex flex-col items-start justify-start gap-[24px]"
                style={contentsStyle}
              >
                <img
                  className="relative w-[78px] h-[78px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/icon@2x.png"
                />
                <div className="shrink-0 flex flex-col items-start justify-start gap-[24px]">
                  <div className="relative text-5xl leading-[32px] font-semibold text-center">
                    Sell your home
                  </div>
                  <div className="relative leading-[24px] text-lightslategray flex items-end w-[268px]">
                    We do a free evaluation to be sure you want to start
                    selling.
                  </div>
                  <div className="relative leading-[24px] text-primary-500">
                    Read more
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex-1 rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col items-start justify-start py-[22px] px-4 box-border min-w-[300px] max-w-[340px]"
              style={rentYourHomeStyle}
            >
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <img
                  className="relative w-[78px] h-[78px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/icon@2x.png"
                />
                <div className="shrink-0 flex flex-col items-start justify-start gap-[24px]">
                  <div className="relative text-5xl leading-[32px] font-semibold text-center">
                    Rent your home
                  </div>
                  <div className="relative leading-[24px] text-lightslategray flex items-end w-[268px]">
                    We do a free evaluation to be sure you want to start
                    selling.
                  </div>
                  <div className="relative leading-[24px] text-primary-500">
                    Read more
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex-1 rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col items-start justify-start p-[22px] box-border min-w-[300px] max-w-[340px]"
              style={buyAHomeStyle}
            >
              <div
                className="flex flex-col items-start justify-start gap-[24px]"
                style={contents1Style}
              >
                <img
                  className="relative w-[78px] h-[78px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src={imageId}
                />
                <div className="shrink-0 flex flex-col items-start justify-start gap-[24px]">
                  <div className="relative text-5xl leading-[32px] font-semibold text-center">
                    Buy a home
                  </div>
                  <div className="relative leading-[24px] text-lightslategray flex items-end w-[268px]">
                    We do a free evaluation to be sure you want to start
                    selling.
                  </div>
                  <div className="relative leading-[24px] text-primary-500">
                    Read more
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex-1 rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col items-start justify-start py-[22px] px-5 box-border min-w-[300px] max-w-[340px]"
              style={freeMarketingStyle}
            >
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <img
                  className="relative w-[78px] h-[78px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/icon@2x.png"
                />
                <div className="shrink-0 flex flex-col items-start justify-start gap-[24px]">
                  <div className="relative text-5xl leading-[32px] font-semibold text-center">
                    Free marketing
                  </div>
                  <div className="relative leading-[24px] text-lightslategray flex items-end w-[268px]">
                    We do a free evaluation to be sure you want to start
                    selling.
                  </div>
                  <div className="relative leading-[24px] text-primary-500">
                    Read more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default PropertiesByAreaContainer;
