import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  backgroundColor?: "orange" | "gray";
  className?: string;
}

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  backgroundColor = "orange",
  className = ""
}: CTASectionProps) {
  const bgClass = backgroundColor === "orange" 
    ? "bg-cossim-orange text-white" 
    : "bg-gray-50 text-gray-900";

  const primaryButtonClass = backgroundColor === "orange"
    ? "bg-white text-cossim-orange hover:bg-gray-100"
    : "bg-cossim-orange text-white hover:bg-cossim-orange-dark";

  const secondaryButtonClass = backgroundColor === "orange"
    ? "border-white text-white hover:bg-white hover:text-cossim-orange"
    : "border-cossim-orange text-cossim-orange hover:bg-cossim-orange hover:text-white";

  return (
    <section className={`py-20 ${className}`}>
      <MaxWidthWrapper>
        <div className={`rounded-2xl px-6 py-16 text-center ${bgClass}`}>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className={`mt-4 text-lg ${backgroundColor === "orange" ? "opacity-90" : ""}`}>
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              className={`px-8 ${primaryButtonClass}`}
              onClick={primaryButton.onClick}
            >
              {primaryButton.text}
            </Button>
            {secondaryButton && (
              <Button 
                size="lg" 
                variant="outline" 
                className={secondaryButtonClass}
                onClick={secondaryButton.onClick}
              >
                {secondaryButton.text}
              </Button>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
