import OpenAI from "openai";
import type { AIResponse } from "@shared/schema";

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY
});

const systemPrompts = {
  creative: "You are a creative and imaginative AI assistant. Respond in a fun, engaging way with creative analogies, metaphors, and playful language. Make complex topics feel exciting and approachable. Use emojis, vivid examples, and storytelling elements to bring your responses to life.",
  
  concise: "You are a precise and efficient AI assistant. Provide brief, factual answers with key points only. Be direct and to-the-point while remaining helpful. Focus on the essential information without unnecessary elaboration.",
  
  stepbystep: "You are a detailed and methodical AI tutor. Break down your responses into clear, actionable steps with comprehensive explanations. Provide a structured guide that someone can follow step-by-step. Include helpful tips and context for each step."
};

export async function generateAIResponses(userPrompt: string): Promise<AIResponse> {
  // Use mock responses for demo purposes (no OpenAI charges)
  // To enable real OpenAI API, uncomment the try/catch block below and comment out the mock section
  
  // Mock responses that demonstrate different prompt styles
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay
  
  return {
    creative: generateMockResponse(userPrompt, "creative"),
    concise: generateMockResponse(userPrompt, "concise"),
    stepbystep: generateMockResponse(userPrompt, "stepbystep")
  };

  /* 
  // Real OpenAI API calls (requires billing setup)
  try {
    const [creativeResponse, conciseResponse, stepbystepResponse] = await Promise.all([
      generateSingleResponse(userPrompt, "creative"),
      generateSingleResponse(userPrompt, "concise"), 
      generateSingleResponse(userPrompt, "stepbystep")
    ]);

    return {
      creative: creativeResponse,
      concise: conciseResponse,
      stepbystep: stepbystepResponse
    };
  } catch (error) {
    console.error("OpenAI API error:", error);
    throw new Error("Failed to generate AI responses. Please try again.");
  }
  */
}

async function generateSingleResponse(userPrompt: string, style: keyof typeof systemPrompts): Promise<string> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini", // Using gpt-4o-mini for cost-effective API calls
    messages: [
      {
        role: "system",
        content: systemPrompts[style]
      },
      {
        role: "user", 
        content: userPrompt
      }
    ],
    max_tokens: style === "concise" ? 150 : style === "stepbystep" ? 400 : 300,
    temperature: style === "creative" ? 0.9 : style === "concise" ? 0.3 : 0.7,
  });

  return response.choices[0].message.content || "Sorry, I couldn't generate a response.";
}

function generateMockResponse(userPrompt: string, style: "creative" | "concise" | "stepbystep"): string {
  const promptLower = userPrompt.toLowerCase();
  
  console.log(`Checking prompt: "${userPrompt}"`);
  
  // Exact matches for our example prompts
  if (promptLower.includes("start learning to code") || promptLower.includes("learn to code")) {
    console.log("Matched: coding");
    return getMockCodingResponse(style);
  }
  else if (promptLower.includes("cover letter") && promptLower.includes("tech")) {
    console.log("Matched: cover letter");
    return getMockCoverLetterResponse(style);
  }
  else if (promptLower.includes("trip to paris") || promptLower.includes("weekend trip")) {
    console.log("Matched: travel");
    return getMockTravelResponse(style);
  }
  else if (promptLower.includes("public speaking") || promptLower.includes("improve my public speaking")) {
    console.log("Matched: public speaking");
    return getMockPublicSpeakingResponse(style);
  }
  else if (promptLower.includes("artificial intelligence") || promptLower.includes("explain artificial intelligence")) {
    console.log("Matched: AI");
    return getMockAIResponse(style);
  }
  else if (promptLower.includes("job interview") || promptLower.includes("prepare for a job interview")) {
    console.log("Matched: interview");
    return getMockInterviewResponse(style);
  }
  else if (promptLower.includes("learn a new language") || promptLower.includes("best way to learn a new language")) {
    console.log("Matched: language");
    return getMockLanguageResponse(style);
  }
  else if (promptLower.includes("morning routine") || promptLower.includes("build a morning routine")) {
    console.log("Matched: routine");
    return getMockRoutineResponse(style);
  }
  else if (promptLower.includes("managing stress") || promptLower.includes("stress in college")) {
    console.log("Matched: stress");
    return getMockStressResponse(style);
  }
  else if (promptLower.includes("start a small business") || promptLower.includes("small business")) {
    console.log("Matched: business");
    return getMockBusinessResponse(style);
  }
  else {
    console.log("No match found, using general");
    return getMockGeneralResponse(style, userPrompt);
  }
}

