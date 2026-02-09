"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const feedbackSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  mobile: z.string().min(1, "Mobile number is required"),
  servicesUsed: z.array(z.string()).nonempty("Select at least one service"),
  likedFeatures: z.array(z.string()),
  improvementAreas: z.array(z.string()),
  feedback: z.string().min(1, "Feedback is required"),
});

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

export default function MainContent() {
  const t = useTranslations("content");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      fullName: "",
      mobile: "",
      servicesUsed: [],
      likedFeatures: [],
      improvementAreas: [],
      feedback: "",
    },
  });

  const onSubmit = (data: FeedbackFormValues) => {
    console.log("Submitted Data", data);
  };

  const serviceOptions: string[] = t.raw("services");
  const likedOptions: string[] = t.raw("likedOptions");
  const improvementOptions: string[] = t.raw("improvementOptions");

  return (
    <div className="container-md my-12">
      <h1 className="mx-auto max-w-200 text-center text-xl font-semibold mb-12">
        {t("title")}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex items-center w-full mb-8 gap-6">
          <div className="w-full">
            <Label>
              {t("fullName")}<span className="text-red-400">{t("required")}</span>
            </Label>
            <Input placeholder={t("fullNamePlaceholder")} {...register("fullName")} />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>

          <div className="w-full">
            <Label>
              {t("mobile")}<span className="text-red-400">{t("required")}</span>
            </Label>
            <Input placeholder={t("mobilePlaceholder")} {...register("mobile")} />
            {errors.mobile && (
              <p className="text-red-500 text-sm">{errors.mobile.message}</p>
            )}
          </div>
        </div>

        {/* Services Used */}
        <div className="w-full gap-6 mb-8">
          <Label className="mb-4">
            {t("servicesUsedLabel")}
            <span className="text-red-400">{t("required")}</span>
          </Label>
          <div className="flex flex-wrap gap-4">
            {serviceOptions.map((service) => (
              <Controller
                key={service}
                control={control}
                name="servicesUsed"
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={service}
                      checked={field.value?.includes(service)}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...field.value, service]
                          : field.value.filter((v) => v !== service);
                        field.onChange(newValue);
                      }}
                    />
                    <label htmlFor={service} className="text-sm font-medium">
                      {service}
                    </label>
                  </div>
                )}
              />
            ))}
          </div>
          {errors.servicesUsed && (
            <p className="text-red-500 text-sm">{errors.servicesUsed.message}</p>
          )}
        </div>

        {/* Liked Features */}
        <div className="w-full gap-6 mb-8">
          <Label className="mb-4">{t("likedFeaturesLabel")}</Label>
          <div className="flex flex-wrap gap-4">
            {likedOptions.map((item) => (
              <Controller
                key={item}
                control={control}
                name="likedFeatures"
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={item}
                      checked={field.value?.includes(item)}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...field.value, item]
                          : field.value.filter((v) => v !== item);
                        field.onChange(newValue);
                      }}
                    />
                    <label htmlFor={item} className="text-sm font-medium">
                      {item}
                    </label>
                  </div>
                )}
              />
            ))}
          </div>
        </div>

        {/* Areas of Improvement */}
        <div className="w-full gap-6 mb-8">
          <Label className="mb-4">
            {t("improvementAreasLabel")}
            <span className="text-red-400">{t("required")}</span>
          </Label>
          <div className="flex flex-wrap gap-4">
            {improvementOptions.map((item) => (
              <Controller
                key={item}
                control={control}
                name="improvementAreas"
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={item}
                      checked={field.value?.includes(item)}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...field.value, item]
                          : field.value.filter((v) => v !== item);
                        field.onChange(newValue);
                      }}
                    />
                    <label htmlFor={item} className="text-sm font-medium">
                      {item}
                    </label>
                  </div>
                )}
              />
            ))}
          </div>
        </div>

        {/* Feedback Text */}
        <div className="flex items-center w-full mb-8 gap-6">
          <div className="w-full">
            <Label>
              {t("feedbackLabel")}
              <span className="text-red-400">{t("required")}</span>
            </Label>
            <Textarea
              placeholder={t("feedbackPlaceholder")}
              {...register("feedback")}
              className="h-36"
            />
            {errors.feedback && (
              <p className="text-red-500 text-sm">{errors.feedback.message}</p>
            )}
          </div>
        </div>

        <div className="flex items-center w-full justify-end">
          <Button type="submit" variant="primary">
            {t("submit")}
          </Button>
        </div>
      </form>
    </div>
  );
}
