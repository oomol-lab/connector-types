import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the current monthly and grace quota usage for screenshotbase. */
    "screenshotbase.get_quota_status": {
      input: Record<string, never>;
      output: {
        /** The screenshotbase account identifier when returned. */
        accountId: number | null;
        /** One screenshotbase quota bucket. */
        month: {
          /** The total requests available in this quota bucket. */
          total: number;
          /** The requests already used in this quota bucket. */
          used: number;
          /** The requests remaining in this quota bucket. */
          remaining: number;
        };
        /** The grace quota bucket when available for the account. */
        grace: {
          /** The total requests available in this quota bucket. */
          total: number;
          /** The requests already used in this quota bucket. */
          used: number;
          /** The requests remaining in this quota bucket. */
          remaining: number;
        } | null;
      };
    };
    /** Capture a webpage with screenshotbase and return a hosted screenshot URL. */
    "screenshotbase.take_screenshot": {
      input: {
        /**
         * The complete HTTP or HTTPS webpage URL to capture.
         * @format uri
         */
        url: string;
        /** The image format for the hosted screenshot. */
        format?: "jpg" | "jpeg" | "png" | "gif" | "webp";
        /** The image quality to use when the format is jpg. */
        quality?: number;
        /** Whether to capture the full scrollable page. */
        fullPage?: boolean;
        /** The browser viewport width in pixels. */
        viewportWidth?: number;
        /** The browser viewport height in pixels. */
        viewportHeight?: number;
        /**
         * The browser device pixel ratio.
         * @minimum 0.5
         * @maximum 3
         */
        deviceScaleFactor?: number;
        /** The lowercase ISO 3166-1 alpha-2 country code for the capture exit IP. */
        ipCountryCode?: "ae" | "al" | "am" | "ar" | "at" | "au" | "az" | "ba" | "bd" | "be" | "bg" | "bh" | "bn" | "bo" | "br" | "bw" | "by" | "ca" | "cg" | "ch" | "cl" | "cm" | "cn" | "co" | "cr" | "cy" | "cz" | "de" | "dk" | "do" | "dz" | "ec" | "ee" | "eg" | "es" | "fi" | "fr" | "gb" | "ge" | "gh" | "gr" | "gt" | "hk" | "hr" | "hu" | "id" | "ie" | "il" | "im" | "in" | "iq" | "is" | "it" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "kr" | "kw" | "kz" | "la" | "li" | "lk" | "lt" | "lu" | "lv" | "ma" | "md" | "mk" | "mm" | "mo" | "mw" | "mx" | "my" | "mz" | "ng" | "nl" | "no" | "nz" | "om" | "pa" | "pe" | "ph" | "pk" | "pl" | "pr" | "pt" | "py" | "qa" | "ro" | "rs" | "ru" | "sa" | "sc" | "se" | "sg" | "si" | "sk" | "sl" | "th" | "tj" | "tm" | "tn" | "tr" | "tw" | "tz" | "ua" | "us" | "uy" | "uz" | "ve" | "vn" | "za" | "zm" | "zw";
        /**
         * The seconds to wait after page load before capture.
         * @minimum 0
         * @maximum 30
         */
        delay?: number;
        /**
         * The navigation timeout in seconds.
         * @minimum 5
         * @maximum 60
         */
        timeout?: number;
        /** The browser lifecycle event to wait for before capture. */
        waitUntil?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2";
        /** Whether to attempt to hide cookie-consent banners. */
        blockCookieBanners?: boolean;
        /** Whether to attempt to block advertisements. */
        blockAds?: boolean;
        /** Whether to attempt to hide chat widgets. */
        blockChats?: boolean;
        /** The CSS selectors of elements to hide before capture. */
        hideSelectors?: Array<string>;
        /**
         * The custom CSS to inject before capture.
         * @maxLength 10000
         */
        styles?: string;
        /**
         * The output filename without an extension.
         * @maxLength 255
         */
        attachmentName?: string;
      };
      output: {
        /**
         * The public URL of the generated screenshot.
         * @format uri
         */
        url: string;
      };
    };
  }
}
