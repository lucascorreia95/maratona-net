"use server";
const updateDataFromServer = async (name: string) => {
  "use server";
  return "server side" + name;
};

export { updateDataFromServer };
