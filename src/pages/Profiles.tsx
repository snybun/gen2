import { ScrollReveal } from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Heart, Coffee, Book, Music, Laptop, Camera, Leaf, Trophy, PartyPopper, Gamepad, Activity, Lightbulb, Bed, Monitor} from "lucide-react";

const teamMembers = [
  {
    name: "Mark Dyvie Cerna",
    role: "Leader / Programmer / UI Designer",
    bio: "Created the project structure, routing, and overall design. He also ensures smooth functionality across the app.",
    selfCare: [
      { icon: Laptop, practice: "Playing games and programming to escape reality" },
      { icon: Book, practice: "Reading or watching dystopian movies/books" },
      { icon: Heart, practice: "Being with his girlfriend" },
    ],
    image: "👨‍💻",
  },
  {
    name: "Asia Maneclang",
    role: "Researcher",
    bio: "Asia works closely with group members, ensuring everyone is aligned and supported in every project stage.",
    selfCare: [
      { icon: Heart, practice: "Planning her day gently without pressure." },
      { icon: Camera, practice: "Taking photos of things that make me happy." },
      { icon: Music, practice: "Listening to my favorite music or calming sounds." },
    ],
    image: "👩‍🔬",
  },
  {
    name: "Cris Miraflor",
    role: "Researcher",
    bio: "Cris focuses on gathering and evaluating important information to strengthen team output.",
    selfCare: [
      { icon: Laptop, practice: "Coding while listening to Music" },
      { icon: Trophy, practice: "Playing basketball" },
      { icon: Leaf, practice: "Exploring Nature" },
    ],
    image: "👨‍🔬",
  },
  {
    name: "Denver Marquez",
    role: "Researcher",
    bio: "Denver manages the online presence and ensures content stays engaging and purposeful.",
    selfCare: [
      { icon: Coffee, practice: "Tech-free evenings" },
      { icon: Heart, practice: "Daily short walks" },
      { icon: Book, practice: "Reading motivational books" },
    ],
    image: "👨‍🔬",
  },
  {
    name: "RJ Estrada",
    role: "Researcher",
    bio: "RJ focuses on team motivation and maintaining positive collaboration across all members.",
    selfCare: [
      { icon: PartyPopper, practice: "Celebrating small wins" },
      { icon: Coffee, practice: "Always do something fun" },
      { icon: Heart, practice: "Treating himself" },
    ],
    image: "👨‍🔬",
  },
  {
    name: "Jerome Miras",
    role: "Researcher",
    bio: "Jerome helps analyze project directions and ensures the team stays informed.",
    selfCare: [
      { icon: Monitor, practice: "Watching House MD" },
      { icon: Bed, practice: "Sleeping" },
      { icon: Activity, practice: "Exercising" },
    ],
    image: "👨‍🔬",
  },
  {
    name: "John Russel Ferrer",
    role: "Researcher",
    bio: "Russel makes sure the team’s initiatives stay grounded in empathy and collective purpose.",
    selfCare: [
      { icon: Music, practice: "Relaxing with his playlist and playing guitar" },
      { icon: Heart, practice: "Daily walks" },
      { icon: Book, practice: "Reading books" },
    ],
    image: "👨‍🔬",
  },
  {
    name: "John Dwane Santiago",
    role: "Researcher",
    bio: "JohnDwane brings insight on environmental awareness and helps the team integrate sustainability.",
    selfCare: [
      { icon: Heart, practice: "Gardening at home" },
      { icon: Coffee, practice: "Breakfast outdoors" },
      { icon: Music, practice: "Nature sound therapy" },
    ],
    image: "👨‍🔬",
  },
  {
    name: "Justin Gumpeng",
    role: "Researcher",
    bio: "Justin ensures the team communicates clearly through effective visuals and media handling.",
    selfCare: [
      { icon: Gamepad, practice: "Playing to relax and unwind" },
      { icon: Activity, practice: "Practicing gratitude" },
      { icon: Heart, practice: "Spending quality time with family" },
    ],
    image: "👨‍🔬",
  },
  {
    name: "Nils Quinto",
    role: "Researcher",
    bio: "Nils manages planning and execution while encouraging a healthy and productive working style.",
    selfCare: [
      { icon: Activity, practice: "Physical Activity" },
      { icon: Leaf, practice: "Spending time in nature" },
      { icon: Lightbulb, practice: "Learning new skill or hobby" },
    ],
    image: "👨‍🔬",
  },
];

const Profiles = () => {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="font-handwritten text-5xl md:text-6xl font-bold text-primary mb-4">
              Meet the Group Members
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              mga anakshies ni sir troy :D
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 100}>
              <Card className="scrapbook-card overflow-hidden">
                <div className="grid md:grid-cols-[200px_1fr] gap-6">
                  <div className="flex items-center justify-center">
                    <div className="scrapbook-polaroid">
                      <div className="text-8xl mb-2 text-center">{member.image}</div>
                      <p className="font-handwritten text-center text-lg">{member.name}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h2 className="text-3xl font-bold text-foreground mb-1">{member.name}</h2>
                      <p className="text-primary font-medium font-handwritten text-xl">{member.role}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-lg">{member.bio}</p>

                    <div className="pt-4">
                      <h3 className="font-handwritten text-2xl font-bold text-secondary mb-3">
                        Self-Care Practices
                      </h3>
                      <div className="space-y-3">
                        {member.selfCare.map((practice, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                              <practice.icon className="h-5 w-5 text-secondary" />
                            </div>
                            <p className="text-foreground">{practice.practice}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-16 scrapbook-card bg-primary/5 text-center">
            <h2 className="font-handwritten text-3xl font-bold mb-4 text-primary">
            </h2>
            <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
              we hope you enjoyed getting to know our team! remember, taking care of yourself is just as important as staying informed and engaged. let's continue to support each other in both our personal well-being and our collective political consciousness.
            </p>
          
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Profiles;
