/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-opennext-sentry-issue",
      removal: input?.stage === "prod" ? "retain" : "remove",
      protect: ["prod"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          region: "us-west-1",
        },
      },
    };
  },
  async run() {
    new sst.aws.Nextjs("SstOpenNextSentryIssue", {
      environment: {
        NEXT_PUBLIC_SENTRY_DSN: process.env.SENTRY_DSN!,
      },
    });
  },
});
