import React from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import MyImage from "../../Assets/Images/My Image.jpeg";

export function AllFeedbackCompanent() {
  const allFeedbacks = JSON.parse(
    localStorage.getItem("localFeedbacks") || "[]"
  );
  console.log(allFeedbacks.date);

  return (
    <div>
      {allFeedbacks.map((item, index) => {
        console.log(item.date);
        return (
          <div>
            <figure>
              <img src={MyImage} alt="" />
            </figure>
            <div>
              <div>
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
              <div>
                <p>Смотреть фото</p>
                <p>{item.date}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
