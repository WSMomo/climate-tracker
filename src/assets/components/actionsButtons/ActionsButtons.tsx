import DarkModeButton from "../appComponents/darkModeButton/DarkModeButton";
import Languages from "../languagesSelect/Languages";

function ActionsButtons() {
  return (
    <div className="flex gap-4">
      <Languages />
      <DarkModeButton />
    </div>
  );
}

export default ActionsButtons;
