import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an Agiled CRM contact. */
    "agiled.create_contact": {
      input: {
        /**
         * Contact first name.
         * @minLength 1
         */
        first_name: string;
        /**
         * Contact last name.
         * @minLength 1
         */
        last_name?: string;
        /**
         * Contact email address.
         * @minLength 1
         */
        email?: string;
        /**
         * Contact role, such as Client, Lead, or Prospect.
         * @minLength 1
         */
        role?: string;
        /**
         * Contact phone number.
         * @minLength 1
         */
        phone?: string;
        /**
         * Contact job title.
         * @minLength 1
         */
        job_title?: string;
        /**
         * Contact Facebook profile URL.
         * @minLength 1
         */
        facebook?: string;
        /**
         * Contact LinkedIn profile URL.
         * @minLength 1
         */
        linkedin?: string;
        /**
         * Contact Twitter profile URL.
         * @minLength 1
         */
        twitter?: string;
        /**
         * Contact Skype username.
         * @minLength 1
         */
        skype?: string;
        /**
         * Contact note.
         * @minLength 1
         */
        note?: string;
        /**
         * Comma-separated contact tags.
         * @minLength 1
         */
        tags?: string;
        /**
         * Related Agiled account ID.
         * @minLength 1
         */
        account_id?: string;
        /**
         * Sales agent or owner ID.
         * @exclusiveMinimum 0
         */
        owner_id?: number;
        /**
         * CRM source ID.
         * @exclusiveMinimum 0
         */
        source_id?: number;
        /**
         * CRM status ID.
         * @exclusiveMinimum 0
         */
        status_id?: number;
        /**
         * Whether the contact needs a next follow-up.
         * @minLength 1
         */
        next_follow_up?: string;
        /**
         * Date the contact was last contacted.
         * @minLength 1
         */
        last_contacted?: string;
        /** Contact addresses. */
        addresses?: Array<{
          /** Address type. */
          type?: string | null;
          /** Address country. */
          country?: string | null;
          /** Address state. */
          state?: string | null;
          /** Address city. */
          city?: string | null;
          /** Address postal code. */
          postal_code?: string | null;
          /** First address line. */
          address1?: string | null;
          /** Second address line. */
          address2?: string | null;
          [key: string]: unknown;
        }>;
        /** Contact custom field values. */
        custom_fields?: Array<{
          /**
           * Custom field key.
           * @minLength 1
           */
          key?: string;
          /** Custom field value. */
          value?: unknown;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** Agiled CRM contact object. */
        contact: {
          /** Agiled contact ID. */
          id?: number | null;
          /** Contact first name. */
          first_name?: string | null;
          /** Contact last name. */
          last_name?: string | null;
          /** Contact email address. */
          email?: string | null;
          /** Contact phone number. */
          phone?: string | null;
          /** Contact job title. */
          job_title?: string | null;
          /** Contact role such as Client, Lead, or Prospect. */
          role?: string | null;
          /** Related Agiled account ID. */
          account_id?: string | null;
          /** Sales agent or owner ID. */
          owner_id?: number | null;
          /** CRM source ID. */
          source_id?: number | null;
          /** CRM status ID. */
          status_id?: number | null;
          /** Contact creation timestamp. */
          created_at?: string | null;
          /** Contact update timestamp. */
          updated_at?: string | null;
          [key: string]: unknown;
        };
        /** Raw Agiled response payload. */
        raw: unknown;
      };
    };
    /** Create an Agiled project. */
    "agiled.create_project": {
      input: {
        /**
         * Project name.
         * @minLength 1
         */
        project_name: string;
        /**
         * Project summary.
         * @minLength 1
         */
        project_summary?: string;
        /**
         * Project start date using the company's configured date format.
         * @minLength 1
         */
        start_date: string;
        /**
         * Project deadline using the company's configured date format.
         * @minLength 1
         */
        deadline?: string;
        /**
         * Project notes.
         * @minLength 1
         */
        notes?: string;
        /**
         * Project category ID.
         * @exclusiveMinimum 0
         */
        category_id?: number;
        /**
         * Project feedback.
         * @minLength 1
         */
        feedback?: string;
        /** Whether manual time logging is enabled, usually 1 or 0. */
        manual_time_log?: number;
        /** Whether the client can view tasks, usually 1 or 0. */
        client_view_task?: number;
        /** Whether client notifications are allowed, usually 1 or 0. */
        allow_client_notification?: number;
        /** Project completion percentage. */
        completion_percent?: number;
        /** Project budget. */
        project_budget?: number;
        /**
         * Currency ID.
         * @exclusiveMinimum 0
         */
        currency_id?: number;
        /**
         * Related client ID.
         * @exclusiveMinimum 0
         */
        client_id?: number;
        /** Hours allocated to the project. */
        hours_allocated?: number;
        /**
         * Project status.
         * @minLength 1
         */
        status: string;
      };
      output: {
        /** Agiled project object. */
        project: {
          /** Agiled project ID. */
          id?: number | null;
          /** Project name. */
          project_name?: string | null;
          /** Project summary. */
          project_summary?: string | null;
          /** Project start date. */
          start_date?: string | null;
          /** Project deadline. */
          deadline?: string | null;
          /** Project status. */
          status?: string | null;
          /** Project completion percentage. */
          completion_percent?: number | null;
          /** Project budget. */
          project_budget?: number | null;
          /** Related client ID. */
          client_id?: number | null;
          /** Project category ID. */
          category_id?: number | null;
          /** Project creation timestamp. */
          created_at?: string | null;
          /** Project update timestamp. */
          updated_at?: string | null;
          [key: string]: unknown;
        };
        /** Raw Agiled response payload. */
        raw: unknown;
      };
    };
    /** Create an Agiled task. */
    "agiled.create_task": {
      input: {
        /**
         * Task heading.
         * @minLength 1
         */
        heading: string;
        /**
         * Task description.
         * @minLength 1
         */
        description?: string;
        /**
         * Task start date using the company's configured date format.
         * @minLength 1
         */
        start_date: string;
        /**
         * Task due date using the company's configured date format.
         * @minLength 1
         */
        due_date: string;
        /**
         * Assigned user ID.
         * @exclusiveMinimum 0
         */
        user_id: number;
        /**
         * Related project ID.
         * @exclusiveMinimum 0
         */
        project_id?: number;
        /**
         * Task category ID.
         * @exclusiveMinimum 0
         */
        category_id?: number;
        /**
         * Task priority.
         * @minLength 1
         */
        priority: string;
        /**
         * Task completion date using the company's configured date format.
         * @minLength 1
         */
        completed_on?: string;
        /**
         * Milestone ID.
         * @exclusiveMinimum 0
         */
        milestone_id?: number;
        /** Whether the task is billable, usually 1 or 0. */
        billable?: number;
      };
      output: {
        /** Agiled task object. */
        task: {
          /** Agiled task ID. */
          id?: number | null;
          /** Task heading. */
          heading?: string | null;
          /** Task description. */
          description?: string | null;
          /** Task start date. */
          start_date?: string | null;
          /** Task due date. */
          due_date?: string | null;
          /** Assigned user ID. */
          user_id?: number | null;
          /** Related project ID. */
          project_id?: number | null;
          /** Task category ID. */
          category_id?: number | null;
          /** Task priority. */
          priority?: string | null;
          /** Task completion date. */
          completed_on?: string | null;
          /** Milestone ID. */
          milestone_id?: number | null;
          /** Whether the task is billable, usually 1 or 0. */
          billable?: number | null;
          /** Task creation timestamp. */
          created_at?: string | null;
          /** Task update timestamp. */
          updated_at?: string | null;
          [key: string]: unknown;
        };
        /** Raw Agiled response payload. */
        raw: unknown;
      };
    };
    /** Delete an Agiled CRM contact. */
    "agiled.delete_contact": {
      input: {
        /**
         * Agiled resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Agiled accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete an Agiled project. */
    "agiled.delete_project": {
      input: {
        /**
         * Agiled resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Agiled accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete an Agiled task. */
    "agiled.delete_task": {
      input: {
        /**
         * Agiled resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Agiled accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Get one Agiled CRM contact by ID. */
    "agiled.get_contact": {
      input: {
        /**
         * Agiled resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Agiled CRM contact object. */
        contact: {
          /** Agiled contact ID. */
          id?: number | null;
          /** Contact first name. */
          first_name?: string | null;
          /** Contact last name. */
          last_name?: string | null;
          /** Contact email address. */
          email?: string | null;
          /** Contact phone number. */
          phone?: string | null;
          /** Contact job title. */
          job_title?: string | null;
          /** Contact role such as Client, Lead, or Prospect. */
          role?: string | null;
          /** Related Agiled account ID. */
          account_id?: string | null;
          /** Sales agent or owner ID. */
          owner_id?: number | null;
          /** CRM source ID. */
          source_id?: number | null;
          /** CRM status ID. */
          status_id?: number | null;
          /** Contact creation timestamp. */
          created_at?: string | null;
          /** Contact update timestamp. */
          updated_at?: string | null;
          [key: string]: unknown;
        };
        /** Raw Agiled response payload. */
        raw: unknown;
      };
    };
    /** Get one Agiled project by ID. */
    "agiled.get_project": {
      input: {
        /**
         * Agiled resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Agiled project object. */
        project: {
          /** Agiled project ID. */
          id?: number | null;
          /** Project name. */
          project_name?: string | null;
          /** Project summary. */
          project_summary?: string | null;
          /** Project start date. */
          start_date?: string | null;
          /** Project deadline. */
          deadline?: string | null;
          /** Project status. */
          status?: string | null;
          /** Project completion percentage. */
          completion_percent?: number | null;
          /** Project budget. */
          project_budget?: number | null;
          /** Related client ID. */
          client_id?: number | null;
          /** Project category ID. */
          category_id?: number | null;
          /** Project creation timestamp. */
          created_at?: string | null;
          /** Project update timestamp. */
          updated_at?: string | null;
          [key: string]: unknown;
        };
        /** Raw Agiled response payload. */
        raw: unknown;
      };
    };
    /** Get one Agiled task by ID. */
    "agiled.get_task": {
      input: {
        /**
         * Agiled resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Agiled task object. */
        task: {
          /** Agiled task ID. */
          id?: number | null;
          /** Task heading. */
          heading?: string | null;
          /** Task description. */
          description?: string | null;
          /** Task start date. */
          start_date?: string | null;
          /** Task due date. */
          due_date?: string | null;
          /** Assigned user ID. */
          user_id?: number | null;
          /** Related project ID. */
          project_id?: number | null;
          /** Task category ID. */
          category_id?: number | null;
          /** Task priority. */
          priority?: string | null;
          /** Task completion date. */
          completed_on?: string | null;
          /** Milestone ID. */
          milestone_id?: number | null;
          /** Whether the task is billable, usually 1 or 0. */
          billable?: number | null;
          /** Task creation timestamp. */
          created_at?: string | null;
          /** Task update timestamp. */
          updated_at?: string | null;
          [key: string]: unknown;
        };
        /** Raw Agiled response payload. */
        raw: unknown;
      };
    };
    /** List Agiled CRM contacts. */
    "agiled.list_contacts": {
      input: Record<string, never>;
      output: {
        /** Contacts returned by Agiled. */
        contacts: Array<{
          /** Agiled contact ID. */
          id?: number | null;
          /** Contact first name. */
          first_name?: string | null;
          /** Contact last name. */
          last_name?: string | null;
          /** Contact email address. */
          email?: string | null;
          /** Contact phone number. */
          phone?: string | null;
          /** Contact job title. */
          job_title?: string | null;
          /** Contact role such as Client, Lead, or Prospect. */
          role?: string | null;
          /** Related Agiled account ID. */
          account_id?: string | null;
          /** Sales agent or owner ID. */
          owner_id?: number | null;
          /** CRM source ID. */
          source_id?: number | null;
          /** CRM status ID. */
          status_id?: number | null;
          /** Contact creation timestamp. */
          created_at?: string | null;
          /** Contact update timestamp. */
          updated_at?: string | null;
          [key: string]: unknown;
        }>;
        /** Raw Agiled response payload. */
        raw: unknown;
      };
    };
    /** List Agiled projects. */
    "agiled.list_projects": {
      input: Record<string, never>;
      output: {
        /** Projects returned by Agiled. */
        projects: Array<{
          /** Agiled project ID. */
          id?: number | null;
          /** Project name. */
          project_name?: string | null;
          /** Project summary. */
          project_summary?: string | null;
          /** Project start date. */
          start_date?: string | null;
          /** Project deadline. */
          deadline?: string | null;
          /** Project status. */
          status?: string | null;
          /** Project completion percentage. */
          completion_percent?: number | null;
          /** Project budget. */
          project_budget?: number | null;
          /** Related client ID. */
          client_id?: number | null;
          /** Project category ID. */
          category_id?: number | null;
          /** Project creation timestamp. */
          created_at?: string | null;
          /** Project update timestamp. */
          updated_at?: string | null;
          [key: string]: unknown;
        }>;
        /** Raw Agiled response payload. */
        raw: unknown;
      };
    };
    /** List Agiled tasks. */
    "agiled.list_tasks": {
      input: Record<string, never>;
      output: {
        /** Tasks returned by Agiled. */
        tasks: Array<{
          /** Agiled task ID. */
          id?: number | null;
          /** Task heading. */
          heading?: string | null;
          /** Task description. */
          description?: string | null;
          /** Task start date. */
          start_date?: string | null;
          /** Task due date. */
          due_date?: string | null;
          /** Assigned user ID. */
          user_id?: number | null;
          /** Related project ID. */
          project_id?: number | null;
          /** Task category ID. */
          category_id?: number | null;
          /** Task priority. */
          priority?: string | null;
          /** Task completion date. */
          completed_on?: string | null;
          /** Milestone ID. */
          milestone_id?: number | null;
          /** Whether the task is billable, usually 1 or 0. */
          billable?: number | null;
          /** Task creation timestamp. */
          created_at?: string | null;
          /** Task update timestamp. */
          updated_at?: string | null;
          [key: string]: unknown;
        }>;
        /** Raw Agiled response payload. */
        raw: unknown;
      };
    };
    /** Update an Agiled CRM contact. */
    "agiled.update_contact": {
      input: {
        /**
         * Agiled resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Contact first name.
         * @minLength 1
         */
        first_name: string;
        /**
         * Contact last name.
         * @minLength 1
         */
        last_name?: string;
        /**
         * Contact email address.
         * @minLength 1
         */
        email?: string;
        /**
         * Contact role, such as Client, Lead, or Prospect.
         * @minLength 1
         */
        role?: string;
        /**
         * Contact phone number.
         * @minLength 1
         */
        phone?: string;
        /**
         * Contact job title.
         * @minLength 1
         */
        job_title?: string;
        /**
         * Contact Facebook profile URL.
         * @minLength 1
         */
        facebook?: string;
        /**
         * Contact LinkedIn profile URL.
         * @minLength 1
         */
        linkedin?: string;
        /**
         * Contact Twitter profile URL.
         * @minLength 1
         */
        twitter?: string;
        /**
         * Contact Skype username.
         * @minLength 1
         */
        skype?: string;
        /**
         * Contact note.
         * @minLength 1
         */
        note?: string;
        /**
         * Comma-separated contact tags.
         * @minLength 1
         */
        tags?: string;
        /**
         * Related Agiled account ID.
         * @minLength 1
         */
        account_id?: string;
        /**
         * Sales agent or owner ID.
         * @exclusiveMinimum 0
         */
        owner_id?: number;
        /**
         * CRM source ID.
         * @exclusiveMinimum 0
         */
        source_id?: number;
        /**
         * CRM status ID.
         * @exclusiveMinimum 0
         */
        status_id?: number;
        /**
         * Whether the contact needs a next follow-up.
         * @minLength 1
         */
        next_follow_up?: string;
        /**
         * Date the contact was last contacted.
         * @minLength 1
         */
        last_contacted?: string;
        /** Contact addresses. */
        addresses?: Array<{
          /** Address type. */
          type?: string | null;
          /** Address country. */
          country?: string | null;
          /** Address state. */
          state?: string | null;
          /** Address city. */
          city?: string | null;
          /** Address postal code. */
          postal_code?: string | null;
          /** First address line. */
          address1?: string | null;
          /** Second address line. */
          address2?: string | null;
          [key: string]: unknown;
        }>;
        /** Contact custom field values. */
        custom_fields?: Array<{
          /**
           * Custom field key.
           * @minLength 1
           */
          key?: string;
          /** Custom field value. */
          value?: unknown;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** Agiled CRM contact object. */
        contact: {
          /** Agiled contact ID. */
          id?: number | null;
          /** Contact first name. */
          first_name?: string | null;
          /** Contact last name. */
          last_name?: string | null;
          /** Contact email address. */
          email?: string | null;
          /** Contact phone number. */
          phone?: string | null;
          /** Contact job title. */
          job_title?: string | null;
          /** Contact role such as Client, Lead, or Prospect. */
          role?: string | null;
          /** Related Agiled account ID. */
          account_id?: string | null;
          /** Sales agent or owner ID. */
          owner_id?: number | null;
          /** CRM source ID. */
          source_id?: number | null;
          /** CRM status ID. */
          status_id?: number | null;
          /** Contact creation timestamp. */
          created_at?: string | null;
          /** Contact update timestamp. */
          updated_at?: string | null;
          [key: string]: unknown;
        };
        /** Raw Agiled response payload. */
        raw: unknown;
      };
    };
    /** Update an Agiled project. */
    "agiled.update_project": {
      input: {
        /**
         * Agiled resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Project name.
         * @minLength 1
         */
        project_name: string;
        /**
         * Project summary.
         * @minLength 1
         */
        project_summary?: string;
        /**
         * Project start date using the company's configured date format.
         * @minLength 1
         */
        start_date: string;
        /**
         * Project deadline using the company's configured date format.
         * @minLength 1
         */
        deadline?: string;
        /**
         * Project notes.
         * @minLength 1
         */
        notes?: string;
        /**
         * Project category ID.
         * @exclusiveMinimum 0
         */
        category_id?: number;
        /**
         * Project feedback.
         * @minLength 1
         */
        feedback?: string;
        /** Whether manual time logging is enabled, usually 1 or 0. */
        manual_time_log?: number;
        /** Whether the client can view tasks, usually 1 or 0. */
        client_view_task?: number;
        /** Whether client notifications are allowed, usually 1 or 0. */
        allow_client_notification?: number;
        /** Project completion percentage. */
        completion_percent?: number;
        /** Project budget. */
        project_budget?: number;
        /**
         * Currency ID.
         * @exclusiveMinimum 0
         */
        currency_id?: number;
        /**
         * Related client ID.
         * @exclusiveMinimum 0
         */
        client_id?: number;
        /** Hours allocated to the project. */
        hours_allocated?: number;
        /**
         * Project status.
         * @minLength 1
         */
        status?: string;
      };
      output: {
        /** Agiled project object. */
        project: {
          /** Agiled project ID. */
          id?: number | null;
          /** Project name. */
          project_name?: string | null;
          /** Project summary. */
          project_summary?: string | null;
          /** Project start date. */
          start_date?: string | null;
          /** Project deadline. */
          deadline?: string | null;
          /** Project status. */
          status?: string | null;
          /** Project completion percentage. */
          completion_percent?: number | null;
          /** Project budget. */
          project_budget?: number | null;
          /** Related client ID. */
          client_id?: number | null;
          /** Project category ID. */
          category_id?: number | null;
          /** Project creation timestamp. */
          created_at?: string | null;
          /** Project update timestamp. */
          updated_at?: string | null;
          [key: string]: unknown;
        };
        /** Raw Agiled response payload. */
        raw: unknown;
      };
    };
    /** Update an Agiled task. */
    "agiled.update_task": {
      input: {
        /**
         * Agiled resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Task heading.
         * @minLength 1
         */
        heading: string;
        /**
         * Task description.
         * @minLength 1
         */
        description?: string;
        /**
         * Task start date using the company's configured date format.
         * @minLength 1
         */
        start_date: string;
        /**
         * Task due date using the company's configured date format.
         * @minLength 1
         */
        due_date: string;
        /**
         * Assigned user ID.
         * @exclusiveMinimum 0
         */
        user_id: number;
        /**
         * Related project ID.
         * @exclusiveMinimum 0
         */
        project_id?: number;
        /**
         * Task category ID.
         * @exclusiveMinimum 0
         */
        category_id?: number;
        /**
         * Task priority.
         * @minLength 1
         */
        priority: string;
        /**
         * Task completion date using the company's configured date format.
         * @minLength 1
         */
        completed_on?: string;
        /**
         * Milestone ID.
         * @exclusiveMinimum 0
         */
        milestone_id?: number;
        /** Whether the task is billable, usually 1 or 0. */
        billable?: number;
      };
      output: {
        /** Agiled task object. */
        task: {
          /** Agiled task ID. */
          id?: number | null;
          /** Task heading. */
          heading?: string | null;
          /** Task description. */
          description?: string | null;
          /** Task start date. */
          start_date?: string | null;
          /** Task due date. */
          due_date?: string | null;
          /** Assigned user ID. */
          user_id?: number | null;
          /** Related project ID. */
          project_id?: number | null;
          /** Task category ID. */
          category_id?: number | null;
          /** Task priority. */
          priority?: string | null;
          /** Task completion date. */
          completed_on?: string | null;
          /** Milestone ID. */
          milestone_id?: number | null;
          /** Whether the task is billable, usually 1 or 0. */
          billable?: number | null;
          /** Task creation timestamp. */
          created_at?: string | null;
          /** Task update timestamp. */
          updated_at?: string | null;
          [key: string]: unknown;
        };
        /** Raw Agiled response payload. */
        raw: unknown;
      };
    };
  }
}
