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
  const cTextList = [
    "Declarations and Initializations",
    "Control Instructions",
    "Expressions",
    "Floating Point Issues",
    "Functions",
    "C Preprocessor",
    "Pointers",
    "Arrays",
    "Strings",
    "Structures, Unions, Enums",
    "Input / Output",
    "Command Line Arguments",
    "Bitwise Operators",
    "Typedef",
    "Const",
    "Memory Allocation",
    "Variable Number of Arguments",
    "Complicated Declarations",
    "Library Functions",
  ];

  const cppTextList = [
    "C++ Classes",
    "Object-Oriented Programming",
    "Inheritance",
    "Polymorphism",
    "Templates",
    "STL (Standard Template Library)",
    "Exception Handling",
    "File I/O",
    "Dynamic Memory Allocation",
    "Smart Pointers",
  ];

  const filteredCTextList = cTextList.filter((line) =>
    line.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredCppTextList = cppTextList.filter((line) =>
    line.toLowerCase().includes(searchText.toLowerCase())
  );

  return [
    {
      key: "1",
      label: (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>C Programming</span>
          <span style={{ color: "lightgray" }}>{filteredCTextList.length}</span>
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
            {filteredCTextList.map((item, index) => (
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
                  to={`/c-programming/${encodeURIComponent(
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
    {
      key: "2",
      label: (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>C++</span>
          <span style={{ color: "lightgray" }}>
            {filteredCppTextList.length}
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
            {filteredCppTextList.map((item, index) => (
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
                  to={`/${
                    item === "C++ Classes"
                      ? "C++/c++_classes"
                      : `C++/${encodeURIComponent(
                          item.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-")
                        )}`
                  }`}
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

function CProgrammingMain() {
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
        <h1 className="text-[33px] mb-5 Text-Blue font-semibold">C and C++</h1>
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

export default CProgrammingMain;
