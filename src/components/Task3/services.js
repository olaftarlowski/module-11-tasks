import axios from "axios";

export const getData = async () => {
  const res = await axios
    .get("https://randomuser.me/api/?results=10&exc=gender")
    .then((res) => res.data.results)
    .catch((error) => {
      console.log(error);
    });

  return res;
};
