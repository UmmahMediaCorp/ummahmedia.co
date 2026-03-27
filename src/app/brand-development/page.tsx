import type { Metadata } from 'next';
import BrandDevelopmentClient from './client';

export const metadata: Metadata = {
  title: 'Brand Development — Your Marketing General Contractor | Ummah Media',
  description:
    'We audit your brand, build the plan, and execute — consulting, custom video, photography, and branded content packages tailored to your business.',
};

export default function BrandDevelopmentPage() {
  return <BrandDevelopmentClient />;
}
