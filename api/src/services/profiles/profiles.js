import { db } from 'src/lib/db'

export const profiles = () => {
  return db.profile.findMany()
}

export const profile = ({ id }) => {
  return db.profile.findOne({
    where: { id },
  })
}

export const createProfile = ({ input }) => {
  return db.profile.create({
    data: input,
  })
}

export const updateProfile = ({ id, input }) => {
  return db.profile.update({
    data: input,
    where: { id },
  })
}

export const deleteProfile = ({ id }) => {
  return db.profile.delete({
    where: { id },
  })
}

export const Profile = {
  user: (_obj, { root }) =>
    db.profile.findOne({ where: { id: root.id } }).user(),
}
