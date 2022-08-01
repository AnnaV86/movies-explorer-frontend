import { Form } from '../Form/Form';

export const Register = ({ onRegister, messageAcceptAuth, isAccept }) => {
  return (
    <Form
      title={'Добро пожаловать!'}
      type={'signup'}
      button={'Зарегистрироваться'}
      text={`Уже зарегистрированы? `}
      onClick={onRegister}
      messageAccept={messageAcceptAuth}
      isAccept={isAccept}
    />
  );
};
