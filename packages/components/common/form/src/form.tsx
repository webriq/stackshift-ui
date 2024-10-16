import { WebriQForm } from "@webriq-test/webriq-form";
import React from "react";
import { LabeledRoute } from "./types";

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
      data-testid="stackshift-form"
      name={name ?? "Form"}
      className={className}
      data-thankyou-url={thankyouPage}
      scriptsrc="https://pagebuilderforms.webriq.com/js/initReactForms">
      {children}
    </WebriQForm>
  );
};
