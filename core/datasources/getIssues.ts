import { LinearClient } from '@linear/sdk'

export const getIssues = async () => {

  const client = new LinearClient({
    apiKey: process.env.LINEAR_API_KEY
  })

  const me = await client.viewer
  const myIssues = await me.assignedIssues()

  if (myIssues.nodes.length) {
    myIssues.nodes.map(issue => console.log(`${me.displayName} has issue: ${issue.title}`));
  } else {
    console.log(`${me.displayName} has no issues`);
  }

  const issues = myIssues.nodes.map(issue => ({
    createdAt: issue.createdAt ? issue.createdAt.toString() : null,
    customerTicketCount: issue.customerTicketCount || 0,
    description: issue.description || '',
    dueDate: issue.dueDate ? issue.dueDate.toString() : null,
    id: issue.id,
    identifier: issue.identifier,
    priority: issue.priority || 0,
    priorityLabel: issue.priorityLabel || '',
    snoozedUntilAt: issue.snoozedUntilAt ? issue.snoozedUntilAt.toString() : null,
    sortOrder: issue.sortOrder,
    startedAt: issue.startedAt ? issue.startedAt.toString() : null,
    title: issue.title || '',
    updatedAt: issue.updatedAt ? issue.updatedAt.toString() : null,
    url: issue.url || '#',
  }) as Issue)

  console.log('issues:', issues)

  return issues
}
