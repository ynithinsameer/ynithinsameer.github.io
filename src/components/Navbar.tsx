
import { Link } from "react-router-dom";
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";
import { FileDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-background/90 border-b z-40">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="text-lg font-medium text-foreground">
          <span className="text-[#FEC6A1] dark:text-[#FDE1D3]">ML</span> Portfolio
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-[#FEC6A1] dark:hover:text-[#FDE1D3] transition-colors">
            Home
          </Link>
          <Link to="/experience" className="text-sm font-medium hover:text-[#FEC6A1] dark:hover:text-[#FDE1D3] transition-colors">
            Experience
          </Link>
          <Link to="/projects" className="text-sm font-medium hover:text-[#FEC6A1] dark:hover:text-[#FDE1D3] transition-colors">
            Projects
          </Link>
          <Link to="/blogs" className="text-sm font-medium hover:text-[#FEC6A1] dark:hover:text-[#FDE1D3] transition-colors">
            Blogs
          </Link>
          
          <a href="/resume.pdf" download="resume.pdf">
            <Button variant="outline" size="sm" className="group">
              Resume
              <FileDown className="ml-1 h-4 w-4 group-hover:text-[#FEC6A1] dark:group-hover:text-[#FDE1D3]" />
            </Button>
          </a>
          
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
