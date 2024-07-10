import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SvgIcon } from "../../assets/Question.svg";
import { ContainerContext } from "../../context/ContainerContext.tsx";

const Assessment = () => {
  const { containers } = useContext(ContainerContext);

  return (
    <>
      <div className="home-container min-w-full min-h-full mt-[68px]">
        <div className="grid grid-cols-3 grid-row-5 gap-5">
          {containers.map((container, index) => (
            <div
              key={index}
              className="Containers min-w-[300px] shadow-sm border-[1px] p-4 min-h-[200px]"
            >
              <h1 className="font-semibold Text-Blue text-[20px]">
                {container.title}
              </h1>
              <ul className="text-[13px] mt-3 grid grid-cols-1 leading-6 ml-2">
                {container.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="Text-Gray items-center flex">
                    <SvgIcon
                      style={{
                        marginRight: "6px",
                        width: "16px",
                        height: "16px",
                      }}
                    />
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Assessment;
