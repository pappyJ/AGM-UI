import React from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import Button from "../button/button";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { Alert, TYPE } from "../alert";
import HeadBox from "../../container/head-box/head-box";
export const ContactCon = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;

`;
export const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;

  }
`;

const Container = styled.div`
  padding: 1rem 5rem;
  display: grid;
  grid-template-columns: 50rem;
  justify-content: center;
  @media only screen and (max-width: 802px) {
    padding: 1rem 1rem;
    grid-template-columns: 1fr;
  }
`;

const ContactBox = ({ color }) => {
  const URL = "https://jln-ap.herokuapp.com";

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      keyMessage: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email Address.")
        .required("Email Is Required."),

      name: Yup.string().required("Name Is Required"),

      keyMessage: Yup.string().required("Message Is Required"),
    }),

    onSubmit: (values) => {
      axios
        .post(`${URL}/api/v1/contacts/sendMail`, values)
        .then((res) => {
          if (res.data.status.toLowerCase() === "success") {
            console.log("Mail Succesully Sent");

            Alert(
              "Feedback Succesully Sent , We'll Get Back To You As Soon As Possiple",
              TYPE.DARK
            );

            return history.push("/");
          }
        })
        .catch((err) => {
          err.response ? console.log(err.response.data) : console.log(err);
        });
    },
  });

  return (
    <Container>
      <HeadBox
        section='CONTACT US'
        title='Leave a Feedback or
Ask a Question'
      />

      <form onSubmit={formik.handleSubmit}>
        <ContactCon>
          <Div>
            <ContactCon>
              <TextField
                label='Name'
                color={color}
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div style={{ color: "red", fontSize: "0.7rem" }}>
                  {formik.errors.name}
                </div>
              ) : null}
            </ContactCon>

            <ContactCon>
              <TextField
                label='Email'
                color={color}
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red", fontSize: "0.7rem" }}>
                  {formik.errors.email}
                </div>
              ) : null}
            </ContactCon>
          </Div>

          <TextField
            label='Message'
            color={color}
            multiline
            rows={4}
            {...formik.getFieldProps("keyMessage")}
          />
          {formik.touched.keyMessage && formik.errors.keyMessage ? (
            <div style={{ color: "red", fontSize: "0.7rem" }}>
              {formik.errors.keyMessage}
            </div>
          ) : null}
          <Button yellow value='Send message' type='submit' />
        </ContactCon>
      </form>
    </Container>
  );
};

export default ContactBox;
