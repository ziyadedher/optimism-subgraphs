import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import { StateBatchAppended } from "../generated/schema"
import { StateBatchAppended as StateBatchAppendedEvent } from "../generated/StateCommitmentChain/StateCommitmentChain"
import { handleStateBatchAppended } from "../src/state-commitment-chain"
import { createStateBatchAppendedEvent } from "./state-commitment-chain-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _batchIndex = BigInt.fromI32(234)
    let _batchRoot = Bytes.fromI32(1234567890)
    let _batchSize = BigInt.fromI32(234)
    let _prevTotalElements = BigInt.fromI32(234)
    let _extraData = Bytes.fromI32(1234567890)
    let newStateBatchAppendedEvent = createStateBatchAppendedEvent(
      _batchIndex,
      _batchRoot,
      _batchSize,
      _prevTotalElements,
      _extraData
    )
    handleStateBatchAppended(newStateBatchAppendedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("StateBatchAppended created and stored", () => {
    assert.entityCount("StateBatchAppended", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "StateBatchAppended",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_batchIndex",
      "234"
    )
    assert.fieldEquals(
      "StateBatchAppended",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_batchRoot",
      "1234567890"
    )
    assert.fieldEquals(
      "StateBatchAppended",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_batchSize",
      "234"
    )
    assert.fieldEquals(
      "StateBatchAppended",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_prevTotalElements",
      "234"
    )
    assert.fieldEquals(
      "StateBatchAppended",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_extraData",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
