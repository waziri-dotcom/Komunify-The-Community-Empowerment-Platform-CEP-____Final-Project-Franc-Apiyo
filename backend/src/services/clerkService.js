const axios = require('axios');

const CLERK_API_KEY = process.env.CLERK_API_KEY || '';

async function verifyToken(token) {

  if (!token) return null;

  
  if (token.startsWith('clerk|')) {
    const id = token.split('|')[1];
    return { id, email: `${id}@example.com`, fullName: 'Clerk User' };
  }

  throw new Error('Clerk verification not implemented: install @clerk/clerk-sdk-node and implement verifyToken.');
}

module.exports = { verifyToken };
