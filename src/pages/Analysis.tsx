import { ScrollReveal } from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingUp, Users, Brain } from "lucide-react";

const Analysis = () => {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="font-handwritten text-5xl md:text-6xl font-bold text-primary mb-4">
              The Issue: Political Engagement Burnout
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Examining the growing disconnect between civic participation and mental health in our modern political landscape
            </p>
          </div>
        </ScrollReveal>

        {/* Problem Overview */}
        <ScrollReveal delay={100}>
          <Card className="scrapbook-card mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">The Core Problem</h2>
                <p className="text-muted-foreground font-handwritten text-lg">Understanding the challenge</p>
              </div>
            </div>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              In an era of constant political news cycles and social media activism, many citizens experience what's being called 
              <strong> "political engagement burnout"</strong>—a state of emotional, mental, and physical exhaustion caused by 
              prolonged involvement in political discourse and activism.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              This phenomenon raises a critical question: <strong>How can we maintain political consciousness and civic 
              responsibility without sacrificing our mental health and personal well-being?</strong>
            </p>
          </Card>
        </ScrollReveal>

        {/* Multiple Perspectives */}
        <ScrollReveal delay={200}>
          <h2 className="font-handwritten text-4xl font-bold text-center mb-10 text-foreground">
            Multiple Perspectives
          </h2>
        </ScrollReveal>

        <div className="space-y-8">
          {/* Viewpoint 1 */}
          <ScrollReveal delay={250}>
            <Card className="scrapbook-card border-l-4 border-l-primary">
              <div className="flex items-start gap-4 mb-4">
                <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    The Activist Perspective: "Disengagement is Privilege"
                  </h3>
                  <p className="text-muted-foreground mb-4 italic">
                    Advocates argue that political engagement is a moral imperative
                  </p>
                </div>
              </div>
              <div className="space-y-3 pl-10">
                <div className="flex gap-2">
                  <span className="font-bold text-primary">•</span>
                  <p className="text-foreground">
                    <strong>Main Argument:</strong> Those most affected by political decisions can't afford to "take breaks" 
                    from politics—stepping back is a privilege not everyone has
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-primary">•</span>
                  <p className="text-foreground">
                    <strong>Supporting Points:</strong> Historical progress requires sustained activism; social justice movements 
                    depend on continuous engagement and pressure
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-primary">•</span>
                  <p className="text-foreground">
                    <strong>Concern:</strong> Prioritizing personal wellness over activism can perpetuate systemic inequalities 
                    and slow necessary social change
                  </p>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          {/* Viewpoint 2 */}
          <ScrollReveal delay={300}>
            <Card className="scrapbook-card border-l-4 border-l-secondary">
              <div className="flex items-start gap-4 mb-4">
                <Brain className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    The Mental Health Perspective: "Burnout Helps No One"
                  </h3>
                  <p className="text-muted-foreground mb-4 italic">
                    Mental health professionals emphasize sustainable engagement
                  </p>
                </div>
              </div>
              <div className="space-y-3 pl-10">
                <div className="flex gap-2">
                  <span className="font-bold text-secondary">•</span>
                  <p className="text-foreground">
                    <strong>Main Argument:</strong> Continuous political engagement without self-care leads to burnout, 
                    making people less effective advocates and potentially causing long-term psychological harm
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-secondary">•</span>
                  <p className="text-foreground">
                    <strong>Supporting Research:</strong> Studies show increased rates of anxiety, depression, and stress 
                    disorders linked to high political engagement without adequate coping mechanisms
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-secondary">•</span>
                  <p className="text-foreground">
                    <strong>Key Point:</strong> Setting boundaries and practicing self-care enables sustained, long-term 
                    engagement rather than intense but short-lived activism
                  </p>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          {/* Viewpoint 3 */}
          <ScrollReveal delay={350}>
            <Card className="scrapbook-card border-l-4 border-l-accent">
              <div className="flex items-start gap-4 mb-4">
                <Users className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    The Community-Centered Perspective: "Collective Care is Political"
                  </h3>
                  <p className="text-muted-foreground mb-4 italic">
                    Emerging framework that bridges both approaches
                  </p>
                </div>
              </div>
              <div className="space-y-3 pl-10">
                <div className="flex gap-2">
                  <span className="font-bold text-accent">•</span>
                  <p className="text-foreground">
                    <strong>Main Argument:</strong> True political engagement includes caring for ourselves and each other; 
                    self-care is not selfish but necessary for community resilience
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-accent">•</span>
                  <p className="text-foreground">
                    <strong>Framework:</strong> Builds on concepts of "collective care" where communities support each other's 
                    wellness while maintaining political consciousness and action
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-accent">•</span>
                  <p className="text-foreground">
                    <strong>Vision:</strong> Sustainable movements require sustainable practices—prioritizing wellness 
                    strengthens rather than weakens political work
                  </p>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          {/* Spacer between Viewpoint 3 and 4 */}
          <div className="mt-8"></div>

          {/* Viewpoint 4 */}
          <ScrollReveal delay={400}>
            <Card className="scrapbook-card border-l-4 border-l-foreground">
              <div className="flex items-start gap-4 mb-4">
                <TrendingUp className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    The Balanced Approach: "Engage Mindfully"
                  </h3>
                  <p className="text-muted-foreground mb-4 italic">
                    Advocates for a middle path combining engagement with self-care
                  </p>
                </div>
              </div>
              <div className="space-y-3 pl-10">
                <div className="flex gap-2">
                  <span className="font-bold text-foreground">•</span>
                  <p className="text-foreground">
                    <strong>Main Argument:</strong> It's possible to be politically engaged while also prioritizing mental health through 
                    mindful practices and setting healthy boundaries
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-foreground">•</span>
                  <p className="text-foreground">
                    <strong>Strategies:</strong> Time management, digital detoxes, community support networks, and 
                    intentional activism can help balance engagement and well-being
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-foreground">•</span>
                  <p className="text-foreground">
                    <strong>Outcome:</strong> A sustainable model of political participation that nurtures both the 
                    individual and the collective
                  </p>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>

        {/* Key Insights */}
        <ScrollReveal delay={400}>
          <Card className="scrapbook-card mt-12 bg-primary/5">
            <h2 className="font-handwritten text-3xl font-bold text-primary mb-6 text-center">
              Key Insights from Our Analysis
            </h2>
            <div className="space-y-4 text-foreground">
              <p className="text-lg leading-relaxed">
                <strong>1. The binary thinking is false:</strong> We don't have to choose between political engagement 
                and personal well-being—they can and should coexist.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>2. Context matters:</strong> The "right" balance looks different for everyone based on their 
                circumstances, privileges, and vulnerabilities.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>3. Sustainability is key:</strong> Brief, intense activism followed by complete disengagement 
                is less effective than moderate, sustained involvement.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>4. Community support is essential:</strong> Individual self-care is important, but collective 
                care systems make political engagement more sustainable for everyone.
              </p>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Analysis;
