import { newMockEvent } from "matchstick-as"
import { ethereum } from "@graphprotocol/graph-ts"
import { Confessed } from "../generated/Confessions/Confessions"

export function createConfessedEvent(confession: string): Confessed {
  let confessedEvent = changetype<Confessed>(newMockEvent())

  confessedEvent.parameters = new Array()

  confessedEvent.parameters.push(
    new ethereum.EventParam("confession", ethereum.Value.fromString(confession))
  )

  return confessedEvent
}
