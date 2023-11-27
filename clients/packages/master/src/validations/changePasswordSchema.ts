import * as yup from 'yup';

const changePasswordSchema = yup.object().shape({
  // oldPassword: yup.string().required('Senha atual é obrigatória'),
  newPassword: yup.string().required('Nova senha é obrigatória'),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), ''], 'As senhas não conferem')
    .required('Confirmação de senha é obrigatória')
});

export type changePasswordDTO = yup.InferType<typeof changePasswordSchema>;

export default changePasswordSchema;
