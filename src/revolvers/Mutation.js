async function newTodo(parent, args, context, info) {
  return await context.prisma.createTodo({...args});
}

async function doneTodo(parent, args, context, info) {
  const getId = await context.prisma.todo({ id: args.id });
  const updateDoneTodo = await context.prisma.updateTodo({
    where: { id: getId.id },
    data: { done: !getId.done },
  });
  return updateDoneTodo;
}

async function updateText(parent, args, context, info) {
  const getId = await context.prisma.todo({ id: args.id });
  const updateTextTodo = await context.prisma.updateTodo({
    where: { id: getId.id },
    data: { text: args.text }
  });
  return updateTextTodo;
}

module.exports = {
  newTodo,
  doneTodo,
  updateText
}