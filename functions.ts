const axios = require("axios");

export const functions = {
  add: (num1: number, num2: number) => num1 + num2,
  reverseString: (str: string) => str.split("").reverse().join(""),
  isNull: () => null,
  checkUser: () => ({ name: "Mohamed", age: 35 }),
  getPosts: (id: number | undefined = undefined) =>
    axios
      .get(
        `https://my-json-server.typicode.com/typicode/demo/posts${
          id ? "/" + id : ""
        }`
      )
      .then((res: any) => res.data)
      .catch((err: any) => "error"),
};
