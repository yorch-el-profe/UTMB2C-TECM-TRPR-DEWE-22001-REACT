import ReactDOM from "react-dom";
import Loading from "../components/loading";

const root = document.getElementById("loading-root");

function LoadingPortal() {
	return ReactDOM.createPortal(<Loading />, root);
}

export default LoadingPortal;
