"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone number is required"),
  ref: z.string().min(1, "Transaction reference is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(1, "Subject is required"),
  description: z.string().min(1, "Description is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const t = useTranslations("contact");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        reset();
        toast.success("Message sent sucessfully");
      } else {
        console.error("Failed to send email");
      }
    } catch (err) {
      console.error("Something went wrong", err);
    }
  };

  return (
    <div className="flex items-center flex-col md:flex-row gap-8">
      <div className="rounded-md w-full flex-1 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3607.9957324015786!2d55.302671!3d25.270729!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43460540162f%3A0xc7460b3fd9530f9c!2sAlfa%20Exchange%20Deira!5e0!3m2!1sen!2sus!4v1743749124805!5m2!1sen!2sus"
          className="h-130 min-w-full"
          loading="lazy"
        ></iframe>
      </div>
      <div className="flex-1">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex items-center gap-6 w-full mb-6">
            <div className="w-full">
              <Label>
                {t("name")} <span className="text-red-400">*</span>
              </Label>
              <Input
                placeholder={t("placeholder.name")}
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="w-full">
              <Label>
                {t("phone")} <span className="text-red-400">*</span>
              </Label>
              <Input
                placeholder={t("placeholder.phone")}
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-6 mb-6 w-full">
            <div className="w-full">
              <Label>
                {t("ref")} <span className="text-red-400">*</span>
              </Label>
              <Input placeholder={t("placeholder.ref")} {...register("ref")} />
              {errors.ref && (
                <p className="text-sm text-red-500">{errors.ref.message}</p>
              )}
            </div>
            <div className="w-full">
              <Label>
                {t("email")} <span className="text-red-400">*</span>
              </Label>
              <Input
                placeholder={t("placeholder.email")}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-6 mb-6 w-full">
            <div className="w-full">
              <Label>
                {t("subject")} <span className="text-red-400">*</span>
              </Label>
              <Select onValueChange={(value) => setValue("subject", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t("placeholder.subject")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Complaint">
                    {t("options.complaint")}
                  </SelectItem>
                  <SelectItem value="Tracking">
                    {t("options.tracking")}
                  </SelectItem>
                  <SelectItem value="Remittance">
                    {t("options.remittance")}
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.subject && (
                <p className="text-sm text-red-500">{errors.subject.message}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-6 mb-6 w-full">
            <div className="w-full">
              <Label>
                {t("description")} <span className="text-red-400">*</span>
              </Label>
              <Textarea
                className="min-h-36"
                placeholder={t("placeholder.description")}
                {...register("description")}
              />
              {errors.description && (
                <p className="text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Button type="submit" variant="primary">
              {isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                t("submit")
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
