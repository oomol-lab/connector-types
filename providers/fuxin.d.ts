import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Submit one PDF for scanned-page detection in Foxit. */
    "fuxin.check_pages_are_scanned": {
      input: {
        /** An existing Foxit document ID returned by upload_file or a previous task. */
        docId?: string;
        /** A file uploaded as multipart when docId is omitted. */
        file?: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
        /** The optional page range, such as 1-30, 1,3,5, or all. */
        pageRange?: string;
      };
      output: {
        /** The Foxit task identifier. */
        taskId: string;
        /** The upstream parameter validation issues returned by Foxit, if any. */
        checkParams?: Array<unknown> | null;
      };
    };
    /** Compare two PDF documents with Foxit and submit a diff task. */
    "fuxin.compare_documents": {
      input: {
        /** The Foxit document ID for the baseline PDF when baseFile is omitted. */
        baseDocId?: string;
        /** The baseline PDF uploaded when baseDocId is omitted. */
        baseFile?: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
        /** The Foxit document ID for the comparison PDF when compareFile is omitted. */
        compareDocId?: string;
        /** The comparison PDF uploaded when compareDocId is omitted. */
        compareFile?: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
        /** Whether Foxit should return a JSON diff or a rendered PDF diff. */
        resultType?: "json" | "pdf";
        /** Whether Foxit should compare all changes or only text changes. */
        compareType?: "all" | "text";
      };
      output: {
        /** The Foxit task identifier. */
        taskId: string;
        /** The upstream parameter validation issues returned by Foxit, if any. */
        checkParams?: Array<unknown> | null;
      };
    };
    /** Compress one PDF with a chosen Foxit compression level. */
    "fuxin.compress_document": {
      input: {
        /** An existing Foxit document ID returned by upload_file or a previous task. */
        docId?: string;
        /** A file uploaded as multipart when docId is omitted. */
        file?: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
        /** The Foxit compression level to apply. */
        compressionLevel: "high" | "medium" | "low";
      };
      output: {
        /** The Foxit task identifier. */
        taskId: string;
        /** The upstream parameter validation issues returned by Foxit, if any. */
        checkParams?: Array<unknown> | null;
      };
    };
    /** Convert one PDF into Word, Excel, PowerPoint, image, or text with Foxit. */
    "fuxin.convert_document": {
      input: {
        /** An existing Foxit document ID returned by upload_file or a previous task. */
        docId?: string;
        /** A file uploaded as multipart when docId is omitted. */
        file?: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
        /** The target format that Foxit should convert the PDF into. */
        outputFormat: "word" | "excel" | "ppt" | "image" | "text";
        /** Optional image conversion settings used only when outputFormat is image. */
        imageConfig?: {
          /** The output image DPI between 1 and 1000 when outputFormat is image. */
          dpi?: number;
          /** The page range when outputFormat is image, such as 1,3,5, 1-89, all, even, or odd. */
          pageRange?: string;
        };
      };
      output: {
        /** The Foxit task identifier. */
        taskId: string;
        /** The upstream parameter validation issues returned by Foxit, if any. */
        checkParams?: Array<unknown> | null;
      };
    };
    /** Convert one Office document into a ZIP of page images with Foxit. */
    "fuxin.convert_office_document_to_images": {
      input: {
        /** An existing Foxit document ID returned by upload_file or a previous task. */
        docId?: string;
        /** A file uploaded as multipart when docId is omitted. */
        file?: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
        /** The input Office document format that Foxit should convert to images. */
        format: "word" | "excel" | "ppt";
        /**
         * The output image DPI between 1 and 1000.
         * @minimum 1
         * @maximum 1000
         */
        dpi?: number;
        /** The image file suffix Foxit should generate for each page. */
        destImgSuffix?: ".bmp" | ".jpg" | ".jpeg" | ".png" | ".tif" | ".tiff" | ".jpx" | ".jp2";
      };
      output: {
        /** The Foxit task identifier. */
        taskId: string;
        /** The upstream parameter validation issues returned by Foxit, if any. */
        checkParams?: Array<unknown> | null;
      };
    };
    /** Create a PDF from a Word, Excel, PowerPoint, image, or text source in Foxit. */
    "fuxin.create_pdf_from_document": {
      input: {
        /** An existing Foxit document ID returned by upload_file or a previous task. */
        docId?: string;
        /** A file uploaded as multipart when docId is omitted. */
        file?: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
        /** The source document format that Foxit should convert into PDF. */
        inputFormat: "word" | "excel" | "ppt" | "image" | "text";
      };
      output: {
        /** The Foxit task identifier. */
        taskId: string;
        /** The upstream parameter validation issues returned by Foxit, if any. */
        checkParams?: Array<unknown> | null;
      };
    };
    /** Create a PDF from HTML content, an HTML file, or a webpage URL in Foxit. */
    "fuxin.create_pdf_from_html": {
      input: {
        /** Use a webpage URL as the HTML source. */
        format: "url";
        /** The webpage URL to convert. */
        url: string;
        /** Optional HTML-to-PDF conversion settings. */
        config?: {
          /** The output page width, greater than 16. */
          width?: number;
          /** The output page height, greater than 16. */
          height?: number;
          /** The page rotation where 0=0deg, 1=90deg, 2=180deg, and 3=270deg. */
          rotate?: number;
          /** The page mode where 0=single page and 1=multi-page. */
          pageMode?: number;
          /** The page scaling mode where 0=none, 1=fixed size, and 2=fit HTML content. */
          pageScaling?: number;
        };
      } | {
        /** An existing Foxit document ID returned by upload_file or a previous task. */
        docId?: string;
        /** A file uploaded as multipart when docId is omitted. */
        file?: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
        /** The HTML document format that Foxit should read from the source file. */
        format: "html" | "htm" | "shtml";
        /** Optional HTML-to-PDF conversion settings. */
        config?: {
          /** The output page width, greater than 16. */
          width?: number;
          /** The output page height, greater than 16. */
          height?: number;
          /** The page rotation where 0=0deg, 1=90deg, 2=180deg, and 3=270deg. */
          rotate?: number;
          /** The page mode where 0=single page and 1=multi-page. */
          pageMode?: number;
          /** The page scaling mode where 0=none, 1=fixed size, and 2=fit HTML content. */
          pageScaling?: number;
        };
      };
      output: {
        /** The Foxit task identifier. */
        taskId: string;
        /** The upstream parameter validation issues returned by Foxit, if any. */
        checkParams?: Array<unknown> | null;
      };
    };
    /** Download one Foxit result document and upload it to connector transit storage. */
    "fuxin.download_file": {
      input: {
        /** The Foxit document ID to download. */
        docId: string;
        /** Optional output file name passed through to Foxit download. */
        fileName?: string;
      };
      output: {
        /** The downloaded file uploaded to transit storage. */
        file: {
          /** The downloaded file name. */
          name: string;
          /** The MIME type of the downloaded file. */
          mimetype: string;
          /** The transit URL for downloading the file. */
          s3url: string;
        };
        /** The downloaded file size in bytes. */
        contentLength: number;
      };
    };
    /** Extract text or embedded images from one PDF with Foxit. */
    "fuxin.extract_document": {
      input: {
        /** An existing Foxit document ID returned by upload_file or a previous task. */
        docId?: string;
        /** A file uploaded as multipart when docId is omitted. */
        file?: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
        /** Whether Foxit should extract text or embedded images. */
        mode: "extractText" | "extractImages";
        /** The optional page range to extract, such as 1-30, 1,3,5, or all. */
        pageRange?: string;
      };
      output: {
        /** The Foxit task identifier. */
        taskId: string;
        /** The upstream parameter validation issues returned by Foxit, if any. */
        checkParams?: Array<unknown> | null;
      };
    };
    /** Flatten annotations and form fields into the page content of one PDF with Foxit. */
    "fuxin.flatten_document": {
      input: {
        /** An existing Foxit document ID returned by upload_file or a previous task. */
        docId?: string;
        /** A file uploaded as multipart when docId is omitted. */
        file?: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
        /** The optional page range, such as 1-30, 1,3,5, or all. */
        pageRange?: string;
      };
      output: {
        /** The Foxit task identifier. */
        taskId: string;
        /** The upstream parameter validation issues returned by Foxit, if any. */
        checkParams?: Array<unknown> | null;
      };
    };
    /** Submit one PDF for page-size and rotation analysis in Foxit. */
    "fuxin.get_pages_basic_info": {
      input: {
        /** An existing Foxit document ID returned by upload_file or a previous task. */
        docId?: string;
        /** A file uploaded as multipart when docId is omitted. */
        file?: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
        /** The optional page range, such as 1-30, 1,3,5, or all. */
        pageRange?: string;
      };
      output: {
        /** The Foxit task identifier. */
        taskId: string;
        /** The upstream parameter validation issues returned by Foxit, if any. */
        checkParams?: Array<unknown> | null;
      };
    };
    /** Fetch one Foxit task status and return the normalized task progress details. */
    "fuxin.get_task": {
      input: {
        /** The Foxit task ID to query. */
        taskId: string;
      };
      output: {
        /** The result document ID when the task has completed. */
        docId: string | null;
        /** The reported task completion percentage. */
        percentage: number | null;
        /** Whether Foxit reports the task as still running. */
        isRunning: boolean;
        /** The upstream detail message returned by Foxit, if any. */
        detail: string | null;
        /** The per-page scanned-page result returned by pages_is_scanned tasks. */
        pagesIsScannedResult: Record<string, boolean> | null;
        /** The page metadata returned by pages_basic_info tasks. */
        pagesInfo: Array<{
          /** The 1-based page index. */
          pageIndex: number;
          rotation: number | null;
          width: number | null;
          height: number | null;
        }> | null;
      };
    };
    /** Fetch the remaining Foxit Services API and Embed API quota for the connected credential. */
    "fuxin.get_user_stock": {
      input: Record<string, never>;
      output: {
        /** The Foxit PDF Services API stock summary, or null when absent. */
        serviceApiStock: {
          /** The total quota. */
          totalNum: number | null;
          /** The used quota. */
          usedNum: number | null;
          /** The remaining quota. */
          remainNum: number | null;
          /** The Unix timestamp in seconds when the quota expires. */
          expireTime: number | null;
          /** The Foxit stock type where 1=paid and 0=trial. */
          type: number | null;
        } | null;
        /** The Foxit Embed API stock summary, or null when absent. */
        embedApiStock: {
          /** The total quota. */
          totalNum: number | null;
          /** The used quota. */
          usedNum: number | null;
          /** The remaining quota. */
          remainNum: number | null;
          /** The Unix timestamp in seconds when the quota expires. */
          expireTime: number | null;
          /** The Foxit stock type where 1=paid and 0=trial. */
          type: number | null;
        } | null;
      };
    };
    /** Linearize one PDF to improve incremental web viewing in Foxit. */
    "fuxin.linearize_document": {
      input: {
        /** An existing Foxit document ID returned by upload_file or a previous task. */
        docId?: string;
        /** A file uploaded as multipart when docId is omitted. */
        file?: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
      };
      output: {
        /** The Foxit task identifier. */
        taskId: string;
        /** The upstream parameter validation issues returned by Foxit, if any. */
        checkParams?: Array<unknown> | null;
      };
    };
    /** Delete, rotate, or move PDF pages with Foxit. */
    "fuxin.manipulate_document_pages": {
      input: {
        /** An existing Foxit document ID returned by upload_file or a previous task. */
        docId?: string;
        /** A file uploaded as multipart when docId is omitted. */
        file?: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
        /** The ordered list of page manipulation operations. */
        config: Array<{
          /** The page operation type. */
          pageAction: "delete" | "rotate" | "move";
          /** The zero-based page indexes affected by the operation. */
          pages: Array<number>;
          /** The rotation angle where 0=0deg, 1=90deg, 2=180deg, and 3=270deg. */
          angle?: number;
          /** The target zero-based page index used by move operations. */
          destination?: number;
        }>;
      };
      output: {
        /** The Foxit task identifier. */
        taskId: string;
        /** The upstream parameter validation issues returned by Foxit, if any. */
        checkParams?: Array<unknown> | null;
      };
    };
    /** Merge multiple PDF documents into a single PDF with Foxit. */
    "fuxin.merge_documents": {
      input: {
        /**
         * The document IDs to merge in order.
         * @minItems 1
         */
        docIds?: Array<string>;
        /** A ZIP file that contains the documents to merge when docIds is omitted. */
        zipFile?: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
        /** Optional merge settings. */
        config?: {
          /** Whether Foxit should add bookmarks. */
          isAddBookmark?: boolean;
          /** Whether Foxit should add a table of contents. Foxit requires isAddBookmark to stay true. */
          isAddTOC?: boolean;
          /** Whether Foxit should continue merging when one source document fails. */
          isContinueMerge?: boolean;
          /** Whether Foxit should retain logical page numbers. */
          isRetainPageNum?: boolean;
          /** The bookmark level range used to generate a table of contents, such as 1 or 1-5. */
          bookmarkLevels?: string;
        };
      };
      output: {
        /** The Foxit task identifier. */
        taskId: string;
        /** The upstream parameter validation issues returned by Foxit, if any. */
        checkParams?: Array<unknown> | null;
      };
    };
    /** Run OCR on one PDF or image document with Foxit. */
    "fuxin.ocr_document": {
      input: {
        /** An existing Foxit document ID returned by upload_file or a previous task. */
        docId?: string;
        /** A file uploaded as multipart when docId is omitted. */
        file?: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
        /** The OCR language used by Foxit. */
        lang?: "eng" | "zho" | "zhs" | "zht" | "spa" | "fra" | "deu" | "jpn";
        /** The OCR output format returned by Foxit. */
        outputFormat?: "text" | "json";
      };
      output: {
        /** The Foxit task identifier. */
        taskId: string;
        /** The upstream parameter validation issues returned by Foxit, if any. */
        checkParams?: Array<unknown> | null;
      };
    };
    /** Protect one PDF with passwords and permissions in Foxit. */
    "fuxin.protect_document": {
      input: {
        /** An existing Foxit document ID returned by upload_file or a previous task. */
        docId?: string;
        /** A file uploaded as multipart when docId is omitted. */
        file?: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
        /** The password settings to apply. */
        passwordProtection: {
          /** The PDF user password. */
          userPassword?: string;
          /** The PDF owner password. */
          ownerPassword?: string;
        };
        /** The Foxit permission flags to keep on the protected PDF. */
        permission?: Array<"PRINT_LOW_QUALITY" | "PRINT_HIGH_QUALITY" | "EDIT_CONTENT" | "EDIT_FILL_AND_SIGN_FORM_FIELDS" | "EDIT_ANNOTATION" | "EDIT_DOCUMENT_ASSEMBLY" | "COPY_CONTENT">;
        /** The Foxit encryption algorithm used to protect the PDF. */
        encryptionAlgorithm: "AES_128" | "AES_256" | "RC4";
      };
      output: {
        /** The Foxit task identifier. */
        taskId: string;
        /** The upstream parameter validation issues returned by Foxit, if any. */
        checkParams?: Array<unknown> | null;
      };
    };
    /** Remove the password from one protected PDF with Foxit. */
    "fuxin.remove_password_from_document": {
      input: {
        /** An existing Foxit document ID returned by upload_file or a previous task. */
        docId?: string;
        /** A file uploaded as multipart when docId is omitted. */
        file?: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
        /** The password used to open the protected document before Foxit removes it. */
        password: string;
      };
      output: {
        /** The Foxit task identifier. */
        taskId: string;
        /** The upstream parameter validation issues returned by Foxit, if any. */
        checkParams?: Array<unknown> | null;
      };
    };
    /** Split one PDF into multiple smaller files with Foxit. */
    "fuxin.split_document": {
      input: {
        /** An existing Foxit document ID returned by upload_file or a previous task. */
        docId?: string;
        /** A file uploaded as multipart when docId is omitted. */
        file?: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
        /**
         * The number of pages that each split file should contain.
         * @exclusiveMinimum 0
         */
        pageCount: number;
      };
      output: {
        /** The Foxit task identifier. */
        taskId: string;
        /** The upstream parameter validation issues returned by Foxit, if any. */
        checkParams?: Array<unknown> | null;
      };
    };
    /** Upload one source file to Foxit Cloud API and return the reusable Foxit document ID. */
    "fuxin.upload_file": {
      input: {
        /** The file source to upload to Foxit. */
        file: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
      };
      output: {
        /** The uploaded file name returned by Foxit. */
        fileName: string;
        /** The uploaded Foxit document ID. */
        docId: string;
        /** The uploaded file size in bytes. */
        fileSize: number;
      };
    };
    /** Add a text or image watermark to one PDF with Foxit. */
    "fuxin.watermark_document": {
      input: {
        /** An existing Foxit document ID returned by upload_file or a previous task. */
        docId?: string;
        /** A file uploaded as multipart when docId is omitted. */
        file?: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
        /** An existing Foxit document ID for the watermark image when type is imageObject. */
        imageDocId?: string;
        /** A watermark image uploaded when imageDocId is omitted. */
        imageFile?: {
          /** Optional file name to use when uploading a multipart source to Foxit. */
          name?: string;
          /** Optional MIME type to use when uploading a multipart source to Foxit. */
          mimetype?: string;
          /** A public URL that the connector can download before uploading to Foxit. */
          url?: string;
          /** The Base64-encoded file content uploaded to Foxit as multipart. */
          contentBase64?: string;
        };
        /** The optional page range to watermark, such as 1-30, 1,3,5, or all. */
        pageRange?: string;
        /** Whether Foxit should use a text watermark or an image watermark. */
        type?: "textObject" | "imageObject";
        /** The watermark anchor position between 0 and 8. */
        position?: number;
        /** The horizontal watermark offset in points. */
        offsetX?: number;
        /** The vertical watermark offset in points. */
        offsetY?: number;
        /** Whether the watermark stays above page content where 1=true and 0=false. */
        flagOnTopOfPage?: number;
        /** Whether the watermark is excluded from printing where 1=true and 0=false. */
        flagNoPrint?: number;
        /** Whether the watermark is invisible where 1=true and 0=false. */
        flagInvisible?: number;
        /** The horizontal watermark scale factor. */
        scaleX?: number;
        /** The vertical watermark scale factor. */
        scaleY?: number;
        /** The watermark rotation angle. */
        rotation?: number;
        /** The watermark opacity between 0 and 100. */
        opacity?: number;
        /** The text watermark font configuration when type is textObject. */
        font?: {
          /** The watermark text content. */
          text: string;
          /** The watermark font size. */
          size?: number;
          /** The watermark font name. */
          fontName?: string;
          /** The watermark color such as #000000. */
          color?: string;
          /** The watermark font style where 0=normal and 1=underline. */
          style?: number;
          /** The text alignment where 0=left, 1=center, and 2=right. */
          alignment?: number;
          /** The line spacing value between 0 and 10. */
          lineSpace?: number;
        };
      };
      output: {
        /** The Foxit task identifier. */
        taskId: string;
        /** The upstream parameter validation issues returned by Foxit, if any. */
        checkParams?: Array<unknown> | null;
      };
    };
  }
}
