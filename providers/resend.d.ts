import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Send an email with Resend. */
    "resend.send_email": {
      input: {
        /** The sender email address. */
        from: string;
        /** The recipient email address. */
        to: string;
        /** The email subject line. */
        subject: string;
        /** The HTML body of the email. */
        html?: string;
        /** The plain text body of the email. */
        text?: string;
      };
      output: {
        /** The unique identifier of the sent email. */
        emailId: string;
      };
    };
  }
}
