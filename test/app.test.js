const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/app"); 
const Greeter = require("../src/greeter");

chai.use(chaiHttp);
const expect = chai.expect;

describe("Greeter App", () => {
  describe("HTTP Endpoints", () => {
    it("should greet with a name and return 200 status", (done) => {
      chai
        .request(app)
        .get("/greet/saheba")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.include("Saheba!");
          done();
        });
    });

    it("should handle spaces in name parameter", (done) => {
      chai
        .request(app)
        .get("/greet/ saheba ") // Testing with leading and trailing spaces
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.include("Saheba!");
          done();
        });
    });

    it("should return 400 for empty name", (done) => {
      chai
        .request(app)
        .get("/greet/")
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.text).to.include(
            "Name cannot be empty and should be a string"
          );
          done();
        });
    });
  });
});
