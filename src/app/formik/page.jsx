"use client";
import React from "react";
import { Formik, useFormik } from "formik";
import { styled, Box, TextField, Button } from "@mui/material";
import * as yup from "yup";
import axios from "axios";

const StyledForm = styled(`form`)({
  width: 400,
  height: 400,
  width: "45%",
  margin: "3rem auto",
  display: "flex",
  flexDirection: "column",
  gap: 15,
});

export default function page() {
  return <FormikExample1 />;
}

function FormikExample1() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)) {
          errors.email = "Invalid email address";
        } else if (!values.password) {
          errors.password = "Password Requierd";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values));
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <StyledForm onSubmit={handleSubmit}>
          <TextField
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <TextField
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <Button type="submit" disabled={isSubmitting} variant="contained">
            Submit
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
}

function FormikExample2() {
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Please vaild Email")
      .requird("Email is requierd"),
    password: yup
      .string("enter your password")
      .min(8, "should be 8 characters")
      .requierd("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div>
      <StyledForm onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </StyledForm>
    </div>
  );
}
