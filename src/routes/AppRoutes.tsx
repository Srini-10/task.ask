// src/Routes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Navbar Link Pages
import Login from "../pages/Auth/Login.tsx";
import Logout from "../pages/Auth/Logout.tsx";
import Programming from "../components/NavLinkPages/Programming/Programming.tsx";
import CProgramming from "../components/NavLinkPages/Programming/Languages/CProgramming.tsx";
import JavaProgramming from "../components/NavLinkPages/Programming/Languages/JavaProgramming.tsx";
import JavaScriptProgramming from "../components/NavLinkPages/Programming/Languages/JavaScriptProgramming.tsx";
import DotNetProgramming from "../components/NavLinkPages/Programming/Languages/DotNetProgramming.tsx";
import TechnicalMCQs from "../components/NavLinkPages/Technical_MCQs/Technical_MCQs.tsx";
import GeneralAptitude from "../components/NavLinkPages/General_Aptitude/General_Aptitude.tsx";
import GeneralKnowledge from "../components/NavLinkPages/General_Knowledge/General_Knowledge.tsx";
import OnlineTest from "../components/NavLinkPages/Online_Test/Online_Test.tsx";
import VerbalAndReasoning from "../components/NavLinkPages/Verbal_and_Reasoning/Verbal_and_Reasoning.tsx";
import Cryptography from "../components/NavLinkPages/Technical_MCQs/Languages/Cryptography.tsx";
import CyberSecurity from "../components/NavLinkPages/Technical_MCQs/Languages/Cyber_Security.tsx";
import Database from "../components/NavLinkPages/Technical_MCQs/Languages/Database.tsx";
import Networking from "../components/NavLinkPages/Technical_MCQs/Languages/Networking.tsx";
import ArithmeticAptitude from "../components/NavLinkPages/General_Aptitude/Languages/Arithmetic_Aptitude.tsx";
import DataInterpretation from "../components/NavLinkPages/General_Aptitude/Languages/Data_Interpretation.tsx";
import DataInterpretationTest from "../components/NavLinkPages/General_Aptitude/Languages/Data_Interpretation_Test.tsx";
import OnlineAptitudeTest from "../components/NavLinkPages/General_Aptitude/Languages/Online_Aptitude_Test.tsx";
import BasicGeneralKnowledge from "../components/NavLinkPages/General_Knowledge/Languages/Basic_General_Knowledge.tsx";
import ProgrammingGK from "../components/NavLinkPages/General_Knowledge/Languages/ProgrammingGK.tsx";
import Hardwares from "../components/NavLinkPages/General_Knowledge/Languages/Hardwares.tsx";
import Technology from "../components/NavLinkPages/General_Knowledge/Languages/Technology.tsx";
import AptitudeTest from "../components/NavLinkPages/Online_Test/Languages/Aptitude_Test.tsx";
import LogicalReasoningTest from "../components/NavLinkPages/Online_Test/Languages/Logical_Reasoning_Test.tsx";
import ProgrammingTest from "../components/NavLinkPages/Online_Test/Languages/Programming_Test.tsx";
import VerbalAbilityTest from "../components/NavLinkPages/Online_Test/Languages/Verbal_Ability_Test.tsx";
import LogicalReasoning from "../components/NavLinkPages/Verbal_and_Reasoning/Languages/Logical_Reasoning.tsx";
import NonVerbalReasoning from "../components/NavLinkPages/Verbal_and_Reasoning/Languages/Non_Verbal_Reasoning.tsx";
import VerbalAbility from "../components/NavLinkPages/Verbal_and_Reasoning/Languages/Verbal_Ability.tsx";
import VerbalReasoning from "../components/NavLinkPages/Verbal_and_Reasoning/Languages/Verbal_Reasoning.tsx";
import QuestionComponent from "../components/Questions/Question.tsx";
import Home from "../pages/Home/Home.tsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.tsx";
import Assessment from "../components/Assessment/Assessment.tsx";
import Dashboard from "../components/Dashboard/Dashboard.tsx";
import { ContainerProvider } from "../context/ContainerContext.tsx";
// import TopicsPage from "../components/Dashboard/TopicsPage.tsx";
// import QuestionPage from "../components/Dashboard/QuestionPage.tsx";

