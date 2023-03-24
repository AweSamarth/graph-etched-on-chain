import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import {} from "@graphprotocol/graph-ts"
import { Confessed } from "../generated/schema"
import { Confessed as ConfessedEvent } from "../generated/Confessions/Confessions"
import { handleConfessed } from "../src/confessions"
import { createConfessedEvent } from "./confessions-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let confession = "Example string value"
    let newConfessedEvent = createConfessedEvent(confession)
    handleConfessed(newConfessedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Confessed created and stored", () => {
    assert.entityCount("Confessed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Confessed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "confession",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
