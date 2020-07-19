import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          name=""
          id=""
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          name=""
          id=""
          placeholder="What happened today"
          className="notes__text-area"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://s1.eestatic.com/2016/02/16/actualidad/Actualidad_102752117_129329428_1024x576.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
};
