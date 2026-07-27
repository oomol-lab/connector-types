import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create or update an attachment for the specified Linear issue. */
    "linear.create_attachment": {
      input: {
        /** The issue ID of the attachment to be associated. */
        issue_id: string;
        /** Attachment title. */
        title: string;
        /** Attachment link. */
        url: string;
        /** Attachment subtitle. */
        subtitle?: string;
      };
      output: {
        /** The unique identifier of the attachment after creation. */
        id: string;
        /** The associated issue ID. */
        issue_id: string;
        /** Attachment title. */
        title: string;
        /** Attachment link. */
        url: string;
        /** Attachment subtitle. */
        subtitle?: string | null;
      };
    };
    /** Creates an emoji reaction for the specified Linear comment. */
    "linear.create_comment_reaction": {
      input: {
        /** The unique identifier of the comment to add a reaction to. */
        comment_id: string;
        /** The emoji to add. */
        emoji: string;
      };
      output: {
        /** The unique identifier of the reaction after creation. */
        reaction_id: string;
        /** The unique identifier of the associated comment. */
        comment_id: string;
        /** Created emoji. */
        emoji: string;
      };
    };
    /** Creates a comment for the specified Linear issue. */
    "linear.create_linear_comment": {
      input: {
        /** The issue ID to comment on. */
        issueId: string;
        /** Comment text, supports Markdown. */
        body: string;
      };
      output: {
        /** The unique identifier of the comment after it is created. */
        comment_id: string;
        /** The associated issue ID. */
        issue_id: string;
        /** Comment text. */
        body: string;
      };
    };
    /** Create a new Linear issue in the specified team and support fields such as project, person in charge, status, label, etc. */
    "linear.create_linear_issue": {
      input: {
        /** issue title. */
        title: string;
        /** The unique identifier of the target team. */
        team_id: string;
        /** The unique identifier of the target period. */
        cycle_id?: string;
        /** issue deadline. */
        due_date?: string;
        /** issue estimate. */
        estimate?: number;
        /** issue priority. */
        priority?: number;
        /** Unique identifier of workflow status. */
        state_id?: string;
        /** List of tag identifiers to bind. */
        label_ids?: Array<string>;
        /** The parent issue identifier. */
        parent_id?: string;
        /** The unique identifier of the project. */
        project_id?: string;
        /** The unique identifier of the person in charge. */
        assignee_id?: string;
        /** Issue description, supports Markdown. */
        description?: string;
      };
      output: {
        /** The unique identifier of the issue after creation. */
        id: string;
        /** The abbreviated identifier of the issue after creation. */
        identifier?: string;
        /** The issue title after creation. */
        issue_title: string;
        /** Issue description after creation. */
        issue_description?: string | null;
        /** Issue link after creation. */
        ticket_url?: string;
      };
    };
    /** Create a relationship between two Linear issues, such as blocks, related, or duplicate. */
    "linear.create_linear_issue_relation": {
      input: {
        /** Source issue identifier. */
        issue_id: string;
        /** Target issue identifier. */
        related_issue_id: string;
        /** Relationship type. */
        relation_type: "blocks" | "duplicate" | "related" | "similar";
      };
      output: {
        /** The unique identifier of the relationship after creation. */
        id: string;
        /** Source issue identifier. */
        issue_id: string;
        /** Target issue identifier. */
        related_issue_id: string;
        /** Relationship type. */
        relation_type: string;
      };
    };
    /** Creates a new Linear issue label in the specified team. */
    "linear.create_linear_label": {
      input: {
        /** The team's unique identifier. */
        team_id: string;
        /** Tag name. */
        name: string;
        /** Label color. */
        color: string;
        /** Tag description. */
        description?: string;
      };
      output: {
        /** The unique identifier of the created tag. */
        id: string;
        /** The unique identifier of the team it belongs to. */
        team_id?: string;
        /** Tag name. */
        name: string;
        /** Label color. */
        color: string;
        /** Tag description. */
        description?: string | null;
      };
    };
    /** Create a new Linear project and associate one or more teams. */
    "linear.create_linear_project": {
      input: {
        /** Project icon. */
        icon?: string;
        /** Project name. */
        name: string;
        /** Item color. */
        color?: string;
        /** The unique identifier of the project leader. */
        lead_id?: string;
        /** Project priority. */
        priority?: number;
        /** List of team IDs associated with the project. */
        team_ids: Array<string>;
        /** Project start date. */
        start_date?: string;
        /** Project description. */
        description?: string;
        /** Project target date. */
        target_date?: string;
      };
      output: {
        /** The unique identifier of the project after creation. */
        id: string;
        /** Project name. */
        name: string;
        /** Project link. */
        url?: string;
        /** Project status. */
        state?: string;
      };
    };
    /** Creates a project milestone for the specified Linear project. */
    "linear.create_project_milestone": {
      input: {
        /** Milestone name. */
        name: string;
        /** The unique identifier of the project. */
        project_id: string;
        /** Milestone sort value. */
        sort_order?: number;
        /** Milestone description. */
        description?: string;
        /** Milestone target dates. */
        target_date?: string;
      };
      output: {
        /** The unique identifier of the milestone after creation. */
        id: string;
        /** The unique identifier of the project. */
        project_id: string;
        /** Milestone name. */
        name: string;
        /** Milestone target dates. */
        target_date?: string | null;
      };
    };
    /** Creates a project progress update for the specified Linear project. */
    "linear.create_project_update": {
      input: {
        /** The project updates the text to support Markdown. */
        body: string;
        /** Project health status. */
        health?: "onTrack" | "atRisk" | "offTrack";
        /** The unique identifier of the project. */
        project_id: string;
        /** Whether to hide diff. */
        is_diff_hidden?: boolean;
      };
      output: {
        /** The unique identifier of the project is updated after creation. */
        id: string;
        /** The unique identifier of the project. */
        project_id: string;
        /** Project update text. */
        body?: string | null;
        /** Project health status. */
        health?: string | null;
        /** Whether to hide diff. */
        is_diff_hidden?: boolean;
      };
    };
    /** Delete the specified Linear issue. */
    "linear.delete_linear_issue": {
      input: {
        /** The issue ID to be deleted. */
        issue_id: string;
      };
      output: {
        /** The deleted issue identifier. */
        id: string;
        /** Whether the deletion was successful. */
        deleted: boolean;
      };
    };
    /** Lists all Linear team basic information accessible with the current credentials. */
    "linear.get_all_linear_teams": {
      input: Record<string, never>;
      output: {
        /** Team list. */
        teams: Array<{
          /** The team's unique identifier. */
          id: string;
          /** Team name. */
          name: string;
          /** The team shorthand key. */
          key?: string;
        }>;
      };
    };
    /** Retrieve a Linear attachment based on the issue and attachment ID or file name. */
    "linear.get_attachment": {
      input: {
        /** The issue ID to which the attachment belongs. */
        issue_id: string;
        /** The unique identifier of the attachment. */
        attachment_id?: string;
        /** Attachment file name or title. */
        file_name?: string;
      };
      output: {
        /** The matched attachment object. */
        attachment: {
          /** The unique identifier of the attachment. */
          id: string;
          /** Attachment title. */
          title: string;
          /** Attachment subtitle. */
          subtitle?: string | null;
          /** Attachment link. */
          url: string;
          /** Attachment source type. */
          sourceType?: string | null;
          /** Attachment metadata. */
          metadata?: Record<string, unknown>;
          /** Attachment source information. */
          source?: Record<string, unknown> | null;
          /** The issue to which the attachment belongs. */
          issue?: {
            /** Unique identifier associated with the issue. */
            id: string;
            /** Associated issue abbreviation identifier. */
            identifier?: string;
            /** Associated issue title. */
            title?: string;
          } | null;
          /** The time the attachment was created. */
          createdAt?: string;
          /** Attachment update time. */
          updatedAt?: string;
        };
      };
    };
    /** Get the currently authenticated Linear user profile. */
    "linear.get_current_user": {
      input: Record<string, never>;
      output: {
        /** Current user profile. */
        viewer: {
          /** User unique identifier. */
          id: string;
          /** User name. */
          name?: string;
          /** User display name. */
          displayName?: string;
          /** User email. */
          email?: string;
          /** User avatar address. */
          avatarUrl?: string;
          /** Whether the user is active. */
          active?: boolean;
          /** Whether the user is an administrator. */
          admin?: boolean;
          /** User creation time. */
          createdAt?: string;
        };
      };
    };
    /** Get all cycle information under the specified team. */
    "linear.get_cycles_by_team_id": {
      input: {
        /** The unique identifier of the target team. */
        team_id: string;
      };
      output: {
        /** Cycle list. */
        cycles: Array<{
          /** The unique identifier of the cycle. */
          id: string;
          /** Cycle name. */
          name: string;
          /** Cycle number. */
          number?: number;
          /** Cycle description. */
          description?: string;
          /** Cycle start time. */
          startsAt?: string;
          /** Cycle end time. */
          endsAt?: string;
          /** Cycle completion time. */
          completedAt?: string;
          /** Whether it is the current activation period. */
          isActive?: boolean;
          /** Whether it is a future period. */
          isFuture?: boolean;
          /** Whether it is a past period. */
          isPast?: boolean;
          /** Team information. */
          team?: {
            /** The team's unique identifier. */
            id: string;
            /** Team name. */
            name: string;
            /** The team shorthand key. */
            key?: string;
          };
        }>;
      };
    };
    /** Gets the default status and default estimate used when the specified team creates an issue. */
    "linear.get_issue_defaults": {
      input: {
        /** The unique identifier of the target team. */
        team_id: string;
      };
      output: {
        /** The team's issue default configuration. */
        team: {
          /** The team's default issue status. */
          defaultIssueState: {
            /** The unique identifier of the status. */
            id: string;
            /** Status name. */
            name: string;
            /** Status type. */
            type?: string;
            /** Status color. */
            color?: string;
            /** Status description. */
            description?: string;
          } | null;
          /** The team's default issue estimate. */
          defaultIssueEstimate: number | null;
        };
      };
    };
    /** Get details of a Linear issue, including comments, attachments, subscribers, and underlying relationship fields. */
    "linear.get_linear_issue": {
      input: {
        /** The issue ID to be queried. */
        issue_id: string;
      };
      output: {
        /** issue details object. */
        issue: {
          /** issue unique identifier. */
          id: string;
          /** Issue abbreviation identifier. */
          identifier: string;
          /** issue title. */
          title: string;
          /** issue description. */
          description?: string | null;
          /** issue link. */
          url?: string;
          /** issue creation time. */
          createdAt: string;
          /** issue update time. */
          updatedAt: string;
          /** Issue filing time. */
          archivedAt?: string | null;
          /** issue deadline. */
          dueDate?: string | null;
          /** issue priority. */
          priority?: number | null;
          /** issue estimate. */
          estimate?: number | null;
          /** Team information. */
          team?: {
            /** The team's unique identifier. */
            id: string;
            /** Team name. */
            name: string;
            /** The team shorthand key. */
            key?: string;
          } | null;
          /** Current workflow status. */
          state?: {
            /** The unique identifier of the status. */
            id: string;
            /** Status name. */
            name: string;
            /** Status type. */
            type?: string;
            /** Status color. */
            color?: string;
            /** Status description. */
            description?: string;
          } | null;
          /** Project information. */
          project?: {
            /** The unique identifier of the project. */
            id: string;
            /** Project name. */
            name: string;
            /** Project slug identifier. */
            slugId?: string;
            /** Project link. */
            url?: string;
            /** Project status. */
            state?: string;
            /** Project health status. */
            health?: string | null;
            /** Project progress. */
            progress?: number;
            /** Project priority. */
            priority?: number;
            /** Project priority label. */
            priorityLabel?: string;
            /** Project scope value. */
            scope?: number;
            /** Item color. */
            color?: string | null;
            /** Project description. */
            description?: string | null;
            /** Project icon. */
            icon?: string | null;
            /** Project start date. */
            startDate?: string | null;
            /** Project target date. */
            targetDate?: string | null;
            /** Project creation time. */
            createdAt?: string;
            /** Project update time. */
            updatedAt?: string;
            /** Project leader. */
            lead?: {
              /** User unique identifier. */
              id: string;
              /** User name. */
              name?: string;
              /** User display name. */
              displayName?: string;
              /** User email. */
              email?: string;
              /** User avatar address. */
              avatarUrl?: string;
              /** Whether the user is active. */
              active?: boolean;
              /** Whether the user is an administrator. */
              admin?: boolean;
              /** User creation time. */
              createdAt?: string;
            } | null;
            /** Project creator. */
            creator?: {
              /** User unique identifier. */
              id: string;
              /** User name. */
              name?: string;
              /** User display name. */
              displayName?: string;
              /** User email. */
              email?: string;
              /** User avatar address. */
              avatarUrl?: string;
              /** Whether the user is active. */
              active?: boolean;
              /** Whether the user is an administrator. */
              admin?: boolean;
              /** User creation time. */
              createdAt?: string;
            } | null;
            /** Project status object. */
            status?: {
              /** Unique identifier of project status. */
              id: string;
              /** Project status name. */
              name: string;
              /** Project status type. */
              type?: string;
              /** Project status color. */
              color?: string;
              /** Project status description. */
              description?: string;
            } | null;
          } | null;
          /** Current person in charge information. */
          assignee?: {
            /** User unique identifier. */
            id: string;
            /** User name. */
            name?: string;
            /** User display name. */
            displayName?: string;
            /** User email. */
            email?: string;
            /** User avatar address. */
            avatarUrl?: string;
            /** Whether the user is active. */
            active?: boolean;
            /** Whether the user is an administrator. */
            admin?: boolean;
            /** User creation time. */
            createdAt?: string;
          } | null;
          /** issue tag connection. */
          labels?: {
            /** tag list. */
            nodes: Array<{
              /** Tag unique identifier. */
              id: string;
              /** Tag name. */
              name: string;
              /** Label color. */
              color?: string;
              /** Tag description. */
              description?: string;
              /** Whether to group labels. */
              is_group?: boolean;
              /** Whether to group labels. */
              isGroup?: boolean;
              /** Parent label group information. */
              parent?: {
                /** The unique identifier of the parent label group. */
                id: string;
                /** The name of the parent label group. */
                name: string;
              } | null;
            }>;
          };
          /** Issue creator information. */
          creator?: {
            /** User unique identifier. */
            id: string;
            /** User name. */
            name?: string;
            /** User display name. */
            displayName?: string;
            /** User email. */
            email?: string;
            /** User avatar address. */
            avatarUrl?: string;
            /** Whether the user is active. */
            active?: boolean;
            /** Whether the user is an administrator. */
            admin?: boolean;
            /** User creation time. */
            createdAt?: string;
          } | null;
          /** The cycle to which the issue belongs. */
          cycle?: {
            /** The unique identifier of the cycle. */
            id: string;
            /** Cycle name. */
            name: string;
            /** Cycle number. */
            number?: number;
            /** Cycle description. */
            description?: string;
            /** Cycle start time. */
            startsAt?: string;
            /** Cycle end time. */
            endsAt?: string;
            /** Cycle completion time. */
            completedAt?: string;
            /** Whether it is the current activation period. */
            isActive?: boolean;
            /** Whether it is a future period. */
            isFuture?: boolean;
            /** Whether it is a past period. */
            isPast?: boolean;
            /** Team information. */
            team?: {
              /** The team's unique identifier. */
              id: string;
              /** Team name. */
              name: string;
              /** The team shorthand key. */
              key?: string;
            };
          } | null;
          /** Parent issue information. */
          parent?: {
            /** The unique identifier of the parent issue. */
            id: string;
            /** The abbreviated identifier of the parent issue. */
            identifier: string;
            /** Parent issue title. */
            title: string;
          } | null;
          /** issue attachment connection. */
          attachments?: {
            /** Attachment list. */
            nodes: Array<{
              /** The unique identifier of the attachment. */
              id: string;
              /** Attachment title. */
              title: string;
              /** Attachment subtitle. */
              subtitle?: string | null;
              /** Attachment link. */
              url: string;
              /** Attachment source type. */
              sourceType?: string | null;
              /** Attachment metadata. */
              metadata?: Record<string, unknown>;
              /** Attachment source information. */
              source?: Record<string, unknown> | null;
              /** The issue to which the attachment belongs. */
              issue?: {
                /** Unique identifier associated with the issue. */
                id: string;
                /** Associated issue abbreviation identifier. */
                identifier?: string;
                /** Associated issue title. */
                title?: string;
              } | null;
              /** The time the attachment was created. */
              createdAt?: string;
              /** Attachment update time. */
              updatedAt?: string;
            }>;
            /** Attachment paging information. */
            pageInfo?: {
              /** The starting point of the cursor on the previous page. */
              startCursor?: string | null;
              /** The end cursor for the next page. */
              endCursor: string | null;
              /** Whether there is a previous page. */
              hasPreviousPage?: boolean;
              /** Whether the next page exists. */
              hasNextPage: boolean;
            };
          };
          /** issue comment link. */
          comments?: {
            /** Comments list. */
            nodes: Array<{
              /** The unique identifier of the comment. */
              id: string;
              /** Comment text. */
              body?: string;
              /** Comment link. */
              url?: string;
              /** Quote text. */
              quotedText?: string | null;
              /** Comment creation time. */
              createdAt?: string;
              /** Comment updated time. */
              updatedAt?: string;
              /** Comment editing time. */
              editedAt?: string | null;
              /** Comment resolution time. */
              resolvedAt?: string | null;
              /** Unique identifier associated with the issue. */
              issueId?: string | null;
              /** The unique identifier of the parent comment. */
              parentId?: string | null;
              /** Associated project updates unique identifier. */
              projectUpdateId?: string | null;
              /** Comment author information. */
              user?: {
                /** User unique identifier. */
                id: string;
                /** User name. */
                name?: string;
                /** User display name. */
                displayName?: string;
                /** User email. */
                email?: string;
                /** User avatar address. */
                avatarUrl?: string;
                /** Whether the user is active. */
                active?: boolean;
                /** Whether the user is an administrator. */
                admin?: boolean;
                /** User creation time. */
                createdAt?: string;
              } | null;
              /** List of reactions on comments. */
              reactions?: Array<{
                /** Reaction unique identifier. */
                id: string;
                /** The emoji used by the reaction. */
                emoji: string;
                /** Reaction creation time. */
                createdAt?: string;
                /** Response update time. */
                updatedAt?: string;
                /** The user who triggered the reaction. */
                user?: {
                  /** User unique identifier. */
                  id: string;
                  /** User name. */
                  name?: string;
                  /** User display name. */
                  displayName?: string;
                  /** User email. */
                  email?: string;
                  /** User avatar address. */
                  avatarUrl?: string;
                  /** Whether the user is active. */
                  active?: boolean;
                  /** Whether the user is an administrator. */
                  admin?: boolean;
                  /** User creation time. */
                  createdAt?: string;
                } | null;
                /** The comment value. */
                comment?: {
                  /** The unique identifier of the comment. */
                  id: string;
                } | null;
                /** The issue value. */
                issue?: {
                  /** issue unique identifier. */
                  id: string;
                  /** Issue abbreviation identifier. */
                  identifier?: string;
                } | null;
                /** The projectUpdate value. */
                projectUpdate?: {
                  /** Project update unique identifier. */
                  id: string;
                } | null;
              }>;
            }>;
            /** Comment pagination information. */
            pageInfo?: {
              /** The starting point of the cursor on the previous page. */
              startCursor?: string | null;
              /** The end cursor for the next page. */
              endCursor: string | null;
              /** Whether there is a previous page. */
              hasPreviousPage?: boolean;
              /** Whether the next page exists. */
              hasNextPage: boolean;
            };
          };
          /** issue subscriber connection. */
          subscribers?: {
            /** Subscriber list. */
            nodes: Array<{
              /** User unique identifier. */
              id: string;
              /** User name. */
              name?: string;
              /** User display name. */
              displayName?: string;
              /** User email. */
              email?: string;
              /** User avatar address. */
              avatarUrl?: string;
              /** Whether the user is active. */
              active?: boolean;
              /** Whether the user is an administrator. */
              admin?: boolean;
              /** User creation time. */
              createdAt?: string;
            }>;
            /** Subscriber pagination information. */
            pageInfo?: {
              /** The starting point of the cursor on the previous page. */
              startCursor?: string | null;
              /** The end cursor for the next page. */
              endCursor: string | null;
              /** Whether there is a previous page. */
              hasPreviousPage?: boolean;
              /** Whether the next page exists. */
              hasNextPage: boolean;
            };
          };
          /** List of reactions on the issue. */
          reactions?: Array<{
            /** Reaction unique identifier. */
            id: string;
            /** The emoji used by the reaction. */
            emoji: string;
            /** Reaction creation time. */
            createdAt?: string;
            /** Response update time. */
            updatedAt?: string;
            /** The user who triggered the reaction. */
            user?: {
              /** User unique identifier. */
              id: string;
              /** User name. */
              name?: string;
              /** User display name. */
              displayName?: string;
              /** User email. */
              email?: string;
              /** User avatar address. */
              avatarUrl?: string;
              /** Whether the user is active. */
              active?: boolean;
              /** Whether the user is an administrator. */
              admin?: boolean;
              /** User creation time. */
              createdAt?: string;
            } | null;
            /** The comment value. */
            comment?: {
              /** The unique identifier of the comment. */
              id: string;
            } | null;
            /** The issue value. */
            issue?: {
              /** issue unique identifier. */
              id: string;
              /** Issue abbreviation identifier. */
              identifier?: string;
            } | null;
            /** The projectUpdate value. */
            projectUpdate?: {
              /** Project update unique identifier. */
              id: string;
            } | null;
          }>;
        };
      };
    };
    /** Get the details of a Linear project, complete with team, members, and initiatives on demand. */
    "linear.get_linear_project": {
      input: {
        /** The unique identifier of the item to be queried. */
        project_id: string;
        /** Is there a project team attached? */
        include_teams?: boolean;
        /** Whether there are project members attached. */
        include_members?: boolean;
        /** Whether it comes with project initiatives. */
        include_initiatives?: boolean;
      };
      output: {
        /** Project details object. */
        project: {
          /** The unique identifier of the project. */
          id: string;
          /** Project name. */
          name: string;
          /** Project slug identifier. */
          slugId?: string;
          /** Project link. */
          url?: string;
          /** Project status. */
          state?: string;
          /** Project health status. */
          health?: string | null;
          /** Project progress. */
          progress?: number;
          /** Project priority. */
          priority?: number;
          /** Project priority label. */
          priorityLabel?: string;
          /** Project scope value. */
          scope?: number;
          /** Item color. */
          color?: string | null;
          /** Project description. */
          description?: string | null;
          /** Project icon. */
          icon?: string | null;
          /** Project start date. */
          startDate?: string | null;
          /** Project target date. */
          targetDate?: string | null;
          /** Project creation time. */
          createdAt?: string;
          /** Project update time. */
          updatedAt?: string;
          /** Project leader. */
          lead?: {
            /** User unique identifier. */
            id: string;
            /** User name. */
            name?: string;
            /** User display name. */
            displayName?: string;
            /** User email. */
            email?: string;
            /** User avatar address. */
            avatarUrl?: string;
            /** Whether the user is active. */
            active?: boolean;
            /** Whether the user is an administrator. */
            admin?: boolean;
            /** User creation time. */
            createdAt?: string;
          } | null;
          /** Project creator. */
          creator?: {
            /** User unique identifier. */
            id: string;
            /** User name. */
            name?: string;
            /** User display name. */
            displayName?: string;
            /** User email. */
            email?: string;
            /** User avatar address. */
            avatarUrl?: string;
            /** Whether the user is active. */
            active?: boolean;
            /** Whether the user is an administrator. */
            admin?: boolean;
            /** User creation time. */
            createdAt?: string;
          } | null;
          /** Project status object. */
          status?: {
            /** Unique identifier of project status. */
            id: string;
            /** Project status name. */
            name: string;
            /** Project status type. */
            type?: string;
            /** Project status color. */
            color?: string;
            /** Project status description. */
            description?: string;
          } | null;
          /** Project team connections. */
          teams?: {
            /** Team list. */
            nodes: Array<{
              /** The team's unique identifier. */
              id: string;
              /** Team name. */
              name: string;
              /** The team shorthand key. */
              key?: string;
            }>;
            /** Team pagination information. */
            pageInfo?: {
              /** The starting point of the cursor on the previous page. */
              startCursor?: string | null;
              /** The end cursor for the next page. */
              endCursor: string | null;
              /** Whether there is a previous page. */
              hasPreviousPage?: boolean;
              /** Whether the next page exists. */
              hasNextPage: boolean;
            };
          };
          /** Project member connections. */
          members?: {
            /** List of project members. */
            nodes: Array<{
              /** User unique identifier. */
              id: string;
              /** User name. */
              name?: string;
              /** User display name. */
              displayName?: string;
              /** User email. */
              email?: string;
              /** User avatar address. */
              avatarUrl?: string;
              /** Whether the user is active. */
              active?: boolean;
              /** Whether the user is an administrator. */
              admin?: boolean;
              /** User creation time. */
              createdAt?: string;
            }>;
          };
          /** Project initiatives Connect. */
          initiatives?: {
            /** initiative list. */
            nodes: Array<{
              /** initiative unique identifier. */
              id: string;
              /** initiative name. */
              name: string;
              /** initiative description. */
              description?: string | null;
              /** initiative link. */
              url?: string;
            }>;
            /** initiative pagination information. */
            pageInfo?: {
              /** The starting point of the cursor on the previous page. */
              startCursor?: string | null;
              /** The end cursor for the next page. */
              endCursor: string | null;
              /** Whether there is a previous page. */
              hasPreviousPage?: boolean;
              /** Whether the next page exists. */
              hasNextPage: boolean;
            };
          };
        };
      };
    };
    /** Lists issue drafts visible to the current user in Linear. */
    "linear.list_issue_drafts": {
      input: {
        /** Next page cursor. */
        after?: string;
        /** Return quantity per page. */
        first?: number;
      };
      output: {
        /** Draft list. */
        drafts: Array<{
          /** Draft unique identifier. */
          id: string;
          /** Draft raw data. */
          data?: Record<string, unknown>;
          /** Draft text data. */
          bodyData?: string | null;
          /** Draft creation time. */
          createdAt?: string;
          /** Draft update time. */
          updatedAt?: string;
          /** Whether to generate automatically. */
          isAutogenerated?: boolean;
          /** Associated team information. */
          team?: {
            /** The team's unique identifier. */
            id: string;
            /** Team name. */
            name: string;
            /** The team shorthand key. */
            key?: string;
          } | null;
          /** The issue value. */
          issue?: {
            /** Unique identifier associated with the issue. */
            id: string;
          } | null;
          /** The project value. */
          project?: {
            /** The unique identifier of the associated project. */
            id: string;
          } | null;
          /** The projectUpdate value. */
          projectUpdate?: {
            /** Associated project updates unique identifier. */
            id: string;
          } | null;
          /** Draft creator information. */
          user?: {
            /** User unique identifier. */
            id: string;
            /** User name. */
            name?: string;
            /** User display name. */
            displayName?: string;
            /** User email. */
            email?: string;
            /** User avatar address. */
            avatarUrl?: string;
            /** Whether the user is active. */
            active?: boolean;
            /** Whether the user is an administrator. */
            admin?: boolean;
            /** User creation time. */
            createdAt?: string;
          } | null;
        }>;
        /** Pagination information. */
        page_info: {
          /** The starting point of the cursor on the previous page. */
          startCursor?: string | null;
          /** The end cursor for the next page. */
          endCursor: string | null;
          /** Whether there is a previous page. */
          hasPreviousPage?: boolean;
          /** Whether the next page exists. */
          hasNextPage: boolean;
        };
      };
    };
    /** List Linear issues by team, and support cursor paging and whether to include archived issues. */
    "linear.list_issues_by_team_id": {
      input: {
        /** Next page cursor. */
        after?: string;
        /** Return quantity per page. */
        first?: number;
        /** The unique identifier of the target team. */
        team_id: string;
        /** Whether to include archived issues. */
        include_archived?: boolean;
      };
      output: {
        /** Query team information. */
        team: {
          /** The team's unique identifier. */
          id: string;
          /** Team name. */
          name: string;
          /** The team shorthand key. */
          key?: string;
        };
        /** issue list. */
        issues: Array<{
          /** issue unique identifier. */
          id: string;
          /** Issue abbreviation identifier. */
          identifier: string;
          /** issue title. */
          title: string;
          /** issue description. */
          description?: string | null;
          /** issue link. */
          url?: string;
          /** issue creation time. */
          createdAt: string;
          /** issue update time. */
          updatedAt: string;
          /** Issue filing time. */
          archivedAt?: string | null;
          /** issue deadline. */
          dueDate?: string | null;
          /** issue priority. */
          priority?: number | null;
          /** issue estimate. */
          estimate?: number | null;
          /** Team information. */
          team?: {
            /** The team's unique identifier. */
            id: string;
            /** Team name. */
            name: string;
            /** The team shorthand key. */
            key?: string;
          } | null;
          /** Current workflow status. */
          state?: {
            /** The unique identifier of the status. */
            id: string;
            /** Status name. */
            name: string;
            /** Status type. */
            type?: string;
            /** Status color. */
            color?: string;
            /** Status description. */
            description?: string;
          } | null;
          /** Project information. */
          project?: {
            /** The unique identifier of the project. */
            id: string;
            /** Project name. */
            name: string;
            /** Project slug identifier. */
            slugId?: string;
            /** Project link. */
            url?: string;
            /** Project status. */
            state?: string;
            /** Project health status. */
            health?: string | null;
            /** Project progress. */
            progress?: number;
            /** Project priority. */
            priority?: number;
            /** Project priority label. */
            priorityLabel?: string;
            /** Project scope value. */
            scope?: number;
            /** Item color. */
            color?: string | null;
            /** Project description. */
            description?: string | null;
            /** Project icon. */
            icon?: string | null;
            /** Project start date. */
            startDate?: string | null;
            /** Project target date. */
            targetDate?: string | null;
            /** Project creation time. */
            createdAt?: string;
            /** Project update time. */
            updatedAt?: string;
            /** Project leader. */
            lead?: {
              /** User unique identifier. */
              id: string;
              /** User name. */
              name?: string;
              /** User display name. */
              displayName?: string;
              /** User email. */
              email?: string;
              /** User avatar address. */
              avatarUrl?: string;
              /** Whether the user is active. */
              active?: boolean;
              /** Whether the user is an administrator. */
              admin?: boolean;
              /** User creation time. */
              createdAt?: string;
            } | null;
            /** Project creator. */
            creator?: {
              /** User unique identifier. */
              id: string;
              /** User name. */
              name?: string;
              /** User display name. */
              displayName?: string;
              /** User email. */
              email?: string;
              /** User avatar address. */
              avatarUrl?: string;
              /** Whether the user is active. */
              active?: boolean;
              /** Whether the user is an administrator. */
              admin?: boolean;
              /** User creation time. */
              createdAt?: string;
            } | null;
            /** Project status object. */
            status?: {
              /** Unique identifier of project status. */
              id: string;
              /** Project status name. */
              name: string;
              /** Project status type. */
              type?: string;
              /** Project status color. */
              color?: string;
              /** Project status description. */
              description?: string;
            } | null;
          } | null;
          /** Current person in charge information. */
          assignee?: {
            /** User unique identifier. */
            id: string;
            /** User name. */
            name?: string;
            /** User display name. */
            displayName?: string;
            /** User email. */
            email?: string;
            /** User avatar address. */
            avatarUrl?: string;
            /** Whether the user is active. */
            active?: boolean;
            /** Whether the user is an administrator. */
            admin?: boolean;
            /** User creation time. */
            createdAt?: string;
          } | null;
          /** issue tag connection. */
          labels?: {
            /** tag list. */
            nodes: Array<{
              /** Tag unique identifier. */
              id: string;
              /** Tag name. */
              name: string;
              /** Label color. */
              color?: string;
              /** Tag description. */
              description?: string;
              /** Whether to group labels. */
              is_group?: boolean;
              /** Whether to group labels. */
              isGroup?: boolean;
              /** Parent label group information. */
              parent?: {
                /** The unique identifier of the parent label group. */
                id: string;
                /** The name of the parent label group. */
                name: string;
              } | null;
            }>;
          };
        }>;
        /** Pagination information. */
        page_info: {
          /** The end cursor for the next page. */
          end_cursor: string | null;
          /** Whether the next page exists. */
          has_next_page: boolean;
        };
      };
    };
    /** Lists the Linear periods accessible by the current credential. */
    "linear.list_linear_cycles": {
      input: Record<string, never>;
      output: {
        /** Cycle list. */
        cycles: Array<{
          /** The unique identifier of the cycle. */
          id: string;
          /** Cycle name. */
          name: string;
          /** Cycle number. */
          number?: number;
          /** Cycle description. */
          description?: string;
          /** Cycle start time. */
          startsAt?: string;
          /** Cycle end time. */
          endsAt?: string;
          /** Cycle completion time. */
          completedAt?: string;
          /** Whether it is the current activation period. */
          isActive?: boolean;
          /** Whether it is a future period. */
          isFuture?: boolean;
          /** Whether it is a past period. */
          isPast?: boolean;
          /** Team information. */
          team?: {
            /** The team's unique identifier. */
            id: string;
            /** Team name. */
            name: string;
            /** The team shorthand key. */
            key?: string;
          };
        }>;
      };
    };
    /** Lists Linear issues accessible with current credentials, and supports filtering by project and person in charge. */
    "linear.list_linear_issues": {
      input: {
        /** Next page cursor. */
        after?: string;
        /** Return quantity per page. */
        first?: number;
        /** The unique identifier of the project used for filtering. */
        project_id?: string;
        /** The unique identifier of the person responsible for filtering. */
        assignee_id?: string;
        /** Original cursor. */
        original_cursor?: string;
        /** Whether the cursor is corrupted. */
        cursor_was_corrupted?: boolean;
      };
      output: {
        /** issue list. */
        issues: Array<{
          /** issue unique identifier. */
          id: string;
          /** Issue abbreviation identifier. */
          identifier: string;
          /** issue title. */
          title: string;
          /** issue description. */
          description?: string | null;
          /** issue link. */
          url?: string;
          /** issue creation time. */
          createdAt: string;
          /** issue update time. */
          updatedAt: string;
          /** Issue filing time. */
          archivedAt?: string | null;
          /** issue deadline. */
          dueDate?: string | null;
          /** issue priority. */
          priority?: number | null;
          /** issue estimate. */
          estimate?: number | null;
          /** Team information. */
          team?: {
            /** The team's unique identifier. */
            id: string;
            /** Team name. */
            name: string;
            /** The team shorthand key. */
            key?: string;
          } | null;
          /** Current workflow status. */
          state?: {
            /** The unique identifier of the status. */
            id: string;
            /** Status name. */
            name: string;
            /** Status type. */
            type?: string;
            /** Status color. */
            color?: string;
            /** Status description. */
            description?: string;
          } | null;
          /** Project information. */
          project?: {
            /** The unique identifier of the project. */
            id: string;
            /** Project name. */
            name: string;
            /** Project slug identifier. */
            slugId?: string;
            /** Project link. */
            url?: string;
            /** Project status. */
            state?: string;
            /** Project health status. */
            health?: string | null;
            /** Project progress. */
            progress?: number;
            /** Project priority. */
            priority?: number;
            /** Project priority label. */
            priorityLabel?: string;
            /** Project scope value. */
            scope?: number;
            /** Item color. */
            color?: string | null;
            /** Project description. */
            description?: string | null;
            /** Project icon. */
            icon?: string | null;
            /** Project start date. */
            startDate?: string | null;
            /** Project target date. */
            targetDate?: string | null;
            /** Project creation time. */
            createdAt?: string;
            /** Project update time. */
            updatedAt?: string;
            /** Project leader. */
            lead?: {
              /** User unique identifier. */
              id: string;
              /** User name. */
              name?: string;
              /** User display name. */
              displayName?: string;
              /** User email. */
              email?: string;
              /** User avatar address. */
              avatarUrl?: string;
              /** Whether the user is active. */
              active?: boolean;
              /** Whether the user is an administrator. */
              admin?: boolean;
              /** User creation time. */
              createdAt?: string;
            } | null;
            /** Project creator. */
            creator?: {
              /** User unique identifier. */
              id: string;
              /** User name. */
              name?: string;
              /** User display name. */
              displayName?: string;
              /** User email. */
              email?: string;
              /** User avatar address. */
              avatarUrl?: string;
              /** Whether the user is active. */
              active?: boolean;
              /** Whether the user is an administrator. */
              admin?: boolean;
              /** User creation time. */
              createdAt?: string;
            } | null;
            /** Project status object. */
            status?: {
              /** Unique identifier of project status. */
              id: string;
              /** Project status name. */
              name: string;
              /** Project status type. */
              type?: string;
              /** Project status color. */
              color?: string;
              /** Project status description. */
              description?: string;
            } | null;
          } | null;
          /** Current person in charge information. */
          assignee?: {
            /** User unique identifier. */
            id: string;
            /** User name. */
            name?: string;
            /** User display name. */
            displayName?: string;
            /** User email. */
            email?: string;
            /** User avatar address. */
            avatarUrl?: string;
            /** Whether the user is active. */
            active?: boolean;
            /** Whether the user is an administrator. */
            admin?: boolean;
            /** User creation time. */
            createdAt?: string;
          } | null;
          /** issue tag connection. */
          labels?: {
            /** tag list. */
            nodes: Array<{
              /** Tag unique identifier. */
              id: string;
              /** Tag name. */
              name: string;
              /** Label color. */
              color?: string;
              /** Tag description. */
              description?: string;
              /** Whether to group labels. */
              is_group?: boolean;
              /** Whether to group labels. */
              isGroup?: boolean;
              /** Parent label group information. */
              parent?: {
                /** The unique identifier of the parent label group. */
                id: string;
                /** The name of the parent label group. */
                name: string;
              } | null;
            }>;
          };
        }>;
        /** Pagination information. */
        page_info: {
          /** The starting point of the cursor on the previous page. */
          startCursor?: string | null;
          /** The end cursor for the next page. */
          endCursor: string | null;
          /** Whether there is a previous page. */
          hasPreviousPage?: boolean;
          /** Whether the next page exists. */
          hasNextPage: boolean;
        };
      };
    };
    /** Lists Linear labels for a specified team or entire workspace. */
    "linear.list_linear_labels": {
      input: {
        /** The unique identifier of the target team. */
        team_id?: string;
      };
      output: {
        /** tag list. */
        labels: Array<{
          /** Tag unique identifier. */
          id: string;
          /** Tag name. */
          name: string;
          /** Label color. */
          color?: string;
          /** Tag description. */
          description?: string;
          /** Whether to group labels. */
          is_group?: boolean;
          /** Whether to group labels. */
          isGroup?: boolean;
          /** Parent label group information. */
          parent?: {
            /** The unique identifier of the parent label group. */
            id: string;
            /** The name of the parent label group. */
            name: string;
          } | null;
        }>;
      };
    };
    /** Lists Linear projects accessible with the current credentials. */
    "linear.list_linear_projects": {
      input: Record<string, never>;
      output: {
        /** Project list. */
        projects: Array<{
          /** The unique identifier of the project. */
          id: string;
          /** Project name. */
          name: string;
          /** Project slug identifier. */
          slugId?: string;
          /** Project link. */
          url?: string;
          /** Project status. */
          state?: string;
          /** Project health status. */
          health?: string | null;
          /** Project progress. */
          progress?: number;
          /** Project priority. */
          priority?: number;
          /** Project priority label. */
          priorityLabel?: string;
          /** Project scope value. */
          scope?: number;
          /** Item color. */
          color?: string | null;
          /** Project description. */
          description?: string | null;
          /** Project icon. */
          icon?: string | null;
          /** Project start date. */
          startDate?: string | null;
          /** Project target date. */
          targetDate?: string | null;
          /** Project creation time. */
          createdAt?: string;
          /** Project update time. */
          updatedAt?: string;
          /** Project leader. */
          lead?: {
            /** User unique identifier. */
            id: string;
            /** User name. */
            name?: string;
            /** User display name. */
            displayName?: string;
            /** User email. */
            email?: string;
            /** User avatar address. */
            avatarUrl?: string;
            /** Whether the user is active. */
            active?: boolean;
            /** Whether the user is an administrator. */
            admin?: boolean;
            /** User creation time. */
            createdAt?: string;
          } | null;
          /** Project creator. */
          creator?: {
            /** User unique identifier. */
            id: string;
            /** User name. */
            name?: string;
            /** User display name. */
            displayName?: string;
            /** User email. */
            email?: string;
            /** User avatar address. */
            avatarUrl?: string;
            /** Whether the user is active. */
            active?: boolean;
            /** Whether the user is an administrator. */
            admin?: boolean;
            /** User creation time. */
            createdAt?: string;
          } | null;
          /** Project status object. */
          status?: {
            /** Unique identifier of project status. */
            id: string;
            /** Project status name. */
            name: string;
            /** Project status type. */
            type?: string;
            /** Project status color. */
            color?: string;
            /** Project status description. */
            description?: string;
          } | null;
        }>;
      };
    };
    /** Lists all workflow statuses for the specified team. */
    "linear.list_linear_states": {
      input: {
        /** The unique identifier of the target team. */
        team_id: string;
      };
      output: {
        /** status list. */
        states: Array<{
          /** The unique identifier of the status. */
          id: string;
          /** Status name. */
          name: string;
          /** Status type. */
          type?: string;
          /** Status color. */
          color?: string;
          /** Status description. */
          description?: string;
        }>;
      };
    };
    /** Lists Linear teams accessible with current credentials, along with a list of members and projects. */
    "linear.list_linear_teams": {
      input: {
        /** The project's unique identifier used to filter the team's project list. */
        project_id?: string;
      };
      output: {
        /** Team list. */
        teams: Array<{
          /** The team's unique identifier. */
          id: string;
          /** Team name. */
          name: string;
          /** The team shorthand key. */
          key?: string;
          /** List of team members. */
          members: Array<{
            /** User unique identifier. */
            id: string;
            /** User name. */
            name?: string;
            /** User display name. */
            displayName?: string;
            /** User email. */
            email?: string;
            /** User avatar address. */
            avatarUrl?: string;
            /** Whether the user is active. */
            active?: boolean;
            /** Whether the user is an administrator. */
            admin?: boolean;
            /** User creation time. */
            createdAt?: string;
          }>;
          /** Team project list. */
          projects: Array<{
            /** The unique identifier of the project. */
            id: string;
            /** Project name. */
            name: string;
            /** Project slug identifier. */
            slugId?: string;
            /** Project link. */
            url?: string;
            /** Project status. */
            state?: string;
            /** Project health status. */
            health?: string | null;
            /** Project progress. */
            progress?: number;
            /** Project priority. */
            priority?: number;
            /** Project priority label. */
            priorityLabel?: string;
            /** Project scope value. */
            scope?: number;
            /** Item color. */
            color?: string | null;
            /** Project description. */
            description?: string | null;
            /** Project icon. */
            icon?: string | null;
            /** Project start date. */
            startDate?: string | null;
            /** Project target date. */
            targetDate?: string | null;
            /** Project creation time. */
            createdAt?: string;
            /** Project update time. */
            updatedAt?: string;
            /** Project leader. */
            lead?: {
              /** User unique identifier. */
              id: string;
              /** User name. */
              name?: string;
              /** User display name. */
              displayName?: string;
              /** User email. */
              email?: string;
              /** User avatar address. */
              avatarUrl?: string;
              /** Whether the user is active. */
              active?: boolean;
              /** Whether the user is an administrator. */
              admin?: boolean;
              /** User creation time. */
              createdAt?: string;
            } | null;
            /** Project creator. */
            creator?: {
              /** User unique identifier. */
              id: string;
              /** User name. */
              name?: string;
              /** User display name. */
              displayName?: string;
              /** User email. */
              email?: string;
              /** User avatar address. */
              avatarUrl?: string;
              /** Whether the user is active. */
              active?: boolean;
              /** Whether the user is an administrator. */
              admin?: boolean;
              /** User creation time. */
              createdAt?: string;
            } | null;
            /** Project status object. */
            status?: {
              /** Unique identifier of project status. */
              id: string;
              /** Project status name. */
              name: string;
              /** Project status type. */
              type?: string;
              /** Project status color. */
              color?: string;
              /** Project status description. */
              description?: string;
            } | null;
          }>;
        }>;
      };
    };
    /** List Linear users in the current workspace and support cursor paging. */
    "linear.list_linear_users": {
      input: {
        /** Next page cursor. */
        after?: string;
        /** Return quantity per page. */
        first?: number;
      };
      output: {
        /** User list. */
        users: Array<{
          /** User unique identifier. */
          id: string;
          /** User name. */
          name?: string;
          /** User display name. */
          displayName?: string;
          /** User email. */
          email?: string;
          /** User avatar address. */
          avatarUrl?: string;
          /** Whether the user is active. */
          active?: boolean;
          /** Whether the user is an administrator. */
          admin?: boolean;
          /** User creation time. */
          createdAt?: string;
        }>;
        /** Pagination information. */
        page_info: {
          /** The starting point of the cursor on the previous page. */
          startCursor?: string | null;
          /** The end cursor for the next page. */
          endCursor: string | null;
          /** Whether there is a previous page. */
          hasPreviousPage?: boolean;
          /** Whether the next page exists. */
          hasNextPage: boolean;
        };
      };
    };
    /** Removes a label from the specified Linear issue. */
    "linear.remove_issue_label": {
      input: {
        /** Target issue identifier. */
        issue_id: string;
        /** The tag ID to be removed. */
        label_id: string;
      };
      output: {
        /** Target issue identifier. */
        issue_id: string;
        /** Identifier of the tag that was removed. */
        label_id: string;
        /** Whether the removal was successful. */
        removed: boolean;
      };
    };
    /** Delete an existing Linear reaction. */
    "linear.remove_reaction": {
      input: {
        /** Unique identifier of the reaction to delete. */
        reaction_id: string;
      };
      output: {
        /** The unique identifier of the deleted reaction. */
        reaction_id: string;
        /** Whether the deletion was successful. */
        removed: boolean;
      };
    };
    /** Perform a mutation directly on the Linear GraphQL API. */
    "linear.run_mutation": {
      input: {
        /** The text of the GraphQL mutation to perform. */
        mutation: string;
        /** GraphQL variable object. */
        variables?: Record<string, unknown>;
      };
      output: {
        /** The GraphQL data payload. */
        data?: Record<string, unknown> | null;
        /** The GraphQL error list. */
        errors?: Array<{
          /** The GraphQL error message. */
          message: string;
          /** The response path where the error occurred. */
          path?: Array<string | number>;
          /** The list of error locations in the GraphQL document. */
          locations?: Array<{
            /** The line number where the error occurred. */
            line: number;
            /** The column number where the error occurred. */
            column: number;
          }>;
          /** Additional error metadata. */
          extensions?: Record<string, unknown>;
        }>;
        /** The GraphQL extensions payload. */
        extensions?: Record<string, unknown>;
        /** The summarized execution status message. */
        message?: string;
      };
    };
    /** Execute a read-only query directly against the Linear GraphQL API. */
    "linear.run_query": {
      input: {
        /** The text of the GraphQL query to execute. */
        query: string;
        /** GraphQL variable object. */
        variables?: Record<string, unknown>;
      };
      output: {
        /** The GraphQL data payload. */
        data?: Record<string, unknown> | null;
        /** The GraphQL error list. */
        errors?: Array<{
          /** The GraphQL error message. */
          message: string;
          /** The response path where the error occurred. */
          path?: Array<string | number>;
          /** The list of error locations in the GraphQL document. */
          locations?: Array<{
            /** The line number where the error occurred. */
            line: number;
            /** The column number where the error occurred. */
            column: number;
          }>;
          /** Additional error metadata. */
          extensions?: Record<string, unknown>;
        }>;
        /** The GraphQL extensions payload. */
        extensions?: Record<string, unknown>;
        /** The summarized execution status message. */
        message?: string;
      };
    };
    /** Retrieve issues through Linear's full-text search capabilities. */
    "linear.search_issues": {
      input: {
        /** Next page cursor. */
        after?: string;
        /** Return quantity per page. */
        first?: number;
        /** Full text search keywords. */
        query: string;
        /** Whether to include archived issues. */
        include_archived?: boolean;
      };
      output: {
        /** List of issues in search results. */
        issues: Array<{
          /** issue unique identifier. */
          id: string;
          /** Issue abbreviation identifier. */
          identifier: string;
          /** issue title. */
          title: string;
          /** issue description. */
          description?: string | null;
          /** issue link. */
          url?: string;
          /** issue creation time. */
          createdAt: string;
          /** issue update time. */
          updatedAt: string;
          /** Issue filing time. */
          archivedAt?: string | null;
          /** issue deadline. */
          dueDate?: string | null;
          /** issue priority. */
          priority?: number | null;
          /** issue estimate. */
          estimate?: number | null;
          /** Team information. */
          team?: {
            /** The team's unique identifier. */
            id: string;
            /** Team name. */
            name: string;
            /** The team shorthand key. */
            key?: string;
          } | null;
          /** Current workflow status. */
          state?: {
            /** The unique identifier of the status. */
            id: string;
            /** Status name. */
            name: string;
            /** Status type. */
            type?: string;
            /** Status color. */
            color?: string;
            /** Status description. */
            description?: string;
          } | null;
          /** Project information. */
          project?: {
            /** The unique identifier of the project. */
            id: string;
            /** Project name. */
            name: string;
            /** Project slug identifier. */
            slugId?: string;
            /** Project link. */
            url?: string;
            /** Project status. */
            state?: string;
            /** Project health status. */
            health?: string | null;
            /** Project progress. */
            progress?: number;
            /** Project priority. */
            priority?: number;
            /** Project priority label. */
            priorityLabel?: string;
            /** Project scope value. */
            scope?: number;
            /** Item color. */
            color?: string | null;
            /** Project description. */
            description?: string | null;
            /** Project icon. */
            icon?: string | null;
            /** Project start date. */
            startDate?: string | null;
            /** Project target date. */
            targetDate?: string | null;
            /** Project creation time. */
            createdAt?: string;
            /** Project update time. */
            updatedAt?: string;
            /** Project leader. */
            lead?: {
              /** User unique identifier. */
              id: string;
              /** User name. */
              name?: string;
              /** User display name. */
              displayName?: string;
              /** User email. */
              email?: string;
              /** User avatar address. */
              avatarUrl?: string;
              /** Whether the user is active. */
              active?: boolean;
              /** Whether the user is an administrator. */
              admin?: boolean;
              /** User creation time. */
              createdAt?: string;
            } | null;
            /** Project creator. */
            creator?: {
              /** User unique identifier. */
              id: string;
              /** User name. */
              name?: string;
              /** User display name. */
              displayName?: string;
              /** User email. */
              email?: string;
              /** User avatar address. */
              avatarUrl?: string;
              /** Whether the user is active. */
              active?: boolean;
              /** Whether the user is an administrator. */
              admin?: boolean;
              /** User creation time. */
              createdAt?: string;
            } | null;
            /** Project status object. */
            status?: {
              /** Unique identifier of project status. */
              id: string;
              /** Project status name. */
              name: string;
              /** Project status type. */
              type?: string;
              /** Project status color. */
              color?: string;
              /** Project status description. */
              description?: string;
            } | null;
          } | null;
          /** Current person in charge information. */
          assignee?: {
            /** User unique identifier. */
            id: string;
            /** User name. */
            name?: string;
            /** User display name. */
            displayName?: string;
            /** User email. */
            email?: string;
            /** User avatar address. */
            avatarUrl?: string;
            /** Whether the user is active. */
            active?: boolean;
            /** Whether the user is an administrator. */
            admin?: boolean;
            /** User creation time. */
            createdAt?: string;
          } | null;
          /** issue tag connection. */
          labels?: {
            /** tag list. */
            nodes: Array<{
              /** Tag unique identifier. */
              id: string;
              /** Tag name. */
              name: string;
              /** Label color. */
              color?: string;
              /** Tag description. */
              description?: string;
              /** Whether to group labels. */
              is_group?: boolean;
              /** Whether to group labels. */
              isGroup?: boolean;
              /** Parent label group information. */
              parent?: {
                /** The unique identifier of the parent label group. */
                id: string;
                /** The name of the parent label group. */
                name: string;
              } | null;
            }>;
          };
        }>;
        /** Pagination information. */
        page_info: {
          /** The starting point of the cursor on the previous page. */
          startCursor?: string | null;
          /** The end cursor for the next page. */
          endCursor: string | null;
          /** Whether there is a previous page. */
          hasPreviousPage?: boolean;
          /** Whether the next page exists. */
          hasNextPage: boolean;
        };
        /** The total number of results before filtering is applied. */
        total_count: number;
      };
    };
    /** Update an existing Linear issue and support fields such as title, description, status, project, label, etc. */
    "linear.update_issue": {
      input: {
        /** New issue title. */
        title?: string;
        /** New team unique identifier. */
        teamId?: string;
        /** The unique identifier of the new cycle. */
        cycleId?: string;
        /** New deadline. */
        dueDate?: string;
        /** The issue ID to update. */
        issueId: string;
        /** The new status unique identifier. */
        stateId?: string;
        /** New estimate. */
        estimate?: number;
        /** New tag identifier list. */
        labelIds?: Array<string>;
        /** The new parent issue ID. */
        parentId?: string;
        /** New priorities. */
        priority?: number;
        /** The new project unique identifier. */
        projectId?: string;
        /** The unique identifier of the new person in charge. */
        assigneeId?: string;
        /** New issue description. */
        description?: string;
      };
      output: {
        /** Updated issue details. */
        issue: {
          /** issue unique identifier. */
          id: string;
          /** Issue abbreviation identifier. */
          identifier: string;
          /** issue title. */
          title: string;
          /** issue description. */
          description?: string | null;
          /** issue link. */
          url?: string;
          /** issue creation time. */
          createdAt: string;
          /** issue update time. */
          updatedAt: string;
          /** Issue filing time. */
          archivedAt?: string | null;
          /** issue deadline. */
          dueDate?: string | null;
          /** issue priority. */
          priority?: number | null;
          /** issue estimate. */
          estimate?: number | null;
          /** Team information. */
          team?: {
            /** The team's unique identifier. */
            id: string;
            /** Team name. */
            name: string;
            /** The team shorthand key. */
            key?: string;
          } | null;
          /** Current workflow status. */
          state?: {
            /** The unique identifier of the status. */
            id: string;
            /** Status name. */
            name: string;
            /** Status type. */
            type?: string;
            /** Status color. */
            color?: string;
            /** Status description. */
            description?: string;
          } | null;
          /** Project information. */
          project?: {
            /** The unique identifier of the project. */
            id: string;
            /** Project name. */
            name: string;
            /** Project slug identifier. */
            slugId?: string;
            /** Project link. */
            url?: string;
            /** Project status. */
            state?: string;
            /** Project health status. */
            health?: string | null;
            /** Project progress. */
            progress?: number;
            /** Project priority. */
            priority?: number;
            /** Project priority label. */
            priorityLabel?: string;
            /** Project scope value. */
            scope?: number;
            /** Item color. */
            color?: string | null;
            /** Project description. */
            description?: string | null;
            /** Project icon. */
            icon?: string | null;
            /** Project start date. */
            startDate?: string | null;
            /** Project target date. */
            targetDate?: string | null;
            /** Project creation time. */
            createdAt?: string;
            /** Project update time. */
            updatedAt?: string;
            /** Project leader. */
            lead?: {
              /** User unique identifier. */
              id: string;
              /** User name. */
              name?: string;
              /** User display name. */
              displayName?: string;
              /** User email. */
              email?: string;
              /** User avatar address. */
              avatarUrl?: string;
              /** Whether the user is active. */
              active?: boolean;
              /** Whether the user is an administrator. */
              admin?: boolean;
              /** User creation time. */
              createdAt?: string;
            } | null;
            /** Project creator. */
            creator?: {
              /** User unique identifier. */
              id: string;
              /** User name. */
              name?: string;
              /** User display name. */
              displayName?: string;
              /** User email. */
              email?: string;
              /** User avatar address. */
              avatarUrl?: string;
              /** Whether the user is active. */
              active?: boolean;
              /** Whether the user is an administrator. */
              admin?: boolean;
              /** User creation time. */
              createdAt?: string;
            } | null;
            /** Project status object. */
            status?: {
              /** Unique identifier of project status. */
              id: string;
              /** Project status name. */
              name: string;
              /** Project status type. */
              type?: string;
              /** Project status color. */
              color?: string;
              /** Project status description. */
              description?: string;
            } | null;
          } | null;
          /** Current person in charge information. */
          assignee?: {
            /** User unique identifier. */
            id: string;
            /** User name. */
            name?: string;
            /** User display name. */
            displayName?: string;
            /** User email. */
            email?: string;
            /** User avatar address. */
            avatarUrl?: string;
            /** Whether the user is active. */
            active?: boolean;
            /** Whether the user is an administrator. */
            admin?: boolean;
            /** User creation time. */
            createdAt?: string;
          } | null;
          /** issue tag connection. */
          labels?: {
            /** tag list. */
            nodes: Array<{
              /** Tag unique identifier. */
              id: string;
              /** Tag name. */
              name: string;
              /** Label color. */
              color?: string;
              /** Tag description. */
              description?: string;
              /** Whether to group labels. */
              is_group?: boolean;
              /** Whether to group labels. */
              isGroup?: boolean;
              /** Parent label group information. */
              parent?: {
                /** The unique identifier of the parent label group. */
                id: string;
                /** The name of the parent label group. */
                name: string;
              } | null;
            }>;
          };
          /** Issue creator information. */
          creator?: {
            /** User unique identifier. */
            id: string;
            /** User name. */
            name?: string;
            /** User display name. */
            displayName?: string;
            /** User email. */
            email?: string;
            /** User avatar address. */
            avatarUrl?: string;
            /** Whether the user is active. */
            active?: boolean;
            /** Whether the user is an administrator. */
            admin?: boolean;
            /** User creation time. */
            createdAt?: string;
          } | null;
          /** The cycle to which the issue belongs. */
          cycle?: {
            /** The unique identifier of the cycle. */
            id: string;
            /** Cycle name. */
            name: string;
            /** Cycle number. */
            number?: number;
            /** Cycle description. */
            description?: string;
            /** Cycle start time. */
            startsAt?: string;
            /** Cycle end time. */
            endsAt?: string;
            /** Cycle completion time. */
            completedAt?: string;
            /** Whether it is the current activation period. */
            isActive?: boolean;
            /** Whether it is a future period. */
            isFuture?: boolean;
            /** Whether it is a past period. */
            isPast?: boolean;
            /** Team information. */
            team?: {
              /** The team's unique identifier. */
              id: string;
              /** Team name. */
              name: string;
              /** The team shorthand key. */
              key?: string;
            };
          } | null;
          /** Parent issue information. */
          parent?: {
            /** The unique identifier of the parent issue. */
            id: string;
            /** The abbreviated identifier of the parent issue. */
            identifier: string;
            /** Parent issue title. */
            title: string;
          } | null;
          /** issue attachment connection. */
          attachments?: {
            /** Attachment list. */
            nodes: Array<{
              /** The unique identifier of the attachment. */
              id: string;
              /** Attachment title. */
              title: string;
              /** Attachment subtitle. */
              subtitle?: string | null;
              /** Attachment link. */
              url: string;
              /** Attachment source type. */
              sourceType?: string | null;
              /** Attachment metadata. */
              metadata?: Record<string, unknown>;
              /** Attachment source information. */
              source?: Record<string, unknown> | null;
              /** The issue to which the attachment belongs. */
              issue?: {
                /** Unique identifier associated with the issue. */
                id: string;
                /** Associated issue abbreviation identifier. */
                identifier?: string;
                /** Associated issue title. */
                title?: string;
              } | null;
              /** The time the attachment was created. */
              createdAt?: string;
              /** Attachment update time. */
              updatedAt?: string;
            }>;
            /** Attachment paging information. */
            pageInfo?: {
              /** The starting point of the cursor on the previous page. */
              startCursor?: string | null;
              /** The end cursor for the next page. */
              endCursor: string | null;
              /** Whether there is a previous page. */
              hasPreviousPage?: boolean;
              /** Whether the next page exists. */
              hasNextPage: boolean;
            };
          };
          /** issue comment link. */
          comments?: {
            /** Comments list. */
            nodes: Array<{
              /** The unique identifier of the comment. */
              id: string;
              /** Comment text. */
              body?: string;
              /** Comment link. */
              url?: string;
              /** Quote text. */
              quotedText?: string | null;
              /** Comment creation time. */
              createdAt?: string;
              /** Comment updated time. */
              updatedAt?: string;
              /** Comment editing time. */
              editedAt?: string | null;
              /** Comment resolution time. */
              resolvedAt?: string | null;
              /** Unique identifier associated with the issue. */
              issueId?: string | null;
              /** The unique identifier of the parent comment. */
              parentId?: string | null;
              /** Associated project updates unique identifier. */
              projectUpdateId?: string | null;
              /** Comment author information. */
              user?: {
                /** User unique identifier. */
                id: string;
                /** User name. */
                name?: string;
                /** User display name. */
                displayName?: string;
                /** User email. */
                email?: string;
                /** User avatar address. */
                avatarUrl?: string;
                /** Whether the user is active. */
                active?: boolean;
                /** Whether the user is an administrator. */
                admin?: boolean;
                /** User creation time. */
                createdAt?: string;
              } | null;
              /** List of reactions on comments. */
              reactions?: Array<{
                /** Reaction unique identifier. */
                id: string;
                /** The emoji used by the reaction. */
                emoji: string;
                /** Reaction creation time. */
                createdAt?: string;
                /** Response update time. */
                updatedAt?: string;
                /** The user who triggered the reaction. */
                user?: {
                  /** User unique identifier. */
                  id: string;
                  /** User name. */
                  name?: string;
                  /** User display name. */
                  displayName?: string;
                  /** User email. */
                  email?: string;
                  /** User avatar address. */
                  avatarUrl?: string;
                  /** Whether the user is active. */
                  active?: boolean;
                  /** Whether the user is an administrator. */
                  admin?: boolean;
                  /** User creation time. */
                  createdAt?: string;
                } | null;
                /** The comment value. */
                comment?: {
                  /** The unique identifier of the comment. */
                  id: string;
                } | null;
                /** The issue value. */
                issue?: {
                  /** issue unique identifier. */
                  id: string;
                  /** Issue abbreviation identifier. */
                  identifier?: string;
                } | null;
                /** The projectUpdate value. */
                projectUpdate?: {
                  /** Project update unique identifier. */
                  id: string;
                } | null;
              }>;
            }>;
            /** Comment pagination information. */
            pageInfo?: {
              /** The starting point of the cursor on the previous page. */
              startCursor?: string | null;
              /** The end cursor for the next page. */
              endCursor: string | null;
              /** Whether there is a previous page. */
              hasPreviousPage?: boolean;
              /** Whether the next page exists. */
              hasNextPage: boolean;
            };
          };
          /** issue subscriber connection. */
          subscribers?: {
            /** Subscriber list. */
            nodes: Array<{
              /** User unique identifier. */
              id: string;
              /** User name. */
              name?: string;
              /** User display name. */
              displayName?: string;
              /** User email. */
              email?: string;
              /** User avatar address. */
              avatarUrl?: string;
              /** Whether the user is active. */
              active?: boolean;
              /** Whether the user is an administrator. */
              admin?: boolean;
              /** User creation time. */
              createdAt?: string;
            }>;
            /** Subscriber pagination information. */
            pageInfo?: {
              /** The starting point of the cursor on the previous page. */
              startCursor?: string | null;
              /** The end cursor for the next page. */
              endCursor: string | null;
              /** Whether there is a previous page. */
              hasPreviousPage?: boolean;
              /** Whether the next page exists. */
              hasNextPage: boolean;
            };
          };
          /** List of reactions on the issue. */
          reactions?: Array<{
            /** Reaction unique identifier. */
            id: string;
            /** The emoji used by the reaction. */
            emoji: string;
            /** Reaction creation time. */
            createdAt?: string;
            /** Response update time. */
            updatedAt?: string;
            /** The user who triggered the reaction. */
            user?: {
              /** User unique identifier. */
              id: string;
              /** User name. */
              name?: string;
              /** User display name. */
              displayName?: string;
              /** User email. */
              email?: string;
              /** User avatar address. */
              avatarUrl?: string;
              /** Whether the user is active. */
              active?: boolean;
              /** Whether the user is an administrator. */
              admin?: boolean;
              /** User creation time. */
              createdAt?: string;
            } | null;
            /** The comment value. */
            comment?: {
              /** The unique identifier of the comment. */
              id: string;
            } | null;
            /** The issue value. */
            issue?: {
              /** issue unique identifier. */
              id: string;
              /** Issue abbreviation identifier. */
              identifier?: string;
            } | null;
            /** The projectUpdate value. */
            projectUpdate?: {
              /** Project update unique identifier. */
              id: string;
            } | null;
          }>;
        };
      };
    };
    /** Update the text of an existing Linear comment. */
    "linear.update_linear_comment": {
      input: {
        /** Unique identifier of the review to be updated. */
        comment_id: string;
        /** New comment text. */
        body: string;
      };
      output: {
        /** The updated comment object. */
        comment: {
          /** The unique identifier of the comment. */
          id: string;
          /** Comment text. */
          body?: string;
          /** Comment link. */
          url?: string;
          /** Quote text. */
          quotedText?: string | null;
          /** Comment creation time. */
          createdAt?: string;
          /** Comment updated time. */
          updatedAt?: string;
          /** Comment editing time. */
          editedAt?: string | null;
          /** Comment resolution time. */
          resolvedAt?: string | null;
          /** Unique identifier associated with the issue. */
          issueId?: string | null;
          /** The unique identifier of the parent comment. */
          parentId?: string | null;
          /** Associated project updates unique identifier. */
          projectUpdateId?: string | null;
          /** Comment author information. */
          user?: {
            /** User unique identifier. */
            id: string;
            /** User name. */
            name?: string;
            /** User display name. */
            displayName?: string;
            /** User email. */
            email?: string;
            /** User avatar address. */
            avatarUrl?: string;
            /** Whether the user is active. */
            active?: boolean;
            /** Whether the user is an administrator. */
            admin?: boolean;
            /** User creation time. */
            createdAt?: string;
          } | null;
          /** List of reactions on comments. */
          reactions?: Array<{
            /** Reaction unique identifier. */
            id: string;
            /** The emoji used by the reaction. */
            emoji: string;
            /** Reaction creation time. */
            createdAt?: string;
            /** Response update time. */
            updatedAt?: string;
            /** The user who triggered the reaction. */
            user?: {
              /** User unique identifier. */
              id: string;
              /** User name. */
              name?: string;
              /** User display name. */
              displayName?: string;
              /** User email. */
              email?: string;
              /** User avatar address. */
              avatarUrl?: string;
              /** Whether the user is active. */
              active?: boolean;
              /** Whether the user is an administrator. */
              admin?: boolean;
              /** User creation time. */
              createdAt?: string;
            } | null;
            /** The comment value. */
            comment?: {
              /** The unique identifier of the comment. */
              id: string;
            } | null;
            /** The issue value. */
            issue?: {
              /** issue unique identifier. */
              id: string;
              /** Issue abbreviation identifier. */
              identifier?: string;
            } | null;
            /** The projectUpdate value. */
            projectUpdate?: {
              /** Project update unique identifier. */
              id: string;
            } | null;
          }>;
        };
      };
    };
    /** Update an existing Linear project. */
    "linear.update_linear_project": {
      input: {
        /** New project icon. */
        icon?: string;
        /** New project name. */
        name?: string;
        /** New project colors. */
        color?: string;
        /** Project status field. */
        state?: "backlog" | "planned" | "started" | "paused" | "completed" | "canceled";
        /** The unique identifier of the new project leader. */
        lead_id?: string;
        /** New project priorities. */
        priority?: number;
        /** The new project status unique identifier. */
        status_id?: string;
        /** The unique identifier of the project to be updated. */
        project_id: string;
        /** New project start date. */
        start_date?: string;
        /** New project description. */
        description?: string;
        /** New project target date. */
        target_date?: string;
      };
      output: {
        /** The updated project object. */
        project: {
          /** The unique identifier of the project. */
          id: string;
          /** Project name. */
          name: string;
          /** Project slug identifier. */
          slugId?: string;
          /** Project link. */
          url?: string;
          /** Project status. */
          state?: string;
          /** Project health status. */
          health?: string | null;
          /** Project progress. */
          progress?: number;
          /** Project priority. */
          priority?: number;
          /** Project priority label. */
          priorityLabel?: string;
          /** Project scope value. */
          scope?: number;
          /** Item color. */
          color?: string | null;
          /** Project description. */
          description?: string | null;
          /** Project icon. */
          icon?: string | null;
          /** Project start date. */
          startDate?: string | null;
          /** Project target date. */
          targetDate?: string | null;
          /** Project creation time. */
          createdAt?: string;
          /** Project update time. */
          updatedAt?: string;
          /** Project leader. */
          lead?: {
            /** User unique identifier. */
            id: string;
            /** User name. */
            name?: string;
            /** User display name. */
            displayName?: string;
            /** User email. */
            email?: string;
            /** User avatar address. */
            avatarUrl?: string;
            /** Whether the user is active. */
            active?: boolean;
            /** Whether the user is an administrator. */
            admin?: boolean;
            /** User creation time. */
            createdAt?: string;
          } | null;
          /** Project creator. */
          creator?: {
            /** User unique identifier. */
            id: string;
            /** User name. */
            name?: string;
            /** User display name. */
            displayName?: string;
            /** User email. */
            email?: string;
            /** User avatar address. */
            avatarUrl?: string;
            /** Whether the user is active. */
            active?: boolean;
            /** Whether the user is an administrator. */
            admin?: boolean;
            /** User creation time. */
            createdAt?: string;
          } | null;
          /** Project status object. */
          status?: {
            /** Unique identifier of project status. */
            id: string;
            /** Project status name. */
            name: string;
            /** Project status type. */
            type?: string;
            /** Project status color. */
            color?: string;
            /** Project status description. */
            description?: string;
          } | null;
        };
      };
    };
  }
}
