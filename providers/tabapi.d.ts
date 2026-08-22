import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Capture the first viewport of one public HTTP or HTTPS URL and return a temporary hosted PNG URL. */
    "tabapi.capture_url_screenshot": {
      input: {
        /**
         * The public HTTP or HTTPS URL to capture.
         * @maxLength 4096
         * @format uri
         */
        url: string;
        /** Optional screenshot rendering settings. */
        options?: {
          /** The first-viewport screenshot dimensions. */
          viewport?: {
            /**
             * The viewport width in pixels.
             * @minimum 320
             * @maximum 2560
             * @default 1920
             */
            width?: number;
            /**
             * The viewport height in pixels.
             * @minimum 240
             * @maximum 2160
             * @default 1080
             */
            height?: number;
          };
        };
      };
      output: {
        /** The source URL resolution details. */
        source: {
          /**
           * The URL submitted to TabAPI.
           * @format uri
           */
          requested_url: string;
          /**
           * The final URL after redirects.
           * @format uri
           */
          resolved_url: string;
          /**
           * The HTTP status returned by the resolved page.
           * @minimum 100
           * @maximum 399
           */
          http_status: number;
          [key: string]: unknown;
        };
        /** The metadata extracted from the fetched page. */
        page: {
          /** The extracted page title. */
          title: string | null;
          /** The extracted page description. */
          description: string | null;
          /** The detected page language. */
          language: string | null;
          /**
           * The detected publication timestamp.
           * @format date-time
           */
          published_at: string | null;
          /** The sanitized page metadata. */
          metadata: Record<string, string>;
          [key: string]: unknown;
        };
        /** The hosted screenshot output. */
        output: {
          /** The image format. */
          format: "png";
          /** The image MIME type. */
          mime_type: "image/png";
          /**
           * The temporary hosted PNG URL, guaranteed by TabAPI for at least 24 hours after the response.
           * @format uri
           */
          url: string;
          /**
           * The captured image width in pixels.
           * @minimum 1
           */
          width: number;
          /**
           * The captured image height in pixels.
           * @minimum 1
           */
          height: number;
          /**
           * The PNG size in bytes.
           * @minimum 1
           * @maximum 5242880
           */
          size_bytes: number;
          [key: string]: unknown;
        };
        /** Non-fatal warnings produced during screenshot capture. */
        warnings: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Fetch one public HTTP or HTTPS URL through TabAPI and return clean Markdown with page metadata. */
    "tabapi.extract_url_markdown": {
      input: {
        /**
         * The public HTTP or HTTPS URL to fetch and convert.
         * @maxLength 4096
         * @format uri
         */
        url: string;
      };
      output: {
        /** The source URL resolution details. */
        source: {
          /**
           * The URL submitted to TabAPI.
           * @format uri
           */
          requested_url: string;
          /**
           * The final URL after redirects.
           * @format uri
           */
          resolved_url: string;
          /**
           * The HTTP status returned by the resolved page.
           * @minimum 100
           * @maximum 399
           */
          http_status: number;
          [key: string]: unknown;
        };
        /** The metadata extracted from the fetched page. */
        page: {
          /** The extracted page title. */
          title: string | null;
          /** The extracted page description. */
          description: string | null;
          /** The detected page language. */
          language: string | null;
          /**
           * The detected publication timestamp.
           * @format date-time
           */
          published_at: string | null;
          /** The sanitized page metadata. */
          metadata: Record<string, string>;
          [key: string]: unknown;
        };
        /** The normalized Markdown output. */
        output: {
          /** The output format. */
          format: "markdown";
          /** The Markdown MIME type. */
          mime_type: "text/markdown; charset=utf-8";
          /**
           * The provider-normalized Markdown content.
           * @minLength 1
           */
          content: string;
          /** Whether the content reached the service safety limit. */
          truncated: boolean;
          [key: string]: unknown;
        };
        /** Non-fatal warnings produced during page conversion. */
        warnings: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Find domains whose homepages were observed displaying one Google AdSense publisher identifier. */
    "tabapi.find_adsense_publisher_sites": {
      input: {
        /**
         * The 16-digit AdSense publisher identifier, with or without the pub- prefix.
         * @pattern ^(?:pub-)?\d{16}$
         */
        pub_id: string;
      };
      output: {
        /**
         * The normalized AdSense publisher identifier.
         * @pattern ^pub-\d{16}$
         */
        publisher_id: string;
        /**
         * The total number of homepage matches reported by TabAPI.
         * @minimum 0
         */
        total_sites: number;
        /** The returned sample of normalized matching domains. */
        sites: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Resolve DNS records for one hostname through TabAPI's Cloudflare and Google DNS-over-HTTPS lookup. */
    "tabapi.get_dns_records": {
      input: {
        /**
         * The domain or hostname to query, such as vercel.com. Do not pass a complete URL.
         * @minLength 1
         * @pattern \S
         */
        domain: string;
        /** The DNS record type to resolve, or all for the supported record set. */
        type?: "NS" | "A" | "AAAA" | "MX" | "TXT" | "CNAME" | "all";
      };
      output: {
        /** The queried hostname. */
        domain: string;
        /** The DNS response code name, such as NOERROR or NXDOMAIN. */
        status: string;
        /** The selected DNS-over-HTTPS resolver. */
        resolver: "cloudflare" | "google";
        /** The returned DNS resource records. */
        records: Array<{
          /** The DNS record type by name. */
          type: string;
          /** The record owner name as returned by the resolver. */
          name: string;
          /** The authoritative record TTL in seconds. */
          ttl: number;
          /** The resolver-provided record value. */
          value: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve backlink overview metrics and a sample of top referring pages for one domain or hostname. */
    "tabapi.get_domain_backlinks": {
      input: {
        /**
         * The domain or hostname to query, such as vercel.com. Do not pass a complete URL.
         * @minLength 1
         * @pattern \S
         */
        domain: string;
      };
      output: {
        /** The normalized queried domain or hostname. */
        domain: string;
        /** Aggregate backlink metrics for the queried domain. */
        overview: {
          /**
           * The domain rating from 0 to 100.
           * @minimum 0
           * @maximum 100
           */
          domain_rating: number;
          /**
           * The total indexed backlink count.
           * @minimum 0
           */
          backlinks: number;
          /**
           * The total referring-domain count.
           * @minimum 0
           */
          referring_domains: number;
          /**
           * The percentage of backlinks that are dofollow.
           * @minimum 0
           * @maximum 100
           */
          dofollow_backlinks_pct: number;
          /**
           * The percentage of referring domains with at least one dofollow backlink.
           * @minimum 0
           * @maximum 100
           */
          dofollow_referring_domains_pct: number;
          [key: string]: unknown;
        };
        /** A sample of the top referring pages. */
        backlinks: Array<{
          /**
           * The referring page URL.
           * @format uri
           */
          from_url: string;
          /**
           * The target URL on the queried domain.
           * @format uri
           */
          to_url: string;
          /** The referring page title. */
          title: string;
          /** The backlink anchor text. */
          anchor: string;
          /**
           * The referring domain's rating from 0 to 100.
           * @minimum 0
           * @maximum 100
           */
          domain_rating: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve structured RDAP registration data for one domain, with a WHOIS-derived fallback when necessary. */
    "tabapi.get_domain_rdap": {
      input: {
        /**
         * The domain or hostname to query, such as vercel.com. Do not pass a complete URL.
         * @minLength 1
         * @pattern \S
         */
        domain: string;
      };
      output: {
        /** The domain name in LDH ASCII form. */
        ldhName: string;
        /** The RDAP object class, normally domain. */
        objectClassName?: string;
        /** The Unicode domain name when the domain is internationalized. */
        unicodeName?: string;
        /** The RDAP or EPP status values for the domain. */
        status?: Array<string>;
        /** The domain lifecycle events. */
        events?: Array<{
          /** The RDAP event action, such as registration or expiration. */
          eventAction?: string;
          /**
           * The event timestamp in ISO 8601 format.
           * @format date-time
           */
          eventDate?: string;
          [key: string]: unknown;
        }>;
        /** Registrar and contact entities returned by the registry or registrar. */
        entities?: Array<Record<string, unknown>>;
        /** The delegated nameservers returned in the RDAP record. */
        nameservers?: Array<Record<string, unknown>>;
        /** The provider-defined DNSSEC delegation information. */
        secureDNS?: Record<string, unknown>;
        /** The registrar WHOIS server advertised in the RDAP record. */
        port43?: string;
        /** The original WHOIS text when TabAPI used the port-43 fallback. */
        raw?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve modeled website traffic, rank, engagement, source, keyword, region, and AI-referral estimates for one domain. */
    "tabapi.get_domain_traffic": {
      input: {
        /**
         * The domain or hostname to query, such as vercel.com. Do not pass a complete URL.
         * @minLength 1
         * @pattern \S
         */
        domain: string;
        /**
         * The trailing months of visit history to return and bill, from 3 to 12.
         * @minimum 3
         * @maximum 12
         * @default 3
         */
        months?: number;
      };
      output: {
        /** The normalized queried domain. */
        domain: string;
        /** The website title, or null when unavailable. */
        title: string | null;
        /** The website description, or null when unavailable. */
        description: string | null;
        /** Headline traffic metrics for the reporting month. */
        overview: {
          /** The estimated global traffic rank, or null when unranked. */
          global_rank: number | null;
          /** The rank within the domain's top visitor country. */
          country_rank: {
            /** The two-letter country code for the ranked country. */
            country: string;
            /** The estimated traffic rank within the country. */
            rank: number;
            [key: string]: unknown;
          } | null;
          /** The estimated total visits for the reporting month. */
          visits: number | null;
          /** The bounce rate as a fraction from 0 to 1. */
          bounce_rate: number | null;
          /** The average number of pages viewed per visit. */
          pages_per_visit: number | null;
          /** The average session duration in seconds. */
          time_on_site_seconds: number | null;
          /** The reporting month in YYYY-MM format, or null when unavailable. */
          month: string | null;
          [key: string]: unknown;
        };
        /** Monthly visit history in ascending order. */
        monthly_visits: Array<{
          /** The reporting month in YYYY-MM format. */
          month: string;
          /** The estimated visits during the month. */
          visits: number;
          [key: string]: unknown;
        }>;
        /** Traffic share by acquisition channel, expressed as fractions from 0 to 1. */
        traffic_sources: {
          /** The direct traffic share, or null when unknown. */
          direct: number | null;
          /** The total search traffic share, or null when unknown. */
          search: number | null;
          /** The organic search traffic share, or null when unknown. */
          search_organic: number | null;
          /** The paid search traffic share, or null when unknown. */
          search_paid: number | null;
          /** The total social traffic share, or null when unknown. */
          social: number | null;
          /** The organic social traffic share, or null when unknown. */
          social_organic: number | null;
          /** The paid social traffic share, or null when unknown. */
          social_paid: number | null;
          /** The referral traffic share, or null when unknown. */
          referrals: number | null;
          /** The paid referral traffic share, or null when unknown. */
          paid_referrals: number | null;
          /** The email traffic share, or null when unknown. */
          mail: number | null;
          /** The generative AI referral traffic share, or null when unknown. */
          gen_ai: number | null;
          /** The affiliate traffic share, or null when unknown. */
          affiliate: number | null;
          /** The uncategorized traffic share, or null when unknown. */
          other: number | null;
          [key: string]: unknown;
        };
        /** The top organic keywords reported for the domain. */
        top_keywords: Array<{
          /** The keyword text. */
          name: string;
          /** The estimated monthly search volume. */
          volume: number;
          /** The estimated cost per click in US dollars. */
          cpc: number;
          /** The estimated monthly traffic value in US dollars. */
          estimated_value: number;
          [key: string]: unknown;
        }>;
        /** The top visitor countries reported for the domain. */
        top_regions: Array<{
          /** The ISO 3166-1 alpha-2 country code. */
          country: string;
          /** The English country name. */
          name: string;
          /** The country's share of visits as a fraction from 0 to 1. */
          share: number;
          [key: string]: unknown;
        }>;
        /** AI-assistant referral traffic trends. */
        ai_traffic: {
          /** Traffic trends grouped by AI assistant. */
          trends: Array<{
            /** The AI assistant name. */
            name: string;
            /** The monthly referral history for this AI assistant. */
            history: Array<{
              /**
               * The monthly observation date.
               * @format date
               */
              date: string;
              /** The measured referral value for the AI assistant. */
              value: number;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve the original port-43 WHOIS text for one registrable domain. */
    "tabapi.get_domain_whois": {
      input: {
        /**
         * The domain or hostname to query, such as vercel.com. Do not pass a complete URL.
         * @minLength 1
         * @pattern \S
         */
        domain: string;
      };
      output: {
        /** The normalized registrable domain. */
        domain: string;
        /** The port-43 WHOIS server that answered the request. */
        whois_server: string | null;
        /** The verbatim WHOIS response text. */
        raw: string;
        [key: string]: unknown;
      };
    };
    /** Search Google and return normalized organic results, ads, answer boxes, knowledge graph data, People Also Ask, and related searches. */
    "tabapi.google_search": {
      input: {
        /**
         * The Google search query, including supported operators.
         * @minLength 1
         * @maxLength 500
         * @pattern \S
         */
        q: string;
        /**
         * The two-letter lowercase country code used to localize results.
         * @pattern ^[a-z]{2}$
         * @default "us"
         */
        country?: string;
        /**
         * The lowercase language code used to localize results.
         * @pattern ^[a-z]{2,3}(-[a-z0-9]{2,8})*$
         * @default "en"
         */
        language?: string;
        /**
         * The one-based result page; every page contains 10 results.
         * @minimum 1
         * @maximum 10
         * @default 1
         */
        page?: number;
      };
      output: {
        /** The normalized Google search parameters executed by TabAPI. */
        search_parameters: {
          /** The executed search query. */
          query: string;
          /** The country code used to localize results. */
          country: string;
          /** The language code used to localize results. */
          language: string;
          /**
           * The executed one-based result page.
           * @minimum 1
           * @maximum 10
           */
          page: number;
          /**
           * The number of results requested per page.
           * @minimum 1
           */
          results_per_page: number;
          [key: string]: unknown;
        };
        /** The ranked organic search results. */
        organic_results: Array<{
          /**
           * The one-based result position on the requested page.
           * @minimum 1
           */
          position: number;
          /** The result title. */
          title: string;
          /**
           * The result target URL.
           * @format uri
           */
          link: string;
          /** The display URL shown by Google. */
          displayed_link: string | null;
          /** The result snippet text. */
          snippet: string | null;
          /** The date label shown by Google. */
          date: string | null;
          /** The sitelinks attached to the organic result. */
          sitelinks: Array<{
            /** The sitelink title. */
            title: string;
            /**
             * The sitelink target URL.
             * @format uri
             */
            link: string;
            [key: string]: unknown;
          }>;
          /** Additional string attributes attached to the organic result. */
          attributes: Record<string, string>;
          [key: string]: unknown;
        }>;
        /** The ranked paid search results. */
        paid_results: Array<{
          /**
           * The one-based paid result position on the requested page.
           * @minimum 1
           */
          position: number;
          /** The paid result title. */
          title: string;
          /**
           * The paid result target URL.
           * @format uri
           */
          link: string;
          /** The display URL shown by Google. */
          displayed_link: string | null;
          /** The paid result snippet text. */
          snippet: string | null;
          /** The placement of the paid result on the page. */
          placement: "top" | "bottom" | "unknown";
          /** The sitelinks attached to the paid result. */
          sitelinks: Array<{
            /** The sitelink title. */
            title: string;
            /**
             * The sitelink target URL.
             * @format uri
             */
            link: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The Google answer-box result. */
        answer_box: {
          /** The answer-box presentation type. */
          type: "featured_snippet" | "direct_answer" | "calculator" | "dictionary" | "other";
          /** The answer-box title. */
          title: string | null;
          /** The direct answer text. */
          answer: string | null;
          /** The answer-box source snippet. */
          snippet: string | null;
          /**
           * The answer-box source URL.
           * @format uri
           */
          link: string | null;
          [key: string]: unknown;
        } | null;
        /** The Google knowledge-graph panel. */
        knowledge_graph: {
          /** The knowledge-graph entity title. */
          title: string;
          /** The knowledge-graph entity type. */
          type: string | null;
          /**
           * The entity's official website URL.
           * @format uri
           */
          website: string | null;
          /**
           * The entity image URL.
           * @format uri
           */
          image_url: string | null;
          /** The knowledge-graph description. */
          description: string | null;
          /** The source name for the description. */
          description_source: string | null;
          /**
           * The source URL for the description.
           * @format uri
           */
          description_link: string | null;
          /** Additional string attributes attached to the knowledge-graph entity. */
          attributes: Record<string, string>;
          [key: string]: unknown;
        } | null;
        /** The People Also Ask results. */
        people_also_ask: Array<{
          /**
           * The one-based question position.
           * @minimum 1
           */
          position: number;
          /** The related question text. */
          question: string;
          /** The answer text when available. */
          answer: string | null;
          /** The answer source title when available. */
          title: string | null;
          /**
           * The answer source URL when available.
           * @format uri
           */
          link: string | null;
          [key: string]: unknown;
        }>;
        /** The related Google searches. */
        related_searches: Array<{
          /**
           * The one-based related-search position.
           * @minimum 1
           */
          position: number;
          /** The related query text. */
          query: string;
          /**
           * The related-search URL when provided.
           * @format uri
           */
          link: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
