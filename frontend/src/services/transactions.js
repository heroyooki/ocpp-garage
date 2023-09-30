import { request } from "@/api";

const endpoint = "transactions";

export function listTransactions(arg) {
  let { page = 1 } = arg || {};
  let { search = "" } = arg || {};
  return request.get(`/${endpoint}?page=${page}&search=${search}`);
}

export function remoteStartTransaction({ stationId, connectorId }) {
  return request.post(`/${endpoint}/${stationId}/connectors/${connectorId}`);
}
