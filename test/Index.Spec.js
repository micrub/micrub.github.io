import { expect } from 'chai';
import Core from '../public/index';


describe('Core module exports', () => {

  it('should be instance of `Object` and has `Object` constructor.', () => {
    expect(Core).to.be.instanceOf(Object);
  })

})

