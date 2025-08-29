import { Brain, Github, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Brain className="text-white text-sm w-4 h-4" />
              </div>
              <span className="text-lg font-semibold text-foreground">Prompt Playground</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Making AI accessible through better prompts. Built with ❤️ by a college student.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Learning Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://platform.openai.com/docs/guides/prompt-engineering" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center space-x-1"
                  data-testid="link-openai-guide"
                >
                  <span>OpenAI Prompt Guide</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://docs.anthropic.com/claude/docs/prompt-engineering" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center space-x-1"
                  data-testid="link-anthropic-docs"
                >
                  <span>Anthropic Claude Documentation</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://ai.google.dev/docs/prompt_best_practices" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center space-x-1"
                  data-testid="link-google-ai"
                >
                  <span>Google AI Best Practices</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://learn.deeplearning.ai/chatgpt-prompt-eng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center space-x-1"
                  data-testid="link-prompt-course"
                >
                  <span>Prompt Engineering Course</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center space-x-2"
                  data-testid="link-github"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:alex@promptplayground.dev" 
                  className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center space-x-2"
                  data-testid="link-email"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Feedback</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Prompt Playground. Built for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
