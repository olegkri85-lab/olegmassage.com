export const useTwitterCards = () => {
  useHead({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@massage_in_schweiz" },
    ],
  });
};
