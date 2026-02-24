import type { ComponentDoc } from "./index";

export const inputFileDoc: ComponentDoc = {
  name: "InputFile",
  slug: "input-file",
  description:
    "A file input component for uploading files. Note: The legacy InputFile component is deprecated - use the standard Input component with type='file' for new implementations.",
  useCases: [
    "File upload forms",
    "Document attachment interfaces",
    "Image and media file selection",
    "Resume and CV upload forms",
    "Import and export file interfaces",
  ],
  category: "ui",
  importCode: `import { Input } from "@stackshift-ui/react";`,
  individualImportCode: `import { Input } from "@stackshift-ui/input";`,
  usageCode: `<Input type="file" name="upload" aria-label="Upload file" />`,
  props: [
    {
      name: "type",
      type: '"file"',
      required: true,
      description: "Set to 'file' to create a file input.",
    },
    {
      name: "name",
      type: "string",
      required: true,
      description: "The name attribute for the file input.",
    },
    {
      name: "aria-label",
      type: "string",
      required: false,
      description: "Accessible label for the file input.",
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
      name: "required",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether the file input is required.",
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
      title: "Basic File Input",
      description: "A simple file upload input.",
      code: `<div className="space-y-2">
  <Label htmlFor="file">Upload File</Label>
  <Input type="file" id="file" name="file" />
</div>`,
    },
    {
      title: "With Accept Filter",
      description: "Restrict file types that can be selected.",
      code: `<div className="space-y-2">
  <Label htmlFor="resume">Resume (PDF only)</Label>
  <Input
    type="file"
    id="resume"
    name="resume"
    accept=".pdf"
  />
</div>`,
    },
    {
      title: "Image Upload",
      description: "File input configured for images only.",
      code: `<div className="space-y-2">
  <Label htmlFor="avatar">Profile Picture</Label>
  <Input
    type="file"
    id="avatar"
    name="avatar"
    accept="image/*"
  />
</div>`,
    },
    {
      title: "Multiple Files",
      description: "Allow selecting multiple files at once.",
      code: `<div className="space-y-2">
  <Label htmlFor="documents">Documents</Label>
  <Input
    type="file"
    id="documents"
    name="documents"
    multiple
  />
</div>`,
    },
    {
      title: "Using FormField",
      description: "File input using the FormField component.",
      code: `<Form name="upload-form">
  <FormField
    type="inputFile"
    name="attachment"
    label="Attachment"
  />
</Form>`,
    },
  ],
};
