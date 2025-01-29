import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8eceec6cbbc844748310898930988aaa",
  },
});
