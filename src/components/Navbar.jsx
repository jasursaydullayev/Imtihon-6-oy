import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";
// Local Storagega Saqlash Start
function modeFromLocalStorage() {
  return localStorage.getItem('mode') || 'light'
}
// Local Storagega Saqlash END

function Navbar() {
  
  // Dark Mode Functions Start
  useEffect(() => {
    document.body.classList.add(modeFromLocalStorage())
  }, [])


  const handleClick = () => {
    document.body.classList.toggle('dark')
    localStorage.setItem('mode', modeFromLocalStorage() === 'dark' ? 'light' : 'dark')
  }
  // Dark Mode Functions End


  return (
  <>
      <div className="dark:text-white dark:bg-cyan-950 h-[100px] bg-warning flex justify-center items-center ">
      <div className="navbar cite-container h-[75px] border-2 border-white rounded-xl">
        <div className="flex-1">
          <Link to='/' className="font-bold text-3xl text-dark pl-3 ">My Movies</Link>
          <div className="nav-icons flex items-center text-center mx-auto gap-[60px] ">
            {/* Movie svg */}
            <svg
            className="dark:fill-white fill-[#345f64]"
              width="33"
              height="26"
              viewBox="0 0 33 26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.463 0.408386L29.663 6.80839H24.863L21.663 0.408386H18.463L21.663 6.80839H16.863L13.663 0.408386H10.463L13.663 6.80839H8.86304L5.66304 0.408386H4.06304C2.29504 0.408386 0.879037 1.84039 0.879037 3.60839L0.863037 22.8084C0.863037 24.5764 2.29504 26.0084 4.06304 26.0084H29.663C31.431 26.0084 32.863 24.5764 32.863 22.8084V0.408386H26.463Z"
              />
            </svg>
            {/* App svg */}
            <svg
             className="dark:fill-white fill-[#345f64]"
              width="33"
              height="26"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.9556 0H3.04444C1.36304 0 0 1.36304 0 3.04444V16.9556C0 18.637 1.36304 20 3.04444 20H16.9556C17.763 20 18.5374 19.6792 19.1083 19.1083C19.6792 18.5374 20 17.763 20 16.9556V3.04444C20 2.23701 19.6792 1.46264 19.1083 0.891697C18.5374 0.320753 17.763 0 16.9556 0ZM4 9H2V7H4V9ZM4 11H2V13H4V11ZM18 9H16V7H18V9ZM18 11H16V13H18V11ZM18 2.74V4H16V2H17.26C17.4563 2 17.6445 2.07796 17.7833 2.21674C17.922 2.35552 18 2.54374 18 2.74ZM4 2H2.74C2.54374 2 2.35552 2.07796 2.21674 2.21674C2.07796 2.35552 2 2.54374 2 2.74V4H4V2ZM2 17.26V16H4V18H2.74C2.54374 18 2.35552 17.922 2.21674 17.7833C2.07796 17.6445 2 17.4563 2 17.26ZM17.26 18C17.6687 18 18 17.6687 18 17.26V16H16V18H17.26Z"
              />
            </svg>
            {/* Film svg */}
            <svg
             className="dark:fill-white fill-[#345f64]"
              width="33"
              height="26"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.08 4.48109H20V20H0V4.48109H4.92L2.22 1.20272L3.78 0.029098L7 3.90883L10.22 0L11.78 1.20272L9.08 4.48109ZM2 6.42095V18.0601H12V6.42095H2ZM17 14.1804H15V12.2405H17V14.1804ZM15 10.3007H17V8.36082H15V10.3007Z"
              />
            </svg>
            {/* Tv svg */}
           <Link to={'/'}> <FcLike className="w-[35px] h-[36px]"/></Link>
          </div>
        </div>
        <label className="swap swap-rotate pr-3">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            value="synthwave"
          />

          {/* sun icon */}
          <svg
          onClick={handleClick}
            className="swap-on fill-black dark:fill-white  w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
          onClick={handleClick}
            className="swap-off  fill-black  dark:fill-white  w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  </>
  );
}

export default Navbar;
