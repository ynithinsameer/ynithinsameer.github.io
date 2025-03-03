
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { Button } from "./ui/button";

export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
  tags: string[];
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={blog.image || "/placeholder.svg"} 
          alt={blog.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="w-3.5 h-3.5 mr-1" />
            {blog.date}
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5 mr-1" />
            {blog.readTime}
          </div>
        </div>
        <CardTitle className="line-clamp-2 text-lg">{blog.title}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <CardDescription className="line-clamp-3">{blog.excerpt}</CardDescription>
        
        <div className="flex flex-wrap gap-1 mt-3">
          {blog.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[#FEC6A1]/10 dark:bg-[#FDE1D3]/10 text-[#FEC6A1] dark:text-[#FDE1D3]">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter>
        <Button asChild variant="ghost" className="w-full hover:bg-[#FEC6A1]/10 hover:text-[#FEC6A1] dark:hover:bg-[#FDE1D3]/10 dark:hover:text-[#FDE1D3]">
          <a href={blog.link} target="_blank" rel="noopener noreferrer">
            Read Article
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
