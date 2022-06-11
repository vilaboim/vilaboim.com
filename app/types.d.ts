export interface LoaderData<T extends (...args: any[]) => any> {
  data: Awaited<ReturnType<T>>;
}
