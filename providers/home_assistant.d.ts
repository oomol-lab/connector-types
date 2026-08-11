import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a Home Assistant service to control entities, such as light.turn_on or switch.turn_off. */
    "home_assistant.call_service": {
      input: {
        /**
         * The Home Assistant service domain, for example light or switch.
         * @minLength 1
         */
        domain: string;
        /**
         * The Home Assistant service name, for example turn_on or turn_off.
         * @minLength 1
         */
        service: string;
        /** The JSON service data sent directly to Home Assistant, such as entity_id or brightness. */
        serviceData?: Record<string, unknown>;
        /** Whether to request service response data with the return_response query parameter. */
        returnResponse?: boolean;
      };
      output: {
        /** The Home Assistant states changed by the service call. */
        changedStates: Array<{
          /** The Home Assistant entity identifier. */
          entity_id?: string;
          /** The current state value. */
          state?: string;
          /** The integration-specific attributes for the entity state. */
          attributes?: Record<string, unknown>;
          /** The timestamp when the state last changed. */
          last_changed?: string;
          /** The timestamp when the state object was last updated. */
          last_updated?: string;
          /** The Home Assistant context attached to a state change. */
          context?: {
            /** The Home Assistant context identifier. */
            id?: string | null;
            /** The optional parent context identifier. */
            parent_id?: string | null;
            /** The optional Home Assistant user identifier. */
            user_id?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The optional Home Assistant service response object. */
        serviceResponse: Record<string, unknown> | null;
      };
    };
    /** Ask Home Assistant to validate its own configuration files and report errors and warnings. Requires an admin access token. */
    "home_assistant.check_config": {
      input: Record<string, never>;
      output: {
        /** Either valid or invalid. */
        result: string;
        /** The configuration errors, or null when there are none. */
        errors: string | null;
        /** The configuration warnings, or null when there are none. */
        warnings: string | null;
      };
    };
    /** Delete one Home Assistant automation. Requires an admin access token, and only covers entries stored in the Home Assistant UI-editable config; entries defined in other YAML files return not found. */
    "home_assistant.delete_automation_config": {
      input: {
        /**
         * The automation id to delete.
         * @minLength 1
         */
        automationId: string;
      };
      output: {
        /** The Home Assistant result status, normally ok. */
        result: string;
      };
    };
    /** Delete one Home Assistant scene. Requires an admin access token, and only covers entries stored in the Home Assistant UI-editable config; entries defined in other YAML files return not found. */
    "home_assistant.delete_scene_config": {
      input: {
        /**
         * The scene id to delete.
         * @minLength 1
         */
        sceneId: string;
      };
      output: {
        /** The Home Assistant result status, normally ok. */
        result: string;
      };
    };
    /** Delete one Home Assistant script. Requires an admin access token, and only covers entries stored in the Home Assistant UI-editable config; entries defined in other YAML files return not found. */
    "home_assistant.delete_script_config": {
      input: {
        /**
         * The script key to delete.
         * @minLength 1
         */
        scriptKey: string;
      };
      output: {
        /** The Home Assistant result status, normally ok. */
        result: string;
      };
    };
    /** Run a Home Assistant script sequence containing service calls, delays, and conditions. */
    "home_assistant.execute_script": {
      input: {
        /**
         * The Home Assistant script steps to execute.
         * @minItems 1
         */
        sequence: Array<Record<string, unknown>>;
        /** Optional variables available to the script sequence. */
        variables?: Record<string, unknown>;
      };
      output: {
        /** The Home Assistant context for the script run. */
        context: Record<string, unknown> | null;
        /** The optional script response. */
        response: Record<string, unknown> | null;
      };
    };
    /** Fire one Home Assistant event with optional event data. */
    "home_assistant.fire_event": {
      input: {
        /**
         * The Home Assistant event type to fire.
         * @minLength 1
         */
        eventType: string;
        /** The optional JSON event data sent to Home Assistant. */
        eventData?: Record<string, unknown>;
      };
      output: {
        /** The JSON response returned by Home Assistant after firing the event. */
        response: Record<string, unknown>;
      };
    };
    /** Fetch the stored configuration for one Home Assistant automation. Requires an admin access token, and only covers entries stored in the Home Assistant UI-editable config; entries defined in other YAML files return not found. */
    "home_assistant.get_automation_config": {
      input: {
        /**
         * The automation id, which is the id field inside the automation.
         * @minLength 1
         */
        automationId: string;
      };
      output: {
        /** The stored automation configuration. */
        config: Record<string, unknown>;
      };
    };
    /** Fetch the Home Assistant instance configuration. */
    "home_assistant.get_config": {
      input: Record<string, never>;
      output: {
        /** The Home Assistant configuration object. */
        config: Record<string, unknown>;
      };
    };
    /** Fetch the Home Assistant error log for the current session as plain text. Home Assistant serves this only when the instance runs with file logging enabled, so it can report not found on an otherwise healthy instance. */
    "home_assistant.get_error_log": {
      input: Record<string, never>;
      output: {
        /** The plain-text Home Assistant error log. */
        log: string;
      };
    };
    /** Fetch recorded state history for one or more Home Assistant entities over a time period, for answering questions about how a value changed. */
    "home_assistant.get_history": {
      input: {
        /**
         * The entity ids to fetch history for. Home Assistant requires at least one.
         * @minItems 1
         */
        entityIds: Array<string>;
        /**
         * The start of the period. Defaults to one day before now when omitted.
         * @format date-time
         */
        startTime?: string;
        /**
         * The end of the period. Defaults to one day after the start time.
         * @format date-time
         */
        endTime?: string;
        /** Return only state changes without full attribute payloads, which greatly reduces response size. */
        minimalResponse?: boolean;
        /** Omit entity attributes from the response. */
        noAttributes?: boolean;
        /** Omit the state that was already active at the start of the period. */
        skipInitialState?: boolean;
        /** Return only significant state changes. Home Assistant defaults this to true. */
        significantChangesOnly?: boolean;
      };
      output: {
        /** One list of state objects per requested entity, in the order Home Assistant returns them. */
        history: Array<Array<{
          /** The Home Assistant entity identifier when included. */
          entity_id?: string;
          /** The recorded state value. */
          state?: string;
          /** The integration-specific attributes when included. */
          attributes?: Record<string, unknown>;
          /** The timestamp when the state last changed. */
          last_changed?: string;
          /** The timestamp when the state object was last updated. */
          last_updated?: string;
          /** The Home Assistant context attached to a state change. */
          context?: {
            /** The Home Assistant context identifier. */
            id?: string | null;
            /** The optional parent context identifier. */
            parent_id?: string | null;
            /** The optional Home Assistant user identifier. */
            user_id?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>>;
      };
    };
    /** Fetch the Home Assistant logbook: the human-readable timeline of what happened and what triggered it, for diagnosing why something changed. */
    "home_assistant.get_logbook": {
      input: {
        /**
         * The start of the period. Defaults to one day before now when omitted.
         * @format date-time
         */
        startTime?: string;
        /**
         * The end of the period.
         * @format date-time
         */
        endTime?: string;
        /** Optional entity ids to restrict the logbook to. */
        entityIds?: Array<string>;
        /**
         * The number of days to cover, used when no end time is given.
         * @exclusiveMinimum 0
         */
        period?: number;
        /**
         * Optional Home Assistant context id, to list only entries produced by one action.
         * @minLength 1
         */
        contextId?: string;
      };
      output: {
        /** The logbook entries. */
        entries: Array<Record<string, unknown>>;
      };
    };
    /** List Home Assistant entity, device, area, floor, and label registries over the WebSocket API. */
    "home_assistant.get_registries": {
      input: {
        /** The registries to fetch. Omit or pass an empty array to fetch all registries. */
        include?: Array<"entities" | "devices" | "areas" | "floors" | "labels">;
      };
      output: {
        /** Entity registry entries. */
        entities: Array<Record<string, unknown>> | null;
        /** Device registry entries. */
        devices: Array<Record<string, unknown>> | null;
        /** Area registry entries. */
        areas: Array<Record<string, unknown>> | null;
        /** Floor registry entries. */
        floors: Array<Record<string, unknown>> | null;
        /** Label registry entries. */
        labels: Array<Record<string, unknown>> | null;
      };
    };
    /** Fetch the stored configuration for one Home Assistant scene. Requires an admin access token, and only covers entries stored in the Home Assistant UI-editable config; entries defined in other YAML files return not found. */
    "home_assistant.get_scene_config": {
      input: {
        /**
         * The scene id, which is the id field inside the scene.
         * @minLength 1
         */
        sceneId: string;
      };
      output: {
        /** The stored scene configuration. */
        config: Record<string, unknown>;
      };
    };
    /** Fetch the stored configuration for one Home Assistant script. Requires an admin access token, and only covers entries stored in the Home Assistant UI-editable config; entries defined in other YAML files return not found. */
    "home_assistant.get_script_config": {
      input: {
        /**
         * The script key, the slug after script. in the entity id.
         * @minLength 1
         */
        scriptKey: string;
      };
      output: {
        /** The stored script configuration. */
        config: Record<string, unknown>;
      };
    };
    /** Fetch the current state for one Home Assistant entity. */
    "home_assistant.get_state": {
      input: {
        /**
         * The Home Assistant entity identifier, for example light.living_room.
         * @minLength 1
         */
        entityId: string;
      };
      output: {
        /** One Home Assistant entity state object. */
        state: {
          /** The Home Assistant entity identifier. */
          entity_id?: string;
          /** The current state value. */
          state?: string;
          /** The integration-specific attributes for the entity state. */
          attributes?: Record<string, unknown>;
          /** The timestamp when the state last changed. */
          last_changed?: string;
          /** The timestamp when the state object was last updated. */
          last_updated?: string;
          /** The Home Assistant context attached to a state change. */
          context?: {
            /** The Home Assistant context identifier. */
            id?: string | null;
            /** The optional parent context identifier. */
            parent_id?: string | null;
            /** The optional Home Assistant user identifier. */
            user_id?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List the events on one Home Assistant calendar between a start and end time. */
    "home_assistant.list_calendar_events": {
      input: {
        /**
         * The calendar entity identifier, for example calendar.personal.
         * @minLength 1
         */
        entityId: string;
        /**
         * The inclusive start of the window.
         * @format date-time
         */
        start: string;
        /**
         * The exclusive end of the window, which must be after the start.
         * @format date-time
         */
        end: string;
      };
      output: {
        /** The calendar events in the requested window. */
        events: Array<Record<string, unknown>>;
      };
    };
    /** List the calendar entities exposed by Home Assistant. */
    "home_assistant.list_calendars": {
      input: Record<string, never>;
      output: {
        /** The Home Assistant calendar entities. */
        calendars: Array<{
          /** The calendar entity identifier. */
          entity_id?: string;
          /** The calendar display name. */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the triggers, conditions, and actions supported by one Home Assistant device. */
    "home_assistant.list_device_automations": {
      input: {
        /**
         * The Home Assistant device registry identifier.
         * @minLength 1
         */
        deviceId: string;
      };
      output: {
        /** The device triggers. */
        triggers: Array<Record<string, unknown>>;
        /** The device conditions. */
        conditions: Array<Record<string, unknown>>;
        /** The device actions. */
        actions: Array<Record<string, unknown>>;
      };
    };
    /** List Home Assistant event types currently known by the instance. */
    "home_assistant.list_events": {
      input: Record<string, never>;
      output: {
        /** The Home Assistant event type entries returned by the instance. */
        events: Array<Record<string, unknown>>;
      };
    };
    /** List Home Assistant service domains and their available services. */
    "home_assistant.list_services": {
      input: Record<string, never>;
      output: {
        /** The Home Assistant service domains returned by the instance. */
        services: Array<Record<string, unknown>>;
      };
    };
    /** List all current Home Assistant entity states. */
    "home_assistant.list_states": {
      input: Record<string, never>;
      output: {
        /** The Home Assistant state objects. */
        states: Array<{
          /** The Home Assistant entity identifier. */
          entity_id?: string;
          /** The current state value. */
          state?: string;
          /** The integration-specific attributes for the entity state. */
          attributes?: Record<string, unknown>;
          /** The timestamp when the state last changed. */
          last_changed?: string;
          /** The timestamp when the state object was last updated. */
          last_updated?: string;
          /** The Home Assistant context attached to a state change. */
          context?: {
            /** The Home Assistant context identifier. */
            id?: string | null;
            /** The optional parent context identifier. */
            parent_id?: string | null;
            /** The optional Home Assistant user identifier. */
            user_id?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Render a Home Assistant template against the connected instance. */
    "home_assistant.render_template": {
      input: {
        /**
         * The Home Assistant template string to render.
         * @minLength 1
         */
        template: string;
        /** Optional template variables passed to Home Assistant. */
        variables?: Record<string, unknown>;
      };
      output: {
        /** The rendered template text returned by Home Assistant. */
        result: string;
      };
    };
    /** Create or replace one Home Assistant automation. Posting to an unused id creates the automation. Requires an admin access token, and only covers entries stored in the Home Assistant UI-editable config; entries defined in other YAML files return not found. */
    "home_assistant.save_automation_config": {
      input: {
        /**
         * The automation id to create or replace.
         * @minLength 1
         */
        automationId: string;
        /** The automation configuration, with the same keys as an automations.yaml entry such as alias, triggers, conditions, actions, and mode. */
        config: Record<string, unknown>;
      };
      output: {
        /** The Home Assistant result status, normally ok. */
        result: string;
      };
    };
    /** Create or replace one Home Assistant scene. Posting to an unused id creates the scene. Requires an admin access token, and only covers entries stored in the Home Assistant UI-editable config; entries defined in other YAML files return not found. */
    "home_assistant.save_scene_config": {
      input: {
        /**
         * The scene id to create or replace.
         * @minLength 1
         */
        sceneId: string;
        /** The scene configuration, with the same keys as a scenes.yaml entry such as name and entities. */
        config: Record<string, unknown>;
      };
      output: {
        /** The Home Assistant result status, normally ok. */
        result: string;
      };
    };
    /** Create or replace one Home Assistant script. Posting to an unused key creates the script. Requires an admin access token, and only covers entries stored in the Home Assistant UI-editable config; entries defined in other YAML files return not found. */
    "home_assistant.save_script_config": {
      input: {
        /**
         * The script key to create or replace, which must be a slug of lowercase letters, digits, and underscores.
         * @minLength 1
         */
        scriptKey: string;
        /** The script configuration, with the same keys as a scripts.yaml entry such as alias, sequence, and mode. */
        config: Record<string, unknown>;
      };
      output: {
        /** The Home Assistant result status, normally ok. */
        result: string;
      };
    };
    /** Find Home Assistant items related to an entity, device, area, automation, or configuration entry. */
    "home_assistant.search_related": {
      input: {
        /** The Home Assistant item type to search from. */
        itemType: "area" | "automation" | "automation_blueprint" | "config_entry" | "device" | "entity" | "floor" | "group" | "integration" | "label" | "person" | "scene" | "script" | "script_blueprint";
        /**
         * The identifier of the item to search from.
         * @minLength 1
         */
        itemId: string;
      };
      output: {
        /** Related identifiers keyed by Home Assistant item type. */
        related: Record<string, unknown>;
      };
    };
    /** Validate Home Assistant trigger, condition, and action configurations before storing an automation. */
    "home_assistant.validate_config": {
      input: {
        /** Trigger configurations to validate. */
        triggers?: Array<Record<string, unknown>>;
        /** Condition configurations to validate. */
        conditions?: Array<Record<string, unknown>>;
        /** Action configurations to validate. */
        actions?: Array<Record<string, unknown>>;
      };
      output: {
        /** Validation results keyed by configuration family. */
        validation: Record<string, unknown>;
      };
    };
  }
}
