import { Card, CardContent } from "@/components/ui/card"
import FramerMotion from '../Animation/FramerMotion'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Former Resident",
    content:
      "Urji Orphanage Organization gave me a family when I had none. The love and support I received here shaped me into who I am today.",
  },
  {
    name: "Michael Lee",
    role: "Volunteer",
    content:
      "Volunteering at Urji Orphanage Organization has been the most rewarding experience of my life. The impact we make is truly incredible.",
  },
  {
    name: "Emily Davis",
    role: "Donor",
    content:
      "Seeing the positive changes in these children's lives makes every donation worthwhile. Urji Orphanage Organization is doing amazing work.",
  },
]

export default function Testimonial() {
  return (
    <section id="testimonial" className="py-10 bg-white">
      <div className="container mx-auto px-4">
      <FramerMotion>
      <h2 className="text-4xl  font-bold mb-12 text-secondary text-center">Testimonials</h2>
        </FramerMotion>
        <FramerMotion>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                {/* <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="rounded-full mx-auto mb-4"
                /> */}
                <FramerMotion>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                </FramerMotion>
                <FramerMotion>
                <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
                </FramerMotion>
                <FramerMotion>
                <p className="italic text-sm md:text-md">&ldquo;{testimonial.content}&rdquo;</p>
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

