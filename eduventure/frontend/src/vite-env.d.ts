/// <reference types="vite/client" />
/// <reference types="vite/client" />

// Optional: Extend Vite's ImportMetaEnv for your custom environment variables

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string // example of a custom env variable
  // add more variables here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
