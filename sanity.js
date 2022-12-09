import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient(
    {
        projectId: "zbq153eu",
        dataset: "production",
        useCdn: true,
        apiVersion: "2022-11-27"
    }
); 

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;