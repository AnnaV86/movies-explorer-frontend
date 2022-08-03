import { Form } from '../Form/Form';
import { LOGIN_TITLE, LOGIN_BUTTON, LOGIN_TEXT } from '../../constants/index';

export const Login = ({ onLogin, messageAcceptAuth, isAccept }) => {
  return (
    <Form
      title={LOGIN_TITLE}
      type={'signin'}
      button={LOGIN_BUTTON}
      text={LOGIN_TEXT}
      onClick={onLogin}
      messageAccept={messageAcceptAuth}
      isAccept={isAccept}
    />
  );
};
