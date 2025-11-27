import { useRef } from "react";

const Form = () => {
  const inpurRef = useRef(null);
  const handleInputFocus = () => {
    inpurRef.current.focus();
  };

  return (
    <>
      <input ref={inpurRef} className="border-gray-700 border-2 m-2" />
      <button
        className="m-5 text-2xl border-2 rounded-2xl  font-bold p-2"
        onClick={handleInputFocus}
      >
        Focus the input
      </button>
    </>
  );
};

export default Form;
