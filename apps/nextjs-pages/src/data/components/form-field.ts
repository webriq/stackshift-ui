import type { ComponentDoc } from "./index";

export const formFieldDoc: ComponentDoc = {
  name: "FormField",
  slug: "form-field",
  description:
    "A form field component that integrates with react-hook-form to provide field-level state management, validation, and error display. Works with FormItem, FormLabel, FormControl, FormDescription, and FormMessage sub-components.",
  useCases: [
    "Input fields with validation in forms",
    "Consistent form field layouts and styling",
    "Error message display for form validation",
    "Field-level help text and descriptions",
    "Accessible form controls with proper labeling",
  ],
  category: "ui",
  importCode: `import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@stackshift-ui/react";`,
  individualImportCode: `import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@stackshift-ui/form-field";`,
  usageCode: `<FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input type="email" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>`,
  props: [
    {
      name: "control",
      type: "Control",
      required: true,
      description: "The form control object from react-hook-form.",
    },
    {
      name: "name",
      type: "string",
      required: true,
      description: "The name of the field in the form.",
    },
    {
      name: "render",
      type: "({ field, fieldState, formState }) => React.ReactElement",
      required: true,
      description: "Render function that receives field props and returns the field UI.",
    },
    {
      name: "disabled",
      type: "boolean",
      required: false,
      description: "Whether the field is disabled.",
    },
  ],
  examples: [
    {
      title: "Basic Form Field",
      description: "A simple text input field with label and error message.",
      code: `<FormField
  control={form.control}
  name="username"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Username</FormLabel>
      <FormControl>
        <Input placeholder="Enter username" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>`,
    },
    {
      title: "With Description",
      description: "Add helper text below the input field.",
      code: `<FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input type="email" placeholder="you@example.com" {...field} />
      </FormControl>
      <FormDescription>
        We'll never share your email with anyone else.
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>`,
    },
    {
      title: "Textarea Field",
      description: "Use FormField with a textarea input.",
      code: `<FormField
  control={form.control}
  name="bio"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Bio</FormLabel>
      <FormControl>
        <Textarea
          placeholder="Tell us about yourself"
          className="min-h-[100px]"
          {...field}
        />
      </FormControl>
      <FormDescription>
        Brief description for your profile. Max 250 characters.
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>`,
    },
    {
      title: "Select Field",
      description: "Use FormField with a select dropdown.",
      code: `<FormField
  control={form.control}
  name="role"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Role</FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="user">User</SelectItem>
          <SelectItem value="guest">Guest</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  )}
/>`,
    },
    {
      title: "Checkbox Field",
      description: "Use FormField with a checkbox input.",
      code: `<FormField
  control={form.control}
  name="terms"
  render={({ field }) => (
    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
      <FormControl>
        <Checkbox
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      </FormControl>
      <div className="space-y-1 leading-none">
        <FormLabel>
          Accept terms and conditions
        </FormLabel>
        <FormDescription>
          You agree to our Terms of Service and Privacy Policy.
        </FormDescription>
      </div>
      <FormMessage />
    </FormItem>
  )}
/>`,
    },
  ],
};
