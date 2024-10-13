import { Logo } from "@shared/assets/icons/Logo";
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
    <div className="flex justify-center">
      <div className="w-3/4 mx-10 flex justify-between">
        <div className="self-center cursor-pointer" onClick={handleToHome}>
          <Logo />
        </div>
        <div className="self-center">
          <button
            className="px-5 py-1 bg-white text-blue-500 border-solid border-2 border-blue-500 rounded-lg"
            onClick={buttonHandle}
          >
            {buttonTitle}
          </button>

          <select
            className="ml-4 px-3 py-1 bg-white text-blue-500 border-solid border-2 border-blue-500 rounded-lg"
            onChange={handleChangeLang}
            defaultValue={i18n.language}
          >
            <option value="ru">{t("common.languages.ru")}</option>
            <option value="by">{t("common.languages.by")}</option>
            <option value="zh">{t("common.languages.zh")}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;

