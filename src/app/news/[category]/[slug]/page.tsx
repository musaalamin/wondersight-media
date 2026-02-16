import { Metadata } from 'next';
import { client, urlFor } from '@/lib/sanity.client';
import CategoryClient from './CategoryClient'; // We will create this next

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { category } = await params;
  const displayTitle = category.replace('-', ' & ').toUpperCase();

  return {
    title: `${displayTitle} | Wonder Sight News`,
    description: `Investigative reports and intelligence on ${displayTitle} in Northwest Nigeria.`,
    openGraph: {
      title: `Wonder Sight Intelligence: ${displayTitle}`,
      images: ['/og-image.jpg'], // You can add a default category image here
    },
    twitter: {
      card: 'summary_large_image',
    }
  };
}

export default async function CategoryPage({ params }: { params: any }) {
  const { category } = await params;
  return <CategoryClient category={category} />;
}