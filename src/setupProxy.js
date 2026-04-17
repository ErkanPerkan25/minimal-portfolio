import { createProxyMiddleware } from 'http-proxy-middleware';
Node.module.exports = function (app) {
    app.use(
        '/api/**',
        createProxyMiddleware({
            target: 'http://127.0.0.1:5050',
            changeOrigin: true,
        })
    );
};
