export type LoginFormData = {
  name: string;
};

export interface LoginFormProps {
  onSubmit?: (data: LoginFormData) => void;
}
