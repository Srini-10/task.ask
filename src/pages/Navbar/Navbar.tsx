// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { UnstyledButton, Tooltip, Title, rem } from "@mantine/core";
// import {
//   IconHome2,
//   IconGauge,
//   IconDeviceDesktopAnalytics,
//   IconCalendarStats,
//   IconUser,
//   IconSettings,
// } from "@tabler/icons-react";
// import { IoLogOutOutline } from "react-icons/io5";
// import classes from "./DoubleNavbar.module.css";
// import TechAskLogo from "../../assets/TechAskLogo.png";

// const mainLinksMockdata = [
//   { icon: IconHome2, label: "Home", path: "/" },
//   { icon: IconGauge, label: "Dashboard", path: "/dashboard" },
//   {
//     icon: IconDeviceDesktopAnalytics,
//     label: "Assessment",
//     path: "/Assessment",
//   },
//   { icon: IconCalendarStats, label: "Tasks", path: "/tasks" },
//   { icon: IconUser, label: "Account", path: "/account" },
//   { icon: IconSettings, label: "Settings", path: "/settings" },
// ];

// const linksMockdata = [
//   { label: "Programming", path: "/Programming" },
//   { label: "Technical MCQs", path: "/Technical_MCQs" },
//   { label: "General Knowledge", path: "/GeneralKnowledge" },
//   { label: "General Aptitude", path: "/GeneralAptitude" },
//   { label: "Online Test", path: "/OnlineTest" },
//   { label: "Verbal and Reasoning", path: "/VerbalAndReasoning" },
// ];

// const Navbar = () => {
//   const location = useLocation();
//   const [activeMainLink, setActiveMainLink] = useState("");
//   const [activeSubLink, setActiveSubLink] = useState("");
//   const [activeLogout, setActiveLogout] = useState(false);
//   const [newContainer, setNewContainer] = useState({ title: "" });
//   const [newLink, setNewLink] = useState({ to: "", label: "" });

//   useEffect(() => {
//     const currentMainLink = mainLinksMockdata.find(
//       (link) => link.path === location.pathname
//     );
//     const currentSubLink = linksMockdata.find(
//       (link) => link.path === location.pathname
//     );

//     if (currentMainLink) {
//       setActiveMainLink(currentMainLink.label);
//       setActiveSubLink("");
//     } else if (currentSubLink) {
//       setActiveMainLink("");
//       setActiveSubLink(currentSubLink.label);
//     } else {
//       setActiveMainLink("");
//       setActiveSubLink("");
//     }

//     setActiveLogout(location.pathname === "/Logout");
//   }, [location.pathname]);

//   const mainLinks = mainLinksMockdata.map((link) => (
//     <Tooltip
//       label={link.label}
//       position="right"
//       withArrow
//       transitionProps={{ duration: 0 }}
//       key={link.label}
//     >
//       <Link to={link.path} className={classes.mainLink}>
//         <UnstyledButton
//           onClick={() => {
//             setActiveMainLink(link.label);
//             setActiveSubLink("");
//           }}
//           data-active={link.label === activeMainLink || undefined}
//           style={{
//             backgroundColor:
//               link.label === activeMainLink ? "#f0f0f0" : "transparent", // Change background color here
//             borderRadius: "4px",
//             padding: "10px",
//           }}
//         >
//           <link.icon style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
//         </UnstyledButton>
//       </Link>
//     </Tooltip>
//   ));

//   const handleAddLink = () => {
//     // Handle the logic for adding a new link
//   };

//   const handleAddContainer = () => {
//     // Handle the logic for adding a new container
//   };

//   const links = linksMockdata.map((link) => (
//     <Link
//       to={link.path}
//       className={classes.link}
//       data-active={activeSubLink === link.label || undefined}
//       onClick={() => {
//         setActiveSubLink(link.label);
//         setActiveMainLink("");
//       }}
//       key={link.label}
//     >
//       {link.label}
//     </Link>
//   ));

