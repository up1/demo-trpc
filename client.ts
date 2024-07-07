import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './app-router';
const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
});

async function greet() {
  const greeting = await client.greeting.query({ name: 'world' });
  console.log(greeting); // Should log "Hello world"
}

greet();