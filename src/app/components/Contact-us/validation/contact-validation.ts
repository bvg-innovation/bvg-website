import * as Yup from "yup";

const invalidEmailDomains = [
  "@example.com",
  "@user.com",
  "@domain.com",
  "@domain.corporate",
  "@domain.c",
];

export const contactValidationSchema = Yup.object({
  userInfo: Yup.string()
    .required("Required")
    .trim()
    .min(1, "Field cannot be empty"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required")
    .test("is-valid-email", "Invalid email address", (value) => {
      if (!value) return false;
      const domain = value.substring(value.indexOf("@"));
      if (invalidEmailDomains.includes(domain)) return false;
      // Ensure the domain has at least one dot after the @ and a valid TLD
      const domainParts = domain.split(".");
      return (
        domainParts.length > 1 && domainParts[domainParts.length - 1].length > 1
      );
    }),
  objectMessage: Yup.string()
    .required("Required")
    .max(100, "Subject must be at most 100 characters")
    .trim()
    .min(1, "Field cannot be empty"),
  message: Yup.string()
    .required("Required")
    .max(500, "Message must be at most 500 characters")
    .trim()
    .min(1, "Field cannot be empty"),
});
