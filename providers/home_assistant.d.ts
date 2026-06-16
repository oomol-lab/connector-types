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
    /** Fetch the Home Assistant instance configuration. */
    "home_assistant.get_config": {
      input: Record<string, never>;
      output: {
        /** The Home Assistant configuration object. */
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
  }
}
