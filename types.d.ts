interface Metric {
  title: string
  amount: number | string
  percentage?: number
  unit?: string
}

interface PullRequest {
  id: number
  html_url: string
  'number': number
  state: string
  locked: boolean
  title: string
  user: {
    avatar_url: string
    login: string
  }
}

interface Issue {
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: string;
  /** The time at which the issue was automatically archived by the auto pruning process. */
  autoArchivedAt?: string;
  /** The time at which the issue was automatically closed by the auto pruning process. */
  autoClosedAt?: string;
  /** The order of the item in its column on the board. */
  boardOrder: number;
  /** Suggested branch name for the issue. */
  branchName: string;
  /** The time at which the issue was moved into canceled state. */
  canceledAt?: string;
  /** The time at which the issue was moved into completed state. */
  completedAt?: string;
  /** The time at which the entity was created. */
  createdAt: string;
  /** Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. Zendesk). */
  customerTicketCount: number;
  /** The issue's description in markdown format. */
  description: string;
  /** The date at which the issue is due. */
  dueDate?: string;
  /** The estimate of the complexity of the issue.. */
  estimate?: number;
  /** The unique identifier of the entity. */
  id: string;
  /** Issue's human readable identifier (e.g. ENG-123). */
  identifier: string;
  /** The issue's unique number. */
  number: number;
  /** Previous identifiers of the issue if it has been moved between teams. */
  previousIdentifiers: string[];
  /** The priority of the issue. */
  priority: number;
  /** Label for the priority. */
  priorityLabel: string;
  /** The time until an issue will be snoozed in Triage view. */
  snoozedUntilAt?: string;
  /** The order of the item in relation to other items in the organization. */
  sortOrder: number;
  /** The time at which the issue was moved into started state. */
  startedAt?: string;
  /** The order of the item in the sub-issue list. Only set if the issue has a parent. */
  subIssueSortOrder?: number;
  /** The issue's title. */
  title: string;
  /** A flag that indicates whether the issue is in the trash bin. */
  trashed?: boolean;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: string;
  /** Issue URL. */
  url: string;
}

/*
interface TestSuiteResult {
  startedTestsAt: string
  endedTestsAt: string
  totalDuration: number
  totalSuites: number
  totalTests: number
  totalFailed: number
  totalPassed: number
  totalPending: number
  totalSkipped: number
}
*/

interface PerformanceResults {
  success: boolean
  pageLoad: number
  timestamp: string
}

interface TestSuiteResults {
  stats: {
    suites: number
    tests: number
    passes: number
    pending: number
    failures: number
    start: string
    end: string
    duration: number
    testsRegistered: number
    passPercent: number
    pendingPercent: number
    other: number
    hasOther: boolean
    skipped: number
    hasSkipped: boolean
  },
}

interface DocFile {
  name: string
  path: string
  directory: string
  createdAt: string
  updatedAt: string
  content: string
  url: string
}