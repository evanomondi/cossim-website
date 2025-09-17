"use client";

import { useState, useEffect } from "react";
import { Icons } from "@/components/shared/icons";
import { cn } from "@/lib/utils";

interface ComparisonStep {
  icon: keyof typeof Icons;
  title: string;
  description: string;
  time: string;
}

interface ProcessComparisonProps {
  title: string;
  subtitle: string;
  withoutTitle: string;
  withTitle: string;
  withoutSteps: ComparisonStep[];
  withSteps: ComparisonStep[];
  className?: string;
}

export default function ProcessComparison({
  title,
  subtitle,
  withoutTitle,
  withTitle,
  withoutSteps,
  withSteps,
  className
}: ProcessComparisonProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % Math.max(withoutSteps.length, withSteps.length));
    }, 3000);

    return () => clearInterval(interval);
  }, [withoutSteps.length, withSteps.length]);

  return (
    <div className={cn("py-20", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {subtitle}
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Without Section */}
          <div className="rounded-xl border bg-red-50/50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-red-900">{withoutTitle}</h3>
            <div className="space-y-4">
              {withoutSteps.map((step, index) => {
                const Icon = Icons[step.icon];
                return (
                  <div 
                    key={index}
                    className={cn(
                      "flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm transition-all duration-500",
                      currentStep === index ? "ring-2 ring-red-200 scale-105" : ""
                    )}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                        <Icon className="h-5 w-5 text-red-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-900">{step.title}</p>
                        <p className="text-sm text-gray-500">{step.time}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* With Section */}
          <div className="rounded-xl border bg-green-50/50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-green-900">{withTitle}</h3>
            <div className="space-y-4">
              {withSteps.map((step, index) => {
                const Icon = Icons[step.icon];
                return (
                  <div 
                    key={index}
                    className={cn(
                      "flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm transition-all duration-500",
                      currentStep === index ? "ring-2 ring-green-200 scale-105" : ""
                    )}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                        <Icon className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-900">{step.title}</p>
                        <p className="text-sm text-gray-500">{step.time}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
