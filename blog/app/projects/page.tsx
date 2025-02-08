import { ProjectPosts } from 'app/components/posts'

export const metadata = {
  title: 'Projects',
  description: 'Read my projects.',
}

export default function Page() {
  return (
    <div className =  "bg-gray-100">
      <h1 className=" font-semibold text-2xl mb-8 tracking-tighter">My Projects</h1>
      <ProjectPosts />
    </div>
  )
}
