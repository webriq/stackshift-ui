import React from "react";
import { WebriQForm } from "@stackshift-ui/webriq-form";

interface LabeledRoute extends ConditionalLink {
  ariaLabel?: string;
  label?: string;
  linkTarget?: string;
  linkType?: string;
  _type?: string;
  linkInternal?: any;
}

interface ConditionalLink {
  type?: string;
  internalLink?: string | null;
  externalLink?: string | null;
}

export type FormProps = {
  className?: string;
  id?: string;
  name?: string;
  children?: React.ReactNode;
  thankyouPage?: LabeledRoute;
};

export const Form = ({ id, name, thankyouPage, className, children }: FormProps) => {
  return (
    <WebriQForm
      method="POST"
      data-form-id={id}
      name={name ?? "Form"}
      className={className}
      data-thankyou-url={thankyouPage}
      scriptsrc="https://pagebuilderforms.webriq.com/js/initReactForms">
      {children}
    </WebriQForm>
  );
};