function getMockCodingResponse(style: string): string {
  if (style === "creative") {
    return "🚀 Learning to code is like becoming a digital wizard! Think of programming languages as magic spells - each one has its own personality. Python is like a friendly dragon that's easy to tame, while JavaScript is like a shape-shifting creature that works everywhere! Start with Python - it's basically the golden retriever of programming languages: friendly, forgiving, and great for beginners. Dive into small projects like building a simple calculator or a rock-paper-scissors game. Remember, every master coder started with a simple 'Hello, World!' ✨";
  } else if (style === "concise") {
    return "Start with Python basics: variables, loops, functions. Use free resources like Python.org tutorial or Codecademy. Practice with small projects daily. Join coding communities for help. Expected timeline: 2-3 months for fundamentals.";
  } else {
    return "**Step 1:** Choose Python as your first language (beginner-friendly syntax)\n**Step 2:** Set up your environment - download Python and VS Code\n**Step 3:** Complete Python.org's official tutorial (2-3 weeks)\n**Step 4:** Practice with these projects:\n   • Calculator\n   • To-do list\n   • Simple guessing game\n**Step 5:** Join r/learnpython and Stack Overflow for community support\n**Step 6:** After 2 months, explore web development with Flask or data science with pandas";
  }
}

function getMockCoverLetterResponse(style: string): string {
  if (style === "creative") {
    return "📝 Ready to craft some magic? Here's your cover letter starter: 'Dear [Company], While most applicants will tell you about their qualifications, I want to tell you about the moment I realized I was meant for tech - it was 2am, I was debugging my first app, and suddenly everything clicked like the final piece of a puzzle.' See how that draws them in? Now weave in your story: your internship with the GCXE team, your passion for AI, and how you're not just looking for any job - you're looking for THIS job at THIS company. End with confidence: 'I'd love to discuss how my fresh perspective and genuine enthusiasm can contribute to your team's success.' ✨";
  } else if (style === "concise") {
    return "Cover letter template: Paragraph 1 - State position, mention referral/connection. Paragraph 2 - 2-3 relevant achievements with numbers. Paragraph 3 - Why this company specifically. Paragraph 4 - Call to action. Keep to 3-4 paragraphs, 250-400 words max. Use company's language from job posting.";
  } else {
    return "**Step 1:** Research the company (recent news, mission, culture, tech stack)\n**Step 2:** Find hiring manager's name on LinkedIn if possible\n**Step 3:** Opening: 'Dear [Name], I'm writing to express my interest in the [Position] role at [Company]'\n**Step 4:** Body paragraph 1: Mention specific project/achievement relevant to role\n**Step 5:** Body paragraph 2: Connect your experience to their needs (use job posting keywords)\n**Step 6:** Body paragraph 3: Show knowledge of company and genuine interest\n**Step 7:** Closing: 'I would welcome the opportunity to discuss how I can contribute to [specific company goal]'\n**Step 8:** Proofread 3 times, send as PDF, follow up in 1 week if no response";
  }
}

function getMockAIResponse(style: string): string {
  if (style === "creative") {
    return "🤖 Artificial Intelligence is like teaching computers to think - kind of like giving a really powerful calculator a brain! Imagine if your smartphone could not just follow instructions, but actually understand what you want and figure out how to help you. AI learns patterns from tons of data, like how Netflix knows what shows you'll love by watching what millions of people enjoy. It's everywhere: Siri understanding your voice, Google Photos recognizing your friends' faces, and even apps that can write code! The cool part? We're still just scratching the surface of what's possible! 🧠✨";
  } else if (style === "concise") {
    return "AI is computer systems performing tasks that typically require human intelligence. Key types: Machine Learning (learns from data), Natural Language Processing (understands text/speech), Computer Vision (analyzes images). Common applications: search engines, recommendation systems, voice assistants, autonomous vehicles. Current limitations: requires large datasets, can be biased, lacks general intelligence.";
  } else {
    return "**Step 1:** Understand AI basics: computer systems that can perform human-like tasks\n**Step 2:** Learn the main types: Machine Learning, Deep Learning, Natural Language Processing\n**Step 3:** See examples in daily life: Google search, Netflix recommendations, Siri\n**Step 4:** Recognize how it works: AI learns patterns from massive amounts of data\n**Step 5:** Understand current capabilities: image recognition, language translation, game playing\n**Step 6:** Know the limitations: needs lots of data, can make biased decisions\n**Step 7:** Explore learning resources: Coursera AI courses, YouTube explanations\n**Step 8:** Consider ethical implications: job displacement, privacy, decision transparency";
  }
}

