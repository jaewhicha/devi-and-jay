export default function BlogEntry({ params }: { params: { slug: string } }) {
    return (
        <div>
            <h1>Blog Entry - {params.slug}</h1>
            <p>This is the blog entry for {params.slug}.</p>
        </div>
    )
}