import React, { useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import IconButton from "@mui/material/IconButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Checkbox } from "@mui/material";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import arrowRight from "../../Assets/Icons/Right Arrow.svg";

export function FeedbackForm() {
  const [modal, setModal] = useState(true);
  const [feedback, setFeedback] = useState([]);
  console.log(feedback);
  const localFeedbacks = JSON.parse(
    localStorage.getItem("localFeedbacks") || "[]"
  );

  return (
    <div
      style={modal ? { display: "flex" } : { display: "none" }}
      id="feedback-main-container"
    >
      <form
        id="feedback-main-form-container"
        onSubmit={(e) => {
          e.preventDefault();
          localStorage.setItem(
            "localFeedbacks",
            JSON.stringify([...localFeedbacks, feedback])
          );
          setFeedback({ name: "", feedback: "" });
        }}
      >
        <div id="feedback-main-form-container-top">
          <div>
            <IconButton
              onClick={() => {
                setModal(false);
              }}
            >
              <CloseOutlinedIcon style={{ fontSize: "14px" }} />
            </IconButton>
          </div>
          <h2>Ваш отзыв</h2>
        </div>
        <div id="feedback-form-name-part">
          <input
            type="text"
            value={feedback.name}
            placeholder="Фамилия и имя"
            onChange={(e) => {
              setFeedback({ ...feedback, name: e.target.value });
            }}
          />
          <div id="feedback-form-text-part">
            <input
              type="text"
              value={feedback.feedback}
              placeholder="Напишите свой отзыв..."
              onChange={(e) => {
                setFeedback({ ...feedback, feedback: e.target.value });
              }}
            />
            <div id="feedback-form-text-part-bottom">
              <p>Отзыв</p>
              <div id="feedback-form-text-part-bottom-right">
                <label>
                  <span>
                    {feedback.img ? feedback.img.name : "Прикрепить фото"}
                  </span>
                  <AttachFileIcon />
                  <input
                    type="file"
                    onChange={(e) => {
                      setFeedback({ ...feedback, img: e.target.files[0] });
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
          <div>
            <Checkbox
              icon={
                <StarOutlineOutlinedIcon
                  id="catalog-stars"
                  style={{ color: "#514A7E" }}
                />
              }
              checkedIcon={
                <StarOutlinedIcon
                  id="catalog-stars"
                  style={{ color: "#514A7E" }}
                />
              }
            />
            <Checkbox
              icon={
                <StarOutlineOutlinedIcon
                  id="catalog-stars"
                  style={{ color: "#514A7E" }}
                />
              }
              checkedIcon={
                <StarOutlinedIcon
                  id="catalog-stars"
                  style={{ color: "#514A7E" }}
                />
              }
            />
            <Checkbox
              icon={
                <StarOutlineOutlinedIcon
                  id="catalog-stars"
                  style={{ color: "#514A7E" }}
                />
              }
              checkedIcon={
                <StarOutlinedIcon
                  id="catalog-stars"
                  style={{ color: "#514A7E" }}
                />
              }
            />
            <Checkbox
              icon={
                <StarOutlineOutlinedIcon
                  id="catalog-stars"
                  style={{ color: "#514A7E" }}
                />
              }
              checkedIcon={
                <StarOutlinedIcon
                  id="catalog-stars"
                  style={{ color: "#514A7E" }}
                />
              }
            />
            <Checkbox
              icon={
                <StarOutlineOutlinedIcon
                  id="catalog-stars"
                  style={{ color: "#514A7E" }}
                />
              }
              checkedIcon={
                <StarOutlinedIcon
                  id="catalog-stars"
                  style={{ color: "#514A7E" }}
                />
              }
            />
          </div>
        </div>
        <button id="send-feedback-btn" type="submit">
          Сохранить
          <img src={arrowRight} alt="" />
        </button>
      </form>
    </div>
  );
}