//   return (
//     <nav className={classes.navbar}>
//       <div className={classes.wrapper}>
//         <div className={classes.aside}>
//           <div className={classes.logo}>
//             <img
//               src={TechAskLogo}
//               alt="TechAsk Logo"
//               className="w-[30px] h-[30px] rounded-full"
//             />
//           </div>
//           {mainLinks}
//           <div className="bottom-0 absolute mb-[5vh]">
//             <Link to="/Logout">
//               <IoLogOutOutline
//                 className={`${classes.logout} ${
//                   activeLogout ? classes.activeLogout : ""
//                 }`}
//               />
//             </Link>
//           </div>
//         </div>
//         <div className={classes.main}>
//           <Title order={4} className={classes.title}>
//             Tech.ask
//           </Title>
//           {activeMainLink !== "Dashboard" && (
//             <div className="mb-4">{links}</div>
//           )}
//           {activeMainLink === "Dashboard" && (
//             <div className="flex-1 -mt-[24px]">
//               <div className="bg-transparent p-4">
//                 <h2 className="font-semibold text-lg mb-4">
//                   Add New Container
//                 </h2>
//                 <input
//                   type="text"
//                   placeholder="Class Name"
//                   value={newContainer.title}
//                   onChange={(e) =>
//                     setNewContainer({ ...newContainer, title: e.target.value })
//                   }
//                   className="w-full border-gray-300 border-1 rounded-md py-1.5 px-3 mb-3"
//                 />
//                 <h3 className="font-semibold text-lg mb-2">Add Links</h3>
//                 <div className="grid grid-cols-1 mb-3">
//                   <input
//                     type="text"
//                     placeholder="Path Name"
//                     value={newLink.to}
//                     onChange={(e) =>
//                       setNewLink({ ...newLink, to: e.target.value })
//                     }
//                     className="border-gray-300 border-1 rounded-md py-1.5 px-3"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Label Name"
//                     value={newLink.label}
//                     onChange={(e) =>
//                       setNewLink({ ...newLink, label: e.target.value })
//                     }
//                     className="border-gray-300 border-1 mt-2 mb-4 rounded-md py-1.5 px-3"
//                   />
//                   <button
//                     className="bg-[#399fff] hover:bg-[#3290e8] text-white py-2 px-4 rounded-md"
//                     onClick={handleAddLink}
//                   >
//                     Add Link
//                   </button>
//                 </div>
//                 <button
//                   className="bg-[#48ce18] hover:bg-[#48bf1d] text-white py-2 px-4 rounded-md"
//                   onClick={handleAddContainer}
//                 >
//                   Add Container
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UnstyledButton, Tooltip, Title, rem } from "@mantine/core";
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconCalendarStats,
  IconUser,
  IconSettings,
} from "@tabler/icons-react";
import { IoLogOutOutline } from "react-icons/io5";
import classes from "./DoubleNavbar.module.css";
import TechAskLogo from "../../assets/TechAskLogo.png";

const mainLinksMockdata = [
  { icon: IconHome2, label: "Home", path: "/" },
  { icon: IconGauge, label: "Dashboard", path: "/dashboard" },
  {
    icon: IconDeviceDesktopAnalytics,
    label: "Assessment",
    path: "/Assessment",
  },
  { icon: IconCalendarStats, label: "Tasks", path: "/tasks" },
  { icon: IconUser, label: "Account", path: "/account" },
  { icon: IconSettings, label: "Settings", path: "/settings" },
];

const linksMockdata = [
  { label: "Programming", path: "/Programming" },
  { label: "Technical MCQs", path: "/Technical_MCQs" },
  { label: "General Knowledge", path: "/GeneralKnowledge" },
  { label: "General Aptitude", path: "/GeneralAptitude" },
  { label: "Online Test", path: "/OnlineTest" },
  { label: "Verbal and Reasoning", path: "/VerbalAndReasoning" },
];

