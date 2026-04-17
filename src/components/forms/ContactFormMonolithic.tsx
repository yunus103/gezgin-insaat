"use client";

import { useState } from "react";
import { z } from "zod";
import { RiArrowRightUpLine } from "react-icons/ri";

const schema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalı"),
  email: z.string().email("Geçerli bir e-posta girin"),
  subject: z.string().optional(),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalı"),
});

type FormData = z.infer<typeof schema>;
type Status = "idle" | "loading" | "success" | "error";
type FieldErrors = Partial<Record<keyof FormData, string[]>>;

interface ContactFormMonolithicProps {
  formTitle?: string;
  successMessage?: string;
}

export function ContactFormMonolithic({
  formTitle = "Mesaj Gönderin",
  successMessage = "Mesajınız alındı. En kısa sürede size dönüş yapacağız.",
}: ContactFormMonolithicProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name as keyof FormData]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setFieldErrors({});

    const result = schema.safeParse(formData);
    if (!result.success) {
      setFieldErrors(result.error.flatten().fieldErrors as FieldErrors);
      setStatus("idle");
      return;
    }

    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement)?.value || "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, honeypot }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-16 text-center">
        <div className="text-4xl mb-4">✓</div>
        <p className="text-lg font-medium text-on-surface">{successMessage}</p>
      </div>
    );
  }

  const fieldClass =
    "w-full bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors placeholder:text-outline/50 font-light text-on-surface";
  const labelClass = "text-[10px] font-bold text-primary uppercase tracking-[0.2em]";

  return (
    <div className="relative bg-surface-container-low p-6 md:p-10 lg:p-12">
      {/* Left accent bar */}
      <div className="absolute top-0 left-0 w-[3px] h-full bg-primary/20" />

      <h2 className="text-2xl md:text-3xl font-headline font-bold tracking-tight mb-8 text-on-surface">
        {formTitle}
      </h2>

      {/* Honeypot */}
      <div className="absolute opacity-0 pointer-events-none h-0 overflow-hidden" aria-hidden="true">
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={labelClass}>Ad Soyad</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="İsminizi buraya yazın"
              className={fieldClass}
            />
            {fieldErrors.name && <p className="text-xs text-error">{fieldErrors.name[0]}</p>}
          </div>
          <div className="space-y-2">
            <label className={labelClass}>E-posta</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="eposta@adresiniz.com"
              className={fieldClass}
            />
            {fieldErrors.email && <p className="text-xs text-error">{fieldErrors.email[0]}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label className={labelClass}>Konu</label>
          <input
            name="subject"
            value={formData.subject || ""}
            onChange={handleChange}
            placeholder="Hangi proje ile ilgileniyorsunuz?"
            className={fieldClass}
          />
        </div>

        <div className="space-y-2">
          <label className={labelClass}>Mesajınız</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Detayları buraya yazın..."
            rows={4}
            className={`${fieldClass} resize-none`}
          />
          {fieldErrors.message && <p className="text-xs text-error">{fieldErrors.message[0]}</p>}
        </div>

        {status === "error" && (
          <p className="text-sm text-error">Bir hata oluştu. Lütfen tekrar deneyin.</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-primary text-on-primary py-4 font-headline font-extrabold tracking-[0.3em] uppercase hover:bg-on-surface transition-all active:scale-[0.98] disabled:opacity-60"
        >
          {status === "loading" ? "GÖNDERİLİYOR..." : "GÖNDER"}
        </button>
      </form>
    </div>
  );
}
