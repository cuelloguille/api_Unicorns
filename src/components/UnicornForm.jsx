import React, { useEffect, useState } from 'react';
import { useUnicorns } from './context/UnicornContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const UnicornForm = ({ unicornToEdit }) => {
  const { createUnicorn, editUnicorn } = useUnicorns();

  const formik = useFormik({
    initialValues: {
      name: unicornToEdit ? unicornToEdit.name : '',
      age: unicornToEdit ? unicornToEdit.age : '',
      powers: unicornToEdit ? unicornToEdit.powers : '',
      color: unicornToEdit ? unicornToEdit.color : '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Nombre es requerido'),
      age: Yup.number().positive('La edad debe ser mayor a 0').required('Edad es requerida'),
      powers: Yup.string().required('Poderes son requeridos'),
      color: Yup.string().required('Color es requerido'),
    }),
    onSubmit: (values) => {
      if (unicornToEdit) {
        editUnicorn(unicornToEdit._id, values); // Cambié `id` por `_id` para que coincida con el campo correcto
      } else {
        createUnicorn(values);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && <div>{formik.errors.name}</div>}
      </div>
      <div>
        <label>Edad</label>
        <input
          type="number"
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
        />
        {formik.errors.age && <div>{formik.errors.age}</div>}
      </div>
      <div>
        <label>Poderes</label>
        <input
          type="text"
          name="powers"
          value={formik.values.powers}
          onChange={formik.handleChange}
        />
        {formik.errors.powers && <div>{formik.errors.powers}</div>}
      </div>
      <div>
        <label>Color</label>
        <input
          type="text"
          name="color"
          value={formik.values.color}
          onChange={formik.handleChange}
        />
        {formik.errors.color && <div>{formik.errors.color}</div>}
      </div>
      <button type="submit">{unicornToEdit ? 'Editar Unicornio' : 'Crear Unicornio'}</button>
    </form>
  );
};

export default UnicornForm;
