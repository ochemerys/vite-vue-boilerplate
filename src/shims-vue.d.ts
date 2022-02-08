declare module "*.vue" {
  import type { DefineComponent } from "vue";
  export const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >;
}
