/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/.*'],
  publicPath: '/_static/build/',
  server: 'server.ts',
  serverBuildPath: 'public/build',

  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  serverModuleFormat: 'cjs'
}
