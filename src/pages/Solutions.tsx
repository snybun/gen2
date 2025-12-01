import { ScrollReveal } from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Calendar, Users, Shield, Sparkles, Heart, Brain } from "lucide-react";

const solutions = [
  {
    icon: Calendar,
    title: "Regulate Information Exposure",
    description: "Control the chronic stress of 24/7 news cycles",
    recommendations: [
      "Read news rather than watching it—reading gives you more control over what you're ingesting without manipulative imagery",
      "Set specific times for political news consumption and use app timers to enforce limits",
      "Tune in strategically when there's something actionable (finding where to vote, how to contribute)",
      "Implement 'news-free' hours or days, especially before bed and first thing in the morning",
      "Remember that social media platforms are designed to keep you engaged and push your buttons—it takes extra effort to limit chronic exposure",
    ],
  },
  {
    icon: Users,
    title: "Foster Positive Social Connections",
    description: "Build bonding ties that protect mental health",
    recommendations: [
      "Connect with politically similar people ('bonding ties') who share your values—research shows this improves physical and mental health",
      "Form or join local civic groups that explicitly incorporate wellness and mutual support",
      "Organize community events that combine activism with joy: art builds, community meals, cultural celebrations",
      "When worried, resist the instinct to isolate—reach out and connect with your community",
      "Create accountability partnerships where people check in on each other's well-being and political engagement",
    ],
  },
  {
    icon: Heart,
    title: "Cultivate Positive Political Emotions",
    description: "Use inspiration and compassion to sustain action",
    recommendations: [
      "Focus on admiration for people doing good work, not just outrage at injustice",
      "Seek out stories of inspiration, compassion, gratitude, and hope in political spaces",
      "Celebrate progress and small wins within your communities and movements",
      "Study historical movements to gain perspective and see patterns of long-term change",
      "Share success stories and positive impacts—these sustain motivation with less cost to well-being",
    ],
  },
  {
    icon: Shield,
    title: "Balance Engagement Strategies",
    description: "Diversify how you participate politically",
    recommendations: [
      "Balance online activism with tangible, local actions that provide concrete feedback and sense of accomplishment",
      "Rotate between different types of engagement: volunteering, donating, educating, advocating, organizing",
      "Practice the 'one meaningful action per day' rule rather than attempting everything at once",
      "Engage in neighborhood-focused activism—research shows this builds higher personal mastery than volunteering alone",
      "Pursue 'joyful activism' that incorporates creativity, celebration, and community connection",
    ],
  },
  {
    icon: Brain,
    title: "Develop Political Consciousness Through Learning",
    description: "Build critical understanding through participatory education",
    recommendations: [
      "Engage in popular education methods: action-reflection-action cycles that help analyze problems and pursue solutions",
      "Share personal stories and analyze life histories to build bonds and develop critical thinking",
      "Map collective resources and use participatory research to understand community strengths",
      "Move beyond focusing on individual political personalities to analyze systems and power structures",
      "Join study groups that examine the roots of social issues through an interdisciplinary lens",
    ],
  },
  {
    icon: Sparkles,
    title: "Practice Collective Care",
    description: "Build community resilience through mutual support",
    recommendations: [
      "Establish shared resources like childcare swaps, meal trains, or transportation networks for activists",
      "Create spaces where talking about political wellness and mental health is normalized",
      "Organize wellness practices into organizing work: opening meetings with grounding, building in breaks",
      "Develop mutual aid networks that support both immediate needs and long-term sustainability",
      "Remember that caring for ourselves and each other is not turning away from justice work—it's essential to it",
    ],
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="font-handwritten text-5xl md:text-6xl font-bold text-primary mb-4">
              Solutions & Recommendations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Practical strategies for maintaining political consciousness while prioritizing personal well-being
            </p>
          </div>
        </ScrollReveal>

        {/* Introduction */}
        <ScrollReveal delay={100}>
          <Card className="scrapbook-card mb-12 bg-secondary/5">
            <p className="text-lg text-foreground leading-relaxed">
Our recommendations are based on the idea that staying involved in political issues should also support your personal well-being. There’s no single solution that works for everyone. Instead, we offer a set of helpful options that people and communities can choose from depending on what they need.
            </p>
          </Card>
        </ScrollReveal>

        {/* Solutions */}
        <div className="space-y-8">
          {solutions.map((solution, index) => (
            <ScrollReveal key={solution.title} delay={150 + index * 50}>
              <Card className="scrapbook-card hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <solution.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-1">{solution.title}</h2>
                    <p className="text-muted-foreground font-handwritten text-lg">{solution.description}</p>
                  </div>
                </div>

                <div className="space-y-3 pl-4">
                  {solution.recommendations.map((rec, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground leading-relaxed">{rec}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Implementation Guide */}
        <ScrollReveal delay={500}>
          <Card className="scrapbook-card mt-12 bg-accent/5">
            <h2 className="font-handwritten text-3xl font-bold text-primary mb-6 text-center">
              Getting Started: A Practical Approach
            </h2>
            <div className="space-y-4 text-foreground">
              <div>
                <h3 className="font-bold text-xl mb-2">Step 1: Self-Assessment</h3>
                <p className="text-muted-foreground">
                  Evaluate your current political engagement and well-being levels. Notice patterns of stress, 
                  exhaustion, or disconnection.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Step 2: Choose One Practice</h3>
                <p className="text-muted-foreground">
                  Don't try to implement everything at once. Select one recommendation that resonates most and 
                  commit to it for 2-4 weeks.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Step 3: Find Your Community</h3>
                <p className="text-muted-foreground">
                  Connect with others who are also seeking sustainable engagement. Share strategies, support 
                  each other, and normalize talking about political wellness.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Step 4: Adjust & Iterate</h3>
                <p className="text-muted-foreground">
                  What works will change over time and in different contexts. Regularly reassess and adapt your 
                  practices to your current needs and circumstances.
                </p>
              </div>
            </div>
          </Card>
        </ScrollReveal>

        {/* Call to Action */}
        <ScrollReveal delay={550}>
          <div className="mt-12 text-center scrapbook-card bg-primary/5">
            <h2 className="font-handwritten text-3xl font-bold text-primary mb-4">
              Remember
            </h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
              Taking care of yourself is not turning away from the world's problems—it's preparing yourself 
              to engage with them more effectively and sustainably. <strong>Your well-being matters, and the 
              world needs you to stay engaged for the long haul.</strong>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Solutions;
