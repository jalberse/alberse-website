// These redirects are primarily to ensure that links from the old site still work for the new site routes.
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/code",
        destination: "/#code",
        permanent: true,
      },
      {
        source: "/illustration",
        destination: "/art#illustration",
        permanent: true,
      },
      {
        source: "/look-development",
        destination: "/threed#look-dev",
        permanent: true,
      },
      {
        source: "/animation",
        destination: "/art#motion",
        permanent: true,
      },
      {
        source: "/digital-painting",
        destination: "/art#painting",
        permanent: true,
      },
      {
        source: "/code-1",
        destination: "/#code",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
