import { ClientConfig, SanityClient, createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const config: ClientConfig = {
    projectId: import.meta.env.VITE_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-10-31', // use current date (YYYY-MM-DD) to target the latest API version
    useCdn: true, // set to `false` to bypass the edge cache
    // token: import.meta.env.VITE_APP_SANITY_SECRET_TOKEN, // (Optional) Only if you want to update content with the client
    ignoreBrowserTokenWarning: true,
}

export const client: SanityClient = createClient(config);

const builder: ImageUrlBuilder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource): string => builder.image(source).url();
