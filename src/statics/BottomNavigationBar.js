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
                opacity: isActive ? "1" : "0.6",
                alignItems: "center",
                flexDirection: "column",
              };
            }}
            to={`/`}
            key={"home"}
          >
            <i class="uil uil-estate"></i>
            {/* <p> Home</p> */}
          </NavLink>
        </li>
        <li className="ft_sm_li">
          <NavLink
            style={({ isActive }) => {
              return {
                display: "flex",
                fontSize: isActive ? "14px" : "13px",
                fontWeight: isActive && "600",
                opacity: isActive ? "1" : "0.6",
                alignItems: "center",
                flexDirection: "column",
              };
            }}
            to={`/elections`}
            key={"elections"}
          >
            <i class="uil uil-plus-square"></i>
            {/* <p> Elections</p> */}
          </NavLink>
        </li>

        {/* Transfer Section */}
        <li
          className="ft_sm_li"
          style={{
            width: "35px",
            height: "35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--main-col)",
            borderRadius: "100%",
          }}
        >
          <NavLink
            style={({ isActive }) => {
              return {
                display: "flex",
                fontSize: isActive ? "14px" : "13px",
                fontWeight: isActive && "600",
                alignItems: "center",
                flexDirection: "column",
              };
            }}
            to={`/transfer`}
            key={"transfer"}
          >
            <i class="uil uil-exchange"></i>
          </NavLink>
        </li>

        <li className="ft_sm_li">
          <NavLink
            style={({ isActive }) => {
              return {
                display: "flex",
                fontSize: isActive ? "14px" : "13px",
                fontWeight: isActive && "600",
                opacity: isActive ? "1" : "0.6",
                alignItems: "center",
                flexDirection: "column",
              };
            }}
            to={`/participate`}
            key={"participate"}
          >
            <i class="uil uil-check-square"></i>
            {/* <p>Participate</p> */}
          </NavLink>
        </li>
        <li className="ft_sm_li">
          <NavLink
            style={({ isActive }) => {
              return {
                display: "flex",
                fontSize: isActive ? "14px" : "13px",
                fontWeight: isActive && "600",
                opacity: isActive ? "1" : "0.6",
                alignItems: "center",
                flexDirection: "column",
              };
            }}
            to={`/faq`}
            key={"faq"}
          >
            <i class="uil uil-shield-question" style={{ fontSize: "21px" }}></i>
            {/* <p>FAQ</p> */}
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default BottomNavigationBar;
