// @flow

import neo, { fetchNeoFeedEpic } from './neo'

export const appEpic = [fetchNeoFeedEpic]

export default {
  neo
}
