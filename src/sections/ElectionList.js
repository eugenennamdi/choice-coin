import _ from "lodash";
import $ from "jquery";
import "../styles/electionlist.css";
import loadable from "@loadable/component";

// const $ = loadable.lib(() => import("jquery"));
// const _ = loadable.lib(() => import("lodash"));

const Chart = loadable(() => import("../components/Chart"));

const ElectionList = () => {
  return (
    <div className="ptt_elt">
      <div className="ptt_elt_inn">
        <div className="ptt_hd">
          <p>Participate in Ongoing Elections</p>
        </div>

        <ul className="card_list">
          {[
            {
              card_img:
                "https://i.postimg.cc/0jsrn6mv/istockphoto-1034363382-612x612.jpg",
              card_tit: "Best Cryptocurrency",
              card_desc: "vote which cryptocurrency is best.",
              card_cand: [
                {
                  cand_img: "https://i.postimg.cc/PxGqfLSD/choice.png",
                  cand_det: "ChoiceCoin",
                  cand_score: 35,
                },
                {
                  cand_img: "https://i.postimg.cc/gjHjTYqZ/download-1.png",
                  cand_det: "Bitcoin",
                  cand_score: 18,
                },
                {
                  cand_img:
                    "https://i.postimg.cc/rmWK5GDg/ethereum-eth-logo.png",
                  cand_det: "Ethereum",
                  cand_score: 12,
                },
                {
                  cand_img: "https://i.postimg.cc/fyqFcQL7/doge.png",
                  cand_det: "Dogecoin",
                  cand_score: 5,
                },
              ],
            },
            {
              card_img:
                "https://i.postimg.cc/jdPgKb8p/baea7d2229c8c6fd735ad9ddabf44a0e-removebg-preview2.png",
              card_tit: "US Presidential Elections",
              card_desc:
                "The election of the president and the vice president of the United States.",
              card_cand: [
                {
                  cand_img: "https://i.postimg.cc/C5WLz3K1/1.jpg",
                  cand_det: "Joe Biden",
                  cand_score: 900,
                },
                {
                  cand_img: "https://i.postimg.cc/7Y2ZpZBT/2.jpg",
                  cand_det: "Donald Trump",
                  cand_score: 760,
                },
                {
                  cand_img: "https://i.postimg.cc/bN9kKgVn/3.jpg",
                  cand_det: "Jo Jorgensen",
                  cand_score: 230,
                },
                {
                  cand_img: "https://i.postimg.cc/8zkMDvx0/4.jpg",
                  cand_det: "Howie Hawkins",
                  cand_score: 650,
                },
              ],
            },
            {
              card_img: "https://i.postimg.cc/brMTP6bN/4-c6d96be5.jpg",
              card_tit: "California gubernatorial recall election",
              card_desc: "Special recall election for the state of California",
              card_cand: [
                {
                  cand_img: "",
                  cand_det: "Yes",
                  cand_score: 70,
                },
                {
                  cand_img: "",
                  cand_det: "Nv",
                  cand_score: 21,
                },
                {
                  cand_img: "",
                  cand_det: "No",
                  cand_score: 101,
                },
              ],
            },
            {
              card_img: "https://i.postimg.cc/x85HbGZh/baking-1293986-340.webp",
              card_tit: "Legalization of Marijuana reform poll",
              card_desc: "Vote to legalize marijuana in the state of Arizona",
              card_cand: [
                {
                  cand_img: "",
                  cand_det: "Yes it should be legalized",
                  cand_score: 232,
                },
                {
                  cand_img: "",
                  cand_det: "No it shouldn't.",
                  cand_score: 43,
                },
              ],
            },
          ].map((slug, index) => {
            const scores = slug?.card_cand.map((mock) =>
              mock?.cand_score ? mock?.cand_score : 0
            );
            const options = slug?.card_cand.map((mock) => mock?.cand_det);

            const totalScore = _.sum(scores);

            return (
              <div className="card_cont">
                <div className="card_r1">
                  <div className="card_elt_img">
                    <img src={slug.card_img} alt="" />
                  </div>
                  <div className="card_elt_tit">{slug?.card_tit}</div>
                </div>

                <div className="card_elt_desc">{slug?.card_desc}</div>

                {/*  */}

                <div className="card_cand">
                  <div className="card_cand_hd">Candidates</div>

                  <ul className="card_cand_list">
                    {slug?.card_cand?.map((item) => (
                      <li className="cand_item">
                        <div className="cand_img_cont">
                          {!!slug.card_cand[0].cand_img ? (
                            <img src={item.cand_img} alt="" />
                          ) : (
                            <i className="uil uil-asterisk"></i>
                          )}
                        </div>
                        <p className="cand_det">{item.cand_det}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="chart_collap">
                    <Chart scores={scores} options={options} />
                    <ul className="cand_percent">
                      {slug?.card_cand?.map((item) => (
                        <li>
                          {Math.floor((item.cand_score / totalScore) * 100)}
                          %&nbsp;
                          {item.cand_det}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="vote_collap">
                    <div className="card_cand_hd">Options</div>
                    <ul className="vote_now_list">
                      {slug?.card_cand?.map((item, index) => {
                        return (
                          <li>
                            <input type="radio" name="options" />

                            <div className="vote_img_cont">
                              {!!slug.card_cand[0].cand_img ? (
                                <img src={item.cand_img} alt="" />
                              ) : (
                                <i className="uil uil-asterisk"></i>
                              )}
                            </div>
                            <p>{item.cand_det}</p>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="rec_vote_cont">
                      <butt className="record_vote">Submit vote</butt>
                    </div>
                  </div>

                  <div className="card_butts">
                    <button
                      onClick={(e) => {
                        $(".uil", e.target).toggleClass("uil-angle-up");

                        var voteNow = $(e.target)
                          .closest(".card_cand")
                          .find(".vote_collap");

                        if (!!voteNow.height()) {
                          voteNow.css({
                            maxHeight: "0px",
                            margin: "0px",
                          });
                        } else {
                          voteNow.css({
                            maxHeight: voteNow.get(0).scrollHeight + "px",
                            margin: "5px 0px 10px",
                          });
                        }
                      }}
                    >
                      Vote now <i className="uil uil-angle-down"></i>
                    </button>
                    <button
                      onClick={(e) => {
                        $(".uil", e.target).toggleClass("uil-angle-up");

                        var graph = $(e.target)
                          .closest(".card_cand")
                          .find(".chart_collap");

                        if (!!graph.height()) {
                          graph.css({
                            maxHeight: "0px",
                            marginTop: "0px",
                          });
                        } else {
                          graph.css({
                            maxHeight: graph.get(0).scrollHeight + "px",
                            marginTop: "20px",
                          });
                        }
                      }}
                    >
                      View Result <i className="uil uil-angle-down"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ElectionList;
