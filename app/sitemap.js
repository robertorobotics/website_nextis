import { getAllPosts } from "@/content/posts";

export default function sitemap() {
    const baseUrl = "https://www.nextis.tech";

    const staticPages = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
        { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: `${baseUrl}/hardware`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ];

    const blogPosts = getAllPosts().map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticPages, ...blogPosts];
}
