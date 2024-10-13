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
          <Button
            className="mt-2"
            buttonHandler={buttonHandler}
            buttonText={buttonText}
          />
        </div>
      </div>
    </>
  );
};

export default InfoSection;

