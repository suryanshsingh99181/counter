import { useDispatch } from "react-redux";
import BaseComponent from "bootstrap/js/dist/base-component";
import { useRef } from "react";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement=useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handlePrivacy = () => {
    dispatch(privacyActions.toggle());
  };
  const handleAdd = () => {
     dispatch(counterActions.add(inputElement.current.value))
    
    inputElement.current.value="";
  };
  const handleSubstract = () => {
    
    dispatch(counterActions.subtract(inputElement.current.value));
    inputElement.current.value="";
  };
  
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center m-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacy}
        >
          Privacy
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input type="text" placeholder="Enter Number" className="number-input" ref={inputElement}/>

        <button
          type="button"
          className="btn btn-info"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubstract}
        >
          Substract
        </button>
      </div>
      {/* <button type="button" className="btn btn-danger">
        Danger
      </button>
      <button type="button" className="btn btn-warning">
        Warning
      </button>
      <button type="button" className="btn btn-info">
        Info
      </button>
      <button type="button" className="btn btn-light">
        Light
      </button>
      <button type="button" className="btn btn-dark">
        Dark
      </button>

      <button type="button" className="btn btn-link">
        Link
      </button> */}
    </>
  );
};

export default Controls;
