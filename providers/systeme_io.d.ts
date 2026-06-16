import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Attach a tag to a contact in Systeme.io. */
    "systeme_io.attach_contact_tag": {
      input: {
        /**
         * The unique identifier of the contact.
         * @minLength 1
         */
        contactId: string;
        /**
         * The unique identifier of the tag.
         * @minLength 1
         */
        tagId: string;
      };
      output: {
        /** Whether the tag was successfully attached. */
        success: boolean;
      };
    };
    /** Cancel a subscription in Systeme.io. */
    "systeme_io.cancel_subscription": {
      input: {
        /**
         * The unique identifier of the subscription.
         * @minLength 1
         */
        subscriptionId: string;
      };
      output: {
        /** Whether the cancellation was successful. */
        success: boolean;
      };
    };
    /** Create a new contact in Systeme.io. */
    "systeme_io.create_contact": {
      input: {
        /**
         * The email address of the contact.
         * @minLength 1
         */
        email: string;
        /** The first name of the contact. */
        firstName?: string;
        /** The last name of the contact. */
        lastName?: string;
      };
      output: {
        /** One raw item returned by Systeme.io. */
        contact: Record<string, unknown>;
      };
    };
    /** Enroll a contact in a course in Systeme.io. */
    "systeme_io.create_enrollment": {
      input: {
        /**
         * The unique identifier of the course.
         * @minLength 1
         */
        courseId: string;
        /**
         * The unique identifier of the contact.
         * @minLength 1
         */
        contactId: string;
        /** The access type for the enrollment. */
        accessType?: string;
      };
      output: {
        /** One raw item returned by Systeme.io. */
        enrollment: Record<string, unknown>;
      };
    };
    /** Create a new tag in Systeme.io. */
    "systeme_io.create_tag": {
      input: {
        /**
         * The name of the tag.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** One raw item returned by Systeme.io. */
        tag: Record<string, unknown>;
      };
    };
    /** Create a new webhook in Systeme.io. */
    "systeme_io.create_webhook": {
      input: {
        /**
         * The name of the webhook.
         * @minLength 1
         */
        name: string;
        /**
         * The HTTPS URL to receive webhook events.
         * @format uri
         */
        url: string;
        /** The event types to subscribe to. */
        events?: Array<string>;
        /** Whether the webhook is active. */
        active?: boolean;
      };
      output: {
        /** One raw item returned by Systeme.io. */
        webhook: Record<string, unknown>;
      };
    };
    /** Delete a contact from Systeme.io. */
    "systeme_io.delete_contact": {
      input: {
        /**
         * The unique identifier of the contact.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** Whether the deletion was successful. */
        success: boolean;
      };
    };
    /** Remove a contact enrollment from a course in Systeme.io. */
    "systeme_io.delete_enrollment": {
      input: {
        /**
         * The unique identifier of the course.
         * @minLength 1
         */
        courseId: string;
        /**
         * The unique identifier of the enrollment.
         * @minLength 1
         */
        enrollmentId: string;
      };
      output: {
        /** Whether the deletion was successful. */
        success: boolean;
      };
    };
    /** Delete a tag from Systeme.io. */
    "systeme_io.delete_tag": {
      input: {
        /**
         * The unique identifier of the tag.
         * @minLength 1
         */
        tagId: string;
      };
      output: {
        /** Whether the deletion was successful. */
        success: boolean;
      };
    };
    /** Delete a webhook from Systeme.io. */
    "systeme_io.delete_webhook": {
      input: {
        /**
         * The unique identifier of the webhook.
         * @minLength 1
         */
        webhookId: string;
      };
      output: {
        /** Whether the deletion was successful. */
        success: boolean;
      };
    };
    /** Detach a tag from a contact in Systeme.io. */
    "systeme_io.detach_contact_tag": {
      input: {
        /**
         * The unique identifier of the contact.
         * @minLength 1
         */
        contactId: string;
        /**
         * The unique identifier of the tag.
         * @minLength 1
         */
        tagId: string;
      };
      output: {
        /** Whether the tag was successfully detached. */
        success: boolean;
      };
    };
    /** Get a single contact from Systeme.io by ID. */
    "systeme_io.get_contact": {
      input: {
        /**
         * The unique identifier of the contact.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** One raw item returned by Systeme.io. */
        contact: Record<string, unknown>;
      };
    };
    /** Get a single tag from Systeme.io by ID. */
    "systeme_io.get_tag": {
      input: {
        /**
         * The unique identifier of the tag.
         * @minLength 1
         */
        tagId: string;
      };
      output: {
        /** One raw item returned by Systeme.io. */
        tag: Record<string, unknown>;
      };
    };
    /** Get a single webhook from Systeme.io by ID. */
    "systeme_io.get_webhook": {
      input: {
        /**
         * The unique identifier of the webhook.
         * @minLength 1
         */
        webhookId: string;
      };
      output: {
        /** One raw item returned by Systeme.io. */
        webhook: Record<string, unknown>;
      };
    };
    /** List custom contact fields from Systeme.io. */
    "systeme_io.list_contact_fields": {
      input: Record<string, never>;
      output: {
        /** The custom contact fields returned by Systeme.io. */
        fields: Array<Record<string, unknown>>;
      };
    };
    /** List contacts from Systeme.io with optional pagination. */
    "systeme_io.list_contacts": {
      input: {
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of contacts per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The contacts returned by Systeme.io. */
        contacts: Array<Record<string, unknown>>;
        /** Whether there are more contacts available. */
        hasMore: boolean;
      };
    };
    /** List courses from Systeme.io with optional pagination. */
    "systeme_io.list_courses": {
      input: {
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of courses per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The courses returned by Systeme.io. */
        courses: Array<Record<string, unknown>>;
        /** Whether there are more courses available. */
        hasMore: boolean;
      };
    };
    /** List enrollments for a specific course in Systeme.io. */
    "systeme_io.list_enrollments": {
      input: {
        /**
         * The unique identifier of the course.
         * @minLength 1
         */
        courseId: string;
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of enrollments per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The enrollments returned by Systeme.io. */
        enrollments: Array<Record<string, unknown>>;
        /** Whether there are more enrollments available. */
        hasMore: boolean;
      };
    };
    /** List subscriptions from Systeme.io with optional pagination. */
    "systeme_io.list_subscriptions": {
      input: {
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of subscriptions per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The subscriptions returned by Systeme.io. */
        subscriptions: Array<Record<string, unknown>>;
        /** Whether there are more subscriptions available. */
        hasMore: boolean;
      };
    };
    /** List tags from Systeme.io with optional pagination. */
    "systeme_io.list_tags": {
      input: {
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of tags per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The tags returned by Systeme.io. */
        tags: Array<Record<string, unknown>>;
        /** Whether there are more tags available. */
        hasMore: boolean;
      };
    };
    /** List webhooks from Systeme.io with optional pagination. */
    "systeme_io.list_webhooks": {
      input: {
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of webhooks per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The webhooks returned by Systeme.io. */
        webhooks: Array<Record<string, unknown>>;
        /** Whether there are more webhooks available. */
        hasMore: boolean;
      };
    };
    /** Update an existing contact in Systeme.io. */
    "systeme_io.update_contact": {
      input: {
        /**
         * The unique identifier of the contact.
         * @minLength 1
         */
        contactId: string;
        /**
         * The email address of the contact.
         * @minLength 1
         */
        email?: string;
        /** The first name of the contact. */
        firstName?: string;
        /** The last name of the contact. */
        lastName?: string;
      };
      output: {
        /** One raw item returned by Systeme.io. */
        contact: Record<string, unknown>;
      };
    };
    /** Update an existing tag in Systeme.io. */
    "systeme_io.update_tag": {
      input: {
        /**
         * The unique identifier of the tag.
         * @minLength 1
         */
        tagId: string;
        /**
         * The new name of the tag.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** One raw item returned by Systeme.io. */
        tag: Record<string, unknown>;
      };
    };
    /** Update an existing webhook in Systeme.io. */
    "systeme_io.update_webhook": {
      input: {
        /**
         * The unique identifier of the webhook.
         * @minLength 1
         */
        webhookId: string;
        /** The name of the webhook. */
        name?: string;
        /**
         * The HTTPS URL to receive webhook events.
         * @format uri
         */
        url?: string;
        /** The event types to subscribe to. */
        events?: Array<string>;
        /** Whether the webhook is active. */
        active?: boolean;
      };
      output: {
        /** One raw item returned by Systeme.io. */
        webhook: Record<string, unknown>;
      };
    };
  }
}
