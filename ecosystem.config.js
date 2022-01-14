module.exports = {
  apps : [{
    name   : "health_check",
    script : "npm -- run cy:run",
    // cron_restart: "*/5 * * * *",
    instances: 1,
    stop_exit_codes: [0],
    restart_delay: 60000,
    env_production: {
      NODE_ENV: "production"
    },
    env_development: {
      NODE_ENV: "development"
    }
  }]
}
