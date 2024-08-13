export const getDictionary = async (locale: string) => {
  switch (locale) {
    case "en":
      return import("./dictionaries/en.json").then((module) => module.default);
    case "ar":
      return import("./dictionaries/ar.json").then((module) => module.default);
    default:
      return import("./dictionaries/en.json").then((module) => module.default);
  }
};
