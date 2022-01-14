
import { Octokit } from 'octokit'
import { githubRepositoryOwner, githubRepositoryName } from '../config'

export const getPullRequests = async () => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

  const { data: pullRequests } = await octokit.rest.pulls.list({
    owner: githubRepositoryOwner,
    repo: githubRepositoryName,
    state: 'open'
  })

  return pullRequests
}