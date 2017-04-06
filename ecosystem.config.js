module.exports = {
  apps: [{
    name: 'nodeexpress',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-169-182-108.ap-southeast-1.compute.amazonaws.com',
      key: '/Users/dileepaditi/ladbrokes/AWS/key/lad-aws-key.pem',
      ref: 'origin/master',
      repo: 'https://github.com/dileepgopalan/codebase.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
