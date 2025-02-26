import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Heart, Lightbulb, Smile } from "lucide-react"
import FramerMotion from '../Animation/FramerMotion'

const programs = [
  {
    title: "Education Support",
    description: "Providing quality education and learning resources to orphaned children.",
    icon: Book,
  },
  {
    title: "Health & Wellness",
    description: "Ensuring proper healthcare and nutrition for every child in our care.",
    icon: Heart,
  },
  {
    title: "Life Skills Training",
    description: "Preparing children for independent living through practical skill development.",
    icon: Lightbulb,
  },
  {
    title: "Emotional Support",
    description: "Offering counseling and therapy to help children overcome trauma and build resilience.",
    icon: Smile,
  },
]

export default function Programs() {
  return (
    <section id="programs" className=" px-2 md:px-4 py-10 bg-[#f1f8ff]">
      <div className="container  max-w-7xl mx-auto px-2 md:px-4">
      <FramerMotion>
        <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Our Programs</h2>
        </FramerMotion>
          <FramerMotion>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 animate-fade-in border-primary/20"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-primary" />
                </div>
                <FramerMotion>
                <CardTitle className="text-xl text-secondary">{program.title}</CardTitle>
                </FramerMotion>
              </CardHeader>
              <CardContent>
              <FramerMotion>
                <CardDescription className="text-muted-foreground">{program.description}</CardDescription>
                </FramerMotion>
              </CardContent>
            </Card>
          ))}
        </div>
          </FramerMotion>
      </div>
    </section>
  )
}

