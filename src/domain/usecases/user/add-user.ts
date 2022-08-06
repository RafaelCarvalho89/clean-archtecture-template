import { UserModel } from '../../models/user/user'
import { AddUserParams } from './params/add-user.params'

export interface AddUser {
  execute(params: AddUserParams): Promise<UserModel>
}