// import AddTopicsPage from "../components/Dashboard/AddTopicsPage.tsx";
import AddQuestionsPage from "../components/Dashboard/AddQuestionsPage.tsx";
import { TopicProvider } from "../context/TopicContext.tsx";
import TopicsPage from "../components/Dashboard/TopicsPage.tsx";
import TopicDetails from "../components/Dashboard/TopicDetails.tsx";

const AppRoutes = () => {
  return (
    <ContainerProvider>
      <TopicProvider>
        <Routes>
          <Route path="/" element={<TopicsPage />} />
          <Route path="/dashboard/:topicName" component={TopicDetails} />
          {/* <Route path="/" element={<TopicsPage />} />
          <Route path="/topic/:topicId" element={<AddQuestionsPage />} /> */}

          <Route path="/" element={<Home />} />
          <Route path="/Assessment" element={<Assessment />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/C_Programming" element={<Assessment />} />
          <Route path="/Java_Programming" element={<Assessment />} />
          <Route path="/Javascript" element={<Assessment />} />
          <Route path="/DotNet" element={<Assessment />} />
          <Route path="/Networking" element={<Assessment />} />
          <Route path="/Database" element={<Assessment />} />
          <Route path="/CyberSecurity" element={<Assessment />} />
          <Route path="/Cryptography" element={<Assessment />} />

          {/* Authentication */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />

          {/* Programming Question and Answer Pages */}
          <>
            {/* C Questions */}
            <Route
              path="/c-programming/declarations-and-initializations"
              element={<QuestionComponent />}
            />
            <Route
              path="/c-programming/control-instructions"
              element={<QuestionComponent />}
            />
            <Route
              path="/c-programming/expressions"
              element={<QuestionComponent />}
            />
            <Route
              path="/c-programming/floating-point-issues"
              element={<QuestionComponent />}
            />
            <Route
              path="/c-programming/functions"
              element={<QuestionComponent />}
            />
            <Route
              path="/c-programming/c-preprocessor"
              element={<QuestionComponent />}
            />
            <Route
              path="/c-programming/pointers"
              element={<QuestionComponent />}
            />
            <Route
              path="/c-programming/arrays"
              element={<QuestionComponent />}
            />
            <Route
              path="/c-programming/strings"
              element={<QuestionComponent />}
            />
            <Route
              path="/c-programming/structures-unions-enums"
              element={<QuestionComponent />}
            />
            <Route
              path="/c-programming/input-output"
              element={<QuestionComponent />}
            />
            <Route
              path="/c-programming/command-line-arguments"
              element={<QuestionComponent />}
            />
            <Route
              path="/c-programming/bitwise-operators"
              element={<QuestionComponent />}
            />
            <Route
              path="/c-programming/typedef"
              element={<QuestionComponent />}
            />
            <Route
              path="/c-programming/const"
              element={<QuestionComponent />}
            />
            <Route
              path="/c-programming/memory-allocation"
              element={<QuestionComponent />}
            />
            <Route
              path="/c-programming/variable-number-of-arguments"
              element={<QuestionComponent />}
            />
            <Route
              path="/c-programming/complicated-declarations"
              element={<QuestionComponent />}
            />
            <Route
              path="/c-programming/library-functions"
              element={<QuestionComponent />}
            />

            {/* C++ Questions */}
            <Route path="/c++/c++_classes" element={<QuestionComponent />} />
            <Route
              path="/c++/object-oriented-programming"
              element={<QuestionComponent />}
            />
            <Route path="/c++/inheritance" element={<QuestionComponent />} />
            <Route path="/c++/polymorphism" element={<QuestionComponent />} />
            <Route path="/c++/templates" element={<QuestionComponent />} />
            <Route
              path="/c++/stl-standard-template-library-"
              element={<QuestionComponent />}
            />
            <Route
              path="/c++/exception-handling"
              element={<QuestionComponent />}
            />
            <Route path="/c++/file-i-o" element={<QuestionComponent />} />
            <Route
              path="/c++/dynamic-memory-allocation"
              element={<QuestionComponent />}
            />
            <Route path="/c++/smart-pointers" element={<QuestionComponent />} />

            {/* Java Questions */}
            <Route path="/java/java-basics" element={<QuestionComponent />} />
            <Route path="/java/oop-concepts" element={<QuestionComponent />} />
            <Route
              path="/java/exception-handling"
              element={<QuestionComponent />}
            />
            <Route
              path="/java/collections-framework"
              element={<QuestionComponent />}
            />
            <Route path="/java/concurrency" element={<QuestionComponent />} />
            <Route path="/java/generics" element={<QuestionComponent />} />
            <Route
              path="/java/lambda-expressions"
              element={<QuestionComponent />}
            />
            <Route path="/java/stream-api" element={<QuestionComponent />} />
            <Route path="/java/file-i-o-nio-" element={<QuestionComponent />} />
            <Route
              path="/java/memory-management"
              element={<QuestionComponent />}
            />

            {/* Javascript Questions */}
            <Route
              path="/javascript/javascript-basics"
              element={<QuestionComponent />}
            />
            <Route
              path="/javascript/dom-manipulation"
              element={<QuestionComponent />}
            />
            <Route
              path="/javascript/event-handling"
              element={<QuestionComponent />}
            />
            <Route path="/js/es6-features" element={<QuestionComponent />} />
            <Route
              path="/javascript/async-programming"
              element={<QuestionComponent />}
            />
            <Route
              path="/javascript/promises-and-async-await"
              element={<QuestionComponent />}
            />
            <Route path="/js/modules" element={<QuestionComponent />} />
            <Route
              path="/javascript/error-handling"
              element={<QuestionComponent />}
            />
            <Route
              path="/javascript/closures"
              element={<QuestionComponent />}
            />
            <Route
              path="/javascript/prototype-chain"
              element={<QuestionComponent />}
            />

            {/* DotNet Questions */}
            <Route
              path="/dotnet/-net-framework"
              element={<QuestionComponent />}
            />
            <Route path="/dotnet/c-basics" element={<QuestionComponent />} />
            <Route path="/dotnet/asp-net-mvc" element={<QuestionComponent />} />
            <Route
              path="/dotnet/entity-framework"
              element={<QuestionComponent />}
            />
            <Route path="/dotnet/linq" element={<QuestionComponent />} />
            <Route
              path="/dotnet/asynchronous-programming"
              element={<QuestionComponent />}
            />
            <Route
              path="/dotnet/delegates-and-events"
              element={<QuestionComponent />}
            />
            <Route
              path="/dotnet/memory-management"
              element={<QuestionComponent />}
            />
            <Route path="/dotnet/web-api" element={<QuestionComponent />} />
            <Route path="/dotnet/signalr" element={<QuestionComponent />} />
          </>

          {/* Technical MCQ Question and Answer Pages */}
          <>
            {/* Networking Question and Answer Pages */}
            <Route
              path="/Networking/tcp-ip-protocol-suite"
              element={<QuestionComponent />}
            />
            <Route
              path="/Networking/routing-algorithms"
              element={<QuestionComponent />}
            />
            <Route
              path="/Networking/network-security"
              element={<QuestionComponent />}
            />
            <Route
              path="/Networking/wireless-networks"
              element={<QuestionComponent />}
            />
            <Route
              path="/Networking/network-management"
              element={<QuestionComponent />}
            />
            <Route
              path="/Networking/internet-of-things-iot-"
              element={<QuestionComponent />}
            />
            <Route
              path="/Networking/cloud-computing"
              element={<QuestionComponent />}
            />
            <Route
              path="/Networking/virtual-private-networks-vpn-"
              element={<QuestionComponent />}
            />
            <Route
              path="/Networking/network-programming"
              element={<QuestionComponent />}
            />
            <Route
              path="/Networking/network-troubleshooting"
              element={<QuestionComponent />}
            />

            {/* Database Question and Answer Pages */}
            <Route
              path="/Database/relational-databases"
              element={<QuestionComponent />}
            />
            <Route
              path="/Database/sql-basics"
              element={<QuestionComponent />}
            />
            <Route
              path="/Database/database-design"
              element={<QuestionComponent />}
            />
            <Route
              path="/Database/normalization"
              element={<QuestionComponent />}
            />
            <Route
              path="/Database/transactions"
              element={<QuestionComponent />}
            />
            <Route path="/Database/indexing" element={<QuestionComponent />} />
            <Route
              path="/Database/nosql-databases"
              element={<QuestionComponent />}
            />
            <Route path="/Database/big-data" element={<QuestionComponent />} />
            <Route
              path="/Database/data-warehousing"
              element={<QuestionComponent />}
            />
            <Route
              path="/Database/database-administration"
              element={<QuestionComponent />}
            />

            {/* Cyber Security Question and Answer Pages */}
            <Route
              path="/CyberSecurity/cyber-threats-and-attacks"
              element={<QuestionComponent />}
            />
            <Route
              path="/CyberSecurity/encryption-techniques"
              element={<QuestionComponent />}
            />
            <Route
              path="/CyberSecurity/firewall-technologies"
              element={<QuestionComponent />}
            />
            <Route
              path="/CyberSecurity/intrusion-detection-systems-ids-"
              element={<QuestionComponent />}
            />
            <Route
              path="/CyberSecurity/risk-assessment"
              element={<QuestionComponent />}
            />
            <Route
              path="/CyberSecurity/digital-forensics"
              element={<QuestionComponent />}
            />
            <Route
              path="/CyberSecurity/network-security-protocols"
              element={<QuestionComponent />}
            />
            <Route
              path="/CyberSecurity/penetration-testing"
              element={<QuestionComponent />}
            />
            <Route
              path="/CyberSecurity/security-policies-and-procedures"
              element={<QuestionComponent />}
            />
            <Route
              path="/CyberSecurity/cybersecurity-laws-and-regulations"
              element={<QuestionComponent />}
            />

            {/* Cryptography Question and Answer Pages */}
            <Route
              path="/Cryptography/symmetric-encryption"
              element={<QuestionComponent />}
            />
            <Route
              path="/Cryptography/public-key-infrastructure-pki-"
              element={<QuestionComponent />}
            />
            <Route
              path="/Cryptography/digital-signatures"
              element={<QuestionComponent />}
            />
            <Route
              path="/Cryptography/hash-functions"
              element={<QuestionComponent />}
            />
            <Route
              path="/Cryptography/cryptographic-protocols"
              element={<QuestionComponent />}
            />
            <Route
              path="/Cryptography/cryptanalysis"
              element={<QuestionComponent />}
            />
            <Route
              path="/Cryptography/quantum-cryptography"
              element={<QuestionComponent />}
            />
            <Route
              path="/Cryptography/blockchain-security"
              element={<QuestionComponent />}
            />
            <Route
              path="/Cryptography/cryptographic-key-management"
              element={<QuestionComponent />}
            />
            <Route
              path="/Cryptography/cryptocurrency-security"
              element={<QuestionComponent />}
            />
          </>

          {/* General Knowledge Question and Answer Pages */}
          <>
            {/* Basic GK Question and Answer Pages */}
            <Route
              path="/Basic_GK/world-geography"
              element={<QuestionComponent />}
            />
            <Route path="/Basic_GK/history" element={<QuestionComponent />} />
            <Route path="/Basic_GK/science" element={<QuestionComponent />} />
            <Route path="/Basic_GK/politics" element={<QuestionComponent />} />
            <Route
              path="/Basic_GK/literature"
              element={<QuestionComponent />}
            />
            <Route
              path="/Basic_GK/famous-personalities"
              element={<QuestionComponent />}
            />
            <Route
              path="/Basic_GK/current-affairs"
              element={<QuestionComponent />}
            />
            <Route
              path="/Basic_GK/general-awareness"
              element={<QuestionComponent />}
            />
            <Route path="/Basic_GK/sports" element={<QuestionComponent />} />
            <Route
              path="/Basic_GK/technology"
              element={<QuestionComponent />}
            />

            {/* Technology Question and Answer Pages */}
            <Route
              path="/GK_Technology/artificial-intelligence-ai-"
              element={<QuestionComponent />}
            />
            <Route
              path="/GK_Technology/machine-learning"
              element={<QuestionComponent />}
            />
            <Route
              path="/GK_Technology/data-science"
              element={<QuestionComponent />}
            />
            <Route
              path="/GK_Technology/blockchain-gk-technology"
              element={<QuestionComponent />}
            />
            <Route
              path="/GK_Technology/internet-of-things-iot-"
              element={<QuestionComponent />}
            />
            <Route
              path="/GK_Technology/cloud-computing"
              element={<QuestionComponent />}
            />
            <Route
              path="/GK_Technology/cybersecurity"
              element={<QuestionComponent />}
            />
            <Route
              path="/GK_Technology/virtual-reality-vr-"
              element={<QuestionComponent />}
            />
            <Route
              path="/GK_Technology/augmented-reality-ar-"
              element={<QuestionComponent />}
            />
            <Route
              path="/GK_Technology/quantum-computing"
              element={<QuestionComponent />}
            />

            {/* Programming Question and Answer Pages */}
            <Route
              path="/Programming_GK/c-programming"
              element={<QuestionComponent />}
            />
            <Route
              path="/Programming_GK/c++_programming"
              element={<QuestionComponent />}
            />
            <Route
              path="/Programming_GK/java-programming"
              element={<QuestionComponent />}
            />
            <Route
              path="/Programming_GK/javascript-programming"
              element={<QuestionComponent />}
            />
            <Route
              path="/Programming_GK/python-programming"
              element={<QuestionComponent />}
            />
            <Route
              path="/Programming_GK/php-programming"
              element={<QuestionComponent />}
            />
            <Route
              path="/Programming_GK/ruby-programming"
              element={<QuestionComponent />}
            />
            <Route
              path="/Programming_GK/swift-programming"
              element={<QuestionComponent />}
            />
            <Route
              path="/Programming_GK/go-programming"
              element={<QuestionComponent />}
            />
            <Route
              path="/Programming_GK/r-programming"
              element={<QuestionComponent />}
            />

            {/* Hardware Question and Answer Pages */}
            <Route
              path="/Hardwares/computer-hardware-basics"
              element={<QuestionComponent />}
            />
            <Route
              path="/Hardwares/cpu-architecture"
              element={<QuestionComponent />}
            />
            <Route
              path="/Hardwares/motherboards"
              element={<QuestionComponent />}
            />
            <Route
              path="/Hardwares/ram-and-storage-devices"
              element={<QuestionComponent />}
            />
            <Route
              path="/Hardwares/graphics-cards"
              element={<QuestionComponent />}
            />
            <Route
              path="/Hardwares/peripheral-devices"
              element={<QuestionComponent />}
            />
            <Route
              path="/Hardwares/networking-hardware"
              element={<QuestionComponent />}
            />
            <Route
              path="/Hardwares/embedded-systems"
              element={<QuestionComponent />}
            />
            <Route
              path="/Hardwares/microcontrollers"
              element={<QuestionComponent />}
            />
            <Route
              path="/Hardwares/iot-hardware"
              element={<QuestionComponent />}
            />
          </>

          {/* General Aptitude Question and Answer Pages   */}
          <>
            {/* Arithmetic Aptitude Question and Answer Pages */}
            <Route
              path="/ArithmeticAptitude/arithmetic-operations"
              element={<QuestionComponent />}
            />
            <Route
              path="/ArithmeticAptitude/number-systems"
              element={<QuestionComponent />}
            />
            <Route
              path="/ArithmeticAptitude/percentages"
              element={<QuestionComponent />}
            />
            <Route
              path="/ArithmeticAptitude/ratio-and-proportion"
              element={<QuestionComponent />}
            />
            <Route
              path="/ArithmeticAptitude/time-and-work"
              element={<QuestionComponent />}
            />
            <Route
              path="/ArithmeticAptitude/time-speed-and-distance"
              element={<QuestionComponent />}
            />
            <Route
              path="/ArithmeticAptitude/profit-and-loss"
              element={<QuestionComponent />}
            />
            <Route
              path="/ArithmeticAptitude/simple-and-compound-interest"
              element={<QuestionComponent />}
            />
            <Route
              path="/ArithmeticAptitude/averages"
              element={<QuestionComponent />}
            />
            <Route
              path="/ArithmeticAptitude/ages"
              element={<QuestionComponent />}
            />
            <Route
              path="/ArithmeticAptitude/mixtures-and-alligations"
              element={<QuestionComponent />}
            />

            {/* Data Interpretation Question and Answer Pages */}
            <Route
              path="/DataInterpretation/tables"
              element={<QuestionComponent />}
            />
            <Route
              path="/DataInterpretation/bar-graphs"
              element={<QuestionComponent />}
            />
            <Route
              path="/DataInterpretation/line-graphs"
              element={<QuestionComponent />}
            />
            <Route
              path="/DataInterpretation/pie-charts"
              element={<QuestionComponent />}
            />
            <Route
              path="/DataInterpretation/caselets"
              element={<QuestionComponent />}
            />
            <Route
              path="/DataInterpretation/data-sufficiency"
              element={<QuestionComponent />}
            />
            <Route
              path="/DataInterpretation/data-comparison"
              element={<QuestionComponent />}
            />
            <Route
              path="/DataInterpretation/missing-data-interpretation"
              element={<QuestionComponent />}
            />
            <Route
              path="/DataInterpretation/visual-reasoning"
              element={<QuestionComponent />}
            />

            {/* Online Aptitude Test Question and Answer Pages */}
            <Route
              path="/OnlineAptitudeTest/verbal-reasoning"
              element={<QuestionComponent />}
            />
            <Route
              path="/OnlineAptitudeTest/non-verbal-reasoning"
              element={<QuestionComponent />}
            />
            <Route
              path="/OnlineAptitudeTest/logical-reasoning"
              element={<QuestionComponent />}
            />
            <Route
              path="/OnlineAptitudeTest/quantitative-aptitude"
              element={<QuestionComponent />}
            />
            <Route
              path="/OnlineAptitudeTest/abstract-reasoning"
              element={<QuestionComponent />}
            />
            <Route
              path="/OnlineAptitudeTest/analytical-reasoning"
              element={<QuestionComponent />}
            />
            <Route
              path="/OnlineAptitudeTest/numerical-reasoning"
              element={<QuestionComponent />}
            />
            <Route
              path="/OnlineAptitudeTest/inductive-reasoning"
              element={<QuestionComponent />}
            />
            <Route
              path="/OnlineAptitudeTest/deductive-reasoning"
              element={<QuestionComponent />}
            />

            {/* Data Interpretation Test Question and Answer Pages */}
            <Route
              path="/DataInterpretationTest/data-analysis"
              element={<QuestionComponent />}
            />
            <Route
              path="/DataInterpretationTest/statistical-analysis"
              element={<QuestionComponent />}
            />
            <Route
              path="/DataInterpretationTest/data-visualization"
              element={<QuestionComponent />}
            />
            <Route
              path="/DataInterpretationTest/interpretation-techniques"
              element={<QuestionComponent />}
            />
            <Route
              path="/DataInterpretationTest/problem-solving-with-data"
              element={<QuestionComponent />}
            />
            <Route
              path="/DataInterpretationTest/pattern-recognition"
              element={<QuestionComponent />}
            />
            <Route
              path="/DataInterpretationTest/information-extraction"
              element={<QuestionComponent />}
            />
            <Route
              path="/DataInterpretationTest/decision-making-with-data"
              element={<QuestionComponent />}
            />
            <Route
              path="/DataInterpretationTest/predictive-analytics"
              element={<QuestionComponent />}
            />
          </>

          {/* Online Test Question and Answer Pages */}
          <>
            {/* Aptitude Test Question and Answer Pages */}
            <Route
              path="/AptitudeTest/basics-of-arithmetic"
              element={<QuestionComponent />}
            />
            <Route
              path="/AptitudeTest/number-systems"
              element={<QuestionComponent />}
            />
            <Route
              path="/AptitudeTest/percentage-profit-and-loss"
              element={<QuestionComponent />}
            />
            <Route
              path="/AptitudeTest/ratio-and-proportion"
              element={<QuestionComponent />}
            />
            <Route
              path="/AptitudeTest/time-speed-and-distance"
              element={<QuestionComponent />}
            />
            <Route
              path="/AptitudeTest/time-and-work"
              element={<QuestionComponent />}
            />
            <Route
              path="/AptitudeTest/pipes-and-cisterns"
              element={<QuestionComponent />}
            />
            <Route
              path="/AptitudeTest/simple-and-compound-interest"
              element={<QuestionComponent />}
            />

            {/* Verbal Ability Test Question and Answer Pages */}
            <Route
              path="/VerbalAbilityTest/types-of-data-interpretation"
              element={<QuestionComponent />}
            />
            <Route
              path="/VerbalAbilityTest/calculations-and-analysis"
              element={<QuestionComponent />}
            />
            <Route
              path="/VerbalAbilityTest/data-sufficiency"
              element={<QuestionComponent />}
            />
            <Route
              path="/VerbalAbilityTest/practice-with-real-life-scenarios"
              element={<QuestionComponent />}
            />
            <Route
              path="/VerbalAbilityTest/strategies-for-efficient-interpretation"
              element={<QuestionComponent />}
            />

            {/* Logical Reasoning Test Question and Answer Pages */}
            <Route
              path="/LogicalReasoningTest/format-and-structure"
              element={<QuestionComponent />}
            />
            <Route
              path="/LogicalReasoningTest/sections-covered"
              element={<QuestionComponent />}
            />
            <Route
              path="/LogicalReasoningTest/preparation-strategies"
              element={<QuestionComponent />}
            />
            <Route
              path="/LogicalReasoningTest/typical-content"
              element={<QuestionComponent />}
            />

            {/* Programming Test Question and Answer Pages */}
            <Route
              path="/ProgrammingTest/focus-areas"
              element={<QuestionComponent />}
            />
            <Route
              path="/ProgrammingTest/problem-solving-skills"
              element={<QuestionComponent />}
            />
            <Route
              path="/ProgrammingTest/practice-questions"
              element={<QuestionComponent />}
            />
            <Route
              path="/ProgrammingTest/accuracy-and-speed"
              element={<QuestionComponent />}
            />
          </>

          {/* Verbal and Reasoning Question and Answer Pages */}
          <>
            {/* Verbal Ability Question and Answer Pages */}
            <Route
              path="/VerbalAbility/grammar"
              element={<QuestionComponent />}
            />
            <Route
              path="/VerbalAbility/vocabulary"
              element={<QuestionComponent />}
            />
            <Route
              path="/VerbalAbility/reading-comprehension"
              element={<QuestionComponent />}
            />
            <Route
              path="/VerbalAbility/synonyms-and-antonyms"
              element={<QuestionComponent />}
            />
            <Route
              path="/VerbalAbility/sentence-correction"
              element={<QuestionComponent />}
            />
            <Route
              path="/VerbalAbility/para-jumbles"
              element={<QuestionComponent />}
            />

            {/* Verbal Ability Question and Answer Pages */}
            <Route
              path="/LogicalReasoning/number-series"
              element={<QuestionComponent />}
            />
            <Route
              path="/LogicalReasoning/letter-and-symbol-series"
              element={<QuestionComponent />}
            />
            <Route
              path="/LogicalReasoning/verbal-classification"
              element={<QuestionComponent />}
            />
            <Route
              path="/LogicalReasoning/analogies"
              element={<QuestionComponent />}
            />
            <Route
              path="/LogicalReasoning/logical-games"
              element={<QuestionComponent />}
            />
            <Route
              path="/LogicalReasoning/logical-deduction"
              element={<QuestionComponent />}
            />
            <Route
              path="/LogicalReasoning/matching-definitions"
              element={<QuestionComponent />}
            />
            <Route
              path="/LogicalReasoning/making-judgments"
              element={<QuestionComponent />}
            />

            {/* Verbal Ability Question and Answer Pages */}
            <Route
              path="/VerbalReasoning/statement-and-assumption"
              element={<QuestionComponent />}
            />
            <Route
              path="/VerbalReasoning/statement-and-conclusion"
              element={<QuestionComponent />}
            />
            <Route
              path="/VerbalReasoning/statement-and-argument"
              element={<QuestionComponent />}
            />
            <Route
              path="/VerbalReasoning/assertion-and-reason"
              element={<QuestionComponent />}
            />
            <Route
              path="/VerbalReasoning/critical-reasoning"
              element={<QuestionComponent />}
            />

            {/* Verbal Ability Question and Answer Pages */}
            <Route
              path="/NonVerbalReasoning/pattern-completion"
              element={<QuestionComponent />}
            />
            <Route
              path="/NonVerbalReasoning/figure-matrix-questions"
              element={<QuestionComponent />}
            />
            <Route
              path="/NonVerbalReasoning/paper-cutting"
              element={<QuestionComponent />}
            />
            <Route
              path="/NonVerbalReasoning/rule-detection"
              element={<QuestionComponent />}
            />
            <Route
              path="/NonVerbalReasoning/mirror-images"
              element={<QuestionComponent />}
            />
            <Route
              path="/NonVerbalReasoning/grouping-identical-figures"
              element={<QuestionComponent />}
            />
          </>

          {/* Programming Pages */}
          <Route path="/Programming" element={<Programming />} />
          <Route path="/C_Programming" element={<CProgramming />} />
          <Route path="/Java_Programming" element={<JavaProgramming />} />
          <Route path="/JavaScript" element={<JavaScriptProgramming />} />
          <Route path="/DotNet" element={<DotNetProgramming />} />

          {/* Technical MCQ Pages */}
          <Route path="/Technical_MCQs" element={<TechnicalMCQs />} />
          <Route path="/Cryptography" element={<Cryptography />} />
          <Route path="/CyberSecurity" element={<CyberSecurity />} />
          <Route path="/Database" element={<Database />} />
          <Route path="/Networking" element={<Networking />} />

          {/* General Aptitude Pages */}
          <Route path="/GeneralAptitude" element={<GeneralAptitude />} />
          <Route path="/ArithmeticAptitude" element={<ArithmeticAptitude />} />
          <Route path="/DataInterpretation" element={<DataInterpretation />} />
          <Route
            path="/DataInterpretationTest"
            element={<DataInterpretationTest />}
          />
          <Route path="/OnlineAptitudeTest" element={<OnlineAptitudeTest />} />

          {/* General Knowledge Pages */}
          <Route path="/GeneralKnowledge" element={<GeneralKnowledge />} />
          <Route
            path="/BasicGeneralKnowledge"
            element={<BasicGeneralKnowledge />}
          />
          <Route path="/Hardwares" element={<Hardwares />} />
          <Route path="/Programming_GK" element={<ProgrammingGK />} />
          <Route path="/GK_Technology" element={<Technology />} />

          {/* Online Test Pages */}
          <Route path="/OnlineTest" element={<OnlineTest />} />
          <Route path="/AptitudeTest" element={<AptitudeTest />} />
          <Route
            path="/LogicalReasoningTest"
            element={<LogicalReasoningTest />}
          />
          <Route path="/ProgrammingTest" element={<ProgrammingTest />} />
          <Route path="/VerbalAbilityTest" element={<VerbalAbilityTest />} />

          {/* Verbal And Reasoning Pages */}
          <Route path="/VerbalAndReasoning" element={<VerbalAndReasoning />} />
          <Route path="/LogicalReasoning" element={<LogicalReasoning />} />
          <Route path="/NonVerbalReasoning" element={<NonVerbalReasoning />} />
          <Route path="/VerbalAbility" element={<VerbalAbility />} />
          <Route path="/VerbalReasoning" element={<VerbalReasoning />} />

          {/* Route for handling unknown paths */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </TopicProvider>
    </ContainerProvider>
  );
};

export default AppRoutes;
