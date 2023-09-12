/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["openweathermap.org","www.weatherbit.io","cdn.imagin.studio"]
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
