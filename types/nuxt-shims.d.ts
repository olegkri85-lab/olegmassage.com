declare module '#imports' {
  // Fallback typings for auto-imports during linting
  export const useHead: any;
  export const useI18n: any;
  export const useLocalePath: any;
}

declare module '#app' {
  export const useHead: any;
  export const useRoute: any;
}

declare module '#i18n' {
  export const useLocalePath: any;
}

