import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Compress one PDF document with Encodian and return the optimized PDF file as base64 content. */
    "encodian.compress_pdf": {
      input: {
        /**
         * The base64-encoded PDF document content to process.
         * @minLength 1
         */
        fileContent: string;
        /** Whether Encodian should compress images embedded in the PDF document. */
        compressImages?: boolean;
        /**
         * The image quality percentage used when image compression is enabled.
         * @minimum 1
         * @maximum 100
         */
        imageQuality?: number;
        /**
         * The maximum image resolution in DPI before Encodian scales oversized images down.
         * @exclusiveMinimum 0
         */
        maxResolution?: number;
        /** Whether Encodian should resize images larger than the maximum resolution. */
        resizeImages?: boolean;
        /** Whether Encodian should remove private PDF metadata from the document. */
        removePrivateInfo?: boolean;
        /** Whether Encodian should remove unused PDF objects from the document. */
        removeUnusedObjects?: boolean;
        /** Whether Encodian should remove unused PDF resource streams. */
        removeUnusedStreams?: boolean;
        /** Whether Encodian should deduplicate identical PDF resource streams. */
        linkDuplicateStreams?: boolean;
        /** Whether Encodian should reuse identical page content while optimizing pages. */
        allowReusePageContent?: boolean;
        /** Whether Encodian should remove embedded fonts from the document. */
        unembedFonts?: boolean;
        /** Whether Encodian should flatten annotations into the PDF content. */
        flattenAnnotations?: boolean;
        /** Whether Encodian should delete annotations from the PDF document. */
        deleteAnnotations?: boolean;
        /** Whether Encodian should flatten AcroForm fields into the PDF content. */
        flattenFields?: boolean;
      };
      output: {
        /** The output PDF file name returned by Encodian when available. */
        filename: string | null;
        /** The processed PDF document content returned by Encodian as a base64 string. */
        fileContent: string;
        /** The Encodian operation identifier returned for this request when available. */
        operationId: string | null;
        /** The Encodian operation status returned for this request when available. */
        operationStatus: string | null;
        /** Any Encodian error messages echoed with the response. */
        errors: Array<string>;
      };
    };
    /** Extract selected pages from one PDF document and return the resulting PDF file as base64 content. */
    "encodian.extract_pdf_pages": {
      input: {
        /**
         * The base64-encoded PDF document content to process.
         * @minLength 1
         */
        fileContent: string;
        /**
         * The first one-based page number to extract.
         * @exclusiveMinimum 0
         */
        startPage?: number;
        /**
         * The last one-based page number to extract. Leave empty to continue to the final page.
         * @exclusiveMinimum 0
         */
        endPage?: number;
        /**
         * A comma-separated list of one-based page numbers to extract, such as '1,3,4'.
         * @minLength 1
         */
        pageNumbers?: string;
      };
      output: {
        /** The output PDF file name returned by Encodian when available. */
        filename: string | null;
        /** The processed PDF document content returned by Encodian as a base64 string. */
        fileContent: string;
        /** The Encodian operation identifier returned for this request when available. */
        operationId: string | null;
        /** The Encodian operation status returned for this request when available. */
        operationStatus: string | null;
        /** Any Encodian error messages echoed with the response. */
        errors: Array<string>;
      };
    };
    /** Extract the text layer from one PDF document with optional page-range and encoding controls. */
    "encodian.get_pdf_text_layer": {
      input: {
        /**
         * The source PDF file name, including the .pdf extension required by Encodian.
         * @minLength 1
         */
        fileName: string;
        /**
         * The base64-encoded PDF document content to process.
         * @minLength 1
         */
        fileContent: string;
        /**
         * The first one-based page number to include when extracting the text layer.
         * @exclusiveMinimum 0
         */
        startPage?: number;
        /**
         * The last one-based page number to include when extracting the text layer.
         * @exclusiveMinimum 0
         */
        endPage?: number;
        /** The text encoding Encodian should use for the extracted PDF text layer. */
        textEncodingType?: "Default" | "Latin1" | "BigEndianUnicode" | "UTF16" | "UTF8" | "UTF7" | "ASCII";
      };
      output: {
        /** The PDF text layer extracted by Encodian. */
        textLayer: string;
        /** The PDF file name echoed by Encodian when available. */
        filename: string | null;
        /** The Encodian operation identifier returned for this request when available. */
        operationId: string | null;
        /** The Encodian operation status returned for this request when available. */
        operationStatus: string | null;
        /** Any Encodian error messages echoed with the response. */
        errors: Array<string>;
      };
    };
    /** Encrypt one PDF document with optional open and edit passwords, then return the protected PDF as base64 content. */
    "encodian.secure_pdf_document": {
      input: {
        /**
         * The source PDF file name, including the .pdf extension required by Encodian.
         * @minLength 1
         */
        fileName: string;
        /**
         * The base64-encoded PDF document content to process.
         * @minLength 1
         */
        fileContent: string;
        /**
         * Optional password required to open the protected PDF document.
         * @minLength 1
         */
        userPassword?: string;
        /**
         * Optional password required to edit the protected PDF document.
         * @minLength 1
         */
        adminPassword?: string;
        /** The Encodian privilege mode applied to the protected PDF document. */
        pdfPrivileges?: "AllowAll" | "DenyAll" | "Specific";
        /** The cryptographic algorithm Encodian should use for PDF encryption. */
        cryptoAlgorithm?: "RC4x40" | "RC4x128" | "AESx128" | "AESx256";
        /** Whether document assembly should be permitted when privileges are Specific. */
        pdfPrivilegesAllowAssembly?: boolean;
        /** Whether content copying should be permitted when privileges are Specific. */
        pdfPrivilegesAllowCopy?: boolean;
        /** Whether form filling should be permitted when privileges are Specific. */
        pdfPrivilegesAllowFillIn?: boolean;
        /** Whether printing should be permitted when privileges are Specific. */
        pdfPrivilegesAllowPrint?: boolean;
        /** Whether screen-reader extraction should be permitted when privileges are Specific. */
        pdfPrivilegesAllowScreenReaders?: boolean;
        /** Whether content modification should be permitted when privileges are Specific. */
        pdfPrivilegesAllowModifyContents?: boolean;
        /** Whether annotation modification should be permitted when privileges are Specific. */
        pdfPrivilegesAllowModifyAnnotations?: boolean;
      };
      output: {
        /** The output PDF file name returned by Encodian when available. */
        filename: string | null;
        /** The processed PDF document content returned by Encodian as a base64 string. */
        fileContent: string;
        /** The Encodian operation identifier returned for this request when available. */
        operationId: string | null;
        /** The Encodian operation status returned for this request when available. */
        operationStatus: string | null;
        /** Any Encodian error messages echoed with the response. */
        errors: Array<string>;
      };
    };
    /** Remove password protection from one PDF document and return the unlocked PDF as base64 content. */
    "encodian.unlock_pdf_document": {
      input: {
        /**
         * The source PDF file name, including the .pdf extension required by Encodian.
         * @minLength 1
         */
        fileName: string;
        /**
         * The base64-encoded PDF document content to process.
         * @minLength 1
         */
        fileContent: string;
        /**
         * The password Encodian should use to unlock the PDF document.
         * @minLength 1
         */
        password: string;
      };
      output: {
        /** The output PDF file name returned by Encodian when available. */
        filename: string | null;
        /** The processed PDF document content returned by Encodian as a base64 string. */
        fileContent: string;
        /** The Encodian operation identifier returned for this request when available. */
        operationId: string | null;
        /** The Encodian operation status returned for this request when available. */
        operationStatus: string | null;
        /** Any Encodian error messages echoed with the response. */
        errors: Array<string>;
      };
    };
  }
}
