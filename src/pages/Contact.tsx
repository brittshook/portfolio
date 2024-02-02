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
          first_name: "",
          last_name: "",
          email: "",
          message: "",
        }}
        validateOnChange={true}
        validateOnBlur={false}
        validate={(values) => {
          const errors = {
            first_name: "",
            last_name: "",
            email: "",
            message: "",
          };

          for (const field in values) {
            const value = values[field as keyof typeof values];

            if (!value) {
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
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          setStatus("submitting");

          try {
            const response = await fetch("./functions/functions.mjs", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });

            if (response.ok) {
              setStatus("success");
            } else {
              setStatus("error");
            }
          } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, errors, touched, status }) => (
          <Form
            className="w-full flex flex-col gap-5"
            name="contact-form"
            method="POST"
            data-netlify="true"
          >
            {status === "success" ? (
              <div className="mt-2">Message sent successfully!</div>
            ) : (
              <>
                {status === "error" && (
                  <div className="text-error mt-2 bg-red-200 p-2 rounded">
                    Submission failed. Please try again.
                  </div>
                )}
                <div className="w-full flex gap-5 max-sm:flex-col">
                  <label
                    htmlFor="first_name"
                    className="w-full flex flex-col gap-2 max-sm:text-lg"
                  >
                    First name
                    <Field
                      id="first_name"
                      className={`h-fit px-3 py-1 border border-solid font-sans ${
                        errors.first_name && touched.first_name
                          ? "border-error"
                          : "border-[#d9dadb]"
                      } rounded-md focus:outline-1.5 focus:outline-t-link focus:invalid:outline-error max-sm:py-2`}
                      minLength="1"
                      maxLength="50"
                      type="text"
                      name="first_name"
                      placeholder="Grace"
                    />
                    <ErrorMessage
                      className="text-xs text-error"
                      name="first_name"
                      component="div"
                    />
                  </label>
                  <label
                    htmlFor="last_name"
                    className="w-full flex flex-col gap-2 max-sm:text-lg"
                  >
                    Last name
                    <Field
                      id="last_name"
                      className={`h-fit px-3 py-1 border border-solid font-sans ${
                        errors.last_name && touched.last_name
                          ? "border-error"
                          : "border-[#d9dadb]"
                      } rounded-md focus:outline-1.5 focus:outline-t-link focus:invalid:outline-error max-sm:py-2`}
                      type="text"
                      minLength="1"
                      maxLength="50"
                      name="last_name"
                      placeholder="Hopper"
                    />
                    <ErrorMessage
                      className="text-xs text-error"
                      name="last_name"
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
                <Button type="submit" showText disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Send message"}
                </Button>
              </>
            )}
          </Form>
        )}
      </Formik>
    </Page>
  );
};
