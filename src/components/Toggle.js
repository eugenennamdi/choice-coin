import { useState } from "react";
import { useDispatch } from "react-redux";
import loadable from "@loadable/component";

const Switch = loadable.lib(() => import("react-switch"));

const Toggle = ({ darkTheme }) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);

    if (!darkTheme) {
      dispatch({ type: "dark_mode" });
    } else {
      dispatch({ type: "light_mode" });
    }
  };

  return (
    <>
      <label htmlFor="small-radius-switch">
        <p style={{ width: "0px", height: "0px", overflow: "hidden" }}>
          Toggle
        </p>
      </label>
      <Switch
        checked={checked}
        onChange={handleChange}
        handleDiameter={12}
        offColor="#1a1a1a"
        onColor="#eee"
        offHandleColor="#2958ff"
        onHandleColor="#222"
        height={16}
        width={46}
        borderRadius={50}
        activeBoxShadow="0px 0px 1px 2px transparent"
        uncheckedIcon={<></>}
        checkedIcon={<></>}
        uncheckedHandleIcon={<> </>}
        checkedHandleIcon={<></>}
        className="react-switch"
        id="small-radius-switch"
      />
    </>
  );
};

export default Toggle;
