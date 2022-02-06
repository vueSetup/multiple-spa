/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_APP_PREVIEW: boolean;
  readonly VITE_APP_API_BASE_URL: string;
  readonly VITE_MOCK: boolean;
  readonly VITE_HTTP_MOCK: boolean;
  readonly VITE_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
