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
  img,
  buttonText,
  buttonHandler,
}: InfoSectionProps) => {
  return (
    <>
      <div
        className="relative mb-7 text-center bg-no-repeat bg-cover bg-center min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] flex items-center justify-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0  bg-black opacity-50"></div>
        <div className="relative  z-10 w-3/4 mx-auto my-4 md:my-0 text-white flex flex-col items-center">
          <h1 className="text-4xl font-bold">{h1Text}</h1>
          <p className="mt-2 text-xl">{pText}</p>
          <Button
            className="mt-4"
            buttonHandler={buttonHandler}
            buttonText={buttonText}
          />
        </div>
      </div>
    </>
  );
};

export default InfoSection;

