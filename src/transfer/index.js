import "../styles/transfer.css";
import { useState } from "react";

const Index = () => {
  const [amount, setAmount] = useState(0);
  const [addr, setAddr] = useState("");

  return (
    <div className="transfer_cont">
      <div className="transfer_cont_inn">
        <div className="trans_hd">Transfer Choices To Any Address here</div>

        <div className="transf_inps">
          <div className="transf_input_cover">
            <p className="trsf_amt">Amount to send</p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <div className="trsf_max">
                <p>Max</p>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "30px",
              height: "30px",
              display: "flex",
              display: "flex",
              fontSize: "17px",
              borderRadius: "100%",
              alignItems: "center",
              alignItems: "center",
              margin: "10px 0px",
              flexDirection: "column",
              justifyContent: "center",
              border: "1px solid var(--txt-alt)",
            }}
          >
            <i
              className="uil uil-exchange"
              style={{ transform: "rotate(90deg)" }}
            ></i>
          </div>

          <div className="transf_input_cover">
            <input
              type="text"
              value={addr}
              placeholder="Wallet address to send to"
              onChange={(e) => setAddr(e.target.value)}
            />
          </div>

          <button className="submitTrsf">Transfer Assets</button>

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Index;
