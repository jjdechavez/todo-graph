async function newTodo(parent, args, context, info) {
  return await context.prisma.createTodo({...args})
}

async function doneTodo(parent, args, context, info) {
  const getId = await context.prisma.todo({ id: args.id });
  const updateTodo = await context.prisma.updateTodo({
    where: { id: getId.id },
    data: { done: !args.done },
  })
  return updateTodo;
}

// async function idTodo(parent, args, context, info) {
//   return await context.prisma.todo({
//     where: { id: args.id }
//   });
// }

module.exports = {
  newTodo,
  doneTodo,
  // idTodo
}