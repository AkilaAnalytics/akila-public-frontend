<img src="./app/view/assets/logos/horizontal-black-font.png" alt="Akila Analytics">

# Akila Analytics Public Pages

### Strapi Blog

**Update Assets**

1. Run `npm run strapi export`
2. This created a `export_<date>.tar.gz` file, which needs to be transferred to
   the EC2 instance.
3. On the EC2 instance, run `npm run strapi import -- -f ./exports/<file_name>.tar.gz.enc`

[docs](https://strapi.io/blog/importing-exporting-and-transferring-data-with-the-strapi-cli)

### Debugging

**"Command remix not found" on an EC2 instance**

The EC2 instance has the environment variable ENV set to prod. So,
npm doesn't install the dev dependencies. Make sure this package is installed
`"@remix-run/dev": "^2.11.2"`

Install packages via `npm --include=dev i` to ensure dev dependencies are
installed.
