
import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogCard, { Blog } from "@/components/BlogCard";

const blogs: Blog[] = [
  {
    id: 1,
    title: "Understanding Transformers: A Visual Guide",
    excerpt: "This blog post breaks down the transformer architecture with intuitive visualizations and explanations, making it accessible to those new to NLP.",
    date: "March 15, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg",
    link: "https://example.com/blog/transformers",
    tags: ["NLP", "Transformers", "Deep Learning"]
  },
  {
    id: 2,
    title: "Optimizing Deep Learning Models for Production",
    excerpt: "Learn practical techniques for optimizing deep learning models to run efficiently in production environments.",
    date: "January 22, 2023",
    readTime: "12 min read",
    image: "/placeholder.svg",
    link: "https://example.com/blog/optimization",
    tags: ["MLOps", "Optimization", "Production"]
  },
  {
    id: 3,
    title: "A Beginner's Guide to Time Series Forecasting",
    excerpt: "An introduction to time series forecasting using Python, covering ARIMA, Prophet, and deep learning approaches.",
    date: "November 5, 2022",
    readTime: "10 min read",
    image: "/placeholder.svg",
    link: "https://example.com/blog/time-series",
    tags: ["Time Series", "Forecasting", "Python"]
  },
  {
    id: 4,
    title: "Ethical Considerations in AI Development",
    excerpt: "Exploring the ethical challenges in AI development and suggestions for building responsible AI systems.",
    date: "September 30, 2022",
    readTime: "15 min read",
    image: "/placeholder.svg",
    link: "https://example.com/blog/ai-ethics",
    tags: ["AI Ethics", "Responsible AI"]
  },
  {
    id: 5,
    title: "Building a Recommendation System from Scratch",
    excerpt: "A step-by-step guide to building a content-based and collaborative filtering recommendation system.",
    date: "August 12, 2022",
    readTime: "14 min read",
    image: "/placeholder.svg",
    link: "https://example.com/blog/recommendation-system",
    tags: ["Recommendation Systems", "Python", "ML"]
  },
  {
    id: 6,
    title: "Feature Engineering Techniques for Machine Learning",
    excerpt: "Learn essential feature engineering techniques to improve your machine learning model performance.",
    date: "June 3, 2022",
    readTime: "9 min read",
    image: "/placeholder.svg",
    link: "https://example.com/blog/feature-engineering",
    tags: ["Feature Engineering", "ML", "Data Science"]
  }
];

// Categorizing blogs by tags
const mlBlogs = blogs.filter(blog => 
  blog.tags.some(tag => 
    ["ML", "Deep Learning", "Machine Learning"].includes(tag)
  )
);

const dataBlogs = blogs.filter(blog => 
  blog.tags.some(tag => 
    ["Data Science", "Python", "Time Series", "Feature Engineering"].includes(tag)
  )
);

const aiBlogs = blogs.filter(blog => 
  blog.tags.some(tag => 
    ["AI Ethics", "Responsible AI", "NLP", "Transformers"].includes(tag)
  )
);

const BlogsPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold mb-3">My Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Articles and tutorials on machine learning, data science, and AI development.
          </p>
        </motion.div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="ml">ML</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
            <TabsTrigger value="ai">AI</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogCard blog={blog} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ml" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mlBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogCard blog={blog} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="data" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dataBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogCard blog={blog} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ai" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogCard blog={blog} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BlogsPage;
