import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowRight, Heart, Users, Lightbulb } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <ScrollReveal className="max-w-4xl text-center">
          <h1 className="font-handwritten text-6xl md:text-7xl font-bold text-primary mb-6">
            Political Consciousness & Personal Well-Being
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Exploring the intersection of civic awareness and personal wellness through thoughtful analysis and meaningful dialogue
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <NavLink to="/analysis">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                Explore the Issue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </NavLink>
            <NavLink to="/profiles">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Meet the Group Members
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </NavLink>
          </div>
        </ScrollReveal>
      </section>

      {/* Feature Cards */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="font-handwritten text-4xl font-bold text-center mb-12 text-foreground">
            What We Explore
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          <ScrollReveal delay={100}>
            <div className="scrapbook-card hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Personal Well-Being</h3>
              <p className="text-muted-foreground leading-relaxed">
                Understanding how political engagement impacts mental health and discovering self-care practices that sustain civic participation.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="scrapbook-card hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Civic Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deep dives into political issues with balanced perspectives, examining different viewpoints and their implications for communities.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="scrapbook-card hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Lightbulb className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Actionable Solutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Practical recommendations and strategies for creating positive change while maintaining personal wellness and community connection.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="scrapbook-card text-center">
              <h2 className="font-handwritten text-4xl font-bold mb-6 text-primary">
                Our Mission
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                We believe that political consciousness and personal well-being are not mutually exclusive—they're deeply interconnected. 
                This digital scrapbook serves as a space to explore how staying informed and engaged with civic issues can coexist 
                with maintaining mental health and personal balance.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Through careful analysis, diverse perspectives, and practical solutions, we aim to bridge the gap between 
                political awareness and personal wellness, creating a more sustainable approach to civic engagement.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
