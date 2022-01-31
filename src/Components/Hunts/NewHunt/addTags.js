import React, { useEffect } from "react";

export default function AddTags() {
  let input, hashtagArray, container, t;

  useEffect(() => {
    input = document.querySelector("#hashtags");
    container = document.querySelector(".tag-container");
    hashtagArray = [];
  }, []);

  function tagSetter(e) {
    if ((e.which == 13 && input.value.length > 0) || e.type == "click") {
      var text = document.createTextNode(input.value);
      var p = document.createElement("p");
      container.appendChild(p);
      p.appendChild(text);
      p.classList.add("tag");
      input.value = "";

      let deleteTags = document.querySelectorAll(".tag");

      for (let i = 0; i < deleteTags.length; i++) {
        deleteTags[i].addEventListener("click", () => {
          container.removeChild(deleteTags[i]);
        });
      }
    }
  }

  return (
    <>
      <div className="fullInputWidth">
        <label for="pointValue">Tags</label>
      </div>
      <div className="fullInputWidth">
        <div className="flexDisplay discoverMoreSearch">
          <input
          className="sevenFiveWidth"
            type="text"
            id="hashtags"
            onKeyUp={tagSetter}
            autocomplete="off"
          ></input>
          <button className="secondaryButton twentyFiveWidth" onClick={tagSetter}>
            Add Hunt
          </button>
        </div>
        <div className="tag-container"></div>
      </div>
    </>
  );
}
