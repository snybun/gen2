import { ScrollReveal } from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Calendar, Users, Shield, Sparkles, Heart } from "lucide-react";

const solutions = [
  {
    icon: Calendar,
    title: "Establish Boundaries & Rhythms",
    description: "Create sustainable engagement patterns",
    recommendations: [
      "Set specific times for political news consumption instead of constant scrolling",
      "Implement 'news-free' hours or days to allow mental recovery",
      "Use app timers and notification controls to manage information intake",
      "Practice the 'one action per day' rule: choose one meaningful political action daily rather than attempting everything",
    ],
  },
  {
    icon: Users,
    title: "Build Community Support Systems",
    description: "Collective care strengthens individual resilience",
    recommendations: [
      "Form or join local civic groups that explicitly incorporate wellness practices",
      "Create accountability partnerships where people check in on each other's well-being",
      "Organize community events that combine activism with joy (art builds, community meals, etc.)",
      "Establish shared resources like childcare swaps or meal trains for activists",
    ],
  },
  {
    icon: Shield,
    title: "Develop Emotional Resilience Practices",
    description: "Tools for processing political stress",
    recommendations: [
      "Integrate mindfulness or meditation specifically focused on political emotions",
      "Keep a 'political feelings journal' to process complex emotions",
      "Seek therapy or counseling that addresses political stress explicitly",
      "Practice cognitive reframing techniques for news-induced anxiety",
    ],
  },
  {
    icon: Heart,
    title: "Diversify Your Activism",
    description: "Multiple paths to political engagement",
    recommendations: [
      "Balance online activism with tangible, local actions that provide concrete feedback",
      "Rotate between different types of engagement (volunteering, donation, education, advocacy)",
      "Pursue 'joyful activism' that incorporates creativity, celebration, and connection",
      "Recognize that rest itself can be a form of resistance and preparation",
    ],
  },
  {
    icon: Sparkles,
    title: "Cultivate Hope & Connection",
    description: "Maintaining motivation without burnout",
    recommendations: [
      "Celebrate small wins and progress, not just focus on what's wrong",
      "Connect with diverse groups doing positive work in your areas of concern",
      "Study historical movements to gain perspective on long-term change",
      "Share stories of impact and success within activist communities",
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
              Our recommendations are built on the principle that <strong>sustainable political engagement requires 
              intentional practices</strong> that honor both civic responsibility and personal wellness. These solutions 
              are not one-size-fits-all but rather a toolkit from which individuals and communities can draw based on 
              their unique needs and circumstances.
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
