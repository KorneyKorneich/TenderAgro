import Logo from "@/shared/assets/icons/Logo.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  buttonTitle: string;
  buttonHandle: () => void;
}

const Header = ({ buttonTitle, buttonHandle }: HeaderProps) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation(["common"]);

  const handleToHome = () => {
    navigate("/");
  };

  const handleChangeLang = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
  };

  return (
    <header className="w-full px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-around items-center">
        <div className="cursor-pointer mb-4 sm:mb-0" onClick={handleToHome}>
          <img className="w-1/3 mx-auto sm:mx-0 " src={Logo} />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            className="px-5 py-2 bg-blue-500 text-white border border-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
            onClick={buttonHandle}
          >
            {buttonTitle}
          </button>
          <select
            className="px-4 py-2 bg-white text-blue-500 border border-blue-500 rounded-lg focus:outline-none hover:bg-gray-100 transition duration-200"
            onChange={handleChangeLang}
            defaultValue={i18n.language}
          >
            <option value="ru">{t("common.languages.ru")}</option>
            <option value="by">{t("common.languages.by")}</option>
            <option value="zh">{t("common.languages.zh")}</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;

