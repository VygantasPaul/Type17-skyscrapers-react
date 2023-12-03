import React from "react";

const Textarea = React.forwardRef(({ value, onChange }, ref) => {
  return (
    <textarea
      value={value}
      ref={ref}
      name=""
      id=""
      cols="30"
      rows="10"
      placeholder="Content"
      onChange={onChange}
    ></textarea>
  );
});

export default Textarea;
