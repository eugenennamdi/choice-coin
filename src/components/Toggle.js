import { useState } from "react";
import Switch from "react-switch";
import { useDispatch } from "react-redux";

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
    <Switch
      checked={checked}
      onChange={handleChange}
      handleDiameter={12}
      offColor="transparent"
      onColor="transparent"
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
  );
};

export default Toggle;
