import "@mantine/core/styles.css";
import "./AppContent.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar.tsx";

// import other components as necessary
import {
  Navbar as NextuiNavbar,
  NavbarContent,
  Input,
  Avatar,
  Spinner,
} from "@nextui-org/react";
import { SearchIcon } from "../pages/Home/SearchIcon.tsx";
import NotSupportedPage from "../pages/NetworkErrorPage/NetworkErrorPage.tsx";
import NetworkErrorPage from "../pages/NetworkErrorPage/NetworkErrorPage.tsx";
import DisableZoom from "./DisableZoom.tsx";
import AppRoutes from "../routes/AppRoutes.tsx";

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Set to 1 seconds (1000 ms)

    // Clean up timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  useEffect(() => {
    // Reset the error state when the location changes
    setHasError(false);
  }, [location.pathname]);

  return (
    <div className="app-container">
      <div className="Not_Supported_Screen_Alert hidden">
        <DisableZoom />
        <NotSupportedPage />
      </div>
      <div className="main-content flex relative">
        <div className="fixed z-50">
          <Navbar />
          <NextuiNavbar
            isBordered
            className="max-h-[60px] border-b-[1px] justify-end z-[-1] pr-[20px] bg-white fixed"
          >
            <NavbarContent as="div" className="items-center" justify="end">
              <Input
                classNames={{
                  base: "max-w-full sm:max-w-[13rem] h-10",
                  mainWrapper: "h-full",
                  input: "text-small",
                  inputWrapper:
                    "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Type to search..."
                size="sm"
                startContent={<SearchIcon size={18} />}
                type="search"
              />
              <Link
                to="/Logout"
                className="border-blue-500 border-2 p-0.5 rounded-full"
              >
                <Avatar
                  as="button"
                  className="transition-transform"
                  color="primary"
                  name="Jason Hughes"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Link>
            </NavbarContent>
          </NextuiNavbar>
        </div>
        <div className="content-container px-6 pb-4 pt-[5px] ml-[300px] w-full relative">
          {loading ? (
            <div className="loader-container text-emerald-400">
              <Spinner
                size="md"
                color="primary"
                className="opacity-[65%] mt-[5vh] forced-colors:#238be6"
              />
            </div>
          ) : hasError ? (
            <NetworkErrorPage />
          ) : (
            <AppRoutes />
          )}
        </div>
      </div>
    </div>
  );
}

export default AppContent;
