module.exports = {
  apps: [
    {
      name: 'massbit-portal-api',
      script: 'dist/src/main.js',
      instances: 1,
      exec_mode: 'cluster',
      kill_timeout: 4000,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        PORT: 3002,
        MODE: 'api',
      },
    },
    {
      name: 'massbit-portal-worker',
      script: 'dist/src/main.js',
      kill_timeout: 4000,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        PORT: 30001,
        MODE: 'worker',
      },
    },
  ],
  deploy: {
    staging: {
      user: 'root',
      host: '34.124.164.200',
      ref: 'origin/staging',
      repo: 'git@github.com:massbitprotocol/user-management.git',
      path: '/opt/portal',
      'post-deploy':
        'yarn install && yarn build && pm2 reload ecosystem.config.js --env production',
    },
  },
};
