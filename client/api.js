import request from 'superagent'

export function getProfiiles () {
  return request('/api/v1/profiles')
    .then(res => res.body)
    .catch(err => { throw new Error(err.message) })
}