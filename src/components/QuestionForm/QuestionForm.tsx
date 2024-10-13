import { Button } from "@/shared/components/Button/Button";
import { Input } from "@/shared/components/Input/Input";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

type Inputs = {
  name: string;
  email: string;
  topic: string;
  msg: string;
};

export const QuestionForm = () => {
  const { t } = useTranslation(["common"]);
  const {
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="w-2/4 mx-auto my-5">
      <div className="flex justify-center flex-col">
        <h2 className="text-3xl font-semibold text-center mb-2">
          {t("common.questionForm.title")}
        </h2>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                placeholder={t("common.questionForm.placeholders.name")}
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input placeholder="Email" {...field} />}
          />
          <Controller
            name="topic"
            control={control}
            render={({ field }) => (
              <Input
                placeholder={t("common.questionForm.placeholders.messageTheme")}
                {...field}
              />
            )}
          />
          <Controller
            name="msg"
            control={control}
            render={({ field }) => (
              <Input
                placeholder={t("common.questionForm.placeholders.message")}
                {...field}
              />
            )}
          />
          <div className="flex justify-center">
            <Button
              buttonText={t("common.buttons.send")}
              buttonHandler={handleSubmit(onSubmit)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

