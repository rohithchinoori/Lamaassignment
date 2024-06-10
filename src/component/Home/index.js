import { Link } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import Navbar from "../Navbar";
import "./index.css";
import Popup from "reactjs-popup";

const Home = () => (
  <>
    <Navbar />
    <div className="home-bg">
      <div className="but-cont">
        <button className="home-but">
          <MdOutlineHome size={20} />
          <p className="but-text">Back to Home</p>
        </button>
      </div>
      <div className="home-bg-1">
        <h1 className="home-head">Create a New Project</h1>
        <img
          src="https://res.cloudinary.com/dsyljcxpu/image/upload/v1717820208/Group_16_lpowkt.png"
          alt="grp"
          className="grp"
        />
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </p>
        <Popup
          modal
          trigger={<button className="pro-but">Create New Project</button>}
          overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
          {(close) => (
            <>
              <div className="pop">
                <h1 className="pop-head">Create Project</h1>
                <p className="pop-l">Enter Project Name :</p>
                <input type="text" placeholder="Type here" className="title" />
                <p className="focus">Project Name Can't be empty</p>
                <div className="pop-but">
                  <button className="cancel" onClick={() => close()}>
                    Cancel
                  </button>
                  <Link to="/project">
                    <button className="create">Create</button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
  </>
);
export default Home;
