import env from "../env";

export const signIn = ({
  username,
  password
}: {
  username: string;
  password: string;
}): Promise<any> => {
  return fetch(`${env.API_ENDPOINT}signin`, {
    method: "post",
    body: JSON.stringify({ username, password })
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data;
    });
};

export const signUp = ({
  username,
  password,
  email,
  birthday
}: {
  username: string;
  password: string;
  email: string;
  birthday: string;
}): Promise<any> => {
  return fetch(`${env.API_ENDPOINT}signin`, {
    method: "post",
    body: JSON.stringify({ username, password, email, birthday })
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data;
    });
};