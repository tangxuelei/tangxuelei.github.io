module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'API',
      script: './1.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      },
      instances: 4,
      exec_mode: "cluster",
      max_memory_restart: "200M",
      error_file: "./logs/e.log",
      out_file: "./logs/o.log",
      log_file: "./logs/c.log",
      log_date_format: "YYYY-MM-DD HH:mm Z",
      combine_logs: true
    }
  ],


  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'root',
      host: '47.97.186.246',
      port: '50019',
      ref: 'origin/master',
      repo: 'git@code.aliyun.com:qianbao/xcqb-m.git',
      path: '/root/pm2_xcqbm',
      'post-deploy': ''
      // 'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
