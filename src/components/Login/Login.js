import { Form } from '../Form/Form';

export const Login = () => {
  return (
    <Form
      title={'Рады видеть!'}
      type={'signin'}
      button={'Войти'}
      text={`Еще не зарегистрированы? `}
    />
  );
};
