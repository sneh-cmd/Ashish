import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Globe
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm">
            <MessageCircle className="h-3 sm:h-4 w-3 sm:w-4" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm excited to hear about your project and discuss how we can work together.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Email Card */}
          <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-card/50 border border-border backdrop-blur-xl p-4 sm:p-6 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover:bg-card/70">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Email</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-2 sm:mb-4">Send me a message anytime</p>
                <a 
                  href="mailto:ashishbhalsod21@gmail.com" 
                  className="text-primary hover:text-primary/80 font-medium transition-colors group-hover:translate-x-1 inline-block"
                >
                  ashishbhalsod21@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-card/50 border border-border backdrop-blur-xl p-4 sm:p-6 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover:bg-card/70">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Phone</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-2 sm:mb-4">Available for calls</p>
                <a 
                  href="tel:+918866163038" 
                  className="text-primary hover:text-primary/80 font-medium transition-colors group-hover:translate-x-1 inline-block"
                >
                  +91 8866163038
                </a>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-card/50 border border-border backdrop-blur-xl p-4 sm:p-6 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover:bg-card/70">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Location</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-2 sm:mb-4">Based in India</p>
                <span className="text-primary font-medium group-hover:translate-x-1 inline-block transition-transform">
                  Rajkot, Gujarat
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Connect With Me</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              {
                icon: Github,
                label: "GitHub",
                url: "https://github.com/ashishbhalsod",
                color: "hover:bg-gray-900"
              },
              {
                icon: Linkedin,
                label: "LinkedIn", 
                url: "https://www.linkedin.com/in/ashishbhalsod",
                color: "hover:bg-blue-600"
              },
              {
                icon: Twitter,
                label: "Twitter",
                url: "#",
                color: "hover:bg-sky-500"
              },
              {
                icon: Globe,
                label: "Portfolio",
                url: "#",
                color: "hover:bg-primary"
              }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-lg sm:rounded-xl border border-border bg-card/50 backdrop-blur-sm p-3 sm:p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 ${social.color} hover:text-white`}
                aria-label={social.label}
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:font-medium">{social.label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Send className="h-3 sm:h-4 w-3 sm:w-4" />
            Let's Build Something Amazing Together
          </div>
        </div>
      </div>
    </section>
  );
};