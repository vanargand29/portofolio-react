/**
 * API Service for Portfolio Frontend (React)
 * Connects to Cloudflare Workers backend API: https://api.mocharisandijayanto.my.id
 */

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL?.trim() || 'https://api.mocharisandijayanto.my.id';

/**
 * Resolves image paths:
 * - If full URL (http:// or https://), returns directly
 * - If backend KV upload path (/api/images/...), prepends API_BASE_URL if needed
 * - If local asset (/img/...), maps legacy .png to modern .webp when available
 */
export function resolveImageUrl(url) {
  if (!url) return '';

  let resolved = String(url).trim();

  // Prefer modern WebP format for local portfolio images
  if (resolved.startsWith('/img/')) {
    resolved = resolved.replace(/\.(png|jpe?g)$/i, '.webp');
  }

  if (resolved.startsWith('http://') || resolved.startsWith('https://')) {
    return resolved;
  }
  if (resolved.startsWith('/api/images/')) {
    return `${API_BASE_URL}${resolved}`;
  }
  return resolved;
}

/**
 * Fetch all projects from the API.
 * Returns array of projects or null on failure.
 */
export async function fetchProjects() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/projects`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: Failed to fetch projects`);
    }
    const json = await res.json();
    return json.data?.projects || null;
  } catch (err) {
    console.warn('[API] fetchProjects fallback to static data:', err.message);
    return null;
  }
}

/**
 * Fetch all resume data (experience, education, certifications) from the API.
 * Returns object { experience, education, certifications } or null on failure.
 */
export async function fetchResume() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/resume`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: Failed to fetch resume`);
    }
    const json = await res.json();
    return json.data || null;
  } catch (err) {
    console.warn('[API] fetchResume fallback to static data:', err.message);
    return null;
  }
}

/**
 * Fetch certifications directly from the API.
 */
export async function fetchCertifications() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/certifications`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: Failed to fetch certifications`);
    }
    const json = await res.json();
    return json.data?.certifications || null;
  } catch (err) {
    console.warn('[API] fetchCertifications fallback to static data:', err.message);
    return null;
  }
}
