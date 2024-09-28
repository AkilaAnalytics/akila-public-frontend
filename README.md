<img src="./app/view/assets/logos/horizontal-black-font.png" alt="Akila Analytics">

# Akila Analytics Public Pages

#### "Command remix not found" on an EC2 instance

The EC2 instance has the environment variable ENV set to prod. So,
npm doesn't install the dev dependencies. Make sure this package is installed
`"@remix-run/dev": "^2.11.2"`

Install packages via `npm --include-dev i` to ensure dev dependencies are
installed.
