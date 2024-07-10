// Home.js
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SvgIcon } from "../../assets/Question.svg";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-container min-w-full min-h-full mt-[68px]">
        <div className="grid grid-cols-3 grid-row-5 gap-5">
          <div className="Containers min-w-[300px] shadow-sm border-[1px] p-4 min-h-[200px]">
            <h1 className="font-semibold Text-Blue text-[20px]">Programming</h1>
            <ul className="text-[13px] mt-3 grid grid-cols-1 leading-6 ml-2">
              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/C_Programming"}>C and C++</Link>
              </li>

              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/Java_Programming"}>Java</Link>
              </li>

              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/Javascript"}>Javascript</Link>
              </li>

              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/DotNet"}>DotNet</Link>
              </li>
            </ul>
          </div>
          <div className="Containers min-w-[300px] shadow-sm border-[1px] p-4 min-h-[200px]">
            <h1 className="font-semibold Text-Blue text-[20px]">
              Technical MCQs
            </h1>
            <ul className="text-[13px] mt-3 grid grid-cols-1 leading-6 ml-2">
              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/Networking"}>Networking</Link>
              </li>

              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/Database"}>Database</Link>
              </li>

              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/CyberSecurity"}>Cyber Security</Link>
              </li>

              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/Cryptography"}>Cryptography</Link>
              </li>
            </ul>
          </div>
          <div className="Containers min-w-[300px] shadow-sm border-[1px] p-4 min-h-[200px]">
            <h1 className="font-semibold Text-Blue text-[20px]">
              General Knowledge
            </h1>
            <ul className="text-[13px] mt-3 grid grid-cols-1 leading-6 ml-2">
              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/BasicGeneralKnowledge"}>
                  Basic General Knowledge
                </Link>
              </li>

              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/GK_Technology"}>Technology</Link>
              </li>

              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/Programming_GK"}>Programming</Link>
              </li>

              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/Hardwares"}>Hardwares</Link>
              </li>
            </ul>
          </div>
          <div className="Containers min-w-[300px] shadow-sm border-[1px] p-4 min-h-[200px]">
            <h1 className="font-semibold Text-Blue text-[20px]">
              General Aptitude
            </h1>
            <ul className="text-[13px] mt-3 grid grid-cols-1 leading-6 ml-2">
              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/ArithmeticAptitude"}>Arithmetic Aptitude</Link>
              </li>

              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/DataInterpretation"}>Data Interpretation</Link>
              </li>

              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/OnlineAptitudeTest"}>Online Aptitude Test</Link>
              </li>

              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"DataInterpretationTest"}>
                  Data Interpretation Test
                </Link>
              </li>
            </ul>
          </div>
          <div className="Containers min-w-[300px] shadow-sm border-[1px] p-4 min-h-[200px]">
            <h1 className="font-semibold Text-Blue text-[20px]">Online Test</h1>
            <ul className="text-[13px] mt-3 grid grid-cols-1 leading-6 ml-2">
              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/AptitudeTest"}>Aptitude Test</Link>
              </li>

              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/VerbalAbilityTest"}>Verbal Ability Test</Link>
              </li>

              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/LogicalReasoningTest"}>Logical Reasoning Test</Link>
              </li>

              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/ProgrammingTest"}>Programming Test</Link>
              </li>
            </ul>
          </div>
          <div className="Containers min-w-[300px] shadow-sm border-[1px] p-4 min-h-[200px]">
            <h1 className="font-semibold Text-Blue text-[20px]">
              Verbal and Reasoning
            </h1>
            <ul className="text-[13px] mt-3 grid grid-cols-1 leading-6 ml-2">
              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/VerbalAbility"}>Verbal Ability</Link>
              </li>

              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/LogicalReasoning"}>Logical Reasoning</Link>
              </li>

              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/VerbalReasoning"}>Verbal Reasoning</Link>
              </li>

              <li className="Text-Gray items-center flex">
                <SvgIcon
                  style={{ marginRight: "6px", width: "16px", height: "16px" }}
                />
                <Link to={"/NonVerbalReasoning"}>Non Verbal Reasoning</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
