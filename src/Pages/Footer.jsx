import { 
  Building, Phone, Mail, MapPin, 
  Facebook, Twitter, Linkedin, Instagram 
} from "lucide-react";
import { Link } from 'react-router-dom'
import { Button } from "../components/ui/button";
import Logo from '../assets/Images/logo.png'

const Footer = () => {
  return (
    <footer className="relative w-full bg-secondary/5 text-foreground py-10 px-6 md:px-12">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
      
      <div className="md:max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col justify-center items-center my-3 gap-2">
          <img src={Logo} alt="logo" width={56} height={56} className="object-cover object-center" />
          <h1 className="flex items-center gap-2 justify-center text-lg font-semibold">
            <Building className="w-5 h-5" /> Urji Orphanage Organization
          </h1>
        </div>
        
        <div className="w-full h-[1px] bg-border my-6"></div>

        <div className="grid grid-cols-1 gap-8 justify-items-center">
          {/* Quick Links */}
          <div className="flex flex-col items-center ">
            <h2 className="text-xl font-semibold mb-4 text-secondary">Quick Links</h2>
            <ul className="flex flex-row  items-center md:items-start gap-4">
              <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>

             {/* Social Media Links */}
             <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-secondary">Follow Us</h2>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild className="text-primary bg-primary/20 hover:text-primary hover:bg-primary/10">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-primary bg-primary/20 hover:text-primary hover:bg-primary/10">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-primary bg-primary/20 hover:text-primary hover:bg-primary/10">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-primary bg-primary/20 hover:text-primary hover:bg-primary/10">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center  items-center ">
            <h2 className="text-xl font-semibold mb-4 text-secondary">Contact Us</h2>
            <ul className="flex flex-col md:flex-row items-center gap-4 ">
              <li><Button variant="link" asChild className="hover:text-primary p-0 h-auto font-normal">
                <a href="tel:+251932125282" className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+251932125282</span>
                </a>
              </Button></li>
              <li><Button variant="link" asChild className="hover:text-primary p-0 h-auto font-normal">
                <a href="tel:+251928137925" className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+251928137925</span>
                </a>
              </Button></li>
              <li><Button variant="link" asChild className="hover:text-primary p-0 h-auto font-normal">
                <a href="https://www.google.com/maps/search/?api=1&query=Robe+Bale+Ethiopia" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Robe Bale, Ethiopia</span>
                </a>
              </Button></li>
              <li><Button variant="link" asChild className="hover:text-primary p-0 h-auto font-normal">
                <a href="mailto:urjiorphanageorganization@gmail.com" className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>urjiorphanageorganization@gmail.com</span>
                </a>
              </Button></li>
            </ul>
          </div>

       
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center border-t border-border pt-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Urji Orphanage Organization. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
