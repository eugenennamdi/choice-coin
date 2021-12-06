import { useSelector, useDispatch } from "react-redux";

const OverlayElectionModal = () => {
  const dispatch = useDispatch();

  const { openElectModal, modalData } = useSelector(
    (state) => state.status.electModal
  );

  return (
    modalData && (
      <div
        className="modal_cov"
        style={{ display: `${!!openElectModal ? "flex" : "none"}` }}
      >
        <div className="modal_cont">
          <div className="modal_r1">
            <div className="modal_elt_img">
              <img src={modalData.elect_img} alt="" />
            </div>
            <div className="modal_elt_tit">{modalData.elect_tit}</div>
          </div>

          <div className="modal_elt_desc">{modalData.elect_desc}</div>

          {/*  */}

          <div className="modal_cand">
            <div className="modal_cand_hd">Candidates</div>

            <ul className="modal_cand_list">
              {modalData.elect_cand?.map((item) => (
                <li className="cand_item">
                  <div className="cand_img_cont">
                    {!!item.cand_img ? (
                      <img src={item.cand_img} alt="" />
                    ) : (
                      <i
                        className="uil uil-asterisk"
                        style={{ fontSize: "16px" }}
                      ></i>
                    )}
                  </div>
                  <p className="cand_det">{item.cand_det}</p>
                </li>
              ))}
            </ul>

            <div className="modal_butts">
              <button>Start Election</button>
              <button>End Election</button>
            </div>
          </div>
        </div>

        <div
          className="close_modal"
          onClick={() => dispatch({ type: "closePopupElection" })}
        >
          Go Back
        </div>
      </div>
    )
  );
};

export default OverlayElectionModal;
