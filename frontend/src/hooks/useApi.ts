import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  propertiesApi, agentsApi, blogsApi, testimonialsApi,
  statsApi, heroSlidesApi, settingsApi, inquiriesApi, categoriesApi
} from "@/lib/api";

const API_URL = import.meta.env.VITE_API_URL?.replace("/api", "") || "http://localhost:5000";

export function imgUrl(path?: string) {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("/src") || path.startsWith("data:")) return path;
  return `${API_URL}${path}`;
}

export const useProperties = (params?: Record<string, string>) =>
  useQuery({ queryKey: ["properties", params], queryFn: () => propertiesApi.getAll(params) });

export const useProperty = (id: string) =>
  useQuery({ queryKey: ["property", id], queryFn: () => propertiesApi.getOne(id), enabled: !!id });

export const useAgents = () =>
  useQuery({ queryKey: ["agents"], queryFn: agentsApi.getAll });

export const useBlogs = () =>
  useQuery({ queryKey: ["blogs"], queryFn: blogsApi.getAll });

export const useTestimonials = () =>
  useQuery({ queryKey: ["testimonials"], queryFn: testimonialsApi.getAll });

export const useStats = () =>
  useQuery({ queryKey: ["stats"], queryFn: statsApi.getAll });

export const useHeroSlides = () =>
  useQuery({ queryKey: ["heroSlides"], queryFn: heroSlidesApi.getAll });

export const useSettings = () =>
  useQuery({ queryKey: ["settings"], queryFn: settingsApi.get });

export const useCategories = () =>
  useQuery({ queryKey: ["categories"], queryFn: categoriesApi.getAll });

// Admin hooks
export const useAdminProperties = () =>
  useQuery({ queryKey: ["admin-properties"], queryFn: () => propertiesApi.getAll() });

export const useAdminAgents = () =>
  useQuery({ queryKey: ["admin-agents"], queryFn: agentsApi.getAllAdmin });

export const useAdminBlogs = () =>
  useQuery({ queryKey: ["admin-blogs"], queryFn: blogsApi.getAllAdmin });

export const useAdminTestimonials = () =>
  useQuery({ queryKey: ["admin-testimonials"], queryFn: testimonialsApi.getAllAdmin });

export const useAdminHeroSlides = () =>
  useQuery({ queryKey: ["admin-hero-slides"], queryFn: heroSlidesApi.getAllAdmin });

export const useAdminInquiries = () =>
  useQuery({ queryKey: ["admin-inquiries"], queryFn: inquiriesApi.getAll });

export function useDeleteMutation(key: string, deleteFn: (id: string) => Promise<unknown>) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: deleteFn,
    onSuccess: () => qc.invalidateQueries({ queryKey: [key] }),
  });
}
