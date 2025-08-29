import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Wand2, CheckCircle, Lightbulb } from "lucide-react";
import ResponseCard from "@/components/response-card";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

type PromptStyle = "creative" | "concise" | "stepbystep";

interface AIResponse {
  creative: string;
  concise: string; 
  stepbystep: string;
}

const systemPrompts = {
  creative: "Respond in a fun, imaginative way with creative analogies, engaging examples, and playful language. Make complex topics feel exciting and approachable.",
  concise: "Provide brief, factual answers with key points only. Be direct and to-the-point while remaining helpful.",
  stepbystep: "Break down into detailed, actionable steps with clear explanations. Provide a comprehensive guide that someone can follow."
};

const examplePrompts = [
  "How do I start learning to code?",
  "Write a cover letter for a tech internship", 
  "Plan a weekend trip to Paris",
  "How do I improve my public speaking?",
  "Explain artificial intelligence simply",
  "How do I prepare for a job interview?",
  "What's the best way to learn a new language?",
  "How do I build a morning routine?",
  "Tips for managing stress in college",
  "How do I start a small business?"
];

export default function Home() {
  const [userPrompt, setUserPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState<PromptStyle>("creative");
  const [responses, setResponses] = useState<Partial<AIResponse>>({});
  const { toast } = useToast();

  const generateMutation = useMutation({
    mutationFn: async () => {
      if (!userPrompt.trim()) {
        throw new Error("Please enter a question or topic first!");
      }

      const response = await apiRequest("POST", "/api/generate", {
        prompt: userPrompt,
        style: selectedStyle
      });
      
      return response.json();
    },
    onSuccess: (data: AIResponse) => {
      setResponses(data);
      // Scroll to response section
      setTimeout(() => {
        document.querySelector('.response-card')?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 100);
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  });

  const handleGenerate = () => {
    generateMutation.mutate();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Prompt Playground
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Experiment with AI and discover how different prompts create dramatically different responses. 
          Master the art of prompt engineering through hands-on practice!
        </p>
      </div>

      {/* Interactive Playground */}
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg border border-border p-6 sm:p-8 mb-8">
          <CardContent className="p-0">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Rocket className="text-primary mr-3 w-6 h-6" />
              Try It Yourself
            </h2>
            
            {/* Input Section */}
            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="user-prompt" className="block text-sm font-medium text-foreground mb-2">
                  Choose Your Question or Topic
                </label>
                <Select onValueChange={(value) => setUserPrompt(value)}>
                  <SelectTrigger className="w-full" data-testid="select-example">
                    <SelectValue placeholder="Select a prompt to see how different styles change the response..." />
                  </SelectTrigger>
                  <SelectContent>
                    {examplePrompts.map((prompt, index) => (
                      <SelectItem key={index} value={prompt}>{prompt}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="prompt-style" className="block text-sm font-medium text-foreground mb-2">
                  Prompt Style
                </label>
                <Select value={selectedStyle} onValueChange={(value: PromptStyle) => setSelectedStyle(value)}>
                  <SelectTrigger className="w-full" data-testid="select-style">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="creative">🎨 Creative - Fun & Imaginative</SelectItem>
                    <SelectItem value="concise">⚡ Concise - Short & Factual</SelectItem>
                    <SelectItem value="stepbystep">📋 Step-by-Step - Detailed Instructions</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                onClick={handleGenerate}
                disabled={generateMutation.isPending || !userPrompt.trim()}
                className="w-full btn-primary py-3 px-6 font-medium"
                data-testid="button-generate"
              >
                <Wand2 className="mr-2 w-4 h-4" />
                {generateMutation.isPending ? "Generating..." : "Generate AI Response"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Response Examples */}
        {(responses.creative || responses.concise || responses.stepbystep || generateMutation.isPending) && (
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ResponseCard
              style="creative"
              systemPrompt={systemPrompts.creative}
              response={responses.creative || ""}
              isLoading={generateMutation.isPending}
            />
            <ResponseCard
              style="concise" 
              systemPrompt={systemPrompts.concise}
              response={responses.concise || ""}
              isLoading={generateMutation.isPending}
            />
            <ResponseCard
              style="stepbystep"
              systemPrompt={systemPrompts.stepbystep}
              response={responses.stepbystep || ""}
              isLoading={generateMutation.isPending}
            />
          </div>
        )}

        {/* Tips Section */}
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <Lightbulb className="text-accent mr-3 w-5 h-5" />
            Quick Tips for Better Prompts
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="text-white w-3 h-3" />
              </div>
              <div>
                <p className="font-medium text-foreground">Be Specific</p>
                <p className="text-sm text-muted-foreground">Instead of "help me code," try "explain Python loops for beginners"</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="text-white w-3 h-3" />
              </div>
              <div>
                <p className="font-medium text-foreground">Set Context</p>
                <p className="text-sm text-muted-foreground">Include your experience level and what you're trying to achieve</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-coral rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="text-white w-3 h-3" />
              </div>
              <div>
                <p className="font-medium text-foreground">Request Format</p>
                <p className="text-sm text-muted-foreground">Ask for lists, examples, or step-by-step when helpful</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="text-white w-3 h-3" />
              </div>
              <div>
                <p className="font-medium text-foreground">Iterate</p>
                <p className="text-sm text-muted-foreground">Follow up with "explain more about..." or "give me an example"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
