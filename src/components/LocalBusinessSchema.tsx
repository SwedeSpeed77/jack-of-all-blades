import { BUSINESS_NAME, BUSINESS_PHONE_E164, SITE_URL } from "@/lib/site";

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS_NAME,
    image: `${SITE_URL}/hero/mowing-poster.jpg`,
    url: SITE_URL,
    telephone: BUSINESS_PHONE_E164,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Watertown",
      addressRegion: "SD",
      postalCode: "57201",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.899409,
      longitude: -97.115073,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Codington County, South Dakota",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    sameAs: ["https://www.yelp.com/biz/jack-of-all-blades-watertown"],
    founder: {
      "@type": "Person",
      name: "Caleb Brewster",
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
