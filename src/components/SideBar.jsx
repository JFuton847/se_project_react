import Avatar from "../assets/avatar.png";
import "../blocks/SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={Avatar} alt="Default avatar" />
      <p className="sidebar__username">James Petersen</p>
    </div>
  );
}

export default SideBar;
