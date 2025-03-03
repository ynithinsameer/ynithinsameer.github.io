import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
  tags: string[];
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Escaping Notion's Gravity: My DeepSeek-Guided Quest for the Perfect Note-Taking App",
    excerpt: "A journey through note-taking apps, AI assistance, and the quest for the perfect knowledge management system.",
    date: "February 29, 2024",
    readTime: "7 min read",
    link: "https://ynsameer.medium.com/escaping-notions-gravity-my-deepseek-guided-quest-for-the-perfect-note-taking-app-and-the-13cac4a3624a",
    tags: ["Productivity", "Note-Taking", "AI", "Knowledge Management"]
  }
];

const BlogsPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Articles on productivity, AI, and technology.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8"
            >
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-none bg-gradient-to-r from-[#FEC6A1]/5 to-transparent">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {blog.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {blog.readTime}
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#FEC6A1] transition-colors">
                    {blog.title}
                  </h2>

                  <p className="text-lg text-muted-foreground mb-6">
                    {blog.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {blog.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 rounded-full text-sm bg-[#FEC6A1]/10 text-[#FEC6A1]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button 
                    asChild 
                    variant="ghost" 
                    className="group/button hover:bg-[#FEC6A1]/10 hover:text-[#FEC6A1]"
                  >
                    <a 
                      href={blog.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Read Article 
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/button:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {blogs.length === 1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground">
              More articles coming soon! Follow me on{" "}
              <a 
                href="https://medium.com/@ynsameer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FEC6A1] hover:underline"
              >
                Medium
              </a>
              {" "}for updates.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
