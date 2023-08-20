import { useDispatch, useSelector } from "react-redux";
import i18n from "../../../i18n";
import { RootState } from "../../redux/store";
import { setLanguage } from "../../redux/languagesReducer";

export default function Languages() {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.language);
  function handleLanguageChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    dispatch(setLanguage(selectedLanguage));
  }

  return (
    <div className="absolute top-2 right-2 border border-text-color">
      <select
        name="languages"
        id="languages"
        onChange={handleLanguageChange}
        value={language}
        className="text-text-color bg-secondary-color appearance-none py-1 px-2 cursor-pointer"
      >
        <option value="en">EN</option>
        <option value="it">IT</option>
      </select>
    </div>
  );
}
