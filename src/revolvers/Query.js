function todos (parent, args, context, info) {
  return context.prisma.todoes();
}

function todo(parent, args, context, info) {
  return context.prisma.todo({ id: args.id })
}

module.exports = {
  todos,
  todo
}