import type { ComponentDoc } from "./index";

export const formDoc: ComponentDoc = {
  name: "Form",
  slug: "form",
  description:
    "A form component wrapper that provides form context and submission handling. Use with FormField components for consistent form layouts and field rendering.",
  useCases: [
    "User registration and login forms",
    "Multi-step form wizards",
    "Data entry and edit forms",
    "Search and filter forms",
    "Contact and feedback forms",
  ],
  category: "ui",
  importCode: `import { Form, FormField } from "@stackshift-ui/react";`,
  individualImportCode: `import { Form } from "@stackshift-ui/form";`,
  usageCode: `<Form name="contact-form" className="space-y-4">
  <FormField type="inputEmail" name="email" label="Email" placeholder="you@example.com" />
  <Button type="submit">Submit</Button>
</Form>`,
  props: [
    {
      name: "name",
      type: "string",
      required: false,
      description: "The name of the form.",
    },
    {
      name: "id",
      type: "string",
      required: false,
      description: "The form ID for submission tracking.",
    },
    {
      name: "thankyouPage",
      type: "LabeledRoute",
      required: false,
      description: "Redirect URL after successful submission.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      required: false,
      description: "The form content, typically including FormField components.",
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS classes to apply.",
    },
  ],
  examples: [
    {
      title: "Basic Contact Form",
      description: "A simple contact form using FormField components.",
      code: `<Form name="contact-form" className="space-y-4 max-w-md">
  <FormField
    type="inputText"
    name="name"
    label="Name"
    placeholder="Your name"
  />
  <FormField
    type="inputEmail"
    name="email"
    label="Email"
    placeholder="you@example.com"
  />
  <FormField
    type="textarea"
    name="message"
    label="Message"
    placeholder="Your message"
  />
  <Button type="submit">Send Message</Button>
</Form>`,
    },
    {
      title: "Login Form",
      description: "A login form with email and password fields.",
      code: `<Form name="login-form" className="space-y-4 max-w-sm">
  <FormField
    type="inputEmail"
    name="email"
    label="Email"
    placeholder="you@example.com"
  />
  <FormField
    type="inputPassword"
    name="password"
    label="Password"
    placeholder="Enter your password"
  />
  <FormField
    type="inputCheckbox"
    name="remember"
    label="Remember me"
    items={["remember"]}
    noLabel
  />
  <Button type="submit" className="w-full">Sign In</Button>
</Form>`,
    },
    {
      title: "Registration Form",
      description: "A registration form with multiple field types.",
      code: `<Form name="register-form" className="space-y-4 max-w-md">
  <div className="grid grid-cols-2 gap-4">
    <FormField
      type="inputText"
      name="firstName"
      label="First Name"
      placeholder="John"
    />
    <FormField
      type="inputText"
      name="lastName"
      label="Last Name"
      placeholder="Doe"
    />
  </div>
  <FormField
    type="inputEmail"
    name="email"
    label="Email"
    placeholder="you@example.com"
  />
  <FormField
    type="inputPassword"
    name="password"
    label="Password"
    placeholder="Create a password"
  />
  <FormField
    type="inputSelect"
    name="role"
    label="Role"
    items={["Developer", "Designer", "Manager", "Other"]}
  />
  <Button type="submit" className="w-full">Create Account</Button>
</Form>`,
    },
  ],
};
