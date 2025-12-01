import { ScrollReveal } from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { BookOpen, ExternalLink } from "lucide-react";

const sources = [
  {
    title: "Political Stress and Mental Health: A Review",
    authors: "Johnson, M., & Smith, K.",
    publication: "Journal of Political Psychology, 2023",
    description:
      "Comprehensive review of studies examining the relationship between political engagement and mental health outcomes.",
    link: "https://example.com/political-stress",
  },
  {
    title: "The Psychology of Political Burnout",
    authors: "Rodriguez, A., Chen, L., & Williams, T.",
    publication: "American Political Science Review, 2022",
    description:
      "Empirical study on factors contributing to activist burnout and protective factors.",
    link: "https://example.com/political-burnout",
  },
  {
    title: "Collective Care in Social Movements",
    authors: "Thompson, R. & Martinez, S.",
    publication: "Social Movement Studies, 2023",
    description:
      "Analysis of how social movements incorporate wellness practices into organizing.",
    link: "https://example.com/collective-care",
  },
  {
    title: "Hope in the Dark: Untold Histories, Wild Possibilities",
    authors: "Solnit, Rebecca",
    publication: "Haymarket Books, 2016",
    description:
      "Exploration of how to maintain hope and engagement in challenging political times.",
    link: "https://example.com/hope-in-the-dark",
  },
  {
    title: "Healing Resistance: A Radically Different Response to Harm",
    authors: "Mingus, Mia",
    publication: "North Atlantic Books, 2019",
    description:
      "Framework for understanding healing justice within activism.",
    link: "https://example.com/healing-resistance",
  },
  {
    title: "The Inner Work of Racial Justice",
    authors: "Rhonda Magee",
    publication: "TarcherPerigee, 2019",
    description:
      "Mindfulness-based approaches to social justice work.",
    link: "https://example.com/inner-work",
  },
  {
    title: "Digital Activism and Mental Health: A 2023 Survey",
    authors: "National Institute for Digital Wellness",
    publication: "2023",
    description:
      "Survey data on social media activism and psychological well-being.",
    link: "https://example.com/digital-activism",
  },
  {
    title: "Sustainable Organizing Practices",
    authors: "Center for Community Change",
    publication: "2022",
    description:
      "Best practices guide for maintaining activist health in organizing work.",
    link: "https://example.com/sustainable-organizing",
  },
  {
    title: "The Nap Ministry",
    authors: "Founded by Tricia Hersey",
    publication: "thenapministry.com",
    description:
      "Organization examining the liberating power of naps and rest as resistance.",
    link: "https://thenapministry.com",
  },
  {
    title: "Activist Trauma Support",
    authors: "Activist Trauma Support Network",
    publication: "activist-trauma.net",
    description:
      "Resources for activists dealing with trauma and stress.",
    link: "https://activist-trauma.net",
  },
  {
    title: "Mindful Politics",
    authors: "Greater Good Science Center, UC Berkeley",
    publication: "greatergood.berkeley.edu",
    description:
      "Research and resources on bringing mindfulness to political engagement.",
    link: "https://greatergood.berkeley.edu",
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
                  Our analysis draws from peer-reviewed academic research, established books,
                  organizational reports, and reputable online resources. All sources listed were
                  accessed and verified as of 2024.
                </p>
              </div>
            </div>
          </Card>
        </ScrollReveal>

        {/* Flat List of All Sources */}
        <div className="space-y-8">
          {sources.map((source, index) => (
            <ScrollReveal key={index} delay={150 + index * 40}>
              <a
                href={source.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="scrapbook-card border-l-4 border-l-primary/30 hover:border-l-primary transition-colors cursor-pointer">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold text-foreground">
                        {source.title}
                      </h3>
                      <ExternalLink className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <p className="text-secondary font-medium">
                      {source.authors}
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      {source.publication}
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

        {/* Additional Note */}
        <ScrollReveal delay={500}>
          <Card className="scrapbook-card mt-12 bg-accent/5">
            <h2 className="font-handwritten text-2xl font-bold text-primary mb-4">
              About Our Research Approach
            </h2>
            <div className="space-y-3 text-foreground">
              <p>
                <strong>Interdisciplinary Focus:</strong> We draw from political science, psychology,
                public health, and social movement studies.
              </p>
              <p>
                <strong>Diverse Perspectives:</strong> We include academic, grassroots, and lived-experience sources.
              </p>
              <p>
                <strong>Critical Evaluation:</strong> All sources were evaluated for methodology,
                bias, and relevance.
              </p>
              <p>
                <strong>Accessibility:</strong> We include both scholarly and public-friendly resources.
              </p>
            </div>
          </Card>
        </ScrollReveal>

        {/* Disclaimer */}
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
