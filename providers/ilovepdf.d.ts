import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add page numbers to PDFs with page selection, placement, and font options, returning the numbered PDF or ZIP. */
    "ilovepdf.add_page_numbers": {
      input: {
        /**
         * Source files in processing order.
         * @minItems 1
         */
        files: Array<{
          /**
           * The public URL of the source file, fetched by iLovePDF.
           * @format uri
           */
          fileUrl: string;
          /**
           * The original filename, including its extension.
           * @minLength 1
           */
          filename: string;
          /** Rotation in degrees applied before processing. Defaults to 0. */
          rotate?: 0 | 90 | 180 | 270;
          /** The password required to open this source file. */
          password?: string;
        }>;
        /** The jurisdiction where files are uploaded and processed. Omit to use iLovePDF's default. */
        region?: "eu" | "us" | "fr" | "de" | "pl" | "in" | "sg";
        /** PDF metadata inserted or modified in the processed document. */
        meta?: {
          /** The title of the document. */
          Title?: string;
          /** The name of the person who created the document. */
          Author?: string;
          /** The subject of the document. */
          Subject?: string;
          /** Keywords associated with the document. */
          Keywords?: string;
          /** The application that created the original document. */
          Creator?: string;
          /** The application that converted the document to PDF. */
          Producer?: string;
          /** The document creation date and time in human-readable form. */
          CreationDate?: string;
          /** The last modification date and time in human-readable form. */
          ModDate?: string;
          /** Whether the document contains trapping information. */
          Trapped?: "true" | "false" | "unknown";
        };
        /** Continue when some files are damaged or fail; at least one file must succeed. Defaults to true. */
        ignoreErrors?: boolean;
        /** Continue when some files require a password; at least one file must be processable. Defaults to false. */
        ignorePassword?: boolean;
        /** Output filename template. Supports {date}, {n}, {filename}, and {tool}. */
        outputFilename?: string;
        /** ZIP filename template for multiple output files. Supports {date}, {n}, {filename}, and {tool}; defaults to output. */
        packagedFilename?: string;
        /** The 16, 24, or 32 character key used to encrypt files at rest on iLovePDF throughout this task. */
        fileEncryptionKey?: unknown;
        /** Attempt to repair PDF files that fail processing. Defaults to true. */
        tryPdfRepair?: boolean;
        /** Attempt to repair image files that fail processing. Defaults to true. */
        tryImageRepair?: boolean;
        /** An integer associated with the task for later filtering. */
        customInt?: number;
        /** A custom string associated with the task. */
        customString?: string;
        /** Position page numbers symmetrically on facing pages. Defaults to false. */
        facingPages?: boolean;
        /** Treat the first page as a cover and leave it unnumbered. Defaults to false. */
        firstCover?: boolean;
        /**
         * Pages to number, such as all, 3-end, 1,3,4-9, -2-end, or 3-234. Defaults to all.
         * @minLength 1
         */
        pages?: string;
        /** The first page number to use. Defaults to 1. */
        startingNumber?: number;
        /** Vertical position of page numbers. Defaults to bottom. */
        verticalPosition?: "bottom" | "top";
        /** Horizontal position of page numbers; facing pages use symmetric positions. Defaults to center. */
        horizontalPosition?: "left" | "center" | "right";
        /** Vertical offset from the standard position in pixels; positive and negative values are accepted. */
        verticalPositionAdjustment?: number;
        /** Horizontal offset from the standard position in pixels; positive and negative values are accepted. */
        horizontalPositionAdjustment?: number;
        /** Page number font family. Defaults to Arial Unicode MS. */
        fontFamily?: "Arial" | "Arial Unicode MS" | "Verdana" | "Courier" | "Times New Roman" | "Comic Sans MS" | "WenQuanYi Zen Hei" | "Lohit Marathi";
        /** Page number font size. Defaults to 14. */
        fontSize?: number;
        /** Hexadecimal page number color. Defaults to #000000. */
        fontColor?: string;
        /** Page number template using {n} for the current number and {p} for the total pages; null displays only the number. Defaults to {n}. */
        text?: string | null;
      };
      output: {
        /** A processed file, or a ZIP archive when processing produces multiple files. */
        file: {
          /** The downloaded artifact filename. */
          name: string;
          /** The downloaded artifact MIME type. */
          mimetype: string;
          /**
           * The transit URL for downloading the processed artifact.
           * @format uri
           */
          s3url: string;
          /**
           * The downloaded artifact size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
        /**
         * The iLovePDF task identifier.
         * @minLength 1
         */
        task: string;
        /**
         * The iLovePDF server assigned to the task.
         * @minLength 1
         */
        server: string;
        /** The upstream processing result, including available warnings and processing statistics. */
        result: Record<string, unknown>;
      };
    };
    /** Compress PDF files from public URLs and return the processed PDF or ZIP. */
    "ilovepdf.compress_pdf": {
      input: {
        /**
         * Source files in processing order.
         * @minItems 1
         */
        files: Array<{
          /**
           * The public URL of the source file, fetched by iLovePDF.
           * @format uri
           */
          fileUrl: string;
          /**
           * The original filename, including its extension.
           * @minLength 1
           */
          filename: string;
          /** Rotation in degrees applied before processing. Defaults to 0. */
          rotate?: 0 | 90 | 180 | 270;
          /** The password required to open this source file. */
          password?: string;
        }>;
        /** The jurisdiction where files are uploaded and processed. Omit to use iLovePDF's default. */
        region?: "eu" | "us" | "fr" | "de" | "pl" | "in" | "sg";
        /** PDF metadata inserted or modified in the processed document. */
        meta?: {
          /** The title of the document. */
          Title?: string;
          /** The name of the person who created the document. */
          Author?: string;
          /** The subject of the document. */
          Subject?: string;
          /** Keywords associated with the document. */
          Keywords?: string;
          /** The application that created the original document. */
          Creator?: string;
          /** The application that converted the document to PDF. */
          Producer?: string;
          /** The document creation date and time in human-readable form. */
          CreationDate?: string;
          /** The last modification date and time in human-readable form. */
          ModDate?: string;
          /** Whether the document contains trapping information. */
          Trapped?: "true" | "false" | "unknown";
        };
        /** Continue when some files are damaged or fail; at least one file must succeed. Defaults to true. */
        ignoreErrors?: boolean;
        /** Continue when some files require a password; at least one file must be processable. Defaults to false. */
        ignorePassword?: boolean;
        /** Output filename template. Supports {date}, {n}, {filename}, and {tool}. */
        outputFilename?: string;
        /** ZIP filename template for multiple output files. Supports {date}, {n}, {filename}, and {tool}; defaults to output. */
        packagedFilename?: string;
        /** The 16, 24, or 32 character key used to encrypt files at rest on iLovePDF throughout this task. */
        fileEncryptionKey?: unknown;
        /** Attempt to repair PDF files that fail processing. Defaults to true. */
        tryPdfRepair?: boolean;
        /** Attempt to repair image files that fail processing. Defaults to true. */
        tryImageRepair?: boolean;
        /** An integer associated with the task for later filtering. */
        customInt?: number;
        /** A custom string associated with the task. */
        customString?: string;
        /** Compression strength. Defaults to recommended. */
        compressionLevel?: "extreme" | "recommended" | "low";
      };
      output: {
        /** A processed file, or a ZIP archive when processing produces multiple files. */
        file: {
          /** The downloaded artifact filename. */
          name: string;
          /** The downloaded artifact MIME type. */
          mimetype: string;
          /**
           * The transit URL for downloading the processed artifact.
           * @format uri
           */
          s3url: string;
          /**
           * The downloaded artifact size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
        /**
         * The iLovePDF task identifier.
         * @minLength 1
         */
        task: string;
        /**
         * The iLovePDF server assigned to the task.
         * @minLength 1
         */
        server: string;
        /** The upstream processing result, including available warnings and processing statistics. */
        result: Record<string, unknown>;
      };
    };
    /** Convert PDFs to the requested PDF/A conformance level for archiving and return the PDF or ZIP. */
    "ilovepdf.convert_to_pdfa": {
      input: {
        /**
         * Source files in processing order.
         * @minItems 1
         */
        files: Array<{
          /**
           * The public URL of the source file, fetched by iLovePDF.
           * @format uri
           */
          fileUrl: string;
          /**
           * The original filename, including its extension.
           * @minLength 1
           */
          filename: string;
          /** Rotation in degrees applied before processing. Defaults to 0. */
          rotate?: 0 | 90 | 180 | 270;
          /** The password required to open this source file. */
          password?: string;
        }>;
        /** The jurisdiction where files are uploaded and processed. Omit to use iLovePDF's default. */
        region?: "eu" | "us" | "fr" | "de" | "pl" | "in" | "sg";
        /** PDF metadata inserted or modified in the processed document. */
        meta?: {
          /** The title of the document. */
          Title?: string;
          /** The name of the person who created the document. */
          Author?: string;
          /** The subject of the document. */
          Subject?: string;
          /** Keywords associated with the document. */
          Keywords?: string;
          /** The application that created the original document. */
          Creator?: string;
          /** The application that converted the document to PDF. */
          Producer?: string;
          /** The document creation date and time in human-readable form. */
          CreationDate?: string;
          /** The last modification date and time in human-readable form. */
          ModDate?: string;
          /** Whether the document contains trapping information. */
          Trapped?: "true" | "false" | "unknown";
        };
        /** Continue when some files are damaged or fail; at least one file must succeed. Defaults to true. */
        ignoreErrors?: boolean;
        /** Continue when some files require a password; at least one file must be processable. Defaults to false. */
        ignorePassword?: boolean;
        /** Output filename template. Supports {date}, {n}, {filename}, and {tool}. */
        outputFilename?: string;
        /** ZIP filename template for multiple output files. Supports {date}, {n}, {filename}, and {tool}; defaults to output. */
        packagedFilename?: string;
        /** The 16, 24, or 32 character key used to encrypt files at rest on iLovePDF throughout this task. */
        fileEncryptionKey?: unknown;
        /** Attempt to repair PDF files that fail processing. Defaults to true. */
        tryPdfRepair?: boolean;
        /** Attempt to repair image files that fail processing. Defaults to true. */
        tryImageRepair?: boolean;
        /** An integer associated with the task for later filtering. */
        customInt?: number;
        /** A custom string associated with the task. */
        customString?: string;
        /** The requested PDF/A conformance level. Defaults to pdfa-2b. */
        conformance?: "pdfa-1b" | "pdfa-1a" | "pdfa-2b" | "pdfa-2u" | "pdfa-2a" | "pdfa-3b" | "pdfa-3u" | "pdfa-3a";
        /** Allow a lower conformance level if conversion fails. Defaults to true. */
        allowDowngrade?: boolean;
      };
      output: {
        /** A processed file, or a ZIP archive when processing produces multiple files. */
        file: {
          /** The downloaded artifact filename. */
          name: string;
          /** The downloaded artifact MIME type. */
          mimetype: string;
          /**
           * The transit URL for downloading the processed artifact.
           * @format uri
           */
          s3url: string;
          /**
           * The downloaded artifact size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
        /**
         * The iLovePDF task identifier.
         * @minLength 1
         */
        task: string;
        /**
         * The iLovePDF server assigned to the task.
         * @minLength 1
         */
        server: string;
        /** The upstream processing result, including available warnings and processing statistics. */
        result: Record<string, unknown>;
      };
    };
    /** Extract text from PDFs and return text files or a ZIP, optionally including page, position, and font details. */
    "ilovepdf.extract_text": {
      input: {
        /**
         * Source files in processing order.
         * @minItems 1
         */
        files: Array<{
          /**
           * The public URL of the source file, fetched by iLovePDF.
           * @format uri
           */
          fileUrl: string;
          /**
           * The original filename, including its extension.
           * @minLength 1
           */
          filename: string;
          /** Rotation in degrees applied before processing. Defaults to 0. */
          rotate?: 0 | 90 | 180 | 270;
          /** The password required to open this source file. */
          password?: string;
        }>;
        /** The jurisdiction where files are uploaded and processed. Omit to use iLovePDF's default. */
        region?: "eu" | "us" | "fr" | "de" | "pl" | "in" | "sg";
        /** PDF metadata inserted or modified in the processed document. */
        meta?: {
          /** The title of the document. */
          Title?: string;
          /** The name of the person who created the document. */
          Author?: string;
          /** The subject of the document. */
          Subject?: string;
          /** Keywords associated with the document. */
          Keywords?: string;
          /** The application that created the original document. */
          Creator?: string;
          /** The application that converted the document to PDF. */
          Producer?: string;
          /** The document creation date and time in human-readable form. */
          CreationDate?: string;
          /** The last modification date and time in human-readable form. */
          ModDate?: string;
          /** Whether the document contains trapping information. */
          Trapped?: "true" | "false" | "unknown";
        };
        /** Continue when some files are damaged or fail; at least one file must succeed. Defaults to true. */
        ignoreErrors?: boolean;
        /** Continue when some files require a password; at least one file must be processable. Defaults to false. */
        ignorePassword?: boolean;
        /** Output filename template. Supports {date}, {n}, {filename}, and {tool}. */
        outputFilename?: string;
        /** ZIP filename template for multiple output files. Supports {date}, {n}, {filename}, and {tool}; defaults to output. */
        packagedFilename?: string;
        /** The 16, 24, or 32 character key used to encrypt files at rest on iLovePDF throughout this task. */
        fileEncryptionKey?: unknown;
        /** Attempt to repair PDF files that fail processing. Defaults to true. */
        tryPdfRepair?: boolean;
        /** Attempt to repair image files that fail processing. Defaults to true. */
        tryImageRepair?: boolean;
        /** An integer associated with the task for later filtering. */
        customInt?: number;
        /** A custom string associated with the task. */
        customString?: string;
        /** Include comma-separated PageNo, XPos, YPos, Width, FontName, FontSize, Length, and Text properties. */
        detailed?: boolean;
      };
      output: {
        /** A processed file, or a ZIP archive when processing produces multiple files. */
        file: {
          /** The downloaded artifact filename. */
          name: string;
          /** The downloaded artifact MIME type. */
          mimetype: string;
          /**
           * The transit URL for downloading the processed artifact.
           * @format uri
           */
          s3url: string;
          /**
           * The downloaded artifact size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
        /**
         * The iLovePDF task identifier.
         * @minLength 1
         */
        task: string;
        /**
         * The iLovePDF server assigned to the task.
         * @minLength 1
         */
        server: string;
        /** The upstream processing result, including available warnings and processing statistics. */
        result: Record<string, unknown>;
      };
    };
    /** Convert images from public URLs to PDF with page layout and merge options, returning the resulting PDF or ZIP. */
    "ilovepdf.image_to_pdf": {
      input: {
        /**
         * Source files in processing order.
         * @minItems 1
         */
        files: Array<{
          /**
           * The public URL of the source file, fetched by iLovePDF.
           * @format uri
           */
          fileUrl: string;
          /**
           * The original filename, including its extension.
           * @minLength 1
           */
          filename: string;
          /** Rotation in degrees applied before processing. Defaults to 0. */
          rotate?: 0 | 90 | 180 | 270;
          /** The password required to open this source file. */
          password?: string;
        }>;
        /** The jurisdiction where files are uploaded and processed. Omit to use iLovePDF's default. */
        region?: "eu" | "us" | "fr" | "de" | "pl" | "in" | "sg";
        /** PDF metadata inserted or modified in the processed document. */
        meta?: {
          /** The title of the document. */
          Title?: string;
          /** The name of the person who created the document. */
          Author?: string;
          /** The subject of the document. */
          Subject?: string;
          /** Keywords associated with the document. */
          Keywords?: string;
          /** The application that created the original document. */
          Creator?: string;
          /** The application that converted the document to PDF. */
          Producer?: string;
          /** The document creation date and time in human-readable form. */
          CreationDate?: string;
          /** The last modification date and time in human-readable form. */
          ModDate?: string;
          /** Whether the document contains trapping information. */
          Trapped?: "true" | "false" | "unknown";
        };
        /** Continue when some files are damaged or fail; at least one file must succeed. Defaults to true. */
        ignoreErrors?: boolean;
        /** Continue when some files require a password; at least one file must be processable. Defaults to false. */
        ignorePassword?: boolean;
        /** Output filename template. Supports {date}, {n}, {filename}, and {tool}. */
        outputFilename?: string;
        /** ZIP filename template for multiple output files. Supports {date}, {n}, {filename}, and {tool}; defaults to output. */
        packagedFilename?: string;
        /** The 16, 24, or 32 character key used to encrypt files at rest on iLovePDF throughout this task. */
        fileEncryptionKey?: unknown;
        /** Attempt to repair PDF files that fail processing. Defaults to true. */
        tryPdfRepair?: boolean;
        /** Attempt to repair image files that fail processing. Defaults to true. */
        tryImageRepair?: boolean;
        /** An integer associated with the task for later filtering. */
        customInt?: number;
        /** A custom string associated with the task. */
        customString?: string;
        /** PDF page orientation. Defaults to portrait. */
        orientation?: "portrait" | "landscape";
        /**
         * Image margin in pixels in the output PDF. Defaults to 0.
         * @minimum 0
         */
        margin?: number;
        /** PDF page size; fit matches the source image size. Defaults to fit. */
        pageSize?: "fit" | "A4" | "letter";
        /** Combine all converted images into one PDF. Defaults to true. */
        mergeAfter?: boolean;
      };
      output: {
        /** A processed file, or a ZIP archive when processing produces multiple files. */
        file: {
          /** The downloaded artifact filename. */
          name: string;
          /** The downloaded artifact MIME type. */
          mimetype: string;
          /**
           * The transit URL for downloading the processed artifact.
           * @format uri
           */
          s3url: string;
          /**
           * The downloaded artifact size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
        /**
         * The iLovePDF task identifier.
         * @minLength 1
         */
        task: string;
        /**
         * The iLovePDF server assigned to the task.
         * @minLength 1
         */
        server: string;
        /** The upstream processing result, including available warnings and processing statistics. */
        result: Record<string, unknown>;
      };
    };
    /** Merge PDF files from public URLs in the supplied order and return a downloadable PDF. */
    "ilovepdf.merge_pdf": {
      input: {
        /**
         * PDF files to merge in the supplied order.
         * @minItems 2
         */
        files: Array<{
          /**
           * The public URL of the source file, fetched by iLovePDF.
           * @format uri
           */
          fileUrl: string;
          /**
           * The original filename, including its extension.
           * @minLength 1
           */
          filename: string;
          /** Rotation in degrees applied before processing. Defaults to 0. */
          rotate?: 0 | 90 | 180 | 270;
          /** The password required to open this source file. */
          password?: string;
        }>;
        /** The jurisdiction where files are uploaded and processed. Omit to use iLovePDF's default. */
        region?: "eu" | "us" | "fr" | "de" | "pl" | "in" | "sg";
        /** PDF metadata inserted or modified in the processed document. */
        meta?: {
          /** The title of the document. */
          Title?: string;
          /** The name of the person who created the document. */
          Author?: string;
          /** The subject of the document. */
          Subject?: string;
          /** Keywords associated with the document. */
          Keywords?: string;
          /** The application that created the original document. */
          Creator?: string;
          /** The application that converted the document to PDF. */
          Producer?: string;
          /** The document creation date and time in human-readable form. */
          CreationDate?: string;
          /** The last modification date and time in human-readable form. */
          ModDate?: string;
          /** Whether the document contains trapping information. */
          Trapped?: "true" | "false" | "unknown";
        };
        /** Continue when some files are damaged or fail; at least one file must succeed. Defaults to true. */
        ignoreErrors?: boolean;
        /** Continue when some files require a password; at least one file must be processable. Defaults to false. */
        ignorePassword?: boolean;
        /** Output filename template. Supports {date}, {n}, {filename}, and {tool}. */
        outputFilename?: string;
        /** ZIP filename template for multiple output files. Supports {date}, {n}, {filename}, and {tool}; defaults to output. */
        packagedFilename?: string;
        /** The 16, 24, or 32 character key used to encrypt files at rest on iLovePDF throughout this task. */
        fileEncryptionKey?: unknown;
        /** Attempt to repair PDF files that fail processing. Defaults to true. */
        tryPdfRepair?: boolean;
        /** Attempt to repair image files that fail processing. Defaults to true. */
        tryImageRepair?: boolean;
        /** An integer associated with the task for later filtering. */
        customInt?: number;
        /** A custom string associated with the task. */
        customString?: string;
      };
      output: {
        /** A processed file, or a ZIP archive when processing produces multiple files. */
        file: {
          /** The downloaded artifact filename. */
          name: string;
          /** The downloaded artifact MIME type. */
          mimetype: string;
          /**
           * The transit URL for downloading the processed artifact.
           * @format uri
           */
          s3url: string;
          /**
           * The downloaded artifact size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
        /**
         * The iLovePDF task identifier.
         * @minLength 1
         */
        task: string;
        /**
         * The iLovePDF server assigned to the task.
         * @minLength 1
         */
        server: string;
        /** The upstream processing result, including available warnings and processing statistics. */
        result: Record<string, unknown>;
      };
    };
    /** Recognize text in scanned PDFs using the selected OCR languages and return searchable PDFs or a ZIP. */
    "ilovepdf.ocr_pdf": {
      input: {
        /**
         * Source files in processing order.
         * @minItems 1
         */
        files: Array<{
          /**
           * The public URL of the source file, fetched by iLovePDF.
           * @format uri
           */
          fileUrl: string;
          /**
           * The original filename, including its extension.
           * @minLength 1
           */
          filename: string;
          /** Rotation in degrees applied before processing. Defaults to 0. */
          rotate?: 0 | 90 | 180 | 270;
          /** The password required to open this source file. */
          password?: string;
        }>;
        /** The jurisdiction where files are uploaded and processed. Omit to use iLovePDF's default. */
        region?: "eu" | "us" | "fr" | "de" | "pl" | "in" | "sg";
        /** PDF metadata inserted or modified in the processed document. */
        meta?: {
          /** The title of the document. */
          Title?: string;
          /** The name of the person who created the document. */
          Author?: string;
          /** The subject of the document. */
          Subject?: string;
          /** Keywords associated with the document. */
          Keywords?: string;
          /** The application that created the original document. */
          Creator?: string;
          /** The application that converted the document to PDF. */
          Producer?: string;
          /** The document creation date and time in human-readable form. */
          CreationDate?: string;
          /** The last modification date and time in human-readable form. */
          ModDate?: string;
          /** Whether the document contains trapping information. */
          Trapped?: "true" | "false" | "unknown";
        };
        /** Continue when some files are damaged or fail; at least one file must succeed. Defaults to true. */
        ignoreErrors?: boolean;
        /** Continue when some files require a password; at least one file must be processable. Defaults to false. */
        ignorePassword?: boolean;
        /** Output filename template. Supports {date}, {n}, {filename}, and {tool}. */
        outputFilename?: string;
        /** ZIP filename template for multiple output files. Supports {date}, {n}, {filename}, and {tool}; defaults to output. */
        packagedFilename?: string;
        /** The 16, 24, or 32 character key used to encrypt files at rest on iLovePDF throughout this task. */
        fileEncryptionKey?: unknown;
        /** Attempt to repair PDF files that fail processing. Defaults to true. */
        tryPdfRepair?: boolean;
        /** Attempt to repair image files that fail processing. Defaults to true. */
        tryImageRepair?: boolean;
        /** An integer associated with the task for later filtering. */
        customInt?: number;
        /** A custom string associated with the task. */
        customString?: string;
        /**
         * OCR languages to apply. Defaults to English (eng).
         * @minItems 1
         */
        ocrLanguages?: Array<"eng" | "afr" | "amh" | "ara" | "asm" | "aze" | "aze_cyrl" | "bel" | "ben" | "bod" | "bos" | "bre" | "bul" | "cat" | "ceb" | "ces" | "chi_sim" | "chi_tra" | "chr" | "cos" | "cym" | "dan" | "deu" | "deu_latf" | "dzo" | "ell" | "enm" | "epo" | "equ" | "est" | "eus" | "fao" | "fas" | "fil" | "fin" | "fra" | "frm" | "fry" | "gla" | "gle" | "glg" | "grc" | "guj" | "hat" | "heb" | "hin" | "hrv" | "hun" | "hye" | "iku" | "ind" | "isl" | "ita" | "ita_old" | "jav" | "jpn" | "kan" | "kat" | "kat_old" | "kaz" | "khm" | "kir" | "kmr" | "kor" | "kor_vert" | "lao" | "lat" | "lav" | "lit" | "ltz" | "mal" | "mar" | "mkd" | "mlt" | "mon" | "mri" | "msa" | "mya" | "nep" | "nld" | "nor" | "oci" | "ori" | "pan" | "pol" | "por" | "pus" | "que" | "ron" | "rus" | "san" | "sin" | "slk" | "slv" | "snd" | "spa" | "spa_old" | "sqi" | "srp" | "srp_latn" | "sun" | "swa" | "swe" | "syr" | "tam" | "tat" | "tel" | "tgk" | "tgl" | "tha" | "tir" | "ton" | "tur" | "uig" | "ukr" | "urd" | "uzb" | "uzb_cyrl" | "vie" | "yid" | "yor">;
      };
      output: {
        /** A processed file, or a ZIP archive when processing produces multiple files. */
        file: {
          /** The downloaded artifact filename. */
          name: string;
          /** The downloaded artifact MIME type. */
          mimetype: string;
          /**
           * The transit URL for downloading the processed artifact.
           * @format uri
           */
          s3url: string;
          /**
           * The downloaded artifact size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
        /**
         * The iLovePDF task identifier.
         * @minLength 1
         */
        task: string;
        /**
         * The iLovePDF server assigned to the task.
         * @minLength 1
         */
        server: string;
        /** The upstream processing result, including available warnings and processing statistics. */
        result: Record<string, unknown>;
      };
    };
    /** Convert Office documents from public URLs to PDF and return the resulting PDF or ZIP. */
    "ilovepdf.office_to_pdf": {
      input: {
        /**
         * Source files in processing order.
         * @minItems 1
         */
        files: Array<{
          /**
           * The public URL of the source file, fetched by iLovePDF.
           * @format uri
           */
          fileUrl: string;
          /**
           * The original filename, including its extension.
           * @minLength 1
           */
          filename: string;
          /** Rotation in degrees applied before processing. Defaults to 0. */
          rotate?: 0 | 90 | 180 | 270;
          /** The password required to open this source file. */
          password?: string;
        }>;
        /** The jurisdiction where files are uploaded and processed. Omit to use iLovePDF's default. */
        region?: "eu" | "us" | "fr" | "de" | "pl" | "in" | "sg";
        /** PDF metadata inserted or modified in the processed document. */
        meta?: {
          /** The title of the document. */
          Title?: string;
          /** The name of the person who created the document. */
          Author?: string;
          /** The subject of the document. */
          Subject?: string;
          /** Keywords associated with the document. */
          Keywords?: string;
          /** The application that created the original document. */
          Creator?: string;
          /** The application that converted the document to PDF. */
          Producer?: string;
          /** The document creation date and time in human-readable form. */
          CreationDate?: string;
          /** The last modification date and time in human-readable form. */
          ModDate?: string;
          /** Whether the document contains trapping information. */
          Trapped?: "true" | "false" | "unknown";
        };
        /** Continue when some files are damaged or fail; at least one file must succeed. Defaults to true. */
        ignoreErrors?: boolean;
        /** Continue when some files require a password; at least one file must be processable. Defaults to false. */
        ignorePassword?: boolean;
        /** Output filename template. Supports {date}, {n}, {filename}, and {tool}. */
        outputFilename?: string;
        /** ZIP filename template for multiple output files. Supports {date}, {n}, {filename}, and {tool}; defaults to output. */
        packagedFilename?: string;
        /** The 16, 24, or 32 character key used to encrypt files at rest on iLovePDF throughout this task. */
        fileEncryptionKey?: unknown;
        /** Attempt to repair PDF files that fail processing. Defaults to true. */
        tryPdfRepair?: boolean;
        /** Attempt to repair image files that fail processing. Defaults to true. */
        tryImageRepair?: boolean;
        /** An integer associated with the task for later filtering. */
        customInt?: number;
        /** A custom string associated with the task. */
        customString?: string;
      };
      output: {
        /** A processed file, or a ZIP archive when processing produces multiple files. */
        file: {
          /** The downloaded artifact filename. */
          name: string;
          /** The downloaded artifact MIME type. */
          mimetype: string;
          /**
           * The transit URL for downloading the processed artifact.
           * @format uri
           */
          s3url: string;
          /**
           * The downloaded artifact size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
        /**
         * The iLovePDF task identifier.
         * @minLength 1
         */
        task: string;
        /**
         * The iLovePDF server assigned to the task.
         * @minLength 1
         */
        server: string;
        /** The upstream processing result, including available warnings and processing statistics. */
        result: Record<string, unknown>;
      };
    };
    /** Convert PDF pages to JPG images or extract embedded images, returning the resulting image or ZIP. */
    "ilovepdf.pdf_to_image": {
      input: {
        /**
         * Source files in processing order.
         * @minItems 1
         */
        files: Array<{
          /**
           * The public URL of the source file, fetched by iLovePDF.
           * @format uri
           */
          fileUrl: string;
          /**
           * The original filename, including its extension.
           * @minLength 1
           */
          filename: string;
          /** Rotation in degrees applied before processing. Defaults to 0. */
          rotate?: 0 | 90 | 180 | 270;
          /** The password required to open this source file. */
          password?: string;
        }>;
        /** The jurisdiction where files are uploaded and processed. Omit to use iLovePDF's default. */
        region?: "eu" | "us" | "fr" | "de" | "pl" | "in" | "sg";
        /** PDF metadata inserted or modified in the processed document. */
        meta?: {
          /** The title of the document. */
          Title?: string;
          /** The name of the person who created the document. */
          Author?: string;
          /** The subject of the document. */
          Subject?: string;
          /** Keywords associated with the document. */
          Keywords?: string;
          /** The application that created the original document. */
          Creator?: string;
          /** The application that converted the document to PDF. */
          Producer?: string;
          /** The document creation date and time in human-readable form. */
          CreationDate?: string;
          /** The last modification date and time in human-readable form. */
          ModDate?: string;
          /** Whether the document contains trapping information. */
          Trapped?: "true" | "false" | "unknown";
        };
        /** Continue when some files are damaged or fail; at least one file must succeed. Defaults to true. */
        ignoreErrors?: boolean;
        /** Continue when some files require a password; at least one file must be processable. Defaults to false. */
        ignorePassword?: boolean;
        /** Output filename template. Supports {date}, {n}, {filename}, and {tool}. */
        outputFilename?: string;
        /** ZIP filename template for multiple output files. Supports {date}, {n}, {filename}, and {tool}; defaults to output. */
        packagedFilename?: string;
        /** The 16, 24, or 32 character key used to encrypt files at rest on iLovePDF throughout this task. */
        fileEncryptionKey?: unknown;
        /** Attempt to repair PDF files that fail processing. Defaults to true. */
        tryPdfRepair?: boolean;
        /** Attempt to repair image files that fail processing. Defaults to true. */
        tryImageRepair?: boolean;
        /** An integer associated with the task for later filtering. */
        customInt?: number;
        /** A custom string associated with the task. */
        customString?: string;
        /** Convert all pages to JPG images, or extract embedded images. Defaults to pages. */
        pdfjpgMode?: "pages" | "extract";
      };
      output: {
        /** A processed file, or a ZIP archive when processing produces multiple files. */
        file: {
          /** The downloaded artifact filename. */
          name: string;
          /** The downloaded artifact MIME type. */
          mimetype: string;
          /**
           * The transit URL for downloading the processed artifact.
           * @format uri
           */
          s3url: string;
          /**
           * The downloaded artifact size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
        /**
         * The iLovePDF task identifier.
         * @minLength 1
         */
        task: string;
        /**
         * The iLovePDF server assigned to the task.
         * @minLength 1
         */
        server: string;
        /** The upstream processing result, including available warnings and processing statistics. */
        result: Record<string, unknown>;
      };
    };
    /** Encrypt PDF files with an output password and return the protected PDF or ZIP. */
    "ilovepdf.protect_pdf": {
      input: {
        /**
         * Source files in processing order.
         * @minItems 1
         */
        files: Array<{
          /**
           * The public URL of the source file, fetched by iLovePDF.
           * @format uri
           */
          fileUrl: string;
          /**
           * The original filename, including its extension.
           * @minLength 1
           */
          filename: string;
          /** Rotation in degrees applied before processing. Defaults to 0. */
          rotate?: 0 | 90 | 180 | 270;
          /** The password required to open this source file. */
          password?: string;
        }>;
        /** The jurisdiction where files are uploaded and processed. Omit to use iLovePDF's default. */
        region?: "eu" | "us" | "fr" | "de" | "pl" | "in" | "sg";
        /** PDF metadata inserted or modified in the processed document. */
        meta?: {
          /** The title of the document. */
          Title?: string;
          /** The name of the person who created the document. */
          Author?: string;
          /** The subject of the document. */
          Subject?: string;
          /** Keywords associated with the document. */
          Keywords?: string;
          /** The application that created the original document. */
          Creator?: string;
          /** The application that converted the document to PDF. */
          Producer?: string;
          /** The document creation date and time in human-readable form. */
          CreationDate?: string;
          /** The last modification date and time in human-readable form. */
          ModDate?: string;
          /** Whether the document contains trapping information. */
          Trapped?: "true" | "false" | "unknown";
        };
        /** Continue when some files are damaged or fail; at least one file must succeed. Defaults to true. */
        ignoreErrors?: boolean;
        /** Continue when some files require a password; at least one file must be processable. Defaults to false. */
        ignorePassword?: boolean;
        /** Output filename template. Supports {date}, {n}, {filename}, and {tool}. */
        outputFilename?: string;
        /** ZIP filename template for multiple output files. Supports {date}, {n}, {filename}, and {tool}; defaults to output. */
        packagedFilename?: string;
        /** The 16, 24, or 32 character key used to encrypt files at rest on iLovePDF throughout this task. */
        fileEncryptionKey?: unknown;
        /** Attempt to repair PDF files that fail processing. Defaults to true. */
        tryPdfRepair?: boolean;
        /** Attempt to repair image files that fail processing. Defaults to true. */
        tryImageRepair?: boolean;
        /** An integer associated with the task for later filtering. */
        customInt?: number;
        /** A custom string associated with the task. */
        customString?: string;
        /**
         * The password used to encrypt the output PDFs.
         * @minLength 1
         */
        outputPassword: string;
      };
      output: {
        /** A processed file, or a ZIP archive when processing produces multiple files. */
        file: {
          /** The downloaded artifact filename. */
          name: string;
          /** The downloaded artifact MIME type. */
          mimetype: string;
          /**
           * The transit URL for downloading the processed artifact.
           * @format uri
           */
          s3url: string;
          /**
           * The downloaded artifact size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
        /**
         * The iLovePDF task identifier.
         * @minLength 1
         */
        task: string;
        /**
         * The iLovePDF server assigned to the task.
         * @minLength 1
         */
        server: string;
        /** The upstream processing result, including available warnings and processing statistics. */
        result: Record<string, unknown>;
      };
    };
    /** Attempt to recover damaged PDF files and return the repaired PDF or ZIP. */
    "ilovepdf.repair_pdf": {
      input: {
        /**
         * Source files in processing order.
         * @minItems 1
         */
        files: Array<{
          /**
           * The public URL of the source file, fetched by iLovePDF.
           * @format uri
           */
          fileUrl: string;
          /**
           * The original filename, including its extension.
           * @minLength 1
           */
          filename: string;
          /** Rotation in degrees applied before processing. Defaults to 0. */
          rotate?: 0 | 90 | 180 | 270;
          /** The password required to open this source file. */
          password?: string;
        }>;
        /** The jurisdiction where files are uploaded and processed. Omit to use iLovePDF's default. */
        region?: "eu" | "us" | "fr" | "de" | "pl" | "in" | "sg";
        /** PDF metadata inserted or modified in the processed document. */
        meta?: {
          /** The title of the document. */
          Title?: string;
          /** The name of the person who created the document. */
          Author?: string;
          /** The subject of the document. */
          Subject?: string;
          /** Keywords associated with the document. */
          Keywords?: string;
          /** The application that created the original document. */
          Creator?: string;
          /** The application that converted the document to PDF. */
          Producer?: string;
          /** The document creation date and time in human-readable form. */
          CreationDate?: string;
          /** The last modification date and time in human-readable form. */
          ModDate?: string;
          /** Whether the document contains trapping information. */
          Trapped?: "true" | "false" | "unknown";
        };
        /** Continue when some files are damaged or fail; at least one file must succeed. Defaults to true. */
        ignoreErrors?: boolean;
        /** Continue when some files require a password; at least one file must be processable. Defaults to false. */
        ignorePassword?: boolean;
        /** Output filename template. Supports {date}, {n}, {filename}, and {tool}. */
        outputFilename?: string;
        /** ZIP filename template for multiple output files. Supports {date}, {n}, {filename}, and {tool}; defaults to output. */
        packagedFilename?: string;
        /** The 16, 24, or 32 character key used to encrypt files at rest on iLovePDF throughout this task. */
        fileEncryptionKey?: unknown;
        /** Attempt to repair PDF files that fail processing. Defaults to true. */
        tryPdfRepair?: boolean;
        /** Attempt to repair image files that fail processing. Defaults to true. */
        tryImageRepair?: boolean;
        /** An integer associated with the task for later filtering. */
        customInt?: number;
        /** A custom string associated with the task. */
        customString?: string;
      };
      output: {
        /** A processed file, or a ZIP archive when processing produces multiple files. */
        file: {
          /** The downloaded artifact filename. */
          name: string;
          /** The downloaded artifact MIME type. */
          mimetype: string;
          /**
           * The transit URL for downloading the processed artifact.
           * @format uri
           */
          s3url: string;
          /**
           * The downloaded artifact size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
        /**
         * The iLovePDF task identifier.
         * @minLength 1
         */
        task: string;
        /**
         * The iLovePDF server assigned to the task.
         * @minLength 1
         */
        server: string;
        /** The upstream processing result, including available warnings and processing statistics. */
        result: Record<string, unknown>;
      };
    };
    /** Rotate each PDF by its per-file rotate value and return the processed PDF or ZIP. */
    "ilovepdf.rotate_pdf": {
      input: {
        /**
         * PDF files and their required rotation angles.
         * @minItems 1
         */
        files: Array<{
          /**
           * The public URL of the source file, fetched by iLovePDF.
           * @format uri
           */
          fileUrl: string;
          /**
           * The original filename, including its extension.
           * @minLength 1
           */
          filename: string;
          /** Rotation in degrees applied to this PDF. */
          rotate: 0 | 90 | 180 | 270;
          /** The password required to open this source file. */
          password?: string;
        }>;
        /** The jurisdiction where files are uploaded and processed. Omit to use iLovePDF's default. */
        region?: "eu" | "us" | "fr" | "de" | "pl" | "in" | "sg";
        /** PDF metadata inserted or modified in the processed document. */
        meta?: {
          /** The title of the document. */
          Title?: string;
          /** The name of the person who created the document. */
          Author?: string;
          /** The subject of the document. */
          Subject?: string;
          /** Keywords associated with the document. */
          Keywords?: string;
          /** The application that created the original document. */
          Creator?: string;
          /** The application that converted the document to PDF. */
          Producer?: string;
          /** The document creation date and time in human-readable form. */
          CreationDate?: string;
          /** The last modification date and time in human-readable form. */
          ModDate?: string;
          /** Whether the document contains trapping information. */
          Trapped?: "true" | "false" | "unknown";
        };
        /** Continue when some files are damaged or fail; at least one file must succeed. Defaults to true. */
        ignoreErrors?: boolean;
        /** Continue when some files require a password; at least one file must be processable. Defaults to false. */
        ignorePassword?: boolean;
        /** Output filename template. Supports {date}, {n}, {filename}, and {tool}. */
        outputFilename?: string;
        /** ZIP filename template for multiple output files. Supports {date}, {n}, {filename}, and {tool}; defaults to output. */
        packagedFilename?: string;
        /** The 16, 24, or 32 character key used to encrypt files at rest on iLovePDF throughout this task. */
        fileEncryptionKey?: unknown;
        /** Attempt to repair PDF files that fail processing. Defaults to true. */
        tryPdfRepair?: boolean;
        /** Attempt to repair image files that fail processing. Defaults to true. */
        tryImageRepair?: boolean;
        /** An integer associated with the task for later filtering. */
        customInt?: number;
        /** A custom string associated with the task. */
        customString?: string;
      };
      output: {
        /** A processed file, or a ZIP archive when processing produces multiple files. */
        file: {
          /** The downloaded artifact filename. */
          name: string;
          /** The downloaded artifact MIME type. */
          mimetype: string;
          /**
           * The transit URL for downloading the processed artifact.
           * @format uri
           */
          s3url: string;
          /**
           * The downloaded artifact size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
        /**
         * The iLovePDF task identifier.
         * @minLength 1
         */
        task: string;
        /**
         * The iLovePDF server assigned to the task.
         * @minLength 1
         */
        server: string;
        /** The upstream processing result, including available warnings and processing statistics. */
        result: Record<string, unknown>;
      };
    };
    /** Split PDFs by page ranges, fixed page counts, or file size, or remove selected pages, and return the resulting file or ZIP. */
    "ilovepdf.split_pdf": {
      input: (unknown) & (unknown) & (unknown);
      output: {
        /** A processed file, or a ZIP archive when processing produces multiple files. */
        file: {
          /** The downloaded artifact filename. */
          name: string;
          /** The downloaded artifact MIME type. */
          mimetype: string;
          /**
           * The transit URL for downloading the processed artifact.
           * @format uri
           */
          s3url: string;
          /**
           * The downloaded artifact size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
        /**
         * The iLovePDF task identifier.
         * @minLength 1
         */
        task: string;
        /**
         * The iLovePDF server assigned to the task.
         * @minLength 1
         */
        server: string;
        /** The upstream processing result, including available warnings and processing statistics. */
        result: Record<string, unknown>;
      };
    };
    /** Remove password protection from PDFs and return the unlocked PDF or ZIP. Supply each source file's opening password when needed. */
    "ilovepdf.unlock_pdf": {
      input: {
        /**
         * Source files in processing order.
         * @minItems 1
         */
        files: Array<{
          /**
           * The public URL of the source file, fetched by iLovePDF.
           * @format uri
           */
          fileUrl: string;
          /**
           * The original filename, including its extension.
           * @minLength 1
           */
          filename: string;
          /** Rotation in degrees applied before processing. Defaults to 0. */
          rotate?: 0 | 90 | 180 | 270;
          /** The password required to open this source file. */
          password?: string;
        }>;
        /** The jurisdiction where files are uploaded and processed. Omit to use iLovePDF's default. */
        region?: "eu" | "us" | "fr" | "de" | "pl" | "in" | "sg";
        /** PDF metadata inserted or modified in the processed document. */
        meta?: {
          /** The title of the document. */
          Title?: string;
          /** The name of the person who created the document. */
          Author?: string;
          /** The subject of the document. */
          Subject?: string;
          /** Keywords associated with the document. */
          Keywords?: string;
          /** The application that created the original document. */
          Creator?: string;
          /** The application that converted the document to PDF. */
          Producer?: string;
          /** The document creation date and time in human-readable form. */
          CreationDate?: string;
          /** The last modification date and time in human-readable form. */
          ModDate?: string;
          /** Whether the document contains trapping information. */
          Trapped?: "true" | "false" | "unknown";
        };
        /** Continue when some files are damaged or fail; at least one file must succeed. Defaults to true. */
        ignoreErrors?: boolean;
        /** Continue when some files require a password; at least one file must be processable. Defaults to false. */
        ignorePassword?: boolean;
        /** Output filename template. Supports {date}, {n}, {filename}, and {tool}. */
        outputFilename?: string;
        /** ZIP filename template for multiple output files. Supports {date}, {n}, {filename}, and {tool}; defaults to output. */
        packagedFilename?: string;
        /** The 16, 24, or 32 character key used to encrypt files at rest on iLovePDF throughout this task. */
        fileEncryptionKey?: unknown;
        /** Attempt to repair PDF files that fail processing. Defaults to true. */
        tryPdfRepair?: boolean;
        /** Attempt to repair image files that fail processing. Defaults to true. */
        tryImageRepair?: boolean;
        /** An integer associated with the task for later filtering. */
        customInt?: number;
        /** A custom string associated with the task. */
        customString?: string;
      };
      output: {
        /** A processed file, or a ZIP archive when processing produces multiple files. */
        file: {
          /** The downloaded artifact filename. */
          name: string;
          /** The downloaded artifact MIME type. */
          mimetype: string;
          /**
           * The transit URL for downloading the processed artifact.
           * @format uri
           */
          s3url: string;
          /**
           * The downloaded artifact size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
        /**
         * The iLovePDF task identifier.
         * @minLength 1
         */
        task: string;
        /**
         * The iLovePDF server assigned to the task.
         * @minLength 1
         */
        server: string;
        /** The upstream processing result, including available warnings and processing statistics. */
        result: Record<string, unknown>;
      };
    };
    /** Validate PDFs against the requested PDF/A conformance level and return per-file validation results without downloading a file. */
    "ilovepdf.validate_pdfa": {
      input: {
        /**
         * Source files in processing order.
         * @minItems 1
         */
        files: Array<{
          /**
           * The public URL of the source file, fetched by iLovePDF.
           * @format uri
           */
          fileUrl: string;
          /**
           * The original filename, including its extension.
           * @minLength 1
           */
          filename: string;
          /** Rotation in degrees applied before processing. Defaults to 0. */
          rotate?: 0 | 90 | 180 | 270;
          /** The password required to open this source file. */
          password?: string;
        }>;
        /** The jurisdiction where files are uploaded and processed. Omit to use iLovePDF's default. */
        region?: "eu" | "us" | "fr" | "de" | "pl" | "in" | "sg";
        /** PDF metadata inserted or modified in the processed document. */
        meta?: {
          /** The title of the document. */
          Title?: string;
          /** The name of the person who created the document. */
          Author?: string;
          /** The subject of the document. */
          Subject?: string;
          /** Keywords associated with the document. */
          Keywords?: string;
          /** The application that created the original document. */
          Creator?: string;
          /** The application that converted the document to PDF. */
          Producer?: string;
          /** The document creation date and time in human-readable form. */
          CreationDate?: string;
          /** The last modification date and time in human-readable form. */
          ModDate?: string;
          /** Whether the document contains trapping information. */
          Trapped?: "true" | "false" | "unknown";
        };
        /** Continue when some files are damaged or fail; at least one file must succeed. Defaults to true. */
        ignoreErrors?: boolean;
        /** Continue when some files require a password; at least one file must be processable. Defaults to false. */
        ignorePassword?: boolean;
        /** Output filename template. Supports {date}, {n}, {filename}, and {tool}. */
        outputFilename?: string;
        /** ZIP filename template for multiple output files. Supports {date}, {n}, {filename}, and {tool}; defaults to output. */
        packagedFilename?: string;
        /** The 16, 24, or 32 character key used to encrypt files at rest on iLovePDF throughout this task. */
        fileEncryptionKey?: unknown;
        /** Attempt to repair PDF files that fail processing. Defaults to true. */
        tryPdfRepair?: boolean;
        /** Attempt to repair image files that fail processing. Defaults to true. */
        tryImageRepair?: boolean;
        /** An integer associated with the task for later filtering. */
        customInt?: number;
        /** A custom string associated with the task. */
        customString?: string;
        /** The requested PDF/A conformance level. Defaults to pdfa-2b. */
        conformance?: "pdfa-1b" | "pdfa-1a" | "pdfa-2b" | "pdfa-2u" | "pdfa-2a" | "pdfa-3b" | "pdfa-3u" | "pdfa-3a";
        /** Allow a lower conformance level if conversion fails. Defaults to true. */
        allowDowngrade?: boolean;
      };
      output: {
        /**
         * The iLovePDF task identifier.
         * @minLength 1
         */
        task: string;
        /**
         * The iLovePDF server assigned to the task.
         * @minLength 1
         */
        server: string;
        /** The PDF/A validation results returned for the uploaded files. */
        validations: Array<{
          /** The uploaded filename assigned by iLovePDF. */
          server_filename?: string;
          /** The upstream PDF/A validation status. */
          status?: string;
          [key: string]: unknown;
        }>;
        /** The upstream processing result, including available warnings and processing statistics. */
        result: Record<string, unknown>;
      };
    };
  }
}
