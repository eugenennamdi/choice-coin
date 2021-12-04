const BottomNavigationBar = ({ NavLink }) => {
  return (
    <footer className="ft_sm">
      <ul className="ft_sm_inn">
        <li className="ft_sm_li">
          <NavLink
            style={({ isActive }) => {
              return {
                display: "flex",
                fontSize: isActive ? "14px" : "13px",
                fontWeight: isActive && "600",
                alignItems: "center",
                flexDirection: "column",
                color: isActive ? "var(--main-col)" : "",
              };
            }}
            to={`/`}
            key={"home"}
          >
            <i className="uil uil-sim-card" />
            <p> Home</p>
          </NavLink>
        </li>
        <li className="ft_sm_li">
          <NavLink
            style={({ isActive }) => {
              return {
                display: "flex",
                fontSize: isActive ? "14px" : "13px",
                fontWeight: isActive && "600",
                alignItems: "center",
                flexDirection: "column",
                color: isActive ? "var(--main-col)" : "",
              };
            }}
            to={`/elections`}
            key={"elections"}
          >
            <i className="uil uil-mailbox" />
            <p> Elections</p>
          </NavLink>
        </li>
        <li className="ft_sm_li">
          <NavLink
            style={({ isActive }) => {
              return {
                display: "flex",
                fontSize: isActive ? "14px" : "13px",
                fontWeight: isActive && "600",
                alignItems: "center",
                flexDirection: "column",
                color: isActive ? "var(--main-col)" : "",
              };
            }}
            to={`/participate`}
            key={"participate"}
          >
            <i className="uil uil-layers" />
            <p>Participate</p>
          </NavLink>
        </li>
        <li className="ft_sm_li">
          <NavLink
            style={({ isActive }) => {
              return {
                display: "flex",
                fontSize: isActive ? "14px" : "13px",
                fontWeight: isActive && "600",
                alignItems: "center",
                flexDirection: "column",
                color: isActive ? "var(--main-col)" : "",
              };
            }}
            to={`/faq`}
            key={"faq"}
          >
            <i className="uil uil-asterisk" />
            <p>FAQ</p>
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default BottomNavigationBar;
