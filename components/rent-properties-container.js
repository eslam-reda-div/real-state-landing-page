import { memo } from "react";

const RentPropertiesContainer = memo(() => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%] lg:max-w-[95%] md:self-stretch md:w-auto">
        <div className="self-stretch relative leading-[48px] font-semibold">
          Latest Properties of Rent
        </div>
        <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] text-left text-base text-gray-white">
        <div className="flex-1 rounded-md h-[426px] flex flex-col items-center justify-end p-6 box-border bg-[url('/card-11@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px]">
          <div className="self-stretch h-6 flex flex-row items-end justify-center gap-[32px]">
            <div className="flex flex-row items-start justify-end gap-[8px]">
              <img
                className="relative w-6 h-6 object-cover"
                alt=""
                src="/mappin@2x.png"
              />
              <div className="relative leading-[24px] font-medium">
                Washington
              </div>
            </div>
            <div className="flex flex-row items-start justify-end gap-[8px]">
              <img
                className="relative w-6 h-6 object-cover"
                alt=""
                src="/arrowsout@2x.png"
              />
              <div className="relative leading-[24px] font-medium">12000</div>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-md h-[426px] flex flex-col items-center justify-end p-6 box-border bg-[url('/card-21@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px]">
          <div className="self-stretch h-6 flex flex-row items-end justify-center gap-[32px]">
            <div className="flex flex-row items-start justify-end gap-[8px]">
              <img
                className="relative w-6 h-6 object-cover"
                alt=""
                src="/mappin@2x.png"
              />
              <div className="relative leading-[24px] font-medium">
                Washington
              </div>
            </div>
            <div className="flex flex-row items-start justify-end gap-[8px]">
              <img
                className="relative w-6 h-6 object-cover"
                alt=""
                src="/arrowsout@2x.png"
              />
              <div className="relative leading-[24px] font-medium">12000</div>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-md h-[426px] flex flex-col items-center justify-end p-6 box-border bg-[url('/card-31@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px]">
          <div className="self-stretch h-6 flex flex-row items-end justify-center gap-[32px]">
            <div className="flex flex-row items-start justify-end gap-[8px]">
              <img
                className="relative w-6 h-6 object-cover"
                alt=""
                src="/mappin@2x.png"
              />
              <div className="relative leading-[24px] font-medium">
                Washington
              </div>
            </div>
            <div className="flex flex-row items-start justify-end gap-[8px]">
              <img
                className="relative w-6 h-6 object-cover"
                alt=""
                src="/arrowsout@2x.png"
              />
              <div className="relative leading-[24px] font-medium">12000</div>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-md h-[426px] flex flex-col items-center justify-end p-6 box-border bg-[url('/card-41@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px]">
          <div className="self-stretch h-6 flex flex-row items-end justify-center gap-[32px]">
            <div className="flex flex-row items-start justify-end gap-[8px]">
              <img
                className="relative w-6 h-6 object-cover"
                alt=""
                src="/mappin@2x.png"
              />
              <div className="relative leading-[24px] font-medium">
                Washington
              </div>
            </div>
            <div className="flex flex-row items-start justify-end gap-[8px]">
              <img
                className="relative w-6 h-6 object-cover"
                alt=""
                src="/arrowsout@2x.png"
              />
              <div className="relative leading-[24px] font-medium">12000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default RentPropertiesContainer;
