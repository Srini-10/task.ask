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
  const arithmeticAptitudeTextList = [
    "Arithmetic Operations",
    "Number Systems",
    "Percentages",
    "Ratio and Proportion",
    "Time and Work",
    "Time, Speed, and Distance",
    "Profit and Loss",
    "Simple and Compound Interest",
    "Averages",
    "Ages",
    "Mixtures and Alligations",
  ];

  const dataInterpretationTextList = [
    "Tables",
    "Bar Graphs",
    "Line Graphs",
    "Pie Charts",
    "Caselets",
    "Data Sufficiency",
    "Data Comparison",
    "Missing Data Interpretation",
    "Visual Reasoning",
  ];

  const onlineAptitudeTestTextList = [
    "Verbal Reasoning",
    "Non-Verbal Reasoning",
    "Logical Reasoning",
    "Quantitative Aptitude",
    "Abstract Reasoning",
    "Analytical Reasoning",
    "Numerical Reasoning",
    "Inductive Reasoning",
    "Deductive Reasoning",
  ];

  const dataInterpretationTestTextList = [
    "Data Analysis",
    "Statistical Analysis",
    "Data Visualization",
    "Interpretation Techniques",
    "Problem Solving with Data",
    "Pattern Recognition",
    "Information Extraction",
    "Decision Making with Data",
    "Predictive Analytics",
  ];

  const filteredArithmeticAptitudeTextList = arithmeticAptitudeTextList.filter(
    (line) => line.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredDataInterpretationTextList = dataInterpretationTextList.filter(
    (line) => line.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredOnlineAptitudeTestTextList = onlineAptitudeTestTextList.filter(
    (line) => line.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredDataInterpretationTestTextList =
    dataInterpretationTestTextList.filter((line) =>
      line.toLowerCase().includes(searchText.toLowerCase())
    );

  return [
    {
      key: "1",
      label: (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Arithmetic Aptitude</span>
          <span style={{ color: "lightgray" }}>
            {filteredArithmeticAptitudeTextList.length}
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
            {filteredArithmeticAptitudeTextList.map((item, index) => (
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
                  to={`/ArithmeticAptitude/${encodeURIComponent(
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
          <span>Data Interpretation</span>
          <span style={{ color: "lightgray" }}>
            {filteredDataInterpretationTextList.length}
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
            {filteredDataInterpretationTextList.map((item, index) => (
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
                  to={`/DataInterpretation/${encodeURIComponent(
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
          <span>Online Aptitude Test</span>
          <span style={{ color: "lightgray" }}>
            {filteredOnlineAptitudeTestTextList.length}
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
            {filteredOnlineAptitudeTestTextList.map((item, index) => (
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
                  to={`/OnlineAptitudeTest/${encodeURIComponent(
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
          <span>Data Interpretation Test</span>
          <span style={{ color: "lightgray" }}>
            {filteredDataInterpretationTestTextList.length}
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
            {filteredDataInterpretationTestTextList.map((item, index) => (
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
                  to={`/DataInterpretationTest/${encodeURIComponent(
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

function GeneralAptitude() {
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
          General Aptitude
        </h1>
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

export default GeneralAptitude;
