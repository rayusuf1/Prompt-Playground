import { Card } from "@/components/ui/card";
import { Palette, Zap, ListOrdered } from "lucide-react";
import { cn } from "@/lib/utils";

type PromptStyle = "creative" | "concise" | "stepbystep";

interface ResponseCardProps {
  style: PromptStyle;
  systemPrompt: string;
  response: string;
  isLoading?: boolean;
  className?: string;
}

const styleConfig = {
  creative: {
    icon: Palette,
    title: "Creative Style",
    className: "prompt-style-creative",
    iconColor: "text-coral",
  },
  concise: {
    icon: Zap,
    title: "Concise Style", 
    className: "prompt-style-concise",
    iconColor: "text-primary",
  },
  stepbystep: {
    icon: ListOrdered,
    title: "Step-by-Step",
    className: "prompt-style-stepbystep", 
    iconColor: "text-secondary",
  },
};

export default function ResponseCard({ 
  style, 
  systemPrompt, 
  response, 
  isLoading = false,
  className 
}: ResponseCardProps) {
  const config = styleConfig[style];
  const Icon = config.icon;

  return (
    <div className={cn("response-card p-6 rounded-xl", config.className, className)}>
      <div className="flex items-center mb-3">
        <Icon className={cn("text-xl mr-3 w-5 h-5", config.iconColor)} />
        <h3 className="font-semibold text-foreground">{config.title}</h3>
      </div>
      
      <div className="bg-white rounded-lg p-4 mb-3 border border-border">
        <p className="text-sm text-muted-foreground mb-2">System Prompt:</p>
        <p className="text-sm italic text-foreground">{systemPrompt}</p>
      </div>
      
      <div className="text-sm text-foreground leading-relaxed">
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="loading-pulse">Generating response...</div>
          </div>
        ) : (
          <div className="fade-in">
            <p className="font-medium text-accent-foreground mb-2">🎯 AI Response:</p>
            <div 
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: response.replace(/\n/g, '<br/>') }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
