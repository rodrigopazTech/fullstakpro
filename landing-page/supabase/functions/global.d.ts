// Declaraciones de tipos para Supabase Edge Functions (Deno runtime)
// Este archivo elimina los errores de TypeScript en el editor

declare namespace Deno {
  export interface Env {
    get(key: string): string | undefined;
    set(key: string, value: string): void;
    delete(key: string): void;
    has(key: string): boolean;
    toObject(): { [key: string]: string };
  }

  export const env: Env;

  export function serve(
    handler: (request: Request) => Response | Promise<Response>
  ): void;
}

declare function fetch(
  input: string | URL | Request,
  init?: RequestInit
): Promise<Response>;
