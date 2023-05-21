import React from 'react';
import useTtile from '../../hooks/useTitle';

const Blog = () => {

     useTtile("Blogs")

     return (
<div className="mx-14">
      <h1 className="text-4xl text-center font-medium mt-[80px]">Blogs</h1>
      <hr className="w-48 h-1 mx-auto my-10 bg-black" />

      <div className="all-blogs">
        <div className="border-2 my-3 p-5">
          <h1 className="text-2xl my-4">
          What is an access token and refresh token? How do they work and where should we store them on the client-side?
          </h1>
          <p>
          Access Token: An access token is a credential that grants an application or a user access to specific resources or services on a server. It is typically a string of characters generated by the server upon successful authentication and authorization. The token contains information such as the user's identity, permissions, and an expiration time. Access tokens are short-lived and have a limited lifespan, usually ranging from a few minutes to a few hours.
          </p>
        </div>

        <div className="border-2 my-3 p-5">
          <h1 className="text-2xl my-4">
          Compare SQL and NoSQL databases?
          </h1>
          <p>
            <p className='font-2xl font-bold'>SQL Database :</p>
            <ul className="list-disc">
              <li>MySQL: MySQL is one of the most popular open-source SQL databases. It is known for its reliability, scalability, and performance. MySQL is widely used for web applications, content management systems, and various other types of applications.</li>
              <li>
              Oracle Database: Oracle Database is a commercial SQL database known for its robustness, scalability, and high availability. It offers comprehensive features for managing large volumes of data and provides advanced security and performance optimizations. Oracle Database is widely used in enterprise environments.
              </li>
              <li>
              Microsoft SQL Server: Microsoft SQL Server is a popular SQL database primarily used on Windows platforms. It offers a range of features such as data warehousing, business intelligence, and integration with Microsoft's development tools. SQL Server is commonly used in Microsoft-centric environments and enterprise applications.
              </li>

              <p className='font-2xl font-bold py-5'>NoSQL Database :</p>

              <li>MongoDB: MongoDB is a popular document-oriented NoSQL database. It stores data in flexible, JSON-like documents, allowing for dynamic and schemaless data structures. MongoDB's scalability and ease of use make it a popular choice for web and mobile applications, content management systems, and real-time analytics.</li>
              <li>
              Apache Cassandra: Cassandra is a distributed and highly scalable NoSQL database designed to handle large amounts of data across commodity servers. It provides high availability and fault tolerance and is often used for time-series data, IoT applications, and use cases that require high write throughput and low latency.
              </li>
              <li>
              Amazon DynamoDB: DynamoDB is a fully managed NoSQL database service provided by Amazon Web Services (AWS). It delivers low-latency performance at any scale and provides features like automatic scaling, data encryption, and global replication. DynamoDB is commonly used for serverless architectures, gaming applications, and high-scale web applications.
              </li>
          
            </ul>
          </p>
        </div>

        <div className="border-2 my-3 p-5">
          <h1 className="text-2xl my-4">
           What is Nest JS ?
          </h1>
          <p>
            <ul className="list-disc">
              <li>Node.js: </li>
            </ul>{" "}
            <br />
            Node.js is a runtime environment for executing JavaScript code
            outside of a web browser. It provides a powerful set of features for
            building server-side applications, such as non-blocking I/O,
            event-driven architecture, and the ability to work with streams and
            buffers.Node.js is often used as a backend technology for building
            web applications, APIs, and microservices. It can also be used for
            other types of applications, such as desktop apps, command-line
            tools, and IoT devices.
          </p>{" "}
          <br /> <br />
          <p>
            {" "}
            <ul className="list-disc">

            <h1 className="text-2xl my-4">
            What is express js?
          </h1>

             
              <li>Express.js: </li>
            </ul>{" "}
            <br />
            Express.js is a web framework for Node.js that simplifies the
            process of building web applications. It provides a set of tools and
            utilities for handling HTTP requests, managing routes, and rendering
            views.Express.js is built on top of Node.js and provides an
            additional layer of abstraction that makes it easier to write web
            applications. It supports a wide range of middleware modules that
            can be used to add functionality to an application, such as
            authentication, logging, and error handling.
          </p>
        </div>

        <div className="border-2 my-3 p-5">
          <h1 className="text-2xl my-4">
          What is MongoDB aggregate and how does it work?
          </h1>

          <p>
          The aggregate function in MongoDB works by taking a pipeline approach. A pipeline is an array of stages, where each stage represents a specific operation or transformation to be applied to the input documents. The output of each stage is passed as input to the next stage, allowing for a series of data transformations to be performed.
          </p>
        </div>
      </div>
    </div>
          
     );
};

export default Blog;