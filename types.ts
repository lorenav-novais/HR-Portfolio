// FIX: Import `ReactNode` type to resolve the 'Cannot find namespace "React"' error.
import type { ReactNode } from 'react';

export interface ServiceItem {
  // FIX: Use the imported `ReactNode` type.
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
   deliverables: string;
  price: number;
  deliveryTime?: string;
}

export interface PackageItem {
  // FIX: Use the imported `ReactNode` type.
  icon: ReactNode;
  title: string;
  includes: string[];
  description: string;
  price: number;
  deliveryTime?: string;
}