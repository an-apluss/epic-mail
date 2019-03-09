
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../SERVER/server';

chai.use(chaiHttp);
chai.should();

describe('Test GET /', () => {
  it('Hit an endpoint and return it output', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        done();
      });
  });
});
