import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/auth/authOperations';
import CustomField from '../CustomAuthField';
import { ButtonRegister } from '../RegisterForm/RegisterForm/RegisterForm.styled';
import eyeClosed from 'staticImages/eye-closed.png';
import eyeOpen from 'staticImages/eye-open.png';
import {
  Icon,
  Label,
  ValidationMessage,
} from '../RegisterForm/RegisterSteps/StepOne/stepOne.styled';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(7, 'Too short!').max(32, 'Too lond!').required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState('password');
  const [spanBgIcon, setSpanBgIcon] = useState(eyeOpen);

  function handleToggleBtn() {
    if (passwordType === 'text') {
      setPasswordType('password');
      setSpanBgIcon(eyeOpen);
    } else {
      setPasswordType('text');
      setSpanBgIcon(eyeClosed);
    }
  }

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    navigate('/user');
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          <Label htmlFor="email">
            <CustomField
              type="text"
              name="email"
              // onChange={console.log(12345)}
              placeholder="email"
              errors={errors}
              touched={touched}
            />
            <ValidationMessage name="email" component="div" />
          </Label>

          <Label htmlFor="password">
            <Icon
              url={spanBgIcon}
              id="passwordEye"
              onClick={event => handleToggleBtn(event)}
            />
            <CustomField
              type={passwordType}
              name="password"
              placeholder="password"
              errors={errors}
              touched={touched}
            />
            <ValidationMessage name="password" component="div" />
          </Label>
          <ButtonRegister type="submit">Login</ButtonRegister>
        </Form>
      )}
    </Formik>
  );
};
