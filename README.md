# SST Open Next Sentry Issue
A project to demonstrate the issue found [here](https://github.com/opennextjs/opennextjs-aws/issues/775).

### Requirements
- A sentry dsn
- A deployed project using the sentry dsn `SENTRY_DSN={your_sentry_dsn} npx sst deploy`

### Usage
Once deployed, upon navigating to the project url, a `Hello, World!` message should render. If the API route returns an empty response, instead the message will be `Hello, ERROR NO DATA RETURNED`.
