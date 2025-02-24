import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  text: Yup.string()
    .min(5, "Минимум 5 символов")
    .required("Поле обязательно"),
});

export const TodoForm = ({ addTodo }) => {
  return (
    <Formik
      initialValues={{ text: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addTodo(values.text);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="todo-form">
          <Field name="text" placeholder="Введите задачу..." />
          <ErrorMessage name="text" component="div" className="error" />
          <button type="submit" disabled={isSubmitting}>Добавить</button>
        </Form>
      )}
    </Formik>
  );
};