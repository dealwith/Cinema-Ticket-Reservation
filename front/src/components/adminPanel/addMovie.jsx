import React from 'react';
import { MOVIES_ADD } from '../../constants/constants';
import { Formik, values } from 'formik';
import * as yup from 'yup'; // for everything
import { Form, Col, Row, Button } from 'react-bootstrap'
import axios from 'axios';


const schema = yup.object({
  name: yup.string().required(),
  rating: yup.number().required(),
  description: yup.string().required(),
  imgUrl: yup.string().required(),
});

const AddMovie = () => {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values, {setSubmitting}) => {
        axios.post(MOVIES_ADD, values)
        setSubmitting(false)
      }}
      initialValues={{
        name: '',
        rating: '',
        imgUrl: '',
        description: ''
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>Movie name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Pila 3"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={touched.name && errors.name}
                />
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="validationFormik02">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="text"
                  name="rating"
                  value={values.rating}
                  onChange={handleChange}
                  isValid={touched.rating && !errors.rating}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationFormik03">
                <Form.Label>Image url</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="imgur.com/zaebisPicture"
                  name="imgUrl"
                  value={values.imgUrl}
                  onChange={handleChange}
                  isInvalid={!!errors.imgUrl}
                />
                <Form.Control.Feedback type="invalid">{errors.imgUrl}</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="6" controlId="validationFormik04">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name='description'
                  placeholder='description'
                  onChange={handleChange}
                  value={values.description}
                  isValid={touched.description && !errors.description}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit">Add movie</Button>
          </Form>
        )}
    </Formik>
  );
}

export default AddMovie;
