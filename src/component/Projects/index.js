import { Link } from "react-router-dom";
import "./index.css";
import Popup from "reactjs-popup";
import Navbar from "../Navbar";
import { MdOutlineHome } from "react-icons/md";

const Project = () => (
  <>
    <Navbar />
    <div>
      <div className="but-cont">
        <button className="home-but">
          <MdOutlineHome size={20} />
          <p className="but-text">Back to Home</p>
        </button>
      </div>
      <div className="project-cont">
        <h1 className="home-head">Projects</h1>
        <Popup
          modal
          trigger={
            <button className="pro-but1">
              <p className="plus">+</p>
              Create New Project
            </button>
          }
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
      <div className="samples">
        <Link to="/upload" className="link">
          <div className="card">
            <div className="card1">
              <p className="sp">SP</p>
            </div>
            <div>
              <h1 className="sp1">Sample Project</h1>
              <p className="epi">4 Episodes</p>
              <p className="edit">Last edited a week ago</p>
            </div>
          </div>
        </Link>
        <div className="card">
          <div className="card1">
            <p className="sp">SP</p>
          </div>
          <div>
            <h1 className="sp1">Sample Project</h1>
            <p className="epi">4 Episodes</p>
            <p className="edit">Last edited a week ago</p>
          </div>
        </div>
        <div className="card">
          <div className="card1">
            <p className="sp">SP</p>
          </div>
          <div>
            <h1 className="sp1">Sample Project</h1>
            <p className="epi">4 Episodes</p>
            <p className="edit">Last edited a week ago</p>
          </div>
        </div>
        <div className="card">
          <div className="card1">
            <p className="sp">SP</p>
          </div>
          <div>
            <h1 className="sp1">Sample Project</h1>
            <p className="epi">4 Episodes</p>
            <p className="edit">Last edited a week ago</p>
          </div>
        </div>
        <div className="card">
          <div className="card1">
            <p className="sp">SP</p>
          </div>
          <div>
            <h1 className="sp1">Sample Project</h1>
            <p className="epi">4 Episodes</p>
            <p className="edit">Last edited a week ago</p>
          </div>
        </div>
        <div className="card">
          <div className="card1">
            <p className="sp">SP</p>
          </div>
          <div>
            <h1 className="sp1">Sample Project</h1>
            <p className="epi">4 Episodes</p>
            <p className="edit">Last edited a week ago</p>
          </div>
        </div>
        <div className="card">
          <div className="card1">
            <p className="sp">SP</p>
          </div>
          <div>
            <h1 className="sp1">Sample Project</h1>
            <p className="epi">4 Episodes</p>
            <p className="edit">Last edited a week ago</p>
          </div>
        </div>
        <div className="card">
          <div className="card1">
            <p className="sp">SP</p>
          </div>
          <div>
            <h1 className="sp1">Sample Project</h1>
            <p className="epi">4 Episodes</p>
            <p className="edit">Last edited a week ago</p>
          </div>
        </div>
        <div className="card">
          <div className="card1">
            <p className="sp">SP</p>
          </div>
          <div>
            <h1 className="sp1">Sample Project</h1>
            <p className="epi">4 Episodes</p>
            <p className="edit">Last edited a week ago</p>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default Project;
