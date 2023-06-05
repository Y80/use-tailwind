import { faker } from '@faker-js/faker/locale/en'

export default function MockTitle() {
  return <>{faker.lorem.sentence()}</>
}
