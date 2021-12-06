import Toggle from "../components/Toggle";
import { useDispatch } from "react-redux";

const TopNavigationBar = ({ darkTheme }) => {
  const dispatch = useDispatch();

  return (
    <header className="small_header">
      <div
        className="sm_act_menu_butt"
        onClick={() => {
          dispatch({ type: "modal_menu" });
        }}
      >
        <p>
          <i
            style={{
              fontSize: "20px",
              paddingBottom: "2px",
              marginRight: "10px",
            }}
            className="uil uil-bars"
          />
        </p>
        <p style={{ paddingBottom: "2px" }}>menu</p>
      </div>
      <div className="theme_tog">
        <Toggle darkTheme={darkTheme} />
      </div>
    </header>
  );
};

export default TopNavigationBar;
