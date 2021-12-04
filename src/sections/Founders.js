import "../styles/founders.css";
import ScrollText from "../components/ScrollText";

const Founders = () => {
  return (
    <div className="founders">
      <ScrollText word={"Meet the Team"} />

      <div className="found_scr">
        {/* <div className="found_scr_inn"> */}
        <div className="founder_box">
          <div className="founder_img">
            <img src="./img/5.png" alt="" />
          </div>
          <div className="founder_det">
            <p className="fo_name">Archie Chaudhury</p>
            <p className="fo_pos">Co Founder</p>
          </div>
        </div>
        <div className="founder_box">
          <div className="founder_img">
            <img src="./img/6.jpg" alt="" />
          </div>
          <div className="founder_det">
            <p className="fo_name">Brian Haney</p>
            <p className="fo_pos">Co Founder</p>
          </div>
        </div>
        <div className="founder_box">
          <div className="founder_img">
            <img src="./img/4.jpg" alt="" />
          </div>
          <div className="founder_det">
            <p className="fo_name">Oligbo Julie</p>
            <p className="fo_pos">Senior Developer</p>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
