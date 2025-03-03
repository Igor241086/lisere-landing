import { useDispatch } from "react-redux";
import { clearData } from "../redux/swapiSlice";

const Footer = () => {
  const dispatch = useDispatch();
  
  return <button onClick={() => dispatch(clearData())}>Clear</button>;
};

export default Footer;