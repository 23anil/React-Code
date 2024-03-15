import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameplay } from "../Action.js/action";

function Display() {
  let dispatch = useDispatch();
  let { data ,error} = useSelector((state) => state);
  console.log(data);
  useEffect(() => {
    dispatch(gameplay());
  }, []);

  return <div>
    {
      data ? data.map((val)=><p key={val.id}> {val.id}.{val.name}</p>) : <p>{error}</p>
    }
  </div>;
}

export default Display;
