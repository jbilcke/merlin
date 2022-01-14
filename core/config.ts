// we need to do this otherwise we will get nullable fields
export const githubRepositoryOwner = process.env.GITHUB_REPOSITORY_OWNER || ''
export const githubRepositoryName = process.env.GITHUB_REPOSITORY_NAME || ''