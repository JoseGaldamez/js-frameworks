export const showFramework = (framework) => {
  switch (framework) {
    case "React JS":
      return framework.blue;
      break;
    case "Angular":
      return framework.red;
      break;
    case "Vue JS":
      return framework.green;
      break;
    case "Svelte":
      return framework.yellow;
      break;
    case "Next JS":
      return framework.magenta;
      break;
    default:
      return framework;
      break;
  }
};
