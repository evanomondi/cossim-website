"use client";

import SpotlightCard from "./SpotlightCard";
import { Icons } from "./icons";
import { Badge } from "@/components/ui/badge";

interface FeatureSpotlightCardProps {
  title: string;
  subtitle?: string;
  description: string;
  icon: keyof typeof Icons;
  iconBgColor?: string;
  iconTextColor?: string;
  badge?: {
    text: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
  };
  spotlightColor?: string;
  className?: string;
  stats?: Array<{
    label: string;
    value: string;
    color?: string;
  }>;
}

export default function FeatureSpotlightCard({
  title,
  subtitle,
  description,
  icon,
  iconBgColor = "bg-gray-100",
  iconTextColor = "text-gray-600",
  badge,
  spotlightColor = "rgba(255, 255, 255, 0.2)",
  className = "",
  stats
}: FeatureSpotlightCardProps) {
  const Icon = Icons[icon];

  return (
    <SpotlightCard 
      className={`h-full p-8 ${className}`} 
      spotlightColor={spotlightColor}
    >
      <div className="flex flex-col h-full space-y-4">
        <div className="flex items-center gap-3">
          <div className={`rounded-full p-3 ${iconBgColor}`}>
            <Icon className={`h-6 w-6 ${iconTextColor}`} />
          </div>
          <div>
            <h3 className="font-semibold text-white">{title}</h3>
            {subtitle && <p className="text-sm text-gray-300">{subtitle}</p>}
          </div>
        </div>
        
        {badge && (
          <Badge variant={badge.variant || "default"} className="w-fit">
            {badge.text}
          </Badge>
        )}
        
        <p className="text-sm text-gray-300 flex-grow">
          {description}
        </p>
        
        {stats && (
          <div className="space-y-2 mt-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span className="text-gray-300">{stat.label}</span>
                <span className={`font-medium ${stat.color || "text-white"}`}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </SpotlightCard>
  );
}
