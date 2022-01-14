
import { promises as fs } from "fs"

export const getTestSuiteResults = async () => {
  try {
    return JSON.parse(
      await fs.readFile('mochawesome-report/mochawesome.json', 'utf8')
    ) as TestSuiteResults
  } catch (error) {
    return {}
  }
}

