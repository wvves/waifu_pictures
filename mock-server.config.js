/** @type {import('mock-config-server').MockServerConfig} */
const mockServerConfig = {
  rest: {
    baseUrl: '/api',
    configs: [
      {
        path: "/users",
        method: "get",
        routes: [
          {
            data: [
              {
                id: 0,
                name: "Sophia",
                emoji: "😊",
              },
              {
                id: 1,
                name: "Amalia",
                emoji: "🤖",
              },
              {
                id: 2,
                name: "Myra",
                emoji: "👽",
              },
              {
                id: 3,
                name: "Juliana",
                emoji: "🦕",
              },
              {
                id: 4,
                name: "Madelyn",
                emoji: "👻",
              },
              {
                id: 5,
                name: "Wilma",
                emoji: "🦖",
              },
              {
                id: 6,
                name: "Mccarty",
                emoji: "🤟",
              },
              {
                id: 7,
                name: "Lea",
                emoji: "🐉",
              },
              {
                id: 8,
                name: "Barber",
                emoji: "🤙",
              },
            ],
          },
        ],
      },
      {
        path: '/user',
        method: 'post',
        routes: [
          {
            entities: {
              body: {
                'user': 'Sophia'
              }
            },
            data: [
              {
                id: 0,
                name: "Sophia",
                emoji: "😊",
              },
            ]
          }
        ]
      }
    ]
  }
};

export default mockServerConfig;