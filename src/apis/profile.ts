import { instance } from "./axios";

interface parameterType {
  clientId: string;
  image: string;
}

const postProfile = (body: parameterType) => {
  const response = instance.post("/api/profile/set", body);
  return response;
};

export default postProfile;
