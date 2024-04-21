export default ({ loader, ...buildInfo }) => {
  // return c
  return {
    ...buildInfo,
    loader: {
      ...(loader ?? {}),
      ".mp3": "dataurl",
    },
  };
};
