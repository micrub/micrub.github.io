import { expect } from 'chai';
import core from '../tools/lib/index';

describe('Core module exports', () => {

  it('should be instance of `Object` and has `Object` constructor.', () => {
    expect(core).to.be.instanceOf(Object);
  })
describe('TocBuilder class', () => {
  let TocBuilder = core.TocBuilder;
  let toc = new TocBuilder('content/');
  it('should be instance of `Object` and has `Object` constructor.', () => {
    expect(TocBuilder).to.be.instanceOf(Object);
    expect(TocBuilder.constructor.name).to.be.eq('Function');
    expect(toc).to.be.instanceOf(Object);
    expect(toc.constructor.name).to.be.eq('TocBuilder');
  })
  it('should have path property.', () => {
    expect(typeof toc.path === 'string').to.be.true;
  })
  it('should have build property.', () => {
    expect(typeof toc.build === 'function').to.be.true;
  })
  it('should handle build .', (done) => {
    toc.build((err, result)=>{
      expect(err).to.be.null;
      done();
    })
  })
})

})

