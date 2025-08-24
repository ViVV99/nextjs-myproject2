export default async function SlugPage({params }) {
    const { slug } = await params;

    return `This is the ${slug} page`;
}