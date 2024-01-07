import { Button } from "../components/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Page } from "../components/Page";

export const Contact = () => {
  return (
    <Page id="contact" type="main" gapClass="gap-0">
      <h1 className="text-xl font-bold mb-2.5 max-sm:text-2-xl">Let's Chat</h1>
      <p className="text-base max-sm:text-lg">
        Available for new roles, projects, and coffee.
      </p>
      <hr className="h-0.5 bg-s-border mb-4.5" />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        }}
        validateOnChange={true}
        validateOnBlur={false}
        validate={(values) => {
          const errors = {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          };

          for (const field in values) {
            const value = values[field as keyof typeof values];

            if (!value) {
              console.log("empty" + field);
              errors[field as keyof typeof errors] = "Required";
            } else if (field != "message" && value.length > 50) {
              errors[field as keyof typeof errors] =
                "Please enter no more than 50 characters";
            } else if (field == "message" && value.length > 1000) {
              errors[field as keyof typeof errors] =
                "Please enter no more than 1000 characters";
            } else if (
              field == "email" &&
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ) {
              errors[field as keyof typeof errors] =
                "Please enter your email in the format: name@example.com";
            }
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="w-full flex flex-col gap-5">
            <div className="w-full flex gap-5 max-sm:flex-col">
              <label
                htmlFor="firstName"
                className="w-full flex flex-col gap-2 max-sm:text-lg"
              >
                First name
                <Field
                  id="firstName"
                  className={`h-fit px-3 py-1 border border-solid font-sans ${
                    errors.firstName && touched.firstName
                      ? "border-error"
                      : "border-[#d9dadb]"
                  } rounded-md focus:outline-1.5 focus:outline-t-link focus:invalid:outline-error max-sm:py-2`}
                  minLength="1"
                  maxLength="50"
                  type="text"
                  name="firstName"
                  placeholder="Grace"
                />
                <ErrorMessage
                  className="text-xs text-error"
                  name="firstName"
                  component="div"
                />
              </label>
              <label
                htmlFor="lastName"
                className="w-full flex flex-col gap-2 max-sm:text-lg"
              >
                Last name
                <Field
                  id="lastName"
                  className={`h-fit px-3 py-1 border border-solid font-sans ${
                    errors.lastName && touched.lastName
                      ? "border-error"
                      : "border-[#d9dadb]"
                  } rounded-md focus:outline-1.5 focus:outline-t-link focus:invalid:outline-error max-sm:py-2`}
                  type="text"
                  minLength="1"
                  maxLength="50"
                  name="lastName"
                  placeholder="Hopper"
                />
                <ErrorMessage
                  className="text-xs text-error"
                  name="lastName"
                  component="div"
                />
              </label>
            </div>
            <label
              htmlFor="email"
              className="w-full flex flex-col gap-2 max-sm:text-lg"
            >
              Email address
              <Field
                className={`h-fit px-3 py-1 border border-solid font-sans ${
                  errors.email && touched.email
                    ? "border-error"
                    : "border-[#d9dadb]"
                } rounded-md focus:outline-1.5 focus:outline-t-link focus:invalid:outline-error max-sm:py-2`}
                type="email"
                name="email"
                placeholder="grace@example.com"
              />
              <ErrorMessage
                className="text-xs text-error"
                name="email"
                component="div"
              />
            </label>

            <div className="w-full flex flex-col gap-2 max-sm:text-lg">
              <legend>Message</legend>
              <Field
                as="textarea"
                className={`h-28 px-3 py-2 border border-solid font-sans ${
                  errors.message && touched.message
                    ? "border-error"
                    : "border-[#d9dadb]"
                } rounded-md focus:outline-1.5 focus:outline-t-link focus:invalid:outline-error`}
                name="message"
                minLength="1"
                maxLength="1000"
                placeholder="Let's chat about..."
              />
              <ErrorMessage
                className="text-xs text-error"
                name="message"
                component="div"
              />
            </div>
            <Button type="submit" showText>
              Send message
            </Button>
          </Form>
        )}
      </Formik>
    </Page>
  );
};
