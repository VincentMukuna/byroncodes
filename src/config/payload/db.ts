import { postgresAdapter } from "@payloadcms/db-postgres";

import { env } from "@/env/server";

export const db = postgresAdapter({
  pool: {
    connectionString: env.DATABASE_URI || "",
  },
});