function getMockInterviewResponse(style: string): string {
  if (style === "creative") {
    return "🎯 Think of job interviews like a first date - you want to be your authentic self while putting your best foot forward! Here's the secret sauce: prepare stories, not just answers. Have 3-4 compelling stories ready that showcase your skills, like how you solved a tricky problem or led a project. Practice the classic 'Tell me about yourself' in the mirror until it flows naturally. Research the company like you're planning to work there forever (because you might!). And remember - they already like your resume enough to meet you, so confidence is key! You've got this! 💪✨";
  } else if (style === "concise") {
    return "Interview prep essentials: Research company/role thoroughly. Prepare STAR method answers (Situation, Task, Action, Result) for common questions. Practice 'Tell me about yourself' 2-minute pitch. Prepare thoughtful questions about the role/company. Dress appropriately, arrive 10 minutes early. Bring multiple resume copies. Follow up within 24 hours with thank-you email.";
  } else {
    return "**Step 1:** Research the company, role, and interviewer(s) on LinkedIn\n**Step 2:** Review the job description and match your skills to requirements\n**Step 3:** Prepare 5-7 STAR stories covering different competencies\n**Step 4:** Practice common questions: strengths/weaknesses, why this company, where you see yourself\n**Step 5:** Prepare 3-5 thoughtful questions about the role and company culture\n**Step 6:** Plan your outfit and route, arrive 10 minutes early\n**Step 7:** During interview: maintain eye contact, be specific with examples, ask clarifying questions\n**Step 8:** Send personalized thank-you email within 24 hours mentioning specific conversation points";
  }
}

function getMockLanguageResponse(style: string): string {
  if (style === "creative") {
    return "🌍 Learning a new language is like unlocking a secret door to a whole new world! Start by falling in love with the culture - watch movies, listen to music, follow social media accounts in your target language. Make it fun! Change your phone's language settings (trust me, you'll learn 'battery low' really fast!). Find a language exchange partner online - it's like having a cultural pen pal! The key is making mistakes fearlessly. Remember, every time you mess up a verb conjugation, you're one step closer to fluency! ¡Vamos! 🗣️✨";
  } else if (style === "concise") {
    return "Language learning strategy: Use apps like Duolingo/Babbel for basics (15-30 min daily). Watch content with subtitles, gradually removing them. Practice speaking with native speakers via HelloTalk/Tandem. Focus on high-frequency words first (top 1000 cover 80% of conversation). Set realistic goals: A2 level in 6-12 months with consistent practice.";
  } else {
    return "**Step 1:** Choose your target proficiency level (A1-C2) and set timeline\n**Step 2:** Download language app (Duolingo, Babbel, or Memrise) for daily 15-minute practice\n**Step 3:** Learn the 1000 most common words using spaced repetition (Anki)\n**Step 4:** Watch Netflix shows/YouTube in target language with subtitles\n**Step 5:** Find conversation partner on HelloTalk, Tandem, or local language exchanges\n**Step 6:** Practice speaking daily, even if just reading aloud for 10 minutes\n**Step 7:** Join online communities (Reddit, Discord) in your target language\n**Step 8:** Take formal classes or use structured courses for grammar foundation\n**Step 9:** Track progress monthly and adjust methods based on what works";
  }
}

