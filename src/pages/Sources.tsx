import { ScrollReveal } from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { BookOpen, ExternalLink } from "lucide-react";

const sources = [
  {
    title: "On the Development of Political Consciousness",
    authors: "Peter S. Baron",
    description: "Examines how political consciousness involves understanding how our lives are shaped by social, economic, and political systems, and explores pathways toward creating a fairer, more cooperative society.",
    url: "https://www.hamptonthink.org/read/on-the-development-of-political-consciousness"
  },
  {
    title: "Political Consciousness: A Perpetual Quest",
    authors: "Valerie Miller",
    description: "Explores political consciousness as a way of seeing, caring about, and acting in the world, guided by commitment to human rights and understanding of power dynamics in social and political systems.",
    url: "https://justassociates.org/wp-content/uploads/2022/02/political-consciousness-perpetual-quest-valarie-miller.pdf"
  },
  {
    title: "The Impact of Election Stress: Is Political Anxiety Harming Your Health?",
    authors: "Zara Abrams, American Psychological Association",
    description: "Psychological science shows that politics can harm our physical and mental health. Research reveals how chronic political stress affects well-being and strategies for managing political anxiety while staying engaged.",
    url: "https://www.apa.org/monitor/2024/10/managing-political-stress"
  },
  {
    title: "Comparing Neighborhood-Focused Activism and Volunteerism: Psychological Well-Being and Social Connectedness",
    authors: "Megan E. Gilster",
    description: "Examination of the relationship between volunteerism and neighborhood activism and their effects on psychological well-being, suggesting activists have higher neighborhood and personal mastery than those who only volunteer.",
    url: "https://www.semanticscholar.org/paper/Comparing-Neighborhood-Focused-Activism-and-and-Gilster/817ec6886352174712ee8b02ed865355bff52e67"
  },
  {
    title: "Social Movements and Political Consciousness",
    authors: "Raul Pertierra",
    description: "Research on the development of social consciousness through political engagement and collective action in social movements.",
    url: "https://www.tandfonline.com/doi/abs/10.1080/00664677.1989.9967394"
  },
  {
    title: "Political Engagement and Mental Well-being",
    authors: "Malte Klar, Tim Kasser",
    description: "Studies examining the complex relationship between political participation, psychological outcomes, and strategies for sustainable engagement.",
    url: "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-9221.2009.00724.x"
  },
  {
    title: "Political Consciousness in Marxist Theory",
    authors: "Oliver Ohaeri",
    description: "A concept of political consciousness distinct from class consciousness, and that the Marxist concern with human liberation would benefit from a shift of emphasis from class to political consciousness.",
    url: "https://philpapers.org/rec/IWUPCI"
  },
];

const Sources = () => {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="font-handwritten text-5xl md:text-6xl font-bold text-primary mb-4">
              Sources & References
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Credible research and resources informing our analysis
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Card className="scrapbook-card mb-12 bg-secondary/5">
            <div className="flex items-start gap-4">
              <BookOpen className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <p className="text-foreground leading-relaxed">
                  Our analysis draws from peer-reviewed academic research, established books on activism and wellness, 
                  organizational reports, and reputable online resources. We prioritize sources that employ rigorous 
                  methodology and have been cited by other scholars in the field. All sources listed below were accessed 
                  and verified as of 2024.
                </p>
              </div>
            </div>
          </Card>
        </ScrollReveal>

        <div className="space-y-6">
          {sources.map((source, index) => (
            <ScrollReveal key={index} delay={150 + index * 30}>
              <a 
                href={source.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="scrapbook-card border-l-4 border-l-primary/30 hover:border-l-primary hover:shadow-lg transition-all cursor-pointer">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold text-foreground">
                        {source.title}
                      </h3>
                      <ExternalLink className="h-5 w-5 text-secondary flex-shrink-0" />
                    </div>
                    <p className="text-secondary font-medium">
                      {source.authors}
                    </p>
                    <p className="text-foreground leading-relaxed pt-2">
                      {source.description}
                    </p>
                  </div>
                </Card>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <Card className="scrapbook-card mt-12 bg-accent/5">
            <h2 className="font-handwritten text-2xl font-bold text-primary mb-4">
              About Our Research Approach
            </h2>
            <div className="space-y-3 text-foreground">
              <p>
                <strong>Interdisciplinary Focus:</strong> We draw from political science, psychology, public health, 
                and social movement studies to provide a comprehensive view.
              </p>
              <p>
                <strong>Diverse Perspectives:</strong> Our sources include academic research, grassroots organizing 
                wisdom, and lived experiences from activists across various movements.
              </p>
              <p>
                <strong>Critical Evaluation:</strong> All sources were evaluated for methodology, bias, and relevance. 
                We acknowledge that this is an evolving field and new research continues to emerge.
              </p>
              <p>
                <strong>Accessibility:</strong> Where possible, we've included both academic sources and accessible 
                resources to serve different audiences and needs.
              </p>
            </div>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={550}>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground italic">
              Note: These sources are not complete :3 Feel free to explore more and think critically! Thankiess :)
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Sources;
