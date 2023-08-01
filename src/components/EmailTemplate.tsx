import * as React from "react";

export interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  name,
  message,
}) => {
  return (
    <div>
      <h2>Welcome, {name}</h2>
      <p>{message}</p>
      <p>{email}</p>
    </div>
  );
};
