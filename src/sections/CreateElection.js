import { useState } from "react";
import "../styles/createelection.css";

const CreateElection = () => {
  const he = 150;

  const [page, setpage] = useState(1.9);

  const [items, setitems] = useState([]);

  const [itemInp, setItemInp] = useState("");

  const addItem = () => {
    if (itemInp.trim().length > 2 && !items.includes(itemInp)) {
      setitems((prev) => [...prev, itemInp]);
      setItemInp("");
    }
    return;
  };

  const removeItem = (item) => {
    setitems(items?.filter((it) => it !== item));
  };

  return (
    <div className="create_elt">
      <div className="create_elt_inn">
        <div className="crt_hd">
          <p>Recently Created Elections</p>
        </div>

        {/* **************** */}
        <div className="vote_sect">
          <div className="v_r1">
            <div className="v_inp_cov">
              <p className="inp_tit">Process Title</p>
              <input type="text" placeholder="Best cryptocurrency" />
            </div>
            <div className="v_inp_cov">
              <p className="inp_tit">
                <i className="uil uil-keyhole-circle"></i> Administrative key
              </p>
              <input
                type="text"
                placeholder="Your administrative key here..."
              />
            </div>
          </div>
          {/* ************** */}
          <div className="v_inp_cov inpCont_cand">
            <p className="inp_tit">Candidates</p>
            <div className="add_item_sect">
              <input
                type="text"
                placeholder="Choice Coin"
                value={itemInp}
                onChange={(e) => setItemInp(e.target.value)}
              />
              <div className="add_butt" onClick={() => addItem()}>
                <div>
                  <i className="uil uil-plus"></i>
                </div>
                <p>Add</p>
              </div>
            </div>
            <p className="ensure_txt">
              Entries must be of minimum length of three(3)
            </p>
          </div>

          {items?.map((item) => (
            <div className="item_list">
              <p>{item}</p>
              <div className="rm_butt" onClick={() => removeItem(item)}>
                Delete
                <i
                  className="uil uil-times"
                  style={{
                    marginTop: "1px",
                    marginLeft: "5px",
                    fontSize: "16px",
                  }}
                ></i>
              </div>
            </div>
          ))}

          <div className="v_inp_cov inpCont_full">
            <p className="inp_tit">Escrow Address</p>
            <input
              type="text"
              placeholder="GHUHJJc351155C80aCD043BD5F8FE7ffc8536af1fF9375"
            />
            <p className="ensure_txt">
              Please ensure you're already opted in to Choice Coin. Minimum of
              800 CHOICE
            </p>
          </div>

          <div className="v_inp_cov inpCont_full">
            <p className="inp_tit">Escrow Mnemonics</p>
            <input type="text" placeholder="fire water make glue hunter" />
          </div>

          <div className="crt_butt">
            <button>Create Election</button>
            <p className="safety">
              <span>Safety disclaimer :</span> We never store your data.
              Everything is encrypted.
            </p>
          </div>

          {/* ************** */}
        </div>

        {/* **************** */}
      </div>
    </div>
  );
};

export default CreateElection;
