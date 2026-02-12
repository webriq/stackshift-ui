import type { ComponentDoc } from "./index";

export const formDoc: ComponentDoc = {
  name: "Form",
  slug: "form",
  description:
    "A form component wrapper that provides form context and validation. Works with react-hook-form for powerful form state management, validation, and error handling.",
  useCases: [
    "User registration and login forms",
    "Multi-step form wizards",
    "Data entry and edit forms",
    "Search and filter forms",
    "Contact and feedback forms",
  ],
  category: "ui",
  importCode: `import { Form } from "@stackshift-ui/react";`,
  individualImportCode: `import { Form } from "@stackshift-ui/form";`,
  usageCode: `const form = useForm();

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    {/* form fields */}
  </form>
</Form>`,
  props: [
    {
      name: "children",
      type: "React.ReactNode",
      required: true,
      description: "The form content, typically including form fields.",
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
      title: "Basic Form",
      description: "A simple form with validation.",
      code: `const form = useForm({
  defaultValues: {
    email: "",
    password: "",
  },
});

function onSubmit(values) {
  console.log(values);
}

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    <FormField
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
    />
    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input type="password" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <Button type="submit">Submit</Button>
  </form>
</Form>`,
    },
    {
      title: "With Validation",
      description: "Add validation rules using zod or yup.",
      code: `const formSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
});

const form = useForm({
  resolver: zodResolver(formSchema),
});

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription>
            Your public display name.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    <Button type="submit">Submit</Button>
  </form>
</Form>`,
    },
    {
      title: "Multi-field Form",
      description: "A more complex form with multiple field types.",
      code: `const form = useForm();

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="bio"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Bio</FormLabel>
          <FormControl>
            <Textarea {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="notifications"
      render={({ field }) => (
        <FormItem className="flex items-center space-x-2">
          <FormControl>
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <FormLabel>Enable notifications</FormLabel>
        </FormItem>
      )}
    />
    <Button type="submit">Save</Button>
  </form>
</Form>`,
    },
  ],
};
