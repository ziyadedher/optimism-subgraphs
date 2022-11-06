import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import { L2GasParamsUpdated } from "../generated/schema"
import { L2GasParamsUpdated as L2GasParamsUpdatedEvent } from "../generated/CanonicalTransactionChain/CanonicalTransactionChain"
import { handleL2GasParamsUpdated } from "../src/canonical-transaction-chain"
import { createL2GasParamsUpdatedEvent } from "./canonical-transaction-chain-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let l2GasDiscountDivisor = BigInt.fromI32(234)
    let enqueueGasCost = BigInt.fromI32(234)
    let enqueueL2GasPrepaid = BigInt.fromI32(234)
    let newL2GasParamsUpdatedEvent = createL2GasParamsUpdatedEvent(
      l2GasDiscountDivisor,
      enqueueGasCost,
      enqueueL2GasPrepaid
    )
    handleL2GasParamsUpdated(newL2GasParamsUpdatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("L2GasParamsUpdated created and stored", () => {
    assert.entityCount("L2GasParamsUpdated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "L2GasParamsUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "l2GasDiscountDivisor",
      "234"
    )
    assert.fieldEquals(
      "L2GasParamsUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "enqueueGasCost",
      "234"
    )
    assert.fieldEquals(
      "L2GasParamsUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "enqueueL2GasPrepaid",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
