import type { ComponentDoc } from "./index";

export const inputFileDoc: ComponentDoc = {
  name: "InputFile",
  slug: "input-file",
  description:
    "A file input component with a custom styled interface showing the selected filename. Note: This component is deprecated - use the standard Input component with type='file' for new implementations.",
  useCases: [
    "File upload forms (deprecated - use Input)",
    "Document attachment interfaces (deprecated - use Input)",
    "Image and media file selection (deprecated - use Input)",
    "Resume and CV upload forms (deprecated - use Input)",
    "Import and export file interfaces (deprecated - use Input)",
  ],
  category: "ui",
  importCode: `// Deprecated - Use Input component instead
import { InputFile } from "@stackshift-ui/react";
// Recommended alternative:
// import { Input } from "@stackshift-ui/react";`,
  individualImportCode: `// Deprecated - Use Input component instead
import { InputFile } from "@stackshift-ui/input-file";
// Recommended alternative:
// import { Input } from "@stackshift-ui/input";`,
  usageCode: `// Deprecated
<InputFile name="upload" ariaLabel="Upload file" />

// Recommended alternative:
// <Input type="file" name="upload" aria-label="Upload file" />`,
  props: [
    {
      name: "name",
      type: "string",
      required: true,
      description: "The name attribute for the file input.",
    },
    {
      name: "ariaLabel",
      type: "string",
      required: true,
      description: "Accessible label for the file input.",
    },
    {
      name: "variant",
      type: '"primary" | "outline"',
      required: false,
      default: '"primary"',
      description: "The visual style variant of the button.",
    },
    {
      name: "required",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether the file input is required.",
    },
    {
      name: "accept",
      type: "string",
      required: false,
      description: "File types to accept (e.g., 'image/*', '.pdf').",
    },
    {
      name: "multiple",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether multiple files can be selected.",
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
      title: "Deprecation Notice",
      description: "This component is deprecated. Use the standard Input component instead.",
      code: `// ❌ Deprecated - Don't use this
<InputFile name="file" ariaLabel="Upload file" />

// ✅ Recommended - Use this instead
<Input type="file" name="file" aria-label="Upload file" />`,
    },
    {
      title: "Legacy Example - Basic File Input",
      description: "Basic file upload input (deprecated).",
      code: `<div className="space-y-2">
  <Label htmlFor="resume">Resume</Label>
  <InputFile
    name="resume"
    ariaLabel="Upload resume"
    accept=".pdf,.doc,.docx"
  />
</div>`,
    },
    {
      title: "Legacy Example - With Variants",
      description: "Different button styles (deprecated).",
      code: `<div className="space-y-4">
  <InputFile
    name="file1"
    ariaLabel="Upload file"
    variant="primary"
  />
  <InputFile
    name="file2"
    ariaLabel="Upload file"
    variant="outline"
  />
</div>`,
    },
  ],
};
