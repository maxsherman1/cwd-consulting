import { Metadata } from "next";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | CWD Consulting",
  description: "Get in touch with CWD Consulting for expert business solutions.",
  openGraph: {
    title: "Contact Us | CWD Consulting",
    description: "Get in touch with CWD Consulting for expert business solutions.",
    url: "https://cwdconsulting.co.uk/contact",
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

export default function Contact() {
  return <ContactForm />;
}
