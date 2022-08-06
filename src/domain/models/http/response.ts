import { HttpStatusModel } from './status'

export interface HttpResponseModel<T> {
  status: HttpStatusModel
  response: T
}