function getMockRoutineResponse(style: string): string {
  if (style === "creative") {
    return "🌅 Your morning routine is like designing the opening scene of your daily movie - make it epic! Start small: pick ONE thing that makes you feel accomplished before 8am. Maybe it's making your bed (instant win!), 5 minutes of stretching, or writing down three things you're grateful for. The magic happens when you stack these tiny wins together. Think of it as building momentum - like rolling a snowball down a hill, each good habit makes the next one easier! Don't aim for perfection; aim for consistency. Your future self will thank you! ⭐";
  } else if (style === "concise") {
    return "Morning routine basics: Wake up same time daily (even weekends). Start with one keystone habit: make bed, drink water, or 5-minute meditation. Add habits gradually every 2-3 weeks. Keep phone away for first 30 minutes. Include movement, nutrition, and mindfulness. Total routine should be 30-60 minutes maximum for sustainability.";
  } else {
    return "**Step 1:** Choose consistent wake-up time and stick to it for 2 weeks\n**Step 2:** Start with ONE simple habit (make bed, drink glass of water, 2-minute meditation)\n**Step 3:** Practice this single habit for 2 weeks until automatic\n**Step 4:** Add second habit: light exercise (5-10 minute walk or stretching)\n**Step 5:** Include nutrition: prepare simple, healthy breakfast\n**Step 6:** Add mindfulness element: journaling, gratitude practice, or breathing exercises\n**Step 7:** Create environment for success: lay out clothes, prepare breakfast items night before\n**Step 8:** Track completion daily with simple checkmark system\n**Step 9:** After 4-6 weeks, fine-tune timing and add/remove elements as needed";
  }
}

function getMockStressResponse(style: string): string {
  if (style === "creative") {
    return "📚 College stress is like juggling flaming torches while riding a unicycle - sounds impossible, but you can totally master it! First, remember that stress is just your brain's way of saying 'Hey, this matters to you!' Start with the basics: sleep is your superpower (seriously, pulling all-nighters is like trying to run a marathon on empty). Create a 'worry window' - set aside 15 minutes daily to stress about everything, then close that window! Find your stress-busting sidekick: maybe it's dancing to your favorite song, calling a friend, or taking a hot shower. You're stronger than you think! 💪🌟";
  } else if (style === "concise") {
    return "Stress management for college: Prioritize 7-8 hours sleep. Use time-blocking for assignments and study sessions. Practice deep breathing or meditation (5-10 minutes daily). Exercise regularly, even just walking. Limit caffeine after 2pm. Build support network with friends/family. Use campus counseling services when needed. Break large tasks into smaller, manageable steps.";
  } else {
    return "**Step 1:** Establish consistent sleep schedule (same bedtime/wake time daily)\n**Step 2:** Use calendar/planner to map out assignments, exams, and deadlines\n**Step 3:** Break large projects into smaller tasks with mini-deadlines\n**Step 4:** Create dedicated study space free from distractions\n**Step 5:** Schedule regular breaks using Pomodoro technique (25 min work, 5 min break)\n**Step 6:** Incorporate daily physical activity, even 15-minute walks\n**Step 7:** Practice stress-relief techniques: deep breathing, meditation apps, journaling\n**Step 8:** Build support system: study groups, friends, family check-ins\n**Step 9:** Know campus resources: counseling center, academic support, health services\n**Step 10:** Monitor warning signs and seek help early when overwhelmed";
  }
}

function getMockBusinessResponse(style: string): string {
  if (style === "creative") {
    return "🚀 Starting a business is like planting a magical money tree - except the magic comes from your hard work and smart planning! Begin with a problem that genuinely bugs you, because if it annoys you, it probably annoys thousands of others too. Start small: test your idea with friends, family, or even strangers on social media. Think of your first version as a 'rough draft' - it doesn't need to be perfect, just good enough to get feedback. Remember, every giant company started as someone's crazy idea. Your business could be the next big thing! 💡✨";
  } else if (style === "concise") {
    return "Small business startup: Validate idea with market research and customer interviews. Create minimum viable product (MVP) to test concept. Register business structure (LLC recommended for beginners). Secure funding: personal savings, small business loans, or investors. Build basic online presence: website, social media. Focus on one target customer segment initially. Track finances carefully from day one.";
  } else {
    return "**Step 1:** Identify a specific problem you want to solve and research the market\n**Step 2:** Validate your idea by talking to 20+ potential customers\n**Step 3:** Create a simple business plan outlining goals, target market, and finances\n**Step 4:** Choose business structure (LLC is often best for small businesses)\n**Step 5:** Register your business name and get necessary licenses/permits\n**Step 6:** Set up business banking account and accounting system\n**Step 7:** Build minimum viable product (MVP) or service offering\n**Step 8:** Create basic marketing materials: website, business cards, social media\n**Step 9:** Launch with friends/family first, gather feedback and improve\n**Step 10:** Gradually expand marketing and scale based on what works\n**Step 11:** Consider funding options: bootstrap, small business loans, or investors";
  }
}

