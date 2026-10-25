import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Clear all department assignments on a SmartHR employee without deleting the employee or department records. */
    "smarthr.clear_employee_departments": {
      input: {
        /**
         * The employee ID.
         * @minLength 1
         */
        employeeId: string;
      };
      output: {
        /** Whether SmartHR cleared the employee department assignments. */
        cleared: boolean;
      };
    };
    /** Create a SmartHR department. */
    "smarthr.create_department": {
      input: {
        /**
         * Department name; must not contain a slash. Required by the official create and update schemas.
         * @minLength 1
         * @pattern ^[^/]+$
         */
        name: string;
        /** Department code. */
        code?: string;
        /** Display position; automatically assigned on creation when omitted. */
        position?: number;
        /** Company ID. */
        companyId?: string;
        /** Parent department ID. */
        parentId?: string;
      };
      output: {
        /** Department data, including any nested hierarchy returned by SmartHR. */
        department: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a SmartHR employee. No employee fields are mandatory; attachments accept file URLs. */
    "smarthr.create_employee": {
      input: {
        /** Employee fields using official SmartHR names. Omitted fields are unchanged on update. Null requests clearing, subject to SmartHR restrictions on populated identity fields. */
        employee: {
          /** Employment status. */
          emp_status?: "employed" | "absent" | "retired" | null;
          /** Associated SmartHR user ID. */
          user_id?: string | null;
          /** Business establishment ID. */
          biz_establishment_id?: string | null;
          /** Employee number. */
          emp_code?: string | null;
          /** Legal family name. */
          last_name?: string | null;
          /** Legal given name. */
          first_name?: string | null;
          /** Legal family name in katakana. */
          last_name_yomi?: string | null;
          /** Legal given name in katakana. */
          first_name_yomi?: string | null;
          /** Family name used at work. */
          business_last_name?: string | null;
          /** Given name used at work. */
          business_first_name?: string | null;
          /** Work family name in katakana. */
          business_last_name_yomi?: string | null;
          /** Work given name in katakana. */
          business_first_name_yomi?: string | null;
          /**
           * Date of birth.
           * @format date
           */
          birth_at?: string | null;
          /** Legal gender. */
          gender?: "male" | "female" | null;
          /** Telephone number. */
          tel_number?: string | null;
          /** Current residential address. */
          address?: {
            /** Country code. */
            country_number?: string;
            /** Postal code. */
            zip_code?: string;
            /** Prefecture or province. */
            pref?: string;
            /** City or municipality. */
            city: string;
            /** Street address. */
            street?: string;
            /** Building name and room number. */
            building?: string;
            /** Phonetic reading of the address. */
            literal_yomi?: string;
          } | null;
          /** Head of household at the current address. */
          address_head_of_family?: string | null;
          /** Relationship to the head of household. */
          address_relation_name?: string | null;
          /** Employee email address; invitations are sent to this address. */
          email?: string | null;
          /** Relationship to the emergency contact. */
          emergency_relation_name?: string | null;
          /** Emergency contact family name. */
          emergency_last_name?: string | null;
          /** Emergency contact given name. */
          emergency_first_name?: string | null;
          /** Emergency contact family name in katakana. */
          emergency_last_name_yomi?: string | null;
          /** Emergency contact given name in katakana. */
          emergency_first_name_yomi?: string | null;
          /** Emergency contact telephone number. */
          emergency_tel_number?: string | null;
          /** Emergency contact address. */
          emergency_address?: {
            /** Country code. */
            country_number?: string;
            /** Postal code. */
            zip_code?: string;
            /** Prefecture or province. */
            pref?: string;
            /** City or municipality. */
            city: string;
            /** Street address. */
            street?: string;
            /** Building name and room number. */
            building?: string;
            /** Phonetic reading of the address. */
            literal_yomi?: string;
          } | null;
          /** Address on the resident record. */
          resident_card_address?: {
            /** Country code. */
            country_number?: string;
            /** Postal code. */
            zip_code?: string;
            /** Prefecture or province. */
            pref?: string;
            /** City or municipality. */
            city: string;
            /** Street address. */
            street?: string;
            /** Building name and room number. */
            building?: string;
            /** Phonetic reading of the address. */
            literal_yomi?: string;
          } | null;
          /** Head of household on the resident record. */
          resident_card_address_head_of_family?: string | null;
          /** Relationship to the head of household on the resident record. */
          resident_card_address_relation_name?: string | null;
          /** Job title names, not job title IDs. */
          positions?: Array<string> | null;
          /** Grade name, not a grade ID. */
          grade?: string | null;
          /** Job category name, not a category ID. */
          job_category?: string | null;
          /** Description of the employee's work. */
          occupation?: string | null;
          /**
           * Employment start date.
           * @format date
           */
          entered_at?: string | null;
          /**
           * Resignation date.
           * @format date
           */
          resigned_at?: string | null;
          /** Reason for resignation. */
          resigned_reason?: string | null;
          /** Recruitment type name, not an ID. */
          recruitment_type?: string | null;
          /** Employment insurance insured person number. */
          emp_ins_insured_person_number?: string | null;
          /** Reason the employment insurance number is unavailable. */
          emp_ins_insured_person_number_unknown_reason_type?: "no_work_experience" | "never_joined" | "unknown" | null;
          /**
           * Employment insurance qualification date.
           * @format date
           */
          emp_ins_qualified_at?: string | null;
          /**
           * Employment insurance disqualification date.
           * @format date
           */
          emp_ins_disqualified_at?: string | null;
          /** Previous employer under employment insurance. */
          previous_workplace?: string | null;
          /**
           * Start date at the previous employer under employment insurance.
           * @format date
           */
          previous_employment_start_on?: string | null;
          /**
           * End date at the previous employer under employment insurance.
           * @format date
           */
          previous_employment_end_on?: string | null;
          /** Employees' pension insurance reference number. */
          soc_ins_insured_person_number?: number | null;
          /** Health insurance reference number. */
          hel_ins_insured_person_number?: number | null;
          /** Basic pension number. */
          basic_pension_number?: string | null;
          /** Whether this is the first enrollment in employees' pension insurance. */
          first_enrolling_in_emp_pns_ins_flag?: boolean | null;
          /** Reason the basic pension number is unavailable. */
          basic_pension_number_unknown_reason_type?: "non_pensionable" | "unknown" | null;
          /** First employer under employees' pension insurance. */
          first_workplace?: string | null;
          /** Address of the first employer under employees' pension insurance. */
          first_workplace_address_text?: string | null;
          /**
           * Start date at the first employer under employees' pension insurance.
           * @format date
           */
          first_employment_start_on?: string | null;
          /**
           * End date at the first employer under employees' pension insurance.
           * @format date
           */
          first_employment_end_on?: string | null;
          /** Last employer under employees' pension insurance. */
          last_workplace?: string | null;
          /** Address of the last employer under employees' pension insurance. */
          last_workplace_address_text?: string | null;
          /**
           * Start date at the last employer under employees' pension insurance.
           * @format date
           */
          last_employment_start_on?: string | null;
          /**
           * End date at the last employer under employees' pension insurance.
           * @format date
           */
          last_employment_end_on?: string | null;
          /**
           * Employees' pension insurance qualification date.
           * @format date
           */
          employees_pension_insurance_qualified_at?: string | null;
          /**
           * Employees' pension insurance disqualification date.
           * @format date
           */
          employees_pension_insurance_disqualified_at?: string | null;
          /**
           * Health insurance qualification date.
           * @format date
           */
          health_insurance_qualified_at?: string | null;
          /**
           * Health insurance disqualification date.
           * @format date
           */
          health_insurance_disqualified_at?: string | null;
          /** Social insurance premium calculation method used for payroll. */
          insurance_premium_calculation_type?: "rate" | "fixed" | null;
          /** Employer share of the health insurance premium. */
          health_insurance_premium_company?: number | null;
          /** Employee share of the health insurance premium. */
          health_insurance_premium_individual?: number | null;
          /** Employer share of the long-term care insurance premium. */
          care_insurance_premium_company?: number | null;
          /** Employee share of the long-term care insurance premium. */
          care_insurance_premium_individual?: number | null;
          /** Employer share of the child and childcare support fund. */
          child_care_support_fund_company?: number | null;
          /** Employee share of the child and childcare support fund. */
          child_care_support_fund_individual?: number | null;
          /** Employer share of the employees' pension insurance premium. */
          employees_pension_insurance_premium_company?: number | null;
          /** Employee share of the employees' pension insurance premium. */
          employees_pension_insurance_premium_individual?: number | null;
          /** Childcare contribution amount. */
          child_care_contribution?: number | null;
          /** Whether the employee has a spouse. */
          having_spouse?: boolean | null;
          /** Spouse's annual income. */
          spouse_yearly_income?: number | null;
          /** Monthly remuneration paid in money. */
          monthly_income_currency?: number | null;
          /** Monthly remuneration paid in kind. */
          monthly_income_goods?: number | null;
          /** Monthly base salary. */
          monthly_base_salary?: number | null;
          /**
           * Revision date of standard monthly remuneration.
           * @format date
           */
          monthly_standard_income_updated_at?: string | null;
          /** Standard monthly remuneration for health insurance. */
          monthly_standard_income_hel?: number | null;
          /** Standard monthly remuneration for employees' pension insurance. */
          monthly_standard_income_pns?: number | null;
          /** Commuting route. */
          nearest_station_and_line?: string | null;
          /** Commuting allowance 1 season-ticket cost. */
          commutation_1_expenses?: number | null;
          /** Commuting allowance 1 ticket period. */
          commutation_1_period?: "commutation_period_1_month" | "commutation_period_3_month" | "commutation_period_6_month" | null;
          /** Commuting allowance 1 one-way fare. */
          commutation_1_single_fare?: number | null;
          /** Commuting allowance 2 season-ticket cost. */
          commutation_2_expenses?: number | null;
          /** Commuting allowance 2 ticket period. */
          commutation_2_period?: "commutation_period_1_month" | "commutation_period_3_month" | "commutation_period_6_month" | null;
          /** Commuting allowance 2 one-way fare. */
          commutation_2_single_fare?: number | null;
          /** Family name in foreign residence records. */
          foreign_resident_last_name?: string | null;
          /** Given name in foreign residence records. */
          foreign_resident_first_name?: string | null;
          /** Middle name in foreign residence records. */
          foreign_resident_middle_name?: string | null;
          /** Residence card number. */
          foreign_resident_card_number?: string | null;
          /** Nationality or country code. */
          nationality_code?: string | null;
          /** Residence status. */
          resident_status_type?: string | null;
          /** Reason the residence status is unknown. */
          resident_status_other_reason?: string | null;
          /**
           * Residence permission expiry date.
           * @format date
           */
          resident_end_at?: string | null;
          /** Permission to engage in activities outside the residence status. */
          having_ex_activity_permission?: "permitted" | "none" | null;
          /** Dispatch or contract work classification. */
          other_be_workable_type?: "other_be_workable" | "others" | null;
          /** Employment contract term type. */
          contract_type?: "unlimited" | "fixed_term" | null;
          /**
           * Contract start date.
           * @format date
           */
          contract_start_on?: string | null;
          /**
           * Contract end date.
           * @format date
           */
          contract_end_on?: string | null;
          /** Contract renewal policy. */
          contract_renewal_type?: "renewal" | "none" | "auto_renewal" | null;
          /** Income tax withholding classification. */
          tax_cd?: "kou" | "otsu" | "hei" | "reward" | "non_resident" | "no_taxation_required" | null;
          /** Disability classification. */
          handicapped_type?: "ordinary_handicapped" | "special_handicapped" | null;
          /** Disability certificate type. */
          handicapped_note_type?: string | null;
          /**
           * Disability certificate issue date.
           * @format date
           */
          handicapped_note_delivery_at?: string | null;
          /** Whether the employee qualifies as a working student. */
          working_student_flag?: boolean | null;
          /** School attended by the working student. */
          school_name?: string | null;
          /**
           * School enrollment date.
           * @format date
           */
          enrolled_at?: string | null;
          /** Estimated income of the working student. */
          working_student_income?: number | null;
          /** Whether the employee has employment income. */
          employment_income_flag?: boolean | null;
          /** Whether the employee has business income. */
          business_income_flag?: boolean | null;
          /** Whether the employee has dividend income; the upstream field spelling is preserved. */
          devidend_income_flag?: boolean | null;
          /** Whether the employee has real estate income. */
          estate_income_flag?: boolean | null;
          /** Widow or single-parent classification. */
          widow_type?: "widow" | "single_parent" | null;
          /** Reason for the widow or single-parent classification. */
          widow_reason_type?: "divorce" | "bereavement" | "missing" | "unmarried" | null;
          /** Notes about the widow or single-parent classification. */
          widow_memo?: string | null;
          /** Employment type ID. */
          employment_type_id?: string | null;
          /** Department IDs assigned to the employee. */
          department_ids?: Array<string> | null;
          /** Payment period ID. */
          payment_period_id?: string | null;
          /** Profile image attachment. */
          profile_image?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Resume or work-history attachment 1. */
          resume1?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Resume or work-history attachment 2. */
          resume2?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Identity document attachment 1. */
          identity_card_image1?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Identity document attachment 2. */
          identity_card_image2?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Proof of address attachment. */
          address_image?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Employment insurance number evidence attachment. */
          emp_ins_insured_person_number_image?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Basic pension number evidence attachment. */
          basic_pension_number_image?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Residence card attachment 1. */
          foreign_resident_card_image1?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Residence card attachment 2. */
          foreign_resident_card_image2?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Disability certificate attachment. */
          handicapped_image?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Student ID attachment. */
          student_card_image?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Bank accounts. Either every entry supplies bank_account_setting_id, or none does; otherwise SmartHR rejects the request. */
          bank_accounts?: Array<{
            /** Bank code. */
            bank_code: string;
            /** Bank branch code. */
            bank_branch_code: string;
            /** Bank account type. */
            account_type: "saving" | "checking" | "deposit";
            /** Bank account number. */
            account_number: string;
            /** Account holder name in katakana. */
            account_holder_name: string;
            /** Transfer allocation type. */
            transfer_type?: "full" | "specified" | "remaining";
            /** Fixed transfer amount. */
            specified_transfer_amount?: number;
            /** Whether the account receives salary, bonus, or both. */
            transfer_category?: "salary_and_bonus" | "salary" | "bonus";
            /** Bank account evidence attachment. */
            bankbook_image?: {
              /**
               * Public HTTP(S) URL of the file.
               * @format uri
               */
              fileUrl: string;
              /**
               * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
               * @minLength 1
               */
              fileName: string;
            };
            /** Bank account setting ID. */
            bank_account_setting_id?: string;
          }> | null;
          /** Custom field values. Dropdown values accept an element ID or physical name; file fields use file. */
          custom_fields?: Array<{
            /**
             * Custom field template ID.
             * @minLength 1
             */
            template_id: string;
            /** Value matching the custom field type; null requests clearing. */
            value?: string | number | null;
            /** File for a custom field of type file. */
            file?: {
              /**
               * Public HTTP(S) URL of the file.
               * @format uri
               */
              fileUrl: string;
              /**
               * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
               * @minLength 1
               */
              fileName: string;
            };
          }> | null;
        };
      };
      output: {
        /** SmartHR employee data; additional upstream fields are preserved. */
        employee: {
          /** Resource ID. */
          id?: string;
          /** Employee number. */
          emp_code?: string;
          /** Given name. */
          first_name?: string;
          /** Family name. */
          last_name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a SmartHR employment type. System preset and scheduled-change restrictions are enforced by SmartHR. */
    "smarthr.create_employment_type": {
      input: {
        /** The employment type name. */
        name: string;
        /** The employment type code. */
        code?: string;
      };
      output: {
        /** SmartHR employment type data; additional upstream fields are preserved. */
        employmentType: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          /** Resource code. */
          code?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a SmartHR grade. */
    "smarthr.create_grade": {
      input: {
        /** The grade name. */
        name?: string;
        /**
         * Rank from 1 to 99999.
         * @minimum 1
         * @maximum 99999
         */
        rank?: number;
      };
      output: {
        /** SmartHR grade data; additional upstream fields are preserved. */
        grade: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          /** Resource rank. */
          rank?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Create a SmartHR job category. */
    "smarthr.create_job_category": {
      input: {
        /** The job category name. */
        name?: string;
      };
      output: {
        /** SmartHR job category data; additional upstream fields are preserved. */
        jobCategory: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a SmartHR job title. */
    "smarthr.create_job_title": {
      input: {
        /** The job title name. */
        name?: string;
        /**
         * Rank from 1 to 99999.
         * @minimum 1
         * @maximum 99999
         */
        rank?: number;
        /** The job title code. */
        code?: string;
      };
      output: {
        /** SmartHR job title data; additional upstream fields are preserved. */
        jobTitle: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          /** Resource rank. */
          rank?: number;
          /** Resource code. */
          code?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a SmartHR recruitment type. */
    "smarthr.create_recruitment_type": {
      input: {
        /** The recruitment type name. */
        name: string;
      };
      output: {
        /** SmartHR recruitment type data; additional upstream fields are preserved. */
        recruitmentType: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a SmartHR employee record. */
    "smarthr.delete_employee": {
      input: {
        /**
         * The employee ID.
         * @minLength 1
         */
        employeeId: string;
      };
      output: {
        /** Whether SmartHR accepted the deletion. */
        deleted: boolean;
      };
    };
    /** Delete a SmartHR employment type. System preset and scheduled-change restrictions are enforced by SmartHR. */
    "smarthr.delete_employment_type": {
      input: {
        /**
         * The employment type ID.
         * @minLength 1
         */
        employmentTypeId: string;
      };
      output: {
        /** Whether SmartHR accepted the deletion. */
        deleted: boolean;
      };
    };
    /** Delete a SmartHR grade. */
    "smarthr.delete_grade": {
      input: {
        /**
         * The grade ID.
         * @minLength 1
         */
        gradeId: string;
      };
      output: {
        /** Whether SmartHR accepted the deletion. */
        deleted: boolean;
      };
    };
    /** Delete a SmartHR job category. */
    "smarthr.delete_job_category": {
      input: {
        /**
         * The job category ID.
         * @minLength 1
         */
        jobCategoryId: string;
      };
      output: {
        /** Whether SmartHR accepted the deletion. */
        deleted: boolean;
      };
    };
    /** Delete a SmartHR job title. */
    "smarthr.delete_job_title": {
      input: {
        /**
         * The job title ID.
         * @minLength 1
         */
        jobTitleId: string;
      };
      output: {
        /** Whether SmartHR accepted the deletion. */
        deleted: boolean;
      };
    };
    /** Delete a SmartHR recruitment type. */
    "smarthr.delete_recruitment_type": {
      input: {
        /**
         * The recruitment type ID.
         * @minLength 1
         */
        recruitmentTypeId: string;
      };
      output: {
        /** Whether SmartHR accepted the deletion. */
        deleted: boolean;
      };
    };
    /** Discontinue a SmartHR department on its last active date. The date must be in the past; scheduled employee changes can prevent discontinuation. */
    "smarthr.discontinue_department": {
      input: {
        /**
         * The department ID.
         * @minLength 1
         */
        departmentId: string;
        /**
         * Last date the department existed, in YYYY-MM-DD format; must be in the past.
         * @format date
         */
        discontinuedDate: string;
      };
      output: {
        /** Whether SmartHR accepted the discontinuation. */
        discontinued: boolean;
      };
    };
    /** Get a SmartHR department by ID. */
    "smarthr.get_department": {
      input: {
        /**
         * The department ID.
         * @minLength 1
         */
        departmentId: string;
      };
      output: {
        /** Department data, including any nested hierarchy returned by SmartHR. */
        department: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a SmartHR employee by ID. */
    "smarthr.get_employee": {
      input: {
        /**
         * The employee ID.
         * @minLength 1
         */
        employeeId: string;
        /**
         * Employee field names to return. Omit to use the upstream default.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** Employee data; fields depend on the token permissions and requested fields. */
        employee: {
          /** Employee ID. */
          id?: string;
          /** Employee number. */
          emp_code?: string;
          /** Family name. */
          last_name?: string;
          /** Given name. */
          first_name?: string;
          /** Employment status. */
          emp_status?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a SmartHR employee information collection form by ID. */
    "smarthr.get_employee_input_form": {
      input: {
        /**
         * The employee information collection form ID.
         * @minLength 1
         */
        employeeInputFormId: string;
        /** Related object to embed, such as mail_format. */
        embed?: string;
      };
      output: {
        /** SmartHR employee information collection form data; additional upstream fields are preserved. */
        employeeInputForm: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          /** Invitation email template ID when the template is not embedded. */
          mail_format_id?: string;
          /** Preset invitation form type. */
          preset_type?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a SmartHR employment type by ID. */
    "smarthr.get_employment_type": {
      input: {
        /**
         * The employment type ID.
         * @minLength 1
         */
        employmentTypeId: string;
      };
      output: {
        /** Employment type information. */
        employmentType: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a SmartHR grade by ID. */
    "smarthr.get_grade": {
      input: {
        /**
         * The grade ID.
         * @minLength 1
         */
        gradeId: string;
      };
      output: {
        /** SmartHR grade data; additional upstream fields are preserved. */
        grade: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          /** Resource rank. */
          rank?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get a SmartHR job category by ID. */
    "smarthr.get_job_category": {
      input: {
        /**
         * The job category ID.
         * @minLength 1
         */
        jobCategoryId: string;
      };
      output: {
        /** SmartHR job category data; additional upstream fields are preserved. */
        jobCategory: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a SmartHR job title by ID. */
    "smarthr.get_job_title": {
      input: {
        /**
         * The job title ID.
         * @minLength 1
         */
        jobTitleId: string;
      };
      output: {
        /** SmartHR job title data; additional upstream fields are preserved. */
        jobTitle: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          /** Resource rank. */
          rank?: number;
          /** Resource code. */
          code?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a SmartHR payment period by ID. */
    "smarthr.get_payment_period": {
      input: {
        /**
         * The payment period ID.
         * @minLength 1
         */
        paymentPeriodId: string;
      };
      output: {
        /** SmartHR payment period data; additional upstream fields are preserved. */
        paymentPeriod: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          /** Payment period type, such as monthly or hourly. */
          period_type?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a SmartHR recruitment type by ID. */
    "smarthr.get_recruitment_type": {
      input: {
        /**
         * The recruitment type ID.
         * @minLength 1
         */
        recruitmentTypeId: string;
      };
      output: {
        /** SmartHR recruitment type data; additional upstream fields are preserved. */
        recruitmentType: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a SmartHR user by ID. */
    "smarthr.get_user": {
      input: {
        /**
         * The user ID.
         * @minLength 1
         */
        userId: string;
        /** Related user data to embed. */
        embed?: "crew" | "biz_establishment" | "biz_establishment_company" | "department_company";
      };
      output: {
        /** SmartHR user data; additional upstream fields are preserved. */
        user: {
          /** Resource ID. */
          id?: string;
          /** Login email address. */
          email?: string;
          /** Whether the user is an administrator eligible to send employee invitations. */
          admin?: boolean;
          /** Linked employee ID when the employee is not embedded. */
          crew_id?: string;
          /** Invitation acceptance date returned by SmartHR. */
          invitation_accepted_at?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Send or resend an invitation to the employee email address. The inviter must be an administrator; the invited user receives member permissions. Already accepted invitations cannot be resent. */
    "smarthr.invite_employee": {
      input: {
        /**
         * The employee ID.
         * @minLength 1
         */
        employeeId: string;
        /**
         * The administrator sending the invitation ID.
         * @minLength 1
         */
        inviterUserId: string;
        /**
         * The employee information collection form ID.
         * @minLength 1
         */
        employeeInputFormId?: string;
      };
      output: {
        /** Whether SmartHR accepted the invitation request. */
        invited: boolean;
      };
    };
    /** List SmartHR bank account setting records with pagination. */
    "smarthr.list_bank_account_settings": {
      input: {
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Results per page, from 1 to 100. Defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Returned bank account setting records. */
        bankAccountSettings: Array<{
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          /** Whether this bank account setting is enabled. */
          enabled?: boolean;
          /** Display order of the bank account setting. */
          number?: number;
          [key: string]: unknown;
        }>;
        /** Requested page number. */
        page: number;
        /** Requested page size. */
        perPage: number;
        /** Total matching records from x-total-count, or null when unavailable. */
        totalCount: number | null;
        /** Next page number from the Link header, or null when no next link is provided. */
        nextPage: number | null;
      };
    };
    /** List SmartHR business establishments with pagination. */
    "smarthr.list_business_establishments": {
      input: {
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Results per page, from 1 to 100. Defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Related object to include in the response. */
        embed?: "soc_ins_owner" | "lab_ins_owner" | "company";
      };
      output: {
        /** Returned business establishments. */
        businessEstablishments: Array<{
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Requested page number. */
        page: number;
        /** Requested page size. */
        perPage: number;
        /** Total matching records from x-total-count, or null when unavailable. */
        totalCount: number | null;
        /** Next page number from the Link header, or null when no next link is provided. */
        nextPage: number | null;
      };
    };
    /** List SmartHR companies with pagination. */
    "smarthr.list_companies": {
      input: {
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Results per page, from 1 to 100. Defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Optionally include the company owner. */
        embed?: "owner";
      };
      output: {
        /** Returned companies. */
        companies: Array<{
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Requested page number. */
        page: number;
        /** Requested page size. */
        perPage: number;
        /** Total matching records from x-total-count, or null when unavailable. */
        totalCount: number | null;
        /** Next page number from the Link header, or null when no next link is provided. */
        nextPage: number | null;
      };
    };
    /** List SmartHR custom employee field groups with pagination. */
    "smarthr.list_custom_field_groups": {
      input: {
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Results per page, from 1 to 100. Defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Include the templates belonging to each group. */
        embed?: "templates";
      };
      output: {
        /** Returned custom employee field groups. */
        customFieldGroups: Array<{
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Requested page number. */
        page: number;
        /** Requested page size. */
        perPage: number;
        /** Total matching records from x-total-count, or null when unavailable. */
        totalCount: number | null;
        /** Next page number from the Link header, or null when no next link is provided. */
        nextPage: number | null;
      };
    };
    /** List SmartHR custom employee fields with pagination. */
    "smarthr.list_custom_fields": {
      input: {
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Results per page, from 1 to 100. Defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Include the field group instead of group_id. */
        embed?: "group";
      };
      output: {
        /** Returned custom employee fields. */
        customFields: Array<{
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Requested page number. */
        page: number;
        /** Requested page size. */
        perPage: number;
        /** Total matching records from x-total-count, or null when unavailable. */
        totalCount: number | null;
        /** Next page number from the Link header, or null when no next link is provided. */
        nextPage: number | null;
      };
    };
    /** List SmartHR departments with pagination. */
    "smarthr.list_departments": {
      input: {
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Results per page, from 1 to 100. Defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Filter by department code. */
        code?: string;
        /** Sort fields separated by commas; prefix a field with - for descending order. */
        sort?: string;
      };
      output: {
        /** Returned departments. */
        departments: Array<{
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Requested page number. */
        page: number;
        /** Requested page size. */
        perPage: number;
        /** Total matching records from x-total-count, or null when unavailable. */
        totalCount: number | null;
        /** Next page number from the Link header, or null when no next link is provided. */
        nextPage: number | null;
      };
    };
    /** List SmartHR employee information collection form records with pagination. */
    "smarthr.list_employee_input_forms": {
      input: {
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Results per page, from 1 to 100. Defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Include the invitation email template. */
        embed?: "mail_format";
      };
      output: {
        /** Returned employee information collection form records. */
        employeeInputForms: Array<{
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          /** Invitation email template ID when the template is not embedded. */
          mail_format_id?: string;
          /** Preset invitation form type. */
          preset_type?: string;
          [key: string]: unknown;
        }>;
        /** Requested page number. */
        page: number;
        /** Requested page size. */
        perPage: number;
        /** Total matching records from x-total-count, or null when unavailable. */
        totalCount: number | null;
        /** Next page number from the Link header, or null when no next link is provided. */
        nextPage: number | null;
      };
    };
    /** List SmartHR employees with pagination. */
    "smarthr.list_employees": {
      input: {
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Results per page, from 1 to 100. Defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Filter by employee number. */
        employeeCode?: string;
        /**
         * Filter by employment type IDs.
         * @minItems 1
         */
        employmentTypeIds?: Array<string>;
        /** Filter by employment status. */
        employmentStatus?: "employed" | "absent" | "retired";
        /** Filter by legal gender. */
        gender?: "male" | "female";
        /** Sort fields separated by commas; prefix a field with - for descending order. */
        sort?: string;
        /**
         * Filter by user IDs.
         * @minItems 1
         */
        userIds?: Array<string>;
        /**
         * Filter by department IDs.
         * @minItems 1
         */
        departmentIds?: Array<string>;
        /**
         * Filter by position IDs.
         * @minItems 1
         */
        positionIds?: Array<string>;
        /**
         * Filter by employee IDs.
         * @minItems 1
         */
        employeeIds?: Array<string>;
        /**
         * Employee field names to return. Omit to use the upstream default.
         * @minItems 1
         */
        fields?: Array<string>;
        /** Search names, business names, departments, and positions. */
        query?: string;
        /** Prefer business names when searching. */
        preferBusinessName?: boolean;
        /**
         * Joined on or after this date.
         * @format date
         */
        enteredAtFrom?: string;
        /**
         * Joined on or before this date.
         * @format date
         */
        enteredAtTo?: string;
        /**
         * Resigned on or after this date.
         * @format date
         */
        resignedAtFrom?: string;
        /**
         * Resigned on or before this date.
         * @format date
         */
        resignedAtTo?: string;
      };
      output: {
        /** Returned employees. */
        employees: Array<{
          /** Employee ID. */
          id?: string;
          /** Employee number. */
          emp_code?: string;
          /** Family name. */
          last_name?: string;
          /** Given name. */
          first_name?: string;
          /** Employment status. */
          emp_status?: string;
          [key: string]: unknown;
        }>;
        /** Requested page number. */
        page: number;
        /** Requested page size. */
        perPage: number;
        /** Total matching records from x-total-count, or null when unavailable. */
        totalCount: number | null;
        /** Next page number from the Link header, or null when no next link is provided. */
        nextPage: number | null;
      };
    };
    /** List SmartHR employment types with pagination. */
    "smarthr.list_employment_types": {
      input: {
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Results per page, from 1 to 100. Defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Returned employment types. */
        employmentTypes: Array<{
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Requested page number. */
        page: number;
        /** Requested page size. */
        perPage: number;
        /** Total matching records from x-total-count, or null when unavailable. */
        totalCount: number | null;
        /** Next page number from the Link header, or null when no next link is provided. */
        nextPage: number | null;
      };
    };
    /** List SmartHR grade records with pagination. */
    "smarthr.list_grades": {
      input: {
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Results per page, from 1 to 100. Defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Returned grade records. */
        grades: Array<{
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          /** Resource rank. */
          rank?: number;
          [key: string]: unknown;
        }>;
        /** Requested page number. */
        page: number;
        /** Requested page size. */
        perPage: number;
        /** Total matching records from x-total-count, or null when unavailable. */
        totalCount: number | null;
        /** Next page number from the Link header, or null when no next link is provided. */
        nextPage: number | null;
      };
    };
    /** List SmartHR job category records with pagination. */
    "smarthr.list_job_categories": {
      input: {
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Results per page, from 1 to 100. Defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Returned job category records. */
        jobCategories: Array<{
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Requested page number. */
        page: number;
        /** Requested page size. */
        perPage: number;
        /** Total matching records from x-total-count, or null when unavailable. */
        totalCount: number | null;
        /** Next page number from the Link header, or null when no next link is provided. */
        nextPage: number | null;
      };
    };
    /** List SmartHR job title records with pagination. */
    "smarthr.list_job_titles": {
      input: {
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Results per page, from 1 to 100. Defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Sort fields separated by commas; prefix a field with - for descending order. */
        sort?: string;
      };
      output: {
        /** Returned job title records. */
        jobTitles: Array<{
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          /** Resource rank. */
          rank?: number;
          /** Resource code. */
          code?: string;
          [key: string]: unknown;
        }>;
        /** Requested page number. */
        page: number;
        /** Requested page size. */
        perPage: number;
        /** Total matching records from x-total-count, or null when unavailable. */
        totalCount: number | null;
        /** Next page number from the Link header, or null when no next link is provided. */
        nextPage: number | null;
      };
    };
    /** List SmartHR payment period records with pagination. */
    "smarthr.list_payment_periods": {
      input: {
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Results per page, from 1 to 100. Defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Sort fields separated by commas; prefix a field with - for descending order. */
        sort?: string;
      };
      output: {
        /** Returned payment period records. */
        paymentPeriods: Array<{
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          /** Payment period type, such as monthly or hourly. */
          period_type?: string;
          [key: string]: unknown;
        }>;
        /** Requested page number. */
        page: number;
        /** Requested page size. */
        perPage: number;
        /** Total matching records from x-total-count, or null when unavailable. */
        totalCount: number | null;
        /** Next page number from the Link header, or null when no next link is provided. */
        nextPage: number | null;
      };
    };
    /** List SmartHR recruitment type records with pagination. */
    "smarthr.list_recruitment_types": {
      input: {
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Results per page, from 1 to 100. Defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Returned recruitment type records. */
        recruitmentTypes: Array<{
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Requested page number. */
        page: number;
        /** Requested page size. */
        perPage: number;
        /** Total matching records from x-total-count, or null when unavailable. */
        totalCount: number | null;
        /** Next page number from the Link header, or null when no next link is provided. */
        nextPage: number | null;
      };
    };
    /** List SmartHR user records with pagination. */
    "smarthr.list_users": {
      input: {
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Results per page, from 1 to 100. Defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Related user data to embed. */
        embed?: "crew" | "biz_establishment" | "biz_establishment_company" | "department_company";
        /** Sort fields separated by commas; prefix a field with - for descending order. */
        sort?: string;
      };
      output: {
        /** Returned user records. */
        users: Array<{
          /** Resource ID. */
          id?: string;
          /** Login email address. */
          email?: string;
          /** Whether the user is an administrator eligible to send employee invitations. */
          admin?: boolean;
          /** Linked employee ID when the employee is not embedded. */
          crew_id?: string;
          /** Invitation acceptance date returned by SmartHR. */
          invitation_accepted_at?: string | null;
          [key: string]: unknown;
        }>;
        /** Requested page number. */
        page: number;
        /** Requested page size. */
        perPage: number;
        /** Total matching records from x-total-count, or null when unavailable. */
        totalCount: number | null;
        /** Next page number from the Link header, or null when no next link is provided. */
        nextPage: number | null;
      };
    };
    /** Replace a SmartHR department. Unspecified attributes are cleared by SmartHR. */
    "smarthr.replace_department": {
      input: {
        /**
         * The department ID.
         * @minLength 1
         */
        departmentId: string;
        /**
         * Department name; must not contain a slash. Required by the official create and update schemas.
         * @minLength 1
         * @pattern ^[^/]+$
         */
        name: string;
        /** Department code. */
        code?: string;
        /** Display position; automatically assigned on creation when omitted. */
        position?: number;
        /** Company ID. */
        companyId?: string;
        /** Parent department ID. */
        parentId?: string;
      };
      output: {
        /** Department data, including any nested hierarchy returned by SmartHR. */
        department: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a SmartHR employment type using the full-update endpoint; use partial update to preserve unspecified attributes. System preset and scheduled-change restrictions are enforced by SmartHR. */
    "smarthr.replace_employment_type": {
      input: {
        /**
         * The employment type ID.
         * @minLength 1
         */
        employmentTypeId: string;
        /** The employment type name. */
        name: string;
      };
      output: {
        /** SmartHR employment type data; additional upstream fields are preserved. */
        employmentType: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          /** Resource code. */
          code?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a SmartHR grade using the full-update endpoint; use partial update to preserve unspecified attributes. */
    "smarthr.replace_grade": {
      input: {
        /**
         * The grade ID.
         * @minLength 1
         */
        gradeId: string;
        /** The grade name. */
        name?: string;
        /**
         * Rank from 1 to 99999.
         * @minimum 1
         * @maximum 99999
         */
        rank?: number;
      };
      output: {
        /** SmartHR grade data; additional upstream fields are preserved. */
        grade: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          /** Resource rank. */
          rank?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Update a SmartHR job category using the full-update endpoint; use partial update to preserve unspecified attributes. */
    "smarthr.replace_job_category": {
      input: {
        /**
         * The job category ID.
         * @minLength 1
         */
        jobCategoryId: string;
        /** The job category name. */
        name?: string;
      };
      output: {
        /** SmartHR job category data; additional upstream fields are preserved. */
        jobCategory: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a SmartHR job title using the full-update endpoint; use partial update to preserve unspecified attributes. */
    "smarthr.replace_job_title": {
      input: {
        /**
         * The job title ID.
         * @minLength 1
         */
        jobTitleId: string;
        /** The job title name. */
        name?: string;
        /**
         * Rank from 1 to 99999.
         * @minimum 1
         * @maximum 99999
         */
        rank?: number;
      };
      output: {
        /** SmartHR job title data; additional upstream fields are preserved. */
        jobTitle: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          /** Resource rank. */
          rank?: number;
          /** Resource code. */
          code?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a SmartHR recruitment type using the full-update endpoint; use partial update to preserve unspecified attributes. */
    "smarthr.replace_recruitment_type": {
      input: {
        /**
         * The recruitment type ID.
         * @minLength 1
         */
        recruitmentTypeId: string;
        /** The recruitment type name. */
        name: string;
      };
      output: {
        /** SmartHR recruitment type data; additional upstream fields are preserved. */
        recruitmentType: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Partially update a SmartHR department, preserving unspecified attributes. SmartHR requires name. */
    "smarthr.update_department": {
      input: {
        /**
         * The department ID.
         * @minLength 1
         */
        departmentId: string;
        /**
         * Department name; must not contain a slash. Required by the official create and update schemas.
         * @minLength 1
         * @pattern ^[^/]+$
         */
        name: string;
        /** Department code. */
        code?: string;
        /** Display position; automatically assigned on creation when omitted. */
        position?: number;
        /** Company ID. */
        companyId?: string;
        /** Parent department ID. */
        parentId?: string;
      };
      output: {
        /** Department data, including any nested hierarchy returned by SmartHR. */
        department: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update only the supplied SmartHR employee fields. SmartHR prevents clearing populated identity fields; attachments accept file URLs. */
    "smarthr.update_employee": {
      input: {
        /**
         * The employee ID.
         * @minLength 1
         */
        employeeId: string;
        /** Employee fields using official SmartHR names. Omitted fields are unchanged on update. Null requests clearing, subject to SmartHR restrictions on populated identity fields. */
        employee: {
          /** Employment status. */
          emp_status?: "employed" | "absent" | "retired" | null;
          /** Associated SmartHR user ID. */
          user_id?: string | null;
          /** Business establishment ID. */
          biz_establishment_id?: string | null;
          /** Employee number. */
          emp_code?: string | null;
          /** Legal family name. */
          last_name?: string | null;
          /** Legal given name. */
          first_name?: string | null;
          /** Legal family name in katakana. */
          last_name_yomi?: string | null;
          /** Legal given name in katakana. */
          first_name_yomi?: string | null;
          /** Family name used at work. */
          business_last_name?: string | null;
          /** Given name used at work. */
          business_first_name?: string | null;
          /** Work family name in katakana. */
          business_last_name_yomi?: string | null;
          /** Work given name in katakana. */
          business_first_name_yomi?: string | null;
          /**
           * Date of birth.
           * @format date
           */
          birth_at?: string | null;
          /** Legal gender. */
          gender?: "male" | "female" | null;
          /** Telephone number. */
          tel_number?: string | null;
          /** Current residential address. */
          address?: {
            /** Country code. */
            country_number?: string;
            /** Postal code. */
            zip_code?: string;
            /** Prefecture or province. */
            pref?: string;
            /** City or municipality. */
            city: string;
            /** Street address. */
            street?: string;
            /** Building name and room number. */
            building?: string;
            /** Phonetic reading of the address. */
            literal_yomi?: string;
          } | null;
          /** Head of household at the current address. */
          address_head_of_family?: string | null;
          /** Relationship to the head of household. */
          address_relation_name?: string | null;
          /** Employee email address; invitations are sent to this address. */
          email?: string | null;
          /** Relationship to the emergency contact. */
          emergency_relation_name?: string | null;
          /** Emergency contact family name. */
          emergency_last_name?: string | null;
          /** Emergency contact given name. */
          emergency_first_name?: string | null;
          /** Emergency contact family name in katakana. */
          emergency_last_name_yomi?: string | null;
          /** Emergency contact given name in katakana. */
          emergency_first_name_yomi?: string | null;
          /** Emergency contact telephone number. */
          emergency_tel_number?: string | null;
          /** Emergency contact address. */
          emergency_address?: {
            /** Country code. */
            country_number?: string;
            /** Postal code. */
            zip_code?: string;
            /** Prefecture or province. */
            pref?: string;
            /** City or municipality. */
            city: string;
            /** Street address. */
            street?: string;
            /** Building name and room number. */
            building?: string;
            /** Phonetic reading of the address. */
            literal_yomi?: string;
          } | null;
          /** Address on the resident record. */
          resident_card_address?: {
            /** Country code. */
            country_number?: string;
            /** Postal code. */
            zip_code?: string;
            /** Prefecture or province. */
            pref?: string;
            /** City or municipality. */
            city: string;
            /** Street address. */
            street?: string;
            /** Building name and room number. */
            building?: string;
            /** Phonetic reading of the address. */
            literal_yomi?: string;
          } | null;
          /** Head of household on the resident record. */
          resident_card_address_head_of_family?: string | null;
          /** Relationship to the head of household on the resident record. */
          resident_card_address_relation_name?: string | null;
          /** Job title names, not job title IDs. */
          positions?: Array<string> | null;
          /** Grade name, not a grade ID. */
          grade?: string | null;
          /** Job category name, not a category ID. */
          job_category?: string | null;
          /** Description of the employee's work. */
          occupation?: string | null;
          /**
           * Employment start date.
           * @format date
           */
          entered_at?: string | null;
          /**
           * Resignation date.
           * @format date
           */
          resigned_at?: string | null;
          /** Reason for resignation. */
          resigned_reason?: string | null;
          /** Recruitment type name, not an ID. */
          recruitment_type?: string | null;
          /** Employment insurance insured person number. */
          emp_ins_insured_person_number?: string | null;
          /** Reason the employment insurance number is unavailable. */
          emp_ins_insured_person_number_unknown_reason_type?: "no_work_experience" | "never_joined" | "unknown" | null;
          /**
           * Employment insurance qualification date.
           * @format date
           */
          emp_ins_qualified_at?: string | null;
          /**
           * Employment insurance disqualification date.
           * @format date
           */
          emp_ins_disqualified_at?: string | null;
          /** Previous employer under employment insurance. */
          previous_workplace?: string | null;
          /**
           * Start date at the previous employer under employment insurance.
           * @format date
           */
          previous_employment_start_on?: string | null;
          /**
           * End date at the previous employer under employment insurance.
           * @format date
           */
          previous_employment_end_on?: string | null;
          /** Employees' pension insurance reference number. */
          soc_ins_insured_person_number?: number | null;
          /** Health insurance reference number. */
          hel_ins_insured_person_number?: number | null;
          /** Basic pension number. */
          basic_pension_number?: string | null;
          /** Whether this is the first enrollment in employees' pension insurance. */
          first_enrolling_in_emp_pns_ins_flag?: boolean | null;
          /** Reason the basic pension number is unavailable. */
          basic_pension_number_unknown_reason_type?: "non_pensionable" | "unknown" | null;
          /** First employer under employees' pension insurance. */
          first_workplace?: string | null;
          /** Address of the first employer under employees' pension insurance. */
          first_workplace_address_text?: string | null;
          /**
           * Start date at the first employer under employees' pension insurance.
           * @format date
           */
          first_employment_start_on?: string | null;
          /**
           * End date at the first employer under employees' pension insurance.
           * @format date
           */
          first_employment_end_on?: string | null;
          /** Last employer under employees' pension insurance. */
          last_workplace?: string | null;
          /** Address of the last employer under employees' pension insurance. */
          last_workplace_address_text?: string | null;
          /**
           * Start date at the last employer under employees' pension insurance.
           * @format date
           */
          last_employment_start_on?: string | null;
          /**
           * End date at the last employer under employees' pension insurance.
           * @format date
           */
          last_employment_end_on?: string | null;
          /**
           * Employees' pension insurance qualification date.
           * @format date
           */
          employees_pension_insurance_qualified_at?: string | null;
          /**
           * Employees' pension insurance disqualification date.
           * @format date
           */
          employees_pension_insurance_disqualified_at?: string | null;
          /**
           * Health insurance qualification date.
           * @format date
           */
          health_insurance_qualified_at?: string | null;
          /**
           * Health insurance disqualification date.
           * @format date
           */
          health_insurance_disqualified_at?: string | null;
          /** Social insurance premium calculation method used for payroll. */
          insurance_premium_calculation_type?: "rate" | "fixed" | null;
          /** Employer share of the health insurance premium. */
          health_insurance_premium_company?: number | null;
          /** Employee share of the health insurance premium. */
          health_insurance_premium_individual?: number | null;
          /** Employer share of the long-term care insurance premium. */
          care_insurance_premium_company?: number | null;
          /** Employee share of the long-term care insurance premium. */
          care_insurance_premium_individual?: number | null;
          /** Employer share of the child and childcare support fund. */
          child_care_support_fund_company?: number | null;
          /** Employee share of the child and childcare support fund. */
          child_care_support_fund_individual?: number | null;
          /** Employer share of the employees' pension insurance premium. */
          employees_pension_insurance_premium_company?: number | null;
          /** Employee share of the employees' pension insurance premium. */
          employees_pension_insurance_premium_individual?: number | null;
          /** Childcare contribution amount. */
          child_care_contribution?: number | null;
          /** Whether the employee has a spouse. */
          having_spouse?: boolean | null;
          /** Spouse's annual income. */
          spouse_yearly_income?: number | null;
          /** Monthly remuneration paid in money. */
          monthly_income_currency?: number | null;
          /** Monthly remuneration paid in kind. */
          monthly_income_goods?: number | null;
          /** Monthly base salary. */
          monthly_base_salary?: number | null;
          /**
           * Revision date of standard monthly remuneration.
           * @format date
           */
          monthly_standard_income_updated_at?: string | null;
          /** Standard monthly remuneration for health insurance. */
          monthly_standard_income_hel?: number | null;
          /** Standard monthly remuneration for employees' pension insurance. */
          monthly_standard_income_pns?: number | null;
          /** Commuting route. */
          nearest_station_and_line?: string | null;
          /** Commuting allowance 1 season-ticket cost. */
          commutation_1_expenses?: number | null;
          /** Commuting allowance 1 ticket period. */
          commutation_1_period?: "commutation_period_1_month" | "commutation_period_3_month" | "commutation_period_6_month" | null;
          /** Commuting allowance 1 one-way fare. */
          commutation_1_single_fare?: number | null;
          /** Commuting allowance 2 season-ticket cost. */
          commutation_2_expenses?: number | null;
          /** Commuting allowance 2 ticket period. */
          commutation_2_period?: "commutation_period_1_month" | "commutation_period_3_month" | "commutation_period_6_month" | null;
          /** Commuting allowance 2 one-way fare. */
          commutation_2_single_fare?: number | null;
          /** Family name in foreign residence records. */
          foreign_resident_last_name?: string | null;
          /** Given name in foreign residence records. */
          foreign_resident_first_name?: string | null;
          /** Middle name in foreign residence records. */
          foreign_resident_middle_name?: string | null;
          /** Residence card number. */
          foreign_resident_card_number?: string | null;
          /** Nationality or country code. */
          nationality_code?: string | null;
          /** Residence status. */
          resident_status_type?: string | null;
          /** Reason the residence status is unknown. */
          resident_status_other_reason?: string | null;
          /**
           * Residence permission expiry date.
           * @format date
           */
          resident_end_at?: string | null;
          /** Permission to engage in activities outside the residence status. */
          having_ex_activity_permission?: "permitted" | "none" | null;
          /** Dispatch or contract work classification. */
          other_be_workable_type?: "other_be_workable" | "others" | null;
          /** Employment contract term type. */
          contract_type?: "unlimited" | "fixed_term" | null;
          /**
           * Contract start date.
           * @format date
           */
          contract_start_on?: string | null;
          /**
           * Contract end date.
           * @format date
           */
          contract_end_on?: string | null;
          /** Contract renewal policy. */
          contract_renewal_type?: "renewal" | "none" | "auto_renewal" | null;
          /** Income tax withholding classification. */
          tax_cd?: "kou" | "otsu" | "hei" | "reward" | "non_resident" | "no_taxation_required" | null;
          /** Disability classification. */
          handicapped_type?: "ordinary_handicapped" | "special_handicapped" | null;
          /** Disability certificate type. */
          handicapped_note_type?: string | null;
          /**
           * Disability certificate issue date.
           * @format date
           */
          handicapped_note_delivery_at?: string | null;
          /** Whether the employee qualifies as a working student. */
          working_student_flag?: boolean | null;
          /** School attended by the working student. */
          school_name?: string | null;
          /**
           * School enrollment date.
           * @format date
           */
          enrolled_at?: string | null;
          /** Estimated income of the working student. */
          working_student_income?: number | null;
          /** Whether the employee has employment income. */
          employment_income_flag?: boolean | null;
          /** Whether the employee has business income. */
          business_income_flag?: boolean | null;
          /** Whether the employee has dividend income; the upstream field spelling is preserved. */
          devidend_income_flag?: boolean | null;
          /** Whether the employee has real estate income. */
          estate_income_flag?: boolean | null;
          /** Widow or single-parent classification. */
          widow_type?: "widow" | "single_parent" | null;
          /** Reason for the widow or single-parent classification. */
          widow_reason_type?: "divorce" | "bereavement" | "missing" | "unmarried" | null;
          /** Notes about the widow or single-parent classification. */
          widow_memo?: string | null;
          /** Employment type ID. */
          employment_type_id?: string | null;
          /** Department IDs assigned to the employee. */
          department_ids?: Array<string> | null;
          /** Payment period ID. */
          payment_period_id?: string | null;
          /** Profile image attachment. */
          profile_image?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Resume or work-history attachment 1. */
          resume1?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Resume or work-history attachment 2. */
          resume2?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Identity document attachment 1. */
          identity_card_image1?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Identity document attachment 2. */
          identity_card_image2?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Proof of address attachment. */
          address_image?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Employment insurance number evidence attachment. */
          emp_ins_insured_person_number_image?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Basic pension number evidence attachment. */
          basic_pension_number_image?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Residence card attachment 1. */
          foreign_resident_card_image1?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Residence card attachment 2. */
          foreign_resident_card_image2?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Disability certificate attachment. */
          handicapped_image?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Student ID attachment. */
          student_card_image?: {
            /**
             * Public HTTP(S) URL of the file.
             * @format uri
             */
            fileUrl: string;
            /**
             * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
             * @minLength 1
             */
            fileName: string;
          } | null;
          /** Bank accounts. Either every entry supplies bank_account_setting_id, or none does; otherwise SmartHR rejects the request. */
          bank_accounts?: Array<{
            /** Bank code. */
            bank_code: string;
            /** Bank branch code. */
            bank_branch_code: string;
            /** Bank account type. */
            account_type: "saving" | "checking" | "deposit";
            /** Bank account number. */
            account_number: string;
            /** Account holder name in katakana. */
            account_holder_name: string;
            /** Transfer allocation type. */
            transfer_type?: "full" | "specified" | "remaining";
            /** Fixed transfer amount. */
            specified_transfer_amount?: number;
            /** Whether the account receives salary, bonus, or both. */
            transfer_category?: "salary_and_bonus" | "salary" | "bonus";
            /** Bank account evidence attachment. */
            bankbook_image?: {
              /**
               * Public HTTP(S) URL of the file.
               * @format uri
               */
              fileUrl: string;
              /**
               * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
               * @minLength 1
               */
              fileName: string;
            };
            /** Bank account setting ID. */
            bank_account_setting_id?: string;
          }> | null;
          /** Custom field values. Dropdown values accept an element ID or physical name; file fields use file. */
          custom_fields?: Array<{
            /**
             * Custom field template ID.
             * @minLength 1
             */
            template_id: string;
            /** Value matching the custom field type; null requests clearing. */
            value?: string | number | null;
            /** File for a custom field of type file. */
            file?: {
              /**
               * Public HTTP(S) URL of the file.
               * @format uri
               */
              fileUrl: string;
              /**
               * File name with extension. Supported: png, jpeg, jpg, pdf, text, txt, csv, conf, log, docx, doc, xlsx, xls, gif.
               * @minLength 1
               */
              fileName: string;
            };
          }> | null;
        };
      };
      output: {
        /** SmartHR employee data; additional upstream fields are preserved. */
        employee: {
          /** Resource ID. */
          id?: string;
          /** Employee number. */
          emp_code?: string;
          /** Given name. */
          first_name?: string;
          /** Family name. */
          last_name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Partially update a SmartHR employment type, preserving unspecified attributes. System preset and scheduled-change restrictions are enforced by SmartHR. */
    "smarthr.update_employment_type": {
      input: {
        /**
         * The employment type ID.
         * @minLength 1
         */
        employmentTypeId: string;
        /** The employment type name. */
        name: string;
        /** The employment type code. */
        code?: string;
      };
      output: {
        /** SmartHR employment type data; additional upstream fields are preserved. */
        employmentType: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          /** Resource code. */
          code?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Partially update a SmartHR grade, preserving unspecified attributes. */
    "smarthr.update_grade": {
      input: {
        /**
         * The grade ID.
         * @minLength 1
         */
        gradeId: string;
        /** The grade name. */
        name?: string;
        /**
         * Rank from 1 to 99999.
         * @minimum 1
         * @maximum 99999
         */
        rank?: number;
      };
      output: {
        /** SmartHR grade data; additional upstream fields are preserved. */
        grade: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          /** Resource rank. */
          rank?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Partially update a SmartHR job category, preserving unspecified attributes. */
    "smarthr.update_job_category": {
      input: {
        /**
         * The job category ID.
         * @minLength 1
         */
        jobCategoryId: string;
        /** The job category name. */
        name?: string;
      };
      output: {
        /** SmartHR job category data; additional upstream fields are preserved. */
        jobCategory: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Partially update a SmartHR job title, preserving unspecified attributes. */
    "smarthr.update_job_title": {
      input: {
        /**
         * The job title ID.
         * @minLength 1
         */
        jobTitleId: string;
        /** The job title name. */
        name?: string;
        /**
         * Rank from 1 to 99999.
         * @minimum 1
         * @maximum 99999
         */
        rank?: number;
        /** The job title code. */
        code?: string;
      };
      output: {
        /** SmartHR job title data; additional upstream fields are preserved. */
        jobTitle: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          /** Resource rank. */
          rank?: number;
          /** Resource code. */
          code?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Partially update a SmartHR recruitment type, preserving unspecified attributes. */
    "smarthr.update_recruitment_type": {
      input: {
        /**
         * The recruitment type ID.
         * @minLength 1
         */
        recruitmentTypeId: string;
        /** The recruitment type name. */
        name: string;
      };
      output: {
        /** SmartHR recruitment type data; additional upstream fields are preserved. */
        recruitmentType: {
          /** Resource ID. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
