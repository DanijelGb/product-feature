# What breaks first if traffic increases 10x, and how would I fix it in the future?

At a 10× increase in traffic, using an in-memory database as the primary data store introduces scalability and reliability risks. Since in-memory database is limited by available RAM, increased data volume and concurrent access can lead to memory pressure and potential data loss. In addition, in-memory data is lost when the server restarts, reducing reliability. A more suitable evolution would be to use a persistent database (e.g. a cloud-hosted database) as the system of record. Persistent storage ensures data durability across restarts and is better suited to support a 10× increase in stored data, while in-memory storage can be retained as a caching layer for performance.

The system is a CRUD-based product API where shoppers primarily browse products and product details. Endpoints like GET /Products return full product details.
At 10x traffic, shoppers are mostly browsing back and forth between products. This will increase query costs and response sizes. The first bottleneck will be
database read performance. Retrieving all products in a single request will become slow and expensive, increasing response times and user frustration.
Large responses containing full product details will also increase network latency. To handle increased traffic several upgrades could be made.

1. Pagination - limits the number of products returned per request, reducing query cost and response size.
2. Caching - frequently accessed product data reduces repeated database reads and improves response times.
3. Read Replicas - a read-only database layer can be used to scale read operations independently from writes.
4. Splitting the catalog into categories - reduces the amount of data retrieved per request and improves user navigation.
5. Indexing - frequently queried fields (such as product ID or category) improves query performance.
6. Moving Heavy Fields - (e.g. long descriptions) to separate endpoints reduces payload size for common browsing requests.