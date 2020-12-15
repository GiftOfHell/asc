module.exports = {
    "apps": [{
        "name": "asc-service",
        "script": "./bin/www",
        "exec_mode": "cluster",
        "watch": false,
        "instances": 1,
        "instance_id_env": "NODE_APPINSTANCE",
        "error_file": "logs/error.log",
        "out_file": "logs/out.log",
        "merge_logs": true,
        "env": {
            "PORT": 3002,
            "NODE_ENV": "development",
            "NODE_OPTIONS": "--inspect --inspect-port=9232"
        },
        "env_production": {
            "PORT": 3002,
            "NODE_ENV": "production",
            "autorestart": false
        }
    }]
}