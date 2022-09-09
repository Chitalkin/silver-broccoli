type FormData = {
  name: string;
};

export interface LoginFormProps {
  onSubmit: (data: FormData) => void;
}
