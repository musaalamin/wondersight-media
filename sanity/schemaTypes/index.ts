import { postType } from './post'
import { teamMemberType } from './teamMember'
import { settingsType } from './settings'
import { jobType } from './job' // ADD THIS

export const schema = {
  // Add jobType to the array below
  types: [postType, teamMemberType, settingsType, jobType],
}