# REST API and CKEditor 5 Real-Time Collaboration Showcase

## Project Overview

This repository demonstrates my expertise in configuring and testing REST APIs, with a focus on real-time collaboration features. It includes several projects and tasks, each addressing specific aspects of API integration and testing.

## Repository Structure

- `ckeditor5-realtime-sample/`: CKEditor 5 with real-time collaboration demo
- `jwt-token-endpoint/`: JWT token generation server
- `ckeditor5-custom-token/`: CKEditor 5 using custom token authentication
- `rest-api-proxy/`: Proxy tool for CKSource Cloud Services REST API
- `api-test-cases.pdf`: Comprehensive test cases for REST API endpoints

## Detailed Component Descriptions

### 1. CKEditor 5 with Real-Time Collaboration (ckeditor5-realtime-sample/)

This sample showcases CKEditor 5 configured for real-time collaboration:

- Fully functional editor with sidebar and presence list
- Integrated with CKSource Cloud Services for collaboration

### 2. JWT Token Endpoint (jwt-token-endpoint/)

A Node.js server providing JWT tokens:

- Runs on port 1337
- Generates valid JWTs for CKEditor 5 authentication

### 3. CKEditor 5 with Custom Token (ckeditor5-custom-token/)

Similar to the real-time sample, but uses custom token authentication:

- Demonstrates integration with the custom JWT token endpoint

### 4. REST API Proxy Tool (rest-api-proxy/)

A Node.js application for interacting with CKSource Cloud Services REST API:

- Runs on port 9001
- Implements secure request signature generation
- Supports endpoints for document management, user retrieval, comments, and suggestions

### 5. API Test Cases (api-test-cases.pdf)

Detailed test scenarios for REST API endpoints:

- Covers functionality and data accuracy verification
- Includes tests for document flushing, user retrieval, comments, and suggestions

## Setup and Usage Instructions

### CKEditor 5 Collaboration Sample

1. Open `ckeditor5-realtime-sample/index.html` in a web browser

### JWT Token Endpoint

1. Navigate to `jwt-token-endpoint/`
2. Run `npm install`
3. Start with `node token-endpoint.js`

### CKEditor 5 Custom Token

1. Go to `ckeditor5-custom-token/`
2. Run `npm install`
3. Launch with `npm run dev`
4. Access via http://localhost:3000 (or as indicated)

### REST API Proxy Tool

1. Enter `rest-api-proxy/` directory
2. Execute `npm install`
3. Start using `node api-proxy.js`
4. Test with these URLs:
   - Flush: http://localhost:9001/flush?document_id=your-document-id
   - Flush All: http://localhost:9001/flushall
   - Users: http://localhost:9001/users?document_id=your-document-id
   - Comments: http://localhost:9001/comments?document_id=your-document-id
   - Suggestions: http://localhost:9001/suggestions?document_id=your-document-id

## License

This project is released under the MIT License.

---

This repository provides a comprehensive demonstration of CKEditor 5 real-time collaboration features and CKSource Cloud Services REST API integration. Feel free to explore each component to understand the implementation details and testing methodologies.
