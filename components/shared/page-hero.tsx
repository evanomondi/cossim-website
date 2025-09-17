import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

interface PageHeroProps {
  title: string;
  highlightText?: string;
  description: string;
  primaryButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

export default function PageHero({
  title,
  highlightText,
  description,
  primaryButton,
  secondaryButton,
  className = ""
}: PageHeroProps) {
  return (
    <section className={`py-20 ${className}`}>
      <MaxWidthWrapper>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {title}
            {highlightText && (
              <span className="text-gradient_cossim"> {highlightText}</span>
            )}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>
          {(primaryButton || secondaryButton) && (
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {primaryButton && (
                <Button 
                  size="lg" 
                  className="px-8 bg-cossim-orange hover:bg-cossim-orange-dark"
                  onClick={primaryButton.onClick}
                >
                  {primaryButton.text}
                </Button>
              )}
              {secondaryButton && (
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-cossim-orange text-cossim-orange hover:bg-cossim-orange hover:text-white"
                  onClick={secondaryButton.onClick}
                >
                  {secondaryButton.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
