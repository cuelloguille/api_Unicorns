import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ProductForm = ({ addProduct }) => {
  const initialValues = {
    name: '',
    powers: '',
    age: '',
    color: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Nombre obligatorio'),
    powers: Yup.string().required('Poder obligatorio'),
    age: Yup.number().positive('Debe ser positiva').required('Edad obligatoria'),
    color: Yup.string().required('Color obligatorio')
  });

  const handleSubmit = (values, { resetForm }) => {
    addProduct({ ...values, id: Date.now() });
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label>Nombre:</label>
          <Field name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label>Poder:</label>
          <Field name="powers" />
          <ErrorMessage name="powers" component="div" />
        </div>
        <div>
          <label>Edad:</label>
          <Field name="age" type="number" />
          <ErrorMessage name="age" component="div" />
        </div>
        <div>
          <label>Color:</label>
          <Field name="color" />
          <ErrorMessage name="color" component="div" />
        </div>
        <button type="submit">Agregar</button>
      </Form>
    </Formik>
  );
};

export default ProductForm;
