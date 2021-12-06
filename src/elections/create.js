import { useRef, useState } from "react";
import "../styles/createelection.css";

const CreateElection = () => {
  const [items, setitems] = useState([]);

  const [itemInp, setItemInp] = useState("");
  const [processTit, setProcessTit] = useState("");

  const hdImgPicker = useRef(null);
  const itemImgPicker = useRef(null);
  const [hdImg, setHdImg] = useState(null);
  const [itemImg, setItemImg] = useState(null);

  const addHeaderImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setHdImg(readerEvent.target.result);
    };
  };

  const addItemImg = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setItemImg(readerEvent.target.result);
    };
  };

  const addItem = () => {
    if (itemInp.trim().length > 0 && !items.includes(itemInp)) {
      setitems((prev) => [
        ...prev,
        { name: itemInp, img: itemImg ? itemImg : "" },
      ]);
      setItemInp("");
      setItemImg(null);
    }
    return;
  };

  const removeItem = (item) => {
    setitems(items?.filter((it) => it !== item));
  };

  // Create Election Function
  const createElection = () => {
    if (processTit.trim().length < 1) return;
    //

    const electionData = {
      headerImage: hdImg ? hdImg : "",
      candidates: items,
      processTit,
    };

    // Logic to Create Election
    console.log(electionData);

    // Reset Inputs
    setitems([]);
    setHdImg(null);
    setItemInp("");
    setProcessTit("");

    // Can redirect here
  };

  return (
    <div className="create_elt">
      <div className="create_elt_inn">
        <div className="crt_hd">
          <p>Recently Created Elections</p>
        </div>

        {/* **************** */}
        <div className="vote_sect">
          <div className="vote_sect_img">
            <div className="vote_hd_img">
              {hdImg ? (
                <img src={hdImg} alt="" />
              ) : (
                <i className="uil uil-image" />
              )}
            </div>

            <input
              ref={hdImgPicker}
              hidden
              onChange={addHeaderImage}
              type="file"
              accept=".jpg, .jpeg, .png"
            />

            <div
              className="vote_add_img"
              onClick={() => hdImgPicker.current.click()}
            >
              <p>Add Election Header Image</p>
            </div>
          </div>

          <div className="v_inp_cov inpCont_cand">
            <p className="inp_tit">Process Title</p>
            <input
              type="text"
              placeholder="Best cryptocurrency"
              value={processTit}
              onChange={(e) => setProcessTit(e.target.value)}
            />
            <p className="ensure_txt">
              Entries must be of minimum length of two.
            </p>
          </div>
          {/* ************** */}
          <div className="v_inp_cov inpCont_cand">
            <p className="inp_tit">Candidates</p>
            <div className="add_item_sect">
              <div className="add_item_sect_r1">
                <input
                  type="text"
                  placeholder="Choice Coin"
                  value={itemInp}
                  onChange={(e) => setItemInp(e.target.value)}
                />

                <div className="item_img_preview">
                  {itemImg ? (
                    <img src={itemImg} alt="" />
                  ) : (
                    <i className="uil uil-image" />
                  )}
                </div>

                <input
                  ref={itemImgPicker}
                  hidden
                  onChange={addItemImg}
                  type="file"
                  accept=".jpg, .jpeg, .png"
                />

                <div
                  className="add_butt"
                  onClick={() => itemImgPicker.current.click()}
                >
                  <p>Add Image</p>
                </div>
              </div>
              <p className="ensure_txt">
                Entries must be of minimum length of two.
              </p>
            </div>

            <div className="addItemButt" onClick={() => addItem()}>
              <p>Add Election Participant</p>
            </div>
          </div>

          {items?.map((item) => (
            <div className="item_list">
              <div className="item_list_img">
                {item?.img ? (
                  <img src={item?.img} alt="" />
                ) : (
                  <i className="uil uil-asterisk" />
                )}
              </div>

              <div className="item_list_name">
                <p>{item.name}</p>
              </div>

              <div className="rm_butt" onClick={() => removeItem(item)}>
                <p>Delete Participant</p>
              </div>
            </div>
          ))}

          <br />

          <div className="crt_butt">
            <button onClick={createElection}>Create Election</button>
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
