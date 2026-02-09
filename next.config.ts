import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    SMTP_HOST: "smtp.gmail.com",
    SMTP_PORT: "465", 
    SMTP_SECURE: "true", 
    SMTP_USER: "ae_it@yahoo.com",
    SMTP_PASS: "kcua cwvd lztf hiob",
    CONTACT_RECEIVER_EMAIL: "jeevanjose1997@gmail.com",
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
