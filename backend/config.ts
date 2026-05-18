const config = {
    database: {
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'node_mysql_api'
    },
    secret: process.env.JWT_SECRET || '',
    emailFrom: process.env.EMAIL_FROM || '',
    resendApiKey: process.env.RESEND_API_KEY || ''
};

export default config;