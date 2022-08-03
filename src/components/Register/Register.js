import { Form } from '../Form/Form';
import {
  REGISTER_BUTTON,
  REGISTER_TEXT,
  REGISTER_TITLE,
} from '../../constants';

export const Register = ({ onRegister, messageAcceptAuth, isAccept }) => {
  return (
    <Form
      title={REGISTER_TITLE}
      type={'signup'}
      button={REGISTER_BUTTON}
      text={REGISTER_TEXT}
      onClick={onRegister}
      messageAccept={messageAcceptAuth}
      isAccept={isAccept}
    />
  );
};
