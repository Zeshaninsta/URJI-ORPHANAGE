import { Button } from "@/components/ui/button"
import Image from '/public/Images/BG.jpg'
import Image1 from '/public/Images/BG2.jpg'
import Image2 from '/public/Images/BG3.jpg'
import Image3 from '/public/Images/BG.jpg'
import FramerMotion from '../Animation/FramerMotion'
export default function AboutOrg() {
  return (
    <section id="about" className="py-4 md:py-10 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
      <FramerMotion>
        <h2 className="text-4xl font-bold text-center mb-12 text-secondary">About Us</h2>
        </FramerMotion>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-6">
          <FramerMotion>
            <h3 className="px-3 text-2xl font-semibold text-center md:text-start text-primary">Our Mission</h3>
            </FramerMotion>
            <FramerMotion>
            <p className="text-sm md:text-md border border-border p-3 rounded-md text-muted-foreground text-center md:text-start">
              At Urji Orphanage Organization, our mission is to provide a nurturing and supportive environment for orphaned children,
              empowering them through education, healthcare, and love to reach their full potential and become
              contributing members of society.
            </p>
            </FramerMotion>
            <FramerMotion>
            <h3 className="px-3 text-2xl font-semibold text-primary text-center md:text-start">Our History</h3>
            </FramerMotion>
            <FramerMotion>
            <p className="text-sm md:text-md border border-border p-3 rounded-md text-muted-foreground text-center md:text-start">
              Founded in 1995, Urji Orphanage Organization has grown from a small local initiative to an international organization,
              touching the lives of thousands of children across multiple countries. Our commitment to excellence and
              child-centered care has made us a leader in orphan care and support.
            </p>
            </FramerMotion>
            <FramerMotion>
            <h3 className="px-3 text-2xl font-semibold text-primary text-center md:text-start">Our Impact</h3>
            </FramerMotion>
            <FramerMotion>
            <ul className="text-sm md:text-md border border-border p-3 rounded-md list-disc list-inside text-muted-foreground space-y-2 ">
              <li>Over 5,000 children supported</li>
              <li>100% high school graduation rate</li>
              <li>80% of our children pursue higher education</li>
              <li>Presence in 10 countries worldwide</li>
            </ul>
            </FramerMotion>
            <FramerMotion>
            <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-white flex justify-center items-center">
              <a href="#support">Join Our Cause</a>
            </Button>
            </FramerMotion>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-2 relative md:p-3">
            <div className="hover:shadow-md cursor-pointer relative  rounded-lg overflow-hidden col-span-2 p-1 border border-border">
          <FramerMotion>
              <img src={Image} alt="Children at Urji Orphanage Organization"  className="rounded-lg object-cover object-center" />
            </FramerMotion>
            </div>
            <div className="hover:shadow-md cursor-pointer relative  rounded-lg overflow-hidden p-1 border border-border">
            <FramerMotion>
              <img src={Image1} alt="Urji Orphanage Organization facility"  className="rounded-lg object-cover object-center" />
            </FramerMotion>
            </div>
            <div className="hover:shadow-md cursor-pointer relative  rounded-lg overflow-hidden p-1 border border-border">
            <FramerMotion>
              <img src={Image2} alt="Education at Urji Orphanage Organization" className="rounded-lg object-cover object-center" />
            </FramerMotion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

