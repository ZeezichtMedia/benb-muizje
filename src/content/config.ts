import { defineCollection, z } from 'astro:content';

const siteCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Optional sections based on page type
        hero: z.object({
            title: z.string(),
            subtitle: z.string(),
            image: z.string().optional(),
            ctaPrimary: z.string(),
            ctaSecondary: z.string(),
        }).optional(),
        highlights: z.object({
            title: z.string(),
            items: z.array(z.object({
                title: z.string(),
                desc: z.string(),
                icon: z.string(),
            })).optional(),
        }).optional(),
        reviews: z.object({
            title: z.string(),
            items: z.array(z.object({
                name: z.string(),
                date: z.string(),
                text: z.string(),
                rating: z.number(),
            })).optional(),
        }).optional(),
        about: z.object({
            title: z.string(),
            text: z.array(z.string()),
        }).optional(),
        features: z.object({
            title: z.string(),
            subtitle: z.string(),
            items: z.array(z.object({
                icon: z.string(),
                title: z.string(),
                desc: z.string(),
            })),
        }).optional(),
        location: z.object({
            title: z.string(),
            subtitle: z.string(),
            items: z.array(z.object({
                image: z.string().optional(),
                title: z.string(),
                desc: z.string(),
            })),
        }).optional(),
        gallery: z.array(z.object({
            src: z.string(),
            alt: z.string(),
            caption: z.string().optional(),
        })).optional(),
        rates: z.object({
            title: z.string(),
            subtitle: z.string().optional(),
            prices: z.array(z.object({
                period: z.string(),
                weekPrice: z.string().optional(),
                weekendPrice: z.string().optional(),
                midweekPrice: z.string().optional(),
                notes: z.string().optional(),
            })),
            additionalCosts: z.array(z.object({
                item: z.string(),
                price: z.string(),
            })),
            includes: z.array(z.string()),
            policies: z.array(z.string()),
        }).optional(),
    }),
});

export const collections = {
    site: siteCollection,
};
