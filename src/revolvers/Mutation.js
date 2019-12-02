async function newTodo(parent, args, context, info) {
  return await context.prisma.createTodo({...args})
}

async function doneTodo(parent, args, context, info) {
  const updateTodo = await context.prisma.updateTodo({
    where: { id: args.id },
    data: { done: true },
  })
  return updateTodo;
}

module.exports = {
  newTodo,
  doneTodo
}