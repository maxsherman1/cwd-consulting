import { Metadata } from "next";
import InvestmentServices from "../../../components/InvestmentServices";

export const metadata: Metadata = {
  title: "Investment Services | CWD Consulting",
  description: "Discover our investment services to optimize your financial strategies.",
  openGraph: {
    title: "Investment Services | CWD Consulting",
    description: "Discover our investment services to optimize your financial strategies.",
    url: "https://cwdconsulting.co.uk/services/investment",
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

export default function InvestmentServicesPage() {
  return <InvestmentServices />;
}
