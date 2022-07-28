import { Form } from '../Form/Form';

export const Register = () => {
  return (
    <>
      <Form
        title={'Добро пожаловать!'}
        type={'signup'}
        button={'Зарегистрироваться'}
        text={`Уже зарегистрированы? `}
      />
    </>
  );
};
