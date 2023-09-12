

type AuthStateType = {
  name?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
};

type AuthErrorType = {
  name?: string;
  email?: string;
  password?: string;
};



// * Post type
type User = {
  id: number;
  name: string;
  email?: string;
  image?: string;
};


