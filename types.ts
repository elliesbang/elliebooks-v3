
export type Category = 'All' | 'Fiction' | 'Non-Fiction' | 'AI Series' | 'Essays' | 'Technology' | 'Philosophy' | 'Romance' | 'Science' | 'Psychology' | 'Tech';

export interface Book {
  id: string;
  title: string;
  category: Category;
  price: number;
  image: string;
  badge?: string;
  author?: string;
  description?: string;
}

export interface NavItem {
  label: string;
  path: string;
}