function getMockExplanationResponse(style: string): string {
  if (style === "creative") {
    return "🤔 Great question! Imagine I'm your enthusiastic teacher who loves making complex ideas click for you! The topic you're asking about is like a puzzle where each piece connects to create a bigger picture. Think of it as an adventure where we explore the 'why' behind the 'what.' I'd love to break this down into bite-sized, digestible chunks that make you go 'Aha!' Let's dive into this fascinating world together and uncover the secrets that make this concept tick! 🧩✨";
  } else if (style === "concise") {
    return "This concept involves key components that work together to achieve a specific result. Main principles include cause-and-effect relationships, practical applications, and measurable outcomes. Understanding requires grasping both the theoretical foundation and real-world implementation.";
  } else {
    return "**Step 1:** Define the core concept and its purpose\n**Step 2:** Identify the main components or elements involved\n**Step 3:** Explain how these components interact with each other\n**Step 4:** Provide real-world examples to illustrate the concept\n**Step 5:** Discuss practical applications and benefits\n**Step 6:** Address common misconceptions or challenges\n**Step 7:** Suggest resources for deeper learning\n**Step 8:** Summarize key takeaways for easy recall";
  }
}

function getMockTravelResponse(style: string): string {
  if (style === "creative") {
    return "🗼 Paris calling! Picture this: You're about to embark on a magical adventure in the City of Light! Start by imagining yourself as a character in a romantic movie - strolling down cobblestone streets, the Eiffel Tower winking at you from across the city. Book a cozy Airbnb in Montmartre where artists once painted their dreams. Wake up to fresh croissants (trust me, they taste like buttery clouds!), spend your afternoons getting wonderfully lost in the Louvre, and end each day with a sunset picnic by the Seine. Pack light, bring comfortable shoes, and leave room in your suitcase for all the memories you'll collect! 🥐✨";
  } else if (style === "concise") {
    return "Book flights 2-3 months early. Stay in 6th-11th arrondissements. Budget €100-150/day. Must-see: Eiffel Tower, Louvre, Notre-Dame area. Get Museum Pass (€78). Use Metro for transport. Pack layers, comfortable shoes. Learn basic French phrases. Book restaurants in advance.";
  } else {
    return "**Step 1:** Set your travel dates and book flights (aim for 2-3 months early)\n**Step 2:** Choose accommodation in central arrondissements (6th, 7th, or 11th)\n**Step 3:** Create daily itinerary: Day 1 - Eiffel Tower & Trocadéro, Day 2 - Louvre & Tuileries, Day 3 - Montmartre & Sacré-Cœur\n**Step 4:** Purchase Paris Museum Pass online (€78 for 4 days)\n**Step 5:** Download Metro app and buy weekly transport pass\n**Step 6:** Make restaurant reservations (especially for Le Comptoir, L'Ami Jean)\n**Step 7:** Pack essentials: comfortable walking shoes, portable charger, light jacket\n**Step 8:** Learn key phrases: 'Bonjour', 'Merci', 'Parlez-vous anglais?'";
  }
}

