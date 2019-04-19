const should = require('chai').should();
const request = require('supertest');

const config = require('./config.test');

const app = require('../app');
const modules = require('../module');

let user1TokenJWT;
let user2TokenJWT;

// Mongodb connection
before((done) => {
  console.log('mongoose connection');
  modules.initializeMongooseConnection().then(() => done());
});

// Clear DB b4 running test cases
before((done) => {
  modules.noteModel.remove({}, (error) => {
    if (error) {
      return done(error);
    } else {
      done();
    }
  })
});

//Get JWT Token from auth service for user 1
before((done) => {
  let user = config.listOfUsers.user_1_valid;

  modules.signJWTToken(user, config.auth.secret, config.auth.expires_hour, (error, token) => {
    if (error) {
      return done(error);
    } else {
      user1TokenJWT = token;
      done();
    }
  });

});

//Get JWT Token from auth service for user 2
before((done) => {
  let user = config.listOfUsers.user_2_valid;

  modules.signJWTToken(user, config.auth.secret, config.auth.expires_hour, (error, token) => {
    if (error) {
      return done(error);
    } else {
      user2TokenJWT = token;
      console.log('token2 generated');
      done();
    }
  });
});

describe('Testing Note Creation', () => {

  //positive
  it('Should create a note for user', (done) => {

    let note = config.listOfNotes.note_1_valid;
    console.log('starting')
    request(app)
      .post(`/api/v1/notes/?userId=${note.userId}`)
      .set('Authorization', `Bearer ${user1TokenJWT}`)
      .send(note)
      .expect(201)
      .end((error, response) => {

        if (error) {
          return done(error);
        } else {

          let noteAdded = response.body.note;

          noteAdded.should.not.equal(undefined);
          noteAdded.should.not.equal(null);

          noteAdded.title.should.equal(note.title, 'Title of the note does not match');

          done();
        }

      });

  });

  //positive
  it('Should create another note for another user', (done) => {

    let note = config.listOfNotes.note_2_valid;

    request(app)
      .post(`/api/v1/notes/?userId=${note.userId}`)
      .set('Authorization', `Bearer ${user2TokenJWT}`)
      .send(note)
      .expect(201)
      .end((error, response) => {

        if (error) {
          return done(error);
        } else {

          let noteAdded = response.body.note;

          noteAdded.should.not.equal(undefined);
          noteAdded.should.not.equal(null);

          noteAdded.title.should.equal(note.title, 'Title of the note does not match');

          done();
        }

      });

  });

});

describe('Testing Note Retrieval', () => {

  //positive
  it('get all notes for user 1', (done) => {
    let note = config.listOfNotes.note_1_valid;

    request(app)
      .get(`/api/v1/notes/?userId=${note.userId}`)
      .set('Authorization', `Bearer ${user1TokenJWT}`)
      .expect(200)
      .end((error, response) => {

        if (error) {
          return done(error);
        } else {

          let notes = response.body.notes;
          notes.should.be.an('array');
          notes.length.should.be.above(0);

          notes[0].title.should.equal(note.title, 'Title of note does not match for user 1');

          done();
        }

      });
  });

  //positive
  it('get all notes for user 2', (done) => {
    let note = config.listOfNotes.note_2_valid;

    request(app)
      .get(`/api/v1/notes/?userId=${note.userId}`)
      .set('Authorization', `Bearer ${user2TokenJWT}`)
      .expect(200)
      .end((error, response) => {

        if (error) {
          return done(error);
        } else {

          let notes = response.body.notes;
          notes.should.be.an('array');
          notes.length.should.be.above(0);

          notes[0].title.should.equal(note.title, 'Title of note does not match for user 1');

          done();
        }

      });
  });

});

describe('Testing Note update', () => {
  it('Should update note for user1', (done) => {

  });
  
});