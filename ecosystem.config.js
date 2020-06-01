module.exports = {
  apps : [{
    name: 'commandpost_app',
    script: 'npm',
    args: 'run start:production',
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '74.208.102.130',
      ref  : 'origin/master',
      repo : 'https://github.com/i-need-helpers/commandpost_app.git',
      path : '/var/www/vhosts/commandpost.com.au/cp_client',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
