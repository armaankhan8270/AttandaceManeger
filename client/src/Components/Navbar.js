import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { GlobalUserContetx } from "../Context/UserContext";

export default function Navbars() {
  const { 
    NameOfUser, 
    UserLogin, 
    setUserLogin, 
    setUserLogout 
  } = GlobalUserContetx();
  
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleLogout = () => {
    setUserLogin(false);
    setUserLogout(true);
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/about" className="flex items-center">
          About
        </Link>
      </Typography>
      
      {!UserLogin ? (
        <>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link to="/register" className="flex items-center">
              SignUp
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link to="/login" className="flex items-center">
              Login
            </Link>
          </Typography>
        </>
      ) : null}

      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/faq" className="flex items-center">
          Docs
        </Link>
      </Typography> */}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/help" className="flex items-center">
          Help
        </Link>
      </Typography>
      
      {UserLogin && (
        <>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link to="/profile" className="flex items-center">
              Profile
            </Link>
          </Typography>
          
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-blue-gray-100 flex items-center justify-center">
              {NameOfUser.charAt(0).toUpperCase()}
            </div>
            <span>{NameOfUser}</span>
          </Typography>

          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Button
              onClick={handleLogout}
              variant="gradient"
              color="red"
              size="sm"
            >
              Logout
            </Button>
          </Typography>
        </>
      )}
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/">
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Attendance</span>
          </Button>
        </Link>

        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Link to="search">
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Search Yours</span>
          </Button>
        </Link>
      </MobileNav>
    </Navbar>
  );
}