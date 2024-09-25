import { Logo } from "@shared/assets/icons/Logo";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  buttonTitle: string;
  buttonHandle: () => void;
}

const Header = ({ buttonTitle, buttonHandle }: HeaderProps) => {
  const navigate = useNavigate();

  const handleToHome = () => {
    navigate("/");
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
        </div>
      </div>
    </div>
  );
};

export default Header;

