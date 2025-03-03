
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export interface Research {
  id: number;
  title: string;
  authors: string[];
  publication: string;
  year: string;
  abstract: string;
  link: string;
}

interface ResearchCardProps {
  research: Research;
}

const ResearchCard = ({ research }: ResearchCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-base">{research.title}</CardTitle>
        <CardDescription>{research.authors.join(", ")}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-sm text-muted-foreground mb-3">
          <span>{research.publication} · {research.year}</span>
        </div>
        <p className="text-sm line-clamp-4">{research.abstract}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" asChild className="w-full">
          <a href={research.link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" /> Read Paper
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResearchCard;
