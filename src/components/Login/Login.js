import { Form } from '../Form/Form';

export const Login = ({ onLogin, messageAcceptAuth, isAccept }) => {
  return (
    <Form
      title={'Рады видеть!'}
      type={'signin'}
      button={'Войти'}
      text={`Еще не зарегистрированы? `}
      onClick={onLogin}
      messageAccept={messageAcceptAuth}
      isAccept={isAccept}
    />
  );
};
