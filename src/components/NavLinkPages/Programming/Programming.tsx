import React, { useState } from "react";
import type { CSSProperties } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse, Input, theme } from "antd";
import { ReactComponent as SvgIcon } from "../../../assets/Question.svg";
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

  const javaTextList = [
    "Java Basics",
    "OOP Concepts",
    "Exception Handling",
    "Collections Framework",
    "Concurrency",
    "Generics",
    "Lambda Expressions",
    "Stream API",
    "File I/O (NIO)",
    "Memory Management",
  ];

  const jsTextList = [
    "JavaScript Basics",
    "DOM Manipulation",
    "Event Handling",
    "ES6 Features",
    "Async Programming",
    "Promises and Async/Await",
    "Modules",
    "Error Handling",
    "Closures",
    "Prototype Chain",
  ];

  const dotNetTextList = [
    ".NET Framework",
    "C# Basics",
    "ASP.NET MVC",
    "Entity Framework",
    "LINQ",
    "Asynchronous Programming",
    "Delegates and Events",
    "Memory Management",
    "Web API",
    "SignalR",
  ];

  const filteredCTextList = cTextList.filter((line) =>
    line.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredCppTextList = cppTextList.filter((line) =>
    line.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredJavaTextList = javaTextList.filter((line) =>
    line.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredJsTextList = jsTextList.filter((line) =>
    line.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredDotNetTextList = dotNetTextList.filter((line) =>
    line.toLowerCase().includes(searchText.toLowerCase())
  );

  return [
    {
      key: "1",
      label: (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>C</span>
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
                  to={`/c++/${encodeURIComponent(
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
      key: "3",
      label: (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Java</span>
          <span style={{ color: "lightgray" }}>
            {filteredJavaTextList.length}
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
            {filteredJavaTextList.map((item, index) => (
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
                  to={`/java/${encodeURIComponent(
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
      key: "4",
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
    {
      key: "5",
      label: (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>DotNet</span>
          <span style={{ color: "lightgray" }}>
            {filteredDotNetTextList.length}
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
            {filteredDotNetTextList.map((item, index) => (
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
                  to={`/dotnet/${encodeURIComponent(
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

function Programming() {
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
        <h1 className="text-[33px] mb-5 Text-Blue font-semibold">
          Programming
        </h1>
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

export default Programming;
