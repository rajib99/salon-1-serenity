import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "687fea7167423de1b7ae0e5f", 
  requiresAuth: true // Ensure authentication is required for all operations
});
