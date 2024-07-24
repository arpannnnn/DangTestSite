import  Icons  from 'lucide-react';

export interface NavItem {
  
  href?: string;
  disabled?: boolean;
  external?: boolean;
  Icon?: keyof typeof Icons;
  label?: string;
  description?: string;
  role?: string;
  uid?: string;
  title?: string;
  content?: string;
}