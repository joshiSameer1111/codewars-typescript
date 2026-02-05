import {summation} from "./solution"
import {assert} from "chai"

describe('Testing...', function() {
  it('Basic Tests', () => {
    assert.equal(summation(1), 1)
    assert.equal(summation(8), 36)
    assert.equal(summation(22), 253)
    assert.equal(summation(100), 5050)
    assert.equal(summation(213), 22791)
  })
  
  it('Random tests', function() {
    const solution = (num: number) => { return [...Array(num+1).keys()].reduce((x,y)=>x+y) }
    [...Array(100)].forEach((e)=> {
      let rand: number = Math.floor(Math.random()*1000) + 1
      assert.equal(summation(rand), solution(rand))
    })
  })
})