import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerMotion from "../Animation/FramerMotion";
export default function Support() {
  return (
    <section id="support" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <FramerMotion>
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
            Support Our Cause
          </h2>
        </FramerMotion>
        <FramerMotion>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardHeader>
                <FramerMotion>
                  <CardTitle className="text-secondary">
                    Make a Donation
                  </CardTitle>
                </FramerMotion>
                <FramerMotion>
                  <CardDescription>
                    Your contribution can change a child's life
                  </CardDescription>
                </FramerMotion>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <FramerMotion>
                      <Label htmlFor="amount">Donation Amount</Label>
                    </FramerMotion>
                    <FramerMotion>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="Enter amount"
                        className="border-primary/20"
                      />
                    </FramerMotion>
                  </div>
                  <div>
                    <FramerMotion>
                      <Label htmlFor="name">Full Name</Label>
                    </FramerMotion>
                    <FramerMotion>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="border-primary/20"
                      />
                    </FramerMotion>
                  </div>
                  <div>
                    <FramerMotion>
                      <Label htmlFor="email">Email</Label>
                    </FramerMotion>
                    <FramerMotion>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="border-primary/20"
                      />
                    </FramerMotion>
                  </div>
                  <FramerMotion>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                    >
                      Donate Now
                    </Button>
                  </FramerMotion>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <FramerMotion>
                    <CardTitle className="text-secondary">Volunteer</CardTitle>
                  </FramerMotion>
                  <FramerMotion>
                    <CardDescription>
                      Give your time and skills to make a difference
                    </CardDescription>
                  </FramerMotion>
                </CardHeader>
                <CardContent>
                  <FramerMotion>
                    <p className="text-sm md:text-md text-muted-foreground">
                      We're always looking for dedicated volunteers to help with
                      various programs and activities. If you're interested in
                      volunteering, please contact us for more information.
                    </p>
                  </FramerMotion>
                  <FramerMotion>
                    <Button className="mt-4 bg-primary hover:bg-primary/90 text-white">
                      Learn More
                    </Button>
                  </FramerMotion>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardHeader>
                  <FramerMotion>
                    <CardTitle className="text-secondary">
                      Corporate Partnerships
                    </CardTitle>
                  </FramerMotion>
                  <FramerMotion>
                    <CardDescription>
                      Partner with us to create lasting impact
                    </CardDescription>
                  </FramerMotion>
                </CardHeader>
                <CardContent>
                  <FramerMotion>
                    <p className="text-sm md:text-md text-muted-foreground">
                      We offer various partnership opportunities for
                      corporations looking to make a positive impact in the
                      community. Contact us to discuss how we can work together.
                    </p>
                  </FramerMotion>
                  <FramerMotion>
                    <Button className="mt-4 bg-primary hover:bg-primary/90 text-white">
                      Contact Us
                    </Button>
                  </FramerMotion>
                </CardContent>
              </Card>
            </div>
          </div>
        </FramerMotion>
      </div>
    </section>
  );
}
