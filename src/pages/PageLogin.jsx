import { APIAuth } from '@/apis';
import { Container, Grid, GridItem, useMediaQuery } from '@chakra-ui/react';
import { createToastStore } from '@/stores';
import { SectionFormLogin } from '@/components/authentication/login';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import IllustrationLogin from '@/assets/dashboard.jpg';

export function PageLogin() {
  const navigate = useNavigate();
  const [isLargerThanLaptop] = useMediaQuery('(min-width: 62em)');

  const { setToast } = createToastStore();
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async (credentials) => {
    setLoading(true);
    try {
      const response = await APIAuth.loginViaEmail(credentials);
      if (response) {
        formik.resetForm();
        navigate('/sentiment-analytics');
      }
    } catch (error) {
      setToast({
        status: 'ERROR',
        title: 'Error',
        message: error.message || 'Something went wrong',
      });
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Please enter your email';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Please enter your password';
      } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
      }

      return errors;
    },
    onSubmit: (values) => {
      formik.validateForm().then((errors) => {
        formik.setErrors(errors);
        if (Object.keys(errors).length === 0) {
          handleOnSubmit(values);
        }
      });
    },
  });

  return (
    <Container
      maxW={'container.2xl'}
      h={'100vh'}
      p={0}
    >
      <Grid
        templateColumns={'1.5fr 1fr'}
        p={0}
      >
        {isLargerThanLaptop && (
          <GridItem
            colSpan={1}
            h={'100vh'}
            w={'100%'}
            bgImage={IllustrationLogin}
            bgPosition={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
          />
        )}

        <GridItem
          colSpan={{ base: 2, lg: 1 }}
          px={{ base: 10, md: 20 }}
          gap={4}
        >
          <SectionFormLogin
            formHandler={formik}
            loading={loading}
          />
        </GridItem>
      </Grid>
    </Container>
  );
}
