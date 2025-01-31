import { ProjectPosts } from 'app/components/posts'
import Spline from '@splinetool/react-spline/next';


export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio | Parastou Ardebilianfard
      </h1>
      <p className="mb-4">
        {`Hello! I'm Parastou Ardebilianfard, a passionate Software Engineering student at Cal Poly SLO. With over 5 years of experience in building responsive web applications and creating intuitive user interfaces, I strive to deliver exceptional digital experiences.`}
      </p>
      <p className="mb-4">
        {` I specialize in React, Express, and backend development, and have had the privilege of working on projects like `}
      </p>
      <main>
      <Spline
        scene="https://prod.spline.design/AjsmFjC1hdAykLqb/scene.splinecode" 
        />
    </main>
      <div className="my-8">
        <ProjectPosts />
      </div>
    </section>
  )
}
