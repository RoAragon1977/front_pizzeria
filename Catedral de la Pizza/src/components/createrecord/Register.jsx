import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "./Register.css"

const Register = () => {
  return (
    <>
      <Formik
        initialValues={{
          apellido: "",
          nombre: "",
          emailRegister: "",
          nombreUsuario: "",
          password: "",
          repeatPassword: "",
          calle: "",
          altura: "",
          ciudad: "",
        }}
        validate={(values) => {
          let errors = {};

          // Validación Apellido
          if (!values.apellido) {
            errors.apellido = "Por favor ingrese su apellido";
          } else if (values.apellido.trim().length > 20) {
              errors.apellido = "El campo no puede tener mas de 20 caracteres";
          }

          // Validación nombre
          if (!values.nombre) {
            errors.nombre = "Por favor ingrese su nombre";
          } else {
            if (values.nombre.trim().length > 20) {
              errors.nombre = "El campo no puede tener mas de 20 caracteres";
            }
          }

          // validación email
          if (!values.email) {
            errors.email = "Por favor ingrese una direccion de mail";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.email
            )
          ) {
            errors.email = "Esa no es una direccion de email valida";
          }

          // Validación Nmbre de Usuario
          if (!values.nombreUsuario) {
            errors.nombreUsuario = "Por favor ingrese su apellido";
          } else {
            if (values.nombreUsuario.trim().length > 20) {
              errors.nombreUsuario =
                "El campo no puede tener mas de 20 caracteres";
            }
          }

          // Validación password
          if (!values.password) {
            errors.password = "Por favor ingrese una contraseña";
          } else if (
            !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(values.password)
          ) {
            errors.password =
              "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número";
          }

          // Validación Calle
          if (!values.calle) {
            errors.calle =
              "Por favor ingrese el nombre de la calle donde vive";
          } else if (values.calle.trim().length > 20) {
              errors.nombre = "El campo no puede tener mas de 20 caracteres";
          }

          // Validación altura
          if (!values.altura) {
            errors.altura =
              "Por favor ingrese la numeración de la calle de su domicilio";
          } else if (values.altura.trim().length > 4) {
              errors.altura = "El campo no puede tener mas de 20 caracteres";
          }

          //validación ciudad
          if (!values.ciudad) {
            errors.ciudad = "Por favor ingrese su nombre";
          } else if (values.ciudad.trim().length > 20) {
              errors.ciudad = "El campo no puede tener mas de 20 caracteres";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          if (values.password !== values.repeatPassword) {
            console.error("Las Contraseñas no coinciden");
            setSubmitting(false);
            return;
          }
        }}
      >
        {(isSubmitting) => (
          <div className="containerRegister">
            <Form>
              <div>
                <h2>Registrate</h2>
              </div>
              <div className="input">
                <label htmlFor="apellido">Ingresa tu apellido</label>
                <Field type="text" id="apellido" name="apellido" />
                <ErrorMessage name="apellido" />
              </div>

              <div className="input">
                <label htmlFor="nombre">Ingresa tu nombre completo</label>
                <Field type="text" id="nombre" name="nombre" />
                <ErrorMessage name="nombre" />
              </div>

              <div className="input">
                <label htmlFor="emailRegister">
                  Ingresa tu correo electrónico
                </label>
                <Field type="email" id="emailRegister" name="emailRegister" />
                <ErrorMessage name="emailRegister" />
              </div>

              <div className="input">
                <label htmlFor="ciudad">Ingresa la ciudad en donde vivis</label>
                <Field type="text" id="ciudad" name="ciudad" />
                <ErrorMessage name="ciudad" />
              </div>

              <div className="input">
                <label htmlFor="calle">Ingresa la calle donde vivis</label>
                <Field type="text" id="calle" name="calle" />
                <ErrorMessage name="calle" />
              </div>

              <div className="input">
                <label htmlFor="altura">Ingresa la altura de la calle</label>
                <Field type="number" id="altura" name="altura" />
                <ErrorMessage name="altura" />
              </div>

              <div className="input">
                <label htmlFor="nombreUsuario">
                  Ingresa tu nombre de Usuario
                </label>
                <Field type="text" id="nombreUsuario" name="nombreUsuario" />
                <ErrorMessage name="nombreUsuario" />
              </div>

              <div className="input">
                <label htmlFor="password">Ingresa una contraseña</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage name="password" />
              </div>

              <div className="input">
                <label htmlFor="repeatpassword">Repeti tu contraseña</label>
                <Field
                  type="password"
                  id="repeatpassword"
                  name="repeatpassword"
                />
                <ErrorMessage name="repeatpassword" />
              </div>

              <div>
                <button type="submit">Enviar</button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Register;
