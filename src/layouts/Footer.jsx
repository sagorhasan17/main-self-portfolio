import {
    Github,
    Linkedin,
    MailCheck,
    PhoneIncoming,
    Youtube
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="container mx-auto px-6 relative">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-10">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse uppercase" />
            Sagor Hossain
          </span>
          <p className="pt-2 text-muted-foreground text-sm">
            Crafting digital experiences with clean code & modern design.
          </p>
        </div>
        <div>
          <span>Get in Touch</span>
          <span className="flex gap-2 pt-2">
            <MailCheck className="text-primary size-6" />
            <span className="text-muted-foreground text-sm">
              sagor.codealoy@gmail.com
            </span>
          </span>
          <span className="flex gap-2 pt-3">
            <PhoneIncoming className="text-primary size-6" />
            <span className="text-muted-foreground text-sm">
              +880 1704-572442
            </span>
          </span>
        </div>
        <div>
          <span className="text-center">Connect with me</span>
          <div className="flex gap-2 pt-2">
            {[
              { icon: Github, href: "https://github.com/sagorhasan17" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/sagor-hossain17/",
              },
              { icon: Youtube, href: "https://www.youtube.com/@codealoy" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href} target="_blank"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                {<social.icon className="w-5 h-5" />}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="container mx-auto px-4 py-6 text-center  border-t border-muted-foreground">
        <p className="text-sm text-muted-foreground select-none">
          © SAGOR HOSSAIN {new Date().getFullYear()} - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
