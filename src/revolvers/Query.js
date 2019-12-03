function todos (parent, args, context, info) {
  return context.prisma.todoes();
}

async function todo (parent, args, context, info) {
  return context.prisma.todo({ id: args.id });
}

module.exports = {
  todos,
  todo
}