import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Archive an Eraser file. */
    "eraser.archive_file": {
      input: {
        /**
         * The unique Eraser file identifier.
         * @minLength 1
         */
        fileId: string;
      };
      output: {
        /** Whether the file was archived. */
        archived: boolean;
        /**
         * The URL of the archived file.
         * @format uri
         */
        fileUrl: string;
      };
    };
    /** Create a diagram from Eraser DSL inside an existing file. */
    "eraser.create_diagram": {
      input: {
        /**
         * The unique Eraser file identifier.
         * @minLength 1
         */
        fileId: string;
        /** The Eraser diagram type. */
        diagramType: "sequence-diagram" | "entity-relationship-diagram" | "cloud-architecture-diagram" | "flowchart-diagram" | "bpmn-diagram";
        /**
         * The Eraser DSL source for the new diagram.
         * @minLength 1
         */
        code?: string;
      };
      output: {
        /** The unique diagram identifier. */
        id: string;
        /**
         * The URL for viewing the diagram in Eraser.
         * @format uri
         */
        diagramUrl: string;
        /** The Eraser diagram type. */
        diagramType: "sequence-diagram" | "entity-relationship-diagram" | "cloud-architecture-diagram" | "flowchart-diagram" | "bpmn-diagram";
        /** The Eraser DSL source for the diagram. */
        code: string;
        /** The ISO 8601 timestamp when the diagram was last updated. */
        updatedAt: string;
        [key: string]: unknown;
      };
    };
    /** Create an Eraser file with optional Markdown content. */
    "eraser.create_file": {
      input: {
        /**
         * The file title; Eraser uses Untitled when omitted.
         * @minLength 1
         */
        title?: string;
        /**
         * The folder in which to create the file.
         * @minLength 1
         */
        folderId?: string;
        /** The Markdown document content, including optional diagram code blocks. */
        document?: string;
        /** The link access setting for the Eraser file. */
        linkAccess?: "no-link-access" | "anyone-with-link-can-edit" | "publicly-viewable" | "publicly-editable" | "sso-readable" | "sso-editable";
      };
      output: {
        /** The unique file identifier. */
        id: string;
        /**
         * The URL for viewing the file in Eraser.
         * @format uri
         */
        fileUrl: string;
        /** The file title. */
        title: string;
        /** The identifier of the file author. */
        author: string;
        /** The containing folder identifier, or null for the root. */
        folderId: string | null;
        /** The ISO 8601 timestamp when the file was created. */
        createdAt: string;
        /** The ISO 8601 timestamp when the file was last updated. */
        updatedAt: string;
        /** The link access setting for the Eraser file. */
        linkAccess: "no-link-access" | "anyone-with-link-can-edit" | "publicly-viewable" | "publicly-editable" | "sso-readable" | "sso-editable";
        [key: string]: unknown;
      };
    };
    /** Delete a diagram from an Eraser file. */
    "eraser.delete_diagram": {
      input: {
        /**
         * The unique Eraser file identifier.
         * @minLength 1
         */
        fileId: string;
        /**
         * The unique diagram identifier.
         * @minLength 1
         */
        diagramId: string;
      };
      output: {
        /** Whether the diagram was deleted. */
        deleted: boolean;
        /**
         * The URL of the file that contained the diagram.
         * @format uri
         */
        fileUrl: string;
      };
    };
    /** Render Eraser DSL into a diagram image and optional editable Eraser file. */
    "eraser.generate_diagram_from_dsl": {
      input: {
        /**
         * The Eraser DSL source to render.
         * @minLength 1
         */
        code: string;
        /** The Eraser diagram type. */
        diagramType: "sequence-diagram" | "entity-relationship-diagram" | "cloud-architecture-diagram" | "flowchart-diagram" | "bpmn-diagram";
        /** The rendering theme. */
        theme?: "light" | "dark";
        /** Whether the rendered image should use a solid background. */
        background?: boolean;
        /**
         * The image quality multiplier.
         * @minimum 1
         * @maximum 3
         */
        imageQuality?: number;
        /** Options for creating an editable Eraser file from the generated diagram. */
        fileOptions?: {
          /** Whether to create an Eraser file immediately. */
          create?: boolean;
          /** The link access setting for the Eraser file. */
          linkAccess?: "no-link-access" | "anyone-with-link-can-edit" | "publicly-viewable" | "publicly-editable" | "sso-readable" | "sso-editable";
        };
        /**
         * The title for a file created from the diagram.
         * @minLength 1
         */
        title?: string;
      };
      output: {
        /** The identifier of the AI generation request. */
        requestId?: string;
        /**
         * The URL of the generated PNG image.
         * @format uri
         */
        imageUrl?: string;
        /**
         * The URL for creating an editable Eraser file.
         * @format uri
         */
        createEraserFileUrl?: string;
        /**
         * The URL of the Eraser file created by the request.
         * @format uri
         */
        fileUrl?: string;
        /** The diagrams generated by Eraser. */
        diagrams?: Array<{
          /** The Eraser diagram type. */
          diagramType: "sequence-diagram" | "entity-relationship-diagram" | "cloud-architecture-diagram" | "flowchart-diagram" | "bpmn-diagram";
          /** The generated Eraser DSL source. */
          code: string;
          [key: string]: unknown;
        }>;
        /** Git repository file paths used as generation context. */
        relevantFilePaths?: Array<string>;
      };
    };
    /** Generate or revise an Eraser diagram from a natural-language prompt. */
    "eraser.generate_diagram_from_prompt": {
      input: {
        /**
         * The natural-language prompt or source text for the diagram.
         * @minLength 1
         */
        text: string;
        /** The Eraser diagram type. */
        diagramType?: "sequence-diagram" | "entity-relationship-diagram" | "cloud-architecture-diagram" | "flowchart-diagram" | "bpmn-diagram";
        /** The Eraser AI model tier. */
        mode?: "standard" | "premium";
        /**
         * A previous request identifier to revise.
         * @minLength 1
         */
        priorRequestId?: string;
        /**
         * The AI preset identifier to use as context.
         * @minLength 1
         */
        contextId?: string;
        /** Options for creating an editable Eraser file from the generated diagram. */
        fileOptions?: {
          /** Whether to create an Eraser file immediately. */
          create?: boolean;
          /** The link access setting for the Eraser file. */
          linkAccess?: "no-link-access" | "anyone-with-link-can-edit" | "publicly-viewable" | "publicly-editable" | "sso-readable" | "sso-editable";
        };
      };
      output: {
        /** The identifier of the AI generation request. */
        requestId?: string;
        /**
         * The URL of the generated PNG image.
         * @format uri
         */
        imageUrl?: string;
        /**
         * The URL for creating an editable Eraser file.
         * @format uri
         */
        createEraserFileUrl?: string;
        /**
         * The URL of the Eraser file created by the request.
         * @format uri
         */
        fileUrl?: string;
        /** The diagrams generated by Eraser. */
        diagrams?: Array<{
          /** The Eraser diagram type. */
          diagramType: "sequence-diagram" | "entity-relationship-diagram" | "cloud-architecture-diagram" | "flowchart-diagram" | "bpmn-diagram";
          /** The generated Eraser DSL source. */
          code: string;
          [key: string]: unknown;
        }>;
        /** Git repository file paths used as generation context. */
        relevantFilePaths?: Array<string>;
      };
    };
    /** Get one diagram from an Eraser file. */
    "eraser.get_diagram": {
      input: {
        /**
         * The unique Eraser file identifier.
         * @minLength 1
         */
        fileId: string;
        /**
         * The unique diagram identifier.
         * @minLength 1
         */
        diagramId: string;
      };
      output: {
        /** The unique diagram identifier. */
        id: string;
        /**
         * The URL for viewing the diagram in Eraser.
         * @format uri
         */
        diagramUrl: string;
        /** The Eraser diagram type. */
        diagramType: "sequence-diagram" | "entity-relationship-diagram" | "cloud-architecture-diagram" | "flowchart-diagram" | "bpmn-diagram";
        /** The Eraser DSL source for the diagram. */
        code: string;
        /** The ISO 8601 timestamp when the diagram was last updated. */
        updatedAt: string;
        [key: string]: unknown;
      };
    };
    /** Get an Eraser file and its current content. */
    "eraser.get_file": {
      input: {
        /**
         * The unique Eraser file identifier.
         * @minLength 1
         */
        fileId: string;
      };
      output: {
        /** The unique file identifier. */
        id: string;
        /**
         * The URL for viewing the file in Eraser.
         * @format uri
         */
        fileUrl: string;
        /** The file title. */
        title: string;
        /** The identifier of the file author. */
        author: string;
        /** The containing folder identifier, or null for the root. */
        folderId: string | null;
        /** The ISO 8601 timestamp when the file was created. */
        createdAt: string;
        /** The ISO 8601 timestamp when the file was last updated. */
        updatedAt: string;
        /** The link access setting for the Eraser file. */
        linkAccess: "no-link-access" | "anyone-with-link-can-edit" | "publicly-viewable" | "publicly-editable" | "sso-readable" | "sso-editable";
        [key: string]: unknown;
      };
    };
    /** List diagrams contained in an Eraser file. */
    "eraser.list_diagrams": {
      input: {
        /**
         * The unique Eraser file identifier.
         * @minLength 1
         */
        fileId: string;
      };
      output: Array<{
        /** The unique diagram identifier. */
        id: string;
        /**
         * The URL for viewing the diagram in Eraser.
         * @format uri
         */
        diagramUrl: string;
        /** The Eraser diagram type. */
        diagramType: "sequence-diagram" | "entity-relationship-diagram" | "cloud-architecture-diagram" | "flowchart-diagram" | "bpmn-diagram";
        /** The Eraser DSL source for the diagram. */
        code: string;
        /** The ISO 8601 timestamp when the diagram was last updated. */
        updatedAt: string;
        [key: string]: unknown;
      }>;
    };
    /** List files available to the authenticated Eraser team. */
    "eraser.list_files": {
      input: {
        /**
         * The maximum number of files to return, from 1 to 500.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * The cursor returned by a previous page.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The folder identifier used to filter files.
         * @minLength 1
         */
        folderId?: string;
        /** The field and direction used to sort files. */
        sort?: "createdAt" | "-createdAt" | "updatedAt" | "-updatedAt";
        /**
         * The user identifier or email address used to filter files.
         * @minLength 1
         */
        author?: string;
      };
      output: {
        /** The files in the current page. */
        files: Array<{
          /** The unique file identifier. */
          id: string;
          /**
           * The URL for viewing the file in Eraser.
           * @format uri
           */
          fileUrl: string;
          /** The file title. */
          title: string;
          /** The identifier of the file author. */
          author: string;
          /** The containing folder identifier, or null for the root. */
          folderId: string | null;
          /** The ISO 8601 timestamp when the file was created. */
          createdAt: string;
          /** The ISO 8601 timestamp when the file was last updated. */
          updatedAt: string;
          /** The link access setting for the Eraser file. */
          linkAccess: "no-link-access" | "anyone-with-link-can-edit" | "publicly-viewable" | "publicly-editable" | "sso-readable" | "sso-editable";
          [key: string]: unknown;
        }>;
        /** The next-page cursor, or null when no next page exists. */
        nextCursor: string | null;
      };
    };
    /** Replace the Eraser DSL source of a diagram in a file. */
    "eraser.update_diagram": {
      input: {
        /**
         * The unique Eraser file identifier.
         * @minLength 1
         */
        fileId: string;
        /**
         * The unique diagram identifier.
         * @minLength 1
         */
        diagramId: string;
        /**
         * The replacement Eraser DSL source.
         * @minLength 1
         */
        code: string;
      };
      output: {
        /** The unique diagram identifier. */
        id: string;
        /**
         * The URL for viewing the diagram in Eraser.
         * @format uri
         */
        diagramUrl: string;
        /** The Eraser diagram type. */
        diagramType: "sequence-diagram" | "entity-relationship-diagram" | "cloud-architecture-diagram" | "flowchart-diagram" | "bpmn-diagram";
        /** The Eraser DSL source for the diagram. */
        code: string;
        /** The ISO 8601 timestamp when the diagram was last updated. */
        updatedAt: string;
        [key: string]: unknown;
      };
    };
    /** Replace selected metadata or Markdown content of an Eraser file. */
    "eraser.update_file": {
      input: {
        /**
         * The unique Eraser file identifier.
         * @minLength 1
         */
        fileId: string;
        /**
         * The replacement file title.
         * @minLength 1
         */
        title?: string;
        /**
         * The folder to which the file should be moved.
         * @minLength 1
         */
        folderId?: string;
        /** The replacement Markdown document content. */
        document?: string;
      };
      output: {
        /** The unique file identifier. */
        id: string;
        /**
         * The URL for viewing the file in Eraser.
         * @format uri
         */
        fileUrl: string;
        /** The file title. */
        title: string;
        /** The identifier of the file author. */
        author: string;
        /** The containing folder identifier, or null for the root. */
        folderId: string | null;
        /** The ISO 8601 timestamp when the file was created. */
        createdAt: string;
        /** The ISO 8601 timestamp when the file was last updated. */
        updatedAt: string;
        /** The link access setting for the Eraser file. */
        linkAccess: "no-link-access" | "anyone-with-link-can-edit" | "publicly-viewable" | "publicly-editable" | "sso-readable" | "sso-editable";
        [key: string]: unknown;
      };
    };
  }
}
