import React from "react";
import "./AllFeedbackCompanent.css";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import MyImage from "../../Assets/Images/My Image.jpeg";

export function AllFeedbackCompanent() {
  const allFeedbacks = JSON.parse(
    localStorage.getItem("localFeedbacks") || "[]"
  );
  console.log(allFeedbacks.date);

  return (
    <div id="feedbacks-main-companents-container">
      <div id="feedbacks-companents-container">
        <div id="feedbacks-companents-container-top">
          <p>{allFeedbacks.length} отзывов</p>
          <div>
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
          </div>
        </div>
        {allFeedbacks.map((item, index) => {
          return (
            <div id="feedback-content-mainy" key={index}>
              <figure id="feedback-content-mainy-figure">
                <img src={MyImage} alt="" />
              </figure>
              <div id="feedback-content-mainy-right-content">
                <div id="feedback-content-mainy-right-content-top-content">
                  <div>
                    <StarOutlinedIcon />
                    <StarOutlinedIcon />
                    <StarOutlinedIcon />
                    <StarOutlinedIcon />
                    <StarOutlinedIcon />
                  </div>
                  <p>{item.name}</p>
                </div>
                <span>{item.feedback}</span>
                <div id="feedback-content-mainy-right-content-bottom-content">
                  <p>Смотреть фото</p>
                  <p>{parseFloat(item.sanaa, 5)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button id="add-feed-btn">asdd</button>
    </div>
  );
}
