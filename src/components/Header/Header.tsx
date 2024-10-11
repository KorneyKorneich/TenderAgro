import { Logo } from "@shared/assets/icons/Logo";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  buttonTitle: string;
  buttonHandle: () => void;
}

const Header = ({ buttonTitle, buttonHandle }: HeaderProps) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleToHome = () => {
    navigate("/");
  };

  const handleChangeLang = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
  };

  return (
    <div className="flex justify-center">
      <div className="w-3/4 mx-10 flex justify-between">
        <div className="self-center cursor-pointer" onClick={handleToHome}>
          <Logo />
        </div>
        <div className="self-center">
          {/* Кнопка */}
          <button
            className="px-5 py-1 bg-white text-blue-500 border-solid border-2 border-blue-500 rounded-lg"
            onClick={buttonHandle}
          >
            {buttonTitle}
          </button>

          {/* Выпадающий список для выбора языка */}
          <select
            className="ml-4 px-3 py-1 bg-white text-blue-500 border-solid border-2 border-blue-500 rounded-lg"
            onChange={handleChangeLang}
            defaultValue={i18n.language} // Устанавливаем начальное значение
          >
            <option value="ru">Русский</option>
            <option value="by">Белорусский</option>
            <option value="zh">Китайский</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;