function getMockPublicSpeakingResponse(style: string): string {
  if (style === "creative") {
    return "🎤 Transform your speaking anxiety into superpower energy! Think of public speaking like being a storyteller around a campfire - your audience WANTS you to succeed! Start by imagining your audience in their underwear? Nah, that's old school. Instead, picture them as your best friends who are genuinely excited to hear what you have to say. Practice your speech like you're rehearsing for a Netflix special - record yourself, watch it back, and celebrate every small improvement. Remember: even Beyoncé gets nervous before performances! The magic happens when you channel those butterflies into passionate energy. Your voice matters, and the world needs to hear it! ✨🦋";
  } else if (style === "concise") {
    return "Practice speech 10+ times aloud. Structure: strong opening, 3 main points, memorable closing. Use 6x6 rule for slides (max 6 bullet points, 6 words each). Maintain eye contact, speak slowly, pause for emphasis. Arrive early to test tech. Focus on breathing to manage nerves.";
  } else {
    return "**Step 1:** Write and structure your speech (opening hook + 3 main points + strong conclusion)\n**Step 2:** Practice out loud daily for 1 week minimum\n**Step 3:** Record yourself and watch for filler words, pacing, gestures\n**Step 4:** Create simple slides following 6x6 rule (max 6 points, 6 words each)\n**Step 5:** Practice with friends/family for feedback\n**Step 6:** Arrive 30 minutes early to test microphone and tech\n**Step 7:** Use power poses backstage (2 minutes) to boost confidence\n**Step 8:** During speech: make eye contact, speak slowly, pause between points\n**Step 9:** End with clear call-to-action and thank the audience";
  }
}

function getMockQuantumResponse(style: string): string {
  if (style === "creative") {
    return "🌌 Quantum physics is like reality's magic show! Imagine if your cat could be both asleep AND awake at the same time until you peeked into the room - that's quantum superposition! Think of particles as cosmic dancers who can be in multiple places simultaneously, spinning in all directions until someone watches them. It's like the universe is playing an elaborate game of hide-and-seek with itself. Einstein called it 'spooky action at a distance' because particles can instantly affect each other across the galaxy - faster than texting! The weird part? This isn't science fiction - your smartphone and GPS actually use quantum effects to work. Mind = blown! 🤯✨";
  } else if (style === "concise") {
    return "Quantum physics studies matter and energy at atomic scale. Key principles: superposition (particles exist in multiple states), entanglement (particles instantly affect each other regardless of distance), uncertainty (can't know both position and momentum precisely). Applications: computers, lasers, MRI machines, GPS systems.";
  } else {
    return "**Step 1:** Understand that quantum physics describes behavior of very small particles\n**Step 2:** Learn superposition: particles can exist in multiple states simultaneously\n**Step 3:** Grasp uncertainty principle: you can't know both exact position and speed\n**Step 4:** Explore entanglement: paired particles instantly affect each other\n**Step 5:** Study wave-particle duality: light acts as both wave and particle\n**Step 6:** Recognize real applications: lasers, computers, medical imaging\n**Step 7:** Accept the weirdness: quantum world doesn't follow everyday logic\n**Step 8:** Read beginner books like 'Quantum Theory Cannot Hurt You' by Marcus Chown";
  }
}

function getMockGeneralResponse(style: string, prompt: string): string {
  if (style === "creative") {
    return `🌟 Ah, "${prompt}" - what a fascinating challenge! Here's the thing: this is like being handed a mystery box and asked to unlock its secrets! Think of yourself as a detective-explorer hybrid, ready to dive into uncharted territory. The beauty of tackling something like this is that there's no single "right" way - it's like being given a canvas and a box of paints, where your creativity becomes the brush! I'd suggest starting with curiosity as your compass. Ask yourself: "What would happen if I approached this completely differently?" Sometimes the most unexpected paths lead to the most amazing discoveries! ✨🔍`;
  } else if (style === "concise") {
    return `For "${prompt}": Define clear objectives, gather relevant information, identify key constraints and requirements. Consider multiple approaches, evaluate pros/cons of each option. Choose best approach based on your specific context. Create action plan with measurable milestones. Execute systematically and adjust as needed.`;
  } else {
    return `**Step 1:** Break down "${prompt}" into specific, actionable components\n**Step 2:** Research existing solutions and best practices for similar challenges\n**Step 3:** Identify your available resources (time, budget, skills, tools)\n**Step 4:** List potential obstacles and develop contingency plans\n**Step 5:** Create a timeline with realistic milestones and deadlines\n**Step 6:** Start with a small pilot or proof-of-concept\n**Step 7:** Test your approach and gather feedback from others\n**Step 8:** Refine your strategy based on results and scale up\n**Step 9:** Document your process for future reference`;
  }
}
