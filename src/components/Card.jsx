import React from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";
import Menu from "./UI/Menu";

const Card = ({
  name,
  service,
  title,
  image,
  description,
  services,
  price,
  button,
  link,
  border,
  duration,
  addon
}) => {
  return (
    <div
      className={`w-full flex flex-col items-center mx-auto text-black ${border} border-gray rounded-sm`}
    >
      {name && <h3 className=" text-center py-6">{name}</h3>}
      {service && (
        <div className="w-full">
          <Menu service={service} card={true} />
        </div>
      )}
      {image && (
        <img
          className="w-full max-w-xl  align-start mb-3 p-4 rounded-sm overflow-hidden"
          src={image}
          alt="Car wash"
        />
      )}
      <h5 className="max-w-xl text-center">{title}</h5>
      {description && (
        <div className="flex flex-col w-full max-w-xl px-4 text-sm whitespace-pre-wrap">
          <p className="">{description}</p>
        </div>
      )}
      {services && (
        <div className="flex flex-col justify-between items-center w-full max-w-xl my-5 h-full px-4">
          <ul className="h-full">
            {services.map((service, index) => (
              <li
                key={index}
                className="text-start text-sm list-none p-[2px] whitespace-pre-wrap"
              >
                {service}
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
      {duration && (
        <div className="text-center text-sm mt-2 p-4">{duration}</div>
      )}
      {button && (
        <div className="mb-10 mt-4 flex justify-center items-end w-[100%] px-4">
          <Link
            className="w-[80%] flex justify-center items-center"
            preventScrollReset={false}
            to={`${link}`}
          >
            <Button children={button} color={"secondary"} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
