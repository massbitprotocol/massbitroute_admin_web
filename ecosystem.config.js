module.exports = {
  apps: [
    {
      name: 'massbit-staking-service',
      script: 'dist/src/main.js',
      instances: 1,
      exec_mode: 'cluster',
      kill_timeout: 10000,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};
