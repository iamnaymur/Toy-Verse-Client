import React from "react";
import DynamicPageTitle from "../DynamicPageTitle/DynamicPageTitle";

const Blog = () => {
  return (
    <div className="container mx-auto mt-20">
      <DynamicPageTitle title="Blog" />
      <h1 className="text-center text-lg bold mb-10">
        Here is a short question and answer blog below.
      </h1>
      <div>
        <h1 className="text-2xl bold">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        <p className="text-xl">
          Access Token is a small code that contains a large amount of important
          data about the user, permissions and others. It is mainly used to
          verify if the user is the right one to use the server or the network
          he/she is trying to access. Refresh Token is something that helps to
          get a new access token each time the access token gets expired . It
          doesn’t event need any help from the user, it will get a new access
          token without any interaction . If someone make an API request and the
          token has expired already, he/she will get back a response so that he
          can understand . The tokens can be stored in the local storage,
          httpOnly cookies . I will not suggest someone to store the tokens on
          the local storage. The local storage should not be used to store
          confidential data like this, it is so risky! Rather, we can use the
          httpOnly cookies to store the token, it is much safer and a good
          option.
        </p>
      </div>
      <div>
        <h1 className="text-2xl bold">2. Compare SQL and NoSQL databases?</h1>
        <p className="text-xl">
          SQl database and NoSQL database has a significant differences between
          them. To begin with, SQL databases are mainly (RDBMS) Relational
          Database Management System. SQL database use a table structure to
          store data in an organized way. The SQL databases are mainly
          vertically scalable and it can get some complexity if someone tries to
          use the SQL database for horizontal scalability. On the other hand,
          NoSQL does not have any table structured rule and for that reason this
          database can handle data structures for easily and without any
          complexity. Mongodb database is a great example of NoSQL . Moreover,
          NoSQL databases are designed to be horizontally scalable. It can
          handle large amounts of data with high scalability and performance.{" "}
        </p>
      </div>
      <div>
        <h1 className="text-2xl bold">
          {" "}
          3. What is express js? What is Nest JS?
        </h1>
        <p className="text-xl">
          — Express js is mainly built on top of node.js. Express.js is the most
          popular web framework for Node.js. Express.js makes the whole thing
          much easier to understand and execute smoothly. It makes the process
          of building the web applications and APIs by providing routing,
          middleware. It is most popular for its middleware ecosystem and the
          easy usage of it. Same as expressJs, Nest JS is also a popular open
          source, backend framework built to make the whole process of coding
          much easier for the developers. Nowadays the expressJs is getting more
          recognition for its maintenance and the flexibility. It can be used
          with both modern javascript and typescript.
        </p>
      </div>
      <div>
        <h1 className="text-2xl bold">
          4. What is MongoDB aggregate and how does it work?
        </h1>
        <p className="text-xl">
          MongoDB aggregation actually means the process of applying a series of
          operations on a collection off documents to perform data analysis and
          transform each of them according to the need of the user. There are so
          many operations available in the mogoDB like sorting, filtering,
          grouping projecting and more. These things can make the data analysis
          system much easier and fast. You can process and transform or anything
          that you want to do with your data’s with these operations.{" "}
        </p>
      </div>
    </div>
  );
};

export default Blog;
