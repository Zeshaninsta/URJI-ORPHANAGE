import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Quote, Heart, Users, GraduationCap, Home, Globe } from 'lucide-react'

const directorImage = "/Images/Keyruu.jpg"
const backgroundSVG = "/Images/oooscillate.svg"

export default function About() {
  return (
    <section id="about" className="relative py-10 overflow-hidden bg-gradient-to-br from-secondary/5 to-primary/5">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src={backgroundSVG || "/placeholder.svg"}
          alt="Decorative Background"
          objectFit="cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl  font-bold mb-4 text-secondary">
            A Message from Our Founder
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the heart behind our mission and the vision that drives our commitment to transforming lives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Director Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <Card className="border-primary/20 overflow-hidden bg-white/50 backdrop-blur-sm">
              <div className="relative h-80 w-full">
                <img
                  src={directorImage || "/placeholder.svg"}
                  alt="Keyraddin Mohammed"
                  objectFit="cover"
                />
              </div>
              <CardHeader className="bg-primary/10 p-6 mt-10 z-30 relative">
                <CardTitle className="text-2xl font-semibold text-secondary md:text-accent">Keyraddin Mohammed</CardTitle>
                <p className="text-sm text-secondary md:text-accent">Founder & Director</p>
              </CardHeader>
              <CardContent className="p-6 ">
                <p className="text-sm text-muted-foreground italic">
                  "Our journey began with a simple yet powerful vision: to create a world where every child has the opportunity to thrive, regardless of their circumstances."
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Organization Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <Card className="border-primary/20 h-full bg-white/50 backdrop-blur-sm">
              <CardHeader className="bg-primary/10 p-6">
                <CardTitle className="text-2xl font-semibold text-secondary flex items-center gap-2">
                  <Quote className="w-6 h-6 text-primary" />
                  Our Story & Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  The Urji Orphanage Organization was born from a deep-seated desire to make a lasting difference in the lives of vulnerable children. Since our establishment in 2012 (Ethiopian Calendar), we've been on an unwavering mission to provide hope, care, and opportunities to those who need it most.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: Heart, title: "Children Supported", content: "25 children (12 boys, 13 girls) with improved living conditions" },
                    { icon: Users, title: "Holistic Care", content: "Food, clothing, education, and 1000 ETB monthly allowance" },
                    { icon: GraduationCap, title: "Education Focus", content: "Ensuring quality education and skill development for every child" },
                    { icon: Home, title: "Community Impact", content: "Transforming lives in Bale Robe and beyond" },
                    { icon: Globe, title: "Vision 2025", content: "Aiming for self-sufficiency and positive development" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start bg-primary/5 p-4 rounded-lg"
                    >
                      <item.icon className="w-8 h-8 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-secondary mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 md:mt-12 text-center"
        >
          <p className="text-sm md:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Our journey is far from over, and we invite you to be a part of this transformative mission. Your support, whether through donations, volunteering, or spreading awareness, can help us write more success stories and bring smiles to countless faces.
          </p>
          <a 
            href="#support" 
            className="inline-block bg-primary text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary/90 transition-all hover:shadow-lg transform hover:-translate-y-1"
          >
            Join Our Mission
          </a>
        </motion.div>
      </div>
    </section>
  )
}
