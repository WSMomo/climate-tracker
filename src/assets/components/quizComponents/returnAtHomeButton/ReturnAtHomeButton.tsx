import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { returnAtHome } from "../../../redux/quizReducer";
import { HomeIcon } from "@heroicons/react/24/outline";
function ReturnAtHomeButton() {
  const dispatch = useDispatch();

  return (
    <Link
      to="/"
      onClick={() => dispatch(returnAtHome())}
      className="fixed top-1 left-1 min-w-fit bg-text-color text-secondary-color p-4 rounded-xl"
      title="Return at Home"
    >
      <HomeIcon className="w-8" />
    </Link>
  );
}

export default ReturnAtHomeButton;
