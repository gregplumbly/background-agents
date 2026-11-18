import { randomUUID } from 'node:crypto'
import { inngest } from './inngest'
import { agentState, getRun, goalSatisfied, setRun, recordDecision, recordToolAction, setIteration } from './agent-data'
import {chooseAction} from './agent-brain'



// The alert intake has already opened an incident. Build its harness here.
export const incidentAgent = inngest.createFunction(
  { id: 'incident-agent', name: 'Checkout incident agent', triggers: { event: 'incident/opened' } },
  async ({ event }) => {
    await setRun(event.data.runId, 'escalated', 'Harness not implemented yet')
    return { runId: event.data.runId, next: 'Build the observe–decide–act loop' }
  },
)
