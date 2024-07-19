// vite-env.d.ts
interface ImportMetaEnv {
    readonly VITE_X_RAPIDAPI_KEY: string;
    readonly VITE_X_RAPIDAPI_HOST: string;
    readonly VITE_AUTHORIZATION: string;
    // add more environment variables as needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
