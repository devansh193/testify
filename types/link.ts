export interface Link {
  id: string;
  shortUrl: string;
  destinationUrl: string;
  icon: string;
  clicks: number;
  createdAt: string;
}

export interface LinkCardProps {
  link: Link;
  onCopy?: (shortUrl: string) => void;
  onClickStats?: (id: string) => void;
  className?: string;
}
