import _ from "lodash";
import $ from "jquery";
import "../styles/electionlist.css";
import loadable from "@loadable/component";
import { useQuery } from "react-query";
import axios from "axios";
import { URL } from "../constants";

const Chart = loadable(() => import("../components/Chart"));

const ElectionList = () => {
  const { isLoading, error, data } = useQuery("elections", () =>
    axios.get(`${URL}/elections`).then((response) => response.data.data)
  );
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="ptt_elt">
      <div className="ptt_elt_inn">
        <div className="ptt_hd">
          <p>Participate in Ongoing Elections</p>
        </div>
        <ul className="card_list">
          {data.map((slug, index) => {
            const scores = slug?.candidates.map((data) =>
              data?.votes ? data?.votes : 0
            );
            const options = slug?.candidates.map((data) => data?.name);

            const totalScore = _.sum(scores);
            return (
              <div className="card_cont">
                <div className="card_r1">
                  <div className="card_elt_img">
                    <img src={slug.process_image} alt="" />
                  </div>
                  <div className="card_elt_tit">{slug.title}</div>
                </div>

                <div className="card_elt_desc">{slug?.card_desc}</div>

                <div className="card_cand">
                  <div className="card_cand_hd">Candidates</div>

                  <ul className="card_cand_list">
                    {slug?.candidates?.map((item) => (
                      <li className="cand_item">
                        <div className="cand_img_cont">
                          {!!item.image ? (
                            <img src={item.image} alt="" />
                          ) : (
                            <i className="uil uil-asterisk"></i>
                          )}
                        </div>
                        <p className="cand_det">{item.name}</p>
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
                      {slug?.candidates?.map((item, index) => {
                        return (
                          <li>
                            <input type="radio" name="options" />

                            <div className="vote_img_cont">
                              {!!item.image ? (
                                <img src={item.image} alt="" />
                              ) : (
                                <i className="uil uil-asterisk"></i>
                              )}
                            </div>
                            <p>{item.name}</p>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="rec_vote_cont">
                      <button className="record_vote">Submit vote</button>
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
