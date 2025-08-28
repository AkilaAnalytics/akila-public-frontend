import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Main and Index Routes
  index("routes/home.tsx"), // Root index page at "/"
  route("/contact-us", "routes/contact-us.tsx"),
  route("/coming-soon", "routes/coming-soon.tsx"),
  route("/watch-demo", "routes/watch-demo.tsx"),
  //route("/contact-us", "routes/contact-us.tsx"),
  //route("/pricing", "routes/pricing.tsx"),
  //route("/talk-to-sales", "routes/talk-to-sales.tsx"),

  //// API Routes
  //route("/api/chat/history", "routes/api.chat.history.tsx"),
  //route("/api/chat/interactive", "routes/api.chat.interactive.tsx"),
  //route("/api/chat/poll", "routes/api.chat.poll.tsx"),
  //route("/api/chat", "routes/api.chat.tsx"),
  //route("/api/contact-us", "routes/api.contact-us.tsx"),
  //route("/api/email-sign-up", "routes/api.email-sign-up.tsx"),

  //// Company Routes
  //route("/company/overview", "routes/company.overview.tsx"),

  //// Docs Routes
  //route("/docs/okta", "routes/docs.okta.tsx"),

  //// Enterprise Routes
  //route("/enterprise/by-role", "routes/enterprise.by-role.tsx"),
  //route("/enterprise/data-science", "routes/enterprise.data-science.tsx"),
  //route("/enterprise/use-cases", "routes/enterprise.use-cases.tsx"),

  //// Legal Routes
  //route("/legal/privacy-policy", "routes/legal.privacy-policy.tsx"),
  //route("/legal/terms-and-conditions", "routes/legal.terms-and-conditions.tsx"),

  //// Platform Routes
  //route(
  //  "/platform/end-to-end-solutions",
  //  "routes/platform.end-to-end-solutions.tsx"
  //),
  //route("/platform/governance", "routes/platform.governance.tsx"),
  //route("/platform/integrate-data", "routes/platform.integrate-data.tsx"),
  //route(
  //  "/platform/leverage-the-cloud",
  //  "routes/platform.leverage-the-cloud.tsx"
  //),
  //route("/platform/overview", "routes/platform.overview.tsx"),
  //route("/platform/security", "routes/platform.security.tsx"),
  //route("/platform/visualize-data", "routes/platform.visualize-data.tsx"),

  //// Positions Routes
  //route("/positions/business-analyst", "routes/positions.business-analyst.tsx"),
  //route("/positions/data-scientist", "routes/positions.data-scientist.tsx"),
  //route("/positions/it-operation", "routes/positions.it-operation.tsx"),
  //route("/positions/product-manager", "routes/positions.product-manager.tsx"),

  //// Product Routes
  //route(
  //  "/product/automated-reporting",
  //  "routes/product.automated-reporting.tsx"
  //),
  //route("/product/ai-consulting", "routes/product.ai-consulting.tsx"),
  //route("/product/private-llm", "routes/product.private-llm.tsx"),
  //route("/product/data-exploration", "routes/product.data-exploration.tsx"),
  //route("/product/data-processing", "routes/product.data-processing.tsx"),
  //route("/product/etl-pipeline", "routes/product.etl-pipeline.tsx"),
  //route("/product/machine-learning", "routes/product.machine-learning.tsx"),
  //route("/product/recurring-jobs", "routes/product.recurring-jobs.tsx"),
  //route("/product/try-free", "routes/product.try-free.tsx"),
  //route("/product/watch-demo", "routes/product.watch-demo.tsx"),
  //route("/product/hardware", "routes/product.hardware_.tsx"),
  //route("/product/hardware/:server", "routes/product.hardware.$server.tsx"),

  //// Resources & Training Routes
  //route(
  //  "/resources-training/training",
  //  "routes/resources-training.training.tsx"
  //),
  //route("/resources/documentation", "routes/resources.documentation.tsx"),
  //route("/resources/insights", "routes/resources.insights_.tsx"),
  //route("/resources/insights/:slug", "routes/resources.insights.$slug.tsx"),
  ////route("/resources/insights", "routes/resources.insights_.tsx", [
  ////  route(":title", "routes/resources.insights.$title.tsx"),
  ////  route("pdf/:title", "routes/resources.insights.pdf.$title.tsx"),
  ////]),

  //// Use Cases Routes
  //route(
  //  "/use-cases/customer-profitability",
  //  "routes/use-cases.customer-profitability.tsx"
  //),
  //route(
  //  "/use-cases/marketing-analytics",
  //  "routes/use-cases.marketing-analytics.tsx"
  //),
  //route("/use-cases/private-equity", "routes/use-cases.private-equity.tsx"),

  //// Special File Routes
  //route("/robots.txt", "routes/robots[.]txt.tsx"),
  //route("/sitemap.xml", "routes/sitemap[.]xml.tsx"),

  // Splat Route (Catch-all for 404s) - Must be last
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
