function todos (parent, args, context, info) {
  return context.prisma.todoes();
}

function test (parent, args, context, info) {
  return `test`
}

module.exports = {
  todos,
  test
}