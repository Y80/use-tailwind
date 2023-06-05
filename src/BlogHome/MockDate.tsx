import { faker } from '@faker-js/faker/locale/en'

export default function MockTitle() {
  return (
    <>
      {faker.date.month({ abbreviated: true }) + ' '}
      {('0' + faker.number.int({ min: 1, max: 31 })).slice(-2)}
    </>
  )
}
