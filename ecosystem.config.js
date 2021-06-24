module.exports = {
  apps: [
    {
      name: "moka",
      scripts: "index.js",
      args: "",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "256M",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
