import React from "react";
import { Table } from "react-bootstrap";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container">
      <h2 className="mt-5">1.Difference between javascript and nodejs</h2>
      <p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="table-head">S.No</th>
              <th>Javascript</th>
              <th>NodeJS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                Javascript is a programming language that is used for writing
                scripts on the website.{" "}
              </td>
              <td>NodeJS is a Javascript runtime environment.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Javascript can only be run in the browsers.</td>
              <td>
                We can run Javascript outside the browser with the help of
                NodeJS.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>It is basically used on the client-side.</td>
              <td>It is mostly used on the server-side.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                Javascript is capable enough to add HTML and play with the DOM.{" "}
              </td>
              <td>Nodejs does not have capability to add HTML tags.</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Javascript is used in frontend development.</td>
              <td>Nodejs is used in server-side development.</td>
            </tr>
          </tbody>
        </Table>
      </p>

      <h2 className="mt-5">2. Differences between sql and nosql databases?</h2>

      <p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="table-head">S.No</th>
              <th>SQL</th>
              <th>NoSQL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
              <td>Non-relational or distributed database system.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>These databases have fixed or static or predefined schema</td>
              <td>They have dynamic schema</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                These databases are not suited for hierarchical data storage.
              </td>
              <td>
                These databases are best suited for hierarchical data storage.
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>These databases are best suited for complex queries</td>
              <td>These databases are not so good for complex queries</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Vertically Scalable</td>
              <td>Horizontally scalable</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Follows ACID property</td>
              <td>
                Follows CAP(consistency, availability, partition tolerance)
              </td>
            </tr>
          </tbody>
        </Table>
      </p>

      <h2 className="mt-5">
        3. When should you use nodejs and when should you use mongodb?
      </h2>

      <p>
        MongoDB and NodeJS are two different technologies. MonogDB is a database
        system which gives you a chance to efficiently store documents in a
        database and to perform operations like data updates, or to search
        documents by some criterias. and NodeJS's responsibilty is especially to
        execute your application.
      </p>

      <p>
        Nodejs is a Javascript engine that you can write any application you
        want with (by programming in the Javascript language). It runs your
        Javascript code. Most commonly, it is used to build servers that can
        respond to web requests, though it can be used for lots of other types
        of code too. and MongoDB is a database engine. Code within some
        application or server uses MongoDB to save, query or update data in a
        database. There are many web servers built with nodejs that will then
        use MongoDB for storing data.
      </p>
      <p className="mb-5">
        These two technologies are for different parts of a typical web server
        system. You don't substitute one for the other. Instead, you can use
        them together.
      </p>
    </div>
  );
};

export default Blogs;
