export const seedUsers = async payload => {
  // create admin
  await payload.create({
    collection: "users",
    data: {
      email: "dev@payloadcms.com",
      password: "test",
    },
  })
}
