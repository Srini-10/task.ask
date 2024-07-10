import React, { useState } from "react";
import type { CSSProperties } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse, Input, theme } from "antd";
import { ReactComponent as SvgIcon } from "../../../../assets/Question.svg";
import { Link } from "react-router-dom";

const { Search } = Input;

const getItems = (
  panelStyle: CSSProperties,
  searchText: string,
  handleSearch: (value: string) => void
): CollapseProps["items"] => {
  const jsTextList = [
    "JavaScript Basics",
    "DOM Manipulation",
    "Event Handling",
    "ES6 Features",
    "Async JavaScriptProgramming",
    "Promises and Async/Await",
    "Modules",
    "Error Handling",
    "Closures",
    "Prototype Chain",
  ];

  const filteredJsTextList = jsTextList.filter((line) =>
    line.toLowerCase().includes(searchText.toLowerCase())
  );

  return [
    {
      key: "1",
      label: (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>JavaScript</span>
          <span style={{ color: "lightgray" }}>
            {filteredJsTextList.length}
          </span>
        </div>
      ),
      children: (
        <div>
          <Search
            placeholder="Search in expanded content"
            onSearch={handleSearch}
            onChange={(e) => handleSearch(e.target.value)}
            style={{ width: 300, marginBottom: 16 }}
          />
          <ul style={{ marginLeft: "20px" }}>
            {filteredJsTextList.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  lineHeight: "30px",
                }}
              >
                <SvgIcon
                  style={{ marginRight: "10px", width: "16px", height: "16px" }}
                />{" "}
                <Link
                  to={`/javascript/${encodeURIComponent(
                    item.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-")
                  )}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ),
      style: panelStyle,
    },
  ];
};

function JavaScriptProgramming() {
  const { token } = theme.useToken();
  const [searchText, setSearchText] = useState("");
  const [activePanel, setActivePanel] = useState<string[]>(["1"]);

  const panelStyle: React.CSSProperties = {
    marginBottom: 3,
    background: token.colorFillAlter,
    borderRadius: 4,
    border: "none",
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  return (
    <>
      <div className="mt-20">
        <h1 className="text-[33px] mb-5 Text-Blue font-semibold">JavaScript</h1>
        {/* <h1 className="text-[22px] text-black font-semibold">C and C++</h1> */}
        <div className="mt-2">
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            className=""
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            style={{ background: token.colorBgContainer }}
            items={getItems(panelStyle, searchText, handleSearch)}
            activeKey={activePanel}
            onChange={(key) => setActivePanel(key as string[])}
          />
        </div>
      </div>
    </>
  );
}

export default JavaScriptProgramming;
