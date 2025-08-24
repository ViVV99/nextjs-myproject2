export default async function NewsDetailsPage({params }) {
    const { id } = await params;

    return `This is the ${id} page`;
}