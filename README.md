<img src="./app/view/assets/logos/horizontal-black-font.png" alt="Akila Analytics">

# Akila Analytics Public Pages

#### Chat App with Slack

- Update the interactive URL [here](https://api.slack.com/apps/A0953AG508Y/interactive-messages?)

  - ENV_VAR: The SLACK_BOT_TOKEN
    - pulled from the `OAuth & Permissions` section in the
      left navbar [link here](https://api.slack.com/apps/A094JG5FA4C/oauth?)
  - ENV_VAR: SLACK_WEBHOOK_URL
    - is pulled from the "Incoming Webhooks" section
  - In slack, `Interactivity & Shortcuts` > `Request URL`

    - For development, use `ngrok http 3000` to set a public webhook. Then set
      the `Request URL` to the link provided from that output. Something like
      this: `https://03a5-2600-1700-561a-f90-b8a6-60cd-a22b-a713.ngrok-free.app/api/chat/interactive`.
      Make sure to include `/api/chat/interactive` at the end since that's the
      endpoint we use in our app.
    - In production, this is set to: `https://akilaanalytics.com/api/chat/interactive`

  - Scopes:
    - Ensure `chat:write` is added in the "Scopes" section

### Strapi Blog

**Update Assets**

1. Run `npm run strapi export --no-encrypt`
2. This created a `export_<date>.tar.gz` file, which needs to be transferred to
   the EC2 instance.
3. On the EC2 instance, run `npm run strapi import -- -f ./exports/<file_name>.tar.gz.enc`

[docs](https://strapi.io/blog/importing-exporting-and-transferring-data-with-the-strapi-cli)

### Debugging

**"Command react-router not found" on an EC2 instance**
Install packages via `npm --include=dev i` to ensure dev dependencies are
installed.
