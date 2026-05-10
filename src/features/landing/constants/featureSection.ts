export type Feature = {
  image: string
  title: string
  description: string
}

export const FeaturesData: Feature[] = [
  {
    image: '/LandingPageFeature/malware.jpg',
    title: 'Malware detection',
    description:
      'Scan codes, scripts and assets for known malware signatures & obfuscated payloads.',
  },
  {
    image: '/LandingPageFeature/SSL.jpg',
    title: 'SSL/TLS Review',
    description:
      'Verify certificate validity, encrypt data strength, HSTS, & protocol versions in use.',
  },
  {
    image: '/LandingPageFeature/DNS.jpg',
    title: 'DNS & Domain health',
    description:
      'Detect DNS misconfigurations, expired and dangling domains and subdomains.',
  },
  {
    image: '/LandingPageFeature/security.jpg',
    title: 'Security Headers',
    description:
      'Audit CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy & so much more.',
  },
  {
    image: '/LandingPageFeature/DarkWeb.jpg',
    title: 'Dark web exposure',
    description:
      'Monitor breaches and confirmed leaks tied to your domain on dark web marketplaces.',
  },
  {
    image: '/LandingPageFeature/uptime.jpg',
    title: 'Uptime & performance',
    description:
      'Continuous monitoring with instant alerts for downtime or performance defects.',
  },
]
