function last(...args) {
  const lastArg = args[args.length - 1];

  if (args.length === 1 && (Array.isArray(lastArg) || typeof lastArg === 'string')) {
    return lastArg[lastArg.length - 1];
  }

  return lastArg;
}
console.log(last('123123'))