import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Query Meituan Travel for flights, trains, hotels, attractions, itineraries, local transportation, and other travel information using natural language. Requests may take up to two minutes, so use a caller timeout longer than 120 seconds. */
    "meituan.query_travel": {
      input: {
        /**
         * The user's travel question or request, including useful details such as dates, origin, destination, budget, and number of travelers.
         * @minLength 1
         */
        query: string;
        /**
         * The user's current city or the city used as context for the travel query. Defaults to Beijing when omitted.
         * @minLength 1
         */
        city?: string;
        /**
         * The complete original user request used for Meituan attribution and analytics. Defaults to `query` when omitted.
         * @minLength 1
         */
        originQuery?: string;
      };
      output: {
        /**
         * The Meituan Travel result as Markdown text, which may include recommendations, prices, images, and booking links.
         * @minLength 1
         */
        content: string;
      };
    };
  }
}
