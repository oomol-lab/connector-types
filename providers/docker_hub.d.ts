import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Invite a Docker ID or email address to join a Docker Hub organization by using the documented bulk invite endpoint with a single invitee. */
    "docker_hub.add_org_member": {
      input: {
        /**
         * The Docker Hub organization name.
         * @minLength 1
         */
        orgName: string;
        /**
         * The Docker ID or email address to invite.
         * @minLength 1
         */
        invitee: string;
        /**
         * The optional team to attach to the invite.
         * @minLength 1
         */
        teamName?: string;
        /** The optional organization role to assign to the invite. */
        role?: string;
        /** Whether to validate the invite without creating it. */
        dryRun?: boolean;
      };
      output: {
        /** The invite results returned by the bulk invite endpoint. */
        invitees: Array<{
          /** The invited Docker ID or email address. */
          invitee: string | null;
          /** The invite creation result status. */
          status: string | null;
          /** The invite data returned for a successful invite. */
          invite: {
            /** The invite identifier, when available. */
            id: string | null;
            /** The Docker Hub username that created the invite, when available. */
            inviterUsername: string | null;
            /** The invited Docker ID or email address. */
            invitee: string | null;
            /** The organization that owns the invite. */
            org: string | null;
            /** The team attached to the invite, when available. */
            team: string | null;
            /** The ISO 8601 timestamp when the invite was created, when available. */
            createdAt: string | null;
          } | null;
        }>;
      };
    };
    /** Create a Docker Hub repository inside a namespace. */
    "docker_hub.create_repository": {
      input: {
        /**
         * The namespace where the repository should be created.
         * @minLength 1
         */
        namespace: string;
        /**
         * The repository name to create.
         * @minLength 2
         * @maxLength 255
         */
        name: string;
        /**
         * The short repository description.
         * @maxLength 100
         */
        description?: string;
        /**
         * The detailed repository description.
         * @maxLength 25000
         */
        fullDescription?: string;
        /** The registry where the repository should be hosted. */
        registry?: string;
        /** Whether the repository should be created as private. */
        isPrivate?: boolean;
      };
      output: {
        /** The created repository metadata. */
        repository: {
          /** The repository name. */
          name: string;
          /** The namespace that owns the repository. */
          namespace: string;
          /** The repository type, such as image or plugin. */
          repositoryType: string | null;
          /** The numeric repository status code. */
          status: number;
          /** The human-readable repository status. */
          statusDescription: string;
          /** The short repository description, when available. */
          description: string | null;
          /** Whether the repository is private. */
          isPrivate: boolean;
          /** The number of stars on the repository. */
          starCount: number;
          /** The total number of pulls for the repository. */
          pullCount: number;
          /** The ISO 8601 timestamp when the repository was last updated. */
          lastUpdated: string | null;
          /** The ISO 8601 timestamp when the repository was last modified. */
          lastModified: string | null;
          /** The ISO 8601 timestamp when the repository was created. */
          dateRegistered: string | null;
          /** The current user's affiliation with the repository, when available. */
          affiliation: string | null;
          /** The media types supported by the repository. */
          mediaTypes: Array<string>;
          /** The content types supported by the repository. */
          contentTypes: Array<string>;
          /** The categories assigned to the repository. */
          categories: Array<{
            /** The human-readable repository category name. */
            name: string;
            /** The URL-friendly repository category identifier. */
            slug: string;
          }>;
          /** The repository storage size in bytes, when available. */
          storageSize: number | null;
          /** The repository owner username, when available. */
          user: string | null;
          /** The Docker Hub user associated with the repository, when available. */
          hubUser: string | null;
          /** The number of collaborators on the repository, when available. */
          collaboratorCount: number | null;
          /** The full repository description, when available. */
          fullDescription: string | null;
          /** Whether the current user has starred the repository, when available. */
          hasStarred: boolean | null;
          /** The repository permissions visible to the current credential. */
          permissions: {
            /** Whether read access is available. */
            read: boolean;
            /** Whether write access is available. */
            write: boolean;
            /** Whether admin access is available. */
            admin: boolean;
          } | null;
          /** The immutable tag configuration for the repository. */
          immutableTagsSettings: {
            /** Whether immutable tags are enabled for the repository. */
            enabled: boolean;
            /** The immutable tag rules configured for the repository. */
            rules: Array<string>;
          } | null;
          /** The repository source metadata, when available. */
          source: string | null;
        };
      };
    };
    /** Delete a Docker Hub team within an organization. */
    "docker_hub.delete_team": {
      input: {
        /**
         * The Docker Hub organization name.
         * @minLength 1
         */
        orgName: string;
        /**
         * The team name to delete.
         * @minLength 1
         */
        teamName: string;
      };
      output: {
        /** Whether the team deletion request completed. */
        deleted: boolean;
      };
    };
    /** Find a Docker Hub image variant by digest by scanning the repository's published tags. This is a repo-level helper built on the official tag listing responses. */
    "docker_hub.get_image": {
      input: {
        /**
         * The namespace that owns the repository.
         * @minLength 1
         */
        namespace: string;
        /**
         * The repository name to search.
         * @minLength 1
         */
        repository: string;
        /**
         * The image manifest digest to look up.
         * @minLength 1
         */
        digest: string;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The maximum number of tag pages to scan before stopping.
         * @minimum 1
         * @maximum 100
         */
        maxPages?: number;
      };
      output: {
        /** The tag that contains the requested image digest. */
        tag: {
          /** The numeric tag identifier, when available. */
          id: number | null;
          /** The repository tag name. */
          name: string;
          /** The user ID that originally created the tag. */
          creator: number | null;
          /** The ISO 8601 timestamp when the tag was last updated. */
          lastUpdated: string | null;
          /** The user ID that last updated the tag. */
          lastUpdater: number | null;
          /** The Docker Hub username that last updated the tag. */
          lastUpdaterUsername: string | null;
          /** The numeric repository identifier. */
          repository: number | null;
          /** The compressed tag size in bytes. */
          fullSize: number | null;
          /** The current Docker Hub tag status. */
          status: string | null;
          /** The ISO 8601 timestamp when the tag was last pulled. */
          tagLastPulled: string | null;
          /** The ISO 8601 timestamp when the tag was last pushed. */
          tagLastPushed: string | null;
          /** The image variants currently published for the tag. */
          images: Array<{
            /** The CPU architecture for the image variant, when available. */
            architecture: string | null;
            /** The CPU feature set reported for the image variant, when available. */
            features: string | null;
            /** The CPU variant reported for the image variant, when available. */
            variant: string | null;
            /** The image manifest digest, when available. */
            digest: string | null;
            /** The image layers included in the image variant. */
            layers: Array<{
              /** The image layer digest, when available. */
              digest: string | null;
              /** The image layer size in bytes, when available. */
              size: number | null;
              /** The Dockerfile instruction associated with the layer, when available. */
              instruction: string | null;
            }>;
            /** The operating system for the image variant, when available. */
            os: string | null;
            /** The operating system features reported for the image variant, when available. */
            osFeatures: string | null;
            /** The operating system version for the image variant, when available. */
            osVersion: string | null;
            /** The image size in bytes, when available. */
            size: number | null;
            /** The image status returned by Docker Hub, when available. */
            status: string | null;
            /** The ISO 8601 timestamp when the image variant was last pulled. */
            lastPulled: string | null;
            /** The ISO 8601 timestamp when the image variant was last pushed. */
            lastPushed: string | null;
          }>;
        };
        /** The image variant that matched the requested digest. */
        image: {
          /** The CPU architecture for the image variant, when available. */
          architecture: string | null;
          /** The CPU feature set reported for the image variant, when available. */
          features: string | null;
          /** The CPU variant reported for the image variant, when available. */
          variant: string | null;
          /** The image manifest digest, when available. */
          digest: string | null;
          /** The image layers included in the image variant. */
          layers: Array<{
            /** The image layer digest, when available. */
            digest: string | null;
            /** The image layer size in bytes, when available. */
            size: number | null;
            /** The Dockerfile instruction associated with the layer, when available. */
            instruction: string | null;
          }>;
          /** The operating system for the image variant, when available. */
          os: string | null;
          /** The operating system features reported for the image variant, when available. */
          osFeatures: string | null;
          /** The operating system version for the image variant, when available. */
          osVersion: string | null;
          /** The image size in bytes, when available. */
          size: number | null;
          /** The image status returned by Docker Hub, when available. */
          status: string | null;
          /** The ISO 8601 timestamp when the image variant was last pulled. */
          lastPulled: string | null;
          /** The ISO 8601 timestamp when the image variant was last pushed. */
          lastPushed: string | null;
        };
      };
    };
    /** Get detailed metadata for a Docker Hub repository within a namespace. */
    "docker_hub.get_repository": {
      input: {
        /**
         * The namespace that owns the repository.
         * @minLength 1
         */
        namespace: string;
        /**
         * The repository name to retrieve.
         * @minLength 1
         */
        repository: string;
      };
      output: {
        /** The requested repository metadata. */
        repository: {
          /** The repository name. */
          name: string;
          /** The namespace that owns the repository. */
          namespace: string;
          /** The repository type, such as image or plugin. */
          repositoryType: string | null;
          /** The numeric repository status code. */
          status: number;
          /** The human-readable repository status. */
          statusDescription: string;
          /** The short repository description, when available. */
          description: string | null;
          /** Whether the repository is private. */
          isPrivate: boolean;
          /** The number of stars on the repository. */
          starCount: number;
          /** The total number of pulls for the repository. */
          pullCount: number;
          /** The ISO 8601 timestamp when the repository was last updated. */
          lastUpdated: string | null;
          /** The ISO 8601 timestamp when the repository was last modified. */
          lastModified: string | null;
          /** The ISO 8601 timestamp when the repository was created. */
          dateRegistered: string | null;
          /** The current user's affiliation with the repository, when available. */
          affiliation: string | null;
          /** The media types supported by the repository. */
          mediaTypes: Array<string>;
          /** The content types supported by the repository. */
          contentTypes: Array<string>;
          /** The categories assigned to the repository. */
          categories: Array<{
            /** The human-readable repository category name. */
            name: string;
            /** The URL-friendly repository category identifier. */
            slug: string;
          }>;
          /** The repository storage size in bytes, when available. */
          storageSize: number | null;
          /** The repository owner username, when available. */
          user: string | null;
          /** The Docker Hub user associated with the repository, when available. */
          hubUser: string | null;
          /** The number of collaborators on the repository, when available. */
          collaboratorCount: number | null;
          /** The full repository description, when available. */
          fullDescription: string | null;
          /** Whether the current user has starred the repository, when available. */
          hasStarred: boolean | null;
          /** The repository permissions visible to the current credential. */
          permissions: {
            /** Whether read access is available. */
            read: boolean;
            /** Whether write access is available. */
            write: boolean;
            /** Whether admin access is available. */
            admin: boolean;
          } | null;
          /** The immutable tag configuration for the repository. */
          immutableTagsSettings: {
            /** Whether immutable tags are enabled for the repository. */
            enabled: boolean;
            /** The immutable tag rules configured for the repository. */
            rules: Array<string>;
          } | null;
          /** The repository source metadata, when available. */
          source: string | null;
        };
      };
    };
    /** Get metadata and image variants for a specific Docker Hub repository tag. */
    "docker_hub.get_tag": {
      input: {
        /**
         * The namespace that owns the repository.
         * @minLength 1
         */
        namespace: string;
        /**
         * The repository name that owns the tag.
         * @minLength 1
         */
        repository: string;
        /**
         * The tag name to retrieve.
         * @minLength 1
         */
        tag: string;
      };
      output: {
        /** The requested repository tag metadata. */
        tag: {
          /** The numeric tag identifier, when available. */
          id: number | null;
          /** The repository tag name. */
          name: string;
          /** The user ID that originally created the tag. */
          creator: number | null;
          /** The ISO 8601 timestamp when the tag was last updated. */
          lastUpdated: string | null;
          /** The user ID that last updated the tag. */
          lastUpdater: number | null;
          /** The Docker Hub username that last updated the tag. */
          lastUpdaterUsername: string | null;
          /** The numeric repository identifier. */
          repository: number | null;
          /** The compressed tag size in bytes. */
          fullSize: number | null;
          /** The current Docker Hub tag status. */
          status: string | null;
          /** The ISO 8601 timestamp when the tag was last pulled. */
          tagLastPulled: string | null;
          /** The ISO 8601 timestamp when the tag was last pushed. */
          tagLastPushed: string | null;
          /** The image variants currently published for the tag. */
          images: Array<{
            /** The CPU architecture for the image variant, when available. */
            architecture: string | null;
            /** The CPU feature set reported for the image variant, when available. */
            features: string | null;
            /** The CPU variant reported for the image variant, when available. */
            variant: string | null;
            /** The image manifest digest, when available. */
            digest: string | null;
            /** The image layers included in the image variant. */
            layers: Array<{
              /** The image layer digest, when available. */
              digest: string | null;
              /** The image layer size in bytes, when available. */
              size: number | null;
              /** The Dockerfile instruction associated with the layer, when available. */
              instruction: string | null;
            }>;
            /** The operating system for the image variant, when available. */
            os: string | null;
            /** The operating system features reported for the image variant, when available. */
            osFeatures: string | null;
            /** The operating system version for the image variant, when available. */
            osVersion: string | null;
            /** The image size in bytes, when available. */
            size: number | null;
            /** The image status returned by Docker Hub, when available. */
            status: string | null;
            /** The ISO 8601 timestamp when the image variant was last pulled. */
            lastPulled: string | null;
            /** The ISO 8601 timestamp when the image variant was last pushed. */
            lastPushed: string | null;
          }>;
        };
      };
    };
    /** Get a Docker Hub team within an organization. */
    "docker_hub.get_team": {
      input: {
        /**
         * The Docker Hub organization name.
         * @minLength 1
         */
        orgName: string;
        /**
         * The team name to retrieve.
         * @minLength 1
         */
        teamName: string;
      };
      output: {
        /** The requested Docker Hub team. */
        team: {
          /** The numeric team identifier, when available. */
          id: number | null;
          /** The stable UUID of the team, when available. */
          uuid: string | null;
          /** The team name. */
          name: string | null;
          /** The team description, when available. */
          description: string | null;
          /** The number of members in the team. */
          memberCount: number | null;
        };
      };
    };
    /** List Docker Hub organization access tokens for an organization. */
    "docker_hub.list_org_access_tokens": {
      input: {
        /**
         * The Docker Hub organization name.
         * @minLength 1
         */
        orgName: string;
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The total number of organization access tokens. */
        total: number;
        /** The URL for the next page, or null when unavailable. */
        next: string | null;
        /** The URL for the previous page, or null when unavailable. */
        previous: string | null;
        /** The organization access tokens in the current page. */
        results: Array<{
          /** The organization access token identifier. */
          id: string | null;
          /** The organization access token label. */
          label: string | null;
          /** The username that created the token, when available. */
          createdBy: string | null;
          /** Whether the organization access token is active. */
          isActive: boolean | null;
          /** The ISO 8601 timestamp when the token was created. */
          createdAt: string | null;
          /** The ISO 8601 timestamp when the token expires, when available. */
          expiresAt: string | null;
          /** The ISO 8601 timestamp when the token was last used, when available. */
          lastUsedAt: string | null;
          /** The resource grants attached to the token. */
          resources?: Array<{
            /** The organization access token resource type. */
            type: string | null;
            /** The resource path granted to the token. */
            path: string | null;
            /** The scopes granted for the resource. */
            scopes: Array<string>;
          }>;
        }>;
      };
    };
    /** List Docker Hub organization members with optional filtering and pagination. */
    "docker_hub.list_org_members": {
      input: {
        /**
         * The Docker Hub organization name.
         * @minLength 1
         */
        orgName: string;
        /** An optional member search term. */
        search?: string;
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** Whether to include invites in the response when supported. */
        invites?: boolean;
        /** The member type filter. */
        type?: "all" | "invitee" | "member";
        /** The organization role filter. */
        role?: "owner" | "editor" | "member";
      };
      output: {
        /** The total number of matching members. */
        count: number;
        /** The URL for the next page, or null when unavailable. */
        next: string | null;
        /** The URL for the previous page, or null when unavailable. */
        previous: string | null;
        /** The organization members in the current page. */
        results: Array<{
          /** The member identifier, when available. */
          id: string | null;
          /** The Docker Hub username of the member. */
          username: string | null;
          /** The full name of the member, when available. */
          fullName: string | null;
          /** The email address of the member, when available. */
          email: string | null;
          /** The Docker Hub member type, when available. */
          type: string | null;
          /** The organization role assigned to the member. */
          role: string | null;
          /** The teams that include the member. */
          groups: Array<string>;
          /** Whether the member is marked as a guest in the organization. */
          isGuest: boolean | null;
          /** The ISO 8601 timestamp when the member joined the organization. */
          dateJoined: string | null;
          /** The ISO 8601 timestamp when the member last logged in, when visible. */
          lastLoggedInAt: string | null;
          /** The ISO 8601 timestamp when the member was last seen, when visible. */
          lastSeenAt: string | null;
          /** The last Docker Desktop version seen for the member, when visible. */
          lastDesktopVersion: string | null;
        }>;
      };
    };
    /** List Docker Hub repositories in a namespace with optional name filtering and ordering. */
    "docker_hub.list_repositories": {
      input: {
        /**
         * The namespace that owns the repositories.
         * @minLength 1
         */
        namespace: string;
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * An optional partial repository name filter.
         * @minLength 1
         */
        name?: string;
        /** The field and direction used to order repositories. */
        ordering?: "name" | "-name" | "last_updated" | "-last_updated" | "pull_count" | "-pull_count";
      };
      output: {
        /** The total number of repositories that match the query. */
        count: number;
        /** The URL for the next page, or null when unavailable. */
        next: string | null;
        /** The URL for the previous page, or null when unavailable. */
        previous: string | null;
        /** The repositories in the current page. */
        results: Array<{
          /** The repository name. */
          name: string;
          /** The namespace that owns the repository. */
          namespace: string;
          /** The repository type, such as image or plugin. */
          repositoryType: string | null;
          /** The numeric repository status code. */
          status: number;
          /** The human-readable repository status. */
          statusDescription: string;
          /** The short repository description, when available. */
          description: string | null;
          /** Whether the repository is private. */
          isPrivate: boolean;
          /** The number of stars on the repository. */
          starCount: number;
          /** The total number of pulls for the repository. */
          pullCount: number;
          /** The ISO 8601 timestamp when the repository was last updated. */
          lastUpdated: string | null;
          /** The ISO 8601 timestamp when the repository was last modified. */
          lastModified: string | null;
          /** The ISO 8601 timestamp when the repository was created. */
          dateRegistered: string | null;
          /** The current user's affiliation with the repository, when available. */
          affiliation: string | null;
          /** The media types supported by the repository. */
          mediaTypes: Array<string>;
          /** The content types supported by the repository. */
          contentTypes: Array<string>;
          /** The categories assigned to the repository. */
          categories: Array<{
            /** The human-readable repository category name. */
            name: string;
            /** The URL-friendly repository category identifier. */
            slug: string;
          }>;
          /** The repository storage size in bytes, when available. */
          storageSize: number | null;
        }>;
      };
    };
    /** List members of a Docker Hub team within an organization. */
    "docker_hub.list_team_members": {
      input: {
        /**
         * The Docker Hub organization name.
         * @minLength 1
         */
        orgName: string;
        /**
         * The team name whose members should be listed.
         * @minLength 1
         */
        teamName: string;
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * An optional member search term.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** The total number of matching team members. */
        count: number;
        /** The URL for the next page, or null when unavailable. */
        next: string | null;
        /** The URL for the previous page, or null when unavailable. */
        previous: string | null;
        /** The team members in the current page. */
        results: Array<{
          /** The member identifier, when available. */
          id: string | null;
          /** The Docker Hub username of the team member. */
          username: string | null;
          /** The full name of the team member, when available. */
          fullName: string | null;
          /** The email address of the team member, when available. */
          email: string | null;
          /** The company value returned for the member, when available. */
          company: string | null;
          /** The location value returned for the member, when available. */
          location: string | null;
          /** The profile URL returned for the member, when available. */
          profileUrl: string | null;
          /** The Docker Hub member type, when available. */
          type: string | null;
          /** The ISO 8601 timestamp when the member joined the team. */
          dateJoined: string | null;
        }>;
      };
    };
    /** List Docker Hub teams for an organization. */
    "docker_hub.list_teams": {
      input: {
        /**
         * The Docker Hub organization name.
         * @minLength 1
         */
        orgName: string;
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * An optional username to filter teams by membership.
         * @minLength 1
         */
        username?: string;
        /**
         * An optional team search term.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** The total number of matching teams. */
        count: number;
        /** The URL for the next page, or null when unavailable. */
        next: string | null;
        /** The URL for the previous page, or null when unavailable. */
        previous: string | null;
        /** The teams in the current page. */
        results: Array<{
          /** The numeric team identifier, when available. */
          id: number | null;
          /** The stable UUID of the team, when available. */
          uuid: string | null;
          /** The team name. */
          name: string | null;
          /** The team description, when available. */
          description: string | null;
          /** The number of members in the team. */
          memberCount: number | null;
        }>;
      };
    };
    /** Remove a member from a Docker Hub organization. */
    "docker_hub.remove_org_member": {
      input: {
        /**
         * The Docker Hub organization name.
         * @minLength 1
         */
        orgName: string;
        /**
         * The Docker Hub username to remove.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** Whether the member removal request completed. */
        removed: boolean;
      };
    };
    /** Remove a user from a Docker Hub team within an organization. */
    "docker_hub.remove_team_member": {
      input: {
        /**
         * The Docker Hub organization name.
         * @minLength 1
         */
        orgName: string;
        /**
         * The team name that owns the membership.
         * @minLength 1
         */
        teamName: string;
        /**
         * The Docker Hub username to remove from the team.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** Whether the team member removal request completed. */
        removed: boolean;
      };
    };
  }
}
