import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Export Microsoft Clarity live insights for the last 1 to 3 days with up to three optional breakdown dimensions. */
    "microsoft_clarity.export_live_insights": {
      input: {
        /** The number of days to export. Use 1, 2, or 3 for the last 24, 48, or 72 hours. */
        numOfDays: 1 | 2 | 3;
        /** The first optional dimension used to break down the exported insights. */
        dimension1?: "Browser" | "Device" | "Country/Region" | "OS" | "Source" | "Medium" | "Campaign" | "Channel" | "URL";
        /** The second optional dimension used to break down the exported insights. */
        dimension2?: "Browser" | "Device" | "Country/Region" | "OS" | "Source" | "Medium" | "Campaign" | "Channel" | "URL";
        /** The third optional dimension used to break down the exported insights. */
        dimension3?: "Browser" | "Device" | "Country/Region" | "OS" | "Source" | "Medium" | "Campaign" | "Channel" | "URL";
      };
      output: {
        /** The metric groups returned by the Microsoft Clarity Data Export API. */
        insights: Array<{
          /**
           * The metric group name returned by Microsoft Clarity.
           * @minLength 1
           */
          metricName: string;
          /** The rows returned for this metric group. */
          information: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
