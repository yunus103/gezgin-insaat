"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { RichText } from "@/components/ui/RichText";

interface AboutRichTextProps {
  data: {
    contentTitle?: string;
    contentBody?: any[];
  };
}

export function AboutRichText({ data }: AboutRichTextProps) {
  if (!data?.contentBody) return null;

  return (
    <section className="py-20 px-4 md:px-12 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <FadeIn direction="up">
          {data.contentTitle && (
            <div className="mb-16">
              <h2 className="text-sm font-label font-bold uppercase tracking-[0.3em] text-primary mb-6">
                KURUMSAL
              </h2>
              <h3 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter text-on-background">
                {data.contentTitle}
              </h3>
              <div className="w-20 h-1 bg-primary mt-8"></div>
            </div>
          )}

          <div className="relative">
            {/* Subtle decorative background element */}
            <div className="absolute -left-24 -top-12 text-[12rem] font-headline font-black text-outline-variant/5 select-none pointer-events-none hidden lg:block">
              GEZGIN
            </div>

            <RichText
              value={data.contentBody}
              className="prose-headings:font-headline prose-headings:font-bold prose-p:text-secondary prose-p:leading-relaxed prose-p:text-lg md:prose-p:text-xl prose-p:font-light"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
