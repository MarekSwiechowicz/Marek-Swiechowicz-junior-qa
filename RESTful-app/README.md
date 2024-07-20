# Cloud Services Proxy

This is a Node.js application that acts as a proxy to forward requests to CKEditor Cloud Services REST API.

## Requirements

- Node.js

## Setup

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:

```bash
npm install
```

## Usage

Use the following endpoints to interact with Cloud Services REST API:

- **Flush a document**: `/flush?document_id=test-document1`
- **Flush all documents**: `/flushall`
- **Get users of a document**: `/users?document_id=test-document1`
- **Get comments of a document**: `/comments?document_id=test-document1`
- **Get suggestions**: `/suggestions`

### Example

To flush a document:

```bash
curl "http://localhost:9001/flush?document_id=test-document1"
```
