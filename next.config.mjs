/** @type {import('next').NextConfig} */

import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {};

export default withSentryConfig(
  nextConfig,
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Automatically annotate React components to show their full name in breadcrumbs and session replay
    reactComponentAnnotation: {
      enabled: true,
    },
  },
  {
    autoInstrumentServerFunctions: true, // NOTE: When enabled, server functions no longer return data
  },
);
