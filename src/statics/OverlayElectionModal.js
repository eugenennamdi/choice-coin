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
              <img src={modalData.process_image} alt="" />
            </div>
            <div className="modal_elt_tit">{modalData.title}</div>
          </div>

          <div className="modal_elt_desc">{modalData.description}</div>

          {/*  */}

          <div className="modal_cand">
            <div className="modal_cand_hd">Candidates</div>

            <ul className="modal_cand_list">
              {modalData.candidates?.map((item) => (
                <li className="cand_item">
                  <div className="cand_img_cont">
                    {!!item.image ? (
                      <img src={item.image} alt="" />
                    ) : (
                      <i
                        className="uil uil-asterisk"
                        style={{ fontSize: "16px" }}
                      ></i>
                    )}
                  </div>
                  <p className="cand_det">{item.name}</p>
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
