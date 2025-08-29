import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, Star, Target, Clock, GraduationCap, Rocket, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          About <span className="text-primary">Prompt Playground</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your interactive gateway to mastering AI conversations
        </p>
      </div>

      <div className="space-y-8">
        {/* What is Prompt Engineering */}
        <Card className="shadow-lg border border-border">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
              <HelpCircle className="text-primary mr-3 w-6 h-6" />
              What's This All About?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Ever felt like AI gives you weird, unhelpful answers? You're not alone! Most people don't realize 
              that AI is basically like talking to a super literal friend who needs very specific instructions. 
              That's where prompt engineering comes in - it's the game-changing skill of knowing exactly how to ask.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Think of it like this: asking AI "help me with code" is like telling a GPS "take me somewhere nice." 
              But saying "explain Python for loops with beginner-friendly examples" is like giving a specific address - 
              you'll actually get where you want to go!
            </p>
          </CardContent>
        </Card>

        {/* Why It Matters */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
            <Star className="text-accent mr-3 w-6 h-6" />
            Why Should You Care?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="border border-border">
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center">
                  <Clock className="text-primary mr-2 w-4 h-4" />
                  Save Time
                </h3>
                <p className="text-sm text-muted-foreground">Stop wasting time with mediocre AI responses that miss the mark</p>
              </CardContent>
            </Card>
            <Card className="border border-border">
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center">
                  <Target className="text-secondary mr-2 w-4 h-4" />
                  Better Results
                </h3>
                <p className="text-sm text-muted-foreground">Get AI to actually understand what you want and deliver it perfectly</p>
              </CardContent>
            </Card>
            <Card className="border border-border">
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center">
                  <GraduationCap className="text-accent mr-2 w-4 h-4" />
                  Learn Faster
                </h3>
                <p className="text-sm text-muted-foreground">Turn AI into your personal study buddy who actually gets it</p>
              </CardContent>
            </Card>
            <Card className="border border-border">
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center">
                  <Rocket className="text-coral mr-2 w-4 h-4" />
                  Boost Productivity
                </h3>
                <p className="text-sm text-muted-foreground">Level up your productivity game with AI that actually helps</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* App Purpose */}
        <Card className="shadow-lg border border-border">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
              <Target className="text-secondary mr-3 w-6 h-6" />
              What Makes This Different?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Forget boring tutorials! This playground lets you actually experiment and see what happens 
              when you change how you ask AI for help. It's like having three different AI personalities 
              respond to the same question - pretty cool, right?
            </p>
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-4">
              <p className="text-foreground font-medium">
                🎯 The goal? Turn you from someone who fights with AI into someone who makes it do exactly 
                what you want. It's like learning a secret language that unlocks AI's true potential!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Pro Tips */}
        <Card className="shadow-lg border border-border">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Lightbulb className="text-accent mr-3 w-6 h-6" />
              Pro Tips I've Learned
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Show, Don't Tell</h3>
                  <p className="text-muted-foreground">Instead of saying "write casually," show an example: "Write like this: Hey! So here's what happened..."</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Give Boundaries</h3>
                  <p className="text-muted-foreground">"Keep it under 100 words" or "explain like I'm 12" helps AI stay focused</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Ask AI to Think Out Loud</h3>
                  <p className="text-muted-foreground">"Walk me through your reasoning" gets you way better explanations than just asking for answers</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
