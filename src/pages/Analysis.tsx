import { ScrollReveal } from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingUp, Users, Brain, BookOpen, HeartPulse, Target, Zap } from "lucide-react";

const Analysis = () => {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
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
              prolonged involvement in political discourse and activism. Research shows that 77% of U.S. adults report the future 
              of the nation as a significant source of stress, with politics causing lost sleep, damaged relationships, and 
              obsessive thoughts for nearly half of Americans.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Political consciousness—a way of seeing, caring about, and acting in the world guided by commitment to human rights 
              and justice—is essential for democratic participation. Yet chronic political stress harms both psychological and 
              physical well-being. This raises a critical question: <strong>How can we develop and maintain political consciousness 
              without sacrificing our mental health and personal well-being?</strong>
            </p>
          </Card>
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
                    from politics—stepping back is a privilege not everyone has. Political consciousness requires understanding 
                    how our lives are shaped by social, economic, and political systems.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-primary">•</span>
                  <p className="text-foreground">
                    <strong>Supporting Points:</strong> Historical progress requires sustained activism. Developing political 
                    consciousness is a lifelong journey of critical thinking, from questioning subordination to taking action 
                    with others to transform inequitable systems and structures.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-primary">•</span>
                  <p className="text-foreground">
                    <strong>Challenge:</strong> Poverty, discrimination, and adversity can breed paralysis and resignation, 
                    or generate frustration that festers into hostility. Building political consciousness means helping people 
                    recognize and act to address injustice in their own lives.
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
                    <strong>Main Argument:</strong> Chronic political stress takes a toll on our bodies and minds. Research 
                    shows that politics is a form of chronic stress distinct from general anxiety, with measurable negative 
                    effects on physical and mental health across a broad swath of the population.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-secondary">•</span>
                  <p className="text-foreground">
                    <strong>Evidence:</strong> Daily diary studies show political events worsen emotional reactivity and 
                    physical health. Around 40% of U.S. adults report politics as a prominent stressor causing lost sleep, 
                    damaged relationships, and inability to stop checking social media. Election seasons bring heightened 
                    emotional turbulence and increased cortisol levels.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-secondary">•</span>
                  <p className="text-foreground">
                    <strong>The Trade-Off:</strong> Emotion regulation strategies like reframing and distraction improve 
                    well-being but can reduce political motivation. The challenge is finding ways to manage negative emotions 
                    without decreasing engagement—potentially through cultivating positive political emotions like inspiration 
                    and compassion.
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
                    <strong>Main Argument:</strong> Research on neighborhood activism shows that activists have higher 
                    personal mastery and social connectedness than volunteers alone. Political engagement through meaningful 
                    action builds psychological well-being when combined with community support systems.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-accent">•</span>
                  <p className="text-foreground">
                    <strong>Social Connection:</strong> The collective nature of politics sets it apart from individual 
                    stressors. Bonding ties with politically similar people improve mental and physical health, while 
                    positive social connections help mitigate political stress without reducing engagement.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-accent">•</span>
                  <p className="text-foreground">
                    <strong>Popular Education:</strong> Empowering strategies that help people ask critical questions and 
                    solve real problems through participatory action-reflection-action build political consciousness while 
                    strengthening community bonds and individual agency.
                  </p>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={450}>
          <Card className="scrapbook-card mb-8">
            <div className="flex items-start gap-4 mb-4">
              <BookOpen className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <h3 className="text-2xl font-bold text-foreground">
                The Changing Nature of Political Engagement
              </h3>
            </div>
            <div className="space-y-3 text-foreground">
              <p className="text-lg leading-relaxed">
                Political consciousness has evolved significantly over the past century. In the civil rights era, 
                activists faced physical danger and explicit oppression, yet many maintained decades-long commitments. 
                Today's challenges are different—less about single dramatic confrontations and more about sustained 
                navigation of information overload, algorithmic manipulation, and the erosion of shared reality.
              </p>
              <p className="text-lg leading-relaxed">
                The transition from newspapers and evening broadcasts to 24/7 digital news cycles fundamentally changed 
                how we experience politics. Where previous generations could compartmentalize political awareness to 
                specific times, modern citizens face constant exposure through notifications, social feeds, and ambient 
                political discourse. This creates what researchers call "chronic political stress"—a low-grade, persistent 
                anxiety distinct from acute stressors.
              </p>
              <p className="text-lg leading-relaxed">
                Social movements have adapted too. From the labor movements and civil rights struggles that built power 
                through physical organizing, to contemporary movements that leverage digital networks for rapid 
                mobilization. Each approach has trade-offs: in-person organizing builds deeper relationships but reaches 
                fewer people; online activism enables massive coordination but can feel ephemeral and exhausting.
              </p>
            </div>
          </Card>
        </ScrollReveal>

        {/* The Paradox */}
        <ScrollReveal delay={500}>
          <Card className="scrapbook-card bg-accent/5 mb-8">
            <div className="flex items-start gap-4 mb-4">
              <Zap className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <h3 className="text-2xl font-bold text-foreground">
                The Central Paradox
              </h3>
            </div>
            <div className="space-y-4 text-foreground">
              <p className="text-lg leading-relaxed">
                Here lies the fundamental tension: <strong>developing political consciousness requires engagement with 
                difficult truths about injustice and systemic oppression, yet this very engagement can lead to burnout 
                that reduces our capacity for effective action.</strong>
              </p>
              <p className="text-lg leading-relaxed">
                Research reveals that emotion regulation strategies like cognitive reframing and distraction improve 
                well-being but simultaneously decrease political motivation. When we protect our mental health by looking 
                away, we may withdraw from the very struggles that need our participation. Yet burning out helps no one—
                exhausted activists become ineffective and may abandon movements entirely.
              </p>
              <p className="text-lg leading-relaxed">
                How do we maintain enough awareness to stay engaged without becoming 
                so overwhelmed that we're paralyzed? How do we honor both the urgency of injustice and the reality of 
                our human limits?
              </p>
            </div>
          </Card>
        </ScrollReveal>

        {/* Research Findings */}
        <ScrollReveal delay={550}>
          <h2 className="font-handwritten text-4xl font-bold text-center mb-10 mt-16 text-foreground">
            What Research Tells Us
          </h2>
        </ScrollReveal>

        <div className="space-y-8">
          <ScrollReveal delay={600}>
            <Card className="scrapbook-card">
              <div className="flex items-start gap-4 mb-4">
                <HeartPulse className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-foreground">
                  The Health Impact of Political Stress
                </h3>
              </div>
              <div className="space-y-3 text-foreground">
                <p className="text-lg leading-relaxed">
                  Studies using daily diary methods show that political events negatively impact both emotional and 
                  physical health. Around 40% of Americans report politics as a significant stressor, with documented 
                  effects including:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="text-lg">• Sleep disruption and insomnia related to political worry</li>
                  <li className="text-lg">• Increased cortisol levels during election seasons</li>
                  <li className="text-lg">• Damaged personal relationships over political disagreements</li>
                  <li className="text-lg">• Compulsive news-checking and social media monitoring</li>
                  <li className="text-lg">• Heightened emotional reactivity and anxiety</li>
                  <li className="text-lg">• Physical symptoms like headaches, fatigue, and digestive issues</li>
                </ul>
                <p className="text-lg leading-relaxed">
                  Importantly, this stress affects people across the political spectrum and is distinct from general 
                  anxiety—it's specifically tied to political events and discourse.
                </p>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={650}>
            <Card className="scrapbook-card">
              <div className="flex items-start gap-4 mb-4">
                <Target className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-foreground">
                  What Actually Helps: Evidence-Based Findings
                </h3>
              </div>
              <div className="space-y-3 text-foreground">
                <p className="text-lg leading-relaxed">
                  Comparing neighborhood-focused activism with traditional volunteerism reveals important patterns:
                </p>
                <div className="bg-secondary/5 p-4 rounded-lg my-4">
                  <p className="text-lg leading-relaxed">
                    <strong>Activists (those working for systemic change) show:</strong>
                  </p>
                  <ul className="space-y-2 ml-6 mt-2">
                    <li className="text-lg">• Higher levels of personal mastery and sense of control</li>
                    <li className="text-lg">• Greater neighborhood social capital and connections</li>
                    <li className="text-lg">• Stronger feelings of collective efficacy</li>
                    <li className="text-lg">• Better psychological well-being overall</li>
                  </ul>
                </div>
                <p className="text-lg leading-relaxed">
                  This suggests that working toward structural change, when done within supportive community contexts, 
                  can actually enhance well-being rather than diminish it. The key factors appear to be:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="text-lg">• Having meaningful social connections with fellow activists</li>
                  <li className="text-lg">• Seeing tangible results from collective action</li>
                  <li className="text-lg">• Focusing on local, neighborhood-level organizing</li>
                  <li className="text-lg">• Balancing online and in-person engagement</li>
                  <li className="text-lg">• Experiencing "bonding ties" with politically similar people</li>
                </ul>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <Card className="scrapbook-card">
              <div className="flex items-start gap-4 mb-4">
                <Brain className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-foreground">
                  The Development of Political Consciousness
                </h3>
              </div>
              <div className="space-y-3 text-foreground">
                <p className="text-lg leading-relaxed">
                  Political consciousness isn't binary—you either have it or you don't. Research shows it develops 
                  through stages:
                </p>
                <div className="space-y-4 mt-4">
                  <div className="border-l-4 border-l-primary pl-4">
                    <p className="text-lg"><strong>Stage 1: Acceptance</strong></p>
                    <p className="text-muted-foreground">Accepting current conditions as natural or inevitable</p>
                  </div>
                  <div className="border-l-4 border-l-primary pl-4">
                    <p className="text-lg"><strong>Stage 2: Questioning</strong></p>
                    <p className="text-muted-foreground">Beginning to question why things are the way they are</p>
                  </div>
                  <div className="border-l-4 border-l-primary pl-4">
                    <p className="text-lg"><strong>Stage 3: Analysis</strong></p>
                    <p className="text-muted-foreground">Understanding systemic causes and power dynamics</p>
                  </div>
                  <div className="border-l-4 border-l-primary pl-4">
                    <p className="text-lg"><strong>Stage 4: Collective Action</strong></p>
                    <p className="text-muted-foreground">Working with others to create structural change</p>
                  </div>
                  <div className="border-l-4 border-l-primary pl-4">
                    <p className="text-lg"><strong>Stage 5: Sustained Engagement</strong></p>
                    <p className="text-muted-foreground">Maintaining commitment through reflection and community</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed mt-4">
                  This developmental model helps explain why burnout often occurs when people jump from Stage 1 or 2 
                  directly to intensive activism without building the supporting consciousness, skills, and community 
                  networks that sustain long-term engagement.
                </p>
              </div>
            </Card>
          </ScrollReveal>
        </div>

        {/* Key Insights */}
        <ScrollReveal delay={750}>
          <Card className="scrapbook-card mt-12 bg-primary/5">
            <h2 className="font-handwritten text-3xl font-bold text-primary mb-6 text-center">
              Key Insights from Our Analysis
            </h2>
            <div className="space-y-4 text-foreground">
              <p className="text-lg leading-relaxed">
                <strong>1. Political consciousness is developmental:</strong> Building awareness is a lifelong journey 
                from passive acceptance to critical analysis and collective action. It requires understanding power dynamics 
                and systems of oppression, not just focusing on individual political figures. Rushing this process or 
                skipping stages often leads to burnout.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>2. The information environment has changed:</strong> Unlike previous eras with morning newspapers 
                and evening broadcasts, 24-hour news cycles and social media create chronic, low-level stress that's harder 
                to ignore. This requires intentional boundaries and media literacy as core political skills.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>3. Positive emotions can sustain action:</strong> While negative emotions like outrage drive 
                initial engagement, positive emotions—inspiration, compassion, admiration, gratitude—help people stay 
                involved with less cost to well-being. Movements need joy and hope, not just anger.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>4. Community and connection are protective:</strong> Research shows activists embedded in 
                supportive communities have better psychological outcomes. Collective care, participatory learning, and 
                mutual aid strengthen both movements and individual resilience. Isolation amplifies burnout.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>5. Resilience is learnable:</strong> While political anxiety tends to fade after election 
                peaks, building long-term resilience requires practices like regulating media exposure, fostering diverse 
                social connections, and balancing online activism with tangible local action. These are skills that can 
                be developed.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>6. The paradox is real but navigable:</strong> The tension between staying informed/engaged and 
                protecting mental health is genuine—but not insurmountable. Solutions lie in community approaches, 
                sustainable practices, and recognizing that long-term commitment matters more than constant intensity.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>7. Local action provides unique benefits:</strong> Neighborhood-level organizing offers tangible 
                wins, face-to-face relationships, and a sense of efficacy that national-level engagement often lacks. 
                This doesn't mean ignoring broader issues, but grounding work locally provides crucial psychological support.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>8. Systems thinking is essential:</strong> Political consciousness means understanding how economic, 
                social, and political systems interconnect and shape lived experiences. This broader view helps prevent 
                the exhausting cycle of reacting to individual crises without addressing root causes.
              </p>
            </div>
          </Card>
        </ScrollReveal>

        {/* Synthesis */}
        <ScrollReveal delay={800}>
          <Card className="scrapbook-card mt-8 bg-secondary/5">
            <h2 className="font-handwritten text-3xl font-bold text-secondary mb-6 text-center">
              Toward a New Understanding
            </h2>
            <div className="space-y-4 text-foreground">
              <p className="text-lg leading-relaxed">
                The research points toward a synthesis: <strong>sustainable political engagement requires developing 
                consciousness not just about political systems, but about ourselves and our communities.</strong>
              </p>
              <p className="text-lg leading-relaxed">
                This means recognizing that caring for our mental health isn't selfish, it's strategic. That building 
                strong local relationships isn't a distraction from real political work, it's foundational to it. 
                That taking breaks isn't privilege when done intentionally as part of a long-term commitment, it's wisdom.
              </p>
              <p className="text-lg leading-relaxed">
                The goal isn't to eliminate political stress entirely or to disengage from urgent struggles. Rather, 
                it's to build movements and practices that allow people to stay engaged for the long haul, with their 
                humanity intact and their effectiveness sustained. This requires both individual practices and collective 
                cultural shifts in how we think about activism and well-being.
              </p>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Analysis;