const Navbar = () => {
  const location = useLocation();
  const [activeMainLink, setActiveMainLink] = useState("");
  const [activeSubLink, setActiveSubLink] = useState("");
  const [activeLogout, setActiveLogout] = useState(false);
  const [newContainer, setNewContainer] = useState({ title: "", links: [] });
  const [newLink, setNewLink] = useState({ to: "", label: "" });

  useEffect(() => {
    const currentMainLink = mainLinksMockdata.find(
      (link) => link.path === location.pathname
    );
    const currentSubLink = linksMockdata.find(
      (link) => link.path === location.pathname
    );

    if (currentMainLink) {
      setActiveMainLink(currentMainLink.label);
      setActiveSubLink("");
    } else if (currentSubLink) {
      setActiveMainLink("");
      setActiveSubLink(currentSubLink.label);
    } else {
      setActiveMainLink("");
      setActiveSubLink("");
    }

    setActiveLogout(location.pathname === "/Logout");
  }, [location.pathname]);

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <Link to={link.path} className={classes.mainLink}>
        <UnstyledButton
          onClick={() => {
            setActiveMainLink(link.label);
            setActiveSubLink("");
          }}
          data-active={link.label === activeMainLink || undefined}
          style={{
            backgroundColor:
              link.label === activeMainLink ? "#f0f0f0" : "transparent", // Change background color here
            borderRadius: "4px",
            padding: "10px",
          }}
        >
          <link.icon style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
        </UnstyledButton>
      </Link>
    </Tooltip>
  ));

  const handleAddLink = () => {};

  const handleAddContainer = () => {};

  const links = linksMockdata.map((link) => (
    <Link
      to={link.path}
      className={classes.link}
      data-active={activeSubLink === link.label || undefined}
      onClick={() => {
        setActiveSubLink(link.label);
        setActiveMainLink("");
      }}
      key={link.label}
    >
      {link.label}
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <img
              src={TechAskLogo}
              alt="TechAsk Logo"
              className="w-[30px] h-[30px] rounded-full"
            />
          </div>
          {mainLinks}
          <div className="bottom-0 absolute mb-[5vh]">
            <Link to="/Logout">
              <IoLogOutOutline
                className={`${classes.logout} ${
                  activeLogout ? classes.activeLogout : ""
                }`}
              />
            </Link>
          </div>
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            Tech.ask
          </Title>
          {activeMainLink !== "Dashboard" && (
            <div className="mb-4">{links}</div>
          )}
          {activeMainLink === "Dashboard" && (
            <div className="flex-1 -mt-[24px]">
              <div className="bg-transparent p-4">
                <h2 className="font-semibold text-lg mb-4">
                  Add New Container
                </h2>
                <input
                  type="text"
                  placeholder="Class Name"
                  value={newContainer.title}
                  onChange={(e) =>
                    setNewContainer({ ...newContainer, title: e.target.value })
                  }
                  className="w-full border-gray-300 border-1 rounded-md py-1.5 px-3 mb-3"
                />
                <h3 className="font-semibold text-lg mb-2">Add Links</h3>
                <div className="grid grid-cols-1 mb-3">
                  <input
                    type="text"
                    placeholder="Path Name"
                    value={newLink.to}
                    onChange={(e) =>
                      setNewLink({ ...newLink, to: e.target.value })
                    }
                    className="border-gray-300 border-1 rounded-md py-1.5 px-3"
                  />
                  <input
                    type="text"
                    placeholder="Label Name"
                    value={newLink.label}
                    onChange={(e) =>
                      setNewLink({ ...newLink, label: e.target.value })
                    }
                    className="border-gray-300 border-1 mt-2 mb-4 rounded-md py-1.5 px-3"
                  />
                  <button
                    className="bg-[#399fff] hover:bg-[#3290e8] text-white py-2 px-4 rounded-md"
                    onClick={handleAddLink}
                  >
                    Add Link
                  </button>
                </div>
                <button
                  className="bg-[#48ce18] hover:bg-[#48bf1d] text-white py-2 px-4 rounded-md"
                  onClick={handleAddContainer}
                >
                  Add Container
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
