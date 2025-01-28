import { ProjectPosts } from 'app/components/posts'

export const metadata = {
  title: 'Projects',
  description: 'Read my project.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My project</h1>
      <ProjectPosts />
    </section>
  )
}
