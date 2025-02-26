import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Lightbulb, Shield } from 'lucide-react'
import FramerMotion from '../Animation/FramerMotion'

const visionData = [
  {
    title: 'Mission',
    icon: Target,
    description: 'Our mission is to provide comprehensive support and opportunities for orphaned and vulnerable children, ensuring their well-being and future success.',
    points: [
      'Ensure access to community support and security',
      'Promote a culture of community engagement',
      'Strengthen morale of children and families',
      'Provide essential needs and educational support'
    ]
  },
  {
    title: 'Vision',
    icon: Lightbulb,
    description: 'We envision a world where every child, regardless of their circumstances, has the opportunity to thrive and reach their full potential.',
    points: [
      'Protect mental health through comprehensive support',
      'Provide holistic care including food, education, and health services',
      'Support families to improve living conditions',
      'Contribute to Global Sustainable Development Goals'
    ]
  },
  {
    title: 'Values',
    icon: Shield,
    description: 'Our values guide every action we take, ensuring that we operate with integrity, compassion, and a commitment to excellence in all our endeavors.',
    points: [
      'Uphold social responsibility and fairness',
      'Maintain transparency in all activities',
      'Engage with stakeholders to address real needs',
      'Continuously improve for maximum impact'
    ]
  }
]

export default function Vision() {
  return (
    <section id="vision" className=" py-6 bg-white ">
      <div className="container mx-auto px-4">
      <FramerMotion>
        <h2 className="text-4xl font-bold text-center mb-6 text-secondary">Our Vision</h2>
        </FramerMotion>
        <FramerMotion>
        <p className="text-sm md:text-lg text-black/80 mb-12 text-center max-w-3xl mx-auto">
          At Urji Orphanage Organization, we are committed to creating a brighter future for orphaned and vulnerable children. Our mission, vision, and values form the foundation of our work, guiding us towards meaningful and lasting impact.
        </p>
        </FramerMotion>
        <FramerMotion>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {visionData.map((item, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-md border-primary/20 bg-white/10">
              <CardHeader>
                <div className="flex items-center justify-start gap-4 ">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <FramerMotion>
                <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                </FramerMotion>
                </div>
              </CardHeader>
              <CardContent>
              <FramerMotion>
                <p className="text-sm md:text-lg text-black/80 mb-4">{item.description}</p>
                </FramerMotion>
                <ul className="space-y-2">
                  {item.points.map((point, i) => (
                    <FramerMotion>
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-black/80">•</span>
                      <span className="text-sm text-black/80">{point}</span>
                    </li>
                    </FramerMotion>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        </FramerMotion>
      </div>
    </section>
  )
}
