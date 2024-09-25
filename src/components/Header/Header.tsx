import { Logo } from "@shared/assets/icons/Logo";
const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 mx-10 flex justify-between">
        <div className="self-center">
          <Logo />
        </div>
        <div className="self-center">
          <button className="px-5 py-1 bg-white text-blue-500 border-solid border-2 border-blue-500 rounded-lg">
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

