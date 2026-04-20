import { postType } from './post'
import { teamMemberType } from './teamMember'
import { settingsType } from './settings'
import { jobType } from './job'

// IMPORTANT: This array is what Sanity looks at to build your sidebar
export const schema = {
  types: [postType, teamMemberType, settingsType, jobType],
}