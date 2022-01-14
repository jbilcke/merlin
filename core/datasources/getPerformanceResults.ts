
import { promises as fs } from "fs"

export const getPerformanceResults = async (): Promise<PerformanceResults> => {
  try {
    return JSON.parse(
      await fs.readFile('cypress/results/test.json', 'utf8')
    ) as PerformanceResults
  } catch (error) {
    return {
      success: false,
      pageLoad: -1,
      timestamp: Date.now().toString()
    }
  }
}
