import "../styles/transfer.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import algosdk from "algosdk";
import MyAlgoConnect from "@randlabs/myalgo-connect";

const Index = () => {
  const [amount, setAmount] = useState(0);
  const [addr, setAddr] = useState("");

  const [balance, setBalance] = useState("0.0000000");

  const dispatch = useDispatch();

  // algod Client
  const algodClient = new algosdk.Algodv2(
    {
      "X-API-Key": "Xy8NsXxfJg2cQ2YQ4pax6aLrTcj55jZ9mbsNCM30 ",
    },
    "https://testnet-algorand.api.purestake.io/ps2",
    ""
  );

  const myAlgoWallet = new MyAlgoConnect();

  // wallet-type & address
  const walletType = localStorage.getItem("wallet-type");
  const walletAddress = localStorage.getItem("address");

  const makeTransfer = async () => {
    console.log("HEY");
    // check if localStorage items were deleted.
    if (!walletType || !walletAddress) {
      dispatch({ type: "modal_connect" });
      return;
    }

    const myAccountInfo = await algodClient
      .accountInformation(walletAddress)
      .do();

    // const receiverAccountInfo = await algodClient.accountInformation(addr).do();

    if (myAccountInfo.assets.length === 0) {
      alert("You need to optin to Choice Coin");
      return;
    }

    // if (receiverAccountInfo.assets.length === 0) {
    //   alert("The receipient is not opt in to Choice.");
    //   return;
    // }

    console.log(myAccountInfo.assets);
  };

  const setMaxBalance = () => {
    setAmount(balance);
  };

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
                <button onClick={setMaxBalance}>Max</button>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "30px",
              height: "30px",
              display: "flex",
              fontSize: "17px",
              borderRadius: "100%",
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

          <button className="submitTrsf" onClick={makeTransfer}>
            Transfer Assets
          </button>

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Index;
