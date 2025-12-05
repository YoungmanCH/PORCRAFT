module.exports = {
  apps: [
    {
      name: 'porcraft',
      script: 'npx',
      args: 'serve -s dist -l 3000',
      cwd: __dirname,
      env: {
        NODE_ENV: 'production',
      },
      // 自動再起動設定
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      // ログ設定
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,
      // インスタンス設定（CPUコア数に応じて調整可能）
      instances: 1,
      exec_mode: 'fork',
    },
  ],
};
