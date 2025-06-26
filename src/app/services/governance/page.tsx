import { Metadata } from "next";
import ProductGovernance from "../../../components/ProductGovernance";

export const metadata: Metadata = {
  title: "Product Governance | CWD Consulting",
  description: "Explore our product governance consulting services to ensure compliance and efficiency.",
  openGraph: {
    title: "Product Governance | CWD Consulting",
    description: "Explore our product governance consulting services to ensure compliance and efficiency.",
    url: "https://cwdconsulting.co.uk/services/governance",
    siteName: "CWD Consulting",
    images: [
      {
        url: "/images/cwd_logo.png",
        width: 1200,
        height: 630,
        alt: "CWD Consulting Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function ProductGovernancePage() {
  return <ProductGovernance />;
}
