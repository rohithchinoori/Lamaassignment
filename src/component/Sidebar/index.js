import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Slidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="slide-bg">
      <div>
        <div className="nav-logo">
          <svg
            width="33"
            height="33"
            viewBox="0 0 53 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.4727 46.8739L29.8109 43.043C27.6752 41.9862 25.1873 41.9862 23.0517 43.043L15.3678 46.8739C8.80679 50.1544 1.87148 43.087 5.3061 36.592L7.11149 33.2014C7.35367 32.7171 7.74998 32.3428 8.23435 32.1446L36.0857 19.617C37.2306 19.1106 38.5736 19.573 39.146 20.6738L47.5344 36.614C50.9691 43.087 44.0338 50.1544 37.4727 46.8739Z"
              fill="#7E22CE"
            />
            <path
              opacity="0.4"
              d="M34.3463 16.9308L16.1163 25.1431C14.0688 26.0678 11.9992 23.8661 13.056 21.8846L19.7491 9.18088C22.5893 3.78675 30.2952 3.78675 33.1354 9.18088L35.4912 13.6723C36.1076 14.8832 35.6013 16.3584 34.3463 16.9308Z"
              fill="#7E22CE"
            />
          </svg>
          <h1 className="logo-name">LAMA.</h1>
        </div>
        <p className="pod">Podcast Upload Flow</p>
        <ul>
          {["Projects", "Widget Configuration", "Deployment", "Pricing"].map(
            (item, index) => (
              <li
                key={index}
                className={selectedIndex === index ? "active" : ""}
                onClick={() => handleItemClick(index)}
              >
                <span className="num">{index + 1}</span> {item}
              </li>
            )
          )}
        </ul>
        <hr />
      </div>
      <div>
        <hr />
        <div className="set">
          <svg
            width="38"
            height="38"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1353_1893)">
              <rect
                x="4"
                y="4"
                width="40"
                height="40"
                rx="20"
                fill="#1D1B20"
                fill-opacity="0.12"
              />
              <g opacity="0.38">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.3102 33.03C27.2102 33.71 26.5902 34.25 25.8502 34.25H22.1502C21.4102 34.25 20.7902 33.71 20.7002 32.98L20.4302 31.09C20.1602 30.95 19.9002 30.8 19.6402 30.63L17.8402 31.35C17.1402 31.61 16.3702 31.32 16.0302 30.7L14.2002 27.53C13.8502 26.87 14.0002 26.09 14.5602 25.65L16.0902 24.46C16.0802 24.31 16.0702 24.16 16.0702 24C16.0702 23.85 16.0802 23.69 16.0902 23.54L14.5702 22.35C13.9802 21.9 13.8302 21.09 14.2002 20.47L16.0502 17.28C16.3902 16.66 17.1602 16.38 17.8402 16.65L19.6502 17.38C19.9102 17.21 20.1702 17.06 20.4302 16.92L20.7002 15.01C20.7902 14.31 21.4102 13.76 22.1402 13.76H25.8402C26.5802 13.76 27.2002 14.3 27.2902 15.03L27.5602 16.92C27.8302 17.06 28.0902 17.21 28.3502 17.38L30.1502 16.66C30.8602 16.4 31.6302 16.69 31.9702 17.31L33.8102 20.49C34.1702 21.15 34.0102 21.93 33.4502 22.37L31.9302 23.56C31.9402 23.71 31.9502 23.86 31.9502 24.02C31.9502 24.18 31.9402 24.33 31.9302 24.48L33.4502 25.67C34.0102 26.12 34.1702 26.9 33.8202 27.53L31.9602 30.75C31.6202 31.37 30.8502 31.65 30.1602 31.38L28.3602 30.66C28.1002 30.83 27.8402 30.98 27.5802 31.12L27.3102 33.03ZM22.6202 32.25H25.3802L25.7502 29.7L26.2802 29.48C26.7202 29.3 27.1602 29.04 27.6202 28.7L28.0702 28.36L30.4502 29.32L31.8302 26.92L29.8002 25.34L29.8702 24.78L29.8733 24.7531C29.9023 24.5027 29.9302 24.2607 29.9302 24C29.9302 23.73 29.9002 23.47 29.8702 23.22L29.8002 22.66L31.8302 21.08L30.4402 18.68L28.0502 19.64L27.6002 19.29C27.1802 18.97 26.7302 18.71 26.2702 18.52L25.7502 18.3L25.3802 15.75H22.6202L22.2502 18.3L21.7202 18.51C21.2802 18.7 20.8402 18.95 20.3802 19.3L19.9302 19.63L17.5502 18.68L16.1602 21.07L18.1902 22.65L18.1202 23.21C18.0902 23.47 18.0602 23.74 18.0602 24C18.0602 24.26 18.0802 24.53 18.1202 24.78L18.1902 25.34L16.1602 26.92L17.5402 29.32L19.9302 28.36L20.3802 28.71C20.8102 29.04 21.2402 29.29 21.7102 29.48L22.2402 29.7L22.6202 32.25ZM27.5002 24C27.5002 25.933 25.9332 27.5 24.0002 27.5C22.0672 27.5 20.5002 25.933 20.5002 24C20.5002 22.067 22.0672 20.5 24.0002 20.5C25.9332 20.5 27.5002 22.067 27.5002 24Z"
                  fill="#1D1B20"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1353_1893">
                <rect x="4" y="4" width="40" height="40" rx="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <Link to="/setting" className="link">
            <p>Settings</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
