/**
 * Base API Client for LangGo Frontend
 * Configured to connect to ASP.NET Core backend or mock services
 */

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  status: number;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

  const headers = new Headers(options.headers || {});
  if (!headers.has('Content-Type') && !(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }

  try {
    const res = await fetch(url, {
      ...options,
      headers,
    });

    if (!res.ok) {
      let errorMessage = `HTTP Error ${res.status}`;
      try {
        const errJson = await res.json();
        errorMessage = errJson.message || errorMessage;
      } catch {
        // Fallback to text or default message
      }
      return { data: null, error: errorMessage, status: res.status };
    }

    const data: T = await res.json();
    return { data, error: null, status: res.status };
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : 'Lỗi kết nối mạng';
    return { data: null, error: errorMsg, status: 0 };
  }
}
