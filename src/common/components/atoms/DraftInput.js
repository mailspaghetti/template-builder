import React from "react";

import { INPUT_PLACEHOLDER } from "../../../pages/HomePage/data";

const DraftInput = () => (
  <input
    id="blocks"
    placeholder={INPUT_PLACEHOLDER}
    className="form__input"
    type="text"
  />
);

export default DraftInput;