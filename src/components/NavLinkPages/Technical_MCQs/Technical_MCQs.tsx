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
  const networkingTextList = [
    "TCP/IP Protocol Suite",
    "Routing Algorithms",
    "Network Security",
    "Wireless Networks",
    "Network Management",
    "Internet of Things (IoT)",
    "Cloud Computing",
    "Virtual Private Networks (VPN)",
    "Network Programming",
    "Network Troubleshooting",
  ];

  const databaseTextList = [
    "Relational Databases",
    "SQL Basics",
    "Database Design",
    "Normalization",
    "Transactions",
    "Indexing",
    "NoSQL Databases",
    "Big Data",
    "Data Warehousing",
    "Database Administration",
  ];

  const cybersecurityTextList = [
    "Cyber Threats and Attacks",
    "Encryption Techniques",
    "Firewall Technologies",
    "Intrusion Detection Systems (IDS)",
    "Risk Assessment",
    "Digital Forensics",
    "Network Security Protocols",
    "Penetration Testing",
    "Security Policies and Procedures",
    "Cybersecurity Laws and Regulations",
  ];

  const cryptographyTextList = [
    "Symmetric Encryption",
    "Public Key Infrastructure (PKI)",
    "Digital Signatures",
    "Hash Functions",
    "Cryptographic Protocols",
    "Cryptanalysis",
    "Quantum Cryptography",
    "Blockchain Security",
    "Cryptographic Key Management",
    "Cryptocurrency Security",
  ];

  const filteredNetworkingTextList = networkingTextList.filter((line) =>
    line.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredDatabaseTextList = databaseTextList.filter((line) =>
    line.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredCybersecurityTextList = cybersecurityTextList.filter((line) =>
    line.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredCryptographyTextList = cryptographyTextList.filter((line) =>
    line.toLowerCase().includes(searchText.toLowerCase())
  );

  return [
    {
      key: "1",
      label: (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Networking</span>
          <span style={{ color: "lightgray" }}>
            {filteredNetworkingTextList.length}
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
            {filteredNetworkingTextList.map((item, index) => (
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
                  to={`/Networking/${encodeURIComponent(
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
          <span>Database</span>
          <span style={{ color: "lightgray" }}>
            {filteredDatabaseTextList.length}
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
            {filteredDatabaseTextList.map((item, index) => (
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
                  to={`/Database/${encodeURIComponent(
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
          <span>Cyber Security</span>
          <span style={{ color: "lightgray" }}>
            {filteredCybersecurityTextList.length}
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
            {filteredCybersecurityTextList.map((item, index) => (
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
                  to={`/CyberSecurity/${encodeURIComponent(
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
          <span>Cryptography</span>
          <span style={{ color: "lightgray" }}>
            {filteredCryptographyTextList.length}
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
            {filteredCryptographyTextList.map((item, index) => (
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
                  to={`/Cryptography/${encodeURIComponent(
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

function TechnicalMCQs() {
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
          TechnicalMCQs
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

export default TechnicalMCQs;
