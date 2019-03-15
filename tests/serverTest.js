import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server/server';

chai.use(chaiHttp);
chai.should();

describe('Index /', () => {
  it('Hit an endpoint and return it output', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        done();
      });
  });
});
