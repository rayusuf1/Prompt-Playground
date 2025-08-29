import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, Heart, GraduationCap, Github, Linkedin, Mail, Coffee, Gamepad2, Mountain, Bot } from "lucide-react";

export default function Creator() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Meet the <span className="text-primary">Creator</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Hi! I'm Rayaan Yusuf, an Informatics student passionate about making AI accessible to everyone
        </p>
      </div>

      <div className="space-y-8">
        {/* Creator Bio */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-4xl">
              <GraduationCap className="w-16 h-16" />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-foreground mb-2">Rayaan Yusuf</h2>
              <p className="text-lg text-primary font-medium mb-3">Informatics Student, UW Seattle Class of 2029</p>
              <p className="text-muted-foreground leading-relaxed">
                Passionate about AI and how it can enhance learning and creativity. 
                Built Prompt Playground to help fellow students and curious minds master this crucial skill.
              </p>
            </div>
          </div>
        </div>

        {/* My Story */}
        <Card className="shadow-lg border border-border">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
              <BookOpen className="text-accent mr-3 w-6 h-6" />
              My Story
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
                The few times I ever tried using AI, I never quite got the responses I wanted. I could never understand 
                why everyone was so fascinated by how much AI could do, because for me, it just didn't give what I needed—until 
                I discovered prompt engineering. Suddenly, the same AI that had been vague and unhelpful started producing 
                incredibly detailed, useful explanations.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                In July 2025, I had the amazing opportunity to intern at a company on the GCXE team, where we created a 
                copilot agent together. That experience really opened my eyes to how much prompt engineering matters! We had 
                to be very specific about what we wanted the AI to do and how we communicated with it. Each iteration taught 
                us so much about crafting effective prompts.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                I realized that most people never learn this skill—they just get frustrated and think "AI isn't that helpful." 
                The truth is, AI is like a genie that grants exactly what you ask for, not what you mean. Learning to ask 
                better questions changed everything for me.
              </p>
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-4">
                <p className="text-foreground font-medium">
                  💡 That's why I built Prompt Playground - to give everyone that same "aha!" moment 
                  I had when I discovered how powerful good prompts can be.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What I'm Learning */}
        <div className="grid sm:grid-cols-2 gap-6">
          <Card className="shadow-lg border border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Code className="text-primary mr-3 w-5 h-5" />
                Currently Learning
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">🤖 OpenAI API</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-muted-foreground">⚡ Node.js</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">💻 VS Code</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-coral rounded-full"></div>
                  <span className="text-muted-foreground">🟨 JavaScript</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Heart className="text-coral mr-3 w-5 h-5" />
                Fun Facts
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Coffee className="text-accent w-4 h-4" />
                  <span className="text-muted-foreground">☕ Fueled by campus coffee</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-4 h-4 text-primary">🧶</div>
                  <span className="text-muted-foreground">🧶 Enjoy crocheting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mountain className="text-secondary w-4 h-4" />
                  <span className="text-muted-foreground">🥾 Weekend hiker</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Bot className="text-coral w-4 h-4" />
                  <span className="text-muted-foreground">💻 Aspiring software engineer</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Contact */}
        <Card className="shadow-lg border border-border text-center">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Let's Connect!</h3>
            <p className="text-muted-foreground mb-6">
              I'd love to hear your feedback or chat about AI, coding, or college life!
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                variant="default"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
                data-testid="button-github"
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="default"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                asChild
                data-testid="button-linkedin"
              >
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="default"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
                data-testid="button-email"
              >
                <a href="mailto:rayaanyusuf123@icloud.com">
                  <Mail className="mr-2 w-4 h-4" />
                  Email
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
