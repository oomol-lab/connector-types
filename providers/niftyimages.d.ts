import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get details for a NiftyImages personalized image or countdown timer by its URL. */
    "niftyimages.get_image": {
      input: {
        /**
         * The NiftyImages image URL to look up.
         * @format uri
         */
        url: string;
      };
      output: {
        /** The image name. */
        Name: string;
        /**
         * The public NiftyImages image URL.
         * @format uri
         */
        Url: string;
        /** The number of opens reported by NiftyImages, which the API may return as an integer or numeric string. */
        Opens: number | string;
        /** The image type, such as Personalized Image, Countdown Timer, Personalized, or Timer. */
        ImageType: string;
        /** The ISO 8601 date-time when the image was created. */
        CreateDate: string;
        /** The ISO 8601 date-time when the image was last updated. */
        LastUpdated: string;
        /** Whether the image has not been deleted. */
        Active?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get aggregated NiftyImages image statistics for an optional ISO 8601 date range. */
    "niftyimages.get_image_stats": {
      input: {
        /** The inclusive start of the statistics range as an ISO 8601 date or date-time. NiftyImages defaults to 30 days ago. */
        startDate?: string;
        /** The inclusive end of the statistics range as an ISO 8601 date or date-time. NiftyImages defaults to today. */
        endDate?: string;
      };
      output: Array<{
        /** The image name. */
        Name: string;
        /**
         * The public NiftyImages image URL.
         * @format uri
         */
        Url: string;
        /** The number of opens reported by NiftyImages, which the API may return as an integer or numeric string. */
        Opens: number | string;
        /** The image type, such as Personalized Image, Countdown Timer, Personalized, or Timer. */
        ImageType: string;
        /** The ISO 8601 date-time when the image was created. */
        CreateDate: string;
        /** The ISO 8601 date-time when the image was last updated. */
        LastUpdated: string;
        /** Whether the image has not been deleted. */
        Active?: boolean;
        [key: string]: unknown;
      }>;
    };
    /** Get aggregated NiftyImages user, image, and impression statistics grouped by widget. */
    "niftyimages.get_widget_stats": {
      input: {
        /** The inclusive start of the statistics range as an ISO 8601 date or date-time. NiftyImages defaults to 30 days ago. */
        startDate?: string;
        /** The inclusive end of the statistics range as an ISO 8601 date or date-time. NiftyImages defaults to today. */
        endDate?: string;
      };
      output: Array<{
        /** Whether the widget has not been deleted. */
        Active: boolean;
        /**
         * The number of images created in the selected date range.
         * @minimum 0
         */
        Images: number;
        /**
         * The number of widget impressions in the selected date range.
         * @minimum 0
         */
        Impressions: number;
        /** The widget name. */
        Name: string;
        /**
         * The number of users created in the selected date range.
         * @minimum 0
         */
        Users: number;
        /** The widget key used in later widget API calls. */
        WidgetKey: string;
        [key: string]: unknown;
      }>;
    };
    /** Get image and impression statistics for one NiftyImages widget user during an optional date range. */
    "niftyimages.get_widget_user_stats": {
      input: {
        /**
         * The key of the NiftyImages widget.
         * @minLength 1
         */
        widgetKey: string;
        /**
         * The widget user name or identifier. The connector URL-encodes this path value.
         * @minLength 1
         */
        user: string;
        /** The inclusive start of the statistics range as an ISO 8601 date or date-time. NiftyImages defaults to 30 days ago. */
        startDate?: string;
        /** The inclusive end of the statistics range as an ISO 8601 date or date-time. NiftyImages defaults to today. */
        endDate?: string;
      };
      output: {
        /**
         * The number of images created by the widget user.
         * @minimum 0
         */
        Images: number;
        /**
         * The number of impressions for the widget user.
         * @minimum 0
         */
        Impressions: number;
        /** The widget user name or identifier. */
        User: string;
        /** Whether the widget user is suspended. */
        Suspended: boolean;
        [key: string]: unknown;
      };
    };
    /** Page through images in the connected NiftyImages account. */
    "niftyimages.list_images": {
      input: {
        /** The number of image records to return. NiftyImages defaults to 10. */
        pageSize?: number;
        /** The image page number. NiftyImages defaults to 1. */
        pageNumber?: number;
      };
      output: Array<{
        /** The image name. */
        Name: string;
        /**
         * The public NiftyImages image URL.
         * @format uri
         */
        Url: string;
        /** The number of opens reported by NiftyImages, which the API may return as an integer or numeric string. */
        Opens: number | string;
        /** The image type, such as Personalized Image, Countdown Timer, Personalized, or Timer. */
        ImageType: string;
        /** The ISO 8601 date-time when the image was created. */
        CreateDate: string;
        /** The ISO 8601 date-time when the image was last updated. */
        LastUpdated: string;
        /** Whether the image has not been deleted. */
        Active?: boolean;
        [key: string]: unknown;
      }>;
    };
    /** List images created or viewed through a NiftyImages widget during an optional date range. */
    "niftyimages.list_widget_images": {
      input: {
        /**
         * The key of the NiftyImages widget.
         * @minLength 1
         */
        widgetKey: string;
        /** The inclusive start of the statistics range as an ISO 8601 date or date-time. NiftyImages defaults to 30 days ago. */
        startDate?: string;
        /** The inclusive end of the statistics range as an ISO 8601 date or date-time. NiftyImages defaults to today. */
        endDate?: string;
      };
      output: Array<{
        /** The NiftyImages identifier for the widget image. */
        ImageID: number;
        /** The widget image type. */
        ImageType: string;
        /**
         * The number of impressions for the widget image.
         * @minimum 0
         */
        Impressions: number;
        /** The widget image name. */
        Name: string;
        /** The widget user name or identifier. */
        User: string;
        /** Whether the widget user is suspended. */
        Suspended: boolean;
        /**
         * The public URI of the widget image.
         * @format uri
         */
        Uri: string;
        [key: string]: unknown;
      }>;
    };
    /** List images created or viewed by one NiftyImages widget user during an optional date range. */
    "niftyimages.list_widget_user_images": {
      input: {
        /**
         * The key of the NiftyImages widget.
         * @minLength 1
         */
        widgetKey: string;
        /**
         * The widget user name or identifier. The connector URL-encodes this path value.
         * @minLength 1
         */
        user: string;
        /** The inclusive start of the statistics range as an ISO 8601 date or date-time. NiftyImages defaults to 30 days ago. */
        startDate?: string;
        /** The inclusive end of the statistics range as an ISO 8601 date or date-time. NiftyImages defaults to today. */
        endDate?: string;
      };
      output: Array<{
        /** The NiftyImages identifier for the widget image. */
        ImageID: number;
        /** The widget image type. */
        ImageType: string;
        /**
         * The number of impressions for the widget image.
         * @minimum 0
         */
        Impressions: number;
        /** The widget image name. */
        Name: string;
        /** The widget user name or identifier. */
        User: string;
        /** Whether the widget user is suspended. */
        Suspended: boolean;
        /**
         * The public URI of the widget image.
         * @format uri
         */
        Uri: string;
        [key: string]: unknown;
      }>;
    };
    /** List users who created images or accumulated impressions through a NiftyImages widget. */
    "niftyimages.list_widget_users": {
      input: {
        /**
         * The key of the NiftyImages widget.
         * @minLength 1
         */
        widgetKey: string;
        /** The inclusive start of the statistics range as an ISO 8601 date or date-time. NiftyImages defaults to 30 days ago. */
        startDate?: string;
        /** The inclusive end of the statistics range as an ISO 8601 date or date-time. NiftyImages defaults to today. */
        endDate?: string;
      };
      output: Array<{
        /**
         * The number of images created by the widget user.
         * @minimum 0
         */
        Images: number;
        /**
         * The number of impressions for the widget user.
         * @minimum 0
         */
        Impressions: number;
        /** The widget user name or identifier. */
        User: string;
        /** Whether the widget user is suspended. */
        Suspended: boolean;
        [key: string]: unknown;
      }>;
    };
    /** List active widgets in the connected NiftyImages account. */
    "niftyimages.list_widgets": {
      input: Record<string, never>;
      output: Array<{
        /** The widget name. */
        Name: string;
        /** The widget key used in later widget API calls. */
        WidgetKey: string;
        [key: string]: unknown;
      }>;
    };
  }
}
