import { useTranslation } from "react-i18next";

export const QuestionForm = () => {
  const { t } = useTranslation(["common"]);

  return (
    <div className="w-full md:w-2/4 lg:w-1/4 mx-auto my-5">
      <div className="flex justify-center flex-col">
        <h2 className="text-3xl font-semibold text-center mb-2">
          {t("common.questionForm.title")}
        </h2>
        <p className="text-center">
          {t("common.questionForm.text")}
          <a className="hover:text-blue-500 underline" href="mailto:">
            {t("common.questionForm.link")}
          </a>
        </p>
      </div>
    </div>
  );
};

