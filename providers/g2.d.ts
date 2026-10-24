import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a product to a research board. */
    "g2.add_research_board_product": {
      input: {
        /**
         * Research board UUID
         * @minLength 1
         */
        boardId: string;
        /**
         * Product UUID or slug.
         * @minLength 1
         */
        productId: string;
      };
      output: {
        /** G2 add research board product result data. */
        data: Record<string, unknown>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Add multiple products to a research board. */
    "g2.add_research_board_products": {
      input: {
        /**
         * Research board UUID
         * @minLength 1
         */
        boardId: string;
        /**
         * Product UUIDs or slugs.
         * @maxItems 20
         */
        productIds: Array<string>;
      };
      output: {
        /** G2 add research board products result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Create a product mapping. **No scope required.** */
    "g2.create_product_mapping": {
      input: {
        /** external id value. */
        externalId: string;
        /** product id value. */
        productId: string;
        /** match score value. */
        matchScore?: number | null;
        /** partner product name value. */
        partnerProductName?: string | null;
      };
      output: {
        /** G2 create product mapping result data. */
        data: Record<string, unknown>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Create a research board. */
    "g2.create_research_board": {
      input: {
        /** title value. */
        title?: string;
      };
      output: {
        /** G2 create research board result data. */
        data: Record<string, unknown>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Delete a research board. */
    "g2.delete_research_board": {
      input: {
        /**
         * Research board UUID
         * @minLength 1
         */
        boardId: string;
      };
      output: {
        /** Whether the resource was removed. */
        success: boolean;
      };
    };
    /** Retrieves G2 Activate settings for a product. **Requires `g2_activate.read` scope.** */
    "g2.get_activate_settings": {
      input: {
        /**
         * Product UUID or Slug
         * @minLength 1
         */
        productId: string;
      };
      output: {
        /** G2 get activate settings result data. */
        data: Record<string, unknown>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a G2 category by UUID or slug, optionally including related categories and products. */
    "g2.get_category": {
      input: {
        /** List of fields for categories to include in response */
        fields?: Array<"uuid" | "name" | "slug" | "description" | "updated_at">;
        /** Comma-separated list of relationships to include (e.g. products,children,ancestors,descendants,parent) */
        include?: Array<"products" | "children" | "ancestors" | "descendants" | "parent">;
        /**
         * Category UUID or Slug
         * @minLength 1
         */
        categoryId: string;
      };
      output: {
        /** A G2 JSON:API resource. Sparse fields and newly added attributes are preserved. */
        data: {
          /** The resource identifier. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          /** Resource attributes, including review answers and attribution when returned. */
          attributes?: Record<string, unknown>;
          /** Relationships to other G2 resources. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Related resources included by G2. */
        included?: Array<{
          /** The resource identifier. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          /** Resource attributes, including review answers and attribution when returned. */
          attributes?: Record<string, unknown>;
          /** Relationships to other G2 resources. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Upstream pagination links; returned as data and never fetched automatically. */
        links?: Record<string, unknown>;
        /** Upstream metadata, including counts, filter aggregates or competitors when available. */
        meta?: Record<string, unknown>;
        /** Pass this cursor as after to request the next page; null when absent. */
        nextCursor: string | null;
        /** Pass this cursor as before to request the previous page; null when absent. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve credit account details for an organization. **No scope required.**



Retrieve API metering credit account details including balance and total credits.

Use `?include=deductions` to include the last month of deductions in the response. */
    "g2.get_credit_account": {
      input: {
        /**
         * Organization UUID or slug
         * @minLength 1
         */
        organizationId: string;
        /** Comma separated list of fields for credit_account to include in response */
        fields?: Array<"name" | "slug" | "available_balance" | "purchased_credits" | "total_deductions">;
        /** Comma-separated list of relationships to include (e.g. deductions) */
        include?: Array<"deductions">;
      };
      output: {
        /** G2 get credit account result data. */
        data: Record<string, unknown>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Show review for a product. **⚠️ G2 is currently restricting access to this endpoint.**
This endpoint retrieves the review for a specific product owned by the current user. */
    "g2.get_my_product_review": {
      input: {
        /**
         * productId value.
         * @minLength 1
         */
        productId: string;
        /** Use partner to return the partner review question template */
        template?: string;
        /** Comma separated list of fields for reviews to include in response */
        fields?: Array<"questions" | "published_at" | "submitted_at" | "user_updated_at" | "url">;
        /** Comma-separated list of relationships to include (e.g. user,answers) */
        include?: Array<"user" | "answers">;
      };
      output: {
        /** G2 get my product review result data. */
        data: Record<string, unknown>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a G2 product by UUID or slug. Requires products.read permission. */
    "g2.get_product": {
      input: {
        /** List of fields for products to include in response */
        fields?: Array<"type" | "detail_description" | "domain" | "g2_url" | "name" | "public_detail_url" | "review_count" | "slug" | "write_review_url" | "is_validated" | "image_url" | "pricing_tiers" | "star_rating">;
        /** Comma-separated list of relationships to include (e.g. categories,discussions,screenshots,vendor) */
        include?: Array<"categories" | "discussions" | "screenshots" | "vendor">;
        /**
         * The UUID or slug of the product
         * @minLength 1
         */
        productId: string;
      };
      output: {
        /** A G2 JSON:API resource. Sparse fields and newly added attributes are preserved. */
        data: {
          /** The resource identifier. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          /** Resource attributes, including review answers and attribution when returned. */
          attributes?: Record<string, unknown>;
          /** Relationships to other G2 resources. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Related resources included by G2. */
        included?: Array<{
          /** The resource identifier. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          /** Resource attributes, including review answers and attribution when returned. */
          attributes?: Record<string, unknown>;
          /** Relationships to other G2 resources. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Upstream pagination links; returned as data and never fetched automatically. */
        links?: Record<string, unknown>;
        /** Upstream metadata, including counts, filter aggregates or competitors when available. */
        meta?: Record<string, unknown>;
        /** Pass this cursor as after to request the next page; null when absent. */
        nextCursor: string | null;
        /** Pass this cursor as before to request the previous page; null when absent. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** A product's ratings. **Requires `products.ratings.read` scope.** */
    "g2.get_product_ratings": {
      input: {
        /**
         * G2 Product UUID or Slug
         * @minLength 1
         */
        productId: string;
        /** Comma separated list of fields for products to include in response */
        fields?: Array<"ease_of_use" | "quality_of_support" | "meets_requirements" | "ease_of_setup" | "ease_of_doing_business_with" | "direction" | "ease_of_admin">;
      };
      output: {
        /** G2 get product ratings result data. */
        data: Record<string, unknown>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Shows a single question. **Requires `questions.read` scope.** */
    "g2.get_question": {
      input: {
        /** Comma separated list of fields for questions to include in response */
        fields?: Array<"title" | "text_template" | "is_required" | "description" | "question_type" | "input_type" | "updated_at">;
        /** Comma-separated list of relationships to include (e.g. categories) */
        include?: Array<"categories">;
        /**
         * Question ID
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** G2 get question result data. */
        data: Record<string, unknown>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a licensed report and its product snapshots. **Requires `reports.read` scope.** The report type selects the response shape: `grid` returns `grid_reports` with Grid product scores; `momentum` returns `momentum_reports` with Momentum Grid product scores; `implementation` returns `implementation_reports` with Implementation Index scores; `relationship` returns `relationship_reports` with Relationship Index scores; `results` returns `results_reports` with Results Index scores; `usability` returns `usability_reports` with Usability Index scores. Add `include=report_products` to receive the product snapshots. Unsupported report types do not match a route (404). */
    "g2.get_report": {
      input: {
        /**
         * reportType value.
         * @minLength 1
         */
        reportType: "grid" | "momentum" | "implementation" | "relationship" | "results" | "usability";
        /**
         * Report UUID returned by report discovery
         * @minLength 1
         * @format uuid
         */
        reportId: string;
        /** Comma-separated list of relationships to include (e.g. report_products) */
        include?: Array<"report_products">;
        /** Sparse fields for momentum_reports; only valid for the matching report_type */
        momentumReportsFields?: Array<"category_id" | "category_name" | "quarter" | "company_segment">;
        /** Sparse fields for grid_reports; only valid for the matching report_type */
        gridReportsFields?: Array<"category_id" | "category_name" | "quarter" | "company_segment">;
        /** Sparse fields for implementation_reports; only valid for the matching report_type */
        implementationReportsFields?: Array<"category_id" | "category_name" | "quarter" | "company_segment">;
        /** Sparse fields for relationship_reports; only valid for the matching report_type */
        relationshipReportsFields?: Array<"category_id" | "category_name" | "quarter" | "company_segment">;
        /** Sparse fields for usability_reports; only valid for the matching report_type */
        usabilityReportsFields?: Array<"category_id" | "category_name" | "quarter" | "company_segment">;
        /** Sparse fields for results_reports; only valid for the matching report_type */
        resultsReportsFields?: Array<"category_id" | "category_name" | "quarter" | "company_segment">;
        /** Sparse product fields; valid fields depend on report_type */
        reportProductsFields?: Array<"name" | "slug" | "grid_position" | "satisfaction_score" | "momentum_score" | "market_presence_score" | "review_count" | "star_rating" | "g2_score" | "badge_url" | "image_url" | "index_scores">;
      };
      output: {
        /** G2 get report result data. */
        data: Record<string, unknown>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a research board. */
    "g2.get_research_board": {
      input: {
        /**
         * Research board UUID
         * @minLength 1
         */
        boardId: string;
      };
      output: {
        /** G2 get research board result data. */
        data: Record<string, unknown>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Shows a screenshot. **Requires `screenshots.read` scope.** */
    "g2.get_screenshot": {
      input: {
        /**
         * id value.
         * @minLength 1
         */
        id: string;
        /** Comma separated list of fields for screenshots to include in response */
        fields?: Array<"id" | "product_id" | "url" | "created_at" | "updated_at" | "file_name" | "title" | "description">;
        /** Comma-separated list of relationships to include (e.g. product,vendor) */
        include?: Array<"product" | "vendor">;
      };
      output: {
        /** G2 get screenshot result data. */
        data: Record<string, unknown>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Shows a single unlocked company with resolved contacts. **Requires `g2_activate.read` scope.** */
    "g2.get_unlocked_company": {
      input: {
        /**
         * Product UUID or Slug
         * @minLength 1
         */
        productId: string;
        /**
         * Ahoy g2_company_id (UUID)
         * @minLength 1
         */
        id: string;
        /** Comma separated list of fields for unlocked_companies to include in response */
        fields?: Array<"product_id" | "company_name" | "company_country" | "company_employees" | "intent_score" | "credit_cost" | "viewed_at" | "unlocked_at" | "contacts">;
      };
      output: {
        /** G2 get unlocked company result data. */
        data: Record<string, unknown>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Shows a single vendor. **Requires `vendors.read` scope.** */
    "g2.get_vendor": {
      input: {
        /** Comma separated list of fields for vendors to include in response */
        fields?: Array<"name" | "description" | "company_website" | "slug" | "public_products_count" | "updated_at">;
        /** Comma-separated list of relationships to include (e.g. products) */
        include?: Array<"products">;
        /**
         * Vendor UUID or Slug
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** G2 get vendor result data. */
        data: Record<string, unknown>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** List all category product features grouped by category. **Requires `product_features.read` scope.** */
    "g2.list_all_category_features": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /** Filter by G2 product ID */
        productUuidEq?: string;
        /** isVerifiedEq value. */
        isVerifiedEq?: boolean;
        /** Filter by functionality */
        functionalityEq?: string;
        /**
         * Min created_at value (RFC3339 format)
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * Max created_at value (RFC3339 format)
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * Min updated_at value (RFC3339 format)
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * Max updated_at value (RFC3339 format)
         * @format date-time
         */
        updatedAtLt?: string;
        /** Comma separated list of fields for product_features to include in response */
        fields?: Array<"section_title" | "feature_id" | "feature" | "description" | "review_count" | "rating" | "functionality" | "is_verified" | "available" | "created_at" | "updated_at">;
        /** Comma-separated list of relationships to include (e.g. product) */
        include?: Array<"product">;
      };
      output: {
        /** G2 list all category features result data. */
        data: {
          /** Feature groups by product or category. */
          objects?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** List all product features grouped by product. **Requires `product_features.read` scope.** */
    "g2.list_all_product_features": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /**
         * Filter records updated after this date
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * Filter records updated before this date
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * Filter records created after this date
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * Filter records created before this date
         * @format date-time
         */
        createdAtLt?: string;
        /** Filter by category UUID */
        categoryUuidEq?: string;
        /** Filter by product UUID */
        productUuidEq?: string;
        /** Filter by feature functionality type */
        functionalityEq?: string;
        /** Filter by verification status */
        isVerifiedEq?: string;
        /** Comma separated list of fields for product_features to include in response */
        fields?: Array<"section_title" | "feature_id" | "feature" | "description" | "review_count" | "rating" | "functionality" | "is_verified" | "available" | "created_at" | "updated_at">;
        /** Comma-separated list of relationships to include (e.g. category) */
        include?: Array<"category">;
      };
      output: {
        /** G2 list all product features result data. */
        data: {
          /** Feature groups by product or category. */
          objects?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** List G2 categories with name, slug and date filters. */
    "g2.list_categories": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /**
         * Filter records updated after this date
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * Filter records updated before this date
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * Filter records created after this date
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * Filter records created before this date
         * @format date-time
         */
        createdAtLt?: string;
        /** Filter by exact name match */
        nameEq?: string;
        /** Filter by partial name match */
        nameCont?: string;
        /** Filter by exact slug match */
        slugEq?: string;
        /** Filter by partial slug match */
        slugCont?: string;
        /** List of fields for categories to include in response */
        fields?: Array<"uuid" | "name" | "slug" | "description" | "updated_at">;
        /** Comma-separated list of relationships to include (e.g. products,children,ancestors,descendants,parent) */
        include?: Array<"products" | "children" | "ancestors" | "descendants" | "parent">;
      };
      output: {
        /** The resources on this page. */
        data: Array<{
          /** The resource identifier. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          /** Resource attributes, including review answers and attribution when returned. */
          attributes?: Record<string, unknown>;
          /** Relationships to other G2 resources. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Related resources included by G2. */
        included?: Array<{
          /** The resource identifier. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          /** Resource attributes, including review answers and attribution when returned. */
          attributes?: Record<string, unknown>;
          /** Relationships to other G2 resources. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Upstream pagination links; returned as data and never fetched automatically. */
        links?: Record<string, unknown>;
        /** Upstream metadata, including counts, filter aggregates or competitors when available. */
        meta?: Record<string, unknown>;
        /** Pass this cursor as after to request the next page; null when absent. */
        nextCursor: string | null;
        /** Pass this cursor as before to request the previous page; null when absent. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** List features for a specific category. **Requires `product_features.read` scope.** */
    "g2.list_category_features": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /**
         * Category UUID or Slug
         * @minLength 1
         */
        categoryId: string;
        /** G2 product ID */
        productUuidEq?: string;
        /** isVerifiedEq value. */
        isVerifiedEq?: boolean;
        /** Filter by functionality */
        functionalityEq?: string;
        /**
         * Min created_at value (RFC3339 format)
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * Max created_at value (RFC3339 format)
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * Min updated_at value (RFC3339 format)
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * Max updated_at value (RFC3339 format)
         * @format date-time
         */
        updatedAtLt?: string;
        /** Comma separated list of fields for product_features to include in response */
        fields?: Array<"section_title" | "feature_id" | "feature" | "description" | "review_count" | "rating" | "functionality" | "is_verified" | "available" | "created_at" | "updated_at">;
        /** Comma-separated list of relationships to include (e.g. product) */
        include?: Array<"product">;
      };
      output: {
        /** G2 list category features result data. */
        data: {
          /** Feature groups by product or category. */
          objects?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve aggregated credit deductions by month and year. **No scope required.**



Retrieve credit account deductions aggregated by month and year.

Use filter parameters to narrow results:
- `filter[month]`: Filter by month (1-12)
- `filter[year]`: Filter by year (e.g., 2024) */
    "g2.list_credit_deductions": {
      input: {
        /**
         * Organization UUID or slug
         * @minLength 1
         */
        organizationId: string;
        /** Filter by month (1-12) */
        month?: number;
        /** Filter by year */
        year?: number;
        /** Comma separated list of fields for credit_deduction_aggregations to include in response */
        fields?: Array<"month" | "year" | "total_amount" | "deduction_count">;
      };
      output: {
        /** G2 list credit deductions result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Lists reviews with all Data Solutions fields. **Requires `ds_reviews.read` scope.**


**⚠️ BETA API**: This endpoint is a beta endpoint and it definition might change by the official release. */
    "g2.list_data_solutions_reviews": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /** Filter by product UUIDs or slugs */
        productIds?: Array<string>;
        /**
         * Filter records updated after this date
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * Filter records updated before this date
         * @format date-time
         */
        updatedAtLt?: string;
        /** Filter reviews by category IDs */
        categoryIds?: Array<string>;
        /** Exclude reviews with specific comment answer values */
        commentAnswerValuesExclude?: string;
        /**
         * Filter by company size segment
         *
         *  - Company Segment ID: `179` => `Small-Business` *(0-50 employees)*
         *
         *  - Company Segment ID: `180` => `Mid-Market` *(51-1000 employees)*
         *
         *  - Company Segment ID: `181` => `Enterprise` *(1001-Infinity employees)*
         *
         *
         */
        companySegments?: Array<string>;
        /** Filter by country names */
        countries?: Array<string>;
        /** Filter by industry IDs */
        industryIds?: Array<string>;
        /** Filter by raw NPS scores (0-10) */
        nps?: Array<string>;
        /** Filter by derived star ratings (1-5) */
        starRatings?: Array<string>;
        /** Filter by geographic regions */
        regions?: Array<string>;
        /** Filter by user role IDs */
        roleIds?: Array<string>;
        /** Comma-separated list of fields to include. All 55 Data Solutions fields are available as flat attributes. */
        fields?: Array<"url" | "slug" | "title" | "star_rating" | "published_at" | "submitted_at" | "user_updated_at" | "product_name" | "country_name" | "source" | "review_incentive" | "verified_current_user" | "comments_present" | "official_response_present" | "is_public" | "percent_complete" | "default_sort" | "regions" | "attribution" | "love" | "hate" | "benefits" | "recommendations" | "meets_requirements" | "price" | "ease_of_setup" | "likely_to_recommend" | "nps" | "ease_of_admin" | "ease_of_use" | "quality_of_support" | "ease_of_doing_business_with" | "company_segment" | "role" | "company_size" | "industry" | "user_title" | "company" | "experience_level" | "implementation" | "go_live_time" | "estimated_roi" | "annual_cost" | "setup_cost" | "contract_length" | "discount" | "users_purchased" | "frequency_of_use" | "deployment" | "implementation_year" | "adoption" | "switched_from" | "switched_from_product" | "switched_from_product_id" | "switch_reason" | "switch_themes" | "survey_response_id" | "product_id" | "categories" | "direction" | "organic">;
        /** Comma-separated list of relationships to include (e.g. user) */
        include?: Array<"user">;
      };
      output: {
        /** G2 list data solutions reviews result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Lists data subscriptions for given partner and account. **Requires `data_subscriptions.read` scope.**

Data Subscriptions require a Partner ID and appropriate scope.
Contact G2 for a unique Partner ID. */
    "g2.list_data_subscriptions": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /**
         * partnerId value.
         * @minLength 1
         */
        partnerId: string;
        /** Comma separated list of fields for data_subscriptions to include in response */
        fields?: Array<"topic" | "target" | "schedule" | "status" | "payload">;
      };
      output: {
        /** G2 list data subscriptions result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Lists locked companies (masked) showing intent for a product. **Requires `g2_activate.read` scope.** */
    "g2.list_locked_companies": {
      input: {
        /**
         * Product UUID or Slug
         * @minLength 1
         */
        productId: string;
        /** Sort order. Prefix with "-" for descending (e.g. "-intent_score"). */
        sort?: "-intent_score" | "intent_score";
        /** One or more category slugs to narrow results to, intersected with the product's configured Topics scope. A slug outside that scope yields zero matching rows rather than an error. */
        categoryIn?: Array<string>;
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
      };
      output: {
        /** G2 list locked companies result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** List Market Intelligence reviews for one product. Requires products.reviews.read and Market Intelligence access; competitor products in meta must be queried separately. */
    "g2.list_market_intelligence_reviews": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /**
         * Product UUID or Slug
         * @minLength 1
         */
        productId: string;
        /**
         * Filter records updated after this date
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * Filter records updated before this date
         * @format date-time
         */
        updatedAtLt?: string;
        /** Filter reviews by category IDs */
        categoryIds?: Array<string>;
        /** Exclude reviews with specific comment answer values */
        commentAnswerValuesExclude?: string;
        /**
         * Filter by company size segment
         *
         *  - Company Segment ID: `179` => `Small-Business` *(0-50 employees)*
         *
         *  - Company Segment ID: `180` => `Mid-Market` *(51-1000 employees)*
         *
         *  - Company Segment ID: `181` => `Enterprise` *(1001-Infinity employees)*
         *
         *
         */
        companySegments?: Array<string>;
        /** Filter by country names */
        countries?: Array<string>;
        /** Filter by industry IDs */
        industryIds?: Array<string>;
        /** Filter by raw NPS scores (0-10) */
        nps?: Array<string>;
        /** Filter by derived star ratings (1-5) */
        starRatings?: Array<string>;
        /** Filter by geographic regions */
        regions?: Array<string>;
        /** Filter by user role IDs */
        roleIds?: Array<string>;
        /** List of fields for reviews to include in response */
        fields?: Array<"url" | "title" | "rating" | "user_updated_at" | "user_company_name" | "product_name" | "company_segment_name" | "industry_name" | "primary_region_name" | "country_name" | "country_code" | "switched_theme" | "category_names" | "switched_from_products" | "answers" | "feature_ratings">;
        /** Comma-separated list of relationships to include (e.g. user) */
        include?: Array<"user">;
      };
      output: {
        /** The resources on this page. */
        data: Array<{
          /** The resource identifier. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          /** Resource attributes, including review answers and attribution when returned. */
          attributes?: Record<string, unknown>;
          /** Relationships to other G2 resources. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Related resources included by G2. */
        included?: Array<{
          /** The resource identifier. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          /** Resource attributes, including review answers and attribution when returned. */
          attributes?: Record<string, unknown>;
          /** Relationships to other G2 resources. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Upstream pagination links; returned as data and never fetched automatically. */
        links?: Record<string, unknown>;
        /** Upstream metadata, including counts, filter aggregates or competitors when available. */
        meta?: Record<string, unknown>;
        /** Pass this cursor as after to request the next page; null when absent. */
        nextCursor: string | null;
        /** Pass this cursor as before to request the previous page; null when absent. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve buyer intent signals for a date range. **Requires `market_signals.read` scope.**

Retrieve buyer intent signals (interactions) for specific categories.

Returns one result per buyer intent interaction within the specified date range.
Each interaction includes the category UUID, company name, and domain.

If no dates are provided, defaults to today for both start and end date.

Results are paginated using cursor-based pagination (default 25, max 250 per page). */
    "g2.list_market_signals": {
      input: {
        /** List of category UUIDs or slugs */
        categoryIds: Array<string>;
        /**
         * Start date of range to check for signals (YYYY-MM-DD). Defaults to today.
         * @format date
         */
        startDate?: string;
        /**
         * End date of range to check for signals (YYYY-MM-DD). Defaults to today.
         * @format date
         */
        endDate?: string;
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
      };
      output: {
        /** G2 list market signals result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** List all products owned by current account. **⚠️ G2 is currently restricting access to this endpoint.**
This endpoint shows subscription-specific product information, of
products that the current account has ownership of. */
    "g2.list_owned_products": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /** Comma separated list of fields for products to include in response */
        fields?: Array<"name" | "domain" | "slug" | "image_url">;
        /** Comma-separated list of relationships to include (e.g. categories,subscribed_categories) */
        include?: Array<"categories" | "subscribed_categories">;
        /** Filter by one or more product UUIDs */
        productIds?: Array<string>;
        /** Filter by one or more product slugs */
        slugs?: Array<string>;
      };
      output: {
        /** G2 list owned products result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Lists medals (badges) awarded to given product. **Requires `product.badges.read` scope.** */
    "g2.list_product_badges": {
      input: {
        /**
         * Product UUID or Slug
         * @minLength 1
         */
        productId: string;
        /**
         * Page number to return (min 1). Defaults to 1.
         * @minimum 1
         * @default 1
         */
        pageNumber?: number;
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Report season. Valid values: spring, summer, fall, winter */
        season?: "spring" | "summer" | "fall" | "winter";
        /** Report year */
        year?: string;
        /** Category UUID to filter medals by category */
        categoryId?: string;
        /** Comma separated list of fields for medals to include in response */
        fields?: Array<"title" | "description" | "badge_type" | "image" | "alt_text" | "segment" | "full_title" | "geo_name">;
        /** Comma-separated list of relationships to include (e.g. product,categories) */
        include?: Array<"product" | "categories">;
      };
      output: {
        /** G2 list product badges result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Lists competitors related to given product. **No scope required.** */
    "g2.list_product_competitors": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /**
         * Product UUID or Slug
         * @minLength 1
         */
        productId: string;
        /** Filter competitors by category UUID */
        categoryUuidEq?: string;
        /** Comma separated list of fields for products to include in response */
        fields?: Array<"type" | "detail_description" | "domain" | "g2_url" | "name" | "public_detail_url" | "review_count" | "slug" | "write_review_url" | "is_validated" | "image_url" | "pricing_tiers" | "star_rating">;
        /** Comma-separated list of relationships to include (e.g. categories) */
        include?: Array<"categories">;
      };
      output: {
        /** G2 list product competitors result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Lists discussions related to given product. **Requires `products.discussions.read` scope.** */
    "g2.list_product_discussions": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /**
         * Product UUID or Slug
         * @minLength 1
         */
        productId: string;
        /** Comma separated list of fields for discussions to include in response */
        fields?: Array<"attribution" | "comments_count" | "comments_present" | "content" | "created_at" | "is_public" | "official_response_present" | "product_id" | "product_name" | "report_url" | "seeded" | "slug" | "title" | "type" | "url" | "vendor_question" | "verified_current_user" | "votes_down" | "votes_up" | "votes_total">;
        /** Comma-separated list of relationships to include (e.g. user,comments) */
        include?: Array<"user" | "comments">;
      };
      output: {
        /** G2 list product discussions result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Lists Downloads related to given product. **Requires `products.downloads.read` scope.** */
    "g2.list_product_downloads": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /**
         * productId value.
         * @minLength 1
         */
        productId: string;
        /**
         * Min time for when a record was created. Using rfc3339 format.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * Max time for when a record was last updated. Using rfc3339 format.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * Min time for when a record was last updated. Using rfc3339 format.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * Max time for when a record was last updated. Using rfc3339 format.
         * @format date-time
         */
        updatedAtLt?: string;
        /** Comma separated list of fields for downloads to include in response */
        fields?: Array<"id" | "product_id" | "url" | "created_at" | "updated_at" | "file_name" | "title" | "description">;
        /** Comma-separated list of relationships to include (e.g. product,vendor) */
        include?: Array<"product" | "vendor">;
      };
      output: {
        /** G2 list product downloads result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** List features for a specific product. **Requires `product_features.read` scope.** */
    "g2.list_product_features": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /**
         * Product UUID or Slug
         * @minLength 1
         */
        productId: string;
        /**
         * Filter records updated after this date
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * Filter records updated before this date
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * Filter records created after this date
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * Filter records created before this date
         * @format date-time
         */
        createdAtLt?: string;
        /** Filter by category UUID */
        categoryUuidEq?: string;
        /** Filter by product UUID */
        productUuidEq?: string;
        /** Filter by feature functionality type */
        functionalityEq?: string;
        /** Filter by verification status */
        isVerifiedEq?: string;
        /** Comma separated list of fields for product_features to include in response */
        fields?: Array<"section_title" | "feature_id" | "feature" | "description" | "review_count" | "rating" | "functionality" | "is_verified" | "available" | "created_at" | "updated_at">;
        /** Comma-separated list of relationships to include (e.g. category) */
        include?: Array<"category">;
      };
      output: {
        /** G2 list product features result data. */
        data: {
          /** Feature groups by product or category. */
          objects?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Lists integration reviews for given product. **Requires `integration_reviews.read` scope.** */
    "g2.list_product_integration_reviews": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /**
         * Primary Product UUID or Slug
         * @minLength 1
         */
        productId: string;
        /** Filter by integration product UUID */
        productUuidEq?: string;
        /** Filter by exact NPS score (0-10) */
        npsEq?: string;
        /** Filter by NPS greater than */
        npsGt?: string;
        /** Filter by NPS less than */
        npsLt?: string;
        /** Comma-separated list of fields to include. Available fields: nps, description, product_name, primary_product_name, user_name, created_at, updated_at */
        fields?: string;
        /** Comma-separated list of relationships to include (e.g. product,primary_product,user) */
        include?: Array<"product" | "primary_product" | "user">;
      };
      output: {
        /** G2 list product integration reviews result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** List of product mappings. **No scope required.** */
    "g2.list_product_mappings": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /** G2 product ID */
        productId?: string;
        /** Non-G2 ID mapped to the G2 product */
        externalId?: string;
        /**
         * Max deleted_at value (RFC3339 format)
         * @format date-time
         */
        deletedAtLt?: string;
        /**
         * Min deleted_at value (RFC3339 format)
         * @format date-time
         */
        deletedAtGt?: string;
        /**
         * Min created_at value (RFC3339 format)
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * Max created_at value (RFC3339 format)
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * Min updated_at value (RFC3339 format)
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * Max updated_at value (RFC3339 format)
         * @format date-time
         */
        updatedAtLt?: string;
        /** Comma separated list of fields for product_mappings to include in response */
        fields?: Array<"created_at" | "updated_at" | "match_score" | "external_id" | "product_id" | "product_name" | "partner_product_name" | "deleted_at">;
      };
      output: {
        /** G2 list product mappings result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** List standard or removed G2 product reviews. Requires products.reviews.read and the corresponding product license. */
    "g2.list_product_reviews": {
      input: (unknown);
      output: {
        /** The resources on this page. */
        data: Array<{
          /** The resource identifier. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          /** Resource attributes, including review answers and attribution when returned. */
          attributes?: Record<string, unknown>;
          /** Relationships to other G2 resources. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Related resources included by G2. */
        included?: Array<{
          /** The resource identifier. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          /** Resource attributes, including review answers and attribution when returned. */
          attributes?: Record<string, unknown>;
          /** Relationships to other G2 resources. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Upstream pagination links; returned as data and never fetched automatically. */
        links?: Record<string, unknown>;
        /** Upstream metadata, including counts, filter aggregates or competitors when available. */
        meta?: Record<string, unknown>;
        /** Pass this cursor as after to request the next page; null when absent. */
        nextCursor: string | null;
        /** Pass this cursor as before to request the previous page; null when absent. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Lists Screenshots related to given product. **Requires `products.screenshots.read` scope.** */
    "g2.list_product_screenshots": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /**
         * productId value.
         * @minLength 1
         */
        productId: string;
        /**
         * Min time for when a record was created. Using rfc3339 format.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * Max time for when a record was last updated. Using rfc3339 format.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * Min time for when a record was last updated. Using rfc3339 format.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * Max time for when a record was last updated. Using rfc3339 format.
         * @format date-time
         */
        updatedAtLt?: string;
        /** Comma separated list of fields for screenshots to include in response */
        fields?: Array<"id" | "product_id" | "url" | "created_at" | "updated_at" | "file_name" | "title" | "description">;
        /** Comma-separated list of relationships to include (e.g. product,vendor) */
        include?: Array<"product" | "vendor">;
      };
      output: {
        /** G2 list product screenshots result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Lists reviews of given product. **Requires `products.snippets.read` scope.** */
    "g2.list_product_snippets": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /**
         * Product UUID or Slug
         * @minLength 1
         */
        productId: string;
        /** npsScore value. */
        npsScore?: string;
        /** companySegment value. */
        companySegment?: string;
        /** industry value. */
        industry?: string;
        /** categoryIds value. */
        categoryIds?: string;
        /** role value. */
        role?: string;
        /** tags value. */
        tags?: string;
        /** Comma separated list of fields for snippets to include in response */
        fields?: Array<"content" | "review_url" | "stars_image_url" | "star_rating" | "submitted_at">;
        /** Comma-separated list of relationships to include (e.g. user,review) */
        include?: Array<"user" | "review">;
      };
      output: {
        /** G2 list product snippets result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Lists video reviews related to given product. **Requires `products.video_reviews.read` scope.** */
    "g2.list_product_video_reviews": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /**
         * Product UUID or Slug
         * @minLength 1
         */
        productId: string;
        /**
         * Filter records updated after this date
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * Filter records updated before this date
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * Filter records created after this date
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * Filter records created before this date
         * @format date-time
         */
        createdAtLt?: string;
        /** Comma separated list of fields for video_reviews to include in response */
        fields?: Array<"product_id" | "url" | "created_at" | "updated_at" | "file_name" | "title" | "description" | "thumbnail_url" | "video_type" | "video_id" | "video_provider" | "video_transcript_text">;
        /** Comma-separated list of relationships to include (e.g. product,vendor) */
        include?: Array<"product" | "vendor">;
      };
      output: {
        /** G2 list product video reviews result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Lists videos related to given product. **Requires `products.videos.read` scope.** */
    "g2.list_product_videos": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /**
         * Product UUID or Slug
         * @minLength 1
         */
        productId: string;
        /**
         * Min time for when a record was created. Using rfc3339 format.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * Max time for when a record was last updated. Using rfc3339 format.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * Min time for when a record was last updated. Using rfc3339 format.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * Max time for when a record was last updated. Using rfc3339 format.
         * @format date-time
         */
        updatedAtLt?: string;
        /** Comma separated list of fields for product_videos to include in response */
        fields?: Array<"id" | "product_id" | "url" | "created_at" | "updated_at" | "description" | "thumbnail_url" | "video_type" | "video_id" | "video_provider">;
        /** Comma-separated list of relationships to include (e.g. product,vendor) */
        include?: Array<"product" | "vendor">;
      };
      output: {
        /** G2 list product videos result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Search G2 products by name, category, domain, rating or other filters. Requires products.read permission. */
    "g2.list_products": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /**
         * Filter records updated after this date
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * Filter records updated before this date
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * Filter records created after this date
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * Filter records created before this date
         * @format date-time
         */
        createdAtLt?: string;
        /** Filter products by category id */
        categoryIds?: Array<string>;
        /** Filter products by one or more product UUIDs */
        productIds?: Array<string>;
        /** Filter products by minimum review count */
        reviewCountGteq?: string;
        /** Filter products by one or more product slugs (exact match) */
        slugs?: Array<string>;
        /** Filter products by star rating */
        starRatings?: Array<string>;
        /** Filter products by vendor name */
        vendorName?: string;
        /** Filter products by partial name match */
        productNameCont?: string;
        /** Filter products by exact name match */
        productNameEq?: string;
        /** Filter products by exact vendor website URL (case-sensitive) */
        websiteUrls?: Array<string>;
        /** Filter by partial URL/domain match (substring) */
        websiteContains?: Array<string>;
        /** Search for products using full-text search */
        query?: string;
        /** List of fields for products to include in response */
        fields?: Array<"type" | "detail_description" | "domain" | "g2_url" | "name" | "public_detail_url" | "review_count" | "slug" | "write_review_url" | "is_validated" | "image_url" | "pricing_tiers" | "star_rating">;
        /** Comma-separated list of relationships to include (e.g. categories,discussions,screenshots,vendor) */
        include?: Array<"categories" | "discussions" | "screenshots" | "vendor">;
      };
      output: {
        /** The resources on this page. */
        data: Array<{
          /** The resource identifier. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          /** Resource attributes, including review answers and attribution when returned. */
          attributes?: Record<string, unknown>;
          /** Relationships to other G2 resources. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Related resources included by G2. */
        included?: Array<{
          /** The resource identifier. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          /** Resource attributes, including review answers and attribution when returned. */
          attributes?: Record<string, unknown>;
          /** Relationships to other G2 resources. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Upstream pagination links; returned as data and never fetched automatically. */
        links?: Record<string, unknown>;
        /** Upstream metadata, including counts, filter aggregates or competitors when available. */
        meta?: Record<string, unknown>;
        /** Pass this cursor as after to request the next page; null when absent. */
        nextCursor: string | null;
        /** Pass this cursor as before to request the previous page; null when absent. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** List of questions. **Requires `questions.read` scope.** */
    "g2.list_questions": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /**
         * Filter records updated after this date
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * Filter records updated before this date
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * Filter records created after this date
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * Filter records created before this date
         * @format date-time
         */
        createdAtLt?: string;
        /** Comma separated list of fields for questions to include in response */
        fields?: Array<"title" | "text_template" | "is_required" | "description" | "question_type" | "input_type" | "updated_at">;
        /** Comma-separated list of relationships to include (e.g. categories) */
        include?: Array<"categories">;
      };
      output: {
        /** G2 list questions result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Discover licensed Grid, Momentum, Usability, Implementation, Results and Relationship reports. Lists released Grid, Momentum, Usability, Implementation, Relationship, and Results report snapshots accessible through claimed or owned products. Each item is a reports resource with a report_type attribute; sparse fields use fields[reports]. Requires reports.read and an active report entitlement. One-off purchases do not require a Content Access subscription. Year is the named report season year (for example Winter 2025), not the calendar-quarter label. The legacy product-ID endpoint remains unchanged. */
    "g2.list_reports": {
      input: {
        /**
         * reportType value.
         * @minLength 1
         */
        reportType: "grid" | "momentum" | "usability" | "implementation" | "results" | "relationship";
        /**
         * Named report season year, for example 2025 for Winter 2025
         * @minimum 1
         * @maximum 9999
         */
        year?: number;
        /** Report season; omitted to include all seasons */
        season?: "spring" | "summer" | "fall" | "winter";
        /** Omitted includes all segments; all selects overall-market reports only */
        companySegment?: "all" | "small-business" | "mid-market" | "enterprise";
        /**
         * UUID of a claimed or owned product appearing in the report
         * @format uuid
         */
        productId?: string;
        /**
         * categoryId value.
         * @format uuid
         */
        categoryId?: string;
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /** Sparse fields for report discovery */
        fields?: Array<"title" | "report_type" | "year" | "season" | "company_segment" | "category_id" | "category_name" | "released_on">;
      };
      output: {
        /** G2 list reports result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** List products on a research board. */
    "g2.list_research_board_products": {
      input: {
        /**
         * Research board UUID
         * @minLength 1
         */
        boardId: string;
        /** Comma separated list of fields for products to include in response */
        fields?: Array<"name" | "slug" | "image_url" | "star_rating" | "review_count">;
      };
      output: {
        /** G2 list research board products result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** List research boards for current user. */
    "g2.list_research_boards": {
      input: {
        /** Comma separated list of fields for research_boards to include in response */
        fields?: Array<"title" | "origin" | "budget" | "industry" | "employee_count" | "deadline_at" | "product_count" | "created_at" | "updated_at">;
        /** Comma-separated list of relationships to include (e.g. products) */
        include?: Array<"products">;
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
      };
      output: {
        /** G2 list research boards result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Lists screenshots. **Requires `screenshots.read` scope.** */
    "g2.list_screenshots": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /**
         * Min time for when a record was created. Using rfc3339 format.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * Max time for when a record was last updated. Using rfc3339 format.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * Min time for when a record was last updated. Using rfc3339 format.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * Max time for when a record was last updated. Using rfc3339 format.
         * @format date-time
         */
        updatedAtLt?: string;
        /** Comma separated list of fields for screenshots to include in response */
        fields?: Array<"id" | "product_id" | "url" | "created_at" | "updated_at" | "file_name" | "title" | "description">;
        /** Comma-separated list of relationships to include (e.g. product,vendor) */
        include?: Array<"product" | "vendor">;
      };
      output: {
        /** G2 list screenshots result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Lists unlocked companies for a product. **Requires `g2_activate.read` scope.** */
    "g2.list_unlocked_companies": {
      input: {
        /**
         * Product UUID or Slug
         * @minLength 1
         */
        productId: string;
        /** Sort order. Prefix with "-" for descending (e.g. "-intent_score"). */
        sort?: "-intent_score" | "unlocked_at" | "-unlocked_at";
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /** Comma separated list of fields for unlocked_companies to include in response */
        fields?: Array<"product_id" | "company_name" | "company_country" | "company_employees" | "intent_score" | "credit_cost" | "viewed_at" | "unlocked_at" | "contacts">;
      };
      output: {
        /** G2 list unlocked companies result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** List of vendors. **Requires `vendors.read` scope.** */
    "g2.list_vendors": {
      input: {
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /**
         * Filter records updated after this date
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * Filter records updated before this date
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * Filter records created after this date
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * Filter records created before this date
         * @format date-time
         */
        createdAtLt?: string;
        /** Filter vendors by exact domain match (e.g. "salesforce.com") */
        domain?: string;
        /** Comma separated list of fields for vendors to include in response */
        fields?: Array<"name" | "description" | "company_website" | "slug" | "public_products_count" | "updated_at">;
        /** Comma-separated list of relationships to include (e.g. products) */
        include?: Array<"products">;
      };
      output: {
        /** G2 list vendors result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Browse buyer intent interactions (product-agnostic). **Requires `buyer_intent.read` scope.**

Query buyer intent data across one or more products in a single request.
Pass product_id to specify which products, or omit to use your assigned products.
Supports multi-product queries — the data is not scoped to a single subject product. */
    "g2.query_buyer_intent": {
      input: {
        /** Comma separated list of dimensions */
        dimensions?: Array<"signal_type" | "time" | "day" | "week" | "month" | "company_id" | "company_name" | "company_domain" | "company_country" | "company_state" | "company_city" | "company_employees" | "company_industry" | "visitor_id" | "visitor_country" | "visitor_state" | "visitor_city" | "product_id" | "product_slug" | "product_name" | "category_id" | "category_slug" | "category_name" | "left_product_id" | "left_product_slug" | "left_product_name" | "right_product_id" | "right_product_slug" | "right_product_name" | "vendor_id" | "vendor_slug" | "vendor_name" | "provider">;
        /** Comma separated list of measures */
        measures?: Array<"total_activity" | "visitor_count" | "company_count" | "last_seen_at">;
        /** One or more product IDs, UUIDs, or URL slugs (comma-separated) that scope the permissions of this query. Defaults to your assigned products. */
        subjectProductIds?: string;
        /** Sort field with optional direction prefix. Use "-" for descending (e.g., "-day") */
        sort?: string;
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /** Filters keyed by dimension and suffix (_eq, _not_eq, _cont, _not_cont, _gt, _gteq, _lt, _lteq, _present, _empty; endpoint-specific operators may also be supported). */
        dimensionFilters?: Record<string, string | number>;
      };
      output: {
        /** G2 query buyer intent result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Browse buyer intent interactions for a product. **Requires `buyer_intent.read` scope.**

Query buyer intent data using an analytical query interface.

## Query Language

This endpoint uses an OLAP-style query language that supports:
- **Dimensions**: Group and categorize data (e.g., company_name, company_domain, day)
- **Measures**: Aggregate numerical values (e.g., total_activity, visitor_count)
- **Filters**: Apply conditions to limit results

### Filter Operators
Filters use the format `dimension_filters[name_suffix]` where `name`
is the dimension name and `suffix` indicates the operation:

- `_eq`: Equals (exact match)
- `_not_eq`: Not equals
- `_cont`: Contains (substring match)
- `_not_cont`: Does not contain
- `_gt`: Greater than
- `_gteq`: Greater than or equal
- `_lt`: Less than
- `_lteq`: Less than or equal
- `_present`: Field has a value
- `_empty`: Field is empty

### Time Series vs Aggregated Data
- **Aggregated**: Request dimensions without `day` for company-level summaries
- **Time Series**: Include `day` dimension for daily breakdowns over time

### Sorting Results
Use the `sort` parameter to order results by any dimension or measure:
- **Ascending**: `sort=company_name` or `sort=total_activity`
- **Descending**: `sort=-company_intent_score` (prefix with `-`)
- **Default**: Results are sorted by `-company_intent_score` (highest intent first)

Available sort fields include all dimensions and measures listed above.

### Signal Types
The `signal_type` dimension identifies the type of buyer activity on G2 (e.g., `profile`, `pricing`, `compare`).

### Competitive Signals
Results include activity on both your product and competitor products in your categories.
Compare `left_product_id` to `subject_product_id` to distinguish the two:

- **`left_product_id` = `subject_product_id`**: Direct signal — activity on your product.
- **`left_product_id` ≠ `subject_product_id`**: Competitive signal — activity on a competitor.
  The `signal_type` indicates what the buyer did (e.g., viewed the competitor's `profile` or `pricing` page).
  Use `left_product_name` / `left_product_slug` to identify the competitor.

### Examples
- Company summary: `dimensions=company_name,company_domain&measures=total_activity`
- Time series: `dimensions=company_name,day&measures=company_intent_score`
- Filtered: `dimension_filters[company_name_cont]=Acme&dimensions=company_name`
- Sorted by activity: `dimensions=company_name&measures=total_activity&sort=-total_activity`
- Competitive activity: `dimensions=company_name,signal_type,left_product_name,left_product_id&measures=total_activity` */
    "g2.query_product_buyer_intent": {
      input: {
        /**
         * Identifier for the subject product
         * @minLength 1
         */
        subjectProductId: string;
        /** Comma separated list of dimensions */
        dimensions?: Array<"signal_type" | "time" | "day" | "week" | "month" | "company_id" | "company_name" | "company_domain" | "company_country" | "company_state" | "company_city" | "company_employees" | "company_industry" | "visitor_id" | "visitor_country" | "visitor_state" | "visitor_city" | "company_intent_score" | "product_id" | "product_slug" | "product_name" | "category_id" | "category_slug" | "category_name" | "left_product_id" | "left_product_slug" | "left_product_name" | "right_product_id" | "right_product_slug" | "right_product_name" | "vendor_id" | "vendor_slug" | "vendor_name" | "provider">;
        /** Comma separated list of measures */
        measures?: Array<"total_activity" | "visitor_count" | "company_count" | "last_seen_at">;
        /** Sort field with optional direction prefix. Use "-" for descending (e.g., "-day") */
        sort?: string;
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /** Filters keyed by dimension and suffix (_eq, _not_eq, _cont, _not_cont, _gt, _gteq, _lt, _lteq, _present, _empty; endpoint-specific operators may also be supported). */
        dimensionFilters?: Record<string, string | number>;
      };
      output: {
        /** G2 query product buyer intent result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Browse sandbox buyer intent interactions for a product. **No scope is required to access this sandbox endpoint**

**⚠️ Sandbox API**: This endpoint is a sandbox endpoint and is data limited. Only data between 6 months to 1 year ago will be available.

Query buyer intent data using an analytical query interface.

## Query Language

This endpoint uses an OLAP-style query language that supports:
- **Dimensions**: Group and categorize data (e.g., company_name, company_domain, day)
- **Measures**: Aggregate numerical values (e.g., total_activity, visitor_count)
- **Filters**: Apply conditions to limit results

### Filter Operators
Filters use the format `dimension_filters[name_suffix]` where `name`
is the dimension name and `suffix` indicates the operation:

- `_eq`: Equals (exact match)
- `_not_eq`: Not equals
- `_cont`: Contains (substring match)
- `_not_cont`: Does not contain
- `_gt`: Greater than
- `_gteq`: Greater than or equal
- `_lt`: Less than
- `_lteq`: Less than or equal
- `_present`: Field has a value
- `_empty`: Field is empty

### Time Series vs Aggregated Data
- **Aggregated**: Request dimensions without `day` for company-level summaries
- **Time Series**: Include `day` dimension for daily breakdowns over time

### Sorting Results
Use the `sort` parameter to order results by any dimension or measure:
- **Ascending**: `sort=company_name` or `sort=total_activity`
- **Descending**: `sort=-company_intent_score` (prefix with `-`)
- **Default**: Results are sorted by `-company_intent_score` (highest intent first)

Available sort fields include all dimensions and measures listed above.

### Examples
- Company summary: `dimensions=company_name,company_domain&measures=total_activity`
- Time series: `dimensions=company_name,day&measures=company_intent_score`
- Filtered: `dimension_filters[company_name_cont]=Acme&dimensions=company_name`
- Sorted by activity: `dimensions=company_name&measures=total_activity&sort=-total_activity` */
    "g2.query_sandbox_buyer_intent": {
      input: {
        /**
         * Identifier for the subject product
         * @minLength 1
         */
        subjectProductId: string;
        /** Comma separated list of dimensions */
        dimensions?: Array<"signal_type" | "time" | "day" | "week" | "month" | "company_id" | "company_name" | "company_domain" | "company_country" | "company_state" | "company_city" | "company_employees" | "company_industry" | "visitor_id" | "visitor_country" | "visitor_state" | "visitor_city" | "company_intent_score" | "product_id" | "product_slug" | "product_name" | "category_id" | "category_slug" | "category_name" | "left_product_id" | "left_product_slug" | "left_product_name" | "right_product_id" | "right_product_slug" | "right_product_name" | "vendor_id" | "vendor_slug" | "vendor_name" | "provider">;
        /** Comma separated list of measures */
        measures?: Array<"total_activity" | "visitor_count" | "company_count" | "last_seen_at">;
        /** Sort field with optional direction prefix. Use "-" for descending (e.g., "-day") */
        sort?: string;
        /**
         * Number of records per page (default: 25, max: 250)
         * @minimum 1
         * @maximum 250
         * @default 25
         */
        pageSize?: number;
        /** Cursor for fetching the next page of results */
        after?: string;
        /** Cursor for fetching the previous page of results */
        before?: string;
        /** Filters keyed by dimension and suffix (_eq, _not_eq, _cont, _not_cont, _gt, _gteq, _lt, _lteq, _present, _empty; endpoint-specific operators may also be supported). */
        dimensionFilters?: Record<string, string | number>;
      };
      output: {
        /** G2 query sandbox buyer intent result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Remove a product from a research board. */
    "g2.remove_research_board_product": {
      input: {
        /**
         * Research board UUID
         * @minLength 1
         */
        boardId: string;
        /**
         * Product UUID or slug
         * @minLength 1
         */
        productId: string;
      };
      output: {
        /** Whether the resource was removed. */
        success: boolean;
      };
    };
    /** Remove multiple products from a research board. */
    "g2.remove_research_board_products": {
      input: {
        /**
         * Research board UUID
         * @minLength 1
         */
        boardId: string;
        /**
         * Product UUIDs or slugs.
         * @maxItems 20
         */
        productIds: Array<string>;
      };
      output: {
        /** Batch removal results from G2. */
        data: Record<string, unknown> | Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Match a free-text business description to NAICS industry names. **Requires `g2_activate.read` scope.** */
    "g2.search_activate_industries": {
      input: {
        /**
         * Product UUID or Slug
         * @minLength 1
         */
        productId: string;
        /**
         * Free-text business description to match against NAICS industries
         * @minLength 2
         * @maxLength 500
         */
        query: string;
        /**
         * Maximum matches to return (default 8)
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
      };
      output: {
        /** G2 search activate industries result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit or update a review for a product. **⚠️ G2 is currently restricting access to this endpoint.**
 This endpoint allows the user to submit or update a review for a specific product.
 The review is based on predefined questions and answers.' */
    "g2.submit_product_review": {
      input: {
        /**
         * productId value.
         * @minLength 1
         */
        productId: string;
        /** Partner mode is inferred from the OAuth app; partner is also accepted explicitly */
        template?: string;
        /** Comma separated list of fields for reviews to include in response */
        fields?: Array<"questions" | "published_at" | "submitted_at" | "user_updated_at" | "url">;
        /** Comma-separated list of relationships to include (e.g. user,answers) */
        include?: Array<"user" | "answers">;
        /** Explicit caller choice to accept G2 terms of service. */
        termsAccepted: boolean;
        /** Explicit caller choice to accept G2 privacy policy. */
        privacyPolicyAccepted: boolean;
        /** answers value. */
        answers: Array<{
          /** question id value. */
          question_id: string;
          /** Answer value matching the format of the question */
          value: string | number | Array<string>;
        }>;
        /** landing page id value. */
        landingPageId?: string;
        /** source type value. */
        sourceType?: string;
        /** utm param id value. */
        utmParamId?: string;
        /** Partner metadata; partner_submission_id is required for partner submissions */
        metadata?: {
          /** partner submission id value. */
          partner_submission_id: string;
          /** ip address value. */
          ip_address?: string;
          /** user agent value. */
          user_agent?: string;
          /** incentivized value. */
          incentivized?: boolean;
        };
      };
      output: {
        /** G2 submit product review result data. */
        data: Record<string, unknown>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Spends G2 Activate credits to unlock one or more locked companies. **Requires `g2_activate.write` scope.**

Accepts 1-25 opaque `sig` tokens from the locked_companies response and spends credits to reveal each company's identity. Always returns 200 — per-sig failures land in `meta.skipped[]` rather than as HTTP errors. Idempotent: replaying an already-unlocked sig costs 0 credits and returns the existing record. */
    "g2.unlock_companies": {
      input: {
        /**
         * Product UUID or Slug
         * @minLength 1
         */
        productId: string;
        /**
         * Opaque HMAC-signed unlock tokens from locked_companies' `sig` attribute.
         * @minItems 1
         * @maxItems 25
         */
        sigs: Array<string>;
      };
      output: {
        /** G2 unlock companies result data. */
        data: Array<Record<string, unknown>>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Updates G2 Activate settings for a product. **Requires `g2_activate.write` scope.** */
    "g2.update_activate_settings": {
      input: {
        /**
         * Product UUID or Slug
         * @minLength 1
         */
        productId: string;
        /** categories value. */
        categories?: Array<string>;
        /** departments value. */
        departments?: Array<string>;
        /** job functions value. */
        jobFunctions?: Array<string>;
        /** management levels value. */
        managementLevels?: Array<string>;
        /** org employees gteq value. */
        orgEmployeesGteq?: number;
        /** org employees lteq value. */
        orgEmployeesLteq?: number;
        /** org annual revenue gteq value. */
        orgAnnualRevenueGteq?: number;
        /** org annual revenue lteq value. */
        orgAnnualRevenueLteq?: number;
        /** org location in value. */
        orgLocationIn?: Array<{
          /** country code value. */
          country_code?: string;
          /** state codes value. */
          state_codes?: Array<string>;
        }>;
        /** visitor location in value. */
        visitorLocationIn?: Array<{
          /** country code value. */
          country_code?: string;
          /** state codes value. */
          state_codes?: Array<string>;
        }>;
      };
      output: {
        /** G2 update activate settings result data. */
        data: Record<string, unknown>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Update a product mapping. **No scope required.** */
    "g2.update_product_mapping": {
      input: {
        /**
         * Product mapping ID
         * @minLength 1
         */
        mappingId: string;
        /** external id value. */
        externalId?: string | null;
        /** product id value. */
        productId?: string | null;
        /** match score value. */
        matchScore?: number | null;
        /** partner product name value. */
        partnerProductName?: string | null;
      };
      output: {
        /** G2 update product mapping result data. */
        data: Record<string, unknown>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Update a research board. */
    "g2.update_research_board": {
      input: {
        /**
         * Research board UUID
         * @minLength 1
         */
        boardId: string;
        /** title value. */
        title?: string;
      };
      output: {
        /** G2 update research board result data. */
        data: Record<string, unknown>;
        /** Related resources returned by G2. */
        included?: Array<Record<string, unknown>>;
        /** Upstream links, returned without following them. */
        links?: Record<string, unknown>;
        /** Upstream counts, aggregates, credit usage or partial failures. */
        meta?: Record<string, unknown>;
        /** Per-item failures returned with a successful batch response. */
        errors?: Array<Record<string, unknown>>;
        /** Pass as after for the next page; null if unavailable. */
        nextCursor: string | null;
        /** Pass as before for the previous page; null if unavailable. */
        previousCursor: string | null;
        [key: string]: unknown;
      };
    };
  }
}
