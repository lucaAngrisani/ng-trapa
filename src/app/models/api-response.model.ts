export interface ApiResponse<T> {
  operationResultCode?: number,
  operationResultDescription?: string,
  returnedObjectsNumber?: number,
  totalObjectsNumber?: number,
  payload: T
}
