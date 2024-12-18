import React from "react";
import BookButtons from "./UI/BookButtons";
import Menu from "./UI/Menu";

const Card = ({
  type,
  service,
  title,
  image,
  alt,
  description,
  services,
  price,
  button,
  link,
  bestValue,
  singleService,
  exteriorServices,
  interiorServices,
}) => {
  return (
    <div
      className={`mb-10 pb-5 w-full mx-auto text-black border border-gray rounded-md`}
    >
      <div
        className={`flex items-center justify-center rounded-t-md ${
          bestValue ? "bg-black py-5 mb-5" : "pt-5"
        }`}
      >
        <p className="text-lg font-medium text-white animate-pulse ">
          {bestValue}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-between items-start w-full">
        <div>
          <div className="flex flex-col items-center justify-end">
            {title && <h3 className=" text-center py-1">{title}</h3>}
            {type && <h6 className="max-w-xl text-center pb-3">{type}</h6>}
          </div>

          <div
            className={`grid grid-cols-1 ${
              image ? "content-start h-full" : ""
            } items-center w-full max-w-xl`}
          >
            {singleService && image && (
              <img
                loading="lazy"
                className="w-full max-w-xl align-start mb-3 px-4 py-1 rounded-sm overflow-hidden"
                src={image}
                alt={alt}
              />
            )}
            {description && (
              <div className="flex flex-col max-w-xl w-full px-4 pb-2 sm:pb-5sm md:text-base whitespace-pre-wrap">
                <p>{description}</p>
              </div>
            )}
          </div>
          {service && (
            <div className="w-full px-4 max-w-xl">
              <Menu service={service} card={true} />
            </div>
          )}
        </div>
        <div>
          {services && (
            <div className="flex flex-col justify-between w-full max-w-xl h-full px-4">
              <div className="hidden sm:block sm:h-[75px]"></div>
              <ul className="h-full">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="text-start text-sm md:text-base list-none p-[2px] whitespace-pre-wrap"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {exteriorServices && (
            <div className="flex flex-col justify-between w-full max-w-xl h-full px-4">
              <div className="hidden sm:block sm:h-[75px]"></div>
              <h4 className="mb-1 p-0">Exterior</h4>
              <ul className="h-full">
                {exteriorServices.map((service, index) => (
                  <li
                    key={index}
                    className="text-start text-sm md:text-base p-[2px] whitespace-pre-wrap"
                  >
                    {service.bold ? (
                      <strong>
                        {index + 1}. {service.text}
                      </strong>
                    ) : (
                      <>
                        {index + 1}. {service.text}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {interiorServices && (
            <div className="flex flex-col justify-between w-full max-w-xl h-full px-4">
              {exteriorServices ? (
                <>
                  <div className="hidden sm:block sm:h-[0px]"></div>
                  <h4 className="p-0 mb-1 mt-5">Interior</h4>
                </>
              ) : (
                <>
                  <div className="hidden sm:block sm:h-[75px]"></div>
                  <h4 className="p-0 mb-1">Interior</h4>
                </>
              )}
              <ul className="h-full">
                {interiorServices.map((service, index) => (
                  <li
                    key={index}
                    className="text-start text-sm md:text-base p-[2px] whitespace-pre-wrap"
                  >
                    {service.bold ? (
                      <strong>
                        {index + 1}. {service.text}
                      </strong>
                    ) : (
                      <>
                        {index + 1}. {service.text}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {price && (
            <div className="flex justify-center items-end w-full">
              <h4 className="p-5"> {price}</h4>
            </div>
          )}

          {singleService && (
            <div className="text-center sm:text-start text-sm md:text-base mt-2 p-4">
              {service.title !== "Ceramic Coating"
                ? "*Pricing for this service is based on vehicles in average condition. Additional services may be required. Examples include pet hair/sand, staining, excessive messes, etc."
                : ""}
            </div>
          )}
          <BookButtons color={"secondary"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
