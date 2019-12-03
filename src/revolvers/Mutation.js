async function newTodo(parent, args, context, info) {
  return await context.prisma.createTodo({...args});
}

async function doneTodo(parent, args, context, info) {
  const getId = await context.prisma.todo({ id: args.id });
  const updateTodo = await context.prisma.updateTodo({
    where: { id: getId.id },
    data: { done: !getId.done },
  });
  return updateTodo;
}

module.exports = {
  newTodo,
  doneTodo
}