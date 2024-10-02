import { Button } from "@/shared/components/Button/Button";

interface InfoSectionProps {
  h1Text: string;
  pText: string;
  img: string;
  buttonText: string;
  buttonHandler: () => void;
}

const InfoSection = ({
  h1Text,
  pText,
  buttonText,
  buttonHandler,
}: InfoSectionProps) => {
  return (
    <>
      <div className="relative mb-7 bg-white py-10 text-center bg-flakes-in-bowl bg-no-repeat">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="w-3/4 mx-auto text-4xl font-bold text-white">
            {h1Text}
          </h1>
          <p className="w-3/4 mt-2 mx-auto text-xl text-white">{pText}</p>
          <Button buttonHandler={buttonHandler} buttonText={buttonText} />
        </div>
      </div>
      {/* <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold">Заголовок</h2>
        <div className="flex justify-center mt-8 space-x-10">
          <div>
            <div className="bg-gray-300 h-16 w-16 mx-auto mb-4"></div>
            <p>Описание 1</p>
          </div>
          <div>
            <div className="bg-gray-300 h-16 w-16 mx-auto mb-4"></div>
            <p>Описание 2</p>
          </div>
          <div>
            <div className="bg-gray-300 h-16 w-16 mx-auto mb-4"></div>
            <p>Описание 3</p>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default InfoSection;

