const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:70" || "http://localhost:8080",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/static/news", {
      target: "http://localhost:70" || "http://localhost:8080",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/static/artist", {
      target: "http://localhost:70" || "http://localhost:8080",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/static/profile", {
      target: "http://localhost:70" || "http://localhost:8080",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/static/playlist", {
      target: "http://localhost:70" || "http://localhost:8080",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/static/lyrics", {
      target: "http://localhost:70" || "http://localhost:8080",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/static/audio", {
      target: "http://localhost:70" || "http://localhost:8080",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/auth", {
      target: "http://localhost:70",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/logout", {
      target: "http://localhost:70" || "http://localhost:8080",
      changeOrigin: true,
    })
  );
};
