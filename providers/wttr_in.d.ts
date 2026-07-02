import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get current weather and forecast from wttr.in as JSON. */
    "wttr_in.get_weather": {
      input: {
        /**
         * Optional wttr.in location such as London, muc, @example.com, 94107, or 30.25,120.21. If omitted, wttr.in infers the location from the connector or proxy IP rather than the end user.
         * @minLength 1
         */
        location?: string;
        /** The wttr.in JSON format variant. */
        format?: "j1" | "j2";
        /**
         * Optional wttr.in localization language code such as en, fr, or zh.
         * @minLength 1
         */
        lang?: string;
        /** Optional wttr.in unit mode. */
        units?: "metric" | "us";
      };
      output: {
        /** The normalized wttr.in location metadata. */
        location: {
          /** The nearest area name returned by wttr.in. */
          name: string | null;
          /** The region returned by wttr.in. */
          region: string | null;
          /** The country returned by wttr.in. */
          country: string | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          latitude: number | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          longitude: number | null;
          /** The request query reported by wttr.in. */
          query: string | null;
          /** The request type reported by wttr.in. */
          type: string | null;
        };
        /** A normalized wttr.in current weather summary. */
        current: {
          /** The observation time returned by wttr.in. */
          observationTime: string | null;
          /** The current weather description. */
          description: string | null;
          /** The wttr.in weather condition code. */
          weatherCode: string | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          temperatureC: number | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          temperatureF: number | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          feelsLikeC: number | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          feelsLikeF: number | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          humidity: number | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          cloudCover: number | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          pressureMb: number | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          precipitationMm: number | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          windSpeedKmph: number | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          windSpeedMiles: number | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          windDirectionDegree: number | null;
          /** The 16-point wind direction label. */
          windDirection16Point: string | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          uvIndex: number | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          visibilityKm: number | null;
          /**
           * The wttr.in weather icon URL when present.
           * @format uri
           */
          iconUrl: string | null;
        };
        /** Normalized daily forecast summaries. */
        forecast: Array<{
          /**
           * The forecast date.
           * @format date
           */
          date: string | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          minTempC: number | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          maxTempC: number | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          avgTempC: number | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          minTempF: number | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          maxTempF: number | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          avgTempF: number | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          uvIndex: number | null;
          /** The numeric weather value after parsing the wttr.in string field. */
          sunHours: number | null;
          /** The normalized wttr.in astronomy data for one forecast day. */
          astronomy: {
            /** The sunrise time returned by wttr.in. */
            sunrise: string | null;
            /** The sunset time returned by wttr.in. */
            sunset: string | null;
            /** The moonrise time returned by wttr.in. */
            moonrise: string | null;
            /** The moonset time returned by wttr.in. */
            moonset: string | null;
            /** The moon phase name returned by wttr.in. */
            moonPhase: string | null;
            /** The numeric weather value after parsing the wttr.in string field. */
            moonIllumination: number | null;
          };
        }>;
        /** The raw wttr.in JSON response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
